---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:05:22Z
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

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| DIAGRAM-REPLACE | Kris's word: "Re mermaid diagrams, if they can be replaced with archify they should be, e.g. activity diagrams. Flag any others that don't and I'll decide about them too". Mermaid diagrams are replaced by Archify diagrams wherever Archify can carry them, and the rest are flagged to the owner. | 2026-10-19 | [4.1](standard-diagrams.md#41-the-tool-archify) | In force; Mermaid's place is pending re-evaluation under DIAGRAM-TOOLS, and the audit warning stands until it settles |
| DIAGRAM-PRIVATE-CITATIONS | Decided by Kris on 26 October 2026: a private repository's `traced` entry and source node metadata may cite `path:revision:lines` with no URL, Archify's URL citation object is used only where the remote is public, and the audit accepts either form, reading the path part for freshness. | 2026-10-26 | [4.7](standard-diagrams.md#47-privacy) | In force |
| DIAGRAM-TOOLS | Kris's words of 29 October 2026: the diagram tools are ranked for each kind of diagram in a preference order, built only from his stated likes, with the SaaS tools as inspiration only and infoschematics as KI's own tool to grow. | 2026-10-29 | [4.2](standard-diagrams.md#42-tool-preference-by-diagram-kind) | In force |
| DIAGRAM-AGREED | The work state machine Kris agreed on 29 October 2026, drawn by sketching in Mermaid and beautifying in Archify. | 2026-10-29 | [4.2.2](standard-diagrams.md#422-sketch-then-beautify) | In force |
| DOCS-LANDING-GITHUB | "_index.md only", Kris on the question card in Loreward's Home Chat at 19:57 GMT, recorded in ki.summit's change 23 · Decision: option b), not the recommended a): a docs folder's page is `_index.md` alone, with no `README.md` pointer beside it, even though the folder then shows no page on GitHub, under `ki-authoring`'s docs folder pages. | 2026-11-22 | [4.5](standard-diagrams.md#45-the-manifest), DIAG-1 | In force |
| AUTHORING-FIXES | Option a: the skill is kept and fixed. The `ki` and `ki-night` SVG forms take their paint from Tessera's `tessera-tokens`, vendored at the backpack's root under `ki-repo-packages`' lock-and-sync contract with its lock and drift check, in place of the retired `knowledgeislands/ki-design` copy. Kris, 22 November 2026, about 20:14 GMT, the Authoring guild's sitting in Kitteth's Home Chat, card: "Keep all, fix", recorded in the Cairn summit's change 10, 4.3. | 2026-11-22 | [the forms](standard-diagrams.md#441-the-forms) | In force; the glyphs still come from the `ki-design` revision they were drawn from |
| AUTHORING-FIXES | Option a, item 3: the bare-invocation mode choice is offered through the host's question tool, so the skill names no tool only one host has. Kris, 22 November 2026, about 20:14 GMT, the Authoring guild's sitting in Kitteth's Home Chat, card: "Keep all, fix", recorded in the Cairn summit's change 10, 4.3. | 2026-11-22 | `SKILL.md`, Operating modes | In force |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026 the quarterly REFRESH reviewed every source; the standard's own text was left alone and the changes it shows went to Gilder as proposals. Archify is at 3.3.0 (22 November 2026) and now Apache-2.0: 3.1.0 added ERD, class, tree, timeline and waterfall types, 3.2.0 one-page explainers, and 3.3.0 ships `bin/export-svg.mjs`, a command-line SVG export through the viewer's own Export menu (`auto`, `light` or `dark`), and a Code Analysis module that reads import graphs. D2 became a non-profit project under Hack Club and moved to `d2lang/d2`, and D2 0.9.0 bundles TALA as open source, settling both unverified facts; the TALA row now points at that announcement, as its old repository is archived. Stately's visualiser is deprecated, so the row points at Sketch's source; Sketch reads XState, JSON, YAML and Mermaid. FossFLOW's repository has gone, with only unofficial forks continuing it, so the row points at the open-source Isoflow it came from. LikeC4 now allows its own element kinds beyond C4. Mermaid 12.3 draws state diagrams with its `neo` look and ELK layout by default, and Sankey is no longer marked beta. The 2.2.2 sources had their first review; the paid and SaaS tools are unchanged in kind.

On 22 November 2026 AUTHORING-FIXES a, item 3, was applied by Loreward: the skill's words name the host's question tool where they named Claude's `AskUserQuestion`. No criterion changed and no outside source was refreshed.

On 22 November 2026 AUTHORING-FIXES a was applied by Loreward: the token module became `scripts/internal/tessera-tokens.ts`, checked against the vendored `packages/tessera-tokens/tokens.json` at the release `tessera-tokens-lock.json` holds, and the standard names Tessera where it named `ki-design`. The glyph copy keeps its `ki-design` revision until Tessera's icon packages are vendored. No criterion changed and no outside source was refreshed.

On 22 November 2026 DOCS-LANDING-GITHUB, recorded under Decisions, was applied by Loreward's run from the Knowledge Islands summit's change 23: the reader-facing index is `docs/diagrams/_index.md`, the template in `assets/` is renamed to match, and DIAG-1 warns on an earlier `README.md` alone or one beside it. No outside source was refreshed.

On 22 November 2026 SKILLS-LEARNING, Kris's steer of that morning to bake the night's lessons into the skills, added three embedding practices the Cairn designer and builder found overnight to [Embedding](standard-diagrams.md#46-embedding): embed an SVG as an image, never inline; one static file per theme on a page with its own theme switch; and the phone-width sizing for a drawn SVG. No rule changed and no outside source was refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Authoring guild: REFRESH names the backpack, and the standard, EDUCATE's starter table and the script comments say backpack where they meant the bundle; the adoption history and identifiers keep their words. No criterion changed and no outside source refreshed.

On 18 November 2026 the Authoring guild's review, from the Cairn summit's change 10, brought the standard and this file into `ki-authoring`'s formats: the standard was renamed `standard-diagrams.md`, from `standards-diagrams.md`, and reshaped to the standard format with its rules unchanged, and this file took the sources format. The rubric's source anchors follow. No rule changed and no outside source was refreshed.

- 2026-11-10 - With `ki agent` removed in `tools-ki` v0.15.0, the build's `mark.toml` names the session and the `--work` id; it no longer reads `KI_AGENT_RUN` or a run packet under the KI state home. No external source refreshed.
- 2026-10-31 - DIAGRAM-TOOLS, Kris's words of 29 October 2026: the standard gains a tool preference order for each kind of diagram, built only from Kris's stated likes (Archify first; Stately/XState, LikeC4 and Isoflow/FossFLOW liked; then Mermaid, D2/TALA, D3, Typst/fletcher and TikZ), the sketch-in-Mermaid, beautify-in-Archify step, the SaaS tools as inspiration only and infoschematics as KI's own tool to grow. Mermaid's place is pending re-evaluation on its current rendering (state, Sankey), so the DIAGRAM-REPLACE warning stands. The new rows were listed without fetching their pages; the next REFRESH reviews them.
- 2026-10-26 - DIAGRAM-PRIVATE-CITATIONS, decided by Kris on 26 October 2026: a private repository's `traced` entry and source node metadata may cite `path:revision:lines` with no URL, Archify's URL citation object is used only where the remote is public, and the audit accepts either form, reading the path part for freshness. No audit failed before the change; Personal's two records follow by message.
- 2026-10-14 - `KI-HARNESS-GOV-181`: the exporter moved from Playwright to a port of the headless Chrome route Archify 3.0.1's `bin/visual-check.mjs` drives its browser gate through (`findChrome`, launch flags, pipe protocol). Three committed SVGs (this repository's `skill-graph` and `skill-map`, Knowledge Islands Principal's `change-management-skills`) re-exported byte-identical through the new route.
- 2026-10-08 - Created from the `apps-observatory` pilot. Confirmed against Archify 3.0.1 that the command line still has no SVG export and that the ported exporter reproduces a committed Observatory SVG byte for byte.

**Watching:**

- Mermaid's re-evaluation on its current rendering (state, Sankey), which settles DIAGRAM-REPLACE's warning and Mermaid's place in the order; Mermaid 12.3's defaults are the evidence to judge.
- Archify's own `export-svg.mjs`, which REFRESH says should shrink or retire `scripts/export-svg.ts`; it covers `dual`, `light` and dark exports but not the `ki` and `ki-night` forms. Proposed to Gilder.
- Archify's ten diagram types against the manifest's five, and its Code Analysis module as a possible import-graph importer. Proposed to Gilder.
- FossFLOW's home: no official successor to `stan-smith/FossFLOW` yet.

[Back to contents](#contents)
