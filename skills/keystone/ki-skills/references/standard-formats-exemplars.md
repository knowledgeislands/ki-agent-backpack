---
ki-document-type: standard@2026-11-17T00:55:00Z
ki-revised: 2026-11-17T00:55:00Z
ki-status: in force
---

# Exemplars format

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

What an exemplars file is: a skill's optional worked examples, each showing one rule of its standard applied, for a session to study when a rule needs an example. Its type word is `exemplars`. It follows `ki-authoring`'s [format format](../../ki-authoring/references/standard-formats-format.md) wherever this standard does not replace it. The decisions behind these rules are in [the sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The format of an exemplars file.

### 2.1 In scope

- An exemplars file's front matter, shape and name.
- What a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- The rules the examples illustrate: the skill's own standards.
- Templates and other material a skill copies into its output: `assets/`, by the [reference vocabulary](standard-knowledge-islands.md#42-skill-shape).
- What every type of document shares: the [format format](../../ki-authoring/references/standard-formats-format.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Exemplars file** | A skill's `references/exemplars.md`, holding worked examples of its standards. **Standard:** this one, [1](#1-introduction) |
| **Exemplar** | One worked example, showing one rule applied and naming the rule it shows. **Standard:** this one, [4.2](#42-shape) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-document-type: exemplars@<version ref of standard-formats-exemplars.md>
---
```

- **`ki-document-type`** is `exemplars@` and the version of this format the file follows. It is the only field.
- **No `ki-revised`.** This standard replaces the format format's `ki-revised`, as [the skill format](standard-formats-skill.md#41-front-matter) does for `SKILL.md`: the examples change with the skill, whose history is in Git.

[Back to contents](#contents)

### 4.2 Shape

1. **An H1** names the file as its skill's exemplars, as `Skill exemplars`.
2. **A lead paragraph** says what the examples illustrate and when to load them.
3. **One exemplar to a heading:** each `##` or `###` heading names the pattern its example shows, and its text names the rule, by its standard's section or its rubric code, so the example is read against the rule and never stands in for it.
4. **Examples are short and real:** drawn from skills or documents that exist, cut to the part that shows the rule, with any source named.
5. **No numbering of headings or Back to contents,** replacing the format format's [shape](../../ki-authoring/references/standard-formats-format.md#44-shape), since examples are dipped into rather than followed in order; a file over a hundred lines opens with Contents, as [progressive disclosure](standard-agent-skills.md#442-progressive-disclosure) asks of every reference.

[Back to contents](#contents)

### 4.3 Naming

The file is `exemplars.md` in the skill's `references/`, one to a skill, as the [reference vocabulary](standard-knowledge-islands.md#42-skill-shape) sets; the folder names its skill, so the name differs from both of the format format's patterns.

[Back to contents](#contents)

### 4.4 Validation

Beyond the format format's checks, as this standard replaces them, a validator checks:

1. **The field:** `ki-document-type` is present and is `exemplars@<ref>`.
2. **The version:** its time ref is this standard's current `ki-revised`; an older one is out of date.
3. **The shape:** the lead paragraph, and an exemplar under each heading naming the rule it shows.

The first two are `ki-skills`' SKILL-FMT rubric items, run by `ki repo audit --skill ki-skills`, and warn, never fail, while the skills are swept; the shape is checked by SKILL-FMT-4's review.

[Back to contents](#contents)
