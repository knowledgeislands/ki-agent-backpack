---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources — where the Keystone standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house sources](#211-in-house-sources)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Keystone standard](standard-keystone.md), its [rubric](rubric.md), and [the bootstrap standard](standard-bootstrap.md) behind the BOOTSTRAP mode. Mode REFRESH reads this file, compares the standard and the guild purposes in the SKILL.md with the sources below, and records what it checked in the [Last review](#3-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

Keystone's guild rules have none: Keystone is Knowledge Islands' own, and the industry has no word for a guild of skills, as `ki-agentic-ecosystems`' guild card records. The bootstrap guidance follows in-house sources only.

### 2.1 Authoritative

Every source the bootstrap guidance follows is in-house.

#### 2.1.1 In-house sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ADR — [ADR-KI-HARNESS-012](../../../../docs/decisions/ADR-KI-HARNESS-012-compatible-harness-publication-and-governed-rubric-boundary.md) | backpack payload, capability, and native-rubric ownership | 2026-11-23 |
| HC — [Compatible harness decision, ADR-KI-HARNESS-012](../../../../docs/decisions/ADR-KI-HARNESS-012-compatible-harness-publication-and-governed-rubric-boundary.md) | backpack identity, capability identity, and activation boundary | 2026-11-23 |
| TK — installed `ki --help` surfaces | current public grammar, bootstrap, activation, local development, and diagnostics | 2026-11-23 |
| KR — `ki-repo` skill | `.ki.toml` and declared repository coverage | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

On 23 November 2026 REFRESH re-checked the in-house sources and nothing in the guidance changed. The ADR is still current, every `ki` command the guidance names exists in `tools-ki` 0.17.0, the latest tag, and `ki-repo` still owns the `.ki.toml` contract, with coverage kept separate from user activation. Keystone's guild rules follow no outside source.

**Watching:**

- Re-check the core user-skill set whenever bootstrap policy changes.
- Re-check the guidance if `ki backpack missing`, `outdated` or `search`, new in the command surface and not yet named, become part of bootstrap or activation.
- Re-check bare-name ambiguity and qualified capability input when multi-harness activation evolves.
- Re-check supported agent discovery and managed link locations when a runtime binding changes.
- Re-check acquisition, replacement, and uninstall wording, and the released-backpack mode, when backpack version selection is introduced or `tools-ki` changes how a release is pinned.
- Re-check the machine-readiness checklist when the chezmoi hook registration, the output-style link, the Capital's declared skill set or `ki-coordination`'s openers change, and fold in `ki doctor` once it carries the readiness checks.
- The ADR's text still says harness and names `knowledgeislands/ki-agentic-harness` where the skill says backpack; re-check the guidance when it is revised.

[Back to contents](#contents)
