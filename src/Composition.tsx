import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const TokenerIntro = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: '"Stack Sans Text", "MiSans", sans-serif',
        fontSize: 100,
      }}
    >
      <div style={{ opacity }}>Tokener.ai</div>
    </AbsoluteFill>
  );
};
