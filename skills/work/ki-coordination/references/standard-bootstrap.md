---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-20T15:30:00Z
ki-status: in force
---

# Coordinating-work standard: bootstrap and re-anchoring

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Bootstrap](#41-bootstrap)
  - [4.2 Resolving the opener](#42-resolving-the-opener)
  - [4.3 Re-anchoring after compaction](#43-re-anchoring-after-compaction)
  - [4.4 Picking work up](#44-picking-work-up)
  - [4.5 Recovering a session showing a red x](#45-recovering-a-session-showing-a-red-x)
  - [4.6 Targeted refresh and landed notices](#46-targeted-refresh-and-landed-notices)

## 1. Introduction

This file holds bootstrap, resolving the opener, re-anchoring after compaction, picking work up, red-x recovery and targeted refresh. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a coordinator comes onto this contract and back onto it: bootstrap, re-anchoring after compaction, picking work up, recovery and targeted refresh.

### 2.1 In scope

- The bootstrap and its report, from the opener on.
- Resolving the opener to one package, and when coordination stops instead.
- Re-anchoring after a compaction.
- Picking work up, by the state the package records.
- Recovering a session showing a red x.
- Targeted refresh and landed notices.

[Back to contents](#contents)

### 2.2 Out of scope

- The machine half of getting ready to coordinate: the `ki-keystone bootstrap` [machine-readiness checklist](../../../keystone/ki-keystone/references/standard-bootstrap.md).
- The openers themselves and the thread line a session takes: [opening and naming](standard-opening.md).
- The shape of the Bootstrap report and its banner: [reply format and banner](standard-report-forms.md).
- The package's state fields, Now and Held: the `ki-work-package` [work-package standard](../../ki-work-package/references/standard-work-package.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Bootstrap** | What a coordinator does to come onto this contract, from a new opener, a one-line re-bootstrap, a compaction, a model switch or a pick-up, ending in the Bootstrap report. **Standard:** this one, [4.1](#41-bootstrap) |
| **Re-anchoring** | Re-reading the standard, the output style from disk and the package after a compaction, before answering anything else. It moves no mark. **Standard:** this one, [4.3](#43-re-anchoring-after-compaction) |
| **Pick-up** | Taking work up again from what the package alone records: its state fields say where the work lies, and its Now and Held what the worker does first. **Standard:** this one, [4.4](#44-picking-work-up) |
| **Red x** | The mark in the editor's session list that a backend turn errored; the work is not lost, because the package holds everything needed. **Standard:** this one, [4.5](#45-recovering-a-session-showing-a-red-x) |
| **Landed notice** | Word along the tree, as steer recorded in the work's package, that a change a coordinator asked for, or one that changes how it works, has landed. **Standard:** this one, [4.6](#46-targeted-refresh-and-landed-notices) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Bootstrap

**Before the opener.** On a fresh or changed machine, the owner runs the `ki-keystone bootstrap` [machine-readiness checklist](../../../keystone/ki-keystone/references/standard-bootstrap.md#47-machine-readiness-for-coordinating-work) to its "Ready to coordinate" result: tools and level checkouts; the chezmoi binding of the coordinator hook and the `ki-coordinator` output style; `ki bootstrap`, which activates `ki-work` and its `design` subcommand; the Capital's declarations; the observable checks that the hook and style work; and the work's opener from [Opening work](standard-opening.md#43-opening-work). The checklist owns the machine half; this standard owns the session half, from the opener on. A session that reaches the opener without the hook's line or the style's shape says so in one line and names the checklist, rather than coordinating blind.

A one-line opener brings a new or running session onto this contract, for example `Re-bootstrap as ki.ways-of-working under ki-coordination.` A coordinator also re-bootstraps on request, after a compaction under [Re-anchoring](#43-re-anchoring-after-compaction), after a model switch, and when [picking work up](#44-picking-work-up). It then:

1. where the opener starts a new session, renames the session to the thread line the opener names, as its first act, before any read, by its agent host's rename (runtime-specific: `/rename <thread line>` in Claude Code), under [Opening work](standard-opening.md#43-opening-work);
2. reads this standard and the Work Process note;
3. checks through its agent host which of its agents still run and reconciles what is actually running;
4. [resolves the opener](#42-resolving-the-opener) to one package, `work/<territory>/<id>/` in the Cairn store, reads its `_index.md`, the change documents in hand and every change document's Open section, reconciles it under the work-package standard and checks `ki-method_read`;
5. makes sure, as it takes up an actor or seat, that its actor has an entry at `roster/actors/<id>/_index.md` in the Cairn store, `<id>` being the actor's name in lower case, or for an actor with no name its seat, `<package>@<role>`, and sets its own `ki-host`, `ki-rig` and `ki-last_seen` there, the last in quoted UTC with milliseconds, under the store's [Roster](https://github.com/krisb/ki-cairn-store/blob/9336a6a/STORE.md#roster) contract. A session with no entry adds one in the seat form, with that contract's front matter, and tells the guardian, who keeps names, character pages and every other actor's entry; a session never edits another actor's entry;
6. acts first on the top line of `_index.md`'s Now, the work's first step, then on whatever has reached the work along the tree under [Work between packages](standard-messages.md#messages-between-work), before launching any work;
7. as the summit, gathers every record awaiting acceptance across its territory's repositories, the work beneath its nodes included, and brings them first, ahead of every other query, as one bundle per work under [Acceptance bundles](standard-queries.md#48-acceptance-bundles);
8. gives the Bootstrap, trigger T2 in the [coordinator reply format](standard-report-forms.md#412-triggers), a full Medium [report](standard-reporting.md#42-owner-report) under the [report heading](standard-report-forms.md#42-banner-detail), form line `**Bootstrap at <local time> · last mark <local time>**`:
   - `## Done` gives its coordinator role and where the work stands, ending with `Rename thread: /rename <thread line>`, the thread line being `<role glyph> 🔑 <work-id>`, written `<Name> (<role glyph> 🔑 <work-id>)` where the seat's actor is named (NAME-FIRST), or `🧵 <work-id>` with no role yet, the same line the opener named, under [Opening work](standard-opening.md#43-opening-work);
   - `## In Progress` gives what is running;
   - `## Queries` gives the open queries in full, at most three under the [query cap](standard-queries.md#42-query-cap);
   - the [banner](standard-coordination.md#46-banner) and thread line close it, rendered as every banner is, without the roadmap and package lines, the thread line last.

Work opened, bootstrapped or restarted in a new session with no mark strikes one at its start, writing `ki-mark` in `_index.md`'s state fields, so every work carries a mark. [Re-anchoring](#43-re-anchoring-after-compaction) in the same session moves none.

Sources: BOOT-HOME, REBOOT-SHAPE, WORK-REVIEW-RETIRE, OPENER-NAME, FIRST-STEP-HOME, SECONDARY-SOP, ROSTER-SELF, QUERY-CAP and QUERY-CAP-3 in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.2 Resolving the opener

At [bootstrap](#41-bootstrap), resolve the owner-approved opener to the exact id, package and actual repository, and stop on an absent or ambiguous home. Check the opener's level against the package without changing it, and its scope; `territory`, `project` and `regular` are all eligible. Cite the opening authority in the change document it belongs to or the bounded owner instruction.

- Coordination requires `ki-coordination` capability in the package's home repository, with its declared dependencies, under [Session kinds](standard-reporting.md#411-session-kinds), unless a specific owner-approved exception expressly covers that opening. Acquire's already-approved intake exception remains usable; it grants no other package or capture/provider authority.
- A missing capability without that exception, an ambiguous home, missing opening authority or a mismatched opener stops coordination: give a one-line explanation and use the conversational reply forms, never automatic coordination.
- A package, id, level, binding or capability declaration alone never selects the role.

[Back to contents](#contents)

### 4.3 Re-anchoring after compaction

A compaction keeps the session but replaces its transcript with a summary, so the coordinator re-anchors from durable state before it replies. A conversational session re-reads its package, if it has one, and carries on conversationally.

The owner may compact a long session with the runtime's compaction facility, keeping the work id, Working rules block, mark, open tags, running and queued agents and the lines acted on. No send or resume prompt is given before or after; a second compaction instead warrants the [restart suggestion](standard-coordination.md#46-banner).

After any compaction, owner's or runtime's, the coordinator, before answering anything else:

1. re-reads this standard, the backpack's output style `output-styles/ki-coordinator.md` from disk and its package's `_index.md`, the change documents in hand in full and every change document's Open section, and follows the style file wherever it differs from the loaded style;
2. checks its agents through its agent host, takes the top line of `_index.md`'s Now as its first step, and reads any meeting it sits in, messages with `ki-priority: high` first, or with an `IMPORTANT` first line where older;
3. confirms in one line that it has re-anchored, then answers with the Bootstrap, heading block to banner.

The style file wins because a session keeps the style it loaded at start through a compaction, so the loaded copy can lag the file on disk; the [compact pointer](standard-coordination.md#47-generated-surfaces) and the style's re-anchoring paragraph say the same.

Re-anchoring moves no mark. The backpack's hook injects a one-line pointer to this section on a compact session start in Claude Code; a Codex session re-anchors on the owner's next message, where the hook's ordinary line reaches it.

Sources: STYLE-STALE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.4 Picking work up

Prefer a fresh session once the package holds everything needed to resume.

The package alone says how work is picked up. `_index.md`'s state fields, its state, since, hold and mark, with the holder derived from its worker and supervisor, say where the work lies; its Now and Held say what the worker does when back in use. Every send, receive, mark and hold rewrites the state fields, Now and Held to agree with the report's banner; the definition changes only with the work. The file records no session host seat; an inventory-based host requirement may appear in the work label under `ki-work-package`.

| State | First on pick-up |
| --- | --- |
| With worker | Recovery, not a planned restart: reconcile each running and waiting agent against what its agent host shows; one not found counts as stopped and restarts from its own open brief |
| Handoff to supervisor, With supervisor | Re-read the package, take the owner's answers, mark, Summary with the open queries carried forward |
| Handoff to worker | Receive: re-read the package, read back the owner's answers, restart authorised work |
| Handoff to `<target>` | Check the target's state; stay in handoff until it receives or replies |
| On hold | Only on `resume`, the release, or the State of play's Now naming it: put the parked queries back and continue from Now; work sent meanwhile waits in the package without waking it |
| Finished | Nothing resumes. Reopening is a new opener from the State of play |

Run the [repository level check](standard-sync.md#43-repository-level-check) before resuming on another Mac and before leaving a host.

**Pick-up reads.** Picking work up stays within the [turn budget](standard-coordination.md#43-coordinator-responsiveness).

- One read of the package counts as one call: its `_index.md`, the change documents in hand and every Open section, at bootstrap, at re-anchoring and at every other read.
- A write to the package's files with a brief counts as one write set, so the five-call budget is not spent before the first launch.
- After bootstrap, read only what changed since the last read, plus the entries bearing on the question, not every decision and query at each owner message.
- A report's `## Queries` is rendered from the open questions in the package's change documents, each from its change document's Open section.

**Identity.** The closing thread line identifies the work to pick up; no session gets a copyable send or resume prompt beyond the [restart suggestion](standard-coordination.md#46-banner) when a trigger holds. Before acting, the coordinator verifies the id and exact label against `_index.md` and grounds itself in the primary checkout of the package's repository. It re-bootstraps, takes stock from its change documents, its agents in its agent host, the meetings it sits in and the owner's messages, follows the state's first step above and restarts authorised work.

- Whatever must be done first on pick-up is the top line of `_index.md`'s Now, written there when the package is seeded and kept there at every move.
- Work others wait on says `READY` up the tree as feedback, and the node above identifies each waiting piece by its thread line, in its own order.

Sources: PICKUP-PRINCIPLE, PICKUP-READS and FIRST-STEP-HOME in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.5 Recovering a session showing a red x

A red x in the editor's session list means the backend turn errored, not that the work is lost: the package holds everything needed.

1. Do not open a new session first. Ask the same session to pick up the work its closing [thread line](standard-coordination.md#46-banner) identifies. If it replies, it re-anchors, strikes the mark, gives a fresh Summary since the mark and takes stock.
2. If the editor will not send into the session, open a new one in the same project folder and identify the work by its id and exact label from the thread line. The coordinator verifies both against `_index.md` before acting; the old transcript becomes history.
3. The recovered coordinator reports, as part of taking stock, what it missed and what it did about it. That report's `## Done` carries a line saying the session was recovered and when, in UTC.

Sources: RED-X-RECOVERY in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.6 Targeted refresh and landed notices

**Targeted refresh.** No `REFRESH` line is sent since the queue retired (MSG-RETIRE): a method change reaches work through the bootstrap and update revision checks under [Refreshing this guidance](standard-coordination.md#482-refreshing-this-guidance), and the receiver rereads at its next safe point, before launching further work. Held work is not woken.

**Landed notices.** When a change a coordinator asked for lands, or one that changes how it works, the session that landed it says so along the tree, as steer recorded in that work's package. A coordinator that finds its `ki-method_read` behind at bootstrap, says in its next reply, in a line or two, how its own behaviour has changed, naming the Ways of working change. No acknowledgement line is needed: setting `ki-method_read` is the confirmation.

Sources: REFRESH-TARGET, WOW-REFRESH, LANDED-NOTICE and MSG-RETIRE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
