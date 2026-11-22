---
id: KI-HARNESS-GOV-237
area: GOV
title: Classified record routing
kind: deliver
purpose: corrective
component: work
priority: medium
size: s
assignee: work/ki.summit
horizon: now
status: awaiting-review
blocks: []
blocked_by: []
baseline_ref: 89a6b7c85d218822002a5f97a867c41edf890dc4
created_at: 2026-11-19T06:25:00Z
updated_at: 2026-11-22T20:16:00Z
---

# Classified record routing

## Goal

`ki-work-roadmap`'s work-item format routes a classified record in the store's words, so a record reaches the package that works it under the work tree as it stands.

## Context

Raised as CLASSIFY-ROUTE in the Work guild's review of 18 November 2026, carried in the Cairn summit's change Skills review (10) and handed to Loreward, for the Work guild, on 19 November 2026; its text at its last revision is [Skills review (10), CLASSIFY-ROUTE](https://github.com/krisb/ki-cairn-store/blob/7048a479/work/cairn/cairn.summit/10-skills-review.change.md#71-questions).

`ki-work-roadmap`'s [work-item format, 4.6](../../skills/work/ki-work-roadmap/references/standard-work-item-format.md#46-classification) still routes a record in the old model's words: a resolved Project "locates its package in the Capital", "the assigned package steward" adds the record to its next steps, and a record with no Project reaches "the State of play's routing queue" when ownership is unresolved. Since ROADMAP-PACKAGE a (Kris, 17 November 2026), records stay with their code and a package in the Cairn store names the records it works, now in its `ki-records` field; the State of play's queue went with the old package shape. The Work guild's review left the wording, since the new words were not yet decided.

## Boundary

4.6's routing paragraph, and any `tools-ki` routing that reads the old words. It does not change the classification fields themselves, `ki-work-package`'s records rule or CASCADE-DOWN.

## Current state

Delivered. Option a) is decided as CLASSIFY-ROUTE a, recorded by Loreward on 22 November 2026, about 17:52 GMT, within the remit the guardian's hand-down of 19 November gave it, in the Knowledge Islands summit's change [Pending changes check and the e2e skill (13), 4.3](https://github.com/krisb/ki-cairn-store/blob/main/work/ki/ki.summit/13-pending-changes-and-e2e.change.md#43-decided). 4.6's routing paragraph now reads in the store's words, landed on `main` at [`a38439f2c`](https://github.com/knowledgeislands/ki-agent-backpack/commit/a38439f2c95ae44ad36c2c29f24793198f07fd83). `tools-ki` holds no routing that reads the old words.

## Steps

- [x] Rewrite the last paragraph of the work-item format's 4.6 to option a).
- [x] Record CLASSIFY-ROUTE a in `ki-work-roadmap`'s sources.
- [x] Search `tools-ki` for routing that reads the old words: none.

## Files touched

- `skills/work/ki-work-roadmap/references/standard-work-item-format.md`
- `skills/work/ki-work-roadmap/references/sources.md`

## Verify

`ki repo audit --repo . --skill ki-work-roadmap` passes, and 4.6 holds no "package steward" or "routing queue", nor the Capital as a router of records.

## Dependencies / blocks

None.

## Documentation impact

### Decision Records

None: CLASSIFY-ROUTE a is recorded in `ki-work-roadmap`'s sources.

### Specifications

None.

### Guides

None.

### Roadmap

This record only.

## Review

### Delivered

The boundary as set: 4.6's routing paragraph, and any `tools-ki` routing that reads the old words. Excluded, as set: the classification fields, `ki-work-package`'s records rule and CASCADE-DOWN. Baseline `89a6b7c85d218822002a5f97a867c41edf890dc4`; result [`a38439f2c`](https://github.com/knowledgeislands/ki-agent-backpack/commit/a38439f2c95ae44ad36c2c29f24793198f07fd83).

### Change Summary

- `standard-work-item-format.md` 4.6: a resolved Project's record is worked by the Project's package in the Cairn store, which names it in `ki-records`; a record with no Project goes to the package that owns its repository, and up to the territory's leader only if ownership is unresolved, under CASCADE-DOWN; the `project` tag stays a link, never a transfer of authority or records.
- `sources.md`: CLASSIFY-ROUTE a recorded; no criterion changed and no outside source refreshed.

### Verification

`ki repo audit --repo . --skill ki-work-roadmap` passed on 22 November 2026, 20:16 UTC, with this record at `awaiting-review`. `tools-ki`'s `src/` holds none of the old routing words.

### Outstanding concerns

`ki-coordination`'s territory standard, `skills/work/ki-coordination/references/standard-territory.md`, its Records paragraph, still uses the old words ("the steward", "the State of play's routing queue"). It is outside this record's boundary and needs its own identifier before acceptance.

### Post-change review

The goal is met for 4.6: a record now reaches the package that works it under the work tree as it stands. The change is wording only, with no checker or script touched, so regression risk is low. Ready for Kris's acceptance once the concern above has its own identifier.

### Mini recap

4.6's routing paragraph is rewritten in the store's words at `a38439f2c`; the roadmap audit passes; one concern, the same old words in `ki-coordination`'s territory standard, waits for its own record. Learning route proposed: when a model's words change, search every skill's standards for them, not only the one the record names.

## Discussion

### Options

- a) Rewrite the paragraph to the store's model: a resolved Project's record is worked by the Project's package in the Cairn store, which names it in `ki-records`; a record with no Project goes to its repository's owning package, and up to the territory's leader only if ownership is unresolved, under CASCADE-DOWN; the `project` tag stays a link, never a transfer of authority. Recommended, medium-high confidence: each piece is already decided and only the wording is new; it rises to high on Kris's word or on Loreward confirming the territory's leader as the fallback.
- b) Drop the paragraph and point at `ki-work-package`'s [records rule](../../skills/work/ki-work-package/references/standard-work-package.md) instead.

### Handover

The guardian drafted option a) for Loreward on 19 November 2026 rather than building it, since the routing words are the Work guild's to write with its tools. Loreward lands it, brings any `tools-ki` routing that reads the old words into line, and tells the guardian when it lands.
