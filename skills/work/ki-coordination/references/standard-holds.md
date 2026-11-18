---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T09:40:19Z
ki-status: in force
---

# Coordinating-work standard: holds

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Putting work on hold](#41-putting-work-on-hold)

## 1. Introduction

This file holds draining, the paused hold, Snoozing and release. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How work goes on hold, drains into it, rests Snoozing or idle, and is released.

### 2.1 In scope

- Agreeing a hold, and the first steps.
- The drain: wrapping up, committing, tidying, parking and the Stop report.
- Work that cannot drain, and a drain without a hold.
- Territory holds.
- Snoozing and the idle hold.
- Paused work, urgent work and release.

[Back to contents](#contents)

### 2.2 Out of scope

- The states and moves and the banner: [the core](standard-coordination.md).
- The Stop's reply structure and template: [reply format and banner](standard-report-forms.md).
- Tidying a package before a hold: `ki-work-package`'s [work-package standard](../../ki-work-package/references/standard-work-package.md).
- Urgent work sent to the owner: [messages and surfaces](standard-messages.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Hold** | On hold, the Work Process note's state, for one of its two reasons: paused, or more expected, which this standard calls Snoozing. **Standard:** this one, [4.1](#41-putting-work-on-hold) |
| **Drain** | The activity into a hold, never a state: wrapping up, committing, tidying, parking and the Stop. **Standard:** this one, [4.1](#41-putting-work-on-hold) |
| **Idle hold** | A Snoozing hold a worker sets on its own work, the only hold it may set itself, and only while all five conditions of the idle hold are met. **Standard:** this one, [4.1](#41-putting-work-on-hold) |
| **Release** | The move out of a hold to Handoff to worker, by `resume`, the release condition being met or, while Snoozing, a new line or new work. **Standard:** this one, [4.1](#41-putting-work-on-hold) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Putting work on hold

On hold is the Work Process note's state, with its two reasons: paused, and more expected, which this standard calls Snoozing. Drain is the activity into a hold, never a state.

- A hold is agreed only from With supervisor: the owner says `pause` or `done for now`, and a coordinator may propose one in its send. The one exception is the idle hold below, which the worker sets itself.
- A hold serves a move between hosts, closes work for a period or rests it between waves. It never says which host the work comes back up on.
- A conversational session's ad hoc work goes On hold through an update of the state in its `_index.md`, with no Stop.

**First steps.** Read any `IMPORTANT` message in a meeting the session sits in first, cancel every wake this session holds, the watcher included, and report whether anything is still running, queued or scheduled. Work going Snoozing re-arms the watcher once the snooze lands.

**The drain**, in order:

- **Wrapping up:** leave nothing running or queued. Let each agent that will finish within about 15 minutes finish. Stop each other agent at a safe point, recording where it stopped and how to restart it in `_index.md`'s Held, with its brief kept open in its run packet. Finish small open items where possible, through a run if needed. Start no new work once the drain begins. Reuse, retain or release every settled Orca worker the work started, under [Closing out Orca workers](standard-mark.md#44-closing-out-orca-workers).
- **Committing:** in every repository the coordinator or its agents touched, commit your own work by explicit path under the repository's gate and `ki-git`. Pull fast-forward only into a clean checkout, under [Committing the work folder](standard-coordination.md#481-committing-the-work-folder), and push under [Pushing beneath other sessions](standard-sync.md#42-pushing-beneath-other-sessions): stacked commits go with your own and stay out of the report. Never use `--no-verify` or force-push. Name another session's uncommitted file in `## Left over` and leave it alone.
- **Tidy first:** before any hold, paused, Snoozing or idle, the package keeps nothing already dealt with, under the `ki-work-package` [tidy before a hold](../../ki-work-package/references/standard-work-package.md#410-the-tidy). The rubric fails a held package that still does.
- **Parking:**
  - strike the mark under [The mark](standard-mark.md#41-the-mark), check the change documents' decisions under the [decisions life cycle](standard-decisions.md#413-decisions-life-cycle) and prune the package;
  - park every open query where it stands in its change document's Open section, marking it parked, with its tag, one line of context and its recommended option;
  - carry every held item, parked item and waiting-on item into its home in the package, with its release condition where it has one, so nothing outstanding is left only in the session;
  - write `_index.md`'s Now and Held for when the work is back in use;
  - copy into the package anything its agent host or an open run packet keeps that is needed to resume, in `_index.md` or the change document it belongs to;
  - set `_index.md`'s state fields to `ki-state: on-hold`, with `ki-hold.reason` (`paused`, or `more-expected` for Snoozing), `ki-hold.release` in words, and `ki-since`;
  - commit with the subject `docs(work): <id> hold, paused` or `docs(work): <id> hold, snoozing`, and push. Make no baseline or empty commit.
- **Report:** the Stop, trigger T3 in the [coordinator reply format](standard-report-forms.md#412-triggers), is the send that announces the hold, and nothing else is said.
  - Form line `**Stop at <local time> · mark <local time>**`, under the [report heading](standard-report-forms.md#42-banner-detail); the state shows only in the banner heading.
  - Sections `## Done`, one line per repository; `## In Progress`, holding Left over, another session's uncommitted file, or `Nothing`; and `## Queries`, holding the tags parked in the change documents, one line each, with no **Context**, **Query**, **Options** or reply block.
  - The On hold or Snoozing banner, listing nothing waiting under [Banner](standard-coordination.md#46-banner): counts `⏸️ drained · 🅿️ <n> queries parked`, or `💤 waiting for a message · 🅿️ <n> queries parked`; items only `🅿️` parked and the release under the hold's own glyph, `⏸️` or `💤`.
  - The thread line is the last line; no send or resume prompt follows. Nothing about pushes appears beyond a failure.

**Other cases:**

- **Cannot drain:** work with unpushable changes, or a run that must not be stopped, stays With worker, blocked. Its report says in one line what is blocking and ends with its thread line.
- **Drain without hold:** `drain` alone stops launching while the work stays With worker. When everything has finished, the report's `## Done` carries `DRAINED`, or `NOT DRAINED` with what remains. Any explicit drain check, such as "are we drained?", puts its result in `## Done` the same way. The thread line stays last.
- **Territory hold:** the owner issues it through the State of play. Every piece of Project work goes on hold first and the State of play last. The State of play's Now and Held name the work that restarts when the hold lifts and the work that stays on hold.
- **Snoozing:** a hold that waits for more to come, `💤 Snoozing (on hold)`. It replaces the more-expected hold and the listening hold.
  - The owner asks in words such as `snooze`, "hold on snooze waiting for a message" or "done for now, more to come". Regular work rests Snoozing between occurrences, and a Project may rest Snoozing between waves.
  - Log the request in the change document it belongs to and drain as above. Once the snooze lands, re-arm the one watcher and set `ki-listening_status: on`, and `ki-listening_enabled: true` where the owner asked it to wait for a message.
  - `ki-hold.release` reads `a message arrives, or resume`.
  - Banner, under the [one table of states](standard-coordination.md#46-banner): heading `### 💤 Snoozing (on hold) · at <time>`; counts `💤 waiting for a message · 🅿️ <n> queries parked`, never `drained`, because the coordinator still listens; items `🅿️` parked and ``💤 a message arrives, or `resume` ``; then the listening line only while the session is in a meeting.
  - New work arriving, or a new message in a meeting it sits in, releases it under **Release** and the coordinator acts on it.
  - "stop the wake" or "stop listening" sets `ki-listening_status: off`. The work stays Snoozing until `resume`, or a line its State of play handles under [acting for idle work](standard-territory.md#411-territory-work).
  - Once the session closes, the State of play acts for the snoozing package on its lines alone.
- **Idle:** a worker may put its own work into Snoozing by itself, the idle hold, and into no other hold.
  - It may go idle only while all five hold: no run running or queued; nothing in handoff to a target; nothing received and not yet taken; no open query with the owner in a change document's Open section, parked queries allowed; every repository the work touched committed and pushed. Any query with the owner keeps the work With supervisor.
  - The package is tidied first, as for any hold, but idle needs no drain and no Stop. Set `ki-state: on-hold`, `hold.reason: more-expected`, `hold.set_by: worker`, `hold.release: a message arrives, or resume` and `ki-since`; commit `docs(work): <id> hold, idle`; say so in one line.
  - The banner is Snoozing's, with the heading `### 💤 Snoozing (on hold) · idle · at <time>`. It listens only while `ki-listening_enabled` is true.
  - A line arriving on a listening idle coordinator is received at once, moving the work straight to With worker, not Handoff to worker, because the worker is already there.
  - The owner's `pause`, `done for now` or `snooze` turns an idle hold into the owner's form, `hold.set_by: owner`. A hold with no `set_by` was set by the owner.
- **Paused work and urgent work:** a paused hold stays closed to whatever arrives. Work sent to it waits in its package. The node above, acting for the held work under [acting for idle work](standard-territory.md#411-territory-work), puts anything that will not wait to the owner as a `resume` query in the Open section of its own change document for that work; the package stays paused until the owner answers. A sender with genuinely urgent work sends it to the owner under [Urgent work](standard-messages.md#messages-between-work), not into the paused package.
- **Release:** `resume`, the release condition being met, or, while Snoozing, a new line or new work, moves the work to Handoff to worker. The coordinator re-reads the package, takes the parked queries in the change documents' Open sections back up as open and starts from `_index.md`'s Now. `finish` moves the work to Finished. A paused hold older than 31 days is flagged in the views.

Sources: HOLD-DRAIN, HOLD-NAMES, HOLD-TIDY, SNOOZE, DRAIN-END, TERRITORY-HOLD, SNOOZE-STATE, SNOOZE-HEADING, HOLD-IDLE, HOLD-SELF, HOLD-LISTEN and HOLD-URGENT in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
