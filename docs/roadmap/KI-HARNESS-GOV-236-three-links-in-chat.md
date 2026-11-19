---
id: KI-HARNESS-GOV-236
area: GOV
title: Three links in chat
component: work
priority: medium
size: s
assignee: work/cairn.summit
status: cancelled
resolution: superseded
blocks: []
blocked_by: []
baseline_ref: null
created_at: 2026-11-19T06:04:00Z
updated_at: 2026-11-19T06:20:00Z
---

# Three links in chat

## Goal

Kris can open any resource a session names in chat in whichever place suits him: the Cairn Wayfinder, GitHub, or the file on his machine, from small icon links after its name.

## Context

Handed up by Kinward on 18 November 2026, about 16:22 GMT, as LINKS-THREE, and carried in the Cairn summit's change Names (12) until it closed on 19 November 2026; its text at its last revision is [Names (12), last revision](https://github.com/krisb/ki-cairn-store/blob/f78440d30dd3dd8baf0f8d16f26c37d5e273e927/work/cairn/cairn.summit/12-names.change.md#71-questions).

Kris, by voice: "anything which is a resource which can be made available inside the Cairn Wayfinder ... should use app deep links ... It might even be worthwhile having links to it in multiple ways after the file's mentioned ... like an icon afterwards that there's got a hyperlink with it ... which would then say the URL for the app, the Cairn app, the URL for GitHub, and also a local file URL to open it locally."

Kinward's reading: a resource is named in plain words, followed by up to three icon links: its `cairn://` route where the Wayfinder has one, its GitHub URL on `main`, and its local `file://` path.

It sits beside CHANGE-NAMES, landed in `ki-coordination`'s reporting standard, Links and wording, on 19 November 2026.

## Boundary

How links are written in chat replies and reports only. It does not change links inside files, which stay relative within their repository under `ki-authoring`, or the Wayfinder's routes.

## Cancelled

Cancelled on 19 November 2026 by the Cairn summit's guardian, on Kris's word: LINKS-THREE was already settled. Kris took LINKS-CAIRN and LINKS-ICONS together as LINKS-STANDARD on 19 November 2026, at about 05:32 GMT, recorded in the Cairn summit's change Learnings (20) under Decided, "Taken 19 November, about 05:32 GMT": a link directs Kris to the right way to see a thing from where he reads, the most sensible choice of links rather than strictly one, with a `cairn://` link into the Cairn Wayfinder first for a Cairn-level thing, then its local file and GitHub links on one line. It landed in `ki-coordination`'s reporting standard, Where the owner reads, at commit `3273f75d4`, and Kris's personal "Links in chat" rule was applied with chezmoi at about 05:57 GMT (LINKS-APPLY a). Nothing is left outstanding.

## Discussion

### Options

- a) Land it in `ki-coordination`'s reporting standard beside CHANGE-NAMES, with the icons and their order set there, and point Kris's personal "Links in chat" rule at it, a chezmoi edit for Kris to apply. Recommended, medium.
- b) Keep the personal rule's one best link.

### To reach high confidence

Kris's word on the three icons, and on whether a link that cannot open where he reads, such as a `file://` path on his phone, is still given.
