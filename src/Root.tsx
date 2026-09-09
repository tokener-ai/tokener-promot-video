import "./index.css";
import { Composition, Still, staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";
import { TokenerFilm } from "./TokenerFilm";
import { TokenerCover } from "./TokenerCover";

loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Regular.woff2"), weight: "400" });

loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Medium.woff2"), weight: "500" });
loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Semibold.woff2"), weight: "600" });
loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Heavy.woff2"), weight: "900" });

loadFont({ family: "Stack Sans Text", url: staticFile("fonts/stack-sans/StackSansText.ttf"), weight: "300 700" });

export const RemotionRoot = () => (
  <>
  <Still id="TokenerCover" component={TokenerCover} width={1920} height={1080} />
  <Composition id="TokenerFilm" component={TokenerFilm} durationInFrames={2700} fps={30} width={1920} height={1080} />
  <Composition id="TokenerFilmSubtitled" component={TokenerFilm} defaultProps={{ captions: true }} durationInFrames={2700} fps={30} width={1920} height={1080} />
  </>
);
