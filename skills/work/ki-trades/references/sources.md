---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:56:14Z
ki-refresh: canonical · on-change
---

# Sources — where the trade standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house decision records and contracts](#211-in-house-decision-records-and-contracts)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the cross-repository trade standard](standard-trades.md) and its [generated rubric](rubric.md), and so behind the contract `ki-trade`'s [trade-operations procedure](../../ki-trade/references/standard-trade-operations.md) applies. The skill is canonical: REFRESH reconciles the current contract when any source below changes, and records what it checked in [Last review](#4-last-review). No external moving source or calendar refresh is required.

[Back to contents](#contents)

## 2. Outside sources

The standard follows in-house decision records and `ki-repo`'s contracts only.

### 2.1 Authoritative

Every source the standard follows is in-house.

#### 2.1.1 In-house decision records and contracts

| Source | Governs | Last reviewed |
| --- | --- | --- |
| GDR-013 — [`GDR-KI-HARNESS-013`, Capital-owned territory trade policy](../../../../docs/decisions/GDR-KI-HARNESS-013-capital-owned-territory-trade-policy.md) | Route and standing authority held by the Capital's territory trade policy; the retired member `routes` and `subtypes` keys | 2026-10-06 |
| GDR-005 — [`GDR-KI-HARNESS-005`, cross-repository trade routes](../../../../docs/decisions/GDR-KI-HARNESS-005-cross-repository-trade-routes.md), superseded | The original trade routes, records and lifecycle the standard was first written from | 2026-10-06 |
| KI-REPO — `ki-repo` configuration and local registered-repository contracts | Each repository's canonical identity and Capital, the registry, and the generic `+` and `-` working areas | 2026-10-06 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| HANDOFF-AS-MESSAGE | Kris's word: "Handoffs are not roadmap items". A handoff or a rollout goes to the receiving work, never as a trade or a roadmap record. | 2026-10-20 | [4.1](standard-trades.md#41-what-a-trade-is-and-the-hold) | In force; such work now goes along the tree, the message queue having retired (MSG-RETIRE, in `ki-coordination`'s sources) |
| TRADES-FATE | Decided by Kris on 26 October 2026 with the twenty-query "all": the skill is narrowed to the routes the Capital's declared trade policy grants, handoffs and rollouts go to the receiving work, existing trades keep full support while no new trade is submitted, and opening the Trades revamp Project is the next review trigger, with a fallback date of 2026-12-31 on `HOLD-1`. | 2026-10-26 | [4.1](standard-trades.md#41-what-a-trade-is-and-the-hold) | In force; its pointer to the receiving work's `messages.md` now runs along the tree, under MSG-RETIRE |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the territory example was brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Work guild: its channel reports to the backpack, as `backpack-maintenance`. No criterion changed and no outside source refreshed.

On 18 November 2026 the Work guild's review, from the Cairn summit's change 10, brought the files into the formats: [the trade standard](standard-trades.md), formerly `standards-trades.md`, and `ki-trade`'s [trade-operations procedure](../../ki-trade/references/standard-trade-operations.md), formerly `standards-trade-operations.md`, were renamed and reshaped to the standard format with their rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-10-26 - TRADES-FATE, decided by Kris on 26 October 2026 with the twenty-query "all": narrowed the skill to the routes the Capital's declared trade policy grants, pointed handoffs and rollouts to the receiving work's `messages.md` under HANDOFF-AS-MESSAGE, kept full support for existing trades and the ban on new submissions, and made opening the Trades revamp Project the next review trigger with a fallback date of 2026-12-31 on `HOLD-1`. GDR-KI-HARNESS-013 is unchanged: no authority or lifecycle moved.
- 2026-10-06 - Moved route and standing authority from per-repository declarations to the Capital-owned territory trade policy (GDR-KI-HARNESS-013, governed by KI-ARCADIA-GOV-016); retired member `routes` and `subtypes` keys without a transition.
- 2026-09-22 — Clarified standing knowledge-intake authority, the itemized observation-policy matrix, revocation evidence, and the separate authority required for future automation.
- 2026-08-06 — Added committed preparations, silent Git observation, independent receipt and decision axes, sender observation policies, direct applied work, raw sender-projection equality, and policy-led release.
- 2026-08-05 — Separated derived sender and receiver delivery statuses from the receiver-owned decision status; added `unconsidered` and `in_progress` decisions.
- 2026-08-05 — Clarified that a sender may declare an export and create its local outbound record before the receiver participates; activation remains reciprocal.
- 2026-08-03 — Initial standard authored from GDR-KI-HARNESS-005 and the local KI repository-registry contract. No external moving source or calendar refresh is required.

[Back to contents](#contents)
