---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T01:29:31Z
ki-status: in force
---

# Coordinating-work standard: territory work

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Coordinating work](#41-coordinating-work)
    - [4.1.1 Territory work](#411-territory-work)
    - [4.1.2 Coordinating assigned packages](#412-coordinating-assigned-packages)
    - [4.1.3 Secondary States of play](#413-secondary-states-of-play)
  - [4.2 Owner queue](#42-owner-queue)
  - [4.3 Long-standing requests](#43-long-standing-requests)
  - [4.4 Worktree sweep](#44-worktree-sweep)

## 1. Introduction

This file holds States of play, Project work under them, assigned packages, the owner queue and the worktree sweep. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Coordinating a territory's work: Project work, the State of play and its secondaries, assigned packages, the owner queue, long-standing requests and the worktree sweep.

### 2.1 In scope

- Project work and what it coordinates.
- The main State of play, its duties, dispatch and stewardship of continual improvement.
- Coordinating assigned packages: tending, stewardship, one Summary across packages, records, runs and hosts.
- Secondary States of play, the nodes beneath the summit.
- The owner queue's caps.
- Long-standing requests flagged up the tree.
- The worktree sweep at each mark.

[Back to contents](#contents)

### 2.2 Out of scope

- The cascade itself, delegate down and escalate up: the `ki-work-package` [work-package standard](../../ki-work-package/references/standard-work-package.md).
- The ids, titles and openers of territory work: [opening and naming](standard-opening.md).
- How a run is briefed and its report homed: the `ki-delegation` [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md).
- How acceptance reaches the owner: [queries](standard-queries.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **State of play** | A territory's summit, `<territory>.summit`, the coordination of its coordinations: it does project management and executes nothing. Unqualified, it means the summit. **Standard:** this one, [4.1.1](#411-territory-work) |
| **Secondary State of play** | A node beneath its territory's summit, `ki-level: regular`, that splits off part of the summit's authority and works under the summit's rules. **Standard:** this one, [4.1.3](#413-secondary-states-of-play) |
| **Acting for idle work** | The State of play taking what reaches a seated package whose session is not listening; it launches no run, changes none of the package's state and transfers nothing. **Standard:** this one, [4.1.1](#411-territory-work) |
| **Cap** | At most three or four active Project packages in a territory at once; On hold and Finished do not count, and exceeding it needs the owner's agreement beforehand. **Standard:** this one, [4.1.1](#411-territory-work) |
| **Long-standing request** | A request or query a package's keyholder has left with the owner for more than 24 hours, unanswered, which the keyholder flags up the tree towards the guardian. **Standard:** this one, [4.3](#43-long-standing-requests) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Coordinating work

Project work coordinates exactly one Project for the owner. It always delegates: it runs its work as background agents on its agent host's own subagents under the `ki-delegation` [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md), and keeps its own turns short under [Coordinator responsiveness](standard-coordination.md#43-coordinator-responsiveness).

- **Package:** the coordinator picks the work up from `work/<territory>/<territory>.<project>/` in the Cairn store, whose `_index.md` defines the work and holds its current state only, and keeps it current under the work-package standard. `_index.md` names its Project in front matter; the Project note does not link down.
- **Decisions:** log each owner approval in the change document it belongs to before launching the work it authorises.
- **State of play:** the [State of play](#411-territory-work) owns cross-Project priorities, releases and decisions touching more than one Project, and Project work raises those there. Releases follow the `ki-repo-tools` release-on-demand policy: a delivery run never releases by default, and a release run carries the `release` footer for the named release only.
- **Naming:** where the runtime can name a session, it takes its seat's thread line, such as `⚒️ 🔑 ki.ways-of-working`, or `<Name> (⚒️ 🔑 <work-id>)` where the seat's actor is named, under [Work naming](standard-opening.md#42-work-naming).
- **Opening:** open Project work only where there is active work to drive, within the State of play's [cap](#411-territory-work). A dormant, registered Project may have an On hold package seeded with its first step, under [Seeding](#411-territory-work).
- **Scope:** work only the Project's own records. Work belonging to another Project goes up to the State of play, the node both sit beneath where there is one, and down to that Project as steer.
- **Close:** Project work shows Finished only at [Finishing Project work](standard-mark.md#45-finishing-project-work); until then it moves between the other six states.

#### 4.1.1 Territory work

Since WP-STORE (Kris, 9 November 2026), work packages live in the Cairn store, territory work in its `work/<territory>/`, so a Capital need not hold its territory work (ROAD-7 a, Kris, 14 November 2026), and no rubric item checks where territory work sits since COORD-RETIRE (Kris, 16 November 2026). Where a Capital still holds territory work, the rules below apply to it.

Each territory has one main State of play, its summit, `<territory>.summit`, at `work/<territory>/<territory>.summit/_index.md` in the Cairn store: the coordination of the territory's coordinations. The summit replaced `<territory>.sop.main` under the `ki-work-package` [location and identity](../../ki-work-package/references/standard-work-package.md#42-location-and-identity) rule. Nodes may sit beneath it, [secondary States of play](#413-secondary-states-of-play), each taking a named part of the territory's work under the summit's rules.

- Each does project management and may coordinate explicitly assigned Project packages. Delivery stays in those packages and their product repositories, never in the State of play's own package.
- Only a Capital holds a State of play. The summit is never Finished while the territory is open.
- "The State of play" unqualified means the summit; a node beneath it takes only the duties the summit splits off to it, under [Secondary States of play](#413-secondary-states-of-play).

Its duties:

- **Registry:** the themes and Projects it manages are defined in the Capital's `Streams/` registry under the `ki-work` Project registry standard; their records live in the roadmaps of the territory's repositories.
- **Owns:** cross-Project priorities; releases; decisions touching more than one Project; [steer](standard-messages.md#messages-between-work) to Project work, recorded in their packages and Project notes; the Project-work queue; and a territory hold with the list of work to restart from it.
- **Views:** it rolls up the five views the Work Process note sets, with you, stuck, blocked, moving and on hold, across the territory through `ki work status`. Work awaiting review stays out of the five views and shows as a count.
- **Regular work:** it may discuss regular work and send it steer without opening coordination on that package; dispatch follows its explicit assignment and the owner-approved scope.
- **Acting for idle work:** where a package in its territory has no active session, `ki-listening_status` not `on`, the State of play takes what is sent to it; otherwise nothing would until the package is next opened.
  - Where the package has no one seated at all, no seat under its `ki-workers`, there is no one to cascade to: under [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down) the node above owns the work and does it itself, as its own work within its own remit, rather than leaving it in the empty package to wait for a seat. What follows is for a seated package whose session is idle.
  - It takes what reaches the package along the tree under [Work between packages](standard-messages.md#messages-between-work), one package per turn.
  - It routes a part belonging to other work as steer to that work, under **Dispatch** below; answers what the territory's coordination can answer as feedback to the sender's node; and puts what needs the package's own judgement or the owner into the package's `_index.md` Now or Held or the Open section of the change document it belongs to.
  - It commits that in a commit naming the package, `docs(work): <id> taken by <State of play id>`.
  - It takes the package's work forward only where its own assignment already covers it. Acting for the package, it launches no run and changes none of its state, holder, `ki-since`, mark, hold or decisions; an On hold package stays on hold.
  - Acting for is not stewardship and transfers nothing under [Coordinating assigned packages](#412-coordinating-assigned-packages). A package whose home is absent, stale or ambiguous is surfaced, not acted for.
  - A node acts for the packages beneath it, the summit for the rest.
  - When the package's own session opens, it finds the dispositions in its files and Git, and the State of play stops acting for it.
- **Cap:** at most three or four Project packages are active at once, however many sessions act on them; On hold and Finished do not count.
  - Exceeding the cap needs the owner's explicit agreement beforehand; the coordinator cannot raise it alone. Until then, queue the next piece.
  - Keep the ordered queue in the summit's change documents, each piece with its title and opener, and show in the summit's `_index.md` what is active, in Now, and what waits, in Held, as Kris set under OLD-SHAPE-HOMES a on 14 November 2026: "The queue is similar, so basically now it all orientates around the change .md files." Open the next queued piece when an active one goes on hold or finishes.
  - Within one piece, about three background agents run at once and the rest wait in the run queue, under [Coordinator responsiveness](standard-coordination.md#43-coordinator-responsiveness).
- **Acceptance first:** at bootstrap and resume, its first call on the owner, before any other query, is the territory's records awaiting acceptance, as one bundle per work under [Acceptance bundles](standard-queries.md#48-acceptance-bundles).
- **Seeding:** before Project work opens, the State of play creates or reconciles its package and gives the owner its [opener](standard-opening.md#43-opening-work), so the session opens with one message. A new package is seeded by its parent node's keyholder, usually the guardian, or by any session the owner points at it on the owner's word, under the `ki-work-package` [writers](../../ki-work-package/references/standard-work-package.md#49-writers): `_index.md` on hold, the first step as the top line of its Now, and a first change document only if there is a change to carry. Others ask the keyholder in a meeting or a conversation. A dormant, registered Project's package is seeded with `hold.reason: paused` and `hold.release: when Kris opens this Project work`; seeding neither opens nor releases the work, as Kris set under FIRST-STEP-HOME a on 15 November 2026.
- **Flags:** at its own mark, it names as steer recorded in each owning work's package every package the `ki-work-package` rubric's [FOLDER](../../ki-work-package/references/rubric.md) items flag, under [Pruning the package](standard-mark.md#43-pruning-the-package).
  - It never names a finished work's package so: it closes that package itself under the `ki-work-package` [close-out](../../ki-work-package/references/standard-work-package.md#410-the-tidy), putting the query in the Open section of its own change document for that close-out if a check fails.
  - It never prunes another package otherwise.
  - At the same mark it runs the [worktree sweep](#44-worktree-sweep) and reports only what it finds.
- **Other territories:** it coordinates with another territory's State of play only through the owner, and never acts with authority in another territory's repositories. Each Capital keeps its own ownership; cross-repository work moves under `ki-trades` or the receiving repository's own process.

**Dispatch.** The State of play is the single dispatch coordinator. Every new unit with no clear owner, an owner dump, a handoff with no owning work, a cross-work item whose owner is unclear, and every method improvement, comes to it, pasted by the owner or as feedback from below. A work's own follow-ups and an item in a record already naming its work go direct.

- **Matching:** match the unit against the register, the `_index.md` front matter `ki work status` derives from the packages, reading a `_index.md` body only where two descriptions match. Keep no copy of the register.
- **Routing:** send the unit to the chosen work as steer, in the owner's words with links, recorded in its package where its priority warrants, under [Work between packages](standard-messages.md#messages-between-work). Where nothing matches, propose to the owner a new piece of work, within the cap, or a record captured through `ki-work next`.
- **Returns:** a part comes back only as an escalation, a decision beyond the receiver's remit, never for want of a response or because it is hard, under [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down). A returned part is routed once more at most. If it cannot be placed, or would come back again, it goes to the owner as a query, so nothing bounces.
- **Work not yet taken:** show in the register the count and age of steer nobody has taken up. Work routed to work On hold, paused, waits without waking it. For work Snoozing whose session is closed or not waking, identify the work by its thread line, and ask the owner to lift a hold where the work is urgent.

**Stewardship of continual improvement.** Every work tries to improve continually, and the State of play coordinates it.

- Every work sends a method improvement to the State of play as feedback up the tree, and the State of play also watches the works for improvements.
- While Ways of working is open, the State of play routes each improvement to it like any other unit, its description saying it takes method changes, and a landed change reaches work under [Refreshing this guidance](standard-coordination.md#482-refreshing-this-guidance).
- When Ways of working finishes, the State of play's `_index.md` description gains method stewardship and its Scope says where method changes go. It keeps a method backlog, dispatches each accepted small improvement as small regular work or into the Project it most affects, with a design review for a change of shape. A significant change revives Ways of working, or a more targeted Project under the Model theme.
- Lasting method authority stays in the skills and Decision Records, and the State of play still executes nothing.

Sources: CASCADE-DOWN, SOP-ACTS-FOR-IDLE, WORK-ROUTING, STEWARD-HOME, FIRST-STEP-HOME and SECONDARY-SOP in [the decision register](sources.md#3-decisions).

#### 4.1.2 Coordinating assigned packages

The cascade here is `ki-work-package`'s [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down): a package passed down to a steward stays with it, and the steward sends up only an escalation, a decision beyond its remit, never the package's work for want of a response or because it is hard; a request left with the owner for more than 24 hours is flagged up the tree towards the guardian under [Long-standing requests](#43-long-standing-requests), the work staying with the steward.

**Tending.** The acknowledged steward tends a package's disposition, queues and tidy independently of any active coordinator. The parent State of play reconciles assigned regular umbrellas, children and declared member homes through `ki-parent`, the tree beneath it being its register, and the home reference at opening, bootstrap, approved moves and ordinary tending.

- Surface absent, stale, inaccessible or ambiguous homes and unacknowledged ownership; do not take over or clear their lines.
- The Capital's prose home reference is discovery, never a second package, state or inbox.
- Reader compatibility is a prerequisite to automated member-home discovery; the local advisory hook neither scans the estate nor guarantees runtime injection.

**Stewardship.** A State of play may steward an assigned package of any level only by the explicit committed assignment and acknowledged handover of the `ki-work-package` [stewardship rule](../../ki-work-package/references/standard-work-package.md#49-writers).

- Its field stays the marked STEWARD-FIELD placeholder; add no field and do not reinterpret `ki-worker`.
- The old steward stops launches and reconciles runs in flight, queued launches and pending writes; the new steward acknowledges and takes their supervision before acting.
- No absent session, missing binding, quiet session or timeout transfers stewardship. Assignment never changes the holder or releases On hold work.
- An assigned State of play may use the package's own entry points, tidying included. It may create or adopt a package only for a registered Project within the cap, with a state the actual move justifies. A package it seeds for dormant work stays On hold.
- A package assigned elsewhere receives only lines. A territory hold drains assigned Project packages first and asks any independent steward to drain its own; it never writes another steward's package.

**One Summary across packages.** A territory Summary reports across the packages it stewards, naming the package on every item.

- A query's identity is `(work id, tag)`; its full text lives in the Open section of that package's change document, and the owner's answer in the same change document.
- Each package keeps its own state, `ki-since`, mark and beat. A territory mark never moves Project marks, and an acknowledgement moves only the work it clearly names.
- Keep a decision spanning Projects once, at the territory home, and link it, rather than copying it as several grants.

**Records.** A record's `project` resolves through the registry to its package and grants no authority. Selection into `now` neither opens Project work nor grants execution. The steward adds the next-step link from the routed line at its next wake; records keep the owning repository's holds, readiness and acceptance. Project-less work goes first to its existing regular or ad hoc owner, and to the State of play's routing queue only if unresolved. Reclassification reconciles running work and report destinations first.

**Runs and hosts.**

- Every run brief separates its reporting package from the product repository. The session that started the run homes the report in that package under the `ki-delegation` [run packet](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#44-run-packet).
- Bootstrap and re-anchoring establish the local machine through the territory's machine inventory.
- Host requirements restrict only device-dependent execution: any coordinator may acknowledge, plan, ask about or dispatch targeted work. Keep unfulfilled requirements queued and counted, flagging their age when no eligible host has taken them; never infer a takeover.
- Resolve concrete hosts, categories and unknown or renamed names under the `ki-work-package` [message rule](../../ki-work-package/references/standard-work-package.md#48-messages).
- The session's host seat stays out of packages, holds and reports.

#### 4.1.3 Secondary States of play

A secondary State of play is a node beneath its territory's summit that splits off part of the summit's authority, as Kris set under SECONDARY-SOP a on 15 November 2026, under the `ki-work-package` [location and identity](../../ki-work-package/references/standard-work-package.md#42-location-and-identity) rule: its id is `<territory>.<slug>` and its level `regular`, as Kris took NODE-ID a on 16 November 2026 under [Work naming](standard-opening.md#42-work-naming), its package is `work/<territory>/<territory>.<slug>/` in the Cairn store, its `ki-parent` the summit, and it works under the summit's rules now. A territory with no node beneath its summit needs no change.

- **Creating:** the owner decides each node at the summit, which records the decision in the change document it belongs to and seeds the package On hold, under [Seeding](#411-territory-work), until the owner opens it. A node folds back into the summit when it is no longer needed.
- **Front door:** the summit stays the owner's only front door and the single dispatch coordinator. Owner dumps, units with no clear owner, method improvements and anything touching more than one node, or a node and other work, come to the summit.
- **The summit owns** what the main State of play owned: the registry, membership and Known Lands; releases and priorities across the territory; the territory-wide [ceiling on active Project work](#411-territory-work), which counts the work beneath every node and gives no node a share of its own; method stewardship; the worktree sweep; and every decision touching more than one node.
- **A node** does project management for the work beneath it, within the authority the summit splits off to it, and rolls up the five views across that work; the summit rolls up all.
- **Acceptance:** the summit brings the territory's records awaiting acceptance first, the work beneath its nodes included, under **Acceptance first** in [Territory work](#411-territory-work).
- **Routing:** a unit goes between the summit, a node and the work beneath it, down as work and up only as an escalation, under [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down), through a meeting under `ki-meeting`'s [meeting standard](../../ki-meeting/references/standard-meeting.md) or a change document; the `ROUTE` line and `messages.md` have retired (MSG-RETIRE). A part a node cannot place goes back to the summit once; the summit places it or asks the owner.
- **Register:** the tree beneath a node, read from `ki-parent`, is its register: the summit's is all the territory's work, the work beneath its nodes included, and a node's the work beneath it. Work with no package yet belongs on the roadmap, as Kris set under COVERS-REGISTER a on 16 November 2026.
- **Opening:** the owner opens a node with the [secondary opener](standard-opening.md#43-opening-work), and takes every opener for the territory from [Opening work](standard-opening.md#43-opening-work).

Sources: CASCADE-DOWN, SECONDARY-SOP, OLD-SHAPE-HOMES, COVERS-REGISTER, NODE-ID and STALE-AGE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.2 Owner queue

Each piece of Project work is capped at eight records awaiting acceptance and at eight open queries across its package's change documents.

- Over either cap, launch no new build or planning run until the owner catches up; acceptance fixes and work that clears the backlog stay allowed.
- Bring acceptance as one bundle per work under [Acceptance bundles](standard-queries.md#48-acceptance-bundles); the banner's counts line shows the records waiting, under [Banner](standard-coordination.md#46-banner).
- No rubric item warns over either cap since COORD-REPOINT (Kris, 16 November 2026); the coordinator keeps both by judgement, under [Pruning the package](standard-mark.md#43-pruning-the-package), until the check returns in `ki-work-package` as a warning.

Sources: OWNER-QUEUE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.3 Long-standing requests

A request or query a package's keyholder has left with the owner for more than 24 hours, unanswered, is long-standing, and the keyholder flags it up the tree towards the guardian, the keyholder of the root, `cairn.summit`, as Kris set under STALE-AGE on 18 November 2026: "if there's things that are outstanding for more than let's call it 24 hours, then we need to flag it up somehow". It completes ESCALATE-STALE, set the same night: "If they have long-standing requests which are unanswered … we need to let them bubble them up to you, but not so much the requests directly, but in order to sort of push me down towards dealing with some of those. I don't want everything to come up from underneath … Unless you think it's critical for me to deal with it."

- **The clock:** runs from when the request reached the owner. A period the owner has set in that package, such as telling it to sleep or snooze for a while, stops the clock without resetting it: the time asleep does not count, and when the period ends the 24 hours carries on from where it stopped.
- **The path up:** the flag follows CASCADE-DOWN's one path, a level at a time: a node flags its stale request to the node above it, which carries it up in turn, so a territory's leader flags it to the guardian.
- **What goes up:** the flag only, naming the request, its package and how long it has waited, never the request itself to be answered from above. The keyholder does not pass every request up, only the long-standing ones.
- **What the guardian does:** it uses the flags to steer the owner towards dealing with them, in its Summary, rather than passing each one on, and brings one straight to the owner only when it judges it critical.
- **The work stays down:** the request and the work it holds up stay with the keyholder, which keeps the query open in its change document and carries on with what it can. A flag escalates a stale request, not the work, so it is no hand-back under `ki-work-package`'s [CASCADE-DOWN](../../ki-work-package/references/standard-work-package.md#cascade-down): delegate down, own it where there is no one beneath, escalate up.
- **The guardian's own:** a request the guardian itself has left with the owner needs no flag; its Summary already puts it to the owner.

Sources: STALE-AGE and CASCADE-DOWN in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.4 Worktree sweep

At each mark the State of play sweeps its territory's repositories for work left between a run and `main`, and reports only what it finds.

- **Reads:** each repository's linked worktrees, branches not merged into `main`, stashes, and mains ahead of their upstream, through read-only Git.
- **Shows:** each finding in its banner as `- 🧹 stranded <worktree or branch> · <owning work>`, `🧹 branch` or `🧹 stash`, whatever its age, its glyph from the [table of glyphs](standard-coordination.md#46-banner). A clean sweep adds nothing, and routine push state is omitted.
- **Removes nothing:** integrating goes to the owning work; a stash drop, branch deletion or worktree removal goes to the owner by name under the `ki-git` [clean-down](../../../repository/ki-git/references/standard-git.md#46-clean-down-state) rule. The sweep reports Git state, not age.

Sources: STALE-SWEEP and WORKTREE-START in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
