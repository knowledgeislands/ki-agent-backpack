---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — Knowledge graphs: root definition, cards, links, staging and tending

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-knowledge-graph --write`.

Line-by-line criteria for auditing ki-knowledge-graph. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [CONFIG — Knowledge-graph configuration](#config--knowledge-graph-configuration)
- [CARD — Semantic Markdown cards](#card--semantic-markdown-cards)
- [CURATE — What curated cards keep](#curate--what-curated-cards-keep)
- [GRAPH — Root definition, subgraphs, layers and tending](#graph--root-definition-subgraphs-layers-and-tending)
- [RUBRIC — Generated rubric publication](#rubric--generated-rubric-publication)

## CONFIG — Knowledge-graph configuration

→ [standard](standard-knowledge-graph.md)

The method takes its layout from the knowledge base that declares it and accepts no configuration keys of its own.

- **CONFIG-1 [M] — the knowledge-graph method has no configuration properties** — Unexpected keys in the skill table are visible rather than silently accepted as staging-layout settings, which belong to the knowledge base’s own structure. (standard-knowledge-graph.md#471-the-staging-graph)
  - _Remediation:_ diagnostic — Remove unsupported keys; declare the staging layout in the knowledge base’s own structure.

## CARD — Semantic Markdown cards

→ [standard](standard-knowledge-graph.md)

Cards are judged on supplied card evidence; each says what one thing is, in the house card format.

- **CARD-1 [J] — front matter identifies the card and its status** — Every card carries id, title, type and status, with status one of proposal, future-concept or agreed, a type its root definition declares, and the further properties the root definition requires of that type. (standard-knowledge-graph.md#43-cards, standard-knowledge-graph.md#42-the-root-definition)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does every card in the supplied evidence carry id, title, type and status, with a status from the closed list, a declared card type and every property its root definition requires?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **CARD-2 [J] — links are typed only where an assertion is meant** — A front-matter links entry pairs a reference with a predicate from a vocabulary the root definition declares, SKOS by default and ki: only where no declared vocabulary has the term; unannotated links stay navigational, and link definitions hold only destinations at the bottom of the card. (standard-knowledge-graph.md#44-links, standard-knowledge-graph.md#42-the-root-definition)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does every predicate express an intended assertion from a declared vocabulary, using ki: only where SKOS and the other declared vocabularies lack the term, with no invented predicate on a navigational link?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **CARD-3 [J] — one authoritative definition per concept within a graph** — Other cards give short context and link to the defining card rather than repeat it, and no card is made for every noun. (standard-knowledge-graph.md#43-cards, standard-knowledge-graph.md#472-tending)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Is each concept defined once within its graph, with other cards linking to that definition, and does every card earn its place?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **CARD-4 [J] — cards stand alone and keep method out** — No card has a body origin section; any origin is one plain front-matter line; future ideas are future concepts, and method links to its owner rather than being restated. (standard-knowledge-graph.md#43-cards)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does every card avoid body origin sections, treat future ideas as future concepts, and leave tending, curation and dispatch method to its owner?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **CARD-5 [J] — a card is named by its readable id** — A card file is `<id>.md`, its id is short and readable, never a UUID, carries its subgraph before a dot where the graph has subgraphs, and is unique in the graph; its folder is never part of its identity, and where the graph has folders the card sits in its subgraph’s folder. (standard-knowledge-graph.md#41-the-graph)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Is every card file named from its front-matter id, is each id readable, unique and prefixed with its subgraph where the graph has subgraphs, does no front-matter link depend on a folder, and where the graph has folders, does each card sit in the folder of its subgraph?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **CARD-6 [J] — no link reaches into part of a card** — A link points at a whole card, never at an anchor inside one; a card that others need in part is split so each part linked to is a card of its own. (standard-knowledge-graph.md#44-links)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does every link between cards target a whole card file, with any card that is needed in part split into cards of their own?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.

## CURATE — What curated cards keep

→ [standard](standard-knowledge-graph.md)

What a card curated from a capture keeps is judged on the cards and the captures they came from; curating itself is the Inbox’s, under CURATION-HOME.

- **CURATE-4 [J] — curation keeps what is durable** — Positions, proposals and commitments are kept with the organisation holding each, and the moment’s detail stays in the capture. (standard-knowledge-graph.md#47-staging-and-tending)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Did curation keep durable positions and commitments against organisations, and leave ephemeral detail in the capture?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.

## GRAPH — Root definition, subgraphs, layers and tending

→ [standard](standard-knowledge-graph.md)

A graph’s root definition, subgraphs, staging and layers are judged on supplied evidence; folder and zone structure is the knowledge base’s own.

- **GRAPH-1 [J] — routing links run one way** — Routing cards may link into captures and staged cards, but nothing in a capture links into the routing cards. (standard-knowledge-graph.md#471-the-staging-graph)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does any capture link into a routing card?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **GRAPH-2 [J] — shadow nodes are read-only pointers that record their check** — Each shadow node records the card it shadows, where that card lives and when it was last checked, and carries no knowledge of its own. (standard-knowledge-graph.md#46-layered-graphs-and-shadow-nodes)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does every shadow node name its subject, where it lives and its last check, and hold no content that should be edited through it?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **GRAPH-3 [J] — the layer above is consulted before a card is grown** — A new card is grown only after checking the layer above; a suitable card there is brought down as a shadow and grown off, never duplicated. (standard-knowledge-graph.md#46-layered-graphs-and-shadow-nodes)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ For each new card, was the layer above checked first, and does no new card duplicate an attachment point or settled card above?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **GRAPH-4 [J] — pruning keeps each area’s touch point** — Shadow nodes are pruned only in untended areas after a few rounds of use, and every live area keeps its one shadow at its touch point. (standard-knowledge-graph.md#46-layered-graphs-and-shadow-nodes, standard-knowledge-graph.md#472-tending)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Were pruned shadows in untended areas only, and does every live area keep one shadow node where it touches the layer above?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **GRAPH-5 [J] — the graph defines itself at its root** — The root folder, a skill’s `knowledge/`, holds `_graph.md`, of card type graph, whose sections declare in order the card types, link vocabulary, properties, constraints, subgraphs, and extent and limitations, none left out. (standard-knowledge-graph.md#42-the-root-definition)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does the graph’s `_graph.md` declare every card type, vocabulary, property, constraint and subgraph its cards use, and state its extent, limitations and pending cards?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **GRAPH-6 [J] — outside usage is a subgraph linked to the graph’s terms** — Where parties use their own words for a term, each party’s words are cards in its own subgraph linked to the term with mapping predicates, one link per sense, and comparisons are read from those links rather than listed in prose. (standard-knowledge-graph.md#45-subgraphs)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Are synonyms, senses and comparisons expressed as links between subgraph cards rather than as lists in a card’s prose?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.

## RUBRIC — Generated rubric publication

→ [standard](../../ki-skills/references/standard-rubric-authoring.md)

The tracked readable rubric is the exact publication of the structured catalogue.

- **RUBRIC-1 [M] — structured catalogue publication is exact** — A structured catalogue tracks `references/rubric.md` as its exact generated publication. The host supplies only validated publication evidence: a missing or differing file is a FAIL; during CONFORM this item requests the host-owned derived write without choosing its path or bytes. (../../ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication)
  - _Remediation:_ automatic
