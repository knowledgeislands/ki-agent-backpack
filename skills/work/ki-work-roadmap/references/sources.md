---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:58:55Z
ki-refresh: canonical · on-change
---

# Sources — where the repository-roadmap standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house sources](#211-in-house-sources)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the repository-roadmap standard](standard-repository-roadmaps.md), [the work-item format](standard-work-item-format.md) and the [rubric](rubric.md).

The repo-roadmap boundary uses one clean non-KB shape: flat durable work items, classified by `kind`, `purpose`, `project` or `initiative`, and `component`, and oriented from the root roadmap. A work item is enriched in place when it needs execution detail; no parallel plan record or grouping tree survives. The 2026-10-07 roadmap model, approved by Kris Brown, replaced the theme field with that classification, made triage a status, added cancellation with a resolution, and folded Waiting for and Parked into one Hold horizon. KB Streams is the native placement container and reuses this adapter's concrete record model. The source record retains directly inspectable canonical material only. Refresh on a normative change or when real repositories expose friction the current item model cannot represent cleanly.

[Back to contents](#contents)

## 2. Outside sources

The standards follow in-house sources only.

### 2.1 Authoritative

Every source the standards follow is in-house.

#### 2.1.1 In-house sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| `ROADMAP.md` | Repository-local planning practice, work items, horizons, theme grouping, indexes, and lifecycle | 2026-09-22 |
| [Change-management adapter standard](../../../keystone/ki-work/references/standard-change-management-adapters.md) | Selector resolution, abstract lifecycle vocabulary, and ownership boundary | 2026-09-22 |
| [`ki-repo-kb-streams` Streams standard](../../../repository/ki-repo-kb-streams/references/standard-streams-structure.md#44-roadmap) | KB boundary, placement, and off-ramp | 2026-09-22 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ROADMAP-UPCOMING-NEW | "Yes, now or next only", Kris, about 19:00 GMT, by Orca item card, relayed by the Cairn summit's guardian from its [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided): option a), new roadmap work goes on only at `now` or `next`, applying ROADMAP-PACKAGE a. | 2026-11-21 | [4.3](standard-repository-roadmaps.md#43-status-and-horizon), [4.5](standard-repository-roadmaps.md#45-lifecycle-moves) | In force |
| ROADMAP-UPCOMING-EXISTING | "Yes, one at a time", Kris, about 19:00 GMT, by Orca item card, relayed by the Cairn summit's guardian from its [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided): option a), existing `soon` and `future` records leave those horizons one at a time, as each comes up for review, with no sweep, as WIP-TERRITORY a chose for packages over the cap. | 2026-11-21 | [4.3](standard-repository-roadmaps.md#43-status-and-horizon) | In force |
| ROADMAP-UPCOMING-HELD-PLANNED | "Yes, it stays", Kris, about 19:02 GMT, by Orca item card, relayed by the Cairn summit's guardian from its [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided): option a), a held record that is `ready`, `in-progress` or `awaiting-review` stays on the roadmap, so work already done is not lost. | 2026-11-21 | [4.3](standard-repository-roadmaps.md#43-status-and-horizon) | In force |
| ROADMAP-UPCOMING-HELD-DRAFT | "Yes, drafts leave", Kris, about 19:02 GMT, by Orca item card, relayed by the Cairn summit's guardian from its [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided): option a), held drafts leave as each comes up for review, taking their release condition with them, the same rule as other unready work. | 2026-11-21 | [4.3](standard-repository-roadmaps.md#43-status-and-horizon) | In force |
| ROADMAP-UPCOMING-CAP | "lets scrap the caps until its an issue", Kris, about 19:20 GMT, in Kitteth's bot's Home Chat, recorded in the Cairn summit's [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided): the three proposed caps, ROADMAP-UPCOMING-CAP-REPO, -CAP-REVIEW and -CAP-TERRITORY, are dropped; upcoming records have no cap per repository or territory, raised again only if upcoming work piles up. | 2026-11-21 | [4.3](standard-repository-roadmaps.md#43-status-and-horizon) | Dropped; no cap in force |
| GATES-SIZE-XL | "Yes, split before adoption", Kris, about 19:02 GMT, by Orca item card, relayed by the Cairn summit's guardian from its [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided): option a), XL work is split before adoption, following ROADMAP-UPCOMING-NEW; the size rules allow it. A ready `xl` record still fails, and an adopted `draft` one warns. | 2026-11-21 | [priority and size](standard-work-item-format.md#43-priority-and-size) | In force |
| IDEAS-INBOX | Roadmaps stop keeping `_IDEAS.md`: an idea no Project or theme owns goes through capture, intake and maturation in the Inbox until it is ready to become a record, and an `Idea:` bullet in an owning Project note stays; Kris, about 02:25 GMT, in the Cairn summit's [change 42](https://github.com/krisb/ki-cairn-store/blob/4af7d31/work/cairn/cairn.summit/42-roadmap-2.change.md#61-stop-keeping-ideasmd-in-roadmaps). | 2026-11-17 | [4.6](standard-repository-roadmaps.md#46-ideas-and-graduation) | In force |
| ROADMAP-PACKAGE | Records stay with their code and hold work ready to build; a package names the records it works and runs residual fallout and the changes themselves, and a change document's steps become records in the repositories they touch; Kris, in the Cairn summit's change 42, adding that "roadmaps become simple". | 2026-11-17 | [4.9](standard-repository-roadmaps.md#49-records-and-work-packages) | In force |
| LEGACY-ROADMAP | An old package's open work comes into the store's owning package as outstanding items and becomes a record only once it is ready to build; Kris, in the Cairn summit's change 42: "You're meant to be working on a new way, not on an old way". | 2026-11-17 | [4.9](standard-repository-roadmaps.md#49-records-and-work-packages) | In force |
| NODE-ID | A node's id is `<territory>.<slug>`, naming no kind, so the example `assignee` is `work/ki.baseline-rollout`; Kris, in the Cairn summit's [change 20](https://github.com/krisb/ki-cairn-store/blob/7fb6be3/work/cairn/cairn.summit/20-learnings.change.md#45-decided). | 2026-11-16 | [4.2](standard-work-item-format.md#42-frontmatter) | In force |
| ROAD-7 | Option a: the issue ledger's front matter may carry `work: <package id>`, which the checker accepts and CONFORM keeps; Kris, in the Cairn summit's change 44 (now 42). | 2026-11-14 | [4.2](standard-repository-roadmaps.md#42-canonical-shape) | In force |
| WP-STORE | Work packages moved to the Cairn store, so the issue ledger may name the package that does the roadmap's work. | 2026-11-09 | [4.2](standard-repository-roadmaps.md#42-canonical-shape) | In force |
| ASSIGNEE-LOCK | Once a record is `in-progress` its assignee is fixed, read from the earliest committed version of its current in-progress run. | 2026-11-05 | [4.4](standard-work-item-format.md#44-assignee) | In force |
| ROADMAP-ASSIGNEE | Every open record carries an `assignee` from the work model's holder values: "good to give it an assignee. We can always change the assignee if we run out of work, but it's good that someone has it." | 2026-11-05 | [4.4](standard-work-item-format.md#44-assignee), [4.7](standard-repository-roadmaps.md#47-migration-tolerance) | In force |
| SIZE-LABEL | Reports and messages display a size as a T-shirt label, 👕 and the letter in capitals. | 2026-10-25 | [4.3](standard-work-item-format.md#43-priority-and-size) | In force |
| HANDOFF-AS-MESSAGE | "Handoffs are not roadmap items ... we push the need to roll things out into other projects triage folders, and that's not what this is for." | 2026-10-20 | [4.2](standard-work-item-format.md#42-frontmatter) | In force |
| IDEAS-ROOTING | "Ideas start as Idea: bullets in the owning Project or Initiative note"; under the work model an Initiative note becomes a theme page. | 2026-10-17 | [4.6](standard-repository-roadmaps.md#46-ideas-and-graduation) | In force; its `_IDEAS.md` fallback replaced by IDEAS-INBOX |
| RECORD-THRESHOLD | "RECORD-THRESHOLD / agree: a record only for a product or standard change needing acceptance; operational work runs on the decisions log, brief and report; add it to the ki-coordination standard". | 2026-10-14 | [4.6](standard-repository-roadmaps.md#46-ideas-and-graduation) | In force |

[Back to contents](#contents)

## 4. Last review

On 21 November 2026 an in-house review applies ROADMAP-UPCOMING-NEW a, ROADMAP-UPCOMING-EXISTING a, ROADMAP-UPCOMING-HELD-PLANNED a, ROADMAP-UPCOMING-HELD-DRAFT a and GATES-SIZE-XL a, which Kris took that day between about 19:00 and 19:02 GMT by Orca item card, each option after a blind review, and his dropping of the upcoming-record caps at about 19:20 GMT, all relayed by the Cairn summit's guardian from its [change 90](https://github.com/krisb/ki-cairn-store/blob/fdf11947/work/cairn/cairn.summit/90-ways-of-working.change.md#44-decided). [Status and horizon](standard-repository-roadmaps.md#43-status-and-horizon) gains **Upcoming only**: new work goes on only at `now` or `next`, existing `soon`, `future` and held draft records leave one at a time as each comes up for review, held planned work stays, and there is no cap on upcoming records; [Lifecycle moves](standard-repository-roadmaps.md#45-lifecycle-moves) follows, Future -> Soon going. [Priority and size](standard-work-item-format.md#43-priority-and-size) splits `xl` before adoption, and ITEM-2 warns on an adopted `draft` at `xl`. The checker still admits `soon`, `future` and held drafts, so nothing is swept. This is an in-house decision review; no external source was refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Work guild: REFRESH redirects to the backpack and the migration window's checker is the backpack's. No criterion changed and no outside source refreshed.

Later on 2026-11-18 the same review brought the last words of the old package shape out of the two standards: [the work-item format](standard-work-item-format.md#42-frontmatter) hands another repository's need over along the tree under `ki-coordination`'s Work between packages, as MSG-RETIRE set, rather than as a line in the receiving work's `messages.md`, and [the graduation test](standard-repository-roadmaps.md#46-ideas-and-graduation) says operational work runs on its change document's entries, as `ki-coordination`'s record threshold now does, rather than on a work folder's decisions log; Kris's RECORD-THRESHOLD words stay quoted as received. No criterion changed and no outside source was refreshed.

On 2026-11-18 the Work guild's review, from the Cairn summit's change 10, brought the two standards into the standard format, renamed `standard-repository-roadmaps.md` and `standard-work-item-format.md`, their rules unchanged in substance under numbered sections, and this file into the sources format, its decisions gathered from the reviews below. No outside source was refreshed.

2026-11-17: IDEAS-INBOX a, ROADMAP-PACKAGE a and LEGACY-ROADMAP a, which Kris took that day at about 02:25 and 02:58 GMT, relayed from the Cairn summit's [change 42](https://github.com/krisb/ki-cairn-store/blob/4af7d31/work/cairn/cairn.summit/42-roadmap-2.change.md#6-open). Under IDEAS-INBOX, roadmaps stop keeping `_IDEAS.md`: an idea no Project or theme owns goes through capture, intake and maturation in the Inbox until it is ready to become a record, and an `Idea:` bullet in an owning Project note stays; an existing `_IDEAS.md` stays readable, not a record, until its entries move. Under ROADMAP-PACKAGE, records stay with their code and hold work ready to build, a package names the records it works and runs residual fallout and the changes themselves, and a change document's steps become records in the repositories they touch. Under LEGACY-ROADMAP, an old package's open work comes into the store's owning package as outstanding items and becomes a record only once it is ready to build. [Ideas and graduation](standard-repository-roadmaps.md#46-ideas-and-graduation) and the new [Records and work packages](standard-repository-roadmaps.md#49-records-and-work-packages) carry them. This is an in-house decision review; no external source was refreshed.

2026-11-16: NODE-ID a, which Kris took that day at about 15:40 GMT, relayed by the Cairn summit's guardian from the summit's [change 20](https://github.com/krisb/ki-cairn-store/blob/7fb6be3/work/cairn/cairn.summit/20-learnings.change.md#45-decided): a node's id is `<territory>.<slug>`, naming no kind, so the work item format's example `assignee` re-spells `work/ki.prj.baseline-rollout` as `work/ki.baseline-rollout`. The `work/<id>` holder form and the checker are unchanged. This is an in-house decision review; no external source was refreshed.

2026-11-14: ROAD-7 a, which Kris took in the Cairn summit's change 44 (now 42) with COORD-1: the issue ledger's front matter may carry `work: <package id>`, as WP-STORE added on 9 November 2026 when work packages moved to the Cairn store, and the checker accepts it and conform keeps it. This is an in-house decision review; no external source was refreshed.

2026-11-05: Reviewed Kris's ROADMAP-ASSIGNEE and ASSIGNEE-LOCK words, relayed by `personal.reg.household-terra`. The `assignee` field with the work model's holder values, its tolerance window and the in-progress lock read from Git history. This is an in-house decision review; no external source was refreshed.

2026-10-25: Reviewed Kris's 24 and 25 October answers in the `ki.ways-of-working` decisions log and the `model-shape-report.md`, `overview.md` and `unattended-work.md` designs under `wow-harness-model-2`. Resolvable Project references and the optional target date, due-or-milestone kind and outcome; no unattended field. This is an in-house decision review; no external source was refreshed.

2026-10-17: made a new idea start as an `Idea:` bullet in its owning Project or Initiative note, with `_IDEAS.md` only for an idea neither owns, on Kris's IDEAS-ROOTING answer, as received: "Ideas start as Idea: bullets in the owning Project or Initiative note; a ki-principal run adds GIT-SURFACE to the ways-of-working Project note first."

2026-10-14: aligned the graduation test with the `ki-coordination` record threshold Kris set that day, as received: "RECORD-THRESHOLD / agree: a record only for a product or standard change needing acceptance; operational work runs on the decisions log, brief and report; add it to the ki-coordination standard". Under a coordinating thread the threshold decides whether a record is due; the graduation test then governs its capture.

2026-09-22: clarified that proposed identifiers are not reservations; the allocating writer re-reads the applicable ledger immediately before publication and advances it with the new record.

[Back to contents](#contents)
