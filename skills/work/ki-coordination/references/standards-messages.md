# Coordinating-work standard: messages and surfaces

This file holds how work reaches other work now that the message queue has retired, and the surfaces a coordinator reads. It extends [the core](standards-coordination.md).

## Sessions work alone

A session is independent and autonomous over its work package and the repositories its `repositories:` names. It does its work there with its agent host's own subagents, under the `ki-delegation` [background-run standard](../../../agentic-systems/ki-delegation/references/standards-background-runs.md), and those subagents act across those repositories. It never asks another session to act for it. It contacts another session only when that is essential, and then as a one-way hand-off that nobody waits on: a lesson learned, for example, goes to the guildmaster, who takes it up as scheduled work. A hand-off goes along the tree under [Work between packages](#messages-between-work), a signal that confers no execution authority.

Sources: SESSIONS-ALONE and AGENT-HOST in [the decision register](sources.md#decision-register).

## The Cairn Beacon

Messages between sessions are gone (MESSAGES-GO): the Cairn store keeps no `messages/`, and the Cairn MCP is being reworked to hold meetings, which the Beacon is to call and manage. Until then sessions on different agent hosts talk in a meeting under `ki-meeting`, and the owner carries anything urgent between them by hand. The [Agent Host Protocol](https://microsoft.github.io/agent-host-protocol/specification/overview.html), AHP, may later carry what polling carries now, for an agent host the `ki-agentic-radar` radar shows supports it. Other ways agent hosts coordinate, such as Orca's orchestration ask and reply, are watched in the radar and never adopted as a channel between sessions.

Sources: AHP-RADAR and MSG-RETIRE in [the decision register](sources.md#decision-register); AHP in [the outside sources](sources.md#outside-sources).

<a id="messages-between-work"></a>

## Work between packages

The message queue has retired (MSG-HOME, MSG-RETIRE): no package keeps a `messages.md`, no session writes a line into another package, and conversation between sessions goes through their agent host's own messaging or a meeting, under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md), whose [messages](../../ki-meeting/references/standard-meeting.md#48-messages) keep the queue's best parts. Work for another package goes along the tree, under [Steer and feedback](standards-reporting.md#steer-and-feedback).

- **Along the tree:** a hand-off, a rollout, a unit to route, a release notice or a method improvement goes up as feedback to the nearest node above both packages, and comes down from it as steer.
  - The receiving package's holder records it, or the root's guardian while no session holds the package: in a change document, its Open section for what needs the owner, or in `_index.md`'s Now or Held.
  - It is never a record in the receiver's roadmap or triage. Only genuinely deferred work the receiver owns becomes a record, captured by the receiver's own coordinator under the `ki-work next` [capture rule](../../../keystone/ki-work/references/standards-next-work.md#capture-substantive-prospective-work); the sender never writes it.
  - A route `ki-trades` declares keeps its trade records.
- **Receipt:** a package cannot reject what it is given, and steer confers no authority wider than its giver's. The receiver does what it can with each unit:
  - the part its existing authority covers goes into `_index.md`'s Now;
  - the part needing the owner's authority, capacity or a scope change becomes a query in the Open section of the change document it belongs to;
  - only the part it judges is not its own goes back up, once and with the reason, after it has done what it can with the rest, and never the whole.
- **A proposed transfer** of work goes at the bottom of the Summary's Queries, naming the receiving package and asking permission before sending, unless the owner has already authorised that transfer.
- **Method changes** reach work at its next bootstrap, re-anchoring or update of its state, under [Refreshing this guidance](standards-coordination.md#refreshing-this-guidance): it compares `ki-method_read` with the backpack's latest revision and rereads what changed. No line is sent.
- **Release notices:** after an authorised release, the releasing coordinator sends each affected package a notice along the tree, naming the released version, the relevant change, compatibility, adoption steps and any reply needed. The receiver owns adoption and any genuinely deferred record. The notice is an obligation only: it grants no release authority, consumer selection, rollout execution or foreign-record creation.
- **Owner feedback on a document:** the owner writes one consolidated feedback package, `feedback/<date>-<slug>.md`, into the package of the work that produced the document, under the `ki-work-package` [writers](../../ki-work-package/references/standard-work-package.md#49-writers). Its holder records each point's disposition where it lands, and the feedback package stays until a tidy finds every point homed.
- **Urgent work:** a unit is urgent only when it carries a stated deadline or rolls out a process change other work must follow; not everything is an escalation. Urgent work never waits in a package:
  1. The sender tells the owner at once, and reaches the owning work's live holder through its agent host's messaging or a meeting they both sit in, where one reaches it.
  2. Only where no one is live and the unit lies within the sender's own authority, the sender does it through a detached run and tells the owner, naming the run and its commits. Outside the sender's authority it goes to the owner as a blocking query.

  A worker is **live** when its `ki-workers` entry in the package's `_index.md` says `status: active`, it is listening, and its package or Cairn shows activity within the last 30 minutes. Listening is read from meetings alone: a session is listening while it is a participant of an open meeting with a sitting under way, the `ki-workers` entry's actor id, `id: actor:<id>`, listed in the meeting's entry file under `ki-participants` with `ki-status: open`, the two matched by id alone (ACTOR-KEY), under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md#45-the-entry-file). No `ki-workers` entry or roster file carries `listening`. Cairn reads the register and is not a second source.

Sources: MSG-RETIRE, ROUTE-RECEIPT, HANDOFF-AS-MESSAGE, URGENT-CRITERIA, LIVENESS, LISTEN-HOME and FEEDBACK-AS-MESSAGE in [the decision register](sources.md#decision-register); MSG-HOME in `ki-meeting`'s [sources](../../ki-meeting/references/sources.md#3-decisions).

## Surfaces

A coordinator learns of other work through its own package, `_index.md` and the change documents, which travel through Git; through the meetings it sits in; and from a run through its report and its agent host's notice. Where the agent host can message another live session on the same machine, as Claude Code can and Codex cannot, sessions may talk that way under `ki-meeting`'s [routes](../../ki-meeting/references/standard-meeting.md#46-routes).

**A backend reply is not visible progress.** A reply through an agent host's messaging counts only once it is on a surface the owner looks at. The receiving coordinator writes what it did into its next owner-facing turn and its `_index.md`'s Now; the sender keeps the item under its tag, as "acked by backend, not yet visible", until then.

| Surface | Carries | Who writes it | When |
| --- | --- | --- | --- |
| Transcript | Owner turns and the coordinator's own replies; nothing injected | The coordinator, in its report | Every owner-facing turn names what reached the work and what it did since the last one |
| Package | `_index.md`'s front matter, which `ki work status` reads, its Now and Held; the change documents with their Open sections and parked tags | The package's holder, under the work-package standard, or the root's guardian while none holds it | `_index.md`'s state at every send, receive, mark and hold, and its definition when the work changes |
| Work status | `ki work status --format json`, schema `ki/work-status/v1`, and the five views | `ki`, reading every package | On demand; the Observatory reads only this |
| Notification | Work received, session recovered, session errored | Not this standard | The notification record in Knowledge Islands Principal owns the channel |

A nudge through an agent host's messaging carries conversation, not work: work reaches a package only along the tree.

Sources: SURFACES-RULE in [the decision register](sources.md#decision-register).
