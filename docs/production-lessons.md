# Lessons from a first AI-assisted promotional video

This project began with no prior promotional-video production experience and produced a 90-second Tokener film, a Japanese-subtitled edition, a cover, presentation material, and an editable Remotion repository. The useful outcome is a repeatable way to turn product knowledge into a finished video.

These lessons are for the next production: keep creative decisions with the product owner, use AI to implement and preview them, and judge the exported result. Completing this film demonstrates a workable production process; its effect on audience understanding or product adoption has not been measured.

## Direct attention before choosing effects

The owner supplied several decisions that shaped the story: connecting Tokener to Dify, showing the Dify logo and text after the arrow completed, placing development tools after the usage demonstration, and keeping the opening and ending slogan.

Those decisions determine what the audience understands and in what order. Software operation can be delegated, but each scene still needs a clear purpose. Before adjusting an animation, ask what the viewer should remember from that scene and whether the current picture communicates it.

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

The repository includes source footage, local assets, font attribution, compositions, caption data, and export instructions. Both film editions and the cover are available as tracked exports. Default CLI output is 4K, so the delivery resolution no longer depends on remembering a flag.

Keep the original recording available and edit its use through the timeline. Keep the subtitle-free film available alongside the captioned composition. This allows later wording or timing changes without rebuilding the production from scratch.

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
