---
ki-document-type: standard@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:52:17Z
ki-status: in force
---

# Sources format

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

What a skill's sources file is: the record of the outside specifications, upstream documents and research its standards rest on. It follows the [format format](standard-formats-format.md). The sources behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The format of a sources file.

### 2.1 In scope

- A sources file's front matter, shape and name.
- That a sources file keeps no decisions.
- What a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- What every type of document shares: the [format format](standard-formats-format.md).
- How a skill reviews its outside sources: its REFRESH mode.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Sources file** | A skill's record of the outside specifications, upstream documents and research its standards rest on. **Standard:** this one, [1](#1-introduction) |
| **Outside source** | A specification or tool outside the backpack that a standard follows, reviewed on a cadence. **Standard:** this one, [4.2](#42-shape) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-document-type: sources@<version ref of standard-formats-sources.md>
ki-revised: 2026-11-09T21:36:32Z
ki-refresh: <kind> · <cadence>
---
```

- **`ki-refresh`** says how the skill's outside sources are reviewed, such as `external-spec · monthly`.
- **A review** that only confirms last-reviewed dates is not a change of substance, so it does not move `ki-revised`.

[Back to contents](#contents)

### 4.2 Shape

1. **Sections:** 1 Introduction, 2 Outside sources (2.1 Authoritative, 2.2 Advisory), 3 Last review.
2. **The Introduction** names the standards the file backs.
3. **Outside sources** are tables of Source, Governs or Informs, and Last reviewed: authoritative sources are specifications the standards follow; advisory sources inform judgement only. A skill that follows no outside source says None there, with no 2.1 or 2.2.
4. **Tags:** a short tag that the standards or the rubric cite opens the Source cell, as `| SPEC — [Agent Skills specification][spec] | … |`. There is no Tag column.
5. **Sub-groups:** either class may divide its sources into sub-groups, each a numbered subsection, as `2.1.1`, with its own table of the same columns. The class then holds only a short lead-in before them, as the [format format](standard-formats-format.md#44-shape) asks of any section with subsections. Sources kept in-house, such as the house's own tool repositories, are a sub-group of the class they serve, as `2.2.1 In-house tool repositories`, never a class of their own.
6. **Last review** says what the latest review confirmed, and lists what it is watching under **Watching**. Watch items have no other place in the file.
7. **No decision log:** a sources file records what the skill was built from, never a log of the decisions taken on it: no decisions table, no decision tags and no quoting of the owner's words, and no superseded entries. A decision is applied to the standard it changes, and Git history is its only trace, under the `ki-coordination` [applying decisions](../../../work/ki-coordination/references/standard-decisions.md#411-applying-decisions) rule. A document the owner wrote and a Decision Record the standards rest on may each be a source, listed like any other.
8. **Older shapes:** a sources file written before this format comes into it with its guild's review, or sooner when it is next changed; audit reports it until then. Files are not converted in bulk.

[Back to contents](#contents)

### 4.3 Naming

A sources file uses the suffix pattern, `[<name>.]sources.md`; a skill's own is `sources.md` in its `references/`.

[Back to contents](#contents)

### 4.4 Validation

Beyond the format format's checks, a validator checks:

1. **Front matter:** `ki-refresh` is present.
2. **Sections:** the three sections are present, in order.
3. **Outside sources:** each table has the three columns and no Tag column, or the section says None.

[Back to contents](#contents)
