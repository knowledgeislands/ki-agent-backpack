---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:16:28Z
ki-status: in force
---

# Annotated board standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Shape](#41-shape)
  - [4.2 Region codes](#42-region-codes)
  - [4.3 Measuring](#43-measuring)
  - [4.4 Building and refreshing](#44-building-and-refreshing)
  - [4.5 Feedback and redesigns](#45-feedback-and-redesigns)

## 1. Introduction

An annotated board is a standing [projection](standard-design-system.md#411-projections) of a built interface, kept so the owner and maintainers can talk about it precisely. It is one design canvas holding a screenshot of each view and shell state as built, with a labelled box over every region worth discussing, so that a remark such as "2.1b P3: the due dates wrap" names exactly one thing. It is the board the [Review](standard-design-system.md#48-design-work-from-brief-to-rule) stage of design work reads from, and it stays after the work it served is retired. An interface with readers keeps one. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The annotated board an interface with readers keeps, and how it is built, refreshed and used.

### 2.1 In scope

- The board's pages, numbering, shells, components, artboards, notes and overlay.
- Region codes.
- Measuring regions.
- Building and refreshing the board.
- Feedback quoted from the board, and redesigns drawn on it.

[Back to contents](#contents)

### 2.2 Out of scope

- Design work from brief to rule, and projections in general: [the design system standard](standard-design-system.md).
- The levels redesigns are drawn at: [the design levels standard](standard-design-levels.md).
- The site's own browser automation, which the backpack does not install.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Annotated board** | A standing projection of a built interface: one canvas of screenshots with a labelled box over every region worth discussing. **Standard:** this one, [4.1](#41-shape) |
| **Artboard** | One screenshot with its overlay on a page of the board, lettered where a page has several. **Standard:** this one, [4.1](#41-shape) |
| **Region code** | A zone prefix and number, such as `P3` or `S0`, naming one boxed region of an artboard. **Standard:** this one, [4.2](#42-region-codes) |
| **Board plan** | The JSON file naming a board's shells, parts, page blocks and artboards. **Standard:** this one, [4.4](#44-building-and-refreshing) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Shape

- **Pages.** One canvas, with one page per part of the interface: the shared chrome first, each shell on its own page, then one page per view.
- **Numbering.** Pages are numbered in the interface's own logical order, which gives a hierarchy:
  - `0.x` is the shell, the chrome on every page, such as `0.1` Navigation and `0.2` a tray; a later shell takes the next number;
  - `1` is home;
  - then one number for each navigation group, with its views under it, such as `2.1` and `2.2`.
- **Shells.** A shell's page shows the whole shell in each state worth discussing, such as expanded, contracted and at phone width for a navigation rail, or open and contracted for a tray. Where the interface nests [shells like an onion](standard-design-system.md#45-shells-and-their-state), one artboard shows them all at once, each boxed with its `S` code, its atomic level and the state it owns.
- **Components.** Under a **Components** title on each shell's page, one artboard per part of the shell, numbered beneath it (`0.1.1` Brand, `0.2.2` a panel), shows that part in every state side by side, such as expanded and contracted, open and contracted, or graph and list. These are crisp element screenshots, so each part's behaviour can be seen apart from the rest, and scrolling content appears at its full height.
- **Artboards.** Where a page has several artboards, each takes a letter (`2.1a`, `2.1b`). With the region codes this makes every reference unique.
- **Notes.** Each page opens with a short note saying what the page is for, and the date and source revision it was last refreshed from.
- **Overlay.** Each artboard is the screenshot with an overlay layer above it, which the canvas can hide so the screenshot can be read on its own.

[Back to contents](#contents)

### 4.2 Region codes

- **Zones.** Each zone has its own prefix, numbered in reading order within each artboard: `N` for navigation, `T` for a tray or side panel and `P` for page content. `S` marks the nested shells, numbered from the outside in, so that `S0` is always the window and each shell keeps its code on every artboard.
- **Marking.** A shell's page marks only its own zone, and a view's page marks only `P`.
- **Whole shells.** The box drawn around a whole shell takes the code `0` (`N0`, `T0`, and `S0`, the window), with its badge at the bottom right.
- **Boxes.** Each box has a dashed border in its zone's colour and a solid badge, such as `P4 · Due next`, at its top right, so the badge does not cover the region's heading. Each box is its own element with `data-region` and a `title`, so a comment pinned to it anchors to that region.

[Back to contents](#contents)

### 4.3 Measuring

- **Same state.** Screenshots and measurements come from the same browser, viewport and state, such as the stored preference that collapses a panel. Desktop artboards are 1440 pixels wide and phone artboards 390; the height grows with the content up to about 2400 pixels.
- **Chrome regions.** For each shell, the collector measures the whole shell and its named landmarks: such as the brand, the toggles, each `nav` group by its `aria-label`, a status line, resize handles, and a tray's panels by their `summary`.
- **Page regions.** In the content root, the collector measures blocks such as `section, article, details, nav, form, table, figure, header, h1` and the interface's own card, panel and grid classes, keeping at most two nesting levels and about 20 regions per artboard.
- **Labels.** A region is labelled by its `aria-label`, then its first `h1` to `h3` or `summary`, then its class name. Generic blocks get plain names from the plan, such as Page title, Eyebrow, Page header or Toolbar.
- **Limits.** Very small boxes are skipped, and boxes are clipped to the screenshot.
- **Check.** Before publishing, one or two artboards are opened in their local preview to check that the boxes line up and that no badge hides anything.

[Back to contents](#contents)

### 4.4 Building and refreshing

[`scripts/annotate-board.ts`](../scripts/annotate-board.ts) carries the parts that do not depend on the site: the in-page collector, the region codes, the overlay and a local preview. A site supplies a board plan and its own browser automation; the backpack installs no browser driver for it.

1. **Plan.** Write the board plan, a JSON file beside the board's working files, outside the repository: its shells and their parts, with the nested shells as one `shell` zone whose whole is the window and whose parts are listed from the outside in, how page blocks are found and named, and one entry per artboard naming its number, title, screenshot and zones.
2. **Screenshots.** With the interface running, the site's browser automation takes each view and shell state's screenshot, and each component's element screenshot in each of its states.
3. **Regions.** In the same page and state as each screenshot, it evaluates the expression `bun scripts/annotate-board.ts collector <plan.json>` prints, and saves the results in one regions file keyed by each artboard's `shot`.
4. **Annotate.** `bun scripts/annotate-board.ts annotate <plan.json> <regions.json> <out-dir> --revision <rev>` codes each artboard's regions and writes `board.json`, with each artboard's size, coded regions and legend stamped with the source revision and date, and a local preview of each artboard.
5. **Publish.** Check the previews, then write the artboards and their page notes to the canvas through the canvas tool's own format, reading the canvas's current state first so that edits made there are kept. Say on the board which revision it was refreshed from.

A plan for a site with a navigation rail and one tray:

```json
{
  "collector": {
    "shells": [
      {
        "zone": "navigation",
        "whole": ".app-sidebar",
        "wholeLabel": "Whole rail",
        "parts": [
          { "selector": ".app-brand", "label": "Brand" },
          { "selector": ".app-sidebar nav", "label": "Group:", "each": true }
        ]
      },
      { "zone": "tray", "whole": ".side-tray", "parts": [{ "selector": ".side-tray details", "each": true }] }
    ],
    "page": {
      "root": "main",
      "blocks": "section, article, details, nav, form, table, figure, header, h1, .card, .panel",
      "names": [{ "selector": ".eyebrow", "label": "Eyebrow" }]
    }
  },
  "boards": [
    { "id": "0.1a", "title": "Rail expanded", "shot": "nav-open", "image": "shots/nav-open.png", "zones": ["navigation"] },
    { "id": "1", "title": "Home", "shot": "home", "image": "shots/home.png", "zones": ["page"] }
  ]
}
```

Refresh the board whenever the interface's code changes, from the running interface: new screenshots, remeasured regions and a new stamp. A watch on the interface's code path may trigger it. A board that disagrees with what the interface draws is stale, whatever its stamp.

[Back to contents](#contents)

### 4.5 Feedback and redesigns

- **Quoting.** The owner quotes codes, such as "1 P6: …" or "2.1b P3: …", in conversation or in canvas comments. Where canvas comments do not reach the agent by themselves, the owner says when they have left some.
- **Briefs.** At Review, the quoted findings become the design work's brief.
- **Redesigns.** Options, drawn at the [three design levels](standard-design-levels.md), go on the board beside the screenshot they answer, one page at a time, and then follow Options and Decision as usual. Once a design is built, the next refresh shows it and its mock-ups are removed from the board.

[Back to contents](#contents)
