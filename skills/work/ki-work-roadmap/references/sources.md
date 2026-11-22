---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T22:58:47Z
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
| [`ki-repo-kb` Knowledge Base standard](../../../repository/ki-repo-kb/references/standard-knowledge-base.md) | KB boundary and the Streams layout, since KB-FOLD b | 2026-11-22 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| KB-FOLD b | "Fold three, split streams", Kris, 22 November 2026, about 20:49 GMT, the Repository guild's sitting, recorded in the Cairn summit's [change 10](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/10-skills-review.change.md#43-decided): `ki-repo-kb-streams` is split, its record checks coming here, reported in a Knowledge Base under ITEM-1, ITEM-2, ROAD-6 and ROAD-7, its layout to `ki-repo-kb` and its Project close-out to `ki-work`; the `kb-streams` adapter points at this skill. | 2026-11-22 | [4.1](standard-repository-roadmaps.md#41-repositories-it-applies-to) | In force |
| ROADMAP-EXIT-STATE | "Yes, add returned", Kris, about 01:05 UTC, on Orca item 112, recorded in ki.summit's [change 22](https://github.com/krisb/ki-cairn-store/blob/87ec71c8/work/ki/ki.summit/22-roadmap-horizons.change.md#4-outline): option a), records gain a sixth `resolution`, `returned`: the work went back to ideas, which is not the same as being declined, and `## Cancelled` names where it waits; it takes no `resolution_target`. | 2026-11-22 | [4.9](standard-work-item-format.md#49-cancellation-and-resolution), [4.3](standard-repository-roadmaps.md#43-status-and-horizon) | In force |
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
| CLASSIFY-ROUTE a | The classified record's routing in the store's words: a resolved Project's record is worked by the Project's package in the Cairn store, which names it in `ki-records`; a record with no Project goes to its repository's owning package, and up to the territory's leader only if ownership is unresolved, under CASCADE-DOWN; the `project` tag stays a link, never a transfer of authority. Option a of CLASSIFY-ROUTE in `ki.summit`'s [Pending changes and e2e (13)](https://github.com/krisb/ki-cairn-store/blob/main/work/ki/ki.summit/13-pending-changes-and-e2e.change.md#71-questions), landed on 22 November 2026 under LAND-THEN-REVIEW on the coordinator's word, for Kris to accept with KI-HARNESS-GOV-237. | 2026-11-22 | [classification](standard-work-item-format.md#46-classification) | In force, for Kris's acceptance |
| TRADES-DROP | Option a: `ki-trades` and `ki-trade` are dropped now, ahead of the 31 December review TRADES-FATE set; both skills go, with the 22 repository declarations and the trade hooks in `ki-work` and this skill, and Git keeps them. Here the TRADE rubric family, its `hold.trades` field and the Trade review section go; a record still carrying `hold.trades` or `waiting_on_trades` fails as an unexpected field. Kris, 22 November 2026, about 19:59 GMT, at the Work guild's sitting in the Cairn summit's change 10, card: "Drop now". | 2026-11-22 | [Discipline](standard-repository-roadmaps.md#48-work-item-discipline), [Hold](standard-work-item-format.md#48-hold) | In force |
| WORK-FIXES a | The skill is kept, and with the trade parts gone under TRADES-DROP, the UNATTENDED-FIELD placeholder goes too: no record carries an unattended-eligibility field, and none is held open for one. Kris, 22 November 2026, about 19:48 GMT, the Work guild's sitting in Kitteth's Home Chat, card: "Keep all, fix", recorded in the Cairn summit's change 10, 4.3. | 2026-11-22 | [target dates](standard-work-item-format.md#47-target-dates) | In force |
| PRUNE-RECORDS | Option a, 7 days: a roadmap record `done` or `cancelled` for 7 days, with its terminal-state and delivery commits landed on the upstream default branch, is pruned without asking the owner, under the standing prune; acceptance and cancellation still come to the owner. `accept prune` with no selector selects the due records, the standing rule being the deletion authority, and the selection checks, reference preflight and prune-only commit still apply. Kris, 22 November 2026, about 20:08 GMT, the Work guild's sitting, card, in his words: "I'd say it's less than that. I think you could do 7 days. We don't want to keep them around." Recorded in the Cairn summit's change 10, 4.3, on Kitteth's evidence of 95 done and 28 cancelled records still on disc. | 2026-11-22 | [the standing prune](../../../keystone/ki-work/references/standard-acceptance.md#443-the-standing-prune), [work-item discipline](standard-repository-roadmaps.md#48-work-item-discipline) | In force |
| PRUNE-LINK-CHECK | Option a: a new WARN item, ITEM-7, reads the relative Markdown links in roadmap records, skips URLs, commit-pinned ones included, and flags each whose target is a work record no longer on disc, a pruned record, suggesting `ki link <ID>`, which prints the `[<ID> (pruned)](…/blob/<last revision>/…)` form. Kris, 22 November 2026, 19:52 GMT: "Warn on them", recorded in ki.summit's change 23. | 2026-11-22 | [commit boundaries](standard-repository-roadmaps.md#410-lifecycle-commit-boundaries) | In force; `ki link` is not yet in the CLI |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 PRUNE-LINK-CHECK a was applied by Loreward: [the commit boundaries](standard-repository-roadmaps.md#410-lifecycle-commit-boundaries) say a pruned record is linked only at a commit, and the new ITEM-7 warns on a relative link to a pruned record, its evidence in `contexts/roadmap-evidence.ts` and its tests in `items/item-links.test.ts`; the rubric is regenerated. No external source refreshed.

On 22 November 2026 PRUNE-RECORDS a was applied by Loreward: [work-item discipline](standard-repository-roadmaps.md#48-work-item-discipline) says a record terminal for 7 days with its commits landed is pruned without asking the owner, under `ki-work accept`'s standing prune, and [the commit boundaries](standard-repository-roadmaps.md#410-lifecycle-commit-boundaries) and the skill's notes admit it. No criterion changed and no external source refreshed.

On 22 November 2026 WORK-FIXES a was applied by Loreward: the UNATTENDED-FIELD placeholder sentences left the skill's shared model and [the target dates](standard-work-item-format.md#47-target-dates). No criterion changed and no external source refreshed.

On 22 November 2026, in the Cairn summit's change 10, step 6.3's Work landing, TRADES-DROP was applied, recorded under [Decisions](#3-decisions): the TRADE rubric family (TRADE-1, TRADE-2), the `hold.trades` field, the trade-retained prune guard and the Trade review section were removed, Conform and educate becoming 4.13, and the rubric was regenerated. No outside source was refreshed.

On 22 November 2026 CLASSIFY-ROUTE a, recorded under Decisions, rewrote the last paragraph of [classification](standard-work-item-format.md#46-classification) in the store's words, delivering KI-HARNESS-GOV-237 for Kris's acceptance: no Capital, package steward or State of play's routing queue remains. No criterion changed and no external source refreshed.

On 22 November 2026 the second SKILLS-LEARNING batch, Kris's steer of that morning to bake the night's lessons into the skills, added two recipes from Tower's roadmap work to [the work-item format](standard-work-item-format.md): group Steps by a prefix on each task-list item, since ITEM-3 refuses a sub-heading there, and rewrite a folded-in merged record's section on how it relates to its target from the target's side. No rule changed and no outside source was refreshed.

On 22 November 2026 an in-house review applies ROADMAP-EXIT-STATE a, which Kris took at about 01:05 UTC on Orca item 112, recorded in ki.summit's [change 22](https://github.com/krisb/ki-cairn-store/blob/87ec71c8/work/ki/ki.summit/22-roadmap-horizons.change.md#4-outline). [Cancellation and resolution](standard-work-item-format.md#49-cancellation-and-resolution) gains `returned`, the resolution a Soon, Future or held draft record takes when it leaves the roadmap as an idea under **Upcoming only** in [Status and horizon](standard-repository-roadmaps.md#43-status-and-horizon), and ITEM-2 accepts it. This is an in-house decision review; no external source was refreshed.

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
