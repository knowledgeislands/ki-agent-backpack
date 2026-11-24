---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — Linear adapter

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The outside sources behind [the Linear adapter standard](standard-linear.md) and its [rubric](rubric.md). Mode REFRESH reads this file, re-reads the sources below, and records what it checked in the [Last review](#3-last-review) block.

The adapter standard is normative for KI configuration, migration stops, and no-execution boundary. Linear documentation is primary evidence for remote capability and behaviour; it does not prove UUID persistence through a team move or authorise KI process execution.

[Back to contents](#contents)

## 2. Outside sources

The provider's own documentation is the evidence for remote capability and behaviour.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Teams][workflow] | team-specific workflow values and automatic archive | 2026-11-23 |
| [Issues][move] | mutable locators, aliases, team moves, and affected fields | 2026-11-23 |
| [Delete and archive issues][retention] | automatic archive, deletion, recovery, and retention | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read every source with the docs index. Team-specific workflows, the team-move section, automatic archiving and the 30-day recovery of deleted issues are unchanged, and Linear's new pointer to its MCP server for agents leaves the adapter's no-execution boundary in place. The adapter still treats displayed identifiers as mutable locators and remains fail-closed.

**Watching:**

- Whether Linear brings back a page that sets out issue statuses: on 23 November 2026 the docs index still lists none, and the Issue properties page still has no body.
- Whether a team identifier change, now named on the Teams page, gives issues new identifiers as a team move does; Linear does not say.

[Back to contents](#contents)

[workflow]: https://linear.app/docs/teams
[move]: https://linear.app/docs/creating-issues#move-an-issue-to-another-team
[retention]: https://linear.app/docs/delete-archive-issues
