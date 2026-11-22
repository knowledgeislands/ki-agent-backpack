---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T00:20:00Z
ki-status: in force
---

# Model-tier standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 What a tier records](#41-what-a-tier-records)
  - [4.2 Claude candidates](#42-claude-candidates)
  - [4.3 Codex role evidence](#43-codex-role-evidence)
  - [4.4 Effort and model identity](#44-effort-and-model-identity)
  - [4.5 Before a tier default moves](#45-before-a-tier-default-moves)

## 1. Introduction

This standard holds the **dated model-tier evidence** for the portable model purposes: which Claude model, and which Codex model family, a provider positions for each purpose on a stated date, and what must happen before a KI default moves. It came here from the two tokenomics adapters, `ki-env-tokenomics-claude` and `ki-env-tokenomics-chatgpt`, under MODEL-TIERS a, which Kris took on 22 November 2026 at the Environment guild's sitting with the card "Move to ki-model-radar", because the radar already tracks the models and is refreshed weekly. The adapters and `ki-env-tokenomics` keep the four purposes and point here.

The evidence is advisory. It is not a portable policy, an observation of a session's effective model, or an agent default. The [radar snapshot](radar.toml) holds the identity and lifecycle evidence the tables rest on, and [the sources file](sources.md) the refresh ledger.

[Back to contents](#contents)

## 2. Scope

Dated candidates for each portable purpose, for each runtime family the house uses.

### 2.1 In scope

- The current candidate for each purpose, for Claude and for Codex, with its default effort where the provider states one.
- Effort support and fixed model identities.
- The one rule for what is needed before a KI default moves to another model.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable purposes themselves, `frontier`, `reasoning`, `standard` and `fast`, and a repository's `model_tier_bindings`: `ki-env-tokenomics`.
- Each runtime's filesystem evidence: the tokenomics adapters.
- A session's effective model and live runtime selection, which belong to the runtime configuration.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Candidate** | A model a provider positions for a purpose on a stated date; not a claim that a KI route exposes or should default to it. **Standard:** this one, [4.1](#41-what-a-tier-records) |
| **Operating role** | Main-thread orchestration, judgment worker or mechanical worker, each mapped to a portable purpose. **Standard:** this one, [4.3](#43-codex-role-evidence) |
| **Default effort** | The reasoning effort a candidate is considered at; it is model-dependent. **Standard:** this one, [4.4](#44-effort-and-model-identity) |
| **Baseline case** | One of the three evaluation cases each candidate runs twice before a default moves. **Standard:** this one, [4.5](#45-before-a-tier-default-moves) |

[Back to contents](#contents)

## 4. Rules

What a tier records, the candidates for each runtime family, effort and identity, and the one movement rule.

### 4.1 What a tier records

A tier row names a purpose, its dated candidate and the evidence behind it. It binds nothing: it does not prove current availability on a route, the effective session model, reasoning-effort support, price or latency, or that one candidate suits every task of its purpose. A repository `model_tier_bindings` value stays an opaque advisory preference, never parsed as a provider guarantee or used to authorise delegation, spending or a live call.

Each candidate is a model the [radar snapshot](radar.toml) records, and a weekly REFRESH rechecks the rows with the snapshot.

[Back to contents](#contents)

### 4.2 Claude candidates

| Purpose | Current candidate | Why consider it | Default effort |
| ------- | ----------------- | --------------- | -------------- |
| `frontier` | Claude Fable 5.2 | Demanding reasoning and long-horizon agentic work | `high` |
| `reasoning` | Claude Opus 5.5 | Long-running coding and knowledge work | `medium` |
| `standard` | Claude Sonnet 5.5 | Faster balanced work | `high` |
| `fast` | Claude Haiku 5.5 | Focused work at the fastest tier | `medium` |

The [current Anthropic model overview](https://platform.claude.com/docs/en/models/overview) supports these identities, default efforts and provider positioning as of 2026-11-22. It recommends starting with Opus 5.5 for most workloads and Fable 5.2 for demanding reasoning and long-horizon agentic work, or where Opus 5.5 at a higher effort still falls short. Claude Haiku 4.5, the earlier `fast` candidate, is now listed among older models. These rows are candidates, not a claim that KI's Claude route exposes or should default to any of them.

[Back to contents](#contents)

### 4.3 Codex role evidence

`ki-model-radar`'s `scripts/internal/model-tier-resolution.ts` maps the three operating roles to portable purposes and dated family evidence, without selecting a live model:

| Role | Portable purpose | Dated family evidence | Resolver result |
| --- | --- | --- | --- |
| Main-thread orchestration | `frontier` | Astra | `runtime-evidence` |
| Judgment worker | `reasoning` | Sol | `runtime-evidence` |
| Mechanical worker | `fast` | Luna | `runtime-evidence` |

Sol also has source-local evidence for `standard` work, without becoming a fixed role default. GPT-5.6 Terra remains an available previous-family cost candidate, not the current-family evidence for that purpose.

The Astra, Sol and Luna positioning is planning evidence rechecked against the official [GPT-6 guide](https://developers.openai.com/api/docs/guides/latest-model) on 2026-11-22. The guide now covers GPT-6.2 and names only GPT-6.2 Astra, for the most demanding tasks, and GPT-6.2 Sol, for complex work at lower cost, and advises starting a new integration at `medium` effort; it no longer names Luna, which the radar's model-catalogue evidence still lists as `gpt-6-luna`. None of this establishes effective Codex-session availability or a KI route default.

[Back to contents](#contents)

### 4.4 Effort and model identity

Effort is model-dependent: `high` is not a universal default, and an older model may not support the effort control its successor does. [Anthropic's versioning guidance](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions) distinguishes fixed model identities from aliases: from the 4.6 models on, a dateless Claude ID names one fixed snapshot and an update ships under a new ID, while an earlier model's alias points to its latest dated snapshot. Do not assume, for any provider, that an ID silently advances to a newer model.

[Back to contents](#contents)

### 4.5 Before a tier default moves

This is the one tier-movement rule, for every runtime family. Before moving a KI route or agent-fleet default to another model, verify runtime access, then run each baseline case twice at the common supported effort (planned baseline: `medium`), with no corrective prompting:

| Case | Required evidence |
| --- | --- |
| Deterministic extraction or classification | Exact assertions and return shape |
| Conflicting-governance judgment | Required evidence rubric, authority boundary and return shape |
| Coordinator with three read-only lanes | Authority boundaries, integrated return shape and delegation evidence |

For every run, record pass or fail for each assertion, evidence requirement, authority boundary and return shape; latency; the available input and output token evidence or an explicit unavailable result; and the correction count. Test one lower supported effort only after a candidate passes both baseline repetitions. Do not calculate a composite score.

Recommend only the lowest-cost model and effort that passes both repetitions for that purpose; mixed, unavailable or insufficient evidence produces `no default change`. Provider claims alone do not establish local fit, as the radar's [movement review](standard-model-radar.md#44-evidence-and-movement-review) also holds.

Live calls, runtime selection and spending need separate user authority. A user's explicit choice of their personal default is separate from a KI agent-fleet recommendation and does not establish local-fit evidence for other agents.

[Back to contents](#contents)
