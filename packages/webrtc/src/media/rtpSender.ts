import { randomBytes } from "crypto";
import debug from "debug";
import { jspack } from "jspack";
import Event from "rx.mini";
import * as uuid from "uuid";
import {
  Extension,
  GenericNack,
  RtcpPacket,
  RtcpRrPacket,
  RtcpSenderInfo,
  RtcpSourceDescriptionPacket,
  RtcpSrPacket,
  RtcpTransportLayerFeedback,
  RtpHeader,
  RtpPacket,
  SourceDescriptionChunk,
  SourceDescriptionItem,
  TransportWideCC,
} from "../../../rtp/src";
import { bufferWriter } from "../../../rtp/src/helper";
import { RTP_EXTENSION_URI } from "../extension/rtpExtension";
import { sleep } from "../helper";
import { RTCDtlsTransport } from "../transport/dtls";
import { Kind } from "../typings/domain";
import { milliTime, ntpTime, uint16Add, uint32Add } from "../utils";
import { RTCRtpParameters } from "./parameters";
import { SenderBandwidthEstimator, SentInfo } from "./senderBWE/senderBWE";
import { MediaStreamTrack } from "./track";

const log = debug("werift:webrtc:rtpSender");

const RTP_HISTORY_SIZE = 128;
const RTT_ALPHA = 0.85;

export class RTCRtpSender {
  readonly type = "sender";
  readonly kind =
    typeof this.trackOrKind === "string"
      ? this.trackOrKind
      : this.trackOrKind.kind;
  readonly ssrc = jspack.Unpack("!L", randomBytes(4))[0];
  readonly streamId = uuid.v4();
  readonly trackId = uuid.v4();
  readonly onReady = new Event();
  readonly onRtcp = new Event<[RtcpPacket]>();
  readonly senderBWE = new SenderBandwidthEstimator();

  private cname?: string;

  // # stats
  private lsr?: bigint;
  private lsrTime?: number;
  private ntpTimestamp = 0n;
  private rtpTimestamp = 0;
  private octetCount = 0;
  private packetCount = 0;
  private rtt?: number;

  // rtp
  private sequenceNumber?: number;
  private timestamp?: number;
  private timestampOffset = 0;
  private seqOffset = 0;
  private rtpCache: RtpPacket[] = [];

  parameters?: RTCRtpParameters;

  constructor(
    public trackOrKind: Kind | MediaStreamTrack,
    public dtlsTransport: RTCDtlsTransport
  ) {
    dtlsTransport.onStateChange.subscribe((state) => {
      if (state === "connected") {
        this.onReady.execute();
      }
    });
    if (trackOrKind instanceof MediaStreamTrack) {
      this.registerTrack(trackOrKind);
    }
  }

  private registerTrack(track: MediaStreamTrack) {
    track._onWriteRtp.subscribe((rtp) => {
      if (this.parameters) this.sendRtp(rtp);
    });
  }

  get ready() {
    return this.dtlsTransport.state === "connected";
  }

  stop() {
    this.rtcpRunner = false;
  }

  rtcpRunner = false;
  async runRtcp() {
    if (this.rtcpRunner) return;
    this.rtcpRunner = true;

    while (this.rtcpRunner) {
      await sleep(500 + Math.random() * 1000);

      const packets: RtcpPacket[] = [
        new RtcpSrPacket({
          ssrc: this.ssrc,
          senderInfo: new RtcpSenderInfo({
            ntpTimestamp: this.ntpTimestamp,
            rtpTimestamp: this.rtpTimestamp,
            packetCount: this.packetCount,
            octetCount: this.octetCount,
          }),
        }),
      ];
      if (this.cname) {
        packets.push(
          new RtcpSourceDescriptionPacket({
            chunks: [
              new SourceDescriptionChunk({
                source: this.ssrc,
                items: [
                  new SourceDescriptionItem({ type: 1, text: this.cname }),
                ],
              }),
            ],
          })
        );
      }
      this.lsr = (this.ntpTimestamp >> 16n) & 0xffffffffn;
      this.lsrTime = Date.now() / 1000;

      try {
        await this.dtlsTransport.sendRtcp(packets);
      } catch (error) {
        await sleep(500 + Math.random() * 1000);
      }
    }
  }

  replaceTrack(track: MediaStreamTrack) {
    if (track.cacheHeader) this.replaceRTP(track.cacheHeader);
    this.registerTrack(track);
  }

