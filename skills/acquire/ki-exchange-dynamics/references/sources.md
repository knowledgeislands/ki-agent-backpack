---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:34:14Z
ki-refresh: canonical · on-change
---

# Sources — where the exchange dynamics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the exchange dynamics standard](standard-exchange-dynamics.md), [the rendering standard](standard-exchange-dynamics-rendering.md) and the generated [rubric](rubric.md). [The migration overlay](migration-exchange-dynamics.md) holds what is not yet in place.

Review alongside a change to the method's source note, to the `archify` or `dataviz` renderers' explainer, chart or palette behaviour, or to the `ki-acquire` capture contract the method reads from.

[Back to contents](#contents)

## 2. Outside sources

Kris's note and word that own the method, its design note, and the work and renderers around it.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Kris's note "Knowledge Islands - Exchange Dynamics Analysis (EDA)" of 4 November 2026, captured privately in the Inbox as `captured/knowledge-islands/intake/2026-11-04-exchange-dynamics-analysis/` | The method: the three dimensions, sentiment kept apart from tension, the phase vocabulary, the three-column visual specification and colour system, the schema's parts, the four layers and the ten mandatory principles, the package layout and the future interactive view. Its governing principle, "Analyse once, render many ways", is his. The capture is lineage only: its reference infographic and the conversation it analyses name real private individuals and are not copied, quoted or described here | 2026-11-07 |
| Kris's word of 4 November 2026 about the worked example, "we could actually just pretend anonymized anyway ... call them random names" | Why the published example is wholly invented | 2026-11-07 |
| The design note `eda.design.md` in ki.sop.main's `_emerging` focus, at [ki-principal revision f562bf6e](https://github.com/knowledgeislands/ki-principal/blob/f562bf6e41d08c50f659191ec455ec4a99efed46/%2B/_WORK/ki.sop.main/_emerging/eda.design.md) | The skill's design: the candidate homes, the units of comprehension, the layout, the methodology, schema, visual specification and workflow outlines, and the invented allotment exchange | 2026-11-07 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| The harness work package `ki.reg.guilds` | The decisions that placed the skill | 2026-11-07 |
| The `archify` skill, a vendored third-party skill installed alongside the harness, and the `dataviz` chart-design skill | The renderers the rendering standard names; neither is owned here, and the standard relies only on archify's explainer page and dataviz's form, palette and colour-validator guidance | 2026-11-07 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| SKILL-HOMES a) | "a new harness skill `ki-exchange-dynamics` in the `acquire` group, drawing through `archify` and `dataviz`"; Kris, in `ki.reg.guilds`. | 2026-11-07 | [the exchange dynamics standard](standard-exchange-dynamics.md#1-introduction), [the rendering standard](standard-exchange-dynamics-rendering.md#44-renderers) | In force |
| MIGRATION-OVERLAY | The standards describe only the final state, and temporary adjustments sit in the migration overlay; Kris, in `ki.reg.guilds`. | 2026-11-07 | [the exchange dynamics standard](standard-exchange-dynamics.md), [the rendering standard](standard-exchange-dynamics-rendering.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Acquire guild's review, in the Cairn summit's change 10, brought the skill's files into `ki-authoring`'s formats: the two standards were renamed `standard-exchange-dynamics.md` and `standard-exchange-dynamics-rendering.md` and given the standard format's sections, their rules moved unchanged under numbered subsections, the exchange dynamics standard's Scope becoming its Scope's lead-in and its Boundary its Out of scope, and this file took the sources format, its named decisions gathered into [Decisions](#3-decisions). No rule changed and no outside source was refreshed.

On 7 November 2026, under SKILL-HOMES a) and an away-window grant to build the skills only, the skill was written from the design note and Kris's source note, with the `ki-skills` standard as its shape. The departures from the design note are recorded here: the methodology, safeguards, contract and workflow form one standard and the visual specification a second, under the closed reference vocabulary; the validator is `scripts/validate-analysis.ts` over `scripts/internal/analysis.ts`; the example lives under `assets/examples/`; and no rendering of the example is committed yet. No knowledge base, card or capture was changed.

**Watching**

- GUILD-NAME, still open when the skill was placed.
- The first rendering of the invented example through `archify`, as the migration overlay records.

[Back to contents](#contents)
