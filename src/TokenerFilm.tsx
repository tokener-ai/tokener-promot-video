import { Audio, Video } from "@remotion/media";
import { AbsoluteFill, Freeze, Img, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { TokenerReveal } from "./TokenerReveal";
import { FilmCaptions } from "./FilmCaptions";
import { TokenerCover } from "./TokenerCover";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const models = [
  ["Claude", "claude-color"], ["ChatGPT", "openai"], ["Grok", "grok"],
  ["Kimi", "kimi"], ["GLM", "zhipu-color"], ["DeepSeek", "deepseek-color"],
];

const Opening = () => {
  const f = useCurrentFrame() * (21 / 12);
  return <AbsoluteFill style={{ background: "#101112", color: "white", padding: 120 }}>
    <div style={{ position: "absolute", top: 170, left: 120, right: 120, fontSize: 104, fontWeight: 900, letterSpacing: -1, opacity: interpolate(f, [0, 25], [0, 1], clamp) }}>{f < 270 ? "選択肢は、増え続ける。" : "接続。残高。利用状況。"}</div>
    <div style={{ position: "absolute", left: 120, right: 120, top: 430, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 44 }}>
      {models.map(([name, logo], i) => <div key={name} style={{ display: "flex", alignItems: "center", gap: 24, height: 130, fontSize: 58, opacity: interpolate(f, [30 + i * 28, 52 + i * 28], [0, 1], clamp) }}><Img src={staticFile(`providers/${logo}.svg`)} style={{ width: 70, height: 70, objectFit: "contain", filter: i > 0 && i < 4 ? "brightness(0) invert(1)" : undefined }} />{name}</div>)}
    </div>
    <div style={{ position: "absolute", left: 1269, top: 758, fontSize: 36, color: "#a7a7ad", opacity: interpolate(f, [194, 214], [0, 1], clamp) }}>ほかにも、多数。</div>
    {f >= 300 && <div style={{ position: "absolute", left: 120, bottom: 145, display: "flex", gap: 24 }}>{["API", "残高", "利用状況"].map((label, i) => <div key={label} style={{ border: "1px solid #555", padding: "24px 50px", fontSize: 42, opacity: interpolate(f, [310 + i * 42, 326 + i * 42], [0, 1], clamp) }}>{label}</div>)}</div>}
  </AbsoluteFill>;
};

const Footage = ({ title, start, subtitle }: { title: string; start: number; subtitle: string }) => <AbsoluteFill style={{ background: "#f5f5f5", overflow: "hidden" }}>
  <Img src={staticFile("brand/screen-watermark.png")} style={{ position: "absolute", left: 640, top: 0, width: 1280, height: 821 }} />
  <div style={{ position: "absolute", left: 64, top: 32 }}>
    <div style={{ fontSize: 50, lineHeight: "66px", fontWeight: 600, letterSpacing: -1 }}>{title}</div>
    <div style={{ fontSize: 20, lineHeight: "24px", fontWeight: 400, color: "#0009", marginTop: 10 }}>{subtitle}</div>
  </div>
  <div style={{ position: "absolute", left: 64, top: 157, width: 1792, borderRadius: "16px 16px 0 0", overflow: "hidden", boxShadow: "0 20px 24px -4px #09090b14, 0 8px 8px -4px #09090b08", border: "5px solid white", borderBottom: 0 }}>
    <Video src={staticFile("footage/tokener-screen.mp4")} trimBefore={start * 30} muted style={{ display: "block", width: "100%", aspectRatio: "3840 / 1980" }} />
  </div>
</AbsoluteFill>;

const DifyConnection = () => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{ background: "#f5f5f7", justifyContent: "center", alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 100, marginBottom: 105 }}>
      <Img src={staticFile("brand/logo-lockup.svg")} style={{ width: 540 }} />
      <svg width="260" height="80" viewBox="0 0 260 80" style={{ overflow: "visible" }}>
        <path d="M0 40 H240" fill="none" stroke="#0033FF" strokeWidth="6" pathLength="1" strokeDasharray="1" strokeDashoffset={interpolate(f, [5, 28], [1, 0], clamp)} />
        <path d="M218 18 L242 40 L218 62" fill="none" stroke="#0033FF" strokeWidth="6" style={{ opacity: interpolate(f, [25, 30], [0, 1], clamp) }} />
      </svg>
      <Img src={staticFile("brand/dify.svg")} style={{ width: 350, height: 180, objectFit: "contain", opacity: interpolate(f, [31, 43], [0, 1], clamp) }} />
    </div>
    <div style={{ fontSize: 86, fontWeight: 900, letterSpacing: -1, opacity: interpolate(f, [31, 43], [0, 1], clamp) }}>Difyにつないで、動かす。</div>
  </AbsoluteFill>;
};

