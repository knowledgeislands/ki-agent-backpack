---
ki-document-type: standard@2026-11-17T00:55:00Z
ki-revised: 2026-11-17T00:55:00Z
ki-status: in force
---

# Mode format

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Front matter](#41-front-matter)
  - [4.2 Shape](#42-shape)
  - [4.3 Naming](#43-naming)
  - [4.4 Validation](#44-validation)

## 1. Introduction

What a mode file is: one independently invoked procedure of a skill, lifted out of `SKILL.md` so that only the mode a session calls is loaded. Its type word is `mode`. It follows `ki-authoring`'s [format format](../../ki-authoring/references/standard-formats-format.md) wherever this standard does not replace it. The decisions behind these rules are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The format of a mode file.

### 2.1 In scope

- A mode file's front matter, shape and name.
- What a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- When a mode is lifted out of `SKILL.md`, and the rule of one procedure to a file: [progressive disclosure](standard-agent-skills.md#442-progressive-disclosure).
- Which modes a skill has and what each universal mode means: [skill shape](standard-knowledge-islands.md#42-skill-shape).
- What every type of document shares: the [format format](../../ki-authoring/references/standard-formats-format.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Mode file** | A skill's `references/mode-<verb>.md`, holding one independently invoked procedure. **Standard:** this one, [1](#1-introduction) |
| **Mode-router shape** | A body holding the shared model and a dispatch table, each mode's procedure in its own mode file. **Standard:** [Agent Skills standard](standard-agent-skills.md#442-progressive-disclosure) |
| **Precondition** | What must hold before a procedure starts, such as another mode having run first. **Standard:** this one, [4.2](#42-shape) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-document-type: mode@<version ref of standard-formats-mode.md>
---
```

- **`ki-document-type`** is `mode@` and the version of this format the file follows. It is the only field: the file's name already says which mode it holds, and its skill is the folder it sits in.
- **No `ki-revised`.** This standard replaces the format format's `ki-revised`: a mode changes with the skill it belongs to, whose history is the backpack's Git history, as [the skill format](standard-formats-skill.md#41-front-matter) sets for `SKILL.md`.

[Back to contents](#contents)

### 4.2 Shape

1. **An H1 names the mode:** `Mode <VERB>`, the verb in capitals as `SKILL.md` names it, optionally followed by ` — ` and what it does in a few words, as `Mode CONFORM — bring Decision Records into line`. A subcommand of a process lead's lifecycle may be named by its word alone, as `Plan`.
2. **The preconditions next,** in a `**Precondition:**` paragraph, when the procedure has any, stated in the file itself and not left to a chain of references.
3. **Then the procedure,** as numbered steps; a long procedure may group its steps under `##` headings, numbering on across them.
4. **Rules stay in their standard:** a mode file links the standard it applies and does not restate its rules.
5. **No Contents, numbering of headings or Back to contents,** replacing the format format's [shape](../../ki-authoring/references/standard-formats-format.md#44-shape), since a mode is read whole; one over a hundred lines opens with a short table of contents, as [progressive disclosure](standard-agent-skills.md#442-progressive-disclosure) asks of every reference.

[Back to contents](#contents)

### 4.3 Naming

A mode file uses the prefix pattern, `mode-<verb>.md`, in the skill's `references/`, the verb in lower case, one verb to a file, as the [reference vocabulary](standard-knowledge-islands.md#42-skill-shape) sets.

[Back to contents](#contents)

### 4.4 Validation

Beyond the format format's checks, as this standard replaces them, a validator checks:

1. **The field:** `ki-document-type` is present and is `mode@<ref>`.
2. **The version:** its time ref is this standard's current `ki-revised`; an older one is out of date.
3. **The shape:** the H1 names the mode, preconditions come before the steps, and the steps are numbered.

The first two are `ki-skills`' SKILL-FMT rubric items, run by `ki repo audit --skill ki-skills`, and warn, never fail, while the skills are swept; the shape is checked by SKILL-FMT-4's review. The name is checked by KI-SHAPE-6.

[Back to contents](#contents)
