---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:43:37Z
ki-status: in force
---

# Next-work procedure

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Ground](#41-ground)
  - [4.2 Triage inbound handoffs](#42-triage-inbound-handoffs)
  - [4.3 Review relevance and capture](#43-review-relevance-and-capture)
    - [4.3.1 Review relevance](#431-review-relevance)
    - [4.3.2 Capture substantive prospective work](#432-capture-substantive-prospective-work)
  - [4.4 Select candidates](#44-select-candidates)
    - [4.4.1 Non-KB repositories](#441-non-kb-repositories)
    - [4.4.2 Knowledge Bases](#442-knowledge-bases)
    - [4.4.3 Roadmap wave screen](#443-roadmap-wave-screen)
    - [4.4.4 The two gates](#444-the-two-gates)
  - [4.5 Defer](#45-defer)
    - [4.5.1 Defer a record](#451-defer-a-record)
    - [4.5.2 Hold and release](#452-hold-and-release)
  - [4.6 Compare, rank, and confirm](#46-compare-rank-and-confirm)
    - [4.6.1 The change-value profile](#461-the-change-value-profile)
    - [4.6.2 Worked trade-off](#462-worked-trade-off)
  - [4.7 Spawn due housekeeping work](#47-spawn-due-housekeeping-work)
    - [4.7.1 Spawn a due run](#471-spawn-a-due-run)
    - [4.7.2 Timestamp ownership](#472-timestamp-ownership)
  - [4.8 Finish](#48-finish)

## 1. Introduction

`ki-work next` applies the transition rules of the adapter selected by `ki-work`.

Its responsibility ends at selecting, promoting, deferring, or spawning due work and handing confirmed immediate work to `ki-work plan` for shaping. The decisions behind these rules are in the [sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

How the next work is chosen, captured, deferred or spawned.

### 2.1 In scope

- Grounding in the repository and its selected adapter.
- Triage of inbound trade handoffs.
- Relevance review and the capture of substantive prospective work.
- Candidate selection and the roadmap wave screen.
- Deferral, hold and release.
- Comparing, ranking and confirming candidates.
- Spawning due housekeeping work, and timestamp ownership.
- Finishing a cycle.

[Back to contents](#contents)

### 2.2 Out of scope

- Readiness: [the readiness procedure](standard-plan-lifecycle.md).
- Delivery: [the implementation procedure](standard-implementation.md).
- Closure, cancellation and pruning: [the acceptance procedure](standard-acceptance.md).
- Record shape, the status and horizon table and identifier reservation: `ki-work-roadmap`.
- Trade transport and validation: `ki-trades`.
- Housekeeping eligibility: `ki-work-recurring`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Capture** | Creating one `status: triage` record with no horizon for substantive prospective work that passes the graduation test, within the capture gate. **Standard:** this one, [4.3.2](#432-capture-substantive-prospective-work) |
| **Adoption gate** | The check work passes to go onto a roadmap: the owner's yes, a home, a known next step, not `xl`, at `now` or `next`. **Standard:** this one, [4.4.4](#444-the-two-gates) |
| **Start gate** | The check upcoming work passes to become active: Ready, nothing it needs missing, and room in its package and territory. **Standard:** this one, [4.4.4](#444-the-two-gates) |
| **Wave** | A confirmed group of distinct records with a safe delivery synergy, delivered frozen once every member is Ready, only within an unattended window's grant. **Standard:** this one, [4.4.3](#443-roadmap-wave-screen) |
| **Hold** | A record set to `horizon: hold` with a reason, a named condition and, where release cannot be observed, a review date. **Standard:** this one, [4.5.2](#452-hold-and-release) |
| **Change-value profile** | The dimensions made visible when comparing viable material candidates, never scored. **Standard:** this one, [4.6.1](#461-the-change-value-profile) |

[Back to contents](#contents)

## 4. Rules

The steps run in order. `ki-work next` never treats a recap, handoff, or historic transcript as authority to write.

### 4.1 Ground

When a `ki-work recap` precedes this cycle, require its bounded handoff to be complete before starting a new selection cycle. Treat its digest as orientation only and re-ground every repository fact below.

1. Resolve the current git repository physically and read `.ki.toml`.
2. Run `ki repo audit --skill ki-work --repo <git-root>` and stop on any failure. Read its selected adapter literal and require the matching declared owner table. This process does not reimplement the base selector's semantic validation and never infers an adapter from repository shape.
3. For `roadmap`, run `ki repo audit --skill ki-work-roadmap --repo <git-root>` and stop on any FAIL or WARN. Read `ROADMAP.md`, every canonical item directly below `docs/roadmap/`, and active `docs/housekeeping/` templates; derive lifecycle status and dependencies from frontmatter.
4. For `kb-streams`, run `ki repo audit --skill ki-repo-kb-streams --repo <git-root>` and stop on any FAIL or WARN. Read the flat records and `_ISSUES.md` ledger in `Streams/Roadmap/`, plus active recurring Activity notes in the configured `ki-repo-kb-activities` collection, fresh.
5. For `github-issues` or `linear`, stop before reading or writing records: remote process execution is not implemented. Do not fall back to local paths or a compatibility representation.
6. When the repository declares `ki-trades`, run its audit and inspect validated inbound records after the clean governing-skill audits. Its `README.md` is orientation, not a record.

[Back to contents](#contents)

### 4.2 Triage inbound handoffs

Present every inbound record that still needs receiver judgment. Use the receiver vocabulary: **unconsidered**, **in progress**, **parked**, **clarify**, **applied**, **adopted**, **retained**, **declined**, or **superseded**. A newly copied record begins `unconsidered`; receipt is a separate delivery fact, not a decision.

Present its sender provenance, payload, constraints, current status, existing receiver rationale and linkage, and the exact available status transitions.

Require confirmation of the exact inbound file, receiver status, rationale, local linkage, and resulting local record write. Change only receiver-local fields; do not rewrite sender provenance or payload, mutate an outbound or peer copy, or delete a record as part of disposition.

For a work trade, choose between direct application and a local roadmap proposal before recording a terminal decision:

- Propose `applied` only when the trade has one bounded, reversible, independently verifiable local outcome; authority is clear; no material design decision, dependency, migration, public-contract change, or cross-repository write is involved; and an existing targeted verification gate proves the result. Present the exact local edit, verification, and commit boundary, require confirmation, apply and verify the change, commit it atomically, then record `applied` with that full verified commit ID. A documentation or configuration change is not automatically trivial merely because its diff is small.
- Otherwise propose one or more local work records. Preserve the trade's operating model, sources, alternatives, authority and safety boundaries, and unresolved questions. Require separate confirmation of each record's wording and horizon, then record `adopted` with the confirmed local linkage. Adoption does not itself prioritize, implement, accept, or complete that work.

Knowledge trades never use direct application. Record `retained` only after the knowledge is placed in a named canonical local artifact; otherwise keep the trade in progress, park it, ask for clarification, decline it, or supersede it as the evidence warrants.

Do not manufacture a roadmap item merely to close a trivial work trade. Conversely, do not use `applied` to bypass roadmap selection or review for material work.

After a terminal decision, report the next condition required by the sender's observation policy. `unattended` and `receipt` permit release after receipt; `decision` waits for a terminal decision; `completion` waits through decision and, for adopted work, local completion. Applied work and retained knowledge satisfy completion directly, while decline or supersession resolves it without completion. In progress, parked, and clarify retain the outbound copy whenever its policy still waits. Recommend receiver pruning only after sender release is observable; `ki-work next` never performs a peer write or infers release from silence.

Receiver-local standing knowledge intake is not an inbound trade disposition. When `ki-trades` validates a marked `STI-*` capture against an exact active subtype grant, route the knowledge proportionately: augment an existing record only inside its established goal and boundary; create a local draft for a distinct insight, decision, dependency, or scope; or retain directly as canonical knowledge when knowledge itself is the outcome. A public contract or implementation consequence still becomes receiver-local work. Never infer selection, priority, implementation, acceptance, completion, or publication authority from the standing route, source repository, or territory-derived repository selection.

`unattended` and `receipt` are itemised observation policies only. They do not activate standing intake, grant automatic transfer or execution authority, or weaken receiver-owned disposition. Any future autonomous transport or application requires a separate explicit authority contract.

[Back to contents](#contents)

### 4.3 Review relevance and capture

#### 4.3.1 Review relevance

Run this pass for `--review`, or briefly when grounded evidence shows a material concern.

Identify only evidence-backed proposals: stale or obsolete work, duplicates, changed hold conditions, changed dependencies, or an item at the wrong horizon.

Do not change adopted content until the user confirms exact wording and placement. Bounded triage capture follows the exception below.

[Back to contents](#contents)

#### 4.3.2 Capture substantive prospective work

Any identifier named before publication is provisional. Immediately before allocating, re-read the applicable `_ISSUES.md` scope; if its high-water mark differs from the inspected value or the proposed serial is not exactly one greater, discard the proposed serial and reallocate from the latest value. Then commit the ledger advance on its own, in the repository's designated roadmap writing checkout, before writing the record it reserves. Never treat a plan, recap, approval, warm session context, or an uncommitted working copy as an identifier reservation. The [roadmap standard](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#411-number-reservation) owns that ordering and the write locus it depends on.

During the current interaction, capture a distinct prospective outcome, concern, dependency, or decision once it is substantive enough to state a plain-language Goal, Context, Boundary, and decision-useful Discussion, and it passes the [graduation test](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#46-ideas-and-graduation): it is actionable, a decision with an owner and a needed-by date, or must survive the session. Goal, Context, and Boundary alone are not enough. An idea that does not yet graduate goes to its Project note's `## Notes` section when the Project is known, otherwise to the Inbox, under the roadmap standard's [ideas rule](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#46-ideas-and-graduation); roadmaps no longer keep `_IDEAS.md`. Capture is gated: Kris set the standing burn-down focus on 2026-10-14, "burn the roadmap down; no new feature records. Capture only blockers, defects or Kris-requested items; prefer closing, merging or rejecting. Applies to every Knowledge Islands thread and every agent brief", and took CAPTURE-GATE a) on 19 October, "runs never create records; the owning work's coordinator captures only a blocker, a defect seen failing or a Kris request; ideas go to Project notes; small audit fixes need no record". So a background run never creates a record and names any candidate in its report instead; in coordinating work only the owning work's coordinator captures; and a record is created only for a blocker, a defect seen failing or an item the owner asked for. A handoff or a rollout is never captured as a record in the receiving repository: it goes along the tree under `ki-coordination`'s [Work between packages](../../../work/ki-coordination/references/standard-messages.md#messages-between-work), the message queue having retired (MSG-RETIRE), as Kris set under HANDOFF-AS-MESSAGE on 2026-10-20, "Handoffs are not roadmap items ... A rollout that needs people to make those changes sooner rather than later must go as a message"; only work genuinely deferred, which the receiver owns, may become a record, captured by the receiver's own coordinator under this gate, and a declared `ki-trades` route keeps its trade records. Anything else that graduates goes to the Project note or the Inbox as above, a small audit fix needs no record, and closing, merging or rejecting existing work is preferred to opening new. Within the gate no further prior approval is required. Allocate the next canonical identity, create one `status: triage` record with no horizon, a [`priority` and `size`](../../../work/ki-work-roadmap/references/standard-work-item-format.md#43-priority-and-size) set by judgement as the [migration tolerance](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#47-migration-tolerance) allows, and matching timestamps, and report the capture after writing it. Capture creates durable intake only; it does not adopt, plan, implement, batch, accept, or prune work.

Deferred work is the other route into capture, as Kris took HELD-VS-RECORD a) on 7 November 2026. Deliverable work that the run or session producing it did not deliver, and that outlives that session, becomes an unadopted triage record in its home repository, captured there through `ki-work next`; a background run still only names it in its report, and the coordinator of the work that owns that repository captures it at receive. A work package's `## Held` list keeps only items waiting on a named decision or event, never deferred deliverable work.

Before creating a record, search the selected adapter for an existing owner. Do not capture rhetorical examples, already-resolved observations, or duplicates. If an existing triage record owns the same Goal and Boundary, new decision-useful detail within that boundary may enrich it automatically and must advance its timestamp. If an adopted record owns the concern, report that owner and require confirmation before changing it. Adoption requires explicit human approval and the [adoption gate](#444-the-two-gates), and remains here: it sets `status: draft`, `horizon: now` or `next`, and `kind`, and may set `purpose`, `project` or `theme`, and `component`, and revisit `priority` and `size`. Cancellation as obsolete, rejected, duplicate, merged, or superseded requires exact human approval and routes to `ki-work accept`, which records `status: cancelled` before any later prune; it is never a direct deletion. Approval alone never bypasses the lifecycle or done-before-prune rules.

[Back to contents](#contents)

### 4.4 Select candidates

#### 4.4.1 Non-KB repositories

Selection follows one order, as the [work-item format](../../../work/ki-work-roadmap/references/standard-work-item-format.md#43-priority-and-size) states: adoption, holds and dependencies first, then horizon, then `priority` (`high` a material cost from deferral, `medium` useful planned progress, `low` a discretionary benefit, an absent one reading as `medium`), then `size`, smallest first. Priority never crosses horizons: a `high` record at a later horizon is not selected ahead of earlier work, but prompts a proposal to move its horizon through the steps below.

1. Gather dependency-ready `now` and `next` records, ordered within each horizon by `priority` and then by `size`, smallest first. Reuse their canonical record; if several are independently ready, recommend a small ranked set only when each retains its own lifecycle and the user confirms the set and order.
2. Only when none is eligible, review the existing `soon` and then `future` records, one at a time, under the roadmap standard's **Upcoming only** in [Status and horizon](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#43-status-and-horizon): propose moving a record that meets the Next entry rule to `next`, and otherwise its leaving the roadmap, its idea placed where it now waits. After confirmation, make the move, run the adapter audit, and re-evaluate at the destination. No record moves to `soon` or `future`.
3. Review a held `draft` the same way when it comes up: it leaves the roadmap with its release condition. A held `ready`, `in-progress` or `awaiting-review` record stays.
4. Review triage separately from candidate selection. Present the exact destination horizon, `now` or `next`, the `kind`, and how the record passes the [adoption gate](#444-the-two-gates); adopt only after explicit human confirmation, then re-evaluate at the destination.
5. Exclude held records from selection. Propose a release only when their named condition changed or their review date has passed.

[Back to contents](#contents)

#### 4.4.2 Knowledge Bases

Use the same horizon vocabulary on flat `Streams/Roadmap/` records. A recurring Activity is the standing definition, not a delivery destination; due runs become linked roadmap records at the profile's declared horizon.

[Back to contents](#contents)

#### 4.4.3 Roadmap wave screen

Before selecting one viable non-KB item, compare the whole dependency-ready candidate set for a **safe delivery synergy**. Do not promote a later-horizon item merely to create a wave: every candidate must first satisfy its normal route into immediate work. A group is a wave candidate only when all of the following are true:

- every record remains distinct with its own lifecycle, verification, and review packet;
- the items share a concrete delivery advantage, such as one bounded source surface, setup or verification pass, external coordination window, or coherent user outcome;
- their planned changes can be sequenced without conflicting writes, concealed dependencies, or one item's result changing another item's honest scope; and
- each item is independently executable at its position, with satisfied dependencies and no unapproved decision required.

Do not treat a shared Project or component, adjacent numbering, the same repository, or a desire for throughput as synergy. Related work that changes the same uncertain contract, needs a new decision, or would make a failure hard to isolate stays separate.

For each safe candidate group, present the named items in proposed order, the concrete advantage, the evidence that keeps them independent, the shared verification where relevant, and the mandatory stops the wave keeps. Also state why any superficially related candidate was excluded.

Require confirmation of the exact candidate set and order before planning each member through `ki-work plan`. Once every selected record is Ready, offer the set as a wave to the coordinating package whose unattended window will deliver it, under `ki-coordination`. This is a preparation handoff, not implementation authority: the wave is frozen and delivered only within the window's recorded grant, which re-validates scope, readiness, verification, and stops before any `ki-work implement` cycle begins. Work outside a coordinating package that needs such delivery opens a package and a window first.

If no group meets every condition, say so briefly and use the ordinary single-item selection path.

[Back to contents](#contents)

#### 4.4.4 The two gates

Work passes two gates, one when it is adopted and one when it starts, as Kris took GATES a on 21 November 2026: "Adopt two checkpoints (when an idea is adopted, when work starts), leaving size rules aside? → Yes, both checkpoints". `ki-work next` applies both, and checks each afresh whenever its answer may have changed.

The **adoption gate**, from an idea or a triage record to upcoming work, passes when:

1. the owner says yes, by explicit approval;
2. the work has a home: the repository whose code it changes, under [Records and work packages](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#49-records-and-work-packages), and its Project or theme where one is known;
3. its next step is known, a bounded investigation whose purpose is to settle an open question counting as a known next step;
4. it is not `size: xl`, which is split before adoption under the work-item format's [priority and size](../../../work/ki-work-roadmap/references/standard-work-item-format.md#43-priority-and-size); and
5. it goes on at `now` or `next`, under the roadmap standard's **Upcoming only** in [Status and horizon](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#43-status-and-horizon).

The adoption gate admits `s`, `m` and `l` alike and has no small-only test, as Kris took GATES-SIZE-SMALL a on 21 November 2026 ("Yes, drop it"): the size rules stand, and one unit in flight per package keeps the work small. It checks for no room either: upcoming records have no cap, as Kris set the same day, "lets scrap the caps until its an issue".

The **start gate**, from upcoming work to active work, passes when:

1. the record is `ready`, approved for implementation under [the readiness procedure](standard-plan-lifecycle.md);
2. nothing it needs is missing: every `blocked_by` record is done, and it is not held; and
3. there is room, where the work runs in a work package: the package has no other unit in flight, beyond at most that unit's own independent review, and the package is within its territory's cap of three active packages, both trials `ki-coordination` sets in [Coordinator responsiveness](../../../work/ki-coordination/references/standard-coordination.md#43-coordinator-responsiveness) and [Territory work](../../../work/ki-coordination/references/standard-territory.md#411-territory-work).

`ki-work implement` starts delivery only on a record that passes the start gate.

[Back to contents](#contents)

### 4.5 Defer

#### 4.5.1 Defer a record

`defer <item> <horizon>` is an explicit user-confirmed move.

Resolve the exact record and identify linked dependencies before proposing it.

A defer changes horizon and keeps status, so the destination must admit that status under the [status and horizon table](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#43-status-and-horizon). A defer moves a record only between `now` and `next`: no record moves to `soon` or `future` under the roadmap standard's **Upcoming only**, and work no longer upcoming leaves the roadmap instead, or goes on hold if it is already `ready`, `in-progress` or `awaiting-review`. Status `triage` is not a deferral destination: moving adopted work back into intake requires an explicit human disposition.

[Back to contents](#contents)

#### 4.5.2 Hold and release

Hold a `ready`, `in-progress` or `awaiting-review` record when it deliberately stops progressing until a named condition is met; a draft that must wait leaves the roadmap with its release condition instead, under the roadmap standard's **Upcoming only**. Set `horizon: hold` and a `hold` mapping with `reason` (`waiting-for` an external condition or `parked` for an intentional pause), the named `condition`, and a `review` date where release cannot be observed. Keep status, `baseline_ref`, completed Steps, and review evidence; a review may wait on Hold for an unavailable reviewer. An in-progress hold older than a month should be reconsidered, because a stale baseline turns resuming into a rebase.

When the condition is observation of one or more trades, list them in `hold.trades: [TRD-…]` and state in prose whether the item awaits receipt, a terminal receiver decision, or completion of linked receiver-local work. Do not add trade identities to `blocks` or `blocked_by`: those arrays remain local work-item dependencies.

Release requires evidence that the condition changed, or a review date that prompts a fresh decision. Choose the destination horizon afresh rather than restoring the previous one, remove the `hold` mapping, and revalidate scope and dependencies at the destination.

Never silently delete, reopen, or detach a canonical execution record.

[Back to contents](#contents)

### 4.6 Compare, rank, and confirm

#### 4.6.1 The change-value profile

Use the **change-value profile** only when comparing viable material candidates or when a human asks for a material engineering-change comparison.

For a focused single-step fix, retain the lightweight selection path: explain the immediate reason and confirmation boundary without manufacturing a profile.

The profile makes these dimensions visible, with short evidence only for the dimensions that materially distinguish the candidates:

- **Capability** — user or system outcome enabled.
- **Comprehensibility** — reduction in ambiguity, indirection, or cognitive load.
- **Maintenance reduction** — obsolete code, duplication, or recurring manual work removed.
- **Reliability** — failure mode, verification, or recovery improved.
- **Leverage** — downstream work or users enabled by the result.
- **Delivery cost** — bounded implementation and verification effort.
- **Reversibility** — ease and safety of changing course after delivery.
- **Readiness** — decision, scope, and evidence are sufficient to begin.
- **Dependency availability** — required prerequisites, people, repositories, or services are available.

Do not calculate a composite score, store profile metadata on a work item, or imply that the profile chooses work automatically.

[Back to contents](#contents)

#### 4.6.2 Worked trade-off

Two ready candidates can both be worthwhile: a narrow local repair may have low delivery cost and high reversibility, while a compatibility improvement has higher leverage and reliability but depends on another repository.

Present those facts directly, choose only after the human confirms the order, and record neither candidate as objectively "higher value" once the unavailable dependency or chosen sequencing changes the decision.

Before a selection, adoption, promotion, or deferral write, show selected items, any proposed wave and its order, exact frontmatter or wording changes, and dependency effects. The bounded triage capture rule above is the sole no-prior-confirmation exception.

When an owner answer is needed, use the runtime's structured ask-user-questions interface if available. Put the item's current state, proposed change, consequence, and canonical record link in the question; use a clickable link only where that interface supports one, and otherwise place the link in adjacent prose. Offer the evidence-backed recommendation as the first selectable response with its reason in the option description where supported. For example, recommend moving a dependency-ready Soon item to Next when its scope is actionable, while offering to let it leave the roadmap as an idea. If evidence does not support a recommendation, say so. A preselected response is not an answer or approval. Use the same content in a concise prose question when no structured interface is available.

Require explicit confirmation, then run the applicable adapter audit.

Invoke `ki-work plan` only after a selected record is Now or Next.

It shapes the same item through the stage-detail contract and stops for review before marking it Ready.

`ki-coordination` may deliver a confirmed synergistic group as a frozen wave only when every member is Ready and only within an unattended window's recorded grant.

That handoff does not permit `ki-work next` to infer wave, selection, or implementation authority.

[Back to contents](#contents)

### 4.7 Spawn due housekeeping work

#### 4.7.1 Spawn a due run

Use the repository-native definition governed by `ki-work-recurring`: Project template fields are flat and hyphenated; KB Activity schedule fields are snake_case inside `housekeeping`, with `id`, `title`, and `status` at the Activity's top level. Ignore ordinary Activities without a profile and never evaluate retired Activities. Run the focused housekeeping audit before spawning; stop on invalid profiles, ambiguous identities, retained duplicate definitions, or unsafe placement. Every caller, including an external routine, uses this same admission and serialised active-run reservation rather than creating an independent run. KB profile writes also require the base's canonical-change authority.

A due-run identity is provisional until publication. Re-read the applicable issue ledger immediately before spawning and reallocate if it advanced. Commit the ledger advance on its own first, then write the spawned record and the template `active-run` linkage as one coherent change.

After grounding and before ordinary candidate selection, evaluate each active housekeeping template under the adapter's template horizon. Use `ki-work-recurring`'s read-only `evaluateHousekeepingSchedule({ repository, schedule, today })` capability with freshly read template fields and an explicit UTC date. Its owner standard defines calendar-or-commit eligibility, first-parent evidence, missing-history diagnostics, initial runs, and grace. Do not reimplement that calculation or treat unknown volume as zero; preserve manual confirmation, paused, and active-run guards.

For each due template, present the exact proposed work record, destination (normally Now or Next), template link, and policy effect. Spawn automatically only when the template expressly permits automatic spawning; otherwise require confirmation. The spawned record enters as `draft` and follows the ordinary shared lifecycle. In the same coherent change, set only `active-run` to the linked record identity; never change `last-run` or `last-run-ref` at spawn. `ki-work accept` records successful completion by recording the actual successful completion date in `last-run`, the evidenced reviewed revision in `last-run-ref`, and clearing `active-run` only after the linked run is accepted as `done`.

Never implement a definition directly, spawn a duplicate active run, or leave a due work record in the Activity collection.

[Back to contents](#contents)

#### 4.7.2 Timestamp ownership

For a newly captured local record, write one canonical UTC-second instant to both `created_at` and `updated_at`. For any confirmed promotion, deferral, spawned-run linkage, or other semantic work-item mutation, preserve `created_at` and advance `updated_at` to the later of the current UTC second or one second after its observed value. Stop before publication when either timestamp is absent or malformed, or when the source revision changed after inspection. Read-only inventory never advances a timestamp. Remote adapters project provider-native timestamps and do not duplicate them into remote bodies.

[Back to contents](#contents)

### 4.8 Finish

Report each confirmed handoff disposition, synergy decision (including excluded near-matches), files changed, selected work, and audit result.

Identify `done` and `cancelled` records that are eligible for pruning when useful, but do not delete them; path- or glob-selected pruning belongs to `ki-work accept`, while `ki repo roadmap prune` is the separate deterministic selected-repository sweep, which commits its deletions by default under the standardised prune message unless run with `--no-commit`. Pruning `done` and `cancelled` records is sanctioned cleanup whose archive is Git history.

If no work is eligible, identify the missing condition or scoping decision plainly.

End after reporting the confirmed selection, handoff, and audit result. Runtime context management is not a `ki-work next` action or completion condition.

[Back to contents](#contents)