const Harnesses = () => {
  const f = useCurrentFrame();
  const tools = [["Claude Code", "claude-color"], ["Codex", "codex"], ["OpenCode", "opencode"], ["Pi", "pi"], ["Cline", "cline"], ["Kilo Code", "kilocode"]];
  return <AbsoluteFill style={{ background: "#f5f5f7", padding: 120 }}>
    <Img src={staticFile("brand/logo-lockup.svg")} style={{ width: 300 }} />
    <div style={{ marginTop: 65, fontSize: 84, fontWeight: 900 }}>いつものAI開発ツールにも。</div>
    <div style={{ width: interpolate(f, [8, 32], [0, 1680], clamp), height: 4, background: "#0033FF", marginTop: 50 }} />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginTop: 45 }}>
      {tools.map(([name, logo], i) => <div key={name} style={{ display: "flex", alignItems: "center", gap: 25, height: 140, opacity: interpolate(f, [35 + i * 9, 50 + i * 9], [0, 1], clamp) }}>
        <Img src={staticFile(`harnesses/${logo}.svg`)} style={{ width: 78, height: 78, objectFit: "contain" }} />
        <div style={{ fontSize: 48 }}>{name}</div>
      </div>)}
    </div>
    <div style={{ position: "absolute", right: 120, bottom: 130, color: "#555", fontSize: 36, opacity: interpolate(f, [100, 115], [0, 1], clamp) }}>ほかにも、多数。</div>
  </AbsoluteFill>;
};

const Closing = () => <AbsoluteFill style={{ background: "#0033FF", color: "white" }}>
  <Img src={staticFile("brand/closing-watermark.png")} style={{ position: "absolute", left: 640, top: 0, width: 1280, height: 821 }} />
  <Img src={staticFile("brand/logo-lockup.svg")} style={{ position: "absolute", left: 120, top: 120, width: 553, filter: "brightness(0) invert(1)" }} />
  <div style={{ position: "absolute", left: 120, top: 348, fontFamily: "MiSans" }}>
    <div style={{ fontSize: 80, fontWeight: 600, lineHeight: "106px", letterSpacing: -1.6 }}>9月10日、日本向けサービス開始。</div>
    <div style={{ fontSize: 56, fontWeight: 500, lineHeight: "74px", letterSpacing: -1.12, marginTop: 20 }}>日本語サポート対応</div>
  </div>
  <div style={{ position: "absolute", left: 120, top: 785 }}>
    <div style={{ fontSize: 66, fontWeight: 600, lineHeight: "88px", letterSpacing: -1.32 }}>登録して、無料で試す。</div>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 20 }}>
      <Img src={staticFile("brand/arrow-right-circle.svg")} style={{ width: 56, height: 56 }} />
      <div style={{ fontSize: 56, lineHeight: "73px", letterSpacing: -1.12, fontFamily: "Stack Sans Text", fontWeight: 300 }}>tokener.ai</div>
    </div>
  </div>
  <div style={{ position: "absolute", left: 1616, top: 776, background: "white", padding: 8 }}><Img src={staticFile("brand/tokener-qr.png")} style={{ display: "block", width: 184, height: 184, imageRendering: "pixelated" }} /></div>
</AbsoluteFill>;

