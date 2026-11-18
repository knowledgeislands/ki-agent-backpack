---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:16:28Z
ki-status: in force
---

# Design levels standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The three levels](#41-the-three-levels)
  - [4.2 Names](#42-names)
  - [4.3 How a round runs](#43-how-a-round-runs)
  - [4.4 Seeing what was drawn](#44-seeing-what-was-drawn)
  - [4.5 The design book](#45-the-design-book)

## 1. Introduction

An interface is designed three times, each time at a finer grain, and the coarser level is agreed before the finer one is drawn. Changing a name at the first level costs a line; at the last it costs every screen. Kris, 13 November 2026: "the things you defined really good, is information architecture, wireframes and mock-ups. That's exactly the sort of three levels of things I want." This standard sets the three levels and how a round of design runs through them. A round sits between the brief and the decision in [design work](standard-design-system.md#48-design-work-from-brief-to-rule); [the annotated board](standard-annotated-board.md) shows the interface as built, and [the component library](standard-design-system.md#44-the-component-library) names the parts every level draws. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The three levels an interface is designed at, and how a round of design runs through them.

### 2.1 In scope

- The three levels and their file names.
- Naming parts on a board.
- The steps of a round.
- Seeing what was drawn, and the review PNG.
- The design book: its folder, names and how its document reads it.

[Back to contents](#contents)

### 2.2 Out of scope

- Design work from brief to rule, the component library and shells: [the design system standard](standard-design-system.md).
- The board of the interface as built: [the annotated board](standard-annotated-board.md).
- The design document's format and the review shape: `ki-authoring`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Information architecture** | The first level: what is there, what it is called and who owns it. **Standard:** this one, [4.1](#41-the-three-levels) |
| **Wireframe** | The second level: where each part sits and how a reader gets about. **Standard:** this one, [4.1](#41-the-three-levels) |
| **Mock-up** | The third level: what each screen looks like, in each state. **Standard:** this one, [4.1](#41-the-three-levels) |
| **Round** | One pass of design through the levels, numbered on its working boards. **Standard:** this one, [4.3](#43-how-a-round-runs) |
| **Design book** | A visual design's document and its final boards together. **Standard:** this one, [4.5](#45-the-design-book) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 The three levels

| Level | Answers | Shows | Leaves out | File name |
| --- | --- | --- | --- | --- |
| Information architecture | What is there, what is it called, and who owns it? | The site map, routes, the kind and shape of navigation, [the shells](standard-design-system.md#45-shells-and-their-state), and the inventory of parts with their names and [the component library's levels](standard-design-system.md#44-the-component-library) | Layout, colour and real content | `rN-ia-<subject>` |
| Wireframe | Where does each part sit, and how do you get about? | Grey boxes with real labels and real structure, the same coded regions on every frame, and something to click where movement matters | Final type, colour and icons | `rN-wire-<subject>` |
| Mock-up | What does it look like, in each state? | Each screen in the design language, with the real tokens and icons, in every theme and mode, and every state side by side: resting, hover, focus, reading, empty and failed | Nothing: it is what is built from | `rN-<subject>` |

`N` is the round's number, on working boards only: the boards an agreed design keeps are named by level alone, in [its design book](#45-the-design-book). A subject that already has an agreed architecture, such as a new view inside a settled frame, may start at the wireframe; nothing starts at the mock-up.

[Back to contents](#contents)

### 4.2 Names

- **The code's names are current.** A part's name is its file name in kebab case; in prose it is the same words in sentence case.
- **A new name is a proposal** until the owner agrees it, shown as "today → proposed" with its status: current, proposed or goes.
- **Nothing is named, given a meaning or given an icon without asking.** An unknown goes in square brackets, such as "[sync state]"; an icon that does not exist yet is a plain stand-in, named in the page note.
- **Each part is named at its level,** as [the component library's one table](standard-design-system.md#44-the-component-library) sorts it, and the board that names parts keeps each level's one-sentence test.

[Back to contents](#contents)

### 4.3 How a round runs

1. **Read the brief and the code's names first,** then the design system and this skill: the page notes, the coded regions, and lettered alternatives with the preferred one marked.
2. **Draw the architecture, and stop for agreement** on names and structure before anything finer is drawn.
3. **Draw the wireframes that share a shape together,** side by side with the same region codes, so that what stays and what changes are both plain.
4. **Mock up in every state.** Loading, empty and failed are part of the first mock-up, not a later round.
5. **Review before posting.** A second reader reviews each file against the brief's rules and this skill's rubric, as `ki-authoring`'s [review standard](../../../keystone/ki-authoring/references/standard-review.md) sets, each finding anchored to a board code and region; the blocking findings are settled before the round is called final, and the owner's outcome comes through the design's change.
6. **Say what has not been checked.** A board nobody has seen rendered is posted as such.
7. **Once a level is agreed and built, draw against the build.** Drawings ahead of the build are for open choices only, as [design work](standard-design-system.md#48-design-work-from-brief-to-rule) sets (DRAW-BUILD).

[Back to contents](#contents)

### 4.4 Seeing what was drawn

Whoever draws may be able to check only the markup, not the picture: an agent that writes a board's HTML does not see it rendered. Until the drawing side can see its render, a reviewer looks at it by eye, and the round's report says which boards have been seen and by whom.

**The reviewer takes the PNG** (BOARD-PNG). The reviewer who renders a board for review takes its PNG in the same pass, with the repository's own browser automation, and commits it beside the board; the drawing session never does. A board carrying store data is rendered on the caller's side, as `ki-meeting`'s [Git and private data](../../../work/ki-meeting/references/standard-meeting.md#412-git-and-private-data) sets.

[Back to contents](#contents)

### 4.5 The design book

A visual design's document and its final boards together make its **design book** (DESIGN-RENDER, Kris, 17 November 2026). The document is a design document in `ki-authoring`'s [design format](../../../keystone/ki-authoring/references/standard-formats-design.md), under `docs/design/`; its final boards are the chosen option at each level, kept beside it once the design is agreed, so the design can be walked and reviewed board by board.

```text
docs/design/ui/
  wayfinder.design.md
  wayfinder/
    ia-<subject>.html      ia-<subject>.png
    wire-<subject>.html    wire-<subject>.png
    mock-<subject>.html    mock-<subject>.png
```

- **In a folder named by the design's slug,** beside its document, with its screenshots.
- **Named by level, not round:** `ia-`, `wire-` and `mock-`. The round number stays on working boards in a meeting, and Git keeps which round a final board came from.
- **Each board self-contained,** loading no script, stylesheet or font from outside itself, with a PNG of it beside it under the same name, taken from the rendered page: any Markdown view shows the PNG, and a viewer that can frame a board, as the Cairn Wayfinder will, shows the HTML.
- **Numbered and coded as [the annotated board](standard-annotated-board.md) is:** pages in the interface's own order, `0.x` the shells, `1` home, then each navigation group; artboards lettered; regions boxed with `data-region` and the `S`, `N`, `T` and `P` [codes](standard-annotated-board.md#42-region-codes). So a finding names one region, as "wayfinder 2.1b P3", on a board of the design as on a board of the build.

**How the document reads the book.** Its Design section runs from the coarsest level to the finest and, within each, from the outside in, [like an onion](standard-design-system.md#45-shells-and-their-state):

1. **2.1 Information architecture:** the site map, routes, shells and the inventory of parts with their names and levels, each `ia-` board shown as its PNG linked to its HTML.
2. **2.2 Wireframes:** each template and page frame, shells first.
3. **2.3 Mock-ups,** by [the component library's levels](standard-design-system.md#44-the-component-library) from the outside in: pages, templates, organisms, molecules, atoms, then tokens, each level naming its parts as the components document does and showing each in every state.

The levels named here are the component library's, which follows atomic design as the house's choice: a different taxonomy later changes that one table and the books sorted by it, not this standard.

[Back to contents](#contents)
