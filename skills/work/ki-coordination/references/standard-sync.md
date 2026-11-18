---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T09:40:19Z
ki-status: in force
---

# Coordinating-work standard: sync

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Landing, then review](#41-landing-then-review)
  - [4.2 Pushing beneath other sessions](#42-pushing-beneath-other-sessions)
  - [4.3 Repository level check](#43-repository-level-check)
  - [4.4 Keeping primary checkouts current](#44-keeping-primary-checkouts-current)

## 1. Introduction

This file holds landing, then review, pushing beneath other sessions, the repository level check and keeping primary checkouts current. It extends [the core](standard-coordination.md). The decisions behind its rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How work lands and is reviewed, how sessions push beneath one another, and how the work's repositories and primary checkouts are kept level.

### 2.1 In scope

- Landing, then review: change documents first, landing within the remit, pull requests, destructive work, the record and its review.
- Committing and pushing beneath other sessions, and the conflict run.
- The repository level check before work resumes on another machine, at every mark and before leaving a host.
- Fast-forwarding primary checkouts after a run pushes and before a Summary.

[Back to contents](#contents)

### 2.2 Out of scope

- The record's shape: `ki-authoring`'s [record format](../../../keystone/ki-authoring/references/standard-formats-record.md).
- Commit and coordination rules for background runs: `ki-delegation`'s [background-run standard](../../../agentic-systems/ki-delegation/references/standard-background-runs.md).
- Committing the package and the turn budget: [the core](standard-coordination.md).
- The open host-move questions: [the sources file](sources.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Remit** | What the owner gives a session to act on once a change document has settled it; work inside it lands without waiting for the owner. **Standard:** this one, [4.1](#41-landing-then-review) |
| **Record** | The record of what one unattended run or batch landed, written in the Cairn store's `record/` as the work lands, and reviewed by the owner afterwards. **Standard:** this one, [4.1](#41-landing-then-review) |
| **Conflict run** | A bounded resolve run at push tier, in its own worktree, for a pull that cannot fast-forward; it rebases only this work's unpublished commits. **Standard:** this one, [4.2](#42-pushing-beneath-other-sessions) |
| **Level** | A repository neither ahead of nor behind its remote, proved by a fresh check; a failed check is unknown, never level. **Standard:** this one, [4.3](#43-repository-level-check) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Landing, then review

Work starts from change documents the owner and the session work through together; within the remit the owner then gives, it lands without waiting for the owner, so that the owner is never the blocker, and the owner reviews it afterwards from a record of what each batch of work achieved. Kris took this on 12 and 13 November 2026 in the Cairn summit's change 07, now held in its [change 20](https://github.com/krisb/ki-cairn-store/blob/7fb6be3/work/cairn/cairn.summit/20-learnings.change.md#41-landing-then-review).

- **Change documents first:** all work, attended or unattended, is covered by a change document the owner and the session have worked through together, deciding each point there; the owner then gives a remit to act on what it settles. Small, obvious work that needs no change of its own, such as levelling a checkout or fixing a broken link, is just got on with and reported in the next record.
- **Land:** within that remit, work that is high-confidence, or reversible through more work, lands on `main` without waiting for the owner, committed by explicit path and pushed under [Pushing beneath other sessions](#42-pushing-beneath-other-sessions). It is not held back as a query; the owner reviews it afterwards.
- **Pull requests:** only when something major is at stake, such as an experiment or a risky change. That work goes on a branch with a pull request, within the session's authority, and waits for the owner. Routine work opens none.
- **Destructive work:** anything more work cannot undo needs real care and the owner's word first, logged in the change document it belongs to. Force-pushing and rewriting history stay banned.
- **Record:** the session that did the work writes its record as it lands, one for each unattended run or batch that lands real work and none for a session spent deciding, in the Cairn store's `record/`. Its shape is `ki-authoring`'s [record format](../../../keystone/ki-authoring/references/standard-formats-record.md), which this standard does not restate. A record holds nothing for the owner to do, and its links go only to what has landed. For a background run, the `ki-delegation` [landing rule](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#462-landing-then-review) says who writes it.
- **Review:** the owner reviews a whole record in the Wayfinder, which is the review, with no walk through the records at the start of a session, marking its `review:` field `approved` or naming what to undo, which is then done as more work. An approved record stays a week, then the Cairn summit's guardian removes it at the next review; any other removal is the owner's choice.

Landing is not acceptance: a roadmap record still closes only under `ki-work accept`.

Sources: WORK-MODES, LAND-THEN-REVIEW, NO-PR-UNLESS-MAJOR, RECORD-WHO, RECORD-GRAIN, RECORD-REVIEW, RECORD-KEEP and RECORD-HARNESS in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.2 Pushing beneath other sessions

Several sessions commit into one checkout, so one session's commits can sit on another's unpushed ones.

- **Commit:** every session, coordinator or background agent, commits its own work by explicit path under the `ki-delegation` [coordination](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#48-coordination) rules. It never commits, reverts or stashes another session's files.
- **Push:** fetch first. Where local `main` is ahead and fast-forwards its remote, push everything stacked, other sessions' commits included, within the session's authority and the repository's own rules. Never force-push or use `--no-verify`. Where the branches have diverged, stop and send the pull to the conflict run. A push is never put against the owner: it is no `👤` item, "with you" count or query.
- **Conflict run:** a pull that cannot fast-forward goes to a bounded resolve run at push tier in its own worktree.
  - It rebases only this work's unpublished commits onto the remote and verifies them.
  - It stops on another session's content, uncertain ownership or a judgement call. File ownership alone does not prove a file holds no other session's content.
  - When it stops, park a blocking query and push nothing more from that repository in the window, under the delegation [conflict-run boundary](../../../agentic-systems/ki-delegation/references/standard-background-runs.md#482-conflict-runs).
  - Nobody stashes, rebases or resets in the coordinator's checkout.
- **Report:** reports and banners omit routine push state and other sessions' stacked commits. Where a run's own unit could not be published because its push failed, its `## Done` names the unit and the reason. A Stop says nothing about pushes beyond a failure.

Sources: COMMIT-OWN-WORK, PACKAGE-PUSH, PUSH-NOT-WITH-YOU and CONFLICT-RUN in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.3 Repository level check

Check that the work's repositories are level before work resumes on another Mac, at every mark and before leaving a host: run `mgit fetch` across them, then read `mcp-git-audit`'s ahead and behind report. Check the repositories in the work's scope; a State of play checks its estate. Fetching and inspecting authorise no push and no change to another writer's working tree.

- **Behind:** carry each behind repository as `<repository>: <count> commits behind`, in the next report's `## In Progress` or as a 🤖 line of a Summary's status table, until a fresh check proves it level. It is not a banner item.
- **Ahead:** read under [Pushing beneath other sessions](#42-pushing-beneath-other-sessions). An unpublished change must not disappear in a host handoff.
- **Failed check:** a failed or unavailable check is unknown, never level. Report the repository and what prevented the check.
- **Reconciling:** reconcile a behind checkout only under [Keeping primary checkouts current](#44-keeping-primary-checkouts-current), leaving a dirty or diverged checkout to its owner.
- An On hold banner keeps its parked-and-release form.

Queue transfer, host-bound runs and the old session's closing form are outside this rule. The [deferred host-move design notes](sources.md#4-last-review) keep the open questions and transfer evidence and grant no implementation authority.

Sources: SYNC-GUARD in [the decision register](sources.md#3-decisions).

[Back to contents](#contents)

### 4.4 Keeping primary checkouts current

Background agents work in worktrees and push their own commits, so the owner's primary checkouts fall behind. The coordinator fast-forward pulls each affected primary checkout after a background agent that pushed finishes, and before a Summary.

It pulls only with `--ff-only` into a clean checkout. A checkout with uncommitted changes, or diverged from its upstream, is skipped and reported to the owner, never stashed, rebased or reset. The pull is a one-step check within the [turn budget](standard-coordination.md#43-coordinator-responsiveness); any repair goes to a background agent or the owner.

[Back to contents](#contents)
