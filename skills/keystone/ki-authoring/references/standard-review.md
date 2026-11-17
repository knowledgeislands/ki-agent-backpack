---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-17T01:50:03Z
ki-status: in force
---

# Review standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Who reviews](#41-who-reviews)
  - [4.2 What it is reviewed against](#42-what-it-is-reviewed-against)
  - [4.3 Anchors](#43-anchors)
  - [4.4 A finding's shape](#44-a-findings-shape)
  - [4.5 The outcome](#45-the-outcome)
  - [4.6 One review perspective](#46-one-review-perspective)
  - [4.7 What each kind adds](#47-what-each-kind-adds)

## 1. Introduction

How anything already made is reviewed in Knowledge Islands: records, change documents, designs, standards and skills alike. Every review has one shape, so that a finding reads the same whatever it is about, and every review ends in one of the same two outcomes, so that everything awaiting its owner can be listed in one place and acted on in the same way. Each kind's own skill cites this standard and adds only its own anchors and what it is reviewed against. The decisions behind these rules are in [the sources file](sources.md).

The rules were set in the Cairn summit's [change 16, the Design guild](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#46-one-design-review), REVIEW-SHAPE and REVIEW-HOME.

[Back to contents](#contents)

## 2. Scope

The review of any reviewable document or skill, from who reads it to where its outcome is recorded.

### 2.1 In scope

- Who reviews, and who decides.
- What a thing is reviewed against.
- How a finding is anchored, and its shape.
- The two outcomes, and where each is recorded.
- The one review perspective across every kind.
- What a kind's own skill may add.

[Back to contents](#contents)

### 2.2 Out of scope

- How a review held as a meeting runs: `ki-meeting`'s review standard.
- Each kind's own anchors and governing standards: its skill, such as `ki-design` for a design.
- The format of what is reviewed, and the field that holds its review state: its format standard, such as the [record format](standard-formats-record.md) or the [change format](standard-formats-change.md).
- A consolidated review in the record format, which is a record and not a review in this standard's sense.
- Mechanical checks, such as a linter or an audit's rubric run; a review may cite their results.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Review** | A reader's assessment of something already made, against what it was meant to meet, whose outcome its owner decides. **Standard:** this one, [1](#1-introduction) |
| **Reviewer** | One who reads the thing under review and gives findings on it; never its maker. **Standard:** this one, [4.1](#41-who-reviews) |
| **Owner** | The one who decides a review's outcome, such as `ki-owner` on a design or the owner of a work package. **Standard:** this one, [4.1](#41-who-reviews) |
| **Finding** | One reviewer's point on one anchored thing, in the shape [4.4](#44-a-findings-shape) sets. **Standard:** this one, [4.4](#44-a-findings-shape) |
| **Anchor** | The one thing a finding names, exactly, which a reader can open. **Standard:** this one, [4.3](#43-anchors) |
| **Blocking finding** | A finding that must be settled before the thing is approved. **Standard:** this one, [4.4](#44-a-findings-shape) |
| **Outcome** | The owner's decision on a review, Approve or Accept with changes, recorded where the thing changes. **Standard:** this one, [4.5](#45-the-outcome) |
| **Review perspective** | One list of everything awaiting its owner's review, whatever its kind. **Standard:** this one, [4.6](#46-one-review-perspective) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Who reviews

1. **The reviewer did not make it.** A session that made something does not review it: a different session, or the owner, does. A maker checks its own work before handing it over, but that check is not the review.
2. **Each reviewer reads independently.** A reviewer writes its findings before it reads any other reviewer's, so the first view is its own; where findings differ, both stand and the owner decides.
3. **The reviewer reads; it does not change** the thing under review. What changes is asked for in a finding and made by the maker or through a change document.
4. **The owner decides.** A finding is a recommendation; only the owner gives the outcome. The owner may also be the reviewer, as when Kris reviews a session's record.

[Back to contents](#contents)

### 4.2 What it is reviewed against

1. **Fixed first.** What is under review is named exactly and fixed, as at a commit, so every finding is about the same thing.
2. **Its brief:** what the thing is for, what it must satisfy and what it leaves out, as its kind holds it: a design's or change's Introduction, a record's Purpose and Goals, a skill's description and scope.
3. **Its governing standards:** its format and the standards of the skill that owns its kind, each cited by section or rubric item.
4. **Precedent:** the agreed documents and decision records it sits beside. A departure from precedent is a finding unless the thing says why.
5. **Coarser first.** Where a kind is made at levels, a coarser level is reviewed and agreed before the finer one is.
6. **Not taste.** Every finding ties to the brief, a standard or precedent, and says which.

[Back to contents](#contents)

### 4.3 Anchors

**Each finding is anchored to one thing a reader can open,** named exactly enough that a link or a search lands on it, and linked where the place has a link. The general anchors:

- **A section,** by its number or heading, such as §2.3.
- **A line or range** in a file, as `path:line` at the fixed commit.
- **A front matter field,** by its name, such as `ki-status`.
- **A rubric item,** by its code, such as DESIGN-4.
- **An id:** a requirement's, a decision's or a resource's, such as `design:wayfinder` or REVIEW-SHAPE.
- **The whole thing,** by its id or path, for a finding that is about no one part of it.

A finding about several places is several findings, unless it is about the whole. Each kind's skill adds the anchors its kind needs, as [4.7](#47-what-each-kind-adds) sets out.

[Back to contents](#contents)

### 4.4 A finding's shape

Every finding has these parts, in this order:

1. **Anchor,** as [4.3](#43-anchors) sets out.
2. **Kind,** one of five, in [Conventional Comments](https://conventionalcomments.org/)' sense:
   - `issue`: a problem with the thing as it stands, against its brief, a standard or precedent;
   - `suggestion`: an improvement the reviewer proposes;
   - `question`: something the reviewer cannot settle without the maker or the owner;
   - `note`: something to know, asking nothing;
   - `praise`: something to keep.
3. **Whether it blocks:** `blocking` or `non-blocking`. Only an issue or a question can block, and a blocking finding must be settled before the thing is approved.
4. **What to change:** for an issue or a suggestion, the change asked for, concrete enough to act on; for a question, the answer needed. A note or praise may leave it out.
5. **Confidence:** high, medium or low, and, when below high, what would raise it, such as a check run, a source read, a render seen or the owner's word.

**The reviewer runs the check where it can before writing the finding,** rather than leaving it to the owner: it renders the board, runs the test, follows the link. **Every review ends by saying what it did not check,** in a closing line or list, so that a clean review is never read as more than it was.

A finding is written as one list item:

```markdown
- **§2.3 · issue · blocking.** The empty state is not drawn for the list. **Change:** add it beside the loaded state. **Confidence:** medium; a render at phone width would raise it.
```

A review gives its findings in the order of their anchors, then its line of what was not checked.

[Back to contents](#contents)

### 4.5 The outcome

1. **Two outcomes, both the owner's.** **Approve:** accepted as it stands. **Accept with changes:** accepted, with the open findings turned into new work in a change document, or wherever the kind's skill routes its work, and the thing approved at once rather than rewritten, as the record format's ACCEPT-WITH-CHANGES sets for a record. There is no third outcome: a thing whose blocking findings are open stays awaiting review.
2. **Recorded where the thing changes,** in the field its format already gives it: a record's `ki-review`; a change document's `ki-status`, from `review` to `agreed`; and a design or standard through the change document that moves it. No review field is added to a document that has none.
3. **Findings go to the change document.** Where a change document moves the thing, its review is that change's review: blocking findings become its questions, the other issues and suggestions its gaps or notes, and notes and praise need nothing.
4. **Setting a thing aside is not a review outcome.** Shelving, replacing or withdrawing goes through the thing's own life cycle, by a change document.

[Back to contents](#contents)

### 4.6 One review perspective

Everything reviewable is either awaiting its owner or approved, so one list shows everything awaiting review, of every kind, and each is acted on with the same two outcomes, as the Wayfinder's review perspective does.

| Kind | Awaiting | Approved | Its review state is set by |
| --- | --- | --- | --- |
| Record | `ki-review: awaiting` | `ki-review: approved` | The [record format](standard-formats-record.md#42-review) |
| Change document | `ki-status: review` | `ki-status: agreed` | The [change format](standard-formats-change.md#41-front-matter) |
| Design | Its change in `review` | Its change `agreed`, moving the design's `ki-status` | The [design format](standard-formats-design.md#42-statuses) |
| Standard | Its change in `review` | Its change `agreed`, then landed | The [standard format](standard-formats-standard.md#44-how-a-change-lands) |
| Skill | Its guild change in `review` | Its guild change `agreed` | `ki-skills` |

[Back to contents](#contents)

### 4.7 What each kind adds

**A kind's skill adds anchors, governing standards and fields to a finding; it keeps the finding's shape and the two outcomes,** and cites this standard rather than restating it.

- **`ki-design`** adds the design anchors, a board code and region, a component by its name and level, a C4 element, and an API resource or operation, and reviews a design against the design format, its kind's levels and, for a visual design, the design system's floor.
- **`ki-design-system`** reviews each board of a round against the brief's rules and its rubric before the round is posted.
- **`ki-skills`**' REVIEW mode adds a candidate's disposition and roadmap treatment, and its Accept with changes routes the accepted candidates to the roadmap as the work it creates.
- **The [record format](standard-formats-record.md#42-review)** keeps a record's review state and turns an acceptance with changes into new work.
- **`ki-meeting`**'s review standard holds a review as a meeting: its brief, its verdicts on each part and how it closes.

[Back to contents](#contents)
