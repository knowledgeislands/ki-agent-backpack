---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T01:48:38Z
ki-refresh: canonical · on-change
---

# Sources — where the design standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The decisions behind [the design standard](standard-design.md) and its [rubric](rubric.md). Mode REFRESH reads this file, compares the standard with the decisions below, and records what it checked in the [Last review](#4-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

The technical levels in [4.3](standard-design.md#43-each-kinds-levels) follow two outside models and name the contract formats an API is written in; the levels of visual design and their sources are `ki-design-system`'s.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| C4 — [The C4 model](https://c4model.com/) | An architecture's three levels, system context, containers and components, the fourth, code, not drawn | 2026-11-17 |
| ARC42 — [arc42](https://arc42.org/overview/), the building block view (section 5) and runtime view (section 6) | A component's black box, white box and runtime | 2026-11-17 |
| OAS — [OpenAPI 3.2](https://spec.openapis.org/oas/v3.2.0.html) | An API contract that callers outside the repository build to | 2026-11-17 |
| ASYNCAPI — [AsyncAPI 3.0](https://www.asyncapi.com/docs/reference/specification/v3.0.0) | An event or message contract that callers outside the repository build to | 2026-11-17 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| AIP — Google's [AIP-121](https://google.aip.dev/121) and [AIP-122](https://google.aip.dev/122) | An API designed resources first, then its operations | 2026-11-17 |
| ZALANDO — Zalando's [RESTful API guidelines](https://opensource.zalando.com/restful-api-guidelines/), API first | An API defined and reviewed before it is built | 2026-11-17 |
| CRITIQUE — The design reviews of [Google's design docs](https://www.industrialempathy.com/posts/design-docs-at-google/), [AIP-100](https://google.aip.dev/100), the [Rust RFC process](https://rust-lang.github.io/rfcs/), [the advice process](https://martinfowler.com/articles/scaling-architecture-conversationally.html), [Nielsen Norman Group's design critiques](https://www.nngroup.com/articles/design-critiques/) and [Conventional Comments](https://conventionalcomments.org/) | The review's shape, now held for every kind in `ki-authoring`'s [review standard](../../ki-authoring/references/standard-review.md), whose sources file keeps these citations; [4.2](standard-design.md#42-how-a-design-is-shaped) adds only what a design's review needs | 2026-11-17 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| DESIGN-LEAD | The owner's decision, in the Cairn summit's change 14, option a: a new `ki-design` leads the Design guild and covers all design, technical as well as visual; an information architect is one kind of architect, and a technical architect sits beside them. | 2026-11-13 | [4.1](standard-design.md#41-what-design-covers) | In force |
| DESIGN-AUTHORING | The owner's decision, in change 14, option a: `ki-design` holds how a design of any kind is shaped, the brief, options, review and each kind's levels, and points to `ki-design-system` for visual design, Authoring's skills for writing it down and `ki-work-design` for shaping a Project; technical design stays in the lead until it needs a member. | 2026-11-14 | [4.1](standard-design.md#41-what-design-covers) to [4.4](standard-design.md#44-where-a-design-is-written-down) | In force; 4.4 reworded on 17 November 2026 by DESIGN-FRONT, in `ki-authoring`'s sources, a design now written down as a design document |
| DESIGN-LEVELS | The owner's decision, in the Cairn summit's change 10, option a: the three levels of visual design, information architecture, wireframes and mock-ups, go into `ki-design-system`, its visual member, not the lead. | 2026-11-13 | [4.3](standard-design.md#43-each-kinds-levels) | In force |
| ARCHITECT-SPLIT | The owner's decision, in the Cairn summit's [change 12](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/12-names.change.md#46-names-and-roles-of-sessions), option a: the role catalogue's one maker `architect` becomes two, `information-architect` 📐 for the structure, naming, navigation and models of a handed-off piece and `technical-architect` 🏗️ for its components, data, interfaces and technology choices, as this standard drew them beside each other. | 2026-11-16 | [4.1](standard-design.md#41-what-design-covers) | In force |
| TECH-LEVELS | Technical design's levels: architecture by C4, system context, containers and components; a component by arc42's black box, white box and runtime; an API as resources, then operations, then its contract. Each finest level is written down as a specification, diagram or decision record and linked from the design. Kris's word, 17 November, about 00:56 GMT, taking the high-confidence points: "you've got high confidence in some of these, so I think you need to take them and get on with it", relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [4.3](standard-design.md#43-each-kinds-levels) | In force |
| REVIEW-SHAPE | One review for every kind of design: by a reviewer who did not draw it, against the brief, the governing standards and earlier decisions; each finding anchored to an exact place, with its kind, whether it blocks and its confidence; the outcome through the change document that moves the design, with Approve or Accept with changes as records have. Kris's word, 17 November, about 00:56 GMT, taking the high-confidence points: "you've got high confidence in some of these, so I think you need to take them and get on with it", relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [4.2](standard-design.md#42-how-a-design-is-shaped) | In force; its general shape moved to `ki-authoring`'s review standard by REVIEW-HOME |
| REVIEW-HOME | One general review standard in `ki-authoring`, which every reviewable document cites; this skill adds only the design anchors. Option b, Kris's word, 17 November, about 01:37 GMT, raised to high by his word that consistency is vital, relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [4.2](standard-design.md#42-how-a-design-is-shaped) | In force |
| DESIGN-PLACE | Designs live in `docs/design/`, owned by this skill among `ki-repo`'s documentation roots. Kris's word, 17 November, about 00:56 GMT, taking the high-confidence points: "you've got high confidence in some of these, so I think you need to take them and get on with it", relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [4.4](standard-design.md#44-where-a-design-is-written-down) | In force |
| DESIGN-LIFE | A design's statuses are `draft`, `agreed`, `current`, `shelved` and `replaced`, each step through a change document; `ki-authoring`'s design format sets them, and this skill owns the life cycle. Kris's word, 17 November, taken in the summit's change 11 and carried into [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#42-decided), relayed by the Cairn summit's guardian. | 2026-11-17 | [4.4](standard-design.md#44-where-a-design-is-written-down) | In force |
| DESIGN-LIVING | A build adds only to a design's Built section; anything else changes through a change document. Kris's word, 17 November, about 00:56 GMT, taking the high-confidence points: "you've got high confidence in some of these, so I think you need to take them and get on with it", relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [4.4](standard-design.md#44-where-a-design-is-written-down) | In force |

[Back to contents](#contents)

## 4. Last review

Later on 17 November 2026 an in-house review applied REVIEW-HOME b, which Kris took that day at about 01:37 GMT: the review's general shape is written once in `ki-authoring`'s [review standard](../../ki-authoring/references/standard-review.md), and [4.2](standard-design.md#42-how-a-design-is-shaped)'s review step now points at it, keeping only what a design adds: what it is reviewed against, the design anchors, and its outcome through the change document that moves it. The pending pointer is gone, and the terms Finding and Anchor cite the review standard. The rubric's DESIGN-3 is unchanged in substance. No outside source refreshed.

On 17 November 2026 an in-house review built the Cairn summit's [change 16, the Design guild](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md), under TECH-LEVELS a, REVIEW-SHAPE a, DESIGN-PLACE a and DESIGN-LIVING a, which Kris took that day at about 00:56 GMT, and DESIGN-LIFE a, taken in change 11. [4.3](standard-design.md#43-each-kinds-levels) gives technical design its three kinds and their levels, after C4, arc42 and resource-oriented API design. [4.4](standard-design.md#44-where-a-design-is-written-down) writes a design down as a design document in `ki-authoring`'s new design format, under `docs/design/`, its choices, contracts and architecture still going to decision records, specifications and diagrams, and this skill owning its life cycle. [4.2](standard-design.md#42-how-a-design-is-shaped)'s review step holds the review's shape as a short rule, with a pending pointer: where its full standard is written, REVIEW-HOME, is still open in change 16, so no review standard is written yet. The rubric's DESIGN-3 to DESIGN-5 follow. The outside sources are those change 16 read on 17 November; none was fetched again.

On 16 November 2026 an in-house review applied ARCHITECT-SPLIT a, which Kris took that day at about 15:52 GMT, relayed by the Cairn summit's guardian from the summit's [change 12](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/12-names.change.md#46-names-and-roles-of-sessions): [4.1](standard-design.md#41-what-design-covers) and the skill's opening name the two architects as the makers they now are in `ki-work-package`'s role catalogue, `information-architect` and `technical-architect`, each with what it shapes, in place of saying one sits beside the other. The rubric is regenerated. No outside source refreshed.

On 14 November 2026 the skill was written from the Cairn summit's change 25 (now 14), guilds, under GUILDS-REMIT. The review step's second reader follows the cairn.wayfinder.designs meeting's practice of a reviewer checking each board against its brief before a round is called final.

[Back to contents](#contents)