const BrandEnding = () => <AbsoluteFill style={{ background: "#0033FF", color: "white", justifyContent: "center", alignItems: "center" }}>
  <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
    <Img src={staticFile("brand/logo-mark.svg")} style={{ width: 180, height: 190, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
    <div style={{ fontFamily: "Stack Sans Text", fontSize: 200, lineHeight: 1, fontWeight: 400, letterSpacing: -6 }}>tokener.ai</div>
  </div>
  <div style={{ marginTop: 72, fontSize: 64, fontWeight: 600 }}>主要AIモデルを、ひとつの入口へ。</div>
</AbsoluteFill>;

const SceneFades = () => {
  const f = useCurrentFrame();
  const cuts = [45, 600, 960, 1740, 2310];
  const opacity = Math.max(...cuts.map((cut) => interpolate(f, [cut - 8, cut, cut + 10], [0, 1, 0], clamp)));
  return <AbsoluteFill style={{ background: "#101112", opacity, pointerEvents: "none" }} />;
};

export const TokenerFilm = ({ captions = false, voiceover = false, music = false }: { captions?: boolean; voiceover?: boolean; music?: boolean }) => <AbsoluteFill style={{ fontWeight: 500, fontFamily: '"Stack Sans Text", "MiSans", sans-serif', color: "#101112" }}>
  {voiceover && <Audio src={staticFile("audio/tokener-ja.wav")} />}
  {music && <Audio src={staticFile("audio/tokener-bgm.m4a")} trimAfter={2700} volume={(f) => interpolate(f, [0, 30, 2610, 2700], [0, 0.09, 0.09, 0], clamp)} />}
  <Sequence durationInFrames={360} name="Model fragmentation"><Opening /></Sequence>
  <Sequence from={360} durationInFrames={240} name="Brand reveal"><TokenerReveal /></Sequence>
  <Sequence from={600} durationInFrames={120} name="Public model catalog"><Footage title="主要モデルを、まとめて。" start={4} subtitle="各社のモデルを、ひとつの一覧で。" /></Sequence>
  <Sequence from={720} durationInFrames={120} name="Console model catalog"><Footage title="各社の公式価格で。" start={18} subtitle="モデルごとの料金を、その場で確認。" /></Sequence>
  <Sequence from={840} durationInFrames={120} name="Model lineup"><Sequence from={-480}><TokenerReveal showNote={false} /></Sequence></Sequence>
  <Sequence from={960} durationInFrames={120} name="Tokener to Dify"><DifyConnection /></Sequence>
  <Sequence from={1080} durationInFrames={120} name="Dify model provider"><Footage title="Difyにつないで、動かす。" start={38} subtitle="モデルプロバイダーに、Tokenerを追加。" /></Sequence>
  <Sequence from={1200} durationInFrames={210} name="Dify workflow"><Footage title="いつものワークフローで。" start={67} subtitle="使いたいモデルを、ワークフローに。" /></Sequence>
  <Sequence from={1410} durationInFrames={330} name="Continuous translation output"><Footage title="アイデアを、実行へ。" start={76.5} subtitle="翻訳、チェック、書き直し。" /></Sequence>
  <Sequence from={1740} durationInFrames={180} name="Usage and cost overview"><Footage title="利用も、コストも、一か所で。" start={12} subtitle="利用量とコストを、まとめて確認。" /></Sequence>
  <Sequence from={1920} durationInFrames={150} name="Request usage">
    <Sequence durationInFrames={120}><Footage title="利用も、コストも、一か所で。" start={24} subtitle="リクエストごとの利用量とコストを確認。" /></Sequence>
    <Sequence from={120} durationInFrames={30}><Freeze frame={119}><Footage title="利用も、コストも、一か所で。" start={24} subtitle="リクエストごとの利用量とコストを確認。" /></Freeze></Sequence>
  </Sequence>
  <Sequence from={2070} durationInFrames={240} name="Coding tools"><Harnesses /></Sequence>
  <Sequence from={2310} durationInFrames={300} name="Japan launch and registration"><Closing /></Sequence>
  <Sequence from={2610} durationInFrames={90} name="Brand ending"><BrandEnding /></Sequence>
  <Sequence durationInFrames={45} name="Cover"><TokenerCover /></Sequence>
  {captions && <FilmCaptions />}
  <SceneFades />
</AbsoluteFill>;
