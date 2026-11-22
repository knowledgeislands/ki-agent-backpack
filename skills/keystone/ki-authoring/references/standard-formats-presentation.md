---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T01:09:07Z
ki-status: in force
---

# Presentation format

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Front matter](#41-front-matter)
  - [4.2 Statuses](#42-statuses)
  - [4.3 Slides](#43-slides)
  - [4.4 Speaker notes](#44-speaker-notes)
  - [4.5 Images and diagrams](#45-images-and-diagrams)
  - [4.6 Naming and place](#46-naming-and-place)
  - [4.7 Exports and views](#47-exports-and-views)
  - [4.8 Validation](#48-validation)

## 1. Introduction

What a presentation is: a deck of slides with their speaker notes, kept as one Markdown file with its images beside it, so that it reads on GitHub and in the Wayfinder as it stands and converts to a deck when one is to be shown or sent. The file is the presentation; a PDF, a `.pptx` or a cloud deck is built from it and is never the copy anyone changes. It follows the [format format](standard-formats-format.md). The decisions behind these rules are in [the sources file](sources.md).

The rules were set from the Cairn summit's [change 60](https://github.com/krisb/ki-cairn-store/blob/4a220bf8/work/cairn/cairn.summit/60-design.change.md#48-decided), under ARTIFACT-HOMES a and its point on presentations.

[Back to contents](#contents)

## 2. Scope

The format of a presentation, from its front matter to its last slide, with its notes, images, exports and views.

### 2.1 In scope

- A presentation's front matter and its three statuses.
- Its slides, how they are separated, and its speaker notes.
- How its images and diagrams are kept and shown.
- How it is named, where it lives, and where a finished one goes.
- How it is exported to a deck, and how a cloud view of it is kept.
- What a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- What every type of document shares: the [format format](standard-formats-format.md).
- What a deck argues: a presentation presents material that lives elsewhere, a design, a change, a decision or a guide, and decides nothing itself.
- How a design's boards are drawn: `ki-design-system`'s design levels; a deck shows them, never redraws them.
- How a diagram is drawn: `ki-diagrams`.
- A cloud view's index and who republishes it: `ki-design-system`'s [projections](../../../design/ki-design-system/references/standard-design-system.md#411-projections).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Presentation** | A deck of slides with their speaker notes, in this format, as one Markdown file with its images beside it. **Standard:** this one, [1](#1-introduction) |
| **Slide** | One level-2 section of a presentation, shown as one page of the deck. **Standard:** this one, [4.3](#43-slides) |
| **Speaker notes** | What the presenter says or needs for a slide, kept with it and shown to the presenter, not the audience. **Standard:** this one, [4.4](#44-speaker-notes) |
| **Export** | A deck built from a presentation at one commit, such as a `.pptx` or a PDF, derived and never edited. **Standard:** this one, [4.7](#47-exports-and-views) |
| **View** | A cloud deck published from a presentation, a copy that names its account and source revision. **Standard:** `ki-design-system`'s projections, 4.11 |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-id: presentation:<slug>
ki-document-type: presentation@<version ref of standard-formats-presentation.md>
title: <its name, the H1 and the title slide>
ki-status: <draft, ready or retired>
ki-revised: <UTC, to the second>
ki-owner: actor:<id>
ki-inputs:
  - <organisation>/<repository>:<path>@<version ref>
---
```

- **`ki-id` opens and `ki-document-type` follows,** as for a design: `presentation:` and the file's slug, the name without `.presentation.md`.
- **`title`** is the presentation's name, its H1 and its title slide; converters read it, so it keeps its name.
- **`ki-status`** takes one of the three values in [4.2](#42-statuses).
- **`ki-revised`** is the time of the last change of substance, as the format format sets.
- **`ki-owner`** is the actor who owns the presentation and agrees it, as a typed id.
- **`ki-inputs`** lists what the presentation presents, each at the version it presents, written as the [change format's 4.2](standard-formats-change.md#42-inputs-and-outputs) sets; `[]` where it presents nothing kept elsewhere. A moved input does not block: the slides drawn from it are checked against the new version and the ref moves up.
- **No other field.** Who gave it, when and to whom belong to the record of the meeting where it was given; its history is in Git.

[Back to contents](#contents)

### 4.2 Statuses

| Status | Meaning |
| --- | --- |
| `draft` | Being written; not yet agreed by its owner. |
| `ready` | Agreed by its owner and fit to give; it may be given more than once, and is changed in place between showings. |
| `retired` | No longer given; the notes under its title open with why, in a line, or link the presentation that replaces it. |

**A presentation decides nothing.** It is changed directly, not through change documents, since it holds no rule; any decision it leads to is recorded where that work keeps its decisions, and the presentation then cites it in `ki-inputs`.

[Back to contents](#contents)

### 4.3 Slides

Each slide is a level-2 heading and what follows it, up to the next one. Headings separate slides, rather than a horizontal rule, because they give every slide an anchor the Contents and the Wayfinder can link, read as an outline on GitHub, keep the format format's numbered sections, and are what `pandoc --slide-level` and Marp's `headingDivider` already split on; a `---` rule turns the line above it into a heading when no blank line separates them, and is read as front matter at the top of a file.

1. **The title:** the H1, the same as `title`, with the [title notes](#44-speaker-notes) straight under it: who the presentation is for, what it should leave them with and when it is to be given. The title becomes the title slide.
2. **Contents** comes next, as a slide of its own, `## Contents`, linking every slide: on GitHub it is the deck's table of contents, and in the deck its agenda.
3. **Slides are numbered,** `## 1. <title>`, `## 2. <title>`, so a reader can name one, as "slide 4", in any viewer. Every slide has a title.
4. **Within a slide,** a level-3 heading is a heading on the slide, never a new slide. A slide carries one point, in a few short lines, a picture or a narrow table; what is said about it goes in its notes, not on the slide.
5. **No horizontal rules** in the body, since converters start a new slide at each.
6. **No Back to contents links:** this format replaces the format format's third shape rule, since each link would show on every slide. Contents is one slide away in any viewer.

[Back to contents](#contents)

### 4.4 Speaker notes

A slide's notes are a fenced block at the end of the slide, opened by `::: notes` and closed by `:::`, each on a line of its own with a blank line before and after:

```markdown
## 3. Why files

- Files are the source of truth.
- A cloud deck is only a view of them.

::: notes

Say why accounts got in the way on 20 November, with the two failures.

:::
```

- **Visible where the deck is read:** on GitHub and in the Wayfinder the notes show as text under their slide, so a reader on a phone reads what the presenter will say; pandoc carries them into a `.pptx`'s speaker notes and reveal.js's notes view, and a PDF leaves them out.
- **The title notes,** under the H1, become the title slide's notes.
- **Notes are the presenter's words, never the record.** A point that must survive the showing goes where its work keeps it, not in a note.

[Back to contents](#contents)

### 4.5 Images and diagrams

Every picture a presentation shows renders in any Markdown view and in the Wayfinder, as the [design format's 4.5](standard-formats-design.md#45-images-boards-and-diagrams) sets:

- **Beside the presentation,** in a folder named by its slug, as `docs/presentations/cairn-pitch/` beside `cairn-pitch.presentation.md`, linked by a relative path, which converters also resolve.
- **Shown in place, never copied:** a board or diagram that lives elsewhere in the repository, such as in a design book, is linked from where it lives.
- **Diagrams** are drawn under `ki-diagrams` and their committed SVGs embedded; nothing is drawn in text characters.
- **Screenshots** are PNG, and every image has alternative text.
- **An HTML page** is linked, never embedded.
- **Material unsuitable for Git,** a file over 10 MB, a recording or anything carrying case facts or personal data, is kept in the repository's Sources folder and named, never committed.

[Back to contents](#contents)

### 4.6 Naming and place

- **Named by its slug:** `<slug>.presentation.md`, the suffix pattern, unnumbered, the slug being its name in kebab case.
- **Beside what it presents,** in the repository of the thing it serves:
  - a presentation of one design lives in that design's folder, beside its boards, which it shows in place, so `docs/design/design-system/` holds a presentation of a design system;
  - any other lives in `docs/presentations/`, with its folder of images beside it;
  - one that serves no single repository, such as a territory's pitch, lives in the principal repository of the territory it serves, or of the territory that owns the work when it spans several. A Knowledge Base keeps it where its own structure says, and says why.
- **A draft for review** may be written in the work package it serves, as anything for its owner to look at is, and moves to its home, leaving the package, once it is `ready`.
- **A finished presentation stays where it lives** once given, as the deck that was shown; Git keeps each version, and a record of the meeting where it was given links it pinned at the commit shown. When it is given no more it is `retired` in place, not moved or deleted.

[Back to contents](#contents)

### 4.7 Exports and views

The format is written so that pandoc builds a deck from it with no filter, run in the presentation's folder:

```bash
pandoc <slug>.presentation.md --shift-heading-level-by=-1 --slide-level=1 \
  --resource-path=. -o <slug>.pptx
```

The shift makes the H1 the title slide and each numbered heading a slide; `-t revealjs -s` gives a page, and `-t beamer` a PDF where LaTeX is installed.

- **An export is derived.** A `.pptx`, a PDF or a reveal.js page is built from the file, never edited, and rebuilt when the file changes.
- **An export is not committed:** it is rebuilt from the file. A copy kept as it was sent or shown is an export, material kept as it came, so it goes in the repository's Sources folder, `sources-<territory code>/<repository>/`, named by its slug and the commit it was built from.
- **A cloud view is a copy.** A deck published to a cloud tool, such as a slides artifact, is a view of the file, never edited as the source; it names its publishing account and the commit it was built from in an `index.json` under `projections/<name>/` in the presentation's folder, and only a seat in that account republishes it, as `ki-design-system`'s [projections](../../../design/ki-design-system/references/standard-design-system.md#411-projections) set for a design system's views. An edit made in a view is brought back into the file before any republish.

[Back to contents](#contents)

### 4.8 Validation

Beyond the format format's checks, a validator checks:

1. **Front matter:** `ki-id` is `presentation:` and the file's slug; `title` is present and is the H1; `ki-status` is one of the three; `ki-owner` is an `actor:` id; `ki-inputs` is a list, each entry with a version ref; and no field but those in [4.1](#41-front-matter) is present.
2. **Slides:** the H1 is followed by Contents, a level-2 slide linking every slide; every other level-2 heading is a numbered slide, in order; there is no horizontal rule in the body; and Back to contents links are absent.
3. **Notes:** every `::: notes` block is closed by `:::`, each fence on its own line with blank lines around it, and sits at the end of its slide.
4. **Status lines:** a retired presentation's title notes say why in their first line or link its successor.
5. **Pictures:** each image exists, beside the presentation or where it lives in the repository, and has alternative text; no HTML page is embedded; no drawing is made in text characters; and no export is committed.
6. **Name and place:** the file is `<slug>.presentation.md` in the folder of the design it presents or under `docs/presentations/`, or the place says why it differs.

These checks are `ki-authoring`'s FMT-shape rubric item, reviewed by judgement under `ki repo audit --skill ki-authoring`, as the design format's are.

[Back to contents](#contents)
