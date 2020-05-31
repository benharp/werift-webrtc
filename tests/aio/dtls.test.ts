import { RTCIceGatherer, RTCIceTransport, RTCCertificate } from "../../src";
import WS from "ws";
import { PythonShell } from "python-shell";
import {
  candidateToIce,
  candidateFromIce,
  RTCIceParameters,
} from "../../src/rtc/transport/ice";
import { Candidate } from "../../src/vendor/icet";
import {
  RTCDtlsTransport,
  RTCDtlsParameters,
  RTCDtlsFingerprint,
} from "../../src/rtc/transport/dtls";
import { sleep } from "../../src/utils";
const WEBSOCKET_URI = "ws://127.0.0.1:8765";

type CandidateMessage = {
  candidates: string[];
  password: string;
  username: string;
};

type FingerprintMessage = {
  fingerprints: string[];
  role: string;
};

describe("aio", () => {
  test(
    "aio_dtls",
    async (done) => {
      const server = PythonShell.run(
        "python/signaling-server.py",
        undefined,
        (err) => {
          console.log(err);
        }
      );
      const client = PythonShell.run(
        "python/dtls/answer.py",
        undefined,
        (err) => {
          console.log(err);
        }
      );

      const gatherer = new RTCIceGatherer();
      const transport = new RTCIceTransport(gatherer);
      await gatherer.gather();

      await sleep(1000);
      const ws = new WS(WEBSOCKET_URI);
      await new Promise((r) => ws.once("open", r));

      ws.send(
        JSON.stringify({
          candidates: gatherer
            .getLocalCandidates()
            .map((v) => candidateToIce(v).toSdp()),
          password: transport.iceGather.getLocalParameters().password,
          username: transport.iceGather.getLocalParameters().usernameFragment,
        })
      );

      const candidate: string = await new Promise((r) =>
        ws.once("message", (data) => r(data))
      );
      const { candidates, username, password } = JSON.parse(
        candidate
      ) as CandidateMessage;
      candidates.forEach((sdp) => {
        transport.addRemoteCandidate(candidateFromIce(Candidate.fromSdp(sdp)));
      });
      const params = new RTCIceParameters();
      params.password = password;
      params.usernameFragment = username;

      await transport.start(params);

      console.log("ice connected");

      const fingerprint: string = await new Promise((r) =>
        ws.once("message", (data) => r(data))
      );
      const { fingerprints, role } = JSON.parse(
        fingerprint
      ) as FingerprintMessage;

      const certificate = RTCCertificate.generateCertificate();
      const session = new RTCDtlsTransport(transport, [certificate]);
      class Dummy {
        data: Buffer[] = [];
        handleData(buf: Buffer) {
          this.data.push(buf);
        }
      }
      const receiver = new Dummy();
      session.registerDataReceiver(receiver as any);
      ws.send(
        JSON.stringify({
          fingerprints: session
            .getLocalParameters()
            .fingerprints.map((v) => `${v.algorithm} ${v.value}`),
          role: session.getLocalParameters().role,
        })
      );

      const dtlsParams = new RTCDtlsParameters(
        fingerprints.map((v) => {
          const [algorithm, value] = v.split(" ");
          return new RTCDtlsFingerprint(algorithm, value);
        }),
        role as any
      );
      await session.start(dtlsParams);

      await sleep(100);
      const msg = receiver.data;
      console.log(msg);
      server.kill();
      client.kill();
      ws.close();
      done();
    },
    1000 * 60 * 10
  );
});