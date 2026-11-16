---
type: sources@2026-11-09T21:36:32Z
revised: 2026-11-15T00:49:56Z
refresh: canonical · on-change
---

# Meeting sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the meeting standard](standard-meeting.md) and the three type standards, [workshop](standard-workshop.md), [review](standard-review.md) and [retrospective](standard-retrospective.md). The standards are owned in house, so the sources are Kris's decisions and the first meeting held by hand rather than outside specifications. The meeting standard was agreed in the Cairn summit's change 30 and made a skill of its own by change 13 (MEET-SKILL a); the Cairn store carries a committed copy of this skill, recording the harness commit it came from (SKILL-COPIES a, SKILL-MODE a).

[Back to contents](#contents)

## 2. Outside sources

The changes and the meeting the standards draw on.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Change 30, Meetings](https://github.com/krisb/ki-cairn-store/blob/b450e98f2f69e3479bb56c8e557d43a47bc60edd/work/cairn/cairn.summit/34-meetings.change.md), the Cairn summit's, §4.1 and §4.2 | Every rule in the meeting standard: §4.1's decisions of 11 and 13 November and the four taken overnight on 14 November, and §4.2's seventeen points for meetings held by hand, from the first trial, of 13 November | 2026-11-14 |
| [Change 35, The first meeting's lessons](https://github.com/krisb/ki-cairn-store/blob/b450e98f2f69e3479bb56c8e557d43a47bc60edd/work/cairn/cairn.summit/35-meeting-trial.change.md), the Cairn summit's, §4.1 and §6 | The six lessons of the first meeting taken overnight on 14 November, and where each is written | 2026-11-14 |
| [Change 15, Where guidance lives](https://github.com/krisb/ki-cairn-store/blob/66c47da2e02bc386dce12aa51d55de40f8b6fbe0/work/cairn/cairn.summit/26-where-guidance-lives.change.md#43-sharing-outputs-the-first-case), the Cairn summit's, §4.3 | SHARE-OUTPUTS: where each participant's outputs go, and how Claude Design and the illustrator share theirs | 2026-11-15 |
| [Change 13, Runtimes and skill copies](https://github.com/krisb/ki-cairn-store/blob/1ffac0a5ee2ea0b94fda4e973596c889f9341573/work/cairn/cairn.summit/24-runtimes-and-skill-copies.change.md#44-the-meetings-skill), §4.2 and §4.4 | The skill itself: the meeting standard and one standard per type, each saying what the type produces; the committed copy in the Cairn store | 2026-11-13 |
| [The Cairn store contract](https://github.com/krisb/ki-cairn-store/blob/1ffac0a5ee2ea0b94fda4e973596c889f9341573/STORE.md#meetings), its Meetings section | The short form of the standard, now a pointer to this skill, and what stays the store's: the folder path and who keeps `meetings/` | 2026-11-13 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [The first meeting, `cairn.wayfinder.designs`](https://github.com/krisb/ki-cairn-store/blob/1ffac0a5ee2ea0b94fda4e973596c889f9341573/meetings/cairn.wayfinder.designs/_index.md), a workshop opened by ki.cairn's warden with Claude Design, a Claude Desktop session, on 13 November 2026, later joined by an illustrator in the ChatGPT desktop app's Codex | A worked example of the entry file, the agenda's routes, sittings, the roll call and join check, render passes and minutes; the workshop standard's rounds and review passes | 2026-11-13 |

[Back to contents](#contents)

## 3. Decisions

Kris took each decision below as recommended, unless the Status says otherwise. MEET-ROOM, MEET-OWNER and MEET-CHECKINS were settled without an id in change 30 and take one here, as they land.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| MEET-FILE | A folder per meeting: an opening file, then one file per turn, the close a turn of its own; nothing is edited. | 2026-11-11 | [meeting](standard-meeting.md#44-where-a-meeting-is-kept) | In force |
| MEET-PATH | Meetings live at `meetings/<node id>/<date>-<slug>/`, with no territory folder. | 2026-11-11 | [meeting](standard-meeting.md#44-where-a-meeting-is-kept) | In force |
| MEET-CALL | A meeting is called by the node's holder or one above it; the guardian at the root; one below asks up. | 2026-11-11 | [meeting](standard-meeting.md#42-who-calls-keeps-and-owns-a-meeting) | In force |
| MEET-KINDS | Question, answer and info are turns inside a meeting; the opening carries the brief, joining replaces ack, the close ends it; addressed messages end. | 2026-11-11 | [meeting](standard-meeting.md#41-when-to-meet) | In force |
| MEET-ATTEND | No new roster field: `listening` is true while an actor attends an open meeting. | 2026-11-11 | [meeting](standard-meeting.md#49-listening-and-check-ins) | Superseded by LISTEN-HOME |
| MEET-CLOSE | The caller closes a meeting, naming each outcome and the change document now holding it; nothing closes by itself; harvest takes closed meetings only. | 2026-11-11 | [meeting](standard-meeting.md#415-closing) | In force |
| MEET-NOW | Nothing in `meetings/` until the MCP holds meetings; outcomes go straight to change documents. | 2026-11-11 | [meeting](standard-meeting.md) | Superseded by MEET-HAND |
| MESSAGES-GO | Addressed messages go away from the apps and the MCP; meetings take their place. Relayed by sol's housekeeper. | 2026-11-13 | [meeting](standard-meeting.md#41-when-to-meet) | In force |
| MEET-HAND | Meetings are held by hand now, in `meetings/`, without waiting for the MCP, which builds the same shape later. | 2026-11-13 | [meeting](standard-meeting.md) | In force |
| MEET-ROOM | One caller in the room: the only Claude Code session that listens there; a host without Orca sits in the room with it; other Claude Code sessions talk to the caller over Orca. | 2026-11-13 | [meeting](standard-meeting.md#42-who-calls-keeps-and-owns-a-meeting) | In force |
| MEET-OWNER | Kris owns the meeting and his word decides; a participant that disagrees says so in a message and does not change course on its own. | 2026-11-13 | [meeting](standard-meeting.md#42-who-calls-keeps-and-owns-a-meeting) | In force |
| MEET-SHAPE | "Run it like a good meeting": types, the entry file, the folder, sittings, roll call, messages, listening, doing the work, Git, private data, decisions, minutes and closing, as change 30 §4.2 sets out. | 2026-11-13 | [meeting](standard-meeting.md), [workshop](standard-workshop.md), [review](standard-review.md), [retrospective](standard-retrospective.md) | In force |
| MEET-ROUTES | Three levels of route, the first that works: the agent host's own messaging; a meeting folder reached on the file system or through a GitHub connector; exchange mode, Kris carrying prompts, only as the exception. Kris, at 17:05. | 2026-11-13 | [meeting](standard-meeting.md#46-routes) | In force |
| MEET-CHECKINS | Check-ins every 15 minutes, in the room and by Orca to those outside it; a participant that wrote in the last 15 minutes may skip one. | 2026-11-13 | [meeting](standard-meeting.md#49-listening-and-check-ins) | In force |
| INDEX-FILE | A folder that needs an opening file uses `_index.md`, never `README.md`. | 2026-11-13 | [meeting](standard-meeting.md#44-where-a-meeting-is-kept) | In force |
| MEET-SKILL | The meeting standard becomes a skill of its own, `ki-meeting`, holding the standard and one standard per type of meeting. | 2026-11-13 | [meeting](standard-meeting.md) | In force |
| MEET-CHAIR | The caller chairs; the chair need not hold the package the meeting serves; the package's holder records outcomes from the chair's minutes. | 2026-11-13 | [meeting](standard-meeting.md#42-who-calls-keeps-and-owns-a-meeting) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| MEET-BUSY | Briefs posted whole; no one waits on a reply; nothing left stopped on a choice only Kris can make. | 2026-11-13 | [meeting](standard-meeting.md#410-a-busy-participant) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| MEETINGS-SOURCE | Cairn reads `meetings/` read only: the entry file's front matter block, kept by the caller, and the message file names, whose `<from>` is the sender's role there. | 2026-11-13 | [meeting](standard-meeting.md#45-the-entry-file) | In force |
| CROSS-RIG-TRY | Nothing is built for a route between machines, a relay included, until one try of the agent host's own remote messaging, Claude Code's Remote Control, between a session on sol and one on terra; the try waits for Kris to turn it on at each. | 2026-11-14 | [meeting](standard-meeting.md#46-routes) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| STANDING-NOW | The housekeepers' standing room carries on as it is, the one exception to the three types, until that try; no fourth type goes into the standard yet. | 2026-11-14 | [meeting](standard-meeting.md#43-types) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| SITTING-END | Every sitting has a stated end, given in its opening from `date -u`; the chair may extend it; one closing call from the chair 15 minutes before. | 2026-11-14 | [meeting](standard-meeting.md#47-sittings-and-the-roll-call) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| GIT-ROUTE | Each participant states its route to Git at roll call; for one without Git, the chair commits each file as soon as it is posted as ready, before rendering it. | 2026-11-14 | [meeting](standard-meeting.md#47-sittings-and-the-roll-call), [Git](standard-meeting.md#412-git-and-private-data) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| CHAIR-FIELD | The entry file's front matter block carries a `chair` field, the caller's role unless Kris starts another session to chair. | 2026-11-14 | [meeting](standard-meeting.md#45-the-entry-file) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| TRIAL-LESSONS | A sample with invented names agreed at the start; a one-line "hold", one render per board per pass, and new messages read by time; a correction names what it corrects. | 2026-11-14 | [messages](standard-meeting.md#48-messages), [private data](standard-meeting.md#412-git-and-private-data) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| CHOICES-WHOLE | Choices go to Kris whole: context, options and a recommendation with its confidence, in the message itself; a close restates them and never refers back. | 2026-11-14 | [minutes](standard-meeting.md#414-minutes), [closing](standard-meeting.md#415-closing) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| TIMES-CLOCK | Every recorded time comes from `date -u` or Git, and any other is marked "about", in the meetings standard and `ki-coordination`. | 2026-11-14 | [messages](standard-meeting.md#48-messages) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| WAKE-OPENER | Waking does not rely on listening: each sitting's opening names how each participant is woken, today Kris pasting an opener the chair gives him; a sitting starts once every roll call is in, and the chair tells Kris if one is missing at a stated time. From the Cairn summit's change 35, after sitting C sat empty for four hours. | 2026-11-14 | [sittings](standard-meeting.md#47-sittings-and-the-roll-call) | In force |
| DRAW-BUILD | Once a decision is agreed, its drawing follows the build rather than leading it; drawings ahead of the build are for open choices only, drawn side by side for Kris. Held in `ki-design-system`, which owns visual design, with a pointer from the workshop standard. From the Cairn summit's change 35. | 2026-11-14 | [workshop](standard-workshop.md#41-what-a-workshop-produces) | In force |
| OPENER-NAME | Every brief or opener that starts a new agent session names the session line it is to take and tells it to rename itself to that line as its first act, `/rename <line>` in Claude Code; meeting participants' openers included. Kris, in conversation, relayed by Wayland. | 2026-11-14 | [sittings](standard-meeting.md#47-sittings-and-the-roll-call) | In force |
| OPENER-DELEGATE | Every opener or brief that starts a session tells it to delegate its work to its agent host's own subagents, stay responsive to its messages and to the owner while that work runs, and let the subagents do most of the work, checking what they return before posting it; meeting participants' openers included. Kris, in conversation. | 2026-11-14 | [sittings](standard-meeting.md#47-sittings-and-the-roll-call), [doing the work](standard-meeting.md#411-doing-the-work) | In force |
| SEAT-LINE | A seat working in a package without its keys, such as a maker in a meeting, is named `<role glyph> <work-id>+<role>`, as Wayland named `📐 ki.cairn+architect` and `🎨 ki.cairn+illustrator` for sitting D; the form is `ki-work-package`'s thread line. Kris, in conversation. | 2026-11-14 | [sittings](standard-meeting.md#47-sittings-and-the-roll-call) | In force |
| SHARE-OUTPUTS | Outputs go where their readers can open them: in a meeting the agenda says where each participant's outputs go, and unless it says otherwise each also lands in the output folder; Claude Design shares its boards as its own artifacts as well, and the illustrator does not send Kris to GitHub. From the Cairn summit's change 15, §4.3. | 2026-11-14 | [where a meeting is kept](standard-meeting.md#44-where-a-meeting-is-kept), [the entry file](standard-meeting.md#45-the-entry-file), [runtime binding](standard-meeting.md#416-runtime-binding) | In force; taken overnight 2026-11-14 under REMIT-HIGH and confirmed by Kris that day |
| LISTEN-HOME | Listening lives only in meetings: a session is listening while it is a participant of an open meeting with a sitting under way, read from the entry file's `participants` and `status: open`; `listening` comes out of every `workers` entry and every roster file, and MEET-ATTEND's line on it comes out. It answers ROSTER-LISTEN beyond its option a. Kris, 16 November, about 10:20 GMT, relayed by the Cairn summit's guardian from the summit's [change 30](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/30-meetings.change.md#41-decided). | 2026-11-16 | [listening](standard-meeting.md#49-listening-and-check-ins), [closing](standard-meeting.md#415-closing) | In force |

[Back to contents](#contents)

## 4. Last review

- 2026-11-16 - LISTEN-HOME a, which Kris took that day, written into [4.9](standard-meeting.md#49-listening-and-check-ins) and [4.15](standard-meeting.md#415-closing): whether a session is listening is read from the meeting alone, a participant of an open meeting with a sitting under way, and no presence entry, the Cairn store's roster included, carries `listening`; closing no longer sets it back to false. MEET-ATTEND's line on `listening` comes out, and ROSTER-LISTEN is answered. The Cairn store's committed copy of this skill needs refreshing. No external source refreshed.
- 2026-11-15 - SHARE-OUTPUTS a, from the Cairn summit's change 26 (now 15), written into [4.4](standard-meeting.md#44-where-a-meeting-is-kept), the agenda in [4.5](standard-meeting.md#45-the-entry-file) and [4.16](standard-meeting.md#416-runtime-binding): the agenda says where each participant's outputs go, unless it says otherwise each also lands in the output folder, and Claude Design and the illustrator share as 4.16 sets; `ki-repo` holds the same rule for a session working in a repository. The Cairn store's committed copy of this skill needs refreshing. No external source refreshed.
- 2026-11-14 - DRAW-BUILD a, which Kris took that day, pointed to from the workshop standard's [4.1](standard-workshop.md#41-what-a-workshop-produces); `ki-design-system` holds the rule. No external source refreshed.
- 2026-11-14 - WAKE-OPENER a, which Kris took that day, written into [4.7](standard-meeting.md#47-sittings-and-the-roll-call) and the agenda in [4.5](standard-meeting.md#45-the-entry-file). No external source refreshed.
- 2026-11-14 - REMIT-HIGH a: Kris confirmed as a whole the ten points taken overnight, so each is in force and the standard no longer marks them for review. No external source refreshed.
- 2026-11-14 - OPENER-DELEGATE a, which Kris took that day in conversation, written into [4.7](standard-meeting.md#47-sittings-and-the-roll-call) and [4.11](standard-meeting.md#411-doing-the-work): the opener that starts a participant in a new session also tells it to delegate its work to its agent host's own subagents, stay responsive while that work runs and check what they return before posting it. The Cairn store's committed copy of this skill needs refreshing. No external source refreshed.
- 2026-11-14 - OPENER-NAME a and SEAT-LINE a, which Kris took that day in conversation, written into [4.7](standard-meeting.md#47-sittings-and-the-roll-call): the opener that starts a participant in a new session names its session line and has it rename itself first, a maker without the package's keys taking `<role glyph> <work-id>+<role>`, and the agenda gives each participant's line. The Cairn store's committed copy of this skill needs refreshing. No external source refreshed.
- 2026-11-14 - The ten points of change 34 (now 30) §4.1 (MEET-CHAIR, MEET-BUSY, CROSS-RIG-TRY, STANDING-NOW) and change 35 §4.1 (SITTING-END, GIT-ROUTE, CHAIR-FIELD, TRIAL-LESSONS, CHOICES-WHOLE, TIMES-CLOCK), taken overnight by the Cairn summit's guardian under REMIT-HIGH, written into the meeting standard at the sections change 35 §6 names, each marked where it stands, for Kris's review; he confirms or undoes them as a whole. Held for Kris and not written: WAKE-OPENER and DRAW-BUILD from change 35, CHECKIN-QUIET, ROSTER-LISTEN, CROSS-RIG and MEET-STANDING from change 34.
- 2026-11-13 - The skill written from change 34 (now 30) §4.1 and §4.2 and change 24 (now 13) §4.4, on Kris's word ("you need to write the meeting skill now"), and copied into the Cairn store. Only the workshop has been held, in one meeting; the review and retrospective standards are kept to what each type needs until one is held, and change 34's gap "more meetings to test it" stands. Watching four open questions in [change 34 §7.1](https://github.com/krisb/ki-cairn-store/blob/1ffac0a5ee2ea0b94fda4e973596c889f9341573/work/cairn/cairn.summit/34-meetings.change.md#71-questions), each recommended a):
  - **CHECKIN-QUIET:** between rounds, when no work is running, a check-in is sent only when there is news; or every 15 minutes regardless.
  - **MEET-CHAIR:** a chair that need not hold the package, as [the standard](standard-meeting.md#42-who-calls-keeps-and-owns-a-meeting) proposes; or the chair is always the package's holder.
  - **MEET-BUSY:** whole briefs and no waiting on replies, as [the standard](standard-meeting.md#410-a-busy-participant) proposes; or left to each meeting's agenda.
  - **ROSTER-LISTEN:** every participant with a roster entry shows `listening` while it takes part in an open meeting; or only the chair does.

[Back to contents](#contents)
