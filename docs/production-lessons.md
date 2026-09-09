# Lessons from a first AI-assisted promotional video

This project began with no prior promotional-video production experience and produced a 90-second Tokener web-capture film with Japanese narration and optional bottom captions, a cover, presentation material, and an editable Remotion repository. The useful outcome is a repeatable way to turn product knowledge into a finished video.

These lessons are for the next production: keep creative decisions with the product owner, use AI to implement and preview them, and judge the exported result. Completing this film demonstrates a workable production process; its effect on audience understanding or product adoption has not been measured.

## Direct attention before choosing effects

The owner supplied several decisions that shaped the story: connecting Tokener to Dify, showing the Dify logo and text after the arrow completed, placing development tools after the usage demonstration, and keeping the opening and ending slogan.

Those decisions determine what the audience understands and in what order. Software operation can be delegated, but each scene still needs a clear purpose. Before adjusting an animation, ask what the viewer should remember from that scene and whether the current picture communicates it.

## Turn web captures into a guided product demonstration

Learning the terms **product demo motion design** and **screencast animation / zoom and pan** was a major discovery for the owner, who judged the resulting film substantially better. These names made a previously difficult visual request concise and repeatable. That assessment records the owner's experience; audience comprehension has not been measured.

Product demo motion design describes the broader treatment of a product demonstration. Zoom and pan describes a specific technique: enlarge the relevant area and move the framing to guide attention. The source can be a recording or a still capture. This film uses real browser screenshots of successive page states, with Remotion animating framing, a recreated cursor, click emphasis, and a focus overlay. It does not preserve continuous recorded interaction or prove actual response times.

Use this shot pattern as a starting point:

> Establish the page → focus on the relevant control → show the action → reveal the result → hold for reading.

Return to the wider page when the next action needs spatial context. A close view can carry directly into the next shot when its location is already clear. In the Dify demonstration, the useful subjects are the provider setup, workflow model selection, and generated output. Framing should follow those subjects rather than every cursor movement.

The improvement came with a reusable directing rule: choose the viewer's next point of attention before choosing camera movement. Keep one main focal point at a time, stop moving while important text is being read, and preserve enough context to understand where the action happens. Check the exported film at its intended viewing size; a 4K export cannot restore detail missing from a source capture.

## Build a vocabulary of reusable techniques

Treat the following as a practical production vocabulary. Some entries name established editing techniques; others describe common motion-design controls. The examples are possible briefs for future work, not a claim that every technique appears in this film.

| Viewing problem | Technique | Reusable direction | Boundary |
| --- | --- | --- | --- |
| A full page makes the important control too small | Zoom and pan | Start wide, move into the model selector, then hold the output in close view. | Keep labels readable and preserve location cues. |
| Several parts of the page compete for attention | Spotlight / callout | Dim the surrounding page and highlight the selected model once. | Avoid covering evidence or highlighting several targets at once. |
| The pointer wanders or the click is easy to miss | Cursor choreography / click emphasis | Move directly to the control, pause, click, then clear the reading area. | A recreated cursor must match the demonstrated state change. |
| Movement starts and stops abruptly | Easing | Ease the camera into its final position and stop before the reading hold. | Repeated bouncing can distract from interface text. |
| Everything appears at once | Stagger / sequential reveal | Show the source, draw the connection, then reveal the destination. | Reveal order must preserve the actual relationship. |
| A heading needs a deliberate entrance | Mask reveal | Reveal the heading through a fixed mask with a short upward movement. | Keep the completed title still long enough to read. |
| A slogan lacks emphasis | Kinetic typography | Animate the key phrase with the narration, then hold the complete sentence. | Do not make every caption word compete for attention. |
| Adjacent scenes feel disconnected | Match cut | Cut between two similarly positioned product panels or shapes. | A visual match must not imply an unsupported functional relationship. |
| Loading and repeated operations consume the runtime | Time compression / jump cut | Cut the waiting interval and preserve the action and result. | Do not present edited timing as a speed measurement; a speed ramp specifically changes playback speed progressively. |
| Narration feels chopped at every picture change | J-cut / L-cut | Let the next scene's narration begin before its picture, or let the previous audio continue across the cut. | Keep the spoken referent clear. |
| A static illustration needs depth | Parallax / 2.5D | Move separated foreground and background layers by different amounts. | Use sparingly on UI where perspective can reduce legibility. |
| A click or reveal lacks audible feedback | Sound design / audio ducking | Add a quiet cue to the reveal and lower music during narration. | Fixed low music volume is not automatic ducking; speech must remain clear. |

For another software demonstration, begin with zoom and pan, spotlight, cursor choreography, easing, sequential reveal, and reading holds. Add other techniques when a particular shot needs them. Dense transitions, perspective moves, and motion blur should earn their place through the exported preview.

Combine a technique name with its subject, sequence, and constraints:

