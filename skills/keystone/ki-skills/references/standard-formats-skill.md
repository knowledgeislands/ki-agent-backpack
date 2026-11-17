---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T00:55:00Z
ki-status: in force
---

# Skill format

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Front matter](#41-front-matter)
  - [4.2 Fields](#42-fields)
  - [4.3 Shape](#43-shape)
  - [4.4 Naming](#44-naming)
  - [4.5 Validation](#45-validation)

## 1. Introduction

What a skill's `SKILL.md` is: the entry file that names a skill, says when to select it, and routes to the rest of its files. Its type word is `skill`. It follows `ki-authoring`'s [format format](../../ki-authoring/references/standard-formats-format.md) wherever this standard does not replace it, and the skill's other files follow the [mode](standard-formats-mode.md), [exemplars](standard-formats-exemplars.md) and [rubric](standard-formats-rubric.md) formats. The decisions behind these rules are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The format of `SKILL.md`.

### 2.1 In scope

- Which front matter fields `SKILL.md` carries, which take the `ki-` prefix, and in what order the first two come.
- The shape of its body and its name.
- What a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- What each field means and the values it takes: [the Agent Skills standard](standard-agent-skills.md#43-portable-agent-skills-contract) for the specification's fields and the runtimes' own, and [the Knowledge Islands standard](standard-knowledge-islands.md#42-skill-shape) for the `ki-` fields.
- How good a description or body is: [the Agent Skills standard](standard-agent-skills.md#44-established-authoring-practice).
- What every type of document shares: the [format format](../../ki-authoring/references/standard-formats-format.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Skill file** | One of the files the skill formats govern: `SKILL.md`, a mode file, `exemplars.md` and the generated `rubric.md`. **Standard:** this one, [1](#1-introduction) |
| **Specification field** | A front matter field the Agent Skills specification or a runtime defines, such as `name`, `description` or `argument-hint`, which keeps its own name. **Standard:** this one, [4.2](#42-fields) |
| **KI field** | A front matter field Knowledge Islands defines, written with the `ki-` prefix. **Standard:** [format format](../../ki-authoring/references/standard-formats-format.md#42-front-matter) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
name: <the skill's directory name>
ki-document-type: skill@<version ref of standard-formats-skill.md>
ki-kind: <governance, process or knowledge>
ki-applicability: <baseline, detected, declaration-only or invocation-only>
ki-guild: <guild>
ki-depends-on: []
description: >
  <what the skill does and when to use it>
---
```

- **`name` opens and `ki-document-type` follows,** as every resource opens with its identity and then names its kind. The order of the other fields is free.
- **`ki-document-type`** is `skill@` and the version of this format the file follows, by the format format's [version rule](../../ki-authoring/references/standard-formats-format.md#43-version-refs).
- **No `ki-revised`.** This standard replaces the format format's `ki-revised` for `SKILL.md`: a skill changes with the code and references beside it, and its history is the backpack's Git history and release, so a date in the file would only fall behind.

[Back to contents](#contents)

### 4.2 Fields

Each field is set once, where its meaning is; this list only names them.

- **Specification fields keep their names:** `name`, `description`, `license`, `compatibility`, `metadata` and `allowed-tools` from the [portable contract](standard-agent-skills.md#43-portable-agent-skills-contract), and a runtime's own, such as `argument-hint` and `disallowed-tools`, by its [optional fields](standard-agent-skills.md#435-frontmatter-optional-fields).
- **KI fields take the `ki-` prefix:** `ki-document-type`, `ki-kind`, `ki-applicability`, `ki-detects`, `ki-guild`, `ki-leads`, `ki-depends-on`, `ki-optional-depends-on`, `ki-shared-modules`, `ki-shared-dependencies`, `ki-supported-runtimes` and `ki-runtime-binding`, by [skill shape](standard-knowledge-islands.md#42-skill-shape); and the three declarations of the target files a skill's rubric reads or writes, `ki-requires`, `ki-contributes` and `ki-owns`, whose tiers [the rubric](rubric.md)'s KI-SHAPE-16 sets.
- **Written without the prefix.** Until every skill is swept, a reader takes the older `requires`, `contributes` and `owns` under their `ki-` names, and the check warns on them, never failing.
- **Nothing else.** A field neither the specification, a runtime nor Knowledge Islands defines is not added; a new KI field is set in the Knowledge Islands standard first, with the prefix.

[Back to contents](#contents)

### 4.3 Shape

- **No Contents, numbering or Back to contents:** `SKILL.md` replaces the format format's [shape](../../ki-authoring/references/standard-formats-format.md#44-shape), since it is loaded whole on every selection and its budget is in [size](standard-agent-skills.md#441-size--conciseness).
- **An H1 title** follows the front matter, naming the skill's subject in words, such as "Knowledge Islands Skills".
- **The body is an overview that routes,** by [progressive disclosure](standard-agent-skills.md#442-progressive-disclosure): it links every file in `references/` with when to load it.
- **Modes** sit under one `## Operating modes`, each a `### Mode <NAME>` or a row of a `| Mode | … |` dispatch table, as [skill shape](standard-knowledge-islands.md#42-skill-shape) sets for each kind of skill; a mode lifted out is a [mode file](standard-formats-mode.md).

[Back to contents](#contents)

### 4.4 Naming

The file is `SKILL.md` at the skill's root, the name the Agent Skills specification fixes, which differs from both of the format format's patterns.

[Back to contents](#contents)

### 4.5 Validation

Beyond the format format's checks, as this standard replaces them, a validator checks:

1. **The field:** `ki-document-type` is present and is `skill@<ref>`, and `ki-document-type` follows `name`.
2. **The version:** its time ref is this standard's current `ki-revised`; an older one is out of date.
3. **The prefix:** every top-level field is a specification field or a KI field; one of the older bare names is read under its `ki-` name and warned on.
4. **The shape:** an H1 follows the front matter, and the body links every reference.

The first three are `ki-skills`' SKILL-FMT rubric items, run by `ki repo audit --skill ki-skills`, and warn, never fail, while the skills are swept; the shape is checked by SKILL-FMT-4's review and the REF and KI-SHAPE items. The fields' own values are checked by the FM, NAME, DESC, OPT and KI-SHAPE items as before.

[Back to contents](#contents)
