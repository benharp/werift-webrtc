import { ChildProcess, exec } from "child_process";
import { createSocket } from "dgram";
import { AcceptFn } from "protoo-server";
import { RTCPeerConnection, MediaStreamTrack, RtpPacket } from "../../";

export class mediachannel_addTrack_answer {
  pc!: RTCPeerConnection;
  child!: ChildProcess;
  udp = createSocket("udp4");

  async exec(type: string, payload: any, accept: AcceptFn) {
    switch (type) {
      case "init":
        {
          this.udp.bind(5000);

          this.pc = new RTCPeerConnection({
            iceConfig: { stunServer: ["stun.l.google.com", 19302] },
          });
          const track = new MediaStreamTrack({ kind: "video" });
          this.pc.addTrack(track);
          await this.pc.setLocalDescription(await this.pc.createOffer());
          accept(this.pc.localDescription);

          this.pc.connectionStateChange
            .watch((state) => state === "connected")
            .then(() => {
              this.udp.on("message", (data) => {
                const rtp = RtpPacket.deSerialize(data);
                rtp.header.payloadType = track.codec.payloadType;
                track.writeRtp(rtp);
              });
              this.child = exec(
                "gst-launch-1.0 videotestsrc ! video/x-raw,width=640,height=480,format=I420 ! vp8enc error-resilient=partitions keyframe-max-dist=10 auto-alt-ref=true cpu-used=5 deadline=1 ! rtpvp8pay ! udpsink host=127.0.0.1 port=5000"
              );
            });
        }
        break;
      case "candidate":
        {
          await this.pc.addIceCandidate(payload);
          accept({});
        }
        break;
      case "answer":
        {
          await this.pc.setRemoteDescription(payload);
          accept({});
        }
        break;
      case "done":
        {
          this.udp.close();
          process.kill(this.child.pid + 1);
        }
        break;
    }
  }
}
