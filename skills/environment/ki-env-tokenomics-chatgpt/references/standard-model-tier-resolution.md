---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-status: in force
---

# Codex model-tier resolution standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Role evidence](#41-role-evidence)
  - [4.2 Evaluation protocol](#42-evaluation-protocol)
  - [4.3 Source status](#43-source-status)

## 1. Introduction

This standard records dated, Codex-owned runtime evidence, not portable policy or an effective-model observation. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Dated Codex model-family evidence for the portable purposes.

### 2.1 In scope

- The approved operating roles, their portable purposes and dated family evidence.
- The evaluation protocol before a KI agent-fleet Codex default is recommended.
- The status of the positioning source.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable purposes themselves: `ki-env-tokenomics`.
- The effective session model and live runtime selection.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Operating role** | Main-thread orchestration, judgment worker or mechanical worker, each mapped to a portable purpose. **Standard:** this one, [4.1](#41-role-evidence) |
| **Dated family evidence** | The Codex model family a source positioned for a purpose on a stated date; it binds nothing. **Standard:** this one, [4.1](#41-role-evidence) |
| **Baseline case** | One of the three evaluation cases each candidate runs twice before a default is recommended. **Standard:** this one, [4.2](#42-evaluation-protocol) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Role evidence

The portable contract remains `frontier`, `reasoning`, `standard`, and `fast`.

`scripts/internal/model-tier-resolution.ts` maps the three approved operating roles without selecting a live model:

| Role | Portable purpose | Dated family evidence | Resolver result |
| --- | --- | --- | --- |
| Main-thread orchestration | `frontier` | Astra | `runtime-evidence` |
| Judgment worker | `reasoning` | Sol | `runtime-evidence` |
| Mechanical worker | `fast` | Luna | `runtime-evidence` |

Sol also has source-local evidence for `standard` work, without becoming a fixed role default. GPT-5.6 Terra remains an available previous-family cost candidate, not the current-family evidence for that purpose.

The evidence does not establish a one-to-one binding: it does not prove current availability, the effective session model, reasoning-effort support, price, latency, or that Sol is sufficient for every `frontier` task.

A repository `model_tier_bindings` value is therefore retained as an opaque advisory preference.

It is never parsed as a provider guarantee or used to authorise delegation, spending, or a live call.

[Back to contents](#contents)

### 4.2 Evaluation protocol

Before recommending a durable KI agent-fleet Codex default, run each baseline case twice at the common supported effort (planned baseline: `medium`), with no corrective prompting:

| Case | Required evidence |
| --- | --- |
| Deterministic extraction/classification | Exact assertions and return shape |
| Conflicting-governance judgment | Required evidence rubric, authority boundary, and return shape |
| Coordinator with three read-only lanes | Authority boundaries, integrated return shape, and delegation evidence |

For every run, record pass/fail for each assertion, evidence requirement, authority boundary, and return shape; latency; available input/output token evidence or an explicit unavailable result; and correction count.

Test one lower supported effort only after a candidate passes both baseline repetitions.

Do not calculate a composite score.

Recommend only the lowest-cost model and effort that passes both repetitions for that purpose; mixed, unavailable, or insufficient evidence produces `no default change`.

Live calls, runtime selection, and spending require separate user authority. A user's explicit choice for their personal Codex default is separate from a KI agent-fleet recommendation; it does not establish local-fit evidence for other agents.

[Back to contents](#contents)

### 4.3 Source status

The Astra/Sol/Luna positioning is planning evidence rechecked against the official [GPT-6 guide](https://developers.openai.com/api/docs/guides/latest-model) on 2026-09-30. It distinguishes GPT-6.1 Sol from the preceding GPT-6 Sol, and does not establish effective Codex-session availability or a KI route default.

GPT-6.1 Sol supports `medium` as its default reasoning effort and `high` for harder tasks. A personal Codex setting is a runtime choice, not a portable skill rule; candidate agent-fleet defaults still require the evaluation protocol above.

[Back to contents](#contents)
