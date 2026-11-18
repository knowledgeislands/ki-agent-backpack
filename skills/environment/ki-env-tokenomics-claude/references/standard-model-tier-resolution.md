---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-status: in force
---

# Claude model-tier resolution standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Candidates](#41-candidates)
  - [4.2 Effort and model identity](#42-effort-and-model-identity)
  - [4.3 Before a route default moves](#43-before-a-route-default-moves)

## 1. Introduction

This is dated provider evidence for considering Claude models, not a portable policy, effective-session observation, or agent default. The portable `ki-env-tokenomics` purposes remain `frontier`, `reasoning`, `standard`, and `fast`. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Dated Claude model-family evidence for the portable purposes.

### 2.1 In scope

- The current candidate for each purpose and its default effort.
- Effort support and fixed model identities.
- What is needed before a KI route default moves.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable purposes themselves: `ki-env-tokenomics`.
- Effective model selection, which belongs to the runtime configuration.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Candidate** | A Claude model the provider positions for a purpose on a stated date; not a claim that a KI route exposes or should default to it. **Standard:** this one, [4.1](#41-candidates) |
| **Default effort** | The reasoning effort a candidate is considered at; it is model-dependent. **Standard:** this one, [4.2](#42-effort-and-model-identity) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Candidates

| Purpose | Current candidate | Why consider it | Default effort |
| ------- | ----------------- | --------------- | -------------- |
| `frontier` | Claude Fable 5.1 | Demanding reasoning and long-horizon agentic work | `high` |
| `reasoning` | Claude Opus 5.5 | Long-running coding and knowledge work | `medium` |
| `standard` | Claude Sonnet 5.5 | Faster balanced work | `high` |
| `fast` | Claude Haiku 4.5 | Focused work at the fastest tier | Not supported |

The [current Anthropic model overview](https://platform.claude.com/docs/en/models/overview) supports these identities and provider positioning as of 2026-09-30. It recommends starting with Opus 5.5 for most workloads and using Fable 5.1 where demanding work or evaluation warrants it. These rows are candidates, not a claim that KI's Claude Code route exposes or should default to any of them. Haiku 4.5 has a near-term retirement commitment and needs lifecycle rechecking before a durable fast-tier binding.

[Back to contents](#contents)

### 4.2 Effort and model identity

Effort is model-dependent: `high` is not a universal default, and Haiku 4.5 does not support the same effort control. [Anthropic's versioning guidance](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions) distinguishes fixed model identities from aliases; do not assume a dateless ID silently advances to a newer model.

[Back to contents](#contents)

### 4.3 Before a route default moves

Before moving a KI route default, verify runtime access and run representative coordination, judgment, and mechanical tasks at supported efforts. Record quality, corrections, latency, and cost evidence; provider claims alone do not establish local fit. Effective model selection belongs to the runtime configuration, not this skill.

[Back to contents](#contents)
