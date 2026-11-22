---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T01:10:00Z
ki-status: in force
---

# Design system standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Where design knowledge lives](#41-where-design-knowledge-lives)
    - [4.1.1 The design system folder](#411-the-design-system-folder)
  - [4.2 The token source](#42-the-token-source)
  - [4.3 The design guide](#43-the-design-guide)
  - [4.4 The component library](#44-the-component-library)
  - [4.5 Shells and their state](#45-shells-and-their-state)
  - [4.6 Design Specifications](#46-design-specifications)
  - [4.7 Design Decision Records](#47-design-decision-records)
  - [4.8 Design work, from brief to rule](#48-design-work-from-brief-to-rule)
  - [4.9 Checks](#49-checks)
  - [4.10 The floor](#410-the-floor)
  - [4.11 Projections](#411-projections)
  - [4.12 Configuration](#412-configuration)
  - [4.13 Judgment boundary](#413-judgment-boundary)

## 1. Introduction

This standard defines how a Knowledge Islands repository keeps the knowledge behind its user interface: where each kind of design knowledge lives, how a design question moves from a brief to a settled rule, and what keeps those rules true as the interface changes. It governs the method, not the content: a repository's own design guide, decisions and checks say what its interface looks like. The hosted rubric enforces the mechanical criteria; the generated [rubric](rubric.md) publishes every criterion, and [exemplars](exemplars.md) point at a conforming repository. It was established by the 5G-EMERGE Phase 3 calendars page in October 2026. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a Knowledge Islands repository keeps the knowledge behind its user interface.

### 2.1 In scope

- A design system: the set of visual and interaction rules one product surface follows, its colours, type, layout, components, how it shows state, and how it behaves for a keyboard, a screen reader or a reader without script.
- Any repository with a user interface, such as a website, an application or a documentation site, that adopts it by declaring `[skills.ki-design-system]` in `.ki.toml`.
- Where design knowledge lives, the folder that holds the design system, design work and design checks.
- Files as the source of truth for a design system and every artifact worth keeping, and the views published from them outside the repository: what each records, who republishes it, and how files leave a cloud account.

[Back to contents](#contents)

### 2.2 Out of scope

- Visual references and inspiration for a new direction: `ki-design-inspiration`.
- The shape of a new Project, Initiative or cross-cutting model: `ki-work design`.
- How tokens are built into an Eleventy and Tailwind site: `ki-repo-website-content`.
- How a component library is packaged, shown and shared: `ki-repo-packages`.
- The format of a guide, Specification, Decision Record or record: `ki-guides`, `ki-specs`, `ki-decision-records`, `ki-work-roadmap`.
- Living diagrams of the system: `ki-diagrams`.
- Prose style: `ki-authoring`.

This standard routes design knowledge into those instruments. It never forks their formats: a design guide is an ordinary guide, a design Specification an ordinary Specification, and a design decision an ordinary Decision Record.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Design system** | The set of visual and interaction rules one product surface follows. **Standard:** this one, [4.1](#41-where-design-knowledge-lives) |
| **Design system folder** | `docs/design/design-system/`, the one folder of an app or package repository that holds its design system. **Standard:** this one, [4.1.1](#411-the-design-system-folder) |
| **Token source** | The canonical home of every design value, as CSS custom properties. **Standard:** this one, [4.2](#42-the-token-source) |
| **Design guide** | The ordinary guide holding the rules a maintainer follows to design or change a page. **Standard:** this one, [4.3](#43-the-design-guide) |
| **Component library** | The set of reusable parts an interface is built from, sorted by atomic design into six levels. **Standard:** this one, [4.4](#44-the-component-library) |
| **Components document** | The one document per library with a row for each component: its signature, what it owns and does not own, and its hand-offs. **Standard:** this one, [4.4](#44-the-component-library) |
| **Shell** | One layer of the interface's onion, a template that says what state it owns. **Standard:** this one, [4.5](#45-shells-and-their-state) |
| **The floor** | The four requirements every adopting design system meets. **Standard:** this one, [4.10](#410-the-floor) |
| **Projection** | A view published outside the repository, of the design system or of any other artifact or canvas, refreshed from its files and never edited as the source. **Standard:** this one, [4.11](#411-projections) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Where design knowledge lives

Each kind of design knowledge has one home, so a reader knows where to look and nothing is said twice.

| Question                          | Home                                                       | Instrument               |
| --------------------------------- | ---------------------------------------------------------- | ------------------------ |
| What is the value?                | The token source, such as `tokens.css`                     | Code                     |
| How do I build a page?            | The design guide, under `docs/guides/<audience>/`          | `ki-guides`              |
| What must the interface do?       | Design Specifications, under `docs/specs/`                 | `ki-specs`               |
| What parts are there, and what does each own? | The components document, one per component library, in the design system folder | [The component library](#44-the-component-library) |
| What was agreed, board by board? | The design book, in the design system folder | [The design levels](standard-design-levels.md#45-the-design-book) |
| Why is it this way?               | Design Decision Records, under `docs/decisions/`           | `ki-decision-records`    |
| When will it change?              | Design work records, under `docs/roadmap/`                 | `ki-work-roadmap`        |
| Is it still true?                 | Checks, in the repository's test and check scripts         | Code                     |

The rule for every home is the same: state a thing once, in its home, and elsewhere name it. A guide names a token rather than repeating its value; a Decision Record states a decision rather than restating the guide's procedure; a check enforces a rule rather than redefining it.

**Files first** (FILES-FIRST). Every home above is a file. Files are the source of truth for a design system and for every artifact worth keeping, such as its boards, a canvas or a deck: in a Git repository, or, for material unsuitable for Git, in the [sources store](../../../keystone/ki-repo/references/standard-repository.md#421-kind-and-stores) the repository declares. A cloud artifact, a canvas or a design-system artifact is never a home: it is a view of the files, as [Projections](#411-projections) sets.

[Back to contents](#contents)

#### 4.1.1 The design system folder

Each app or package repository holds one design system, in one folder, `docs/design/design-system/`, laid out the same way in every territory (DESIGN-HOME, DESIGN-FOLDER). A principal or knowledge-base repository is not its home: a design system belongs to the site, app or package it serves. A design system shared by several of one territory's surfaces, as Tessera is for Knowledge Islands, lives in its own package repository and is vendored.

```text
<site repository>/
  .ki.toml                              [skills.ki-design-system]: tokens, guide, checks
  <runtime token file>                  where the code reads it, such as apps/site/src/assets/css/tokens.css
  docs/guides/developer/site-design.md  the design guide, with the other guides; names the folder
  docs/design/design-system/            the one home of the site's design system
    <token source or export>
    <the components document>
    <the design book: its design document and boards, by level>
    projections/<name>/                 each view's copy, as last published or exported
      index.json                        url, type, account, source revision, when and by whom
```

- **What the folder holds** (DESIGN-SYSTEM-HOMES): the tokens' source, or their export; [the components document](#44-the-component-library); [the design book](standard-design-levels.md#45-the-design-book), its design document and final boards together; and each view's copy under `projections/<name>/`, as [Projections](#411-projections) sets. Names inside the folder other than `projections/` are the repository's to choose.
- **The runtime token file** stays where the code reads it, declared as `tokens`. Where the tokens are generated, as Tessera's `tokens.json` writes CSS, their source sits in the folder and the runtime file is its build. Where the runtime CSS is itself the source, the folder holds its export, refreshed from it and never edited, so each value is stated once.
- **The other homes stay where their own skills expect them:** the design guide under `docs/guides/<audience>/`, Design Specifications under `docs/specs/` and Design Decision Records under `docs/decisions/`. The guide and the folder name each other; the others name the folder rather than repeating it.
- **No key declares the folder.** The audit finds it by its path, as [Configuration](#412-configuration) sets.

[Back to contents](#contents)

### 4.2 The token source

The token source is the canonical home of every design value: colour, type, spacing, radius, shadow, motion and breakpoints where the platform allows. Every other artefact, including the design guide, names a token and never repeats its value, because a repeated value drifts the first time the token changes. A value the token source does not yet hold may be stated in the guide until it gets a token; colour always has one.

- Values are composed, not listed, wherever the platform allows it: a theme supplies hue and chroma anchors, a mode supplies lightness steps, and each colour is computed from them, so a theme or mode cannot drift on one token alone.
- A colour that carries meaning, such as a status or a category, belongs to a meaning palette that does not change with the reader's chosen theme.
- A categorical palette, one colour per category, assigns numbered slots. The category's registry names its slot and a short text code, and the code appears wherever the colour does.
- A repository with several token files declares each one. A generated token file is acceptable when its generator is the declared source.
- The token source is CSS custom properties. The W3C Design Tokens Community Group format (DTCG) is an allowed upstream form where a generator writes the CSS from it, as Tessera's `tokens.json` does; it is not required, and no repository moves to it until a tool needs it (TOKEN-SOURCE).

[Back to contents](#contents)

### 4.3 The design guide

The design guide is the practical how: the rules a maintainer follows to design or change a page so it looks and behaves like the rest. It is an ordinary guide under `ki-guides`, in the audience folder of the people who build the interface, usually `docs/guides/developer/`, and listed in the collection's `docs/guides/README.md`. A product with several distinct surfaces may keep one guide per surface.

`ki-guides` audits the guide's form alongside this skill: its outcome-first opening, its audience folder and its self-containment. So the guide names a Decision Record or Specification by its identifier and never links it, links sibling guides freely, and links any code it explains, such as the token source and the check scripts. This skill audits what the guide says, not how it is shaped.

The guide states current rules in the present tense. It holds no history and no rationale beyond the one clause a reader needs to apply a rule well; the reason lives in a Decision Record the guide may name. It repeats no token value. A guide's sections follow the reader's work, and a complete guide covers:

1. **Principles** - the few rules every page follows, each one checkable or reviewable.
2. **Colour** - which tokens to use for chrome, meaning and selection, and how a categorical palette is assigned.
3. **Type** - the scale by role, weights and numeric styles.
4. **Layout** - page structure, widths, breakpoints and spacing.
5. **Components** - the reusable pieces: the components document that lists them, and when to reach for each level.
6. **State** - how each state is shown, with its second, non-colour carrier.
7. **Interaction and accessibility** - keyboard, focus, roles and touch targets.
8. **Enhancement** - what is rendered without script and what script adds.
9. **Words** - the voice and terms of interface text.
10. **Before you merge** - the checks and the manual review a change needs. Where the collection has a definition-of-done guide, this section holds the design steps only and that guide links it.

A section the product does not need may be left out. [The guide skeleton](../assets/design-guide.md) gives the headings without content.

[Back to contents](#contents)

### 4.4 The component library

A **component library** is the set of reusable parts an interface is built from. It is the industry's word, used here in place of "UI kit". A **web component library** is one built as custom elements that any page uses by its tag, as Stoa's `<stoa-header>` and `<stoa-command-bar>` are; how it is packaged, shown in a Storybook and described by its custom elements manifest is `ki-repo-packages`' concern. A library whose parts are functions inside one application, as the Cairn Wayfinder's are, is a component library too.

Every component library sorts its parts by atomic design into six levels, each with a one-sentence test for whether a part belongs there:

| Level | Holds | Belongs here when |
| --- | --- | --- |
| Tokens | The design values, from the token source | It is a value, not an element |
| Atoms | The smallest parts, each one element that does one thing | It knows nothing of the product's model and cannot be split into smaller parts |
| Molecules | A few atoms working together as one control | It has a single job that needs more than one atom |
| Organisms | A distinct section of an interface, built of molecules and atoms | A reader would name it as a section, such as a top bar, a table or a command palette |
| Templates | The frame a page sits in: its regions, with no content | It lays out regions without filling them |
| Pages | A template filled with real content | It is one screen a reader visits |

Kris, 14 November 2026: "that should be in the skill, and we should make use of this everywhere".

Each library keeps one **components document**, with a table for each level and one row for each component: its **signature**, what it **owns**, what it **does not own**, and its **hand-offs**, the parts it gives work to or takes work from. A signature is the contract later work builds to: names may be added, but not change meaning. The Wayfinder's [component library](https://github.com/knowledgeislands/apps-cairn.local/blob/main/docs/design/design-system/wayfinder-components.design.md) is the model. The document lives in [the design system folder](#411-the-design-system-folder), and the design guide's Components section names it.

The names in the components document are the code's names, and every design board names the same parts at the same levels, as [the design levels](standard-design-levels.md#42-names) set out. A part that fits no level, or two, is a question for the owner, recorded in the components document until it is answered.

[Back to contents](#contents)

### 4.5 Shells and their state

An interface is designed from its shells inwards, like an onion, and each shell is designed in its own right. Kris, 13 November 2026: "it should be like an onion, so shells in. So each level could be a different thing, the tab's got its own design." For an application window with tabs, such as the Wayfinder, the shells are:

1. the window;
2. what belongs to the whole window, such as a top bar and a tab strip;
3. a frame for each open tab, one kind for each kind of tab;
4. the page frame: side navigation, page header, page body, footer and side tray;
5. then the organisms inside the body, their molecules and their atoms.

A website's onion is shallower: the page's chrome, then the page frame, then its content. Two rules follow from the onion:

- **One frame, different contents.** Every tab, or every page, keeps the same parts in the same places. What the frame holds changes, above all its side navigation; where its parts sit does not.
- **Each shell says what state it owns:** the window, a tab or a page. That decides what survives switching tabs, leaving a page and restarting.

Shells are templates in the component library. On [the annotated board](standard-annotated-board.md#42-region-codes) they take the `S` codes, numbered from the outside in.

[Back to contents](#contents)

### 4.6 Design Specifications

A design rule becomes a Specification when it is a stable, verifiable behaviour that something outside the guide depends on: a contrast threshold across every theme and mode, a rule that no meaning is carried by colour alone, a rule that a page's content is complete without script, or a keyboard behaviour. Its verification names the check that proves it. A rule that is only a convention for maintainers, such as a spacing step, stays in the guide.

Do not write a speculative design Specification to make the system look complete. Where a guide rule has no Specification and something depends on it, route the gap to `ki-specs`.

[Back to contents](#contents)

### 4.7 Design Decision Records

A design decision gets a Decision Record when a future maintainer could reasonably undo it without knowing why it was made: how tokens are composed, why a category keeps its colour across themes, why a provisional status is never drawn solid, or why content is rendered at build time.

- Use `ADR-` for the structure of the design system: token architecture, theming axes, the component model.
- Use `PDR-` for how the product presents itself to its users: state encodings, density, what is shown first.
- Before writing one, find the record that already owns the concern and refine it in place. A record states the decision as it stands, without rejected options, history or a link to working material; `ki-decision-records` owns its shape.

[Back to contents](#contents)

### 4.8 Design work, from brief to rule

A design question that changes what readers see starts from a review of the interface as built and moves through six stages. Its options are drawn at [three levels](standard-design-levels.md), information architecture, wireframe and mock-up, each agreed before the next is drawn. Each produces something, and only the last two leave anything durable besides the board the review reads from.

0. **Review.** The owner reviews the interface on its [annotated board](standard-annotated-board.md), a projection refreshed from the running interface, and quotes its labelled regions. The findings become the brief.
1. **Brief.** The purpose, the audience and their devices, the real data the design must hold (including its awkward cases: empty, provisional, imprecise), the constraints, what success looks like, and the open questions. The owner writes or approves it.
2. **Options.** Two or three directions that differ in their trade-offs, not only in style, drawn level by level on the real tokens and the real data, and placed on the board beside the screenshot they answer. Each names what it gains and what it costs against the brief. `ki-design-inspiration` may supply references.
3. **Decision.** The owner chooses, combines or rejects. The choice and its reasons are recorded in the work record's Discussion.
4. **Build.** The chosen design is built in the repository against the guide and checks.
5. **Consolidate.** The outcome moves to its homes: new values to the token source, new rules to the design guide, new stable behaviour to a Specification, a new or changed decision to a Decision Record, and every new checkable rule to a check.
6. **Retire.** The brief, option boards, rounds, canvases and screenshots are working material. Once consolidated, they are not kept as documents: the work record that summarised them is pruned with the rest of the roadmap, and Git history keeps what was considered. The final boards of the chosen design are not working material: they move, renamed by level, into [its design book](standard-design-levels.md#45-the-design-book), beside its design document. The annotated board itself stays, because it is a projection rather than working material; its next refresh shows the built design, and the mock-ups leave it.

**Agreed decisions are drawn against the build** (DRAW-BUILD, Kris, 14 November 2026). Once a decision is agreed, its drawing follows the build rather than leading it: the agreed design is built, and any drawing of it after that is drawn against the build and checked with it. Drawings ahead of the build are for open choices only, drawn side by side for the owner. It holds for design work in a meeting or out of one; in the first design meeting, drawings ahead of an agreed build held the build up.

A design question about the shape of a Project or a model that several repositories share follows `ki-work design` instead. A small change that needs no options, such as applying an existing component, goes straight to build and consolidate.

[Back to contents](#contents)

### 4.9 Checks

A design rule that a machine can check has a check, and the guide's merge section names it. Rules that need a person are listed there as review steps. Checks fall into four groups:

- **Token checks** - contrast for every text and non-text pair in every theme and mode, hue held across modes, every colour mix measured or recorded with a reason, every categorical slot covered, and no theme or mode changing layout, which `ki-repo-website-content` already requires of a content site.
- **Content checks** - the page's facts and links are present without script; a registry and its rendered pages agree.
- **Behaviour checks** - keyboard operation, focus handling and an automated accessibility scan of each view.
- **Visual checks** - screenshots of key pages across themes, modes and widths, compared on change.

A repository declares the files that hold its design checks. A check that cannot run in the repository's own test or check commands is a review step, not a check.

[Back to contents](#contents)

### 4.10 The floor

Every design system that adopts this standard meets four requirements, whatever it looks like:

1. **One home for values.** Every design value comes from the token source.
2. **Readable contrast.** Text meets WCAG 2.2 AA (4.5:1, or 3:1 for large text) and meaningful non-text marks meet 3:1, in every theme and mode the product offers, and a check proves it.
3. **Meaning is never carried by colour alone.** Each meaningful colour has a second carrier: a word, a code, a shape or a line style.
4. **Keyboard parity.** Everything a pointer can do, a keyboard can do, with visible focus.

[Back to contents](#contents)

### 4.11 Projections

Every view published outside the repository is a projection (VIEWS-ONLY): a cloud artifact, a canvas or a design-system artifact is only a published view of the files that [4.1](#41-where-design-knowledge-lives) makes the source of truth, refreshed from them and never edited as the source. It holds for every artifact and canvas, not only the design system. There are three kinds:

- **Projections of the system** - a design-system artifact, a Figma library or a design canvas of components is refreshed from the token source and the guide.
- **Projections of other artifacts** - a canvas of boards, a page or a deck published from files kept in the repository it serves is refreshed from those files.
- **The annotated board** - an interface with readers keeps an [annotated board](standard-annotated-board.md): screenshots of each view and shell state as built, with labelled regions. Its source is the running interface, and it is refreshed from it whenever the interface's code changes.

The guide names each projection of the design system. Every view records its url, type, publishing account and the source revision it was last refreshed from, so the guide holds no state that dates: a view of the design system in its copy's index, as below, and a view of another artifact in the same record beside that artifact's files. A projection that disagrees with its source, the token source, the artifact's files or what the interface draws, is stale, whatever its date.

**Each view's copy** (DESIGN-FOLDER, VIEW-ACCOUNT). A projection of the system published outside the repository, such as a design-system artifact or a canvas, keeps its copy in the [design system folder](#411-the-design-system-folder) under `projections/<name>/`, as last published or exported, with an `index.json` recording its url, type, publishing account, source revision, and when and by whom it was last published. Where the view came from a design tool's export, the index extends that export's own record, such as the canvas, export time, author and each board's SHA-256.

**Who republishes a view** (SEAT-ACCESS, VIEW-ACCOUNT):

- Every seat, in any agent host and any account, works from the design system's files, never from an artifact in another account.
- A view is republished only by a seat in the account its index names. Every other seat changes the files and asks that seat to republish.
- A view no working seat can reach is republished fresh from the files in a reachable account, and the old view is retired once the owner has checked the new one; it is not migrated.
- An edit made in a view, such as on a canvas, is brought back into the files before any republish, so no edit or comment lives only in the view.
- How each kind of seat reaches the files is being trialled from every agent host and is not yet set here.

**The way out of an account** (DISK-EXIT). An artifact's files leave the cloud account that holds them only by being written to disk, into the repository or its sources store, by one of two routes:

- a session in that account writes the files straight to local disk, through a desktop bridge to the machine's files;
- a session signed in to that account reads its own artifact back as files and saves them locally.

Never publish an artifact for another account to read: a seat in another account cannot open or export it as files, and it would be a second source.

[Back to contents](#contents)

### 4.12 Configuration

A repository declares the skill and its locations in `.ki.toml`:

```toml
[skills.ki-design-system]
tokens = ["apps/site/src/assets/css/tokens.css"]
guide = "docs/guides/developer/site-design.md"
checks = ["apps/site/scripts/check-contrast.ts", "apps/site/tests/calendars.test.ts"]
```

| Key      | Type             | Meaning                                                                 |
| -------- | ---------------- | ----------------------------------------------------------------------- |
| `tokens` | list of paths    | The token source files, repository-relative; at least one              |
| `guide`  | path             | The design guide, a Markdown file below `docs/guides/<audience>/`       |
| `checks` | list of paths    | Files that hold design checks; at least one                             |

All three keys are required, and no other key is recognised. [The design system folder](#411-the-design-system-folder) takes no key: the audit finds it by its path, `docs/design/design-system/` (DESIGN-FOLDER).

[Back to contents](#contents)

### 4.13 Judgment boundary

The checker can prove that the declared files exist, that the guide names its token sources, that the guide repeats no literal colour value, that the design system folder exists, and that each view's copy under it has an index naming its account. It cannot prove that knowledge sits in its right home, that the component library sorts its parts by level with one row for each, that each shell owns its state, that the floor holds on every page, that every checkable rule has a check, that working material has been consolidated and retired and a chosen design's final boards kept in its book, that no view was edited as the source, that a view was republished only from its own account, that an artifact's files left its account only through the disk, or that the annotated board shows the interface as it now draws. Review asks those questions, page by page and rule by rule.

[Back to contents](#contents)
