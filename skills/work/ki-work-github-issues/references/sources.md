---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:54:38Z
ki-refresh: external-spec · monthly
---

# Sources — GitHub Issues adapter

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The outside sources behind [the GitHub Issues adapter standard](standard-github-issues.md) and its [rubric](rubric.md). Mode REFRESH reads this file, re-reads the sources below, and records what it checked in the [Last review](#4-last-review) block.

The adapter standard is normative for KI configuration, migration stops, and no-execution boundary. GitHub documentation is primary evidence for remote capability and behaviour; it does not authorise KI process execution.

[Back to contents](#contents)

## 2. Outside sources

The provider's own documentation is the evidence for remote capability and behaviour.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Issue dependencies][dependencies] | blocker relation semantics and permissions | 2026-11-15 |
| [Sub-issues][subissues] | hierarchy distinct from blockers | 2026-11-15 |
| [Issue fields][fields] | account-wide (organisation or user) versus project-scoped metadata planes | 2026-11-15 |
| [Close an issue][close] | closure state and permissions | 2026-11-15 |
| [Transfer an issue][transfer] | mutable locator, redirect, retained/missing metadata | 2026-11-15 |
| [Delete an issue][delete] | permanent Issue deletion, distinct from project-item archive | 2026-11-15 |
| [Issues REST API][api] | Issue-versus-pull-request filtering and API boundary | 2026-11-15 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the adapter's rules follow its outside sources and `ki-work`'s adapter contract.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Work guild's review, from the Cairn summit's change 10, brought the standard and this file into `ki-authoring`'s formats: the standard was renamed `standard-github-issues.md` and its rules placed, unchanged, under numbered sections, and this file took the sources format. No rule changed and no outside source was refreshed.

On 2026-11-15, every source was re-read. GitHub still documents dependencies and sub-issues as separate relationships with their own commands, issue fields as the source of truth and project fields as scoped to one project, transfers as redirecting the old URL and keeping only the labels and milestones the target repository already has, permanent Issue deletion as distinct from project-item archive, and REST Issues endpoints as able to return pull requests. Two things changed without touching the standard: issue fields can now be defined for a user account as well as an organisation, so the fields row now says account-wide; and transferring an Issue now needs at least the new Moderate role in both repositories rather than write access. The dependencies page still names no permission for adding a blocker. The adapter still treats displayed references as mutable locators and remains fail-closed.

On 2026-09-26, GitHub still documented dependencies and sub-issues as separate relationships, organisation issue fields and project fields as distinct metadata planes, transfers as redirecting old URLs while moving an open Issue, permanent Issue deletion as distinct from project-item archive, and REST Issues endpoints as able to return pull requests. The adapter therefore continues to treat displayed references as mutable locators and remains fail-closed.

**Watching:**

- How the Moderate role reaches other Issue operations.

[Back to contents](#contents)

[dependencies]: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies
[subissues]: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues
[fields]: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-your-organization
[close]: https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue
[transfer]: https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/transferring-an-issue-to-another-repository
[delete]: https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/deleting-an-issue
[api]: https://docs.github.com/en/rest/issues/issues
