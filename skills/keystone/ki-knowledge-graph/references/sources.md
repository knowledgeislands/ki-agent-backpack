---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources — where the knowledge-graph standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Outside specifications](#211-outside-specifications)
    - [2.1.2 In-house sources](#212-in-house-sources)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the knowledge-graph standard](standard-knowledge-graph.md), its [migration overlay](migration-knowledge-graph.md) and the generated [rubric](rubric.md). The skill is canonical: review it alongside a change to a knowledge-graph or knowledge-tending card, to a graph's root definition, to the `ki-acquire` curation text, or to the staging-base structure in `ki-repo-kb`. Mode REFRESH reads this file, compares the standard with the sources below, and records what it checked in [Last review](#3-last-review).

[Back to contents](#contents)

## 2. Outside sources

The standard follows one outside specification, the default link vocabulary, and in-house cards and standards that own the concepts and curation rules it relies on.

### 2.1 Authoritative

Two sub-groups: the outside specification, and the in-house sources.

#### 2.1.1 Outside specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SKOS — The W3C [SKOS Reference](https://www.w3.org/TR/skos-reference/) | The default link vocabulary: its semantic relations (`skos:broader`, `skos:narrower`, `skos:related`) and mapping properties (`skos:exactMatch`, `skos:closeMatch`, `skos:broadMatch`, `skos:narrowMatch`, `skos:relatedMatch`) | 2026-11-12 |

[Back to contents](#contents)

#### 2.1.2 In-house sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| GRAPH — The skill's own graph, [opened by its root definition](../knowledge/_graph.md): the 22 knowledge-graph cards the Inbox curated under the Principal's Pillars | The concepts the standard relies on: Semantic Markdown (the card format, typed links, status and sensitivity), the knowledge graph (progressive enrichment, addressing, relationships as knowledge), layered graphs (attachment points, shadow nodes and Kris's 7 November shadow-node life cycle of lift, prune, touch point, look up before you grow, and regrow), contextual atomicity, semantic sovereignty and permeability, progressive disclosure and territories and islands | 2026-11-12 |
| TENDING — The knowledge-tending cards in Harbour's staging graph, under `ki-principal/Pillars/knowledge-tending/` | The funnel (named on 3 November 2026, starting at Deposit since 6 November, with its pace), knowledge curation (curation quality and staging before stability, 2 and 3 November) and transactional curation (the struck-through capture) | 2026-11-07 |
| ACQUIRE — The `ki-acquire` standard's "Staging and curation" section, [4.6](../../ki-acquire/references/standard-acquisition.md#46-staging-and-curation) of its common acquisition standard; its curation and dispatch rules moved to the Inbox's, now Harbour's, `docs/guides/curation.md` and `docs/guides/operator/dispatch.md` on 19 November 2026 | The Acquire rules of 30 October to 1 November 2026 on cards, origins, future ideas and held material, which this standard restates for cards and staging | 2026-11-19 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, confirmed that the standard, its rubric and its in-house sources name Harbour where they named the Inbox, with no rule changed. The in-house sources were last checked on 19 November 2026, and the SKOS Reference, the one outside specification, on 12 November 2026.

**Watching:**

- Where the staging profile lives: `ki-repo-kb` has none yet, and the migration overlay's remaining row stays until it is settled and its layout can be checked.

[Back to contents](#contents)
