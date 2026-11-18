---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:18:00Z
ki-refresh: canonical · on-change
---

# Sources for the KI Specifications structure standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house](#211-in-house)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the KI Specifications structure standard](standard-specifications.md) and [the generated rubric](rubric.md).

This deliberately small standard is derived from the live `knowledgeislands/ki-specifications` repository and the Harness skill-taxonomy decision. It has no external specification source: KI Specifications is itself the canonical authority being structurally described.

[Back to contents](#contents)

## 2. Outside sources

The standard follows the canonical repository it describes and the Harness decision that places the skill.

### 2.1 Authoritative

The house's own sources only.

#### 2.1.1 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| `knowledgeislands/ki-specifications` working tree | Current stable top-level areas | 2026-07-27 |
| `ADR-KI-HARNESS-SKILLS-006` | Repo-structure skill taxonomy and mutual exclusion | 2026-07-27 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| COMMIT-VS-CI a) | Kris chose that the `ki-repo-specifications` audit, tests and builds belong to the manual gate and CI, not the commit gate | 2026-10-26 | [4.2](standard-specifications.md#42-commit-gate) | taken |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-specifications.md` was renamed [`standard-specifications.md`](standard-specifications.md) and reshaped to the standard format with its rules unchanged, its opening identity and areas becoming Rules 4.1 and its commit gate 4.2, and this file to the sources format, COMMIT-VS-CI a) in its Decisions table. SKILL.md, the rubric items, the test and the generated rubric follow. No rule changed and no outside source was refreshed.

Review, 2026-07-27 — confirmed the keyless structural identity and seven top-level areas against the canonical repository while moving the skill to the shared catalogue/session contract. KIP/KIS internals, lifecycle, numbering, and conformance semantics remain in the canonical repository until they have enough operational evidence to become reusable governance.

**Watching:** KIP and KIS internals, lifecycle, numbering and conformance semantics, for operational evidence enough to factor a stable rule into this skill.

[Back to contents](#contents)
