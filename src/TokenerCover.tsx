import { AbsoluteFill, Img, staticFile } from "remotion";

export const TokenerCover = () => (
  <AbsoluteFill style={{ background: "#0033FF", color: "white", padding: 120, fontFamily: '"Stack Sans Text", "MiSans", sans-serif' }}>
    <Img src={staticFile("brand/logo-lockup.svg")} style={{ width: 540, filter: "brightness(0) invert(1)" }} />
    <div style={{ marginTop: 125, fontSize: 112, fontWeight: 900, lineHeight: 1.4, letterSpacing: -1 }}>
      主要AIモデルを、<br />ひとつの入口へ。
    </div>
    <div style={{ position: "absolute", left: 120, bottom: 120, fontSize: 36, fontWeight: 400 }}>日本向けサービス開始 · 2026.09.10</div>
    <div style={{ position: "absolute", right: 120, bottom: 120, fontSize: 36, fontWeight: 400, fontFamily: "Stack Sans Text" }}>tokener.ai</div>
  </AbsoluteFill>
);
