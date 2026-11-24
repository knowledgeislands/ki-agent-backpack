---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Work-package sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the work-package standard](standard-work-package.md), [the role standard](standard-roles.md) and its [migration file](migration-roles.md), and the generated [rubric](rubric.md). The standards are owned in house, so the sources are the house's own designs rather than outside specifications.

[Back to contents](#contents)

## 2. Outside sources

The designs and skills the standards draw on.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Local checkpoint standard and focused fixtures | House-owned active-only schema, explicit removal authority, and negative-path safety evidence; not a completed reconstruction outcome | 2026-09-15 |
| The `ki.ways-of-working` work-package design note and decisions log in Knowledge Islands Principal, now `ki.prj.ways-of-working` | The five-file package, routing description, message queue and important flag, size limits, progressive reveal and the rename to `ki-work-package` | 2026-10-31 |
| `ki-recap` | User-facing recap and durable learning boundary | 2026-08-06 |
| `ki-repo` | Optional capability declaration and generic working-area ownership | 2026-08-06 |
| [Role-catalogue brief](https://github.com/krisb/dotfiles/blob/2fe13be/+/_WORK/personal.reg.household-terra/housekeeping/role-catalogue.brief.md), the `ki.reg.guilds` roles design and decisions log | The role standard: catalogue, tiers, glyphs, `role` and `workers` fields, thread line and the role migration file | 2026-11-07 |
| The work package format change, phase 1, `01-work-package-format.change.md` in the Agora store's `agora.sop.main` package | The store location, the package shape, the state in `_index.md`, change documents, `repositories:`, messages through the store and the tidy | 2026-11-09 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, confirmed that the work-package and role standards, the skill's description and the rubric agree with the house's current practice, including messages going by Orca mail. The standards follow no outside specification: their sources are the house's own designs and skills, so no outside source was refreshed. Those in-house sources were last re-read on 9 November 2026, when the work package format change, phase 1, was reviewed.

**Watching:**

- RECORD-2 does not yet enforce the `<territory folder>/<repository>` form of each `ki-repositories` entry that [the entry file](standard-work-package.md#44-the-entry-file) asks for.
- RECORD-2 warns, rather than fails, on an actor named in more than one seat across the store's packages, so that a live case does not fail the store's audit before it is converted; watch for when the warning can become a failure.

[Back to contents](#contents)
