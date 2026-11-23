---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:45:51Z
ki-refresh: external-spec · 365d
---

# Sources — where the Decision Records standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

Tracked sources for Mode REFRESH behind [the Decision Records standard](standard-decision-records.md) and its [rubric](rubric.md). Re-fetch before proposing changes to the format standard or rubric. Update `last reviewed` dates and the Last review block after each refresh run.

What to look for on refresh:

- New section recommendations from the ADR community (e.g. Options, Pros/Cons patterns) — evaluate whether DRs should adopt them
- The house standard deliberately **omits** Nygard's Status section and lifecycle (DRs are living present-state records); on refresh, confirm this divergence is still intended rather than re-importing a status vocabulary
- Community conventions for multi-type DR naming or scoping

[Back to contents](#contents)

## 2. Outside sources

Nygard's original format grounds the standard; the ADR community supports it.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| NYGARD — [Nygard ADR format (original): Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) | The short single-decision record with Context, active-voice Decision and Consequences | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| ADR-GITHUB — [ADR GitHub community resources: adr.github.io](https://adr.github.io) | Supporting community evidence for optional record patterns, not authority for the house taxonomy, serial scope, or living-record policy | 2026-11-23 |

[Back to contents](#contents)

## 3. Decisions

The nine-prefix taxonomy, `decision_type_url`, and living-record policy are house conventions the standard states. Owner decisions are recorded by id:

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| DOCS-LANDING-GITHUB | "_index.md only", Kris on the question card in Loreward's Home Chat at 19:57 GMT, recorded in ki.summit's change 23 · Decision: option b), not the recommended a): a docs folder's page is `_index.md` alone, with no `README.md` pointer beside it, even though the folder then shows no page on GitHub, under `ki-authoring`'s docs folder pages. | 2026-11-22 | [the index rule](standard-decision-records.md), INDEX-1 | In force |
| AUTHORING-FIXES | Option a: the skill is kept and fixed. Its `SKILL.md` becomes a router to the standard, with no rule lost: the rules it alone held, the Enactment Process link, routine changes not warranting a record, generic metadata's owner and the checker's output contract, move into the standard. Kris, 22 November 2026, about 20:14 GMT, the Authoring guild's sitting in Kitteth's Home Chat, card: "Keep all, fix", recorded in the Cairn summit's change 10, 4.3. | 2026-11-22 | [out of scope](standard-decision-records.md#22-out-of-scope), [writing guidance](standard-decision-records.md#411-writing-guidance) | In force |
| AUTHORING-FIXES | Option a, item 3: the bare-invocation mode choice is offered through the host's question tool, so the skill names no tool only one host has. Kris, 22 November 2026, about 20:14 GMT, the Authoring guild's sitting in Kitteth's Home Chat, card: "Keep all, fix", recorded in the Cairn summit's change 10, 4.3. | 2026-11-22 | `SKILL.md`, Operating modes | In force |

[Back to contents](#contents)

## 4. Last review

REFRESH ran **2026-11-23** for Gilder's overnight sources sweep; both sources were re-fetched and no rule changed.

- **NYGARD:** the page is live and unchanged: Title, Context, active-voice Decision, Status and Consequences. The house's omission of Status remains intended.
- **ADR-GITHUB:** still community evidence only, recommending no sections or statuses. MADR's latest release is still 4.0.0 (September 2024), so Considered Options / Pros and Cons has not consolidated further; eADR appears only in a JavaLand 2026 talk title (10 March 2026), with no documented convention.

**Watching:** the three items below stand unchanged.

On 22 November 2026 AUTHORING-FIXES a, item 3, was applied by Loreward: the skill's words name the host's question tool where they named Claude's `AskUserQuestion`. No criterion changed and no outside source was refreshed.

On 22 November 2026 AUTHORING-FIXES a was applied by Loreward: the `SKILL.md` was slimmed into a router to the standard, and the four rules only it held moved into [the out-of-scope list](standard-decision-records.md#22-out-of-scope) and [the writing guidance](standard-decision-records.md#411-writing-guidance). No criterion changed and no external source refreshed.

On 22 November 2026 DOCS-LANDING-GITHUB, recorded under Decisions, was applied by Loreward's run from the Knowledge Islands summit's change 23: a code repository's decision index is `docs/decisions/_index.md`, and INDEX-1 warns on an earlier `README.md` alone or one beside it. No outside source was refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Authoring guild: REFRESH names the backpack as where to run it; the exemplar ADR keeps its words. No criterion changed and no outside source refreshed.

On 18 November 2026 the Authoring guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Decision Records standard](standard-decision-records.md), formerly `standard-decision-records.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

REFRESH last run **2026-08-12**.

- **Nygard ADR format** — current primary page remains available. It recommends a short single-decision record with Context, active-voice Decision, Status, and Consequences; the house living-record model intentionally diverges from its historical-status treatment.
- **ADR GitHub community** — remains supporting community evidence for optional record patterns, not authority for the house taxonomy, serial scope, or living-record policy.
- **House metadata** — the nine-prefix taxonomy, `decision_type_url`, and living-record policy remain house conventions. Current primary discovery did not verify public `decision_type_url` targets, so the standard labels them non-authoritative house reference metadata rather than published external specifications.

External sources are current. **Internal note:** the house DR format is a **living present-state record** — lifecycle axes, historical narrative, supersession chains, and `## Changelog` are excluded, and `SKILL.md`, the Decision Records standard, the rubric, and the checker align on that form. Serial uniqueness remains per-prefix within scope.

**Watching:**

- MADR "Considered Options / Pros & Cons" pattern — re-evaluate adoption only if the ecosystem consolidates on it; currently declined by design.
- "eADR" (embedded ADRs in source) surfacing in adr.github.io talks — watch whether a documented convention emerges.
- Nygard's Status section — deliberately not adopted; recheck only that the divergence remains intended.

[Back to contents](#contents)
