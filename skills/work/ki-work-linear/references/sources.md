---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:54:38Z
ki-refresh: external-spec · monthly
---

# Sources — Linear adapter

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The outside sources behind [the Linear adapter standard](standard-linear.md) and its [rubric](rubric.md). Mode REFRESH reads this file, re-reads the sources below, and records what it checked in the [Last review](#4-last-review) block.

The adapter standard is normative for KI configuration, migration stops, and no-execution boundary. Linear documentation is primary evidence for remote capability and behaviour; it does not prove UUID persistence through a team move or authorise KI process execution.

[Back to contents](#contents)

## 2. Outside sources

The provider's own documentation is the evidence for remote capability and behaviour.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Teams][workflow] | team-specific workflow values and automatic archive | 2026-11-15 |
| [Issues][move] | mutable locators, aliases, team moves, and affected fields | 2026-11-15 |
| [Delete and archive issues][retention] | automatic archive, deletion, recovery, and retention | 2026-11-15 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the adapter's rules follow its outside sources and `ki-work`'s adapter contract.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 REFRESH's precondition was brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Work guild: from an installed copy it redirects to the backpack. No criterion changed and no outside source refreshed.

On 18 November 2026 the Work guild's review, from the Cairn summit's change 10, brought the standard and this file into `ki-authoring`'s formats: the standard was renamed `standard-linear.md` and its rules placed, unchanged, under numbered sections, and this file took the sources format. No rule changed and no outside source was refreshed.

On 2026-11-15, every source was re-read. Linear had moved two pages. The Issue status page now redirects to an Issue properties page with no body, so the workflow row points to the Teams page, which says workflows can be customised per team and that each team's settings hold its statuses, auto-close and auto-archive. The Edit issues page is gone, and team moves are now a section of the Issues page. That section still says a move gives a new issue identifier and URL, old URLs redirect, old identifiers stay searchable, and cycles, team labels and projects may be cleared or removed while status maps to the destination team's closest workflow state. It now adds that relations and priority stay, and that open issues moved by someone outside a triage team go to triage. Archiving is still automatic with no manual action, and deleted items are still recoverable for 30 days. Nothing here changes the standard. The adapter still treats displayed identifiers as mutable locators and remains fail-closed.

On 2026-09-26, Linear still documented team-specific workflows, a new issue identifier and URL after a team move, old-locator search and redirects, and destination-field remapping or removal. Archiving remains automatic, while deleted items remain recoverable for 30 days. The adapter therefore continues to treat displayed identifiers as mutable locators and remains fail-closed.

**Watching:**

- Whether Linear brings back a page that sets out issue statuses.

[Back to contents](#contents)

[workflow]: https://linear.app/docs/teams
[move]: https://linear.app/docs/creating-issues#move-an-issue-to-another-team
[retention]: https://linear.app/docs/delete-archive-issues
