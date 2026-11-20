---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-20T15:10:00Z
ki-status: in force
---

# Meeting

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 When to meet](#41-when-to-meet)
  - [4.2 Who calls, keeps and owns a meeting](#42-who-calls-keeps-and-owns-a-meeting)
  - [4.3 Types](#43-types)
  - [4.4 Where a meeting is kept](#44-where-a-meeting-is-kept)
  - [4.5 The entry file](#45-the-entry-file)
  - [4.6 Routes](#46-routes)
  - [4.7 Sittings and the roll call](#47-sittings-and-the-roll-call)
  - [4.8 Messages](#48-messages)
  - [4.9 Listening and check-ins](#49-listening-and-check-ins)
  - [4.10 A busy participant](#410-a-busy-participant)
  - [4.11 Doing the work](#411-doing-the-work)
  - [4.12 Git and private data](#412-git-and-private-data)
  - [4.13 Decisions](#413-decisions)
  - [4.14 Minutes](#414-minutes)
  - [4.15 Closing](#415-closing)
  - [4.16 Runtime binding](#416-runtime-binding)
  - [4.17 Pruning](#417-pruning)

## 1. Introduction

A meeting is a room at one node of the work tree, where named participants come together for a while, with a purpose and an express remit, to make, review or look back on something, and then go back to working alone. It is held by hand today, in a folder of plain files that every participant reaches by its own route; a tool may later hold the same shape. The owner, the person whose work it is, owns every meeting, and the meeting holds the conversation, never the decision. The decisions behind these rules are in [the sources file](sources.md#3-decisions).

Ten points taken overnight on 14 November 2026 under the owner's remit for high-confidence work were confirmed by the owner as a whole the same day, as was SHARE-OUTPUTS, from the Cairn summit's change 15; [the sources file](sources.md#3-decisions) lists them.

On 20 November 2026 the owner made rooms optional, now that sessions in Orca reach each other by Orca mail: seats run in Orca wherever they can, a room is set up mainly to reach a seat outside Orca and otherwise to share outputs or resources, a room's message opens with Orca mail's fields, and a room's messages are pruned (ROOMS-OPTIONAL, ROOMS-CHANNEL, ORCA-FIRST, ORCA-HOME, MSG-FORM and ROOM-PRUNE).

[Back to contents](#contents)

## 2. Scope

What a meeting is, how it is called, held and closed, and how its participants reach each other.

### 2.1 In scope

- When a meeting is worth calling, rooms being optional, and who calls, keeps and owns one.
- The four types of meeting and what each produces, with a standard of its own for each.
- The meeting folder, its entry file and its messages.
- Routes, sittings, roll calls, listening and check-ins.
- How work, Git, private data and decisions are handled in a meeting, and its minutes and close.
- Pruning a room's messages.

[Back to contents](#contents)

### 2.2 Out of scope

- The work package a meeting serves and its change documents: `ki-work-package`.
- Coordinating work, its levels, states and reports: `ki-coordination`.
- Background runs a participant starts: `ki-delegation`.
- The format of a change document: `ki-authoring`.
- The store a meeting lives in, its roster and its commit gate: that store's own contract.
- Orca mail between sessions, and waking a session with it: `ki-coordination`'s [messages standard](../../ki-coordination/references/standard-messages.md#42-orca-mail-and-the-cairn-beacon).
- Another name for a meeting: "meeting" stays (MEETING-NAME, Kris, 17 November 2026).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Meeting** | A room at one node of the work tree that named participants attend for a while, with a purpose, a type and an end. **Standard:** this one, [4.1](#41-when-to-meet) |
| **Owner** | The person whose work it is; owns every meeting, and whose word decides. **Standard:** this one, [4.2](#42-who-calls-keeps-and-owns-a-meeting) |
| **Caller** | The session that calls a meeting, keeps it and closes it, and the only session of its agent host in the room. **Standard:** this one, [4.2](#42-who-calls-keeps-and-owns-a-meeting) |
| **Chair** | The session that runs a meeting's sittings; the caller, unless the owner starts another session to chair. **Standard:** this one, [4.2](#42-who-calls-keeps-and-owns-a-meeting) |
| **Participant** | Each session or person taking part, with a role stated in the agenda, such as caller, maker, reviewer, illustrator or owner. **Standard:** this one, [4.5](#45-the-entry-file) |
| **Layers** | The four parts of how a meeting carries what is said, each of which can change without the others: the transport, the delivery, the waking and the record. **Standard:** this one, [4](#4-rules) |
| **Orca mail** | Orca's mail between agent sessions, `orca orchestration send`, `reply`, `check` and `inbox`, reaching any session in Orca, running or idle, on the same Mac or across the bridge. **Standard:** `ki-coordination`'s [messages standard](../../ki-coordination/references/standard-messages.md#42-orca-mail-and-the-cairn-beacon) |
| **The bridge** | Orca mail between two paired Orca hosts on different Macs, sent with `--on <host>`. **Standard:** this one, [4.6](#46-routes) |
| **Route** | How a participant reaches the others: Orca mail, its agent host's own messaging outside Orca, the meeting folder, or exchange mode. **Standard:** this one, [4.6](#46-routes) |
| **Exchange mode** | The exception in which the owner carries prompts both ways for a participant that cannot reach the folder. **Standard:** this one, [4.6](#46-routes) |
| **Sitting** | One period of a meeting, lettered A, B, C and on, with a stated end except in a standing room, opened by a roll call and ended by its minutes. **Standard:** this one, [4.7](#47-sittings-and-the-roll-call) |
| **Closing call** | The chair's message, 15 minutes before a sitting's stated end, that asks what each participant will finish by then. **Standard:** this one, [4.7](#47-sittings-and-the-roll-call) |
| **Roll call** | Each participant's answer at a sitting's start: its clock, its role and the sitting's goal in its own words. **Standard:** this one, [4.7](#47-sittings-and-the-roll-call) |
| **Message** | One file in the meeting's `messages/`, opening with a front matter block of Orca mail's fields, never edited once written. **Standard:** this one, [4.8](#48-messages) |
| **Open ask** | Something a message asks of a named participant, tracked in the entry file until answered. **Standard:** this one, [4.8](#48-messages) |
| **Minutes** | A sitting's record in the entry file: what was done, decisions, other business, actions, choices left to the owner and the transcript. **Standard:** this one, [4.14](#414-minutes) |
| **Pruning** | Deleting from the working tree a room's messages whose outcomes have a home elsewhere; Git history keeps them. **Standard:** this one, [4.17](#417-pruning) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

**Four layers** (MEET-LAYERS, Kris, 17 November 2026). How a meeting carries what is said falls into four layers, each of which can change without the others:

- **the transport,** how a participant reaches the others: its route ([4.6](#46-routes));
- **the delivery,** how a message comes to a participant's attention: listening and check-ins ([4.9](#49-listening-and-check-ins));
- **the waking,** how a participant is started or brought back to the room: the opener (WAKE-OPENER, [4.7](#47-sittings-and-the-roll-call));
- **the record,** what lasts: the meeting folder in Git ([4.4](#44-where-a-meeting-is-kept), [4.12](#412-git-and-private-data)).

So a meeting can change its transport, as when a tool or Orca mail takes over from the folder, without changing its record.

### 4.1 When to meet

1. **Direct first** (ROOMS-CHANNEL and ORCA-FIRST, Kris, 20 November 2026). Every session running in Orca reaches another by Orca mail, running or idle, on the same Mac and across the bridge to the other, under `ki-coordination`'s [messages standard](../../ki-coordination/references/standard-messages.md#42-orca-mail-and-the-cairn-beacon). An agent host's own messaging is used only for a session outside Orca ([4.16](#416-runtime-binding)), and work within one session goes to its own subagents. Each receiver keeps its own state in its own work package.
2. **Seats run in Orca wherever they can** (ORCA-HOME, Kris, 20 November 2026), so that Orca mail reaches them.
3. **A room is optional** (ROOMS-OPTIONAL, Kris, 20 November 2026). Since each session keeps its own state, a room is never needed to hold it. A meeting is set up mainly to reach a seat outside Orca, such as a voice client, and otherwise when there is a benefit: to share outputs or resources, such as boards, designs or a brief, or to work together in a sitting. A room that is only a route closes once its members can mail each other.
4. **A meeting sits at one node** of the work tree, has a type, a purpose and its participants, and ends. Question, answer and information are messages inside it; the opening carries the brief, joining replaces an acknowledgement, and the close ends it.
5. **Each session goes back to working alone** when the meeting ends. A meeting grants no authority beyond what the owner gives in it or in the owner's own sessions. Addressed messages in the store are gone (MESSAGES-GO); a direct message carries conversation, not work, which goes along the tree, and every decision goes to its change document.

[Back to contents](#contents)

### 4.2 Who calls, keeps and owns a meeting

1. **Who calls.** The session holding the node, or one above it; at the root, the root's guardian. A session below the node asks up.
2. **The owner owns the meeting.** The owner's word decides. A participant that disagrees says so in a message, and does not change course on its own.
3. **One caller in the room.** The caller is the only session in Orca that listens in the room. A seat outside Orca, one Orca mail cannot reach, such as a desktop design session or a voice client, sits in the room with it and is treated almost as a subagent. Other sessions in Orca stay out and talk to the caller by Orca mail; the caller brings them what the room needs and carries their answers back.
4. **The caller keeps it.** It makes the folder, writes and keeps the entry file, opens and adjourns each sitting, keeps the open asks and the minutes, and closes the meeting.
5. **A chair who need not hold the package** (MEET-CHAIR, Kris, 14 November 2026). The caller chairs the meeting. The chair need not hold the work package the meeting serves; the owner may start a session to chair it. The entry file names the owning package and its change document; the package's holder takes part from outside the room by Orca mail, or in it. The chair puts each outcome and each choice left to the owner in the minutes and sends them to the holder, who records them in its change documents, since only the session bound to a package changes it; while no session holds the package, the root's guardian does.

[Back to contents](#contents)

### 4.3 Types

Each meeting is of one type, named in its entry file, which says what the meeting produces:

| Type | What it does | What it produces | Standard |
| --- | --- | --- | --- |
| **Workshop** | Makes something together, such as designs | The thing made, in the output folder, each part final or with its choices listed | [Workshop](standard-workshop.md) |
| **Review** | Assesses something already made | A verdict on each part | [Review](standard-review.md) |
| **Retrospective** | Looks back at a meeting or a run of work | What to keep and what to change, each sent to the change document that owns that way of working | [Retrospective](standard-retrospective.md) |
| **Standing room** | Runs while its members work, as a standing conversation with a seat outside Orca, such as a voice client, and closes only on the owner's word | Messages and minutes; its decisions go to change documents | [Standing room](standard-standing-room.md) |

A meeting runs by this standard and by its type's.

**The standing room** (MEET-STANDING, Kris, 18 November 2026) is the one type with no time limit per sitting and no `brief/` or output folder; where it differs from the rules below, its standard says so.

[Back to contents](#contents)

### 4.4 Where a meeting is kept

1. **A folder per meeting** at `meetings/<node id>/<date>-<slug>/`, with no territory folder, in the store the work tree lives in; today that is the Cairn store, whose contract says who keeps its `meetings/`. `<node id>` is the node's work id and `<date>` the day the meeting is called. This is the current depth. The first trial's folder, `meetings/cairn.wayfinder.designs/`, predates it and keeps its place until it closes; a reader takes both.
2. **The folder holds:**
   - `_index.md`, the entry file, never `README.md`;
   - `messages/`, one file per message;
   - `brief/`, what participants work from, except in a standing room;
   - an output folder named for the work, such as `designs/`, except in a standing room;
   - `notes/`, for anything too long for a message.
3. **How output is named** belongs to the kind of work, such as a design meeting's levels, not to this standard.
4. **Outputs land where their readers can open them** (SHARE-OUTPUTS, Kris, 14 November 2026). The agenda says where each participant's outputs go ([4.5](#45-the-entry-file)); unless the agenda says otherwise, each participant also puts what it makes in the output folder. How each agent host in use shares its outputs is in [4.16](#416-runtime-binding).
5. **Nothing in the folder is a decision.** Outcomes live in change documents ([4.13](#413-decisions)).

[Back to contents](#contents)

### 4.5 The entry file

The caller makes the folder and writes `_index.md`. Setting a meeting up and briefing it are one thing. It opens with a front matter block that tools read (MEETINGS-SOURCE), kept by the caller and changed at each roll call, adjournment and close:

```yaml
---
ki-id: meeting:cairn.wayfinder.designs  # meeting:<folder's name>
ki-document-type: meeting
ki-name: Wayfinder designs              # optional, a human label, never a copy of the id
ki-kind: workshop                       # workshop | review | retrospective | standing-room
ki-sitting: C                           # the current or last sitting
ki-chair: actor:wayland                 # the chair's actor id; the caller's, unless the owner started another session to chair
ki-status: open                         # open | adjourned | closed, the meeting closed after its last sitting
ki-opened: 2026-11-13T22:29Z            # when this sitting opened, from date -u
ki-closed:                              # when this sitting was adjourned or the meeting closed
ki-participants:                        # those who answered this sitting's roll call
  - id: actor:wayland                   # the participant's actor id, naming its roster file
    route: folder                       # orca | host | folder | exchange, as 4.6 numbers them
  - id: actor:ki.cairn@information-architect
    route: folder
---
```

Every field the block holds is one KI defines, so each takes the `ki-` prefix (KI-PREFIX, Kris, 17 November 2026), under the [format format](../../../keystone/ki-authoring/references/standard-formats-format.md#42-front-matter); a participant's own keys, nested inside `ki-participants`, keep their names, and a reader takes a field written without the prefix under its `ki-` name until the meetings are swept. Every resource passes ids, never copies (ACTOR-KEY, Kris, 16 November 2026): the block opens with the meeting's own `ki-id`, `meeting:<folder's name>`, then `ki-document-type`, the kind of document, an optional human `ki-name` and `ki-kind`, and every reference in it is a typed id. The `ki-chair` field (CHAIR-FIELD, Kris, 14 November 2026) names the chair by its actor id. A participant carries only its `id` and its `route`: its name, host and rig are its roster file's, and the role it takes is the agenda's. Every seat in a meeting has a roster file in the store; an actor with no name takes its seat's id, `<package>@<role>`, as `actor:ki.cairn@information-architect` in `roster/ki.cairn@information-architect.md` (SEAT-AT, Kris, 16 November 2026), and that file holds its host and rig. A tool reads this block, the message file names and each message's own block ([4.8](#48-messages)), and nothing else in the folder; a message written before MSG-FORM has no block, and a tool reads only its name. The owner is not listed; the owner is at every meeting. Then, in order:

1. **Summary,** kept current: where the meeting stands, the decisions it has led to, and what comes next.
2. **Brief:** why the meeting exists, what it should produce, the change document that will hold its decisions, and what participants work from.
3. **Agenda:** the sittings, each with its items and its end, stated when it opens ([4.7](#47-sittings-and-the-roll-call)), and each participant with its role, its session line ([4.7](#47-sittings-and-the-roll-call)), how it is reached, how it is woken, how it writes, where its outputs go, and who listens at what interval and until when.
4. **Boundaries:** what the meeting may and may not do.
5. **Open asks,** as a checklist the caller ticks as each is answered.
6. **Minutes,** one part per sitting ([4.14](#414-minutes)).

[Back to contents](#contents)

### 4.6 Routes

How participants reach each other, four levels, the first that works (ORCA-FIRST, Kris, 20 November 2026):

1. **Orca mail.** Every session in Orca reaches another by Orca mail, running or idle, on the same Mac or across the bridge to the other, with no meeting needed for it, under `ki-coordination`'s [messages standard](../../ki-coordination/references/standard-messages.md#42-orca-mail-and-the-cairn-beacon). Never type into another agent's terminal.
2. **The agent host's own messaging,** only for a session outside Orca that its own host can reach ([4.16](#416-runtime-binding)).
3. **A meeting folder.** Otherwise, chiefly for a seat outside Orca, they are brought together in a meeting. Each participant must reach the repository that holds the folder, by whatever route its runtime gives. Most reach it on the file system, where each sees what another writes at once, and still commits, pulls and pushes. One that cannot reaches it through its own connector to the repository's host, such as a GitHub connector. The agenda gives each participant's route.
4. **Exchange mode, the exception.** Only when an agent is too limited to reach the repository at all, or the owner chooses to manage the exchange in person, does the owner carry prompts both ways. The caller writes each prompt as a message ending in one block to paste; the owner pastes it across and brings the answer back; the caller files the answer as that participant's message, marked as carried by the owner, such as "carried by Kris".

**Between machines** (ROOMS-CHANNEL, Kris, 20 November 2026). Sessions on different machines reach each other by Orca mail across the bridge between the paired Orca hosts, sent with `--on <host>`, with replies coming back to the sender's own mailbox; no room is needed for it. This replaces the standing room as the route between rigs, which CROSS-RIG-TRY and MEET-STANDING had set when an agent host's own remote messaging did not reach sessions hosted in Orca ([4.16](#416-runtime-binding)).

[Back to contents](#contents)

### 4.7 Sittings and the roll call

1. **Sittings.** A meeting has no fixed end; it runs in sittings, A, B, C and on. A sitting that reaches its end, or runs out of work, is adjourned: the caller writes its minutes and a resume note saying where the next sitting picks up. The meeting closes after its last sitting.
2. **Each sitting has a stated end** (SITTING-END, Kris, 14 November 2026), except in a standing room, whose sittings have none ([its standard](standard-standing-room.md#43-holding-a-standing-room)). The sitting's opening message states its end, from `date -u`, and the chair may extend it by posting a new one. Fifteen minutes before the end, the chair sends one closing call, asking what each participant will finish by then.
3. **Waking does not rely on listening** (WAKE-OPENER, Kris, 14 November 2026). The sitting's opening names how each participant is woken; today that is the owner pasting an opener the chair gives the owner for each participant. The sitting starts once every roll call is in, and if one is still missing at a time the opening states, the chair tells the owner.
4. **Each new session is named and told to delegate** (OPENER-NAME and OPENER-DELEGATE, Kris, 14 November 2026). The opener or brief that starts a participant in a new agent session names the session line it is to take and tells it to rename itself to that line as its first act, by its agent host's rename (runtime-specific: `/rename <line>` in Claude Code). A participant working in the package without its keys, as a maker in a meeting does, takes `<role glyph> <package>@<role>`, as in `📐 ki.cairn@information-architect`: the glyph and name of its role in `ki-work-package`'s role catalogue and the id of the package the meeting serves, `<package>+<slug>` where it serves a sub-package, under that skill's [thread line](../../ki-work-package/references/standard-roles.md#46-thread-line) (SEAT-LINE, Kris, 14 November 2026, and SEAT-AT, 16 November 2026). The holder of the package keeps its own line, with 🔑. A participant whose actor is named puts the name first and its line in brackets, as in `Quire (📐 ki.cairn@information-architect)` and `Kitteth (🪨 🔑 cairn.summit)`, under NAME-FIRST there; an unnamed one keeps the bare line. The same opener tells the participant to delegate its work to its agent host's own subagents, to stay responsive to the meeting's messages and to the owner while that work runs, and to let the subagents do most of the work, checking what they return before posting it, under [4.11](#411-doing-the-work) (OPENER-DELEGATE, Kris, 14 November 2026).
5. **Roll call.** Each sitting opens with one. Every participant answers with its clock, from `date -u`, its role, and the sitting's goal in its own words, so all work to one time and one aim.
6. **Each route to Git** (GIT-ROUTE, Kris, 14 November 2026). At roll call each participant also states its route to Git: whether it can commit, pull and push.
7. **The join check.** In the first sitting, the roll call also proves each route. The caller sends each participant a code word by its own route, the owner gives each a small task in its own session, and each answers by its route, which proves listening and replying before real work starts.
8. **First needs.** Each participant's first message says what it needs from the meeting.

[Back to contents](#contents)

### 4.8 Messages

1. **One file per message** in `messages/`, never edited once written.
2. **Named** `<YYYYMMDD>T<HHMM>Z-<actor id>-<subject>.md` from `date -u`, so the folder lists in order and two messages in one minute stay distinct. `<actor id>` is the sender's actor id, the `<id>` of the `actor:<id>` its entry under `ki-participants` carries ([4.5](#45-the-entry-file)), exactly, as in `20261116T1342Z-wayland-boards-committed.md` or `20261116T1400Z-ki.cairn@information-architect-levels-ready.md`, since tools match who posted when to its participant from the name alone (MSG-FROM, Kris, 16 November 2026); a message the owner carries keeps the actor id of the participant it is from. Messages posted before MSG-FROM keep their names, which carry the sender's role.
3. **Each opens with a front matter block of Orca mail's fields** (MSG-FORM, Kris, 20 November 2026), so that what a session says by Orca mail it says the same way in a room. The fields use Orca's words, each with the `ki-` prefix:

   ```yaml
   ---
   ki-document-type: message
   ki-from: actor:hob-sol              # required: the sender's actor id, as in the file's name
   ki-to: [actor:hob-terra]            # required: a list of actor ids, or all
   ki-subject: "Cairn install on terra" # required; a reply's is "Re: <subject>"
   ki-type: question                   # status, the default | question | handoff | escalation | heartbeat | decision_gate
   ki-priority: normal                 # normal, the default | high | urgent
   ki-answers: 20261119T1012Z-hob-terra-cairn-install-blocked.md # the message it answers; none by default
   ki-thread: 20261119T1012Z-hob-terra-cairn-install-blocked.md  # the thread's first message; by default the parent's thread, or this file
   ki-files: []                        # the files it points to, by their path in the folder; none by default
   ---
   ```

   - **Only `ki-from`, `ki-to` and `ki-subject` are required;** a field left out takes its default.
   - **Types** are Orca's: a `heartbeat` is a check-in, and a `decision_gate` is a choice left to the owner, which still goes to a change document. Orca's `dispatch`, `worker_done` and `merge_ready` belong to its worker runs and are not used in a room.
   - **Status comes from the replies,** since a message is never edited: a `question`, `handoff` or `escalation` is open until a message whose `ki-answers` names it. Read and delivered stay out of the file: a message is delivered once its commit is pushed, and each participant reads what is new since its last read ([4.9](#49-listening-and-check-ins)).
   - **Then the body:** a title line, `# <subject>`; what changed, in plain words; and a closing `Asks:` naming who must do what.
   - **Messages written before MSG-FORM** keep their opening, who it is from, who it is for and what it answers, until they are pruned ([4.17](#417-pruning)).
4. **Open asks.** The caller keeps them in the entry file and ticks each off when it is answered, so nothing asked is lost.
5. **Against crossing** (TRIAL-LESSONS, Kris, 14 November 2026). A participant that needs the others to wait posts a one-line "hold"; each board or other piece of output is rendered once per review pass; and new messages are read in the order of their times.
6. **A correction names what it corrects** (TRIAL-LESSONS, Kris, 14 November 2026): the message it corrects, by its file name.
7. **Times come from the clock** (TIMES-CLOCK, Kris, 14 November 2026). Every time recorded in a message, the entry file or the minutes comes from `date -u` or from Git, never from memory; any other time is marked "about".

The old message queue's best parts come into meetings here (MSG-HOME, Kris, 15 November 2026: "take [the] best bits from [the queue] and bring it into the meeting standards on messaging"):

8. **Important first.** A message that must be taken before the others carries `ki-priority: high`, in place of the `IMPORTANT` first line used before MSG-FORM, and is kept for what changes how the others work, such as a stop, a redirect or a change of method. Each participant takes important messages first, one at a time in the order of their times and never grouped, then the rest in order.
9. **Urgent is earned.** A message is urgent only when it carries a stated deadline or a change of method the others must follow; not everything is an escalation. Its sender sets `ki-priority: urgent`, in place of the `URGENT` first line used before MSG-FORM, which also makes it important, and wakes its recipient at once by Orca mail, or by the recipient's route where it is outside Orca ([4.6](#46-routes)), rather than waiting for its next listen; where the recipient has not answered within its interval ([4.9](#49-listening-and-check-ins)), the chair tells the owner.
10. **The answer is the receipt.** No message is acknowledged on its own: a participant shows it has taken a message by answering it, naming the message it answers in `ki-answers` (item 3), and the caller ticks the ask off. Joining a sitting acknowledges its opening ([4.1](#41-when-to-meet)).
11. **Taking an ask.** An ask grants no authority, and a participant never refuses one whole. It does what its remit in the meeting covers; the part only the owner can decide becomes a choice left to the owner with its recommendation ([4.14](#414-minutes)); and only the part it judges is not its own goes back, once and with the reason, after it has done the rest.
12. **A change of method.** When a standard the meeting runs by changes during it, the chair posts one message with `ki-priority: high` pointing to the standard at its revision, never restating it, and each participant reads it before its next piece of work and says so in its next message.
13. **A message is its file.** For a participant in the room, a message counts once its file is in `messages/`: a nudge by Orca mail, or through an agent host's messaging outside Orca, names that file, and a sender that only nudged has not sent. An answer given only through a backend is not progress until it is on a surface the owner reads.

[Back to contents](#contents)

### 4.9 Listening and check-ins

1. **The caller listens** while the meeting is open, watching the whole folder and waking when anything in it changes, since a participant can write a note or a brief without a message. Whether a session is listening is read from the meeting alone (LISTEN-HOME, Kris, 16 November 2026): a session is listening while it is a participant of an open meeting with a sitting under way, listed under `ki-participants` in the entry file with `ki-status: open` ([4.5](#45-the-entry-file)). No presence entry, such as the Cairn store's roster, carries `listening`.
2. **A host without a lasting shell** listens by scheduled wake-ups instead, and otherwise re-reads `messages/` when the owner prompts it and before each new piece of work.
3. **The agenda states** each participant's interval, the longest a message waits for it, and when its listening ends.
4. **Sessions outside the room** do not watch it.
5. **Check-ins.** While work is running, as in a workshop's round, every 15 minutes the caller posts `<caller> → all: check-in` in the folder, a `heartbeat`, and sends each participant outside the room a short note by Orca mail; each replies with what is done, what it is doing and what blocks it, or "nothing". A participant that wrote in the last 15 minutes may skip it. Between rounds, with no work running, the caller sends a check-in only when there is news, since an empty one wakes every participant for nothing (CHECKIN-QUIET, Kris, 16 November 2026).
6. **At each wake** (MSG-HOME, Kris, 15 November 2026). Each time a participant wakes or is prompted, it reads the messages new since it last read, important ones first and then in the order of their times ([4.8](#48-messages)), and acts on them without stopping work already running.

[Back to contents](#contents)

### 4.10 A busy participant

Kris, 14 November 2026 (MEET-BUSY):

1. **Briefs are whole.** Each brief is posted whole, in `brief/` or in a message, complete enough to act on without asking, so a participant busy elsewhere picks it up when free.
2. **No one waits on a reply** to keep working. A participant that meets a choice only the owner can make finishes what does not depend on it, lists the choice with its recommendation, and moves to other work, never leaving work stopped on it.

[Back to contents](#contents)

### 4.11 Doing the work

1. **Long work goes to subagents.** Each session hands long work to its own agent host's subagents and keeps its thread free to answer, checks what they return before posting it (OPENER-DELEGATE, Kris, 14 November 2026), and reports results as messages, not commentary.
2. **The caller checks a participant's output** with its own reviewer, such as a render check, and keeps that reviewer across passes, resumed rather than started afresh, so it reuses its scripts and baseline.

[Back to contents](#contents)

### 4.12 Git and private data

1. **Each participant that reaches the repository** commits its own files, pulls and pushes, on the file system or through its connector, and expects to rebase. Pushes are fast-forward only, never forced, and hooks are never skipped.
2. **The caller commits** what a participant in exchange mode, or one without Git, writes. For a participant without Git, such as one in a sandbox that cannot commit, the chair commits each file as soon as it is posted as ready, before rendering it (GIT-ROUTE, Kris, 14 November 2026).
3. **Commit messages** use the store's own commit gate; in the Cairn store, `docs(meetings): …`.
4. **Private data.** Store data shared with a participant, such as a sample of the store for a design to fill, stays in the meeting folder, which is as private as the store, and the caller's side, not the participant's, renders anything that carries it.
5. **An invented sample** (TRIAL-LESSONS, Kris, 14 November 2026). Where a participant's work would be filled with store data, a sample with invented names is agreed at the start, so the participant can render its own work.

[Back to contents](#contents)

### 4.13 Decisions

1. **Each decision the owner takes** goes into its change document as it is taken, by the session that holds the package the meeting serves. The meeting holds the conversation, never the decision.
2. **A refusal** in one participant's session, by its permissions or its own checks, is never relayed through another participant to get round it; it goes to the owner.

[Back to contents](#contents)

### 4.14 Minutes

1. **Each sitting ends with its minutes** in the entry file:
   - what was done;
   - the decisions the owner took, each pointing to its change document;
   - any other business;
   - the actions, each with its owner;
   - the choices left to the owner, each with its recommendation;
   - the resume note, after an adjournment;
   - the transcript: the sitting's messages in order, a line each linking to its file at its last commit, since the sitting's messages are then pruned ([4.17](#417-pruning)).
2. **Choices left to the owner.** Whoever did the work lists them, each with its recommendation, and the caller carries them into the change document's open questions, which feeds the owner's next report.
3. **Choices go to the owner whole** (CHOICES-WHOLE, Kris, 14 November 2026). Each choice carries its context, its options and a recommendation with its confidence, in the message itself.

[Back to contents](#contents)

### 4.15 Closing

1. **The caller's last message closes the meeting,** naming each outcome and the change document that now holds it. Nothing closes by itself, and a standing room closes only on the owner's word. The close restates each choice and recommendation it carries, and never refers back to an earlier message for them (CHOICES-WHOLE, Kris, 14 November 2026).
2. **Listening ends.** The caller's watcher stops, and with `ki-status` no longer `open` in the entry file no participant reads as listening.
3. **Work that landed** during the meeting gets its record, as the store's own rule for records sets.
4. **Its messages go** once the minutes carry each outcome, as [4.17](#417-pruning) sets.
5. **The folder is removed** from the tree once the owner has reviewed that record, and Git history keeps it.

[Back to contents](#contents)

### 4.16 Runtime binding

How the rules above fall on the agent hosts in use when the standard was written. The rules stand without them.

- **Orca mail:** `orca orchestration send`, `reply`, `check` and `inbox`, for every session in Orca, Claude Code or Codex, running or idle, on one rig or across the bridge with `--on <host>` (ROOMS-CHANNEL, ORCA-FIRST). The caller is a session in Orca; other sessions in Orca stay out of the room and reach it by Orca mail. Orca's own guide says to send another agent a message with Orca mail, never by typing into its terminal, and to prefer a session's own subagents for work within one session.
- **Agent host messaging:** Claude Code's SendMessage reaches only running Claude Code sessions on one Mac, so it is used only for a session outside Orca.
- **In the room on the file system:** Claude Design in Claude Desktop, and an illustrator in the ChatGPT desktop app's Codex, each reading and writing the folder directly and committing its own files.
- **Through a connector:** ChatGPT's voice mode, which cannot reach the file system, through its own GitHub connector.
- **Between machines:** Claude Code's Remote Control was the remote messaging to try, between a session on sol and one on terra (CROSS-RIG-TRY). It does not reach the sessions in use, which run Claude Code as their harness inside Orca as their host, since Remote Control comes only with Claude Code's own interface (Kris, 18 November 2026), so rigs reached each other through a standing room (MEET-STANDING). Orca mail across the bridge between the paired Orca hosts now carries it (ROOMS-CHANNEL), as Hob Sol and Hob Terra used it on 20 November 2026, and the housekeepers' standing room closed.
- **Seats outside Orca,** which keep a room: the voice client in ChatGPT's voice mode; on 20 November 2026 also a Claude Design session and a Claude chat in Claude Desktop, and an illustrator in the ChatGPT desktop app's Codex, until each is seated in Orca (ORCA-HOME).
- **Sharing outputs:** Claude Design shares its boards as its own artifacts, which is what the owner expects there, and in a meeting puts them in the output folder too; the illustrator works in its own app and puts what it makes in the output folder, and does not send the owner to GitHub.
- **Without Git:** Claude Design works in a sandboxed shell that cannot delete Git's lock files and has no checkout or push of its own, so it is a participant without Git, and the chair commits its files.
- **Listening:** the caller runs a shell watcher on the folder; Claude Desktop, which cannot keep a shell loop open between turns, listens by scheduled wake-ups. In the first sitting the caller checked every 30 seconds and Claude Design every two minutes until a set time.

[Back to contents](#contents)

### 4.17 Pruning

A room keeps its messages only while they are needed (ROOM-PRUNE, Kris, 20 November 2026: "I suspect with messages we only need them 24h tbh, especially if they are acknowledged"). Each room's caller prunes it; Git history keeps every message.

1. **At each adjournment,** once the minutes carry each outcome and a transcript linking each message at its last commit ([4.14](#414-minutes)), the caller deletes that sitting's messages in the same commit.
2. **At the close,** likewise, the caller deletes the room's remaining messages once the minutes carry the outcomes ([4.15](#415-closing)).
3. **In a sitting that runs on,** as a standing room's or a long workshop's does, the caller deletes, at each roll call and each check-in with news, the messages more than 24 hours old that have been answered or acknowledged, by a message whose `ki-answers` names them.
4. **Never pruned:** the entry file, with its summary, open asks and minutes; a message carrying an ask not yet answered; a message carrying the owner's words, a voice client's above all, until they are recorded in a change document; the current brief and outputs, which are what a room is for (ROOMS-OPTIONAL); and Git history, which is never rewritten.
5. **A link to a pruned message** points to its file at a commit, so it still opens.

[Back to contents](#contents)
