import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

const ease = { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(.25, .1, .15, 1) } as const;
const scenes = {
  public: { name: "public", frames: 120, title: "主要モデルを、まとめて。", subtitle: "各社のモデルを、ひとつの一覧で。", change: 38, x: [800, 650, 700, 800], y: [384, 410, 420, 384], zoom: [1, 1.65, 1.65, 1], cursor: [750, 650, 780, 510], focus: [230, 110, 1135, 390] },
  models: { name: "models", frames: 120, title: "各社の公式価格で。", subtitle: "モデルごとの料金を、その場で確認。", change: 35, x: [800, 460, 460, 800], y: [384, 200, 200, 384], zoom: [1, 1.9, 1.9, 1], cursor: [650, 500, 190, 300], focus: [52, 164, 670, 82] },
  provider: { name: "provider", frames: 120, title: "Difyにつないで、動かす。", subtitle: "モデルプロバイダーに、Tokenerを追加。", change: 34, x: [800, 960, 960, 960], y: [384, 250, 300, 350], zoom: [1, 1.35, 1.35, 1.2], cursor: [870, 310, 540, 81], focus: [472, 180, 1100, 338] },
  overview: { name: "overview", frames: 180, title: "利用も、コストも、一か所で。", subtitle: "利用量とコストを、まとめて確認。", change: 62, x: [800, 1290, 1180, 800], y: [384, 260, 330, 384], zoom: [1, 1.7, 1.7, 1], cursor: [850, 450, 1420, 365], focus: [1150, 84, 395, 273] },
  logs: { name: "logs", frames: 150, title: "利用も、コストも、一か所で。", subtitle: "リクエストごとの利用量とコストを確認。", change: 48, x: [800, 620, 1120, 800], y: [384, 220, 280, 384], zoom: [1, 1.65, 1.8, 1], cursor: [800, 440, 430, 144], focus: [590, 210, 955, 288] },
  workflow: { name: "workflow", frames: 210, title: "いつものワークフローで。", subtitle: "使いたいモデルを、ワークフローに。", change: 60, x: [800, 1050, 1180, 1130], y: [384, 395, 375, 390], zoom: [1, 1.25, 1.55, 1.35], cursor: [510, 500, 610, 440], focus: [870, 240, 325, 280] },
  run: { name: "run", frames: 330, title: "アイデアを、実行へ。", subtitle: "翻訳、チェック、書き直し。", change: 45, x: [1200, 910, 1370, 1320], y: [290, 410, 310, 330], zoom: [1.35, 1.3, 1.75, 1.55], cursor: [1350, 330, 1400, 301], focus: [1200, 145, 395, 330] },
};

export const WebCaptureScene = ({ name }: { name: keyof typeof scenes }) => <Capture scene={scenes[name]} />;

const Capture = ({ scene }: { scene: (typeof scenes)[keyof typeof scenes] }) => {
  const f = useCurrentFrame();
  const stops = [0, scene.frames * .30, scene.frames * .76, scene.frames - 1];
  const scale = 1.12 * interpolate(f, stops, scene.zoom, ease);
  const x = Math.min(0, Math.max(1792 - 1600 * scale, 896 - interpolate(f, stops, scene.x, ease) * scale));
  const y = Math.min(0, Math.max(860 - 900 * scale, 430 - interpolate(f, stops, scene.y, ease) * scale));
  const state = f < scene.change ? 0 : (scene.name === "provider" && f >= 64) || (scene.name === "run" && f >= 150) ? 2 : 1;
  const mx = interpolate(f, [0, scene.change - 5, scene.change + 20, scene.frames - 1], [scene.cursor[0], scene.cursor[2], scene.cursor[2], (scene.name === "provider" ? 575 : scene.cursor[2] + 90)], ease);
  const my = interpolate(f, [0, scene.change - 5, scene.change + 20, scene.frames - 1], [scene.cursor[1], scene.cursor[3], scene.cursor[3], (scene.name === "provider" ? 475 : scene.cursor[3] + 25)], ease);
  const emphasis = interpolate(f, [scene.change + 5, scene.change + 17, scene.frames * .74, scene.frames * .9], [0, 1, 1, 0], ease);
  const pulse = interpolate(f, [scene.change - 3, scene.change + 12], [0, 1], ease);
  return <AbsoluteFill style={{ background: "#f5f5f5", fontFamily: '"Stack Sans Text", "MiSans", sans-serif', color: "#101112" }}>
    <Img src={staticFile("brand/screen-watermark.png")} style={{ position: "absolute", left: 640, top: 0, width: 1280, height: 821 }} />
    <div style={{ position: "absolute", left: 64, top: 32 }}><div style={{ fontSize: 50, lineHeight: "66px", fontWeight: 600, letterSpacing: -1 }}>{scene.title}</div><div style={{ fontSize: 20, lineHeight: "24px", color: "#0009", marginTop: 10 }}>{scene.subtitle}</div></div>
    <div style={{ position: "absolute", left: 64, top: 157, width: 1792, height: 860, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 50px #09090b18", outline: "5px solid white" }}>
      <div style={{ position: "absolute", width: 1600, height: 900, transformOrigin: "0 0", transform: `translate(${x}px, ${y}px) scale(${scale})` }}>
        <Img src={staticFile(`web-capture/${scene.name}-${state}.jpg`)} style={{ width: 1600, height: 900 }} />
        <div style={{ position: "absolute", left: scene.focus[0], top: scene.focus[1], width: scene.focus[2], height: scene.focus[3], borderRadius: 8, boxShadow: "0 0 0 3000px #13183120", outline: "1px solid #2949ff44", opacity: emphasis }} />
        <div style={{ position: "absolute", left: mx, top: my, transformOrigin: "0 0", scale: 1 / scale, opacity: interpolate(f, [0, 10, scene.frames - 22, scene.frames - 1], [0, 1, 1, 0], ease) }}>
          <div style={{ position: "absolute", left: -22 * pulse, top: -22 * pulse, width: 44 * pulse, height: 44 * pulse, border: "2px solid #274aff", borderRadius: "50%", opacity: scene.name === "public" ? 0 : 1 - pulse }} />
          <svg width="30" height="38" viewBox="0 0 30 38" style={{ filter: "drop-shadow(0 2px 2px #0005)" }}><path d="M2 2 L2 29 L9 22 L15 35 L21 32 L15 20 L27 20 Z" fill="#15171d" stroke="white" strokeWidth="2.5" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  </AbsoluteFill>;
};
