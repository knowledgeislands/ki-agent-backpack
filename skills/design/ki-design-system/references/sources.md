---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources for the design system

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Design System standard](standard-design-system.md), [the design levels](standard-design-levels.md), [the annotated board](standard-annotated-board.md) and [the rubric](rubric.md). The Design System standard is Knowledge Islands house policy, derived from the 5G-EMERGE Phase 3 calendars page of October 2026 and adopted as a harness standard by `KI-HARNESS-GOV-173`. The floor cites WCAG; the placement model rests on the harness's own documentation standards. Mode REFRESH reads this file and records what it checked in the [Last review](#3-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

The floor follows one specification, and the house's own documentation standards set the homes design knowledge is routed to; the rest informs the method.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| WCAG — [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | The floor: 1.4.1 Use of Color, 1.4.3 and 1.4.11 contrast, 2.1.1 Keyboard, 2.4.7 Focus Visible | 2026-11-23 |
| [The Guides standard](../../../authoring/ki-guides/references/standard-guides.md) | The design guide's home and form | 2026-11-23 |
| [The Specifications standard](../../../authoring/ki-specs/references/standard-specs.md) | When a design rule becomes a Specification | 2026-11-23 |
| [The Decision Records standard](../../../authoring/ki-decision-records/references/standard-decision-records.md) | Prefix choice and the living-record rule for design decisions | 2026-11-23 |
| [The design-loop standard](../../../keystone/ki-work/references/standard-work-design.md) | The boundary with shape-level design, and temporary artefacts | 2026-11-23 |
| [The design standard](../../../keystone/ki-design/references/standard-design.md) | The loop of brief, options and review that design work points to | 2026-11-23 |
| [The design format](../../../keystone/ki-authoring/references/standard-formats-design.md) | The design document a design book belongs to, and how its boards and images are shown | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| ATOMIC — Brad Frost, [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/) (2013) and [Atomic Design](https://atomicdesign.bradfrost.com/) (2016) | The component library's levels, with tokens added beneath atoms; held as the house's choice, which can change | 2026-11-23 |
| `5g-emerge-phase3` at `ceaf95344da3564693302a359d3a20959f0b0a19` | The pilot: tokens, guide, decision record and checks | 2026-10-11 |
| [`apps-cairn.local`](https://github.com/knowledgeislands/apps-cairn.local/tree/7f58d7714d13563ec1e85d9217e42ad7cb5a219e) at `7f58d7714` | The exemplar: tokens, guide, design system folder, component library and checks, passing every mechanical criterion | 2026-11-23 |
| An annotated design board for a knowledge-base viewer, 2 and 3 November 2026 | The annotated board: numbering, shells and components, region codes, measuring, and the first board tooling | 2026-11-03 |
| Claude Design's note "Designing at three levels", from the Cairn Wayfinder design meeting of 13 November 2026, in Kris's Cairn store | The design levels, how a round runs, the onion of shells, and the `S` codes | 2026-11-14 |
| The Cairn Wayfinder's [component library](https://github.com/knowledgeislands/apps-cairn.local/blob/c096f3d/docs/design/ui/wayfinder-components.md) at `c096f3d` | The components document: atomic levels, and a row per component with its signature, owns, does not own and hand-offs | 2026-11-14 |
| The information architect's boards in Kris's Cairn store, `meetings/cairn.wayfinder.designs/designs/` at `7172e4b` | The design book: 48 boards and six PNGs named by round, none kept for the design chosen | 2026-11-17 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read the authoritative source and the atomic design source, and no rule needs a change. WCAG 2.2 is still the Recommendation of 12 December 2024, and 1.4.1, 1.4.3, 1.4.11, 2.1.1 and 2.4.7 read as [the floor](standard-design-system.md#410-the-floor) cites them; Brad Frost's atomic design still names atoms, molecules, organisms, templates and pages. The Guides, Specifications, Decision Records and design format standards still own what the skill routes to them.

**Watching:**

- The W3C Design Tokens Community Group format, stable since its 2025.10 version and unchanged at 23 November 2026: an allowed upstream form for [the token source](standard-design-system.md#42-the-token-source), watched for a tool that would need the token source to move to it.
- WCAG 3, a Working Draft (latest 10 September 2026) whose provisions are all still Developing and which drops the A and AA levels; the floor stays on WCAG 2.2 until WCAG 3 is a Recommendation.

[Back to contents](#contents)
