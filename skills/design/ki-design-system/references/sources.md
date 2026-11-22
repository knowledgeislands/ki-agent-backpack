---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T00:40:00Z
ki-refresh: external-spec · quarterly
---

# Sources for the design system

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the Design System standard](standard-design-system.md), [the design levels](standard-design-levels.md), [the annotated board](standard-annotated-board.md) and [the rubric](rubric.md). The Design System standard is Knowledge Islands house policy, derived from the 5G-EMERGE Phase 3 calendars page of October 2026 and adopted as a harness standard by `KI-HARNESS-GOV-173`. The floor cites WCAG; the placement model rests on the harness's own documentation standards. Mode REFRESH reads this file and records what it checked in the [Last review](#4-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

The floor follows one specification, and the house's own documentation standards set the homes design knowledge is routed to; the rest informs the method.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| WCAG — [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | The floor: 1.4.1 Use of Color, 1.4.3 and 1.4.11 contrast, 2.1.1 Keyboard, 2.4.7 Focus Visible | 2026-10-11 |
| [The Guides standard](../../../authoring/ki-guides/references/standard-guides.md) | The design guide's home and form | 2026-10-11 |
| [The Specifications standard](../../../authoring/ki-specs/references/standard-specs.md) | When a design rule becomes a Specification | 2026-10-11 |
| [The Decision Records standard](../../../authoring/ki-decision-records/references/standard-decision-records.md) | Prefix choice and the living-record rule for design decisions | 2026-10-11 |
| [The design-loop standard](../../../keystone/ki-work/references/standard-work-design.md) | The boundary with shape-level design, and temporary artefacts | 2026-10-11 |
| [The design format](../../../keystone/ki-authoring/references/standard-formats-design.md) | The design document a design book belongs to, and how its boards and images are shown | 2026-11-17 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| ATOMIC — Brad Frost, [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/) (2013) and [Atomic Design](https://atomicdesign.bradfrost.com/) (2016) | The component library's levels, with tokens added beneath atoms; held as the house's choice, which can change | 2026-11-17 |
| `5g-emerge-phase3` at `ceaf95344da3564693302a359d3a20959f0b0a19` | The pilot: tokens, guide, decision record and checks | 2026-10-11 |
| An annotated design board for a knowledge-base viewer, 2 and 3 November 2026 | The annotated board: numbering, shells and components, region codes, measuring, and the first board tooling | 2026-11-03 |
| Claude Design's note "Designing at three levels", from the Cairn Wayfinder design meeting of 13 November 2026, in Kris's Cairn store | The design levels, how a round runs, the onion of shells, and the `S` codes | 2026-11-14 |
| The Cairn Wayfinder's [component library](https://github.com/knowledgeislands/apps-cairn.local/blob/c096f3d/docs/design/ui/wayfinder-components.md) at `c096f3d` | The components document: atomic levels, and a row per component with its signature, owns, does not own and hand-offs | 2026-11-14 |
| The information architect's boards in Kris's Cairn store, `meetings/cairn.wayfinder.designs/designs/` at `7172e4b` | The design book: 48 boards and six PNGs named by round, none kept for the design chosen | 2026-11-17 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| DESIGN-LEVELS | Kris's decision, in the Cairn summit's change 10: an interface is designed at three levels, information architecture, wireframes and mock-ups, each agreed before the next, held here as the Design guild's visual member. | 2026-11-13 | [the design levels](standard-design-levels.md#41-the-three-levels) | In force |
| ATOMIC-DESIGN | Kris's decision, in the Cairn summit's change 14: every component library sorts its parts by atomic design into six levels, tokens to pages, each with a one-sentence test. | 2026-11-14 | [the component library](standard-design-system.md#44-the-component-library) | In force |
| COMPONENT-LIBRARY | Kris's decision, in the Cairn summit's change 14: the words component library and web component library, in place of UI kit, with one components document per library. | 2026-11-14 | [the component library](standard-design-system.md#44-the-component-library) | In force |
| DRAW-BUILD | Kris's decision, in the Cairn summit's change 35: once a decision is agreed its drawing is drawn against the build, and drawings ahead of the build are for open choices only. | 2026-11-14 | [design work](standard-design-system.md#48-design-work-from-brief-to-rule), [how a round runs](standard-design-levels.md#43-how-a-round-runs) | In force |
| DESIGN-RENDER | A visual design keeps its final boards in a folder beside its design document, named by level, `ia-`, `wire-` and `mock-`, each self-contained with a PNG beside it and coded as the annotated board is, read in its Design section by level and from the outside in; Retire moves them there rather than dropping them. Kris's word, 17 November, about 00:56 GMT, taking the high-confidence points: "you've got high confidence in some of these, so I think you need to take them and get on with it", relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [the design book](standard-design-levels.md#45-the-design-book), [design work](standard-design-system.md#48-design-work-from-brief-to-rule) | In force |
| REVIEW-HOME | One general review standard in `ki-authoring`, which every reviewable document cites; a round's review before posting follows it. Option b, Kris's word, 17 November, about 01:37 GMT, relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [how a round runs](standard-design-levels.md#43-how-a-round-runs) | In force |
| TOKEN-SOURCE | Option a: the token source stays CSS custom properties, and DTCG is an allowed upstream form where a generator writes the CSS, as Tessera's does; no repository moves to it until a tool needs it. Raised from the DTCG Watching line; taken by the Cairn summit's guardian, 17 November, about 03:38 GMT, under Kris's direction to take high-confidence calls while he is away ("take them and get on with it"), from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/27239c0/work/cairn/cairn.summit/16-design-guild.change.md#71-questions). | 2026-11-17 | [the token source](standard-design-system.md#42-the-token-source) | In force |
| BOARD-PNG | Option a: the reviewer who renders a board for review takes its PNG in the same pass and commits it beside the board, never the drawing session; a board carrying store data is rendered on the caller's side. Taken by the Cairn summit's guardian, 17 November, about 03:38 GMT, under Kris's direction to take high-confidence calls while he is away ("take them and get on with it"), from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/27239c0/work/cairn/cairn.summit/16-design-guild.change.md#71-questions). | 2026-11-17 | [seeing what was drawn](standard-design-levels.md#44-seeing-what-was-drawn) | In force |
| DESIGN-HOME | "`docs/design/design-system` makes a lot of sense to me" (at the desk, 15:50 GMT) · Decision: option a: one design system per app or package repository, in one folder, `docs/design/design-system/`, views' copies under it in `projections/<name>/`; a principal or knowledge-base repository is not its home. Recorded in the Cairn summit's [change 60, 4.8](https://github.com/krisb/ki-cairn-store/blob/8d9c1a56/work/cairn/cairn.summit/60-design.change.md#48-decided). | 2026-11-20 | [the design system folder](standard-design-system.md#411-the-design-system-folder) | In force |
| DESIGN-SYSTEM-HOMES | "anything under docs was probably gonna have some kind of specific Um, rendering our understanding in Wayfinder" (by voice, 16:43 GMT) · Decision: option a: the design book moves into the folder, with the token source or export, the components document and the views' copies; the design guide stays under `docs/guides/`, and the two name each other. Recorded in the Cairn summit's [change 60, 4.8](https://github.com/krisb/ki-cairn-store/blob/8d9c1a56/work/cairn/cairn.summit/60-design.change.md#48-decided). | 2026-11-20 | [the design system folder](standard-design-system.md#411-the-design-system-folder), [the design book](standard-design-levels.md#45-the-design-book) | In force |
| VIEW-ACCOUNT | "I think so. I think this goes along with a design system one, right?" (by voice, 16:04 GMT) · Decision: option a: each view names its publishing account and source revision in its index; only a seat in that account republishes it and every other seat changes the files; a view no working seat can reach is republished fresh in a reachable account and the old one retired once Kris has checked it; edits in a canvas go back to the files before any republish. Recorded in the Cairn summit's [change 60, 4.8](https://github.com/krisb/ki-cairn-store/blob/8d9c1a56/work/cairn/cairn.summit/60-design.change.md#48-decided). | 2026-11-20 | [projections](standard-design-system.md#411-projections) | In force |
| SEAT-ACCESS | "Decided part now (recommended, high confidence)" (Orca item 79, about 00:35 GMT, after a blind review) · Decision: option b: only the decided part lands: every seat works from the files, never from another account's artifact, and each view names the account that republishes it. The routes into the files, a rig's clone, Claude Desktop's bridge and the GitHub connector, return to Kris once each is trialled from every agent host. Recorded in the Cairn summit's [change 60, 4.8](https://github.com/krisb/ki-cairn-store/blob/8d9c1a56/work/cairn/cairn.summit/60-design.change.md#48-decided). | 2026-11-22 | [projections](standard-design-system.md#411-projections) | In force; routes pending trials |
| DESIGN-FOLDER | "Layout, no key (recommended, high confidence)" (Orca item 79, about 00:35 GMT, after a blind review) · Decision: option b: the `docs/design/design-system/` folder lands with each view's copy under `projections/<name>/`, with no new `.ki.toml` key; the audit finds the folder by its path. Recorded in the Cairn summit's [change 60, 4.8](https://github.com/krisb/ki-cairn-store/blob/8d9c1a56/work/cairn/cairn.summit/60-design.change.md#48-decided). | 2026-11-22 | [the design system folder](standard-design-system.md#411-the-design-system-folder), [configuration](standard-design-system.md#412-configuration), DSYS-11 | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 an in-house review landed steps 4 and 6 of the Cairn summit's [change 60](https://github.com/krisb/ki-cairn-store/blob/8d9c1a56/work/cairn/cairn.summit/60-design.change.md#48-decided), by the summit guardian's run: DESIGN-HOME a, DESIGN-SYSTEM-HOMES a and DESIGN-FOLDER b give [the design system folder](standard-design-system.md#411-the-design-system-folder), `docs/design/design-system/`, which takes the components document and [the design book](standard-design-levels.md#45-the-design-book) from `docs/design/ui/`, with each view's copy under `projections/<name>/`; and SEAT-ACCESS b with VIEW-ACCOUNT a give [projections](standard-design-system.md#411-projections) their index and who republishes a view. The routes into the files wait on trials, and the change's FILES-FIRST, VIEWS-ONLY and DISK-EXIT wait on Kris, so none of them is written here. DSYS-11 warns where the folder is missing or a view's index names no account; the rubric publication was regenerated. No outside source refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Design guild: REFRESH names the backpack, and the annotated board standard says the backpack installs no browser driver; the pilot's history keeps its words. No criterion changed and no outside source refreshed.

On 18 November 2026 the Design guild's review, from the Cairn summit's change 10, brought the standards into the standard format: [the design system standard](standard-design-system.md), [the design levels standard](standard-design-levels.md) and [the annotated board standard](standard-annotated-board.md), formerly `standards-design-system.md`, `standards-design-levels.md` and `standards-annotated-board.md`, were renamed and reshaped with their rules unchanged and numbered, and the Decisions' Backs links and the rubric's source names follow. No rule changed and no outside source was refreshed.

Later on 17 November 2026 an in-house review applied REVIEW-HOME b, which Kris took that day at about 01:37 GMT, relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided): [how a round runs](standard-design-levels.md#43-how-a-round-runs), step 5, reviews each board as `ki-authoring`'s [review standard](../../../keystone/ki-authoring/references/standard-review.md) sets, its findings anchored to a board code and region, the blocking ones settled before the round is final. What the review does is unchanged. No outside source refreshed.

On 17 November 2026 an in-house review built the Cairn summit's [change 16, the Design guild](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md), under DESIGN-RENDER a, which Kris took that day at about 00:56 GMT. [The design levels](standard-design-levels.md#45-the-design-book) gain the design book: an agreed design's final boards kept beside its design document, named by level and coded as the annotated board is, and read in its Design section by level and from the outside in. The levels name the component library's one table rather than atomic design's labels, so a different taxonomy later changes only that table. [Design work's Retire](standard-design-system.md#48-design-work-from-brief-to-rule) keeps a chosen design's final boards in its book, and DSYS-8 and DSYS-10 ask for it. This file came into the sources format with the change. Change 16 found atomic design the best-known method but defined by no standards body, the largest public design systems sorting their parts otherwise; it was not fetched again here.

**Earlier reviews:**

- 2026-11-14 - DRAW-BUILD a, which Kris took in the Cairn summit's change 35: once a decision is agreed its drawing is drawn against the build, and drawings ahead of the build are for open choices only, written into design work and how a round runs, with a pointer from `ki-meeting`'s workshop standard.
- 2026-11-14 - Under GUILDS-REMIT in the Cairn summit's change 25 (now 14): ATOMIC-DESIGN and COMPONENT-LIBRARY became the component library section and DSYS-9; DESIGN-LEVELS folded in the three-levels note as the design levels standard and DSYS-10, put the onion of shells and each shell's state in the design-system standard, and added the `S` prefix to the annotated board and its script. The level names follow Brad Frost's atomic design, with tokens added beneath atoms; it was not fetched.
- 2026-11-03 - Added the annotated board from its first use: Review as stage 0 of design work, the board as a projection of the running interface, DSYS-8 asking whether it was refreshed, and `scripts/annotate-board.ts`, generalised from the first board's tooling, with its pages, selectors and canvas format left to each site.
- 2026-10-11 - Created from the 5G-EMERGE Phase 3 pilot. Confirmed the placement model against the current Guides, Specifications, Decision Records and design-loop standards, and the floor against WCAG 2.2.

**Watching:** the W3C Design Tokens Community Group format, stable since its 2025.10 version: settled on 17 November as an allowed upstream form under TOKEN-SOURCE; watched for a tool that would need a token source to move to it.

[Back to contents](#contents)
