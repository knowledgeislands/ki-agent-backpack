---
type: standard@2026-11-09T21:36:32Z
revised: 2026-11-16T23:19:50Z
status: in force
---

# Record format

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Front matter](#41-front-matter)
  - [4.2 Review](#42-review)
  - [4.3 A batch record](#43-a-batch-record)
  - [4.4 A consolidated review](#44-a-consolidated-review)
  - [4.5 Links](#45-links)
  - [4.6 Naming and shape](#46-naming-and-shape)
  - [4.7 Validation](#47-validation)

## 1. Introduction

What a record is: the report of one batch of work that has landed, written by the session that did it, for the owner to review afterwards, and later consolidated or pruned. It follows the [format format](standard-formats-format.md). The decisions behind these rules are in [the sources file](sources.md).

The rules were set in the Cairn summit's [change 20, the record](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/20-learnings.change.md#42-the-record) and [change 11](https://github.com/krisb/ki-cairn-store/blob/main/work/cairn/cairn.summit/11-keystone-guild.change.md#45-decided). One point is still open: where a `changes wanted` note is kept, beyond the work it becomes.

[Back to contents](#contents)

## 2. Scope

The format of a record and of a consolidated review, which is a record too.

### 2.1 In scope

- A record's front matter, its `review` values and what each asks of whom.
- The sections of a batch record and of a consolidated review, and how records are consolidated.
- How a record links, how it is named, and what a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- What every type of document shares: the [format format](standard-formats-format.md).
- Landing, then review, and when a batch of work is significant enough for a record: `ki-coordination` and `ki-delegation`.
- How long an approved record is kept, and who prunes it: whoever keeps the records says.
- The decisions a batch took and its open points: they stay in the change documents a record links.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Batch of work** | A significant piece of work taken through to where it lands, one thing or twenty: the unit a record reports. **Standard:** this one, [4.3](#43-a-batch-record) |
| **Record** | A file reporting one batch of work: what it is for, how far it got, and what is new and noteworthy. **Standard:** this one, [1](#1-introduction) |
| **Consolidated review** | A record that takes the place of several records on one topic, saying what stands today. **Standard:** this one, [4.4](#44-a-consolidated-review) |
| **Writer** | The session that did the work and wrote the record, which keeps its `review` field; the Cairn app calls it the record's owner. **Standard:** this one, [4.2](#42-review) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
id: record:<the file name, without .md>
type: record@<version ref of standard-formats-record.md>
revised: 2026-11-16T15:53:00Z
at: 2026-11-16T15:53:00Z
title: <what the batch was for, in a few words>
packages:
  - <package id>
review: awaiting
---
```

- **`id` opens and `type` follows,** as every resource opens with its typed id: `record:` and the file's name without `.md`, as `record:20261116T1553Z-the-walk-through-ids-and-seats`. A reference to a record uses this id.
- **`type`** names the kind of thing the file is, `record`, and, since that kind has a format standard, adds `@` and the version of this format the record follows. As for every file, a reader takes the part before `@` as the kind, so a record's `type` is the same field as a resource's or a card's.
- **`revised`** is the time of the record's last change of substance, the same as `at` when it is written. Setting `review` is not a change of substance.
- **`at`** is when the batch landed, in UTC to the second, the same time as the file name's; for a consolidated review, when it was consolidated.
- **`title`** says what the batch was for in a few words, and is the record's H1.
- **`packages`** lists the ids of the packages the batch served; a consolidated review lists every package its records served.
- **`review`** takes one of the three values in [4.2](#42-review).
- **Older records** open `type: record`, with no version, and may lack `id` and `revised`. They are read as they are written, and each comes into line when it is next changed or consolidated.

[Back to contents](#contents)

### 4.2 Review

The owner reviews a whole record, one at a time, and the record's `review` field says where that review stands:

| Value | Meaning |
| --- | --- |
| `awaiting` | Written and not yet reviewed. Every record is written with it. |
| `changes wanted` | Reviewed, with a note of what is to change. The writer sets it on the owner's word and takes the note as more work, kept where that work is kept, such as a change document's open points or a roadmap, never in the record. |
| `approved` | Reviewed, with nothing left to do. Set when the owner approves the record, or, after `changes wanted`, by the writer once the work the note became has landed. |

A record has nothing for the owner to do but review it, so `changes wanted` asks for work, not for the record to be rewritten. The owner reviews records in the Wayfinder, and that is the review: no session walks the owner through the records at its start.

[Back to contents](#contents)

### 4.3 A batch record

1. **Sections:** **Purpose**, what the work is for, in a few sentences; **Goals**, what the batch aimed at, each with where it got to; and **What changed**, each entry marked **Notable** or Minor and one or two sentences on what is now different.
2. **Purpose first, not a digest:** a record says what the work is for and how far each goal got. What changed is said from the owner's side, as release notes for users are, never as a developer's changelog.
3. **Goals and what changed only:** a record asks the owner for nothing, and an entry ends at the fact. What comes next belongs in the change documents' open points or the roadmaps.
4. **One record for each batch that lands,** not one a day; a session spent deciding writes none, since its decisions are in the change documents.
5. **Or the review's shape:** a record of a single batch may instead take a consolidated review's shape, as in [4.4](#44-a-consolidated-review), its opening line saying what the batch was for in place of the records it replaces.

[Back to contents](#contents)

### 4.4 A consolidated review

Several records on one topic may be consolidated into one review, so that what stands today is read in one place, compiled as a block and said in terms of its outputs, not its commits. A review has three parts:

1. **An opening line** under the H1 names the records the review takes the place of, each linked at its last revision.
2. **What stands today:** the full account of the topic as it now stands, in prose by area and in no time order, with `cairn://` links into the app that shows it where they help. Anything the records reported that is no longer true is folded into its area as no longer so, and only where it matters.
3. **Left open:** what is still to settle on the topic. A review may carry it, and so may a batch record in its shape, where a batch record in the sections of [4.3](#43-a-batch-record) may not, because it is read as the topic's current account.

A review carries no commit lists, no account of each original batch and no history of how the topic got where it stands: the linked originals and Git history keep those. **The originals are removed in the same commit** as the review is added. A review is itself a record: it carries the front matter above, starts at `review: awaiting`, and may later be consolidated again.

[Back to contents](#contents)

### 4.5 Links

- **Ids, file names and commits go only in links,** never as bare text in prose.
- **Links last:** they go to what has landed, never to a pull request or a branch that will go. A link within the store is relative and never leaves its root; a link to another repository is its web address on the default branch, or pinned at a commit where the target will be removed, as an original record linked from a review is.

[Back to contents](#contents)

### 4.6 Naming and shape

- **Named by time and slug:** `<YYYYMMDD>T<HHMM>Z-<slug>.md`, in a `record/` folder at the top of the store, as `20261116T1553Z-the-walk-through-ids-and-seats.md`. The time is when the batch landed, in UTC in ISO 8601's basic format, because a colon cannot go in a file name on Windows or OneDrive; the slug is five words at most, saying what the batch was for, and a consolidated review's opens `review-`. The name differs from both of the format format's patterns, since the folder names the type and a name that starts with its time sorts records in the order they landed.
- **No Contents, numbering or Back to contents:** a record replaces the format format's [shape](standard-formats-format.md#44-shape) with its H1 and the sections above, as `##` headings in that order, since it is short and read whole.

[Back to contents](#contents)

### 4.7 Validation

Beyond the format format's checks, as this standard replaces them, a validator checks:

1. **Front matter:** `id` is `record:` and the file's name, `at` matches the file name's time, `revised` is present, `packages` is a list, and `review` is one of the three values.
2. **Sections:** a batch record has Purpose, Goals and What changed, in order, or a consolidated review's sections, and no other section; a consolidated review has What stands today and Left open, in order, and no other section.
3. **Opening line:** a consolidated review's first paragraph under the H1 links at least one record, and each record it links is pinned at a commit.
4. **Name:** the file name is a time and a slug of five words at most.

An older record, whose `type` has no version, is read as written: only its `at`, its `review` and any `id` it carries are checked. These checks are `ki-authoring`'s FMT-record rubric item, run mechanically by `ki repo audit --skill ki-authoring`, and a record that breaks one fails.

[Back to contents](#contents)
