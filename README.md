# Tokener promotional video

Editable Remotion project for the Tokener Japan launch presentation on September 10, 2026. The main film is 90 seconds, 3840 × 2160, 30 fps, with Japanese scene titles, Japanese voiceover and background music at 9% volume. Bottom captions are optional.

[Film](exports/tokener-ifcon-preview.mp4) · [Cover](exports/tokener-cover.png) · [Presentation script and captions](docs/presentation.md)

![Tokener cover](exports/tokener-cover.png)

## Run and export

Use Node.js 22 or newer and pnpm 11.21.0.

```sh
git clone https://github.com/tokener-ai/tokener-promot-video.git
cd tokener-promot-video
pnpm install --frozen-lockfile
pnpm dev
```

Select **TokenerFilm** in Remotion Studio. Fonts, logos, QR code, web captures and the aligned voiceover are included; rendering needs no product account or API key. The first render may download Remotion's browser.

```sh
pnpm lint
pnpm render
pnpm render:audio
pnpm render:cover
```

Exports default to 4K through `remotion.config.ts`; compositions retain a 1920 × 1080 layout canvas and render at 2× scale. Exports are written to ignored `out/`. To reduce memory use, run `pnpm render --concurrency=4`. The checked-in film in `exports/` includes voiceover and music.

| Command | Output |
| --- | --- |
| `pnpm render` | Web-capture film with Japanese voiceover and background music |
| `pnpm render --props='{"captions":true}'` | Same film with bottom captions |
| `pnpm render --props='{"voiceover":false,"music":false}'` | Silent film for live narration |
| `pnpm render:audio` | Standalone 90-second WAV, including timeline pauses |

The `voiceover`, `music` and `captions` composition props are independent booleans. Commands targeting the same output path overwrite that file. Music uses its first 90 seconds at 9% volume, with a one-second fade-in and three-second fade-out.

`render:audio` copies the aligned source WAV to `out/tokener-ja.wav` without re-encoding.

## Production lessons

[Lessons from a first AI-assisted promotional video](docs/production-lessons.md) covers creative decisions, feedback, pacing, subtitles, and a repeatable workflow for future films.

## Edit

| File | Purpose |
| --- | --- |
| `src/TokenerFilm.tsx` | Main timeline, transitions, coding tools and closing CTA |
| `src/WebCaptureFilm.tsx` | Seven web-capture scenes, camera motion, cursor and emphasis |
| `src/TokenerReveal.tsx` | Brand reveal and model lineup |
| `src/TokenerCover.tsx` | Cover and opening overlay |
| `src/Root.tsx` | Composition dimensions, durations and font loading |
| `public/audio/tokener-ja.wav` | Aligned Japanese voiceover used by the film |
| `public/audio/tokener-bgm.m4a` | Full background music extracted without re-encoding from the supplied MP4 |
| `public/` | Assets referenced by compositions |
| `public/web-capture/` | Captured browser states from Tokener and Dify |
| `.agents/skills/` | Remotion authoring guidance; not needed to render |

Timeline positions and durations use frames at 30 fps. The 1.5-second cover overlays the opening, so it does not extend the film. Studio contains **TokenerFilm** and **TokenerCover** (still).

The seven product scenes use browser screenshots captured at 3200 × 1800, with camera motion, cursor paths and emphasis composed in Remotion. They cover the model catalog, pricing, Dify provider and model selection, workflow execution, usage overview and request logs. Execution is condensed for the film; it is not a real-time screen recording. Demo account and usage information remain visible.

The optional bottom caption track in `src/captions.ja.json` follows the timing in the presentation script. Gray scene subtitles remain part of the underlying video. The ElevenLabs Kana voiceover is aligned to the full 90-second timeline, including the opening silence and final brand hold. Replace `public/audio/tokener-ja.wav` to update the voiceover; keep it aligned with the scenes and captions. Japanese copy and pronunciation need human review before public presentation. Reconfirm date, price and trial claims before reusing this launch-specific film.

## Rights and assets

This repository retains `UNLICENSED` status; publication does not grant a general open-source license. Contact the repository owner for reuse permission. Third-party fonts and icons retain their own licenses; see [asset attribution](docs/assets.md). Remotion use is governed by its own license.
