---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Diagrams standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Reviewed alternatives](#221-reviewed-alternatives)
    - [2.2.2 Added for the tool preference order](#222-added-for-the-tool-preference-order)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Diagrams standard](standard-diagrams.md) and its [rubric](rubric.md). The standard is Knowledge Islands house policy, derived from the `apps-observatory` pilot (`KI-OBSERVA-APP-034` there) and the tooling research of 2026-10-03, adopted by `KI-HARNESS-GOV-131`. The research reported two facts about D2 it could not verify; both were confirmed on 23 November 2026.

[Back to contents](#contents)

## 2. Outside sources

The standard follows one tool, Archify; the other tools inform its preference order and its exclusions.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ARCHIFY — [Archify](https://tt-a1i.github.io/archify/) | The chosen tool: types, JSON source, viewer, SVG export, Chrome route | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

The alternatives reviewed in the tooling research, and the tools added for the [tool preference order](standard-diagrams.md#42-tool-preference-by-diagram-kind).

#### 2.2.1 Reviewed alternatives

| Source | Informs | Last reviewed |
| --- | --- | --- |
| D2 — [D2 blog](https://d2lang.com/blog/) and [releases](https://github.com/d2lang/d2/releases) | Code-generated maps; a non-profit project under Hack Club since September 2026 | 2026-11-23 |
| TALA — [TALA is open-source](https://d2lang.com/blog/tala-is-open-source/) and [D2 0.9.0](https://github.com/d2lang/d2/releases/tag/v0.9.0) | D2's layout engine, open source (MPL-2.0) and bundled from D2 0.9.0 | 2026-11-23 |
| LIKEC4 — [LikeC4](https://likec4.dev/) | C4-only modelling | 2026-11-23 |
| STRUCTURIZR — [Structurizr](https://github.com/structurizr/structurizr) | DSL with a dated look | 2026-11-23 |
| STATELY — [Stately Sketch](https://stately.ai/blog/2026-03-26-introducing-stately-sketch) and [Sketch source](https://github.com/statelyai/sketch) | State charts, only with XState | 2026-11-23 |
| SLICKMAP — [SlickMap](https://github.com/astuteo/slickmap) | Site trees without a dark theme | 2026-11-23 |
| PAID-SAAS — [Ilograph](https://www.ilograph.com/desktop/) and [Eraser pricing](https://www.eraser.io/pricing) | Paid or SaaS, failing the private-repository rule | 2026-11-23 |
| TLDRAW — [tldraw licence key](https://tldraw.dev/sdk-features/license-key) | Hand-drawn, commercial licence | 2026-11-23 |
| DEPCRUISE — [dependency-cruiser CLI](https://github.com/sverweij/dependency-cruiser/blob/main/doc/cli.md) | `-T d2` reporter for generated dependency maps | 2026-11-23 |
| REACT-SCANNER — [react-scanner](https://github.com/moroshko/react-scanner) | Usage statistics, a category mismatch | 2026-11-23 |
| STORYBOOK — [Storybook Composition](https://storybook.js.org/docs/sharing/storybook-composition/) | Storybook merging, a category mismatch | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.2 Added for the tool preference order

These sources were added on 2026-10-31 for the [tool preference order](standard-diagrams.md#42-tool-preference-by-diagram-kind) without fetching their pages, and first reviewed on 23 November 2026.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| MERMAID — [Mermaid state diagrams](https://mermaid.js.org/syntax/stateDiagram.html) and [Sankey](https://mermaid.js.org/syntax/sankey.html) | Mermaid's re-evaluation and the sketch step | 2026-11-23 |
| ISOFLOW — [Isoflow](https://isoflow.io/) and [Isoflow community edition](https://github.com/markmanx/isoflow) | Isometric infrastructure pictures, liked | 2026-11-23 |
| D3 — [D3](https://d3js.org/) | Bespoke and quantitative diagrams drawn directly | 2026-11-23 |
| TYPESET — [fletcher](https://typst.app/universe/package/fletcher) and [TikZ](https://tikz.dev/) | Figures inside typeset documents | 2026-11-23 |
| INSPIRATION — [IcePanel](https://icepanel.io/) and [Napkin](https://www.napkin.ai/) | Paid or SaaS, inspiration only | 2026-11-23 |
| INFOSCHEMATICS — [infoschematics](https://infoschematics.info/) | Knowledge Islands' own diagramming tool, to grow | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, reviewed every source, the [2.2.2](#222-added-for-the-tool-preference-order) rows for the first time, and left the standard's text alone. Archify is 3.3.0 under Apache-2.0, with ten diagram types, one-page explainers, command-line SVG export and a Code Analysis module; D2 is now a non-profit project at `d2lang/d2`, and D2 0.9.0 bundles TALA as open source. Stately's visualiser is deprecated in favour of Sketch, FossFLOW's repository is gone in favour of the Isoflow it came from, LikeC4 now allows element kinds beyond C4, and Mermaid 12.3 draws state diagrams with its `neo` look and ELK layout by default; the paid and SaaS tools are unchanged in kind.

**Watching:**

- Mermaid's re-evaluation on its current rendering (state, Sankey), which settles the standard's Mermaid warning and Mermaid's place in the order; Mermaid 12.3's defaults are the evidence to judge.
- Archify's own `export-svg.mjs`, which could shrink or retire `scripts/export-svg.ts`; it covers `auto`, `light` and `dark` exports but not the `ki` and `ki-night` forms.
- Archify's ten diagram types against the manifest's five, and its Code Analysis module as a possible import-graph importer.
- FossFLOW's home: no official successor to `stan-smith/FossFLOW` yet.

[Back to contents](#contents)
