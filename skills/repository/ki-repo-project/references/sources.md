---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:12:00Z
ki-refresh: canonical · on-change
---

# Sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Project repository standard](standard-project-repository.md) and [the generated rubric](rubric.md).

The Project primary-structure contract is Harness-owned. Review it when adding or changing a primary structure, inheritance rule, or the Project/KB boundary.

[Back to contents](#contents)

## 2. Outside sources

None: the standard follows no outside specification.

[Back to contents](#contents)

## 3. Decisions

Kris's decisions behind the commit gate.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| NO-GATE a) | Kris's instruction settled the general Project gate as a staged, check-only `ki repo audit --skill ki-repo`. This bounded owner instruction is the delivery authority and creates no roadmap record. | 2026-10-22 | [4.3](standard-project-repository.md#43-commit-gate) | taken; its staged audit superseded by COMMIT-VS-CI a) |
| COMMIT-VS-CI a) | Kris chose that the `ki repo audit --skill ki-repo` of the inherited repository contract runs in CI, not at commit time | 2026-10-26 | [4.3](standard-project-repository.md#43-commit-gate) | taken |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-project-repository.md` was renamed [`standard-project-repository.md`](standard-project-repository.md) and reshaped to the standard format with its rules unchanged, its sections becoming Rules 4.1 to 4.4, and this file to the sources format, NO-GATE a) and COMMIT-VS-CI a) in its Decisions table. SKILL.md, the rubric items and the generated rubric follow. No rule changed and no outside source was refreshed.

On 22 October 2026 Kris’s NO-GATE a) instruction settled the general Project gate as a staged, check-only `ki repo audit --skill ki-repo`. The canonical composer publishes both package variants; GATE-1 checks the delegated content, while HOOK-1 through HOOK-4 retain the repository frame. This bounded owner instruction is the delivery authority and creates no roadmap record. The original delivery is `52a719eec9cd45592443b877541aa7599fe0cc23`; the brief’s `52a719ec` identifier does not resolve. The follow-up repair makes both hook attempts explicitly offline before any authentication or hosted evidence collection and tests the real repository session behind each hook variant. No external source was contacted.

[Back to contents](#contents)
