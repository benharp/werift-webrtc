import { RtcpPacket } from "../../vendor/rtp/rtcp/rtcp";
import { RtcpSrPacket } from "../../vendor/rtp/rtcp/sr";
import { RtpPacket } from "../../vendor/rtp/rtp/rtp";
import { v4 as uuid } from "uuid";
import Event from "rx.mini";

export class RTCRtpReceiver {
  uuid = uuid();
  onRtp = new Event<RtpPacket>();

  // # RTCP
  lsr: { [key: number]: BigInt } = {};
  lsrTime: { [key: number]: number } = {};
  private rtcpSsrc?: number;

  constructor(public kind: string) {}

  setRtcpSsrc(ssrc: number) {
    this.rtcpSsrc = ssrc;
  }

  handleRtcpPackets = (packets: RtcpPacket[]) => {
    packets.forEach((packet) => {
      switch (packet.type) {
        case RtcpSrPacket.type:
          const sr = packet as RtcpSrPacket;
          this.lsr[sr.ssrc] =
            (sr.senderInfo.ntpTimestamp >> BigInt(16)) & BigInt(0xffffffff);
          this.lsrTime[packet.ssrc] = Date.now() / 1000;
          break;
      }
    });
  };

  handleRtpPacket = (packet: RtpPacket) => {
    this.onRtp.execute(packet);
  };
}