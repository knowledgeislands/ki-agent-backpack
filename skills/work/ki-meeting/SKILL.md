---
name: ki-meeting
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: process
ki-applicability: invocation-only
ki-guild: work
ki-depends-on: []
ki-shared-dependencies: [ki-skills:rubric]
description: >
  Call, hold and close a meeting: a room at one node of the work tree where named participants, each reaching it by
  the first route that works, make, review or look back on something together, in sittings with a roll call, one file
  per message, check-ins and minutes, while decisions go to a change document. Use to call a meeting, open, adjourn
  or join a sitting, or close one, and to choose a workshop, review, retrospective or standing room; use
  `ki-coordination` for coordinating work and its reports, and `ki-work-package` for the package a meeting serves.
argument-hint: 'adjourn <meeting> | call <node id> <slug> | close <meeting> | help | join <meeting> | sit <meeting>'
---

# ki-meeting

**Kind:** process. Runs one meeting from its call to its close, held by hand in a folder of plain files that every participant reaches by its own route.

Read [the meeting standard](references/standard-meeting.md) before calling, joining or keeping a meeting, and the standard for the meeting's type: [workshop](references/standard-workshop.md), which makes something together; [review](references/standard-review.md), which gives a verdict on each part of something made; [retrospective](references/standard-retrospective.md), which looks back for what to keep and what to change; or [standing room](references/standard-standing-room.md), which runs while its members work and closes only on the owner's word. [The sources](references/sources.md) record the decisions behind them, the ten taken overnight on 14 November and confirmed by the owner that day, with SHARE-OUTPUTS from the Cairn summit's change 15 and the rules of 20 November on rooms, Orca mail, the message form and pruning, from its change 50, and the open questions. [The rubric](references/rubric.md) lists what a review of a meeting checks, each criterion a judgment drawn from the meeting standard.

## When to use it

A meeting is optional (ROOMS-OPTIONAL). Seats run in Orca wherever they can (ORCA-HOME), and every session in Orca reaches another by Orca mail, on the same Mac or across the bridge to the other, with no meeting (ROOMS-CHANNEL, ORCA-FIRST); an agent host's own messaging is only for a session outside Orca, and each session keeps its own state in its own package, so no room is needed to hold it. Set up a meeting mainly to reach a seat outside Orca, such as a voice client, and otherwise to share outputs or resources or to work together in a sitting, or when the owner asks for one. Where that need lasts, as in a voice client's standing conversation, hold a standing room. A direct message carries conversation, not work: work goes along the tree, and every decision to its change document.

## Contract

- **Routes, the first that works:** Orca mail; the agent host's own messaging, only for a session outside Orca; a meeting folder, reached on the file system or through the participant's own connector to the repository's host; exchange mode, the owner carrying prompts both ways, only as the exception.
- **One caller** calls, keeps and closes the meeting, and is the only session in Orca in the room; the owner owns it, and the owner's word decides.
- **The folder** is `meetings/<node id>/<date>-<slug>/` in the store that holds the work tree, today the Cairn store: `_index.md` (summary, brief, agenda, boundaries, open asks, minutes), `messages/`, `brief/`, an output folder named for the work, and `notes/`; a standing room needs no `brief/` or output folder.
- **Sittings,** A, B, C and on, each with a stated end and a closing call before it, except in a standing room, opened by a roll call, kept by listening and 15-minute check-ins while work runs, and adjourned with minutes and a resume note.
- **Messages** are one file each, opening with a front matter block of Orca mail's fields, of which only from, to and subject are required, and never edited (MSG-FORM); a sitting's messages go when it adjourns or the room closes, and in a sitting that runs on, those answered or acknowledged more than 24 hours ago go too (ROOM-PRUNE).
- **The meeting holds the conversation, never the decision.** Each decision the owner takes goes into its change document as it is taken; each choice left to the owner goes into that document's open questions.

## Relationship boundary

- `ki-work-package` owns the package a meeting serves and its change documents; only the session bound to a package changes it.
- `ki-coordination` owns coordinating work, its levels, states and report forms.
- `ki-delegation` owns the background runs a participant hands long work to.
- `ki-authoring` owns the format of the change documents that hold a meeting's decisions.
- The store's own contract owns its `meetings/` folder, who keeps it, its roster and its commit gate.

A repository that cannot work without this skill, such as the Cairn store, carries a committed copy of it, recording the backpack commit it came from; that copy is the version that counts there.

## Invocation

- `help`, `-h`, or `?` explains the meeting shape and these verbs without reading or writing anything.
- `call <node id> <slug>` checks the caller may call at that node and that no simpler route serves, chooses the type, makes the folder, writes `_index.md` with its summary, brief, agenda and boundaries, commits it, and opens sitting A.
- `sit <meeting>` opens the next sitting: its stated end, the roll call with each participant's route to Git, the join check in the first sitting, listening at the agenda's intervals and the check-ins.
- `join <meeting>` takes part as a participant: rename the session to the line its opener names, first, then read `_index.md` and the brief, answer the roll call by its own route, say what it needs, and listen at the interval the agenda gives it, handing its work to its agent host's own subagents and checking what they return before posting it.
- `adjourn <meeting>` ends the current sitting with its minutes and a resume note, and prunes its messages once the minutes carry their outcomes.
- `close <meeting>`, for a standing room only on the owner's word, writes the closing message naming each outcome and the change document holding it, stops listening, prunes the remaining messages, and leaves the folder for removal once the owner has reviewed the work's record.

With no meeting, no node, or no owner's word to hold one, report what is missing and stop.
