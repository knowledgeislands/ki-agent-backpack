---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:12:00Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Diagrams standard](standard-diagrams.md) and its [rubric](rubric.md). The standard is Knowledge Islands house policy, derived from the `apps-observatory` pilot (`KI-OBSERVA-APP-034` there) and the tooling research of 2026-10-03, adopted by `KI-HARNESS-GOV-131`. The research reported some facts it could not verify; they are marked.

[Back to contents](#contents)

## 2. Outside sources

The standard follows one tool, Archify; the other tools inform its preference order and its exclusions.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ARCHIFY — [Archify](https://tt-a1i.github.io/archify/) | The chosen tool: types, JSON source, viewer, SVG export, Chrome route | 2026-10-14 |

[Back to contents](#contents)

### 2.2 Advisory

The alternatives reviewed in the tooling research, and the tools added for the [tool preference order](standard-diagrams.md#42-tool-preference-by-diagram-kind).

#### 2.2.1 Reviewed alternatives

| Source | Informs | Last reviewed |
| --- | --- | --- |
| D2 — [D2 blog](https://d2lang.com/blog/) and [releases](https://github.com/terrastruct/d2/releases) | Code-generated maps; maintainer change (unverified) | 2026-10-03 |
| TALA — [TALA](https://github.com/terrastruct/TALA) | D2's layout engine, reported free from D2 0.9.0 (unverified) | 2026-10-03 |
| LIKEC4 — [LikeC4](https://likec4.dev/) | C4-only modelling | 2026-10-03 |
| STRUCTURIZR — [Structurizr](https://github.com/structurizr/structurizr) | DSL with a dated look | 2026-10-03 |
| STATELY — [Stately Sketch](https://stately.ai/blog/2026-03-26-introducing-stately-sketch) and [visualiser](https://stately.ai/docs/visualizer) | State charts, only with XState | 2026-10-03 |
| SLICKMAP — [SlickMap](https://github.com/astuteo/slickmap) | Site trees without a dark theme | 2026-10-03 |
| PAID-SAAS — [Ilograph](https://www.ilograph.com/desktop/) and [Eraser pricing](https://www.eraser.io/pricing) | Paid or SaaS, failing the private-repository rule | 2026-10-03 |
| TLDRAW — [tldraw licence key](https://tldraw.dev/sdk-features/license-key) | Hand-drawn, commercial licence | 2026-10-03 |
| DEPCRUISE — [dependency-cruiser CLI](https://github.com/sverweij/dependency-cruiser/blob/main/doc/cli.md) | `-T d2` reporter for generated dependency maps | 2026-10-03 |
| REACT-SCANNER — [react-scanner](https://github.com/moroshko/react-scanner) | Usage statistics, a category mismatch | 2026-10-03 |
| STORYBOOK — [Storybook Composition](https://storybook.js.org/docs/sharing/storybook-composition/) | Storybook merging, a category mismatch | 2026-10-03 |

[Back to contents](#contents)

#### 2.2.2 Added for the tool preference order

These sources were added on 2026-10-31 for the [tool preference order](standard-diagrams.md#42-tool-preference-by-diagram-kind) without fetching their pages. The next REFRESH reviews each and gives it a last-reviewed date.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| MERMAID — [Mermaid state diagrams](https://mermaid.js.org/syntax/stateDiagram.html) and [Sankey](https://mermaid.js.org/syntax/sankey.html) | Mermaid's re-evaluation and the sketch step | Not yet reviewed |
| ISOFLOW — [Isoflow](https://isoflow.io/) and [FossFLOW](https://github.com/stan-smith/FossFLOW) | Isometric infrastructure pictures, liked | Not yet reviewed |
| D3 — [D3](https://d3js.org/) | Bespoke and quantitative diagrams drawn directly | Not yet reviewed |
| TYPESET — [fletcher](https://typst.app/universe/package/fletcher) and [TikZ](https://tikz.dev/) | Figures inside typeset documents | Not yet reviewed |
| INSPIRATION — [IcePanel](https://icepanel.io/) and [Napkin](https://www.napkin.ai/) | Paid or SaaS, inspiration only | Not yet reviewed |
| INFOSCHEMATICS — [infoschematics](https://infoschematics.info/) | Knowledge Islands' own diagramming tool, to grow | Not yet reviewed |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| DIAGRAM-REPLACE | Kris's word: "Re mermaid diagrams, if they can be replaced with archify they should be, e.g. activity diagrams. Flag any others that don't and I'll decide about them too". Mermaid diagrams are replaced by Archify diagrams wherever Archify can carry them, and the rest are flagged to the owner. | 2026-10-19 | [4.1](standard-diagrams.md#41-the-tool-archify) | In force; Mermaid's place is pending re-evaluation under DIAGRAM-TOOLS, and the audit warning stands until it settles |
| DIAGRAM-PRIVATE-CITATIONS | Decided by Kris on 26 October 2026: a private repository's `traced` entry and source node metadata may cite `path:revision:lines` with no URL, Archify's URL citation object is used only where the remote is public, and the audit accepts either form, reading the path part for freshness. | 2026-10-26 | [4.7](standard-diagrams.md#47-privacy) | In force |
| DIAGRAM-TOOLS | Kris's words of 29 October 2026: the diagram tools are ranked for each kind of diagram in a preference order, built only from his stated likes, with the SaaS tools as inspiration only and infoschematics as KI's own tool to grow. | 2026-10-29 | [4.2](standard-diagrams.md#42-tool-preference-by-diagram-kind) | In force |
| DIAGRAM-AGREED | The work state machine Kris agreed on 29 October 2026, drawn by sketching in Mermaid and beautifying in Archify. | 2026-10-29 | [4.2.2](standard-diagrams.md#422-sketch-then-beautify) | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Authoring guild's review, from the Cairn summit's change 10, brought the standard and this file into `ki-authoring`'s formats: the standard was renamed `standard-diagrams.md`, from `standards-diagrams.md`, and reshaped to the standard format with its rules unchanged, and this file took the sources format. The rubric's source anchors follow. No rule changed and no outside source was refreshed.

- 2026-11-10 - With `ki agent` removed in `tools-ki` v0.15.0, the build's `mark.toml` names the session and the `--work` id; it no longer reads `KI_AGENT_RUN` or a run packet under the KI state home. No external source refreshed.
- 2026-10-31 - DIAGRAM-TOOLS, Kris's words of 29 October 2026: the standard gains a tool preference order for each kind of diagram, built only from Kris's stated likes (Archify first; Stately/XState, LikeC4 and Isoflow/FossFLOW liked; then Mermaid, D2/TALA, D3, Typst/fletcher and TikZ), the sketch-in-Mermaid, beautify-in-Archify step, the SaaS tools as inspiration only and infoschematics as KI's own tool to grow. Mermaid's place is pending re-evaluation on its current rendering (state, Sankey), so the DIAGRAM-REPLACE warning stands. The new rows were listed without fetching their pages; the next REFRESH reviews them.
- 2026-10-26 - DIAGRAM-PRIVATE-CITATIONS, decided by Kris on 26 October 2026: a private repository's `traced` entry and source node metadata may cite `path:revision:lines` with no URL, Archify's URL citation object is used only where the remote is public, and the audit accepts either form, reading the path part for freshness. No audit failed before the change; Personal's two records follow by message.
- 2026-10-14 - `KI-HARNESS-GOV-181`: the exporter moved from Playwright to a port of the headless Chrome route Archify 3.0.1's `bin/visual-check.mjs` drives its browser gate through (`findChrome`, launch flags, pipe protocol). Three committed SVGs (this repository's `skill-graph` and `skill-map`, Knowledge Islands Principal's `change-management-skills`) re-exported byte-identical through the new route.
- 2026-10-08 - Created from the `apps-observatory` pilot. Confirmed against Archify 3.0.1 that the command line still has no SVG export and that the ported exporter reproduces a committed Observatory SVG byte for byte.

**Watching:**

- Mermaid's re-evaluation on its current rendering (state, Sankey), which settles DIAGRAM-REPLACE's warning and Mermaid's place in the order.
- The 2026-10-31 sources in [2.2.2](#222-added-for-the-tool-preference-order), each unreviewed until the next REFRESH.
- The two unverified D2 facts: the maintainer change and TALA free from D2 0.9.0.

[Back to contents](#contents)
