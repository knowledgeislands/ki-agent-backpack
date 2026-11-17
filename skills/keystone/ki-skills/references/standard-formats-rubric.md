---
ki-document-type: standard@2026-11-17T00:55:00Z
ki-revised: 2026-11-17T00:55:00Z
ki-status: in force
---

# Rubric format

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

What a rubric file is: the readable publication of a governance skill's rubric, generated from its TypeScript catalogue by `ki dev skill rubric` and never written by hand. Its type word is `rubric`. It follows `ki-authoring`'s [format format](../../ki-authoring/references/standard-formats-format.md) wherever this standard does not replace it. The decisions behind these rules are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The format of a generated `rubric.md`.

### 2.1 In scope

- The front matter the generator writes, the shape it renders and the file's name.
- What a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- The catalogue the file is generated from, the generator's contract and the parity check: [the rubric authoring standard](standard-rubric-authoring.md#414-generated-rubric-publication).
- What every type of document shares: the [format format](../../ki-authoring/references/standard-formats-format.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Rubric file** | A governance skill's `references/rubric.md`, generated from its catalogue. **Standard:** this one, [1](#1-introduction) |
| **Catalogue** | The rubric's TypeScript definition under `scripts/rubric/items/`, its canonical source. **Standard:** [rubric authoring standard](standard-rubric-authoring.md#49-generated-publication-and-optional-projections) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-document-type: rubric@<version ref of standard-formats-rubric.md>
---
```

- **The generator writes it:** `ki dev skill rubric <skill> --write` writes `ki-document-type` as `rubric@` and the version of this format it renders, and the field is never edited by hand.
- **The version moves with the generator:** when this format changes, its `ki-revised` and the generator's version move together, and every rubric is regenerated.
- **No `ki-revised`.** This standard replaces the format format's `ki-revised`: the file's bytes are fixed by its catalogue, which a date would make depend on when it was generated, and the catalogue's history is in Git.

[Back to contents](#contents)

### 4.2 Shape

The generator renders, in this order:

1. the front matter;
2. a comment saying the file is generated and how to regenerate it;
3. an H1, `Generated rubric — <concern>`;
4. a quoted notice that the catalogue is canonical, then a paragraph on the item classifications;
5. Contents, linking each family;
6. a `##` section for each family, `<CODE> — <title>`, linking its standard and holding its items in order, each with its code, classification, title, description and sources.

This replaces the format format's [shape](../../ki-authoring/references/standard-formats-format.md#44-shape): the families are not numbered and carry no Back to contents links, since the file is generated and read by code.

[Back to contents](#contents)

### 4.3 Naming

The file is `rubric.md` in the skill's `references/`, one to a governance skill, as the [reference vocabulary](standard-knowledge-islands.md#42-skill-shape) sets.

[Back to contents](#contents)

### 4.4 Validation

Beyond the format format's checks, as this standard replaces them, a validator checks:

1. **The field:** `ki-document-type` is present and is `rubric@<ref>`.
2. **The version:** its time ref is this standard's current `ki-revised`; an older one is out of date, and is mended by regenerating.
3. **The bytes:** the file is exactly what the generator renders from the catalogue.

The first two are `ki-skills`' SKILL-FMT rubric items, which warn, never fail, while the rubrics are regenerated; the bytes are each skill's RUBRIC-1 parity check, which fails.

[Back to contents](#contents)
