import "./index.css";
import { Composition, Still, staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";
import { TokenerIntro } from "./Composition";
import { TokenerReveal } from "./TokenerReveal";
import { TokenerFilm } from "./TokenerFilm";
import { TokenerCover } from "./TokenerCover";

loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Regular.woff2"), weight: "400" });

loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Medium.woff2"), weight: "500" });
loadFont({ family: "MiSans", url: staticFile("fonts/misans/MiSans-Heavy.woff2"), weight: "900" });

loadFont({ family: "Stack Sans Text", url: staticFile("fonts/stack-sans/StackSansText.ttf"), weight: "300 700" });

export const RemotionRoot = () => (
  <>
  <Still id="TokenerCover" component={TokenerCover} width={1920} height={1080} />
  <Composition id="TokenerFilm" component={TokenerFilm} durationInFrames={2760} fps={30} width={1920} height={1080} />
  <Composition
    id="TokenerIntro"
    component={TokenerIntro}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
  />
  <Composition
    id="TokenerReveal"
    component={TokenerReveal}
    durationInFrames={660}
    fps={30}
    width={1920}
    height={1080}
  />
  </>
);
