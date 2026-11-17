---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T01:17:42Z
ki-status: in force
---

# Design standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 What design covers](#41-what-design-covers)
  - [4.2 How a design is shaped](#42-how-a-design-is-shaped)
  - [4.3 Each kind's levels](#43-each-kinds-levels)
  - [4.4 Where a design is written down](#44-where-a-design-is-written-down)

## 1. Introduction

How a design of any kind is shaped in Knowledge Islands, before Authoring's skills write it down, and which skill takes each kind. The decisions behind it are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The shaping of a design, technical or visual, from its brief to the choices it settles.

### 2.1 In scope

- What the Design guild covers.
- The brief, the options and the review every design goes through.
- Each kind of design's levels, and who holds them.
- How a design is reviewed.
- Where a design is written down, and its life cycle.

[Back to contents](#contents)

### 2.2 Out of scope

- How a repository keeps its interface design, the three visual levels and the component library: `ki-design-system`.
- Shaping a Project, theme or model before any work exists: `ki-work design`.
- The format of a design document: `ki-authoring`'s [design format](../../ki-authoring/references/standard-formats-design.md).
- The forms of decision records, specifications and diagrams: Authoring's skills.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Design** | The shaping of something before it is built: what it is made of, how its parts fit and, for an interface, how it looks and behaves. **Standard:** this one, [4.1](#41-what-design-covers) |
| **Brief** | What a design is for, what it must satisfy and what it leaves out, agreed before any option is drawn. **Standard:** this one, [4.2](#42-how-a-design-is-shaped) |
| **Level** | One grain at which a kind of design is drawn, agreed before the finer one, as information architecture comes before a wireframe. **Standard:** this one, [4.3](#43-each-kinds-levels) |
| **Finding** | One reviewer's point on one anchored part of a design: its kind, whether it blocks, what to change, and its confidence. **Standard:** this one, [4.2](#42-how-a-design-is-shaped) |
| **Anchor** | What a finding names exactly: a section number, a board code with its region, a component, a C4 element, an API resource or operation, a requirement's id or a rubric item. **Standard:** this one, [4.2](#42-how-a-design-is-shaped) |
| **Design document** | The design that stands, in `ki-authoring`'s design format, changed only through change documents. **Standard:** [design format](../../ki-authoring/references/standard-formats-design.md) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 What design covers

The Design guild covers all design, technical as well as visual (DESIGN-LEAD). Its two architects are two makers in `ki-work-package`'s [role catalogue](../../../work/ki-work-package/references/standard-roles.md#43-role-catalogue), since their responsibilities differ (ARCHITECT-SPLIT): the information architect, `information-architect` 📐, shapes the structure, naming, navigation and models of a handed-off piece, and the technical architect, `technical-architect` 🏗️, its components, data, interfaces and technology choices. `ki-design` leads the guild; `ki-design-system` is its member for visual design and `ki-design-inspiration` for visual references. Technical design stays in the lead until it needs a member of its own (DESIGN-AUTHORING).

[Back to contents](#contents)

### 4.2 How a design is shaped

Every design goes through the same three steps, whatever its kind (DESIGN-AUTHORING):

1. **The brief.** What the design is for, what it must satisfy and what it leaves out, written and agreed before any option is drawn. The names already in use, in code or in the work, are read first.
2. **The options.** More than one way to meet the brief, each with what it costs, and the one recommended marked, so the choice is the owner's.
3. **The review.** A second reader checks the chosen design against the brief and the governing standard before it is called final, and says what has not been checked. One review serves every kind of design (REVIEW-SHAPE):
   - **Who.** A reviewer who did not draw it, reading before any other reviewer's view; the owner decides.
   - **Against what.** The brief, in the design's Introduction; the governing standards, the design format, this standard's levels for its kind and, for a visual design, the design system's floor; and precedent, the agreed designs and decision records beside it. A coarser level is reviewed and agreed before the finer one.
   - **Each finding anchored** to one thing the reader can open: a section number, a board code and region, such as "wayfinder 2.1b P3", a component by its name and level, a C4 element, an API resource or operation, a requirement's id or a rubric item.
   - **Each finding shaped alike:** its anchor; its kind, issue, suggestion, question, note or praise; whether it blocks; what to change; and its confidence, with what would raise it when below high. The reviewer runs that check where it can before writing the finding.
   - **The outcome through the change document** that moves the design: blocking findings become its questions, the rest its gaps or notes, and the owner's Approve takes the design to `agreed`; Accept with changes does the same and turns the open findings into a new change document, as for a record. No field is added to the design.

   Pending: where the full review standard is written is still open (REVIEW-HOME, in the Cairn summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/16-design-guild.change.md#71-questions)). Until it is settled, this step is the review's rule; once it is, this step points at that standard and keeps only its first sentence.

Rubric **DESIGN-1** to **DESIGN-3** review it.

[Back to contents](#contents)

### 4.3 Each kind's levels

Each kind of design is drawn at levels, each finer than the last, and a coarser level is agreed before the finer one is drawn, because a change costs least at the coarsest level.

- **Visual design** has three: information architecture, wireframes and mock-ups, held by `ki-design-system` (DESIGN-LEVELS).
- **Technical design** has three kinds, each with three levels (TECH-LEVELS):

| Kind | Coarse | Middle | Fine | After |
| --- | --- | --- | --- | --- |
| Architecture | System context: the system, the people who use it and the systems beside it | Containers: the applications and stores it runs as, and how they talk | Components: the parts inside a container | The [C4 model](https://c4model.com/); its fourth level, code, is not drawn |
| Component | Black box: what it owns and does not own, its interface and hand-offs | White box: the parts inside and how they fit | Runtime: how it behaves in its main scenarios and states | [arc42](https://arc42.org/overview/)'s building block and runtime views |
| API | Resources: what there is, its names and hierarchy | Operations: the methods, errors, paging and versioning | Contract: the typed or published schema, with an example | Resource-oriented design, as Google's [AIP-121](https://google.aip.dev/121) sets it |

Each answers the same three questions as the visual levels: what is there and what is it called; where each part sits and how they connect; and exactly what it is, in every state. An architecture's views are drawn under `ki-diagrams` as its C4 kind; deployment and dynamic views are supporting diagrams, drawn where they help. A component's black box is the components document's row: its signature, what it owns, what it does not and its hand-offs. An API's contract is its typed source with an example and a test where one repository owns both sides, and an [OpenAPI](https://spec.openapis.org/oas/v3.2.0.html) or [AsyncAPI](https://www.asyncapi.com/docs/reference/specification/v3.0.0) document where callers outside the repository build to it. Each finest level is written down as a specification, diagram or decision record where the repository keeps them, and linked from the design.

Rubric **DESIGN-4** reviews it.

[Back to contents](#contents)

### 4.4 Where a design is written down

Design shapes; Authoring writes down (DESIGN-AUTHORING). A design is written down as a design document, in `ki-authoring`'s [design format](../../ki-authoring/references/standard-formats-design.md): the design as it stands first, its brief in its Introduction, under `docs/design/` (DESIGN-PLACE). Its choices, contracts and architecture still go where the repository keeps them, each linked from the design rather than restated in it: a choice that needs its reason kept becomes a decision record under `ki-decision-records`, a contract others build to a specification under `ki-specs`, and an architecture is drawn under `ki-diagrams`. `ki-design-system` already keeps its design specifications and decision records in Authoring's forms.

This skill owns a design's life cycle: it moves from `draft` to `agreed`, `current`, `shelved` or `replaced` only through a change document, whose review is the design's review, as [4.2](#42-how-a-design-is-shaped) sets out (DESIGN-LIFE). A living design, which every build adds to, takes a build's additions only in its Built section; anything else changes through a change document (DESIGN-LIVING). A Project's shape, before any work exists, is `ki-work design`'s. Rubric **DESIGN-5** reviews it.

[Back to contents](#contents)
