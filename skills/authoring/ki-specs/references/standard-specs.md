---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:08:04Z
ki-status: in force
---

# Specifications standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The four-document split](#41-the-four-document-split)
  - [4.2 Layout](#42-layout)
  - [4.3 Areas table](#43-areas-table)
  - [4.4 Requirement shape](#44-requirement-shape)
  - [4.5 Append-only IDs](#45-append-only-ids)
  - [4.6 Gaps](#46-gaps)
  - [4.7 Deciding what to require](#47-deciding-what-to-require)

## 1. Introduction

This standard defines how a Specifications corpus is laid out and how each accepted requirement is written. The hosted structured rubric enforces its mechanical criteria; the generated [rubric](rubric.md) publishes every criterion, and [exemplars](exemplars.md) illustrate representative shapes. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a Specifications corpus is laid out and how each accepted requirement is written.

### 2.1 In scope

- The Specifications concern within the repository's documentation, and its two reader-facing forms.
- The corpus layout, `index.md` and its areas table.
- The requirement's heading, statement and lifecycle fields.
- Append-only IDs, retired IDs and Gaps.
- Judging what to require.

[Back to contents](#contents)

### 2.2 Out of scope

- The repository-wide documentation topology: `ki-repo`.
- Why a decision was taken: Decision Records, `ki-decision-records`.
- How to do something: guides, `ki-guides`.
- When work is delivered: work records, `ki-work-roadmap`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Specification** | An accepted contract for behaviour or quality, written as numbered requirements in `docs/specs/`: the what, not the why or the how. **Standard:** this one, [4.1](#41-the-four-document-split) |
| **User-observable behaviour** | An outcome a person or integrating system can observe through the supported product surface. **Standard:** this one, [4.1](#41-the-four-document-split) |
| **Quality property** | A measurable or reviewable characteristic of those outcomes, such as accessibility or performance. **Standard:** this one, [4.1](#41-the-four-document-split) |
| **Area** | One comprehensible feature area, kept as one file in `docs/specs/` and registered under one or more prefixes. **Standard:** this one, [4.2](#42-layout) |
| **Areas table** | The table in `index.md` mapping each area file to its prefixes. **Standard:** this one, [4.3](#43-areas-table) |
| **Requirement** | A level-3 heading with one normative statement and its lifecycle fields. **Standard:** this one, [4.4](#44-requirement-shape) |
| **Conformance** | The current relationship between an accepted requirement and the system: `conforming`, `pending` or `divergent`. **Standard:** this one, [4.4](#44-requirement-shape) |
| **Gap** | An unnumbered candidate behaviour or quality property not yet accepted into the contract. **Standard:** this one, [4.6](#46-gaps) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 The four-document split

`ki-repo` owns the repository-wide documentation topology. This skill owns only the behaviour-level Specifications concern:

| Location          | Question | Instrument                               |
| ----------------- | -------- | ---------------------------------------- |
| `docs/decisions/` | Why      | Decision Records (`ki-decision-records`) |
| `docs/specs/`     | What     | Specifications (this skill)              |
| `docs/guides/`    | How      | Guides (`ki-guides`)                     |
| `docs/roadmap/`   | When     | Work records (`ki-work-roadmap`)         |

A requirement states an accepted contract, not rationale or operating procedure. Reasoning belongs in a Decision Record; instructions belong in a guide.

Specifications distinguish two reader-facing forms:

- **User-observable behaviours** describe outcomes a person or integrating system can observe through the supported product surface.
- **Quality properties** describe measurable or reviewable characteristics of those outcomes, such as accessibility, compatibility, determinism, performance, reliability, security, and visual fidelity.

Use those names as H2 sections where they fit. A narrower H2 may be used when its opening text explicitly identifies which form it contains. Internal implementation detail belongs in a Decision Record unless it defines a necessary product quality or integration contract.

[Back to contents](#contents)

### 4.2 Layout

- Applicability is declaration-led. A repository that does not declare `[skills.ki-specs]` has no Specifications obligation. Once declared, missing, malformed, symlinked, or otherwise unsafe corpus evidence fails closed.
- Specifications live flat in **`docs/specs/`**, with **one file per comprehensible feature area** rather than one file per implementation package.
- **`index.md`** explains the corpus, ID scheme, conformance states, Gaps convention, and registers every area in an areas table.
- Each area file opens with `# <Title> — <PREFIX>`, a one-paragraph scope linking to `index.md`, optional status context, then requirements grouped under H2 sections, and finally an optional `## Gaps` section.

[Back to contents](#contents)

### 4.3 Areas table

In `index.md`, a Markdown table registers each area. The checker locates columns by the header labels **`Prefix`** and **`File`**; other columns such as `Covers` are free-form.

```markdown
| File              | Prefix     | Covers                                  |
| ----------------- | ---------- | --------------------------------------- |
| authentication.md | `AUTH`     | Login, sessions, tokens                 |
| site-seo.md       | `SITE-SEO` | Canonical URLs, robots, structured data |
```

A prefix belongs to exactly one file. One file may host more than one prefix, separated in the table by `·`, `,`, or `/`. Multiple areas tables are permitted.

[Back to contents](#contents)

### 4.4 Requirement shape

Each accepted requirement is a level-3 heading followed by one normative statement and its lifecycle fields:

```markdown
### SITE-SEO-002 — Absolute canonical URL

An indexable page MUST emit a `<link rel="canonical">` whose href is the absolute page URL.

_Conformance:_ conforming

_Verify:_ inspect the built `/culture/` page for its canonical link.

_Evidence:_ `site-output.test.ts` asserts the absolute canonical URL for `/culture/`.
```

- **Heading** — `### <PREFIX>-NNN — <title>`. `PREFIX` is one or more uppercase alphanumeric segments joined by hyphens, each matching `[A-Z0-9]*[A-Z][A-Z0-9]*` — a segment may lead with a digit but must carry a letter, which is what keeps it distinct from `NNN`; `NNN` is zero-padded to at least three digits; the separator is an em dash.
- **Statement** — the first paragraph after the heading, with an uppercase **BCP 14** keyword (`MUST`, `MUST NOT`, `SHALL`, `SHALL NOT`, `SHOULD`, `SHOULD NOT`, `MAY`, `REQUIRED`, `RECOMMENDED`, `NOT RECOMMENDED`, or `OPTIONAL`). BCP 14 ([RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174)) defines the strength of these words when uppercase; it does not prescribe writing style or require keywords in all normative text. This corpus requires one in each accepted statement for consistency and auditability. Use direct language and split unrelated behaviours so each can be verified independently. Keywords in later explanation, `_Verify:_`, or `_Evidence:_` do not satisfy the statement rule.
- **`_Conformance:_`** — exactly one of `conforming`, `pending`, or `divergent`. This is the current relationship between the accepted contract and the system.
- **`_Verify:_`** — the planned check: a concrete built-output assertion, test, inspection, or source symbol capable of deciding conformance.
- **`_Evidence:_`** — current proof. It is required when conformance is `conforming`, optional when `divergent`, and normally absent when `pending`. Evidence names an actual result or implementation source rather than merely repeating the verification plan.

A numbered requirement remains part of the accepted contract whether conforming, pending, or divergent. Do not hide accepted unfinished behaviour in Gaps.

[Back to contents](#contents)

### 4.5 Append-only IDs

IDs are append-only, sequential per registered prefix, and never reused. A retired requirement keeps its number, with its title struck through and a `(deprecated)` note; deprecated entries are exempt from statement and lifecycle checks. Never renumber merely to tidy an established corpus.

When behaviour moves wholesale into an upstream tool or library, an area file may retire IDs under `## Retired tool` using `- <ID>[, <ID>…] — <where the contract now lives>`. IDs on the left remain claimed.

[Back to contents](#contents)

### 4.6 Gaps

An optional `## Gaps` section holds unnumbered candidate behaviours or quality properties that have not been accepted into the contract. Gaps may be unbuilt, uncertain, or intentionally awaiting a product decision. They remain ID-less and are exempt from requirement checks.

Promoting a Gap is a contract decision: move it into the appropriate classification section, allocate the next ID, add its normative statement, declare truthful conformance, and provide a verification plan. It need not already conform.

[Back to contents](#contents)

### 4.7 Deciding what to require

- Prefer small feature-oriented areas that a reviewer can comprehend independently.
- Phrase user-observable behaviour at the supported product surface, not in terms of implementation machinery.
- Make quality properties measurable or reviewable and identify the surface they qualify.
- Cite a Decision Record when the requirement follows a recorded decision, preserving the path from why to what.

[Back to contents](#contents)
