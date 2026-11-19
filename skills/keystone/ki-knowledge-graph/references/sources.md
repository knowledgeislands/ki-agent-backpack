---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:47:26Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the knowledge-graph standard](standard-knowledge-graph.md), its [migration overlay](migration-knowledge-graph.md) and the generated [rubric](rubric.md). The skill is canonical: review it alongside a change to a knowledge-graph or knowledge-tending card, to a graph's root definition, to the `ki-acquire` curation text, or to the staging-base structure in `ki-repo-kb`. Mode REFRESH reads this file, compares the standard with the sources and decisions below, and records what it checked in [Last review](#4-last-review).

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
| TENDING — The knowledge-tending cards in the Inbox's staging graph, under `ki-principal/Pillars/knowledge-tending/` | The funnel (Kris's name of 3 November 2026, starting at Deposit since 6 November, with its pace), knowledge curation (curation quality and staging before stability, 2 and 3 November) and transactional curation (the struck-through capture) | 2026-11-07 |
| ACQUIRE — The `ki-acquire` standard's "Staging and curation" and "Dispatch and authority" sections, now [4.6](../../ki-acquire/references/standard-acquisition.md#46-staging-and-curation) and [4.7](../../ki-acquire/references/standard-acquisition.md#47-dispatch-and-authority) of its common acquisition standard | Kris's Acquire decisions of 30 October to 1 November 2026 on cards, origins, meetings, future ideas, held material and dispatch by Git move, which this standard restates for curation; ACQUIRE-SPLIT decides which text keeps them | 2026-11-07 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| SKILLS-OVER-GRAPH | Option a, Kris, in the backpack work package `ki.reg.guilds`: method in skills, the graph keeps "things that are"; with Kris's word the same day that "the knowledge graph in itself is its own skill", not part of `ki-repo-kb`. | 2026-11-07 | [1](standard-knowledge-graph.md#1-introduction) | In force |
| KG-NAME | Option a, Kris, in `ki.reg.guilds`: the skill is named `ki-knowledge-graph`. | Not recorded | The skill | In force |
| HARNESS-SCOPE | Option a, Kris, in `ki.reg.guilds`: the skill sits in the acquire group. | Not recorded | The skill's placement | Superseded by GRAPH-KEYSTONE |
| MIGRATION-OVERLAY | Kris, in `ki.reg.guilds`: the standard describes only the final state, and temporary adjustments sit in a migration overlay, deleted line by line as each condition is met. | 2026-11-07 | [The migration overlay](migration-knowledge-graph.md) | In force |
| GRAPH-KEYSTONE | Kris, in the Cairn summit's change 22, knowledge skills: the skill moves into the Keystone guild beside `ki-agentic-systems`, because skills and knowledge are built on its card format; its placement no longer waits on GUILD-NAME. Its design note `skills/d12-kg.design.md`, section 2, is the skill's design. | 2026-11-12 | The skill's placement | In force |
| KG-GENERAL | Kris, in the Cairn summit's change 06, knowledge graph: the graph serves any use, curation being one. | 2026-11-12 | [1](standard-knowledge-graph.md#1-introduction), [4.7](standard-knowledge-graph.md#47-curation) | In force |
| KG-ROOT | Kris, in change 06: a graph defines itself in a `_graph.md` card of type graph, taken with ROOT-FORM a. | 2026-11-12 | [4.2](standard-knowledge-graph.md#42-the-root-definition) | In force |
| ROOT-FORM | Option a, Kris, in change 06: a graph defines itself in a `_graph.md` card of type graph, taken with KG-ROOT. | 2026-11-12 | [4.2](standard-knowledge-graph.md#42-the-root-definition) | In force |
| KG-SELF | Kris, in change 06: the standard's own concepts are cards in this skill's own graph, taken with KG-HOME a. | 2026-11-12 | [1](standard-knowledge-graph.md#1-introduction) | In force |
| KG-HOME | Option a, Kris, in change 06: the standard's own concepts are cards in this skill's own graph, taken with KG-SELF. | 2026-11-12 | [1](standard-knowledge-graph.md#1-introduction), the skill's own graph | In force; its folder set by KNOWLEDGE-FOLDER |
| KG-SUBGRAPHS | Kris, in change 06: vendor and other outside usage are subgraphs, and comparison is through their links. | 2026-11-12 | [4.5](standard-knowledge-graph.md#45-subgraphs) | In force |
| LINK-VOCAB | Option a, Kris, in change 06: SKOS by default, declared at the root, `ki:` only for gaps. | 2026-11-12 | [4.2](standard-knowledge-graph.md#42-the-root-definition), [4.4](standard-knowledge-graph.md#44-links) | In force |
| KG-FLAT | Kris, in change 06: flat by default, identity by id, readable ids, folders optional. | 2026-11-12 | [4.1](standard-knowledge-graph.md#41-the-graph) | In force |
| FILE-NAME | Option a, Kris, in change 06: the file is `<id>.md`, the id carrying the subgraph. | 2026-11-12 | [4.1](standard-knowledge-graph.md#41-the-graph) | In force |
| KG-GRAIN | Kris, in change 06: no links into part of a card. | 2026-11-12 | [4.4](standard-knowledge-graph.md#44-links) | In force |
| KNOWLEDGE-FOLDER | Kris's word, relayed by the Cairn summit's guardian: a skill that holds a knowledge graph keeps it in `knowledge/` at the skill's top level, with the root definition `_graph.md` at its root; only the graph's cards go there, and everything else useful in the skill, its standards, sources, rubric, proposals and migration standards, stays in `references/`, so `knowledge/` is its own area outside `references/`. | 2026-11-12 | [4.1](standard-knowledge-graph.md#41-the-graph), GRAPH-5, the skill's own graph | In force |
| GRAPH-FOLDERS | Kris's word, relayed by the Cairn summit's guardian, option a: inside `knowledge/` there is one folder for each subgraph, and files keep their id names, as `knowledge/industry/industry.session.md`; ids and front-matter `links:`, keyed by id, do not change, and only path-based Markdown links follow a card. | 2026-11-12 | [4.1](standard-knowledge-graph.md#41-the-graph), [4.2](standard-knowledge-graph.md#42-the-root-definition), CARD-5 | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Keystone guild's review in the Cairn summit's skills review brought the standard and this file into `ki-authoring`'s formats: the standard is renamed `standard-knowledge-graph.md` and given the standard format's sections, its rules held word for word under numbered subsections and its Boundary table now its Out of scope; this file takes the sources format, the decisions it and the standard already named gathered into the Decisions table. The migration overlay keeps its name for now. No rule changed, and no outside source was refreshed.

**Watching:**

- ACQUIRE-SPLIT, still open with Kris: which of this standard and the `ki-acquire` standard keeps curation and dispatch, and the migration overlay's first row until it is answered.
- STAGING-HOME, still open with Kris: the staging profile in `ki-repo-kb`, and the overlay's second row until it is answered.

On 12 November 2026, under KNOWLEDGE-FOLDER and GRAPH-FOLDERS, the skill's graph moved from `references/` to `knowledge/`, flat since it has no subgraphs; the standard now says a skill's graph root is `knowledge/` and that folders follow subgraphs, and the standard, its migration overlay, the rubric and these sources stay in `references/`.

On 12 November 2026 the standard was rewritten under change 06 as a general graph: the root definition `_graph.md` and its sections, flat graphs with identity by id and the file named from the id, links drawn from a vocabulary declared at the root with SKOS the default, subgraphs for outside usage, and the grain rule, with curation kept whole as one use. The rubric gained CARD-5, CARD-6, GRAPH-5 and GRAPH-6, all judged on supplied evidence. The 22 cards then moved from the staging folder into the skill as its own flat graph, with the first root definition. Change 06's change 2, removing the migration overlay's group-placement line, landed with the skill's move into Keystone under GRAPH-KEYSTONE.

On 7 November 2026, under the decisions above and an away-window grant to build the skills only, the skill was written from the guild's design note, the 22 knowledge-graph cards, the funnel and curation cards, and the `ki-acquire`, `ki-repo-kb` and `ki-skills` standards. The standard describes the final state; the open overlap with `ki-acquire`, the missing staging profile and the undecided group name sat in the migration overlay. No card or knowledge base was changed. The 22 cards had reached the backpack's `+/_ACQUIRED/knowledge-graph/` that day from personal.reg.inbox-terra, at Kris's word, as a one-off exception to the Inbox's dispatch hold, byte for byte as staged; under KG-HOME a) they later moved into this skill, their file names already their ids, with links that left the graph removed and links into parts of cards pointed at the whole card, as the root definition records. The Inbox keeps a shadow node for each at its old path.

[Back to contents](#contents)
