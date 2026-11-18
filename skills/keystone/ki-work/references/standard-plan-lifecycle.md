---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:43:37Z
ki-status: in force
---

# Readiness procedure

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Identity and timestamps](#41-identity-and-timestamps)
  - [4.2 Shaping to Ready](#42-shaping-to-ready)
  - [4.3 The Ready decision](#43-the-ready-decision)
  - [4.4 What planning never does](#44-what-planning-never-does)

## 1. Introduction

The procedure `ki-work plan` follows to shape a selected Now or Next record and make it Ready. The kind and boundaries live in [the mode](mode-plan.md). The decisions behind these rules are in the [sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

How a selected record is shaped and made Ready.

### 2.1 In scope

- Resolving the record's identity and keeping its timestamps.
- Shaping a draft record in place, and replanning.
- The Ready decision and its approval.

[Back to contents](#contents)

### 2.2 Out of scope

- Capture, adoption and selection: [the next-work procedure](standard-next-work.md).
- Delivery: [the implementation procedure](standard-implementation.md).
- Closure, cancellation and pruning: [the acceptance procedure](standard-acceptance.md).
- Durable delegation packets: `ki-delegation`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Ready** | The status a shaped `draft` record reaches only after explicit approval, set atomically for every named record. **Standard:** this one, [4.2](#42-shaping-to-ready) |
| **Replan** | Changing an approved plan: a ready record returns to `draft`, and in-progress work keeps its baseline and delivered evidence while its remaining plan is replaced, under renewed approval. **Standard:** this one, [4.2](#42-shaping-to-ready) |

[Back to contents](#contents)

## 4. Rules

The steps run in order: identity first, then shaping, then the Ready decision.

### 4.1 Identity and timestamps

`ki-work plan` resolves only an already-published identifier. It never allocates or reserves a new one. Re-resolve the named record and its source revision immediately before mutation; stop and reload if either changed after inspection.

For every shaped local record, preserve `created_at` and advance `updated_at` to the later of the current UTC second or one second after its observed value. Compare the observed source revision immediately before publication and refuse absent or malformed timestamps or any source drift. Read-only planning does not advance timestamps; remote adapters project provider-native values.

[Back to contents](#contents)

### 4.2 Shaping to Ready

`ki-work plan <work>...` operates only records that `ki-work next` has selected into `now` or `next`.

1. Run the base selection audit, then read the configured adapter literal and its required owner table. `roadmap` uses a fresh record in `docs/roadmap/`; `kb-streams` uses a fresh flat record in `Streams/Roadmap/`. Do not infer either from repository shape. `github-issues` and `linear` fail closed before reads or writes because remote process execution is not implemented.
2. Require a `draft` status, confirmed delivery boundary, understood dependencies, and a checkable verification method. Refuse `status: triage`: capture is not adoption, and only adopted Now or Next work may become Ready. A held record is shaped only after release.
3. Shape the record in place. Every roadmap item gains Current state, Steps, Files touched, Verify, Dependencies / blocks, and Delegation when useful.
4. When bounded parallel lanes would help, use runtime subagents while retaining orchestration and review. If `ki-delegation` is active in the same scope, read its packet standard before creating a durable delegation packet; it does not create a separate lifecycle command.
5. Re-audit, stop for review, and atomically set every named record to `ready` only after explicit approval. When an approved plan must change, replan: return a ready record to `draft`; for in-progress work keep its baseline and delivered evidence and replace only the remaining plan, under renewed approval. Commit that state with the coherent planning change; do not require a standalone lifecycle commit. When capture, shaping, and approval occur in one coherent operation, the item's first committed form may already be `ready`.

[Back to contents](#contents)

### 4.3 The Ready decision

At the Ready decision, use the runtime's structured ask-user-questions interface when available. Include the canonical item link, the planned outcome and verification, any unresolved concern, and the consequence of approval in the question. Put an evidence-backed recommendation first among selectable responses and briefly explain it; recommend keeping the item in draft when readiness is uncertain. If the interface cannot render the item link, give a clickable link in adjacent prose; if it has no question tool, ask in prose with the same context. A preselected response never counts as approval.

[Back to contents](#contents)

### 4.4 What planning never does

`ki-work plan` never captures a new record, changes queue position, begins delivery, or records closure. `ki-work next` owns capture and adoption; `ki-work implement` owns `ready` → `in-progress` → `awaiting-review`; `ki-work accept` owns delivery `awaiting-review` → `done`, cancellation, and explicit pruning.

[Back to contents](#contents)
