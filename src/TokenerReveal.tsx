import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

const models = [
  { name: "Claude", logo: "claude-color" },
  { name: "GPT", logo: "openai" },
  { name: "Grok", logo: "grok" },
  { name: "Kimi", logo: "kimi" },
  { name: "GLM", logo: "zhipu-color" },
  { name: "DeepSeek", logo: "deepseek-color" },
];
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const TokenerReveal = ({ showNote = true }: { showNote?: boolean }) => {
  const f = useCurrentFrame();
  const merge = interpolate(f, [12, 70], [0, 1], clamp);
  const catalog = f >= 240;

  return (
    <AbsoluteFill style={{ background: catalog ? "#f5f5f7" : "#101112", color: catalog ? "#101112" : "white", fontWeight: 500, fontFamily: '"Stack Sans Text", "Zen Kaku Gothic New", sans-serif', overflow: "hidden" }}>
      {f < 85 && models.map((model, i) => {
        const x = (i % 3 - 1) * 560;
        const y = (Math.floor(i / 3) * 2 - 1) * 250;
        return <div key={model.name} style={{ position: "absolute", left: "50%", top: "50%", width: 500, marginLeft: -250, display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: -50, textAlign: "center", fontSize: 72, fontWeight: 500, translate: `${x * (1 - merge)}px ${y * (1 - merge)}px`, opacity: interpolate(f, [0, 12, 48, 73], [0.6, 1, 0.8, 0], clamp), filter: `blur(${merge * 12}px)` }}><Img src={staticFile(`providers/${model.logo}.svg`)} style={{ width: 72, height: 72, objectFit: "contain", filter: ["openai", "grok", "kimi"].indexOf(model.logo) !== -1 ? "brightness(0) invert(1)" : undefined }} />{model.name}</div>;
      })}
      {f >= 72 && f < 147 && <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", fontSize: 112, fontWeight: 900, letterSpacing: -1, opacity: interpolate(f, [72, 80, 127, 147], [0, 1, 1, 0], clamp) }}>ひとつの入口へ。</AbsoluteFill>}
      {f >= 150 && f < 240 && <AbsoluteFill style={{ background: "#0033FF", justifyContent: "center", alignItems: "center", opacity: interpolate(f, [150, 155], [0, 1], clamp) }}>
        <Img src={staticFile("brand/logo-lockup.svg")} style={{ width: 850, filter: "brightness(0) invert(1)", scale: interpolate(f, [150, 185], [0.93, 1], clamp) }} />
        <div style={{ position: "absolute", bottom: 205, fontSize: 36, letterSpacing: 5 }}>tokener.ai</div>
      </AbsoluteFill>}
      {catalog && <>
        <Img src={staticFile("brand/logo-lockup.svg")} style={{ position: "absolute", left: 120, top: 82, width: 240 }} />
        <div style={{ position: "absolute", left: 120, top: 217, fontSize: 96, fontWeight: 900, letterSpacing: -1, opacity: interpolate(f, [240, 258], [0, 1], clamp) }}>主要モデルを、まとめて。</div>
        <div style={{ position: "absolute", left: 120, right: 120, top: 410, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {models.map((model, i) => <div key={model.name} style={{ height: 160, background: "white", borderTop: "3px solid #0033FF", display: "flex", alignItems: "center", paddingLeft: 32, gap: 24, fontSize: 58, fontWeight: 500, opacity: interpolate(f, [264 + i * 13, 280 + i * 13], [0, 1], clamp), translate: `0 ${interpolate(f, [264 + i * 13, 284 + i * 13], [26, 0], clamp)}px` }}><Img src={staticFile(`providers/${model.logo}.svg`)} style={{ width: 72, height: 72, objectFit: "contain", flexShrink: 0 }} />{model.name}</div>)}
        </div>
        <div style={{ position: "absolute", left: 120, bottom: 130, color: "#0033FF", fontSize: 76, fontWeight: 900, opacity: interpolate(f, [450, 470], [0, 1], clamp) }}>各社の公式価格で。</div>
        {showNote && <div style={{ position: "absolute", right: 120, bottom: 64, fontSize: 22, color: "#666" }}>構成イメージ · 実機映像に差し替え予定</div>}
      </>}
      <AbsoluteFill style={{ background: "#101112", opacity: interpolate(f, [640, 659], [0, 1], clamp) }} />
    </AbsoluteFill>
  );
};
