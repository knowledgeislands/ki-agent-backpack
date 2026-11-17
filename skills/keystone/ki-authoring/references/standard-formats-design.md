---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T01:17:42Z
ki-status: in force
---

# Design format

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Front matter](#41-front-matter)
  - [4.2 Statuses](#42-statuses)
  - [4.3 Sections](#43-sections)
  - [4.4 Living designs](#44-living-designs)
  - [4.5 Images, boards and diagrams](#45-images-boards-and-diagrams)
  - [4.6 Naming and place](#46-naming-and-place)
  - [4.7 Validation](#47-validation)

## 1. Introduction

What a design document is: the design that stands, of any kind, visual or technical, written so that it renders and a reader walking a repository can see what the design is now. It is changed only through change documents, as a standard is: a change proposes, and the design document is what the change agrees. It follows the [format format](standard-formats-format.md). The decisions behind these rules are in [the sources file](sources.md).

The rules were set in the Cairn summit's [change 16, the Design guild](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided).

[Back to contents](#contents)

## 2. Scope

The format of a design document, from its front matter to its last section, with the images, boards and diagrams it shows.

### 2.1 In scope

- A design's front matter and its five statuses.
- Its six sections, the Introduction holding the brief, and what it leaves out.
- A living design's Built section.
- How its images, boards and diagrams are kept and shown, its design book among them.
- How it is named, where it lives, and what a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- What every type of document shares: the [format format](standard-formats-format.md).
- How a design is shaped and reviewed, and each kind's levels: `ki-design`.
- How a visual design's boards are drawn, named and coded, and the design levels a book is read by: `ki-design-system`.
- A proposal to change a design: a change document, in the [change format](standard-formats-change.md).
- The choices, contracts and drawings a design links to: decision records under `ki-decision-records`, specifications under `ki-specs` and diagrams under `ki-diagrams`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Design document** | The design that stands, of any kind, in this format, changed only through change documents. **Standard:** this one, [1](#1-introduction) |
| **Brief** | What a design is for, what it must satisfy and what it leaves out; held in the design's Introduction. **Standard:** `ki-design`'s design standard, 4.2 |
| **Design book** | A visual design's document together with its final boards, kept in a folder beside it and shown in its Design section by level. **Standard:** this one, [4.5](#45-images-boards-and-diagrams), and `ki-design-system`'s design levels |
| **Final board** | A board an agreed design keeps: the chosen option at one level, numbered and coded so that a finding can name one region. **Standard:** `ki-design-system`'s design levels |
| **Living design** | An agreed or current design that every build adds to, such as a routing map or a components document. **Standard:** this one, [4.4](#44-living-designs) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-id: design:<slug>
ki-document-type: design@<version ref of standard-formats-design.md>
title: <its name, the H1>
ki-status: <draft, agreed, current, shelved or replaced>
ki-revised: <UTC, to the second>
ki-owner: actor:<id>
---
```

- **`ki-id` opens and `ki-document-type` follows,** as every resource opens with its typed id: `design:` and the file's slug, the name without `.design.md`. A reference to a design uses this id.
- **`ki-document-type`** names the kind, `design`, and the version of this format the design follows.
- **`title`** is the design's name and its H1; it is meant for other tools, so it keeps its name.
- **`ki-status`** takes one of the five values in [4.2](#42-statuses).
- **`ki-revised`** is the time of the design's last change of substance, as the format format sets; a build's addition to Built is one.
- **`ki-owner`** is the actor who owns the design and decides on it, as a typed id, such as `actor:ki.cairn`.
- **No other field.** A design carries no date of its own beyond `ki-revised`, and no inputs, outputs or history: its change documents carry those, and Git keeps the rest.

[Back to contents](#contents)

### 4.2 Statuses

| Status | Meaning |
| --- | --- |
| `draft` | Being written; not yet agreed. |
| `agreed` | Agreed by its owner and not yet wholly built; its Built section says what differs. |
| `current` | Agreed and built: it describes what stands. |
| `shelved` | Set aside; its Introduction says why, in a line. |
| `replaced` | Overtaken by another design, linked from the first line of its Introduction. |

**Each step is taken through a change document:** the change that agrees a design, marks it built, shelves or replaces it names it in its `ki-outputs`, and the design's `ki-status` moves when that change lands. A design waiting for review is one whose change is in `review`; the design carries no review field of its own.

[Back to contents](#contents)

### 4.3 Sections

1. **Sections:** 1 Introduction, 2 Design, 3 Built, 4 Options set aside, 5 Decisions, 6 Terms and definitions, each numbered and in that order.
2. **Introduction** holds the brief, in `ki-design`'s words: what the design is for, what it must satisfy and what it leaves out, so that a review can be made against it. A brief written before the design becomes its Introduction when the design is written. A shelved or replaced design opens it with its status line.
3. **Design** comes first and says the design as it stands now, in the present tense. It runs by its kind's levels, from the coarsest to the finest, as `ki-design` sets them: a visual design's book reads 2.1 Information architecture, 2.2 Wireframes and 2.3 Mock-ups, as [4.5](#45-images-boards-and-diagrams) sets out; a technical design reads by its kind's three levels.
4. **Built** says what of the design is built and where, and, for an agreed design, what differs from it.
5. **Options set aside** are short: each option the design did not take, with why, in a line or two. No option is argued again here.
6. **Decisions** lists the choices the design settles, each linking its decision record where the repository keeps them, never restating its reasons.
7. **Terms and definitions** is a two-column table of the design's own words, each definition ending with a **Standard:** line, as in a standard.
8. **What a design leaves out:** no history or changelog, which Git and the change documents keep; no slice plan, which belongs to a change document or the roadmap; no risks or open questions, which belong to the change that is moving it; and no guide, such as start-up steps, which belongs under `ki-guides`. A design links its contract's specification, its architecture's diagrams and its decision records rather than restating them.

[Back to contents](#contents)

### 4.4 Living designs

A living design is an agreed or current design that changes with nearly every build, such as a routing map or a components document. **A build may add to its Built section,** in a commit of its own, and touches nothing else in it. **Anything else changes through a change document,** the Design section above all, so the design stands as agreed between changes.

[Back to contents](#contents)

### 4.5 Images, boards and diagrams

Every picture a design shows renders in any Markdown view and in the Wayfinder.

- **Beside the design.** A design's images and boards live in a folder named by its slug, beside its document, as `docs/design/ui/wayfinder/` beside `wayfinder.design.md`.
- **Diagrams** are drawn under `ki-diagrams`, and their committed SVGs embedded. Nothing is drawn in text characters.
- **Screenshots** are PNG.
- **An HTML page** is linked, never embedded in the Markdown.
- **The design book.** A visual design keeps its final boards in its folder, named by level, `ia-<subject>.html`, `wire-<subject>.html` and `mock-<subject>.html`, each self-contained, loading no script, stylesheet or font from outside itself, with a PNG of it beside it under the same name, taken from the rendered page. The boards are numbered and coded as the annotated board is, so that a finding names one region on a board of the design. `ki-design-system`'s design levels set how a book's boards are drawn, named and coded.
- **How the Design section reads them.** Each board is shown as its PNG, linked to its HTML. 2.1 Information architecture shows the site map, routes, shells and the inventory of parts with their names and atomic levels; 2.2 Wireframes each template and page frame, shells first; 2.3 Mock-ups run by the component library's levels from the outside in, pages, templates, organisms, molecules, atoms and then tokens, each naming its parts as the components document does and showing each in every state.
- **A design that is only technical has no book;** it embeds its diagrams in the same way.

[Back to contents](#contents)

### 4.6 Naming and place

- **Named by its slug:** `<slug>.design.md`, the suffix pattern, unnumbered, the slug being the design's name in kebab case, such as `wayfinder-components.design.md`.
- **In `docs/design/`:** a repository keeps its designs under `docs/design/<area>/`, one of `ki-repo`'s documentation roots, which selects `ki-design`. The area is a short word the repository chooses, such as `ui`, `system` or `api`. A Knowledge Base or the Cairn store keeps them where its own structure says, and says why.
- **An index** of a repository's designs, where it keeps one, reads each design's status from its front matter rather than restating it.

[Back to contents](#contents)

### 4.7 Validation

Beyond the format format's checks, a validator checks:

1. **Front matter:** `ki-id` is `design:` and the file's slug; `title` is present and is the H1; `ki-status` is one of the five; `ki-owner` is an `actor:` id; and no field but those in [4.1](#41-front-matter) is present.
2. **Sections:** the six sections are present, numbered and in order, and no other top-level section; a design that shows boards has 2.1 to 2.3.
3. **Status lines:** a shelved design's Introduction says why in its first line, a replaced design's first line links its successor, and an agreed design's Built says what differs.
4. **Pictures:** each image the design shows exists in its folder; each board in a book is named `ia-`, `wire-` or `mock-` with its PNG beside it; no HTML page is embedded; and no drawing is made in text characters.
5. **Name and place:** the file is `<slug>.design.md` under `docs/design/`, or the place says why it differs.

A design written before this format, in another shape, comes into it when it is next changed, as the format format's out-of-date rule says. These checks are `ki-authoring`'s FMT-shape rubric item, reviewed by judgement under `ki repo audit --skill ki-authoring`, as the change, standard and sources formats' are.

[Back to contents](#contents)
