---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:52:17Z
ki-refresh: canonical · on-change
---

# Sources — where the exchange dynamics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the exchange dynamics standard](standard-exchange-dynamics.md), [the rendering standard](standard-exchange-dynamics-rendering.md) and the generated [rubric](rubric.md). [The migration overlay](migration-exchange-dynamics.md) holds what is not yet in place.

Review alongside a change to the method's source note, to the `archify` or `dataviz` renderers' explainer, chart or palette behaviour, or to the `ki-acquire` capture contract the method reads from.

[Back to contents](#contents)

## 2. Outside sources

The note that owns the method, its design note, and the work and renderers around it.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Kris's note "Knowledge Islands - Exchange Dynamics Analysis (EDA)" of 4 November 2026, captured privately in Harbour (krisb/ki-cairn-harbour, the Inbox's successor) as `knowledge/intake/captured/knowledge-islands/intake/2026-11-04-exchange-dynamics-analysis/` | The method: the three dimensions, sentiment kept apart from tension, the phase vocabulary, the three-column visual specification and colour system, the schema's parts, the four layers and the ten mandatory principles, the package layout and the future interactive view. Its governing principle, "Analyse once, render many ways", is his. The capture is lineage only: its reference infographic and the conversation it analyses name real private individuals and are not copied, quoted or described here | 2026-11-23 |
| The design note `eda.design.md` in ki.sop.main's `_emerging` focus, at [ki-principal revision f562bf6e](https://github.com/knowledgeislands/ki-principal/blob/f562bf6e41d08c50f659191ec455ec4a99efed46/%2B/_WORK/ki.sop.main/_emerging/eda.design.md) | The skill's design: the candidate homes, the units of comprehension, the layout, the methodology, schema, visual specification and workflow outlines, and the invented allotment exchange | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| The harness work package `ki.reg.guilds`, now the Cairn store's `work-legacy/batch-01-initial/ki/ki.reg.guilds/`, its live points taken up by `ki.guilds` | The decisions that placed the skill | 2026-11-23 |
| The `archify` skill, a vendored third-party skill installed alongside the harness, and the `dataviz` chart-design skill | The renderers the rendering standard names; neither is owned here, and the standard relies only on archify's explainer page and dataviz's form, palette and colour-validator guidance | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, found the method note unchanged since the skill was written, its capture moved only by path into Harbour's `knowledge/intake/captured/`, the pinned design note still served, and the legacy guild package repointed to the Cairn store's `work-legacy/`. `archify` still offers the explainer page with native charts and HTML, SVG and image export, and `dataviz` still carries its form heuristic, mark specs, reference palette and a runnable light and dark validator.

**Watching**

- `dataviz` wants a single-hue sequential scale and keeps green to red for status, while the method note sets a green, yellow, amber and red tension scale; the note governs, and the validator's verdict on that scale is untested.
- The installed `archify`, v3.2.0, is behind upstream v3.3.0 of 22 November 2026; a rendering records which it used in its `design-decisions.md`.
- The first rendering of the invented example through `archify`, as the migration overlay records.
- The migration overlay's line keeping the skill in the `acquire` group while the group's name was undecided is overtaken by the guild map and awaits deletion.
- Whether the skill keeps "legal" as a trigger for its stronger tier is still open in ki.summit's change 23 (EXCHANGE-LEGAL).

[Back to contents](#contents)
