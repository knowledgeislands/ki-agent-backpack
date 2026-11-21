---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-21T22:45:00Z
ki-status: in force
---

# Coordinating-work standard: messages and surfaces

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Sessions work alone](#41-sessions-work-alone)
  - [4.2 Orca mail and the Cairn Beacon](#42-orca-mail-and-the-cairn-beacon)
  - [4.3 Work between packages](#43-work-between-packages)
  - [4.4 Surfaces](#44-surfaces)
  - [4.5 Waking an idle Orca tab](#45-waking-an-idle-orca-tab)

## 1. Introduction

This file holds how work reaches other work now that the message queue has retired, and the surfaces a coordinator reads. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a session works alone, how work reaches other work along the tree now the message queue has retired, and the surfaces a coordinator reads.

### 2.1 In scope

- A session's independence over its package and repositories.
- Orca mail as the channel between sessions in Orca, the order of routes, and the Cairn Beacon.
- Work between packages: along the tree, receipt, transfers, method changes, release notices and owner feedback.
- Urgent work and when a worker is live.
- Quiet news: what interrupts the owner from a background-only, stood-down or paused actor.
- The surfaces a coordinator reads and writes.
- Waking an idle Orca tab by Orca mail.

[Back to contents](#contents)

### 2.2 Out of scope

- Meetings and their messages: `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md).
- Steer and feedback in a report: [reporting](standard-reporting.md).
- Cascading work down the tree: `ki-work-package`'s [work-package standard](../../ki-work-package/references/standard-work-package.md).
- Background runs: `ki-delegation`'s [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Orca mail** | Orca's mail between agent sessions, `orca orchestration send`, `reply`, `check` and `inbox`: the channel between every session running in Orca, running or idle, on the same Mac or across the bridge between paired Orca hosts. **Standard:** this one, [4.2](#42-orca-mail-and-the-cairn-beacon) |
| **Cairn Beacon** | What is to call and manage meetings once the Cairn MCP holds them. **Standard:** this one, [4.2](#42-orca-mail-and-the-cairn-beacon) |
| **Along the tree** | The one way work reaches another package: up as feedback to the nearest node above both, and down from it as steer. **Standard:** this one, [4.3](#43-work-between-packages) |
| **Urgent work** | A unit with a stated deadline, or one rolling out a process change other work must follow; it never waits in a package. **Standard:** this one, [4.3](#43-work-between-packages) |
| **Live** | A worker whose `ki-workers` entry says `status: active`, that is listening, and whose package or Cairn shows activity within the last 30 minutes. **Standard:** this one, [4.3](#43-work-between-packages) |
| **Surface** | Where a coordinator learns of or reports work: the transcript, the package, work status or a notification. **Standard:** this one, [4.4](#44-surfaces) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Sessions work alone

A session is independent and autonomous over its work package and the repositories its `repositories:` names. It does its work there with its agent host's own subagents, under the `ki-delegation` [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md), and those subagents act across those repositories. It never asks another session to act for it. It contacts another session only when that is essential, and then as a one-way hand-off that nobody waits on: a lesson learned, for example, goes to the guildmaster, who takes it up as scheduled work. A hand-off goes along the tree under [Work between packages](#messages-between-work), a signal that confers no execution authority.

Sources: SESSIONS-ALONE and AGENT-HOST in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

<a id="42-the-cairn-beacon"></a>

### 4.2 Orca mail and the Cairn Beacon

Orca mail is the channel between sessions in Orca (ROOMS-CHANNEL, ORCA-FIRST). Every session running in Orca reaches another with `orca orchestration send`, and answers with `reply`, running or idle, on the same Mac or across the bridge between the paired Orca hosts with `--on <host>`; each receiver keeps its own state in its own work package. The routes, in order:

1. **Subagents, within a session.** Work inside one session goes to its agent host's own subagents, under [Sessions work alone](#41-sessions-work-alone).
2. **Orca mail, between sessions in Orca,** on the same Mac and across the bridge, waking an idle one as [Waking an idle Orca tab](#45-waking-an-idle-orca-tab) sets. Never type into another agent's terminal, and if mail is refused, never fall back to `orca terminal send`.
3. **The agent host's own messaging, only for a session outside Orca,** where that host's messaging reaches it; one host's messaging may reach only its own running sessions on one Mac.
4. **A meeting room, optional,** under `ki-meeting`'s [when to meet](../../ki-meeting/references/standard-meeting.md#41-when-to-meet): set up mainly to reach a seat outside Orca, such as a voice client, and otherwise to share outputs or resources or to work together in a sitting.

A message by any route carries conversation, not work, under [Surfaces](#44-surfaces); work goes along the tree.

Messages in the Cairn store are gone (MESSAGES-GO): the store keeps no `messages/`, and the Cairn MCP is being reworked to hold meetings, which the Beacon is to call and manage. The [Agent Host Protocol](https://microsoft.github.io/agent-host-protocol/specification/overview.html), AHP, may later carry what polling carries now, for an agent host the `ki-agentic-radar` radar shows supports it. The rest of Orca's orchestration, its worker dispatch, ask and decision gates, stays watched in the radar.

Sources: AHP-RADAR, MSG-RETIRE, ROOMS-CHANNEL, ORCA-FIRST and ORCA-WAKE in [the decision register](sources.md#3-decisions); ROOMS-OPTIONAL and ORCA-HOME in `ki-meeting`'s [sources](../../ki-meeting/references/sources.md#3-decisions); AHP in [the outside sources](sources.md#2-outside-sources).

<a id="messages-between-work"></a>

[Back to contents](#contents)

### 4.3 Work between packages

The message queue has retired (MSG-HOME, MSG-RETIRE): no package keeps a `messages.md`, no session writes a line into another package, and conversation between sessions goes by Orca mail under [Orca mail and the Cairn Beacon](#42-orca-mail-and-the-cairn-beacon), by the agent host's own messaging only outside Orca, or in a meeting, under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md), whose [messages](../../ki-meeting/references/standard-meeting.md#48-messages) keep the queue's best parts. Work for another package goes along the tree, under [Steer and feedback](standard-reporting.md#416-steer-and-feedback), and cascades down it under `ki-work-package`'s [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down): delegate down, own it if there is no one below, escalate up.

- **Along the tree:** a hand-off, a rollout, a unit to route, a release notice or a method improvement goes up as feedback to the nearest node above both packages, and comes down from it as steer.
  - The receiving package's holder records it, or the root's guardian while no session holds the package: in a change document, its Open section for what needs the owner, or in `_index.md`'s Now or Held.
  - It is never a record in the receiver's roadmap or triage. Only genuinely deferred work the receiver owns becomes a record, captured by the receiver's own coordinator under the `ki-work next` [capture rule](../../../keystone/ki-work/references/standard-next-work.md#432-capture-substantive-prospective-work); the sender never writes it.
  - A route `ki-trades` declares keeps its trade records.
  - Work is never sent to a package with no one seated, no seat under its `ki-workers`: the node holding it owns it and does it itself, rather than parking it there to wait for a seat.
- **Receipt:** a package cannot reject what it is given, and steer confers no authority wider than its giver's. The receiver does what it can with each unit:
  - the part its existing authority covers goes into `_index.md`'s Now;
  - the part needing the owner's authority, capacity or a scope change becomes a query in the Open section of the change document it belongs to;
  - only the part it judges is not its own goes back up, once and with the reason, after it has done what it can with the rest, and never the whole;
  - otherwise only an escalation goes back up, a decision beyond its remit, along the path the work came down: never for want of a response, and never because the work is hard.
- **A proposed transfer** of work goes at the bottom of the Summary's Queries, naming the receiving package and asking permission before sending, unless the owner has already authorised that transfer.
- **Method changes** reach work at its next bootstrap, re-anchoring or update of its state, under [Refreshing this guidance](standard-coordination.md#482-refreshing-this-guidance): it compares `ki-method_read` with the backpack's latest revision and rereads what changed. No line is sent.
- **Release notices:** after an authorised release, the releasing coordinator sends each affected package a notice along the tree, naming the released version, the relevant change, compatibility, adoption steps and any reply needed. The receiver owns adoption and any genuinely deferred record. The notice is an obligation only: it grants no release authority, consumer selection, rollout execution or foreign-record creation.
- **Owner feedback on a document** reaches the work that produced it along the tree: its holder records each point in the change document the point reaches, quoting the owner word for word and naming the owner as speaker, under the `ki-work-package` [Messages](../../ki-work-package/references/standard-work-package.md#48-messages); a package holds no feedback files.
- **Urgent work:** a unit is urgent only when it carries a stated deadline or rolls out a process change other work must follow; not everything is an escalation. Urgent work never waits in a package:
  1. The sender tells the owner at once, and reaches the owning work's holder by Orca mail, or, where it is outside Orca, through its agent host's messaging or a meeting they both sit in.
  2. Only where no one is live, nor reachable by Orca mail, which wakes an idle session in Orca, and the unit lies within the sender's own authority, the sender does it through a detached run and tells the owner, naming the run and its commits. Outside the sender's authority it goes to the owner as a blocking query.

  A worker is **live** when its `ki-workers` entry in the package's `_index.md` says `status: active`, it is listening, and its package or Cairn shows activity within the last 30 minutes. Listening is read from meetings alone: a session is listening while it is a participant of an open meeting with a sitting under way, the `ki-workers` entry's actor id, `id: actor:<id>`, listed in the meeting's entry file under `ki-participants` with `ki-status: open`, the two matched by id alone (ACTOR-KEY), under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md#45-the-entry-file). No `ki-workers` entry or roster file carries `listening`. Cairn reads the register and is not a second source. A holder in Orca need not be live to be reached: Orca mail wakes it (ORCA-FIRST, WAKE-LIMIT), so step 2 waits until mail has gone unanswered or been refused.

- **Quiet news** (QUIET-INTERRUPT a, 20 November 2026): news from a background-only, stood-down or paused actor, under [holds, 4.2](standard-holds.md#42-standing-a-seat-down), reaches the owner only through the guardian, batched into one message; such a seat never interrupts the owner directly.
  - Only four things interrupt: a deadline at risk within the next working day; work blocked on a decision only the owner can make, where the block stops the pilot group; a security or credential exposure; and a failure that loses work or data.
  - Destructive or outward-facing work interrupts only when a deadline is tied to it.
  - Routine news waits for the next catch-up, given when the owner asks or at the next Summary.
  - What counts as at risk is the guardian's judgement.

Sources: CASCADE-DOWN, MSG-RETIRE, ROUTE-RECEIPT, HANDOFF-AS-MESSAGE, URGENT-CRITERIA, LIVENESS, LISTEN-HOME, FEEDBACK-AS-MESSAGE and QUIET-INTERRUPT in [the decision register](sources.md#3-decisions); MSG-HOME in `ki-meeting`'s [sources](../../ki-meeting/references/sources.md#3-decisions).

[Back to contents](#contents)

### 4.4 Surfaces

A coordinator learns of other work through its own package, `_index.md` and the change documents, which travel through Git; through the meetings it sits in; and from a run through its report and its agent host's notice. Sessions in Orca talk by Orca mail, and an agent host's own messaging is only for a session outside Orca, under [Orca mail and the Cairn Beacon](#42-orca-mail-and-the-cairn-beacon) and `ki-meeting`'s [routes](../../ki-meeting/references/standard-meeting.md#46-routes).

**A backend reply is not visible progress.** A reply by Orca mail or through an agent host's messaging counts only once it is on a surface the owner looks at. The receiving coordinator writes what it did into its next owner-facing turn and its `_index.md`'s Now; the sender keeps the item under its tag, as "acked by backend, not yet visible", until then.

| Surface | Carries | Who writes it | When |
| --- | --- | --- | --- |
| Transcript | Owner turns and the coordinator's own replies; nothing injected | The coordinator, in its report | Every owner-facing turn names what reached the work and what it did since the last one |
| Package | `_index.md`'s front matter, which `ki work status` reads, its Now and Held; the change documents with their Open sections and parked tags | The package's holder, under the work-package standard, or the root's guardian while none holds it | `_index.md`'s state at every send, receive, mark and hold, and its definition when the work changes |
| Work status | `ki work status --format json`, schema `ki/work-status/v1`, and the five views | `ki`, reading every package | On demand; the Observatory reads only this |
| Notification | Work received, session recovered, session errored | Not this standard | The notification record in Knowledge Islands Principal owns the channel |

A nudge by Orca mail or through an agent host's messaging carries conversation, not work: work reaches a package only along the tree.

Sources: SURFACES-RULE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.5 Waking an idle Orca tab

An Orca chat tab that has gone idle has no running agent process, so the agent host's own messaging cannot reach it and its list of agents does not show it; Orca mail reaches it and wakes it. Kris took ORCA-WAKE a on 20 November 2026, setting how a tab is woken, and WAKE-LIMIT a the same day: any session may mail, and so wake, any session it works with.

1. **Find the tab.** Read its chat session id from `orca agent list --json`, matching the chat by its title or thread line.
2. **Send.** Run `orca orchestration send --to orca_session_id:<id> --subject <subject> --body <text>`. For a chat on another Mac whose Orca is paired, add `--on <host>`; no SSH is involved.
3. **What arrives.** The message lands in the existing chat as agent mail, marked as from another session and not as the owner's typing, and that conversation carries on. The receiver answers with `orca orchestration reply`, which keeps the thread and goes back across the bridge by itself.

**Limits.** Never message an agent with `orca terminal send`, never start a new session to reach it, and never use `claude --resume`. Any session may mail, and so wake, the sessions it works with (WAKE-LIMIT, which replaces ORCA-WAKE's limit to the guardian's roll calls and held messages and to other coordinators on the owner's word). Each wake costs the woken session the tokens to re-read its package, so a session mails another only when it has something for it. A wake carries conversation, not work, under [Surfaces](#44-surfaces).

Sources: ORCA-WAKE and WAKE-LIMIT in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
