---
id: KI-HARNESS-GOV-237
area: GOV
title: Classified record routing
component: work
priority: medium
size: s
assignee: work/ki.summit
status: triage
blocks: []
blocked_by: []
baseline_ref: null
created_at: 2026-11-19T06:25:00Z
updated_at: 2026-11-19T06:25:00Z
---

# Classified record routing

## Goal

`ki-work-roadmap`'s work-item format routes a classified record in the store's words, so a record reaches the package that works it under the work tree as it stands.

## Context

Raised as CLASSIFY-ROUTE in the Work guild's review of 18 November 2026, carried in the Cairn summit's change Skills review (10) and handed to Loreward, for the Work guild, on 19 November 2026; its text at its last revision is [Skills review (10), CLASSIFY-ROUTE](https://github.com/krisb/ki-cairn-store/blob/7048a479/work/cairn/cairn.summit/10-skills-review.change.md#71-questions).

`ki-work-roadmap`'s [work-item format, 4.6](../../skills/work/ki-work-roadmap/references/standard-work-item-format.md#46-classification) still routes a record in the old model's words: a resolved Project "locates its package in the Capital", "the assigned package steward" adds the record to its next steps, and a record with no Project reaches "the State of play's routing queue" when ownership is unresolved. Since ROADMAP-PACKAGE a (Kris, 17 November 2026), records stay with their code and a package in the Cairn store names the records it works, now in its `ki-records` field; the State of play's queue went with the old package shape. The Work guild's review left the wording, since the new words were not yet decided.

## Boundary

4.6's routing paragraph, and any `tools-ki` routing that reads the old words. It does not change the classification fields themselves, `ki-work-package`'s records rule or CASCADE-DOWN.

## Discussion

### Options

- a) Rewrite the paragraph to the store's model: a resolved Project's record is worked by the Project's package in the Cairn store, which names it in `ki-records`; a record with no Project goes to its repository's owning package, and up to the territory's leader only if ownership is unresolved, under CASCADE-DOWN; the `project` tag stays a link, never a transfer of authority. Recommended, medium-high confidence: each piece is already decided and only the wording is new; it rises to high on Kris's word or on Loreward confirming the territory's leader as the fallback.
- b) Drop the paragraph and point at `ki-work-package`'s [records rule](../../skills/work/ki-work-package/references/standard-work-package.md) instead.

### Handover

The guardian drafted option a) for Loreward on 19 November 2026 rather than building it, since the routing words are the Work guild's to write with its tools. Loreward lands it, brings any `tools-ki` routing that reads the old words into line, and tells the guardian when it lands.
