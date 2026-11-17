---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — how a design is shaped

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-design --write`.

Line-by-line criteria for auditing ki-design. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [RUBRIC — Generated rubric publication](#rubric--generated-rubric-publication)
- [DESIGN — Design shaping](#design--design-shaping)

## RUBRIC — Generated rubric publication

→ [standard](../../../keystone/ki-skills/references/standard-rubric-authoring.md)

The tracked readable rubric is the exact publication of the structured catalogue.

- **RUBRIC-1 [M] — structured catalogue publication is exact** — A structured catalogue tracks `references/rubric.md` as its exact generated publication. The host supplies only validated publication evidence: a missing or differing file is a FAIL; during CONFORM this item requests the host-owned derived write without choosing its path or bytes. (../../../keystone/ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication)
  - _Remediation:_ automatic

## DESIGN — Design shaping

→ [standard](standard-design.md)

Each design starts from a brief, weighs options, is reviewed, is drawn at its kind's levels and is written down as a design document linking its records in Authoring's forms.

- **DESIGN-1 [J] — each design starts from a brief** — A design starts from a written brief that says what it is for, what it must satisfy and what it leaves out, agreed before any option is drawn, with the names already in use read first. (standard-design.md#42-how-a-design-is-shaped)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Did each design start from a written, agreed brief that read the names already in use?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **DESIGN-2 [J] — options are weighed and the choice is the owner's** — A design offers more than one way to meet its brief, each with what it costs, with the recommended one marked, so the owner makes the choice. (standard-design.md#42-how-a-design-is-shaped)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Were real options weighed with their costs, and was the choice the owner's?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **DESIGN-3 [J] — a second reader reviews the design** — A reviewer who did not draw the design checks it against its brief, the governing standards and earlier decisions before it is called final, and says what has not been checked; each finding is anchored to one exact place, says its kind, whether it blocks, what to change and its confidence, and the outcome is recorded through the change document that moves the design. (standard-design.md#42-how-a-design-is-shaped)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Was the design reviewed by someone who did not draw it, against its brief, standards and precedent, with each finding anchored and shaped alike, what was not checked said, and the outcome taken through its change document?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **DESIGN-4 [J] — each level is agreed before the finer one** — A design is drawn at its kind's levels, coarsest first, and each level is agreed before the next is drawn: for visual design, information architecture, then wireframes, then mock-ups; for architecture, system context, containers, then components; for a component, black box, white box, then runtime; for an API, resources, operations, then its contract. (standard-design.md#43-each-kinds-levels)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Was the design drawn at its kind's levels, each coarser level agreed before the finer one?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **DESIGN-5 [J] — a design is written down as a design document, linking its records** — A design is written down as a design document in `ki-authoring`'s design format, under `docs/design/`, its status moved only through a change document and a living design's builds added only to its Built section; each choice that needs its reason kept is a decision record, a contract a specification and an architecture a diagram, each in its Authoring skill's form and linked from the design rather than restated. (standard-design.md#44-where-a-design-is-written-down)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Is each design a design document under `docs/design/`, moved only through change documents, linking its decision records, specifications and diagrams in their Authoring skills' forms?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
