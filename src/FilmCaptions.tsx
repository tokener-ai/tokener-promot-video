import { useCurrentFrame, useVideoConfig } from "remotion";
import captions from "./captions.ja.json";

export const FilmCaptions = () => {
  const timeMs = useCurrentFrame() * 1000 / useVideoConfig().fps;
  const caption = captions.find(({ startMs, endMs }) => timeMs >= startMs && timeMs < endMs);
  return caption ? <div style={{ position: "absolute", bottom: 28, left: 64, right: 64, textAlign: "center", fontFamily: "MiSans", fontSize: 36, lineHeight: "52px", fontWeight: 500, color: "white" }}>
    <span style={{ display: "inline-block", maxWidth: "100%", padding: "8px 24px", background: "#101112dd", borderRadius: 6 }}>{caption.text}</span>
  </div> : null;
};
