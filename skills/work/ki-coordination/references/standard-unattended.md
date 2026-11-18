---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T10:03:35Z
ki-status: in force
---

# Coordinating-work standard: unattended windows

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Away grants and scheduled wakes](#41-away-grants-and-scheduled-wakes)
  - [4.2 Unattended windows](#42-unattended-windows)
  - [4.3 Headless passes](#43-headless-passes)

## 1. Introduction

This file holds away grants, unattended windows, scheduled wakes and headless passes. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Work that goes on without the owner: away grants, scheduled wakes, unattended windows and headless passes.

### 2.1 In scope

- Logging an away grant and the deny-list items it lifts.
- Scheduled wakes and their banner item.
- An unattended window from entry to return: clock, grant, keeping awake, progress, sync, questions, expiry and the return report.
- Headless passes: trigger, eligible work, what a pass may do, its authority, model budget, overlaps, unavailable capacity, record and stopping.

[Back to contents](#contents)

### 2.2 Out of scope

- Authority tiers, the unattended deny list and the questions rule for runs: the `ki-delegation` [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md).
- Closing a frozen wave's records: `ki-work`'s [acceptance standard](../../../keystone/ki-work/references/standard-acceptance.md).
- The return report's shape: [reply format and banner](standard-report-forms.md).
- Draining at a hold: [holds](standard-holds.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Away grant** | An explicitly granted unattended window, logged in the change document it works from with its end, work, permitted actions, exclusions, wake and stop words and any deny-list item it lifts. **Standard:** this one, [4.1](#41-away-grants-and-scheduled-wakes) |
| **Scheduled wake** | A separately requested schedule that wakes the work, shown as a `⏰` banner item; it is a banner item, not a work state. **Standard:** this one, [4.1](#41-away-grants-and-scheduled-wakes) |
| **Unattended window** | An episode in With worker, not a state: a period the owner grants for work to go on without them, a mode on top of normal coordination. **Standard:** this one, [4.2](#42-unattended-windows) |
| **Wave** | One repository's set of records, frozen before delivery starts, that a window delivers in order; nothing joins or leaves it while it runs. **Standard:** this one, [4.2](#42-unattended-windows) |
| **Headless pass** | One bounded coordinator turn without a live session: a machine scheduler starts it, it reads one package, does only what that package already authorises, commits and exits. **Standard:** this one, [4.3](#43-headless-passes) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Away grants and scheduled wakes

- **Away grants:** log an explicitly granted unattended window in the change document the window works from, beside its other decisions, with:
  - its end time or return condition, as local time with its zone and as UTC;
  - the work, permitted actions, exclusions, and wake and stop words;
  - any item of the `ki-delegation` [default deny list](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#466-unattended-deny-list) the grant lifts, within its [authority limits](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#46-authority-tiers).

  Park decisions outside that scope. The window then runs under [Unattended windows](#42-unattended-windows). An ordinary steering message does not cancel it, and an existing "while I am away" grant stays authority until its return condition.
- **Scheduled wakes:** a separately requested schedule needs an explicit request or away grant, and a `⏰` scheduled banner item naming its mechanism, observed next firing, session-only or durable lifetime, expiry and "stop the wake". Stop it at the window boundary or at a drain. It is a banner item, not a work state; its glyph is in the [table of glyphs](standard-coordination.md#46-banner).

[Back to contents](#contents)

### 4.2 Unattended windows

A window is an episode in With worker, not a state: a period the owner grants for work to go on without them. It is a mode on top of normal coordination: the watcher, reports and every other rule carry on through it.

- **Clock:** every window end is recorded as local time with its zone and as UTC. Where the owner's words are ambiguous, such as a clock time spoken across a clock change, take the earlier instant and say so in the read-back.
- **Grant:** logged under **Away grants**, naming any deny-list item it lifts. Force-push and `--no-verify` are never lifted.
- **Entry:** before the owner leaves:
  - unpack packed queries under the [split rule](standard-queries.md#45-query-review) and strike the mark;
  - write the plan into that change document's Steps: the units in order, each with its repository, authority, tier, what it waits on and its size, then the excluded units with their reasons; park, rather than plan, a unit whose authority still needs a decision;
  - record each repository's `origin/main` and local `main` revisions in the window's entry;
  - give an entry report that shows the plan and says how the session and its machine are kept awake, then start without confirmation.
- **Awake:** the window keeps the leading chat session alive and its machine awake. On macOS, start `caffeinate -dims -w <session pid>` detached at entry, a power assertion tied to the session's process; elsewhere use the platform's equivalent, such as `systemd-inhibit` on Linux. Release it at expiry, an explicit return or "stop the wake"; it ends with the session anyway. Where the machine cannot be kept awake, the entry report says so and the window promises less.
- **Banner:** while the window runs, the banner carries `- 🪟 until <end> · stop the wake`, its glyph from the [table of glyphs](standard-coordination.md#46-banner).
- **Progress:** within the grant, the coordinator plans already adopted, authorised Now or Next drafts to Ready and delivers eligible Ready records to awaiting review, in waves citing the grant.
  - The grant in its change document is the window's one authority record; no batch record is written.
  - Each wave covers one repository and is frozen before delivery starts: its exact records and order go into the change document's Steps, and nothing joins or leaves it while it runs. A finding raised during a wave is a candidate for a later wave.
  - Dependencies and the [owner queue](standard-coordination.md#44-coordinating-practices) cap hold. A wave ends no later than the window and cannot widen the grant.
  - Adoption, discretionary promotion, acceptance and pruning stay with the owner, except that a grant naming delivery closure for a frozen wave lets `ki-work accept` close that wave's records under its [recorded-grant rule](../../../keystone/ki-work/references/standard-acceptance.md#42-obtain-closure-authority).
  - Autonomous delivery of several records happens only inside a window; work outside a coordinating package that needs it opens a package and a window first.
  - New findings return as queries or, where the owner asked for findings, in the run packet's `findings/`, homed at receive in the change document they bear on. The receiving coordinator applies `ki-work next`'s [capture rule](../../../keystone/ki-work/references/standard-next-work.md#432-capture-substantive-prospective-work) at return. The window's progress rule does not authorise a background run to create new records.
- **Sync and conflicts:** sync runs under [Committing the package](standard-coordination.md#481-committing-the-package), and a pull that cannot fast-forward goes to the conflict run under [Pushing beneath other sessions](standard-sync.md#42-pushing-beneath-other-sessions), inside the window.
- **Questions:** a question to the owner during the window is asked in plain text in the chat, never through a blocking question prompt, and waits a couple of minutes at most.
  - Unanswered, it is parked as a query for the return report, keeping its tag, Context, Query and Options. Nothing is done on its matter in either direction, and the other authorised work carries on.
  - Silence is never consent, and no default or recommended option stands in for the answer.
  - An answer arriving later in the window is an ordinary owner decision from then on, read back in its change document.
  - This follows the `ki-delegation` [questions rule](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#469-questions-in-a-window).
- **Expiry:** at the end, an explicit return or "stop the wake", stop launching, receive the runs that finish and report.
- **Return:** the return report is the [Summary](standard-report-forms.md#417-the-summary) since the window's mark, across the repositories the window touched:
  - this work's own units in detail;
  - other sessions' commits counted against the revisions recorded at entry;
  - each failure beside its unit;
  - a closing list of misses, such as usage-limit stops, missed processing and failed runs. The window promises only the authorised attempt: a trigger is never processed work.

  An optional [interactive pass](standard-queries.md#43-interactive-pass) follows. Strike the next mark only once the owner has seen the return report or finished the pass.

Sources: WINDOW-CLOCK, RETURN-FORM, DENY-LIST, WINDOW-PLAN, CONFLICT-RUN, PROGRESS-SCOPE, UNATTENDED-AWAKE, BATCH-RETIRE and WINDOW-QUESTIONS in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.3 Headless passes

A headless pass is one bounded coordinator turn without a live session: a machine scheduler starts it, it reads one package, does only what that package already authorises, commits and exits. It is the durable wake a session-only schedule cannot give, since that fires only while the session is idle and dies with it. Rig, chezmoi and tools-ki own the job's design and install, under the `ki-delegation` [dotfiles and software](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#4610-dotfiles-and-software) rule; this standard sets what a pass may do and installs nothing. Doorbells and extra liveness fields stay deferred, and nothing here says the job has shipped.

- **Trigger:** the job is shell-only and spends no model time. For each work it watches it asks: has the package or a meeting it sits in changed since the job's last stamp; has one of the work's runs finished; has a deadline the package records passed, such as a window's end, a hold's release date or a dated next step? If none, it writes its stamp and exits; if one, it starts one pass for that work. Firings missed while a Mac slept coalesce into one under launchd's `StartCalendarInterval`.
- **Which work:** only work that names passes: an open [unattended window](#42-unattended-windows) whose grant names headless passes, or a standing decision in one of the work's own change documents naming them and what they may do. Other work is stamped and left alone, its change waiting for the next attended wake. A pass never runs for work On hold or Finished.
- **What a pass may do:** exactly what the coordinator does at a wake, within the [turn budget](standard-coordination.md#43-coordinator-responsiveness):
  - read the package, its `_index.md`, the change documents in hand, every change document's Open section and every open finding;
  - take what has reached the work along the tree under [Work between packages](standard-messages.md#messages-between-work);
  - receive each finished run, copying its queries into the Open section of the change document each belongs to, recording its disposition and tidying under [Pruning the package](standard-mark.md#43-pruning-the-package);
  - start, on its agent host's own subagents, only the units the plan in the change document's Steps and the logged decisions already authorise;
  - record each move in the change document it acts under and in `_index.md`'s state, commit the package by explicit path and sync under [Committing the package](standard-coordination.md#481-committing-the-package).

  It asks no question and waits on no answer: whatever needs the owner becomes a query in the Open section of the change document it belongs to, and nothing is done on it in either direction. It never opens, releases or finishes work, accepts or prunes, adopts or promotes, answers its own queries, widens a grant, launches a unit the plan does not name, edits another package, or runs a command that may wait on a permission prompt.
- **Authority:** a pass has no authority of its own; it acts within the grant or decision that names it, under the `ki-delegation` [authority tiers](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#46-authority-tiers), [unattended deny list](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#466-unattended-deny-list) and [criticality test](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#467-criticality-test).
  - Its own tier is `push` at most: it commits the package and syncs fast-forward only, never forced and never with `--no-verify`, and hands a pull that cannot fast-forward to a conflict run.
  - A `release` or `prune` tier belongs only to a run it launches with its cited decision.
  - The confidential and connection-critical rules hold unchanged.
  - A pass that finds its grant expired does only the receive bookkeeping, copying queries and recording finished runs, and launches nothing.
- **Model budget:** a pass runs on the coordination-purpose model `ki-env-tokenomics` recommends, `fast` or `standard` at low reasoning effort; heavier models are for the runs it launches. It spends model time only when the trigger found something new, keeps to the five-tool-call turn, and stops when the queue is acted on, at the job's wall-clock limit or at ten turns, whichever is first. What it has not reached waits for the next firing; it never retries within a firing.
- **Overlapping passes:** at most one pass per work at a time; the job holds a lock per work and stamps and skips a firing while that work's pass runs.
  - A pass never runs for work whose coordinator session is live. Until the job's liveness test is designed, a live coordinator stops the job for its work with "stop the wake".
  - Passes for different works run together only in different repositories; passes writing one repository are serialised under the `ki-git` write window.
  - Before writing, a pass re-reads any package file whose last commit is newer than its read, under the stale-edit rule, and keeps the other writer's change.
- **Unavailable capacity:** when the model cannot be reached, through a usage limit, a provider outage or failed authentication, the pass exits without acting, writes the reason to the job's log and leaves its stamp unchanged, so the same trigger fires the next pass. It retries only at the next scheduled firing and never backs off further. When its agent host has no worker capacity, the pass leaves the unit for its next pass under the `ki-delegation` [concurrency](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#49-concurrency) rules and does not wait. Each stop is a miss the next attended report lists; a trigger is not processed work.
- **Report:** a pass sends nothing to the owner and writes no report.
  - Its record is the change document whose grant or decision names the passes: one dated entry per pass that moved anything, naming the lines acted on, runs received and units launched, in the commit that carries them. A pass that found nothing writes nothing.
  - The next attended Summary or return report carries what passes did since the mark under [the Summary](standard-report-forms.md#417-the-summary), with each miss beside its unit: usage-limit stops, skipped firings, passes that found a live session and failed runs.
  - While the job watches a work, the banner carries it as a `⏰` scheduled item under **Scheduled wakes**, naming the launchd job, its observed next firing, its durable lifetime, its expiry and "stop the wake".
- **Stopping:** "stop the wake" stops the job starting passes for that work, logged in the change document that named the passes and dropped from the banner. A hold drains it under [Putting work on hold](standard-holds.md#41-putting-work-on-hold), and Finished removes it. A pass stops a run only when the owner has named it and said stop.

Sources: WAKE-SUBSTRATE and OOS-WAKE in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)
