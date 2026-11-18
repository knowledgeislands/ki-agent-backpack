---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:34:14Z
ki-status: in force
---

# Exchange dynamics rendering standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Reference layout](#41-reference-layout)
  - [4.2 Colour](#42-colour)
  - [4.3 Variants](#43-variants)
  - [4.4 Renderers](#44-renderers)
  - [4.5 Design decisions](#45-design-decisions)
  - [4.6 Interactive view](#46-interactive-view)

## 1. Introduction

How an exchange dynamics analysis is presented. Read [the exchange dynamics standard](standard-exchange-dynamics.md) first: a rendering reads the analysis and nothing else, adds no reading of its own, and changes only with a fresh analysis. The same analysis can be rendered as a one-page infographic, a Markdown report or a PDF, and the reference layout below can be reproduced by any rendering model.

The sources and decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How an analysis is presented; the analysis itself and the drawing belong elsewhere.

### 2.1 In scope

- The reference layout and its colour vocabulary.
- The variants a rendering may take.
- The renderers a rendering draws through.
- The design-decisions record beside each rendering.
- The later interactive view.

[Back to contents](#contents)

### 2.2 Out of scope

- The method, the four layers, the safeguards and the analysis contract: [the exchange dynamics standard](standard-exchange-dynamics.md).
- Drawing itself: the renderers named in [4.4](#44-renderers), which add no analysis of their own.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Rendering** | A presentation of one analysis that reads it and nothing else. **Standard:** this one, [1](#1-introduction) |
| **Reference layout** | The wide landscape page in three columns that any rendering model can reproduce. **Standard:** this one, [4.1](#41-reference-layout) |
| **Variant** | A shape a rendering may take: landscape infographic, stacked, Markdown report or PDF. **Standard:** this one, [4.3](#43-variants) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

[Back to contents](#contents)

### 4.1 Reference layout

A wide landscape page in three columns.

| Column | Holds |
| --- | --- |
| Left, full height: messages and analysis | The chronology: for each event its numbered marker, speaker, timestamp, key quotation and a one-line analysis of what it contributes. Each marker carries the colour of the matching point on the graph |
| Centre: dynamics | The tension trajectory, with event numbers along the horizontal axis and tension 0 to 10 up the vertical, numbered points joined in order and coloured as their markers; sentiment as a separate secondary line or marker shape, never merged into tension. Below it the phases, each with its event range and a short description, then the key takeaways |
| Right: participants | A card for each participant: the avatar only where one was supplied and is appropriate to show, otherwise initials; the name or identifier; a short communication-style label; an evidence-based description of their role; and an optional relative contribution indicator. The overall read closes the column |

Never invent a photographic likeness or replace a missing avatar with a fictional portrait. Numeric scores are shown only where they help the reader understand, as the analysis's `rendering.show_scores` asks.

[Back to contents](#contents)

### 4.2 Colour

One colour vocabulary runs through the chronology, the graph and the phases, and it encodes tension only:

| Colour | Tension | Meaning |
| --- | --- | --- |
| Green | 0 to 2 | Low or constructive |
| Yellow | 3 to 4 | Moderate |
| Amber | 5 to 7 | Elevated |
| Red | 8 to 10 | High or confrontational |

Colour never says who was right. Every colour is paired with a text label, so nothing is carried by colour alone, and the palette holds its contrast in both light and dark themes.

[Back to contents](#contents)

### 4.3 Variants

| Variant | Shape |
| --- | --- |
| Landscape infographic | The reference layout |
| Stacked | For narrow screens: the overall read first, then the graph, the chronology and the participants |
| Markdown report | The same sections in the same order, with an events table in place of the graph |
| PDF | The infographic or the report, printed |

[Back to contents](#contents)

### 4.4 Renderers

The method draws through renderers it does not own:

- `archify` makes the one-page infographic as an explainer: the conclusion first, structured panels and a native chart, exported as HTML, SVG or image.
- `dataviz` governs the trajectory chart's form, marks and palette, and its colour validator checks the tension scale's contrast in light and dark.
- A Markdown report needs no renderer: it is written straight from the analysis's parts.

Where neither renderer is installed, the Markdown report is the rendering, and the gap is reported rather than filled by hand-drawn graphics.

[Back to contents](#contents)

### 4.5 Design decisions

Beside each rendering, a `design-decisions.md` records which analysis it rendered, the renderer and its version where known, the variant, the instructions given to the renderer, and any departure from the reference layout with its reason, so that another model can reproduce the same picture from the same analysis.

[Back to contents](#contents)

### 4.6 Interactive view

A later capability, not yet built: an explorable view where selecting an event reveals its analysis and source evidence, with participant highlighting, filters by participant, phase or sentiment, a comparison of alternative readings, and export of the static infographic or report. It will read the same analysis contract.

[Back to contents](#contents)
