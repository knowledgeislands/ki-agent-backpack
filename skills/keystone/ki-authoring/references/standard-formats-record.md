---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T02:23:23Z
ki-status: in force
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
  - [4.5 A living record](#45-a-living-record)
  - [4.6 Links](#46-links)
  - [4.7 Naming and shape](#47-naming-and-shape)
  - [4.8 Validation](#48-validation)

## 1. Introduction

What a record is: the report of one batch of work that has landed, written by the session that did it, for the owner to review afterwards, and later consolidated or pruned. Every record belongs to one theme, and each theme has one living record, which says what stands on it today and is kept up to date as its work lands, with the dated records of each batch beneath it as its history. It follows the [format format](standard-formats-format.md). The decisions behind these rules are in [the sources file](sources.md).

The rules were set in the Cairn summit's [change 20, the record](https://github.com/krisb/ki-cairn-store/blob/7fb6be3/work/cairn/cairn.summit/20-learnings.change.md#42-the-record), its [decisions](https://github.com/krisb/ki-cairn-store/blob/635fcb2/work/cairn/cairn.summit/20-learnings.change.md#45-decided) and [change 11](https://github.com/krisb/ki-cairn-store/blob/4bc5285/work/cairn/cairn.summit/11-keystone-guild.change.md#45-decided).

[Back to contents](#contents)

## 2. Scope

The format of a record, of a consolidated review and of a theme's living record, each of which is a record.

### 2.1 In scope

- A record's front matter, its theme, its `ki-review` values and what each asks of whom.
- The sections of a batch record, of a consolidated review and of a living record, and how records are consolidated.
- How a record links, how it is named, and what a validator checks beyond the format format.

[Back to contents](#contents)

### 2.2 Out of scope

- What every type of document shares: the [format format](standard-formats-format.md).
- Landing, then review, and when a batch of work is significant enough for a record: `ki-coordination` and `ki-delegation`.
- Which themes there are: whoever keeps the records keeps the list, as the Cairn store's contract does.
- How long an approved dated record is kept, and who prunes it: whoever keeps the records says.
- The decisions a batch took and its open points: they stay in the change documents a record links.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Batch of work** | A significant piece of work taken through to where it lands, one thing or twenty: the unit a record reports. **Standard:** this one, [4.3](#43-a-batch-record) |
| **Record** | A file reporting one batch of work: what it is for, how far it got, and what is new and noteworthy. **Standard:** this one, [1](#1-introduction) |
| **Dated record** | A record named by the time its batch landed: a batch record, or a consolidated review. **Standard:** this one, [4.7](#47-naming-and-shape) |
| **Consolidated review** | A record that takes the place of several records on one topic, saying what stands today. **Standard:** this one, [4.4](#44-a-consolidated-review) |
| **Theme** | One of the few broad subjects the records are kept under, each a lower-case word with a phrase for a title, from the list whoever keeps the records keeps. **Standard:** this one, [4.1](#41-front-matter) |
| **Living record** | A theme's one current account, in the review's shape, updated as the theme's work lands, with its dated records listed beneath it as history. **Standard:** this one, [4.5](#45-a-living-record) |
| **Writer** | The session that did the work and wrote the record, which keeps its `ki-review` field; the Cairn app calls it the record's owner. **Standard:** this one, [4.2](#42-review) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Front matter

```yaml
---
ki-id: record:<the file name, without .md>
ki-document-type: record@<version ref of standard-formats-record.md>
ki-revised: 2026-11-17T02:23:23Z
ki-at: 2026-11-16T15:53:00Z
title: <what the batch was for, in a few words>
ki-theme: <theme>
ki-packages:
  - <package id>
ki-review: awaiting
---
```

- **`ki-id` opens and `ki-document-type` follows,** as every resource opens with its typed id: `record:` and the file's name without `.md`, as `record:20261116T1553Z-the-walk-through-ids-and-seats`, or `record:wayfinder` for a living record. A reference to a record uses this id.
- **`ki-document-type`** names the kind of document the file is, `record`, and, since that kind has a format standard, adds `@` and the version of this format the record follows. As for every document, a reader takes the part before `@` as the kind, so a record's `ki-document-type` is the same field as a resource's.
- **`ki-revised`** is the time of the record's last change of substance, the same as `ki-at` when a dated record is written. Setting `ki-review` or `ki-theme` is not a change of substance.
- **`ki-at`** is when the batch landed, in UTC to the second, the same time as the file name's; for a consolidated review, when it was consolidated. A living record carries none: its `ki-revised` says when it last changed, and each record in its history when its batch landed.
- **`title`** says what the batch was for in a few words, and is the record's H1; it is the one field meant for other tools, so it keeps its name. A living record's title is its theme's phrase, as the list of themes gives it.
- **`ki-theme`** names the record's one theme, a word from the list of themes: for a dated record, the theme its batch served most; for a living record, its own, which is also its file's name. A batch that served two themes takes the one its owner would look under first, and the other's living record may still say what it changed.
- **`ki-packages`** lists the ids of the packages the batch served; a consolidated review lists every package its records served, and a living record every package its theme's work served.
- **`ki-review`** takes one of the two values in [4.2](#42-review).
- **Older records** open `type: record`, with no version, and may lack `id` and `revised`; their fields are written without the `ki-` prefix, which the [format format](standard-formats-format.md#42-front-matter) reads under the `ki-` names and warns on. They are read as they are written, and each comes into line when it is next changed or consolidated.

[Back to contents](#contents)

### 4.2 Review

The owner reviews a whole record, one at a time, and the record's `ki-review` field says where that review stands:

| Value | Meaning |
| --- | --- |
| `awaiting` | Written and not yet reviewed, or changed in substance since it was approved. Every record is written with it. |
| `approved` | Reviewed. Set when the owner approves the record, as it stands or with changes. |

These are the [review standard](standard-review.md)'s two outcomes for a record, Approve and Accept with changes, and any findings on a record take that standard's shape. **A record accepted with changes is set to `approved` at once,** and its note becomes new work in a change document. The note is that work and is kept nowhere else, never in the record: a record has nothing for the owner to do but review it, so changes ask for work, not for the record to be rewritten. The owner reviews records in the Wayfinder, and that is the review: no session walks the owner through the records at its start.

**An approval covers the version the owner saw.** A change of substance to an approved record, which moves its `ki-revised`, sets its `ki-review` back to `awaiting` in the same commit, and the owner reviews what changed since the version approved, which Git keeps and the Wayfinder shows. A living record changes with each batch on its theme, so it goes back to `awaiting` each time its account moves; a dated record seldom changes once written.

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

A review carries no commit lists, no account of each original batch and no history of how the topic got where it stands: the linked originals and Git history keep those. **The originals are removed in the same commit** as the review is added. A review is itself a record: it carries the front matter above, starts at `ki-review: awaiting`, and may later be consolidated again.

[Back to contents](#contents)

### 4.5 A living record

Each theme has one living record, its current account, read before anything beneath it; the theme's dated records stay beneath it as its history.

1. **The review's shape, then the history.** An opening line under the H1 says what the theme covers. **What stands today** and **Left open** follow, as [4.4](#44-a-consolidated-review) sets them out, for the whole theme; then **History**, a list of the theme's dated records, newest first, each linked, or a line saying there are none yet. A record that has been consolidated or pruned stays in the list, linked at its last revision.
2. **Kept in step with the work.** A session whose batch lands writes its dated record, with its `ki-theme`, and brings that theme's living record up to date in the same commit: What stands today and Left open say what is now so, and the new record heads History. Work that lands without a dated record of its own still updates the living record when it changes what stands.
3. **Never replaced:** a living record is not consolidated or pruned. Its dated records may be, as whoever keeps the records says, and a consolidated review of them takes their places in History.
4. **Reviewed like any record,** under [4.2](#42-review): it starts at `ki-review: awaiting`, and every change of substance sets it back there.

[Back to contents](#contents)

### 4.6 Links

- **Ids, file names and commits go only in links,** never as bare text in prose.
- **Links last:** they go to what has landed, never to a pull request or a branch that will go. A link within the store is relative and never leaves its root; a link to another repository is its web address on the default branch, or pinned at a commit where the target will be removed, as an original record linked from a review is.

[Back to contents](#contents)

### 4.7 Naming and shape

- **A dated record is named by time and slug:** `<YYYYMMDD>T<HHMM>Z-<slug>.md`, in a `record/` folder at the top of the store, as `20261116T1553Z-the-walk-through-ids-and-seats.md`. The time is when the batch landed, in UTC in ISO 8601's basic format, because a colon cannot go in a file name on Windows or OneDrive; the slug is five words at most, saying what the batch was for, and a consolidated review's opens `review-`. The name differs from both of the format format's patterns, since the folder names the type and a name that starts with its time sorts records in the order they landed.
- **A living record is named by its theme:** `<theme>.md`, in the same folder, as `wayfinder.md`, so the living records sort apart from the dated ones.
- **No Contents, numbering or Back to contents:** a record replaces the format format's [shape](standard-formats-format.md#44-shape) with its H1 and the sections above, as `##` headings in that order, since it is short and read whole.

[Back to contents](#contents)

### 4.8 Validation

Beyond the format format's checks, as this standard replaces them, a validator checks:

1. **Front matter:** `ki-id` is `record:` and the file's name, `ki-revised` is present, `ki-theme` is a lower-case word, `ki-packages` is a list, and `ki-review` is `awaiting` or `approved`; a dated record's `ki-at` matches the file name's time, and a living record's `ki-theme` is its file's name.
2. **Sections:** a batch record has Purpose, Goals and What changed, in order, or a consolidated review's sections, and no other section; a consolidated review has What stands today and Left open, in order, and no other section; a living record has What stands today, Left open and History, in order, and no other section.
3. **Opening line:** a consolidated review's first paragraph under the H1 links at least one record, and each record it links is pinned at a commit.
4. **Name:** the file name is a time and a slug of five words at most, or a theme.

An older record, whose `type` has no version, is read as written: only its `at`, its `review` and any `id` it carries are checked, each read as its `ki-` name. These checks are `ki-authoring`'s FMT-record rubric item, run mechanically by `ki repo audit --skill ki-authoring`, and a record that breaks one fails; only the slug's length, whether a living record's theme is on the list and whether its history is complete are left to review, since a hyphen may join one word, as in walk-through, or separate two, and the list is its keeper's.

[Back to contents](#contents)