  private replaceRTP({ sequenceNumber, ssrc, timestamp }: RtpHeader) {
    if (this.sequenceNumber) {
      this.seqOffset = uint16Add(this.sequenceNumber, -sequenceNumber);
    }
    if (this.timestamp) {
      this.timestampOffset = Number(
        uint32Add(BigInt(this.timestamp), BigInt(-timestamp))
      );
    }
    this.rtpCache = [];
    log(
      "replaceRTP",
      this.ssrc,
      ssrc,
      this.sequenceNumber,
      sequenceNumber,
      this.seqOffset
    );
  }

  sendRtp(rtp: Buffer | RtpPacket) {
    if (!this.ready || !this.parameters) return;

    rtp = Buffer.isBuffer(rtp) ? RtpPacket.deSerialize(rtp) : rtp;

    const header = rtp.header;
    header.ssrc = this.ssrc;
    // todo : header.payloadType=parameters.codecs
    header.timestamp = Number(
      uint32Add(BigInt(header.timestamp), BigInt(this.timestampOffset))
    );
    header.sequenceNumber = uint16Add(header.sequenceNumber, this.seqOffset);
    this.timestamp = header.timestamp;
    this.sequenceNumber = header.sequenceNumber;

    this.cname = this.parameters.rtcp.cname;

    header.extensions = this.parameters.headerExtensions
      .map((extension) => {
        let payload: Buffer | undefined;
        switch (extension.uri) {
          case RTP_EXTENSION_URI.sdesMid:
            if (this.parameters?.muxId)
              payload = Buffer.from(this.parameters.muxId);
            break;
          case RTP_EXTENSION_URI.sdesRTPStreamID:
            if (this.parameters?.rid)
              payload = Buffer.from(this.parameters.rid);
            break;
          case RTP_EXTENSION_URI.transportWideCC:
            {
              this.dtlsTransport.transportSequenceNumber = uint16Add(
                this.dtlsTransport.transportSequenceNumber,
                1
              );
              payload = bufferWriter(
                [2],
                [this.dtlsTransport.transportSequenceNumber]
              );
            }
            break;
          case RTP_EXTENSION_URI.absSendTime:
            const buf = Buffer.alloc(3);
            const time = (ntpTime() >> 14n) & 0x00ffffffn;
            buf.writeUIntBE(Number(time), 0, 3);
            payload = buf;
            break;
        }
        if (payload) return { id: extension.id, payload };
      })
      .filter((v) => v) as Extension[];

    this.ntpTimestamp = ntpTime();
    this.rtpTimestamp = rtp.header.timestamp;
    this.octetCount += rtp.payload.length;
    this.packetCount = Number(uint32Add(BigInt(this.packetCount), 1n));

    rtp.header = header;
    this.rtpCache.push(rtp);
    this.rtpCache = this.rtpCache.slice(-RTP_HISTORY_SIZE);

    const size = this.dtlsTransport.sendRtp(rtp.payload, header);

    this.runRtcp();
    const sentInfo: SentInfo = {
      wideSeq: this.dtlsTransport.transportSequenceNumber,
      size,
      sendingAtMs: milliTime(),
      sentAtMs: milliTime(),
    };
    this.senderBWE.rtpPacketSent(sentInfo);
  }

  handleRtcpPacket(rtcpPacket: RtcpPacket) {
    switch (rtcpPacket.type) {
      case RtcpSrPacket.type:
      case RtcpRrPacket.type:
        {
          const packet = rtcpPacket as RtcpSrPacket | RtcpRrPacket;
          packet.reports
            .filter((report) => report.ssrc === this.ssrc)
            .forEach((report) => {
              if (this.lsr === BigInt(report.lsr) && report.dlsr) {
                const rtt =
                  Date.now() / 1000 - this.lsrTime! - report.dlsr / 65536;
                if (this.rtt === undefined) {
                  this.rtt = rtt;
                } else {
                  this.rtt = RTT_ALPHA * this.rtt + (1 - RTT_ALPHA) * rtt;
                }
              }
            });
        }
        break;
      case RtcpTransportLayerFeedback.type:
        {
          const packet = rtcpPacket as RtcpTransportLayerFeedback;
          switch (packet.feedback.count) {
            case TransportWideCC.count:
              {
                const feedback = packet.feedback as TransportWideCC;
                this.senderBWE.receiveTWCC(feedback);
              }
              break;
            case GenericNack.count:
              {
                const feedback = packet.feedback as GenericNack;

                feedback.lost.forEach((seqNum) => {
                  const rtp = this.rtpCache.find(
                    (rtp) => rtp.header.sequenceNumber === seqNum
                  );
                  if (rtp) {
                    this.dtlsTransport.sendRtp(rtp.payload, rtp.header);
                  }
                });
              }
              break;
          }
        }
        break;
    }
    this.onRtcp.execute(rtcpPacket);
  }
}