> Use restrained product demo motion design. Apply zoom and pan to the real web captures: establish the Dify page, focus on model selection, then move to the generated output. Use a single spotlight and deliberate cursor movement. Hold readable results; keep the existing wording and total duration.

Useful terminology references: [Screen Studio animation controls](https://preview.screen.studio/guide/animations), [cursor controls](https://preview.screen.studio/guide/cursor), [Adobe easing guidance](https://spectrum.adobe.com/page/motion/), [kinetic typography](https://www.adobe.com/products/aftereffects/text-animation.html), [match cuts](https://www.adobe.com/in/creativecloud/video/discover/match-cut.html), and [J-cuts and L-cuts](https://helpx.adobe.com/uk/premiere/desktop/edit-projects/trim-clips/perform-j-cuts-and-l-cuts.html).

## Allocate time according to the information

The opening needed less time, while the usage page needed enough time to be read. The completed Dify connection needed a pause after its animation. These requests were consistent: different scenes impose different reading demands.

Give viewers time to notice, understand, and remember. A logo can be recognized quickly; a product page takes longer; a QR code needs time for an action. When shortening a film, remove waiting and repetition before reducing every scene equally.

The final timing changes shortened the model lineup, extended the Dify connection, trimmed the workflow lead-in, and reduced black transitions within related demonstrations. The film retained its scene designs and ended at 90 seconds.

## Separate content, appearance, pacing, and delivery

A request to improve pacing initially produced additional zooms, crops, and wording changes. The owner rejected that expansion and clarified that the content should feel unchanged. Those visual changes were removed.

Use four categories when reviewing a film:

| Category | Decision | Example from this production |
| --- | --- | --- |
| Content | What appears, and in what order | Dify connection and development-tool placement |
| Appearance | How it looks | Fonts, logos, page framing, and the Figma reference |
| Pacing | When it appears and how long it stays | Opening compression and completed-animation holds |
| Delivery | What people receive and can reuse | 4K files, subtitles, cover, documents, and source |

Change one category at a time where possible. State which accepted parts must stay unchanged. This makes both implementation and comparison easier.

## Describe the viewing problem precisely

Useful feedback does not require editing terminology. Specify a location, the observed problem, the desired effect, and the boundaries.

> At 32–36 seconds, the Dify logo disappears too soon after the arrow finishes. Hold the completed connection longer so viewers can understand the relationship. Keep the layout, wording, and animation order. Keep the whole film close to 90 seconds.

Screenshots and reference links make visual feedback more concrete. Name the part to borrow from a reference, such as typography or screenshot framing, so that unrelated details are not copied along with it.

## Use previews to discover requirements

The first complete preview exposed needs that were difficult to specify in advance: the missing Dify connection, weak typography, uneven scene durations, and a missing cover. A rough but complete film gave those decisions a concrete object.

Match the preview to the question. A still can settle typography and layout. A short render can settle animation timing. A complete film is needed to judge the story and overall rhythm. Use the final export to check playback and delivery, even when Studio looks correct.

## Treat titles, captions, and narration as separate layers

The screen-reference document recorded existing titles and gray scene subtitles. Bottom captions added a separate explanatory track. The presenter script served a speaker who needed to follow the same timeline.

Titles identify the scene. Captions help someone follow the message without audio. Presenter notes support live delivery and pauses. Repeating the same text in all three places can compete with the product demonstration.

Stabilize the timeline before aligning captions and narration. After the film moved to 90 seconds, both documents needed updated intervals. Shorter speaking windows also required shorter sentences. Leave intentional gaps around visual reveals and the final slogan.

Japanese wording still requires human language review. Compatibility and pricing statements also need product evidence; a displayed logo alone does not establish an integration claim.

## Make delivery reproducible

The repository includes web captures, local assets, font attribution, compositions, caption data, and export instructions. The narrated web-capture film and cover are available as tracked exports. Default CLI output is 4K, so the delivery resolution no longer depends on remembering a flag.

Keep source captures available and edit their use through the timeline. Keep bottom captions optional in the same composition. This allows later wording or timing changes without rebuilding the production from scratch.

Automation should help finish the handoff. When desktop file upload stopped responding and API sending required additional permissions, manually dragging the completed file into Feishu was a practical last step. Rendering a file and delivering it are separate completion checks.

## Start the next film with a short brief

Use this brief before implementation:

> Audience and viewing context:
> One message the viewer should remember:
> One action the viewer should take:
> Approximate duration:
> Available recordings, logos, screenshots, and references:
> Facts, wording, and visual elements that must remain unchanged:
> Required deliverables:
>
> Produce a complete rough preview first. Confirm content before refining appearance and pacing.

Review in three passes:

- **Story:** Is the message clear, and does the scene order support it?
- **Experience:** Where is the film confusing, slow, rushed, or visually distracting?
- **Delivery:** Are wording, captions, QR code, playback, resolution, and files correct?

Show the film to someone in the intended audience and ask what they think the product does. Use that answer to test clarity before adding more effects or information.
