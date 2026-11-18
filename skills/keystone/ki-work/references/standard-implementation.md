---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:43:37Z
ki-status: in force
---

# Implementation procedure

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Preflight](#41-preflight)
  - [4.2 Start one delivery](#42-start-one-delivery)
  - [4.3 Execute the approved plan](#43-execute-the-approved-plan)
  - [4.4 Verify and prepare review](#44-verify-and-prepare-review)
  - [4.5 Window authority](#45-window-authority)
  - [4.6 Controlled preflight model](#46-controlled-preflight-model)

## 1. Introduction

This is the on-demand procedure for `ki-work implement`: delivering one approved Ready record to review. The kind, boundary, and relationship map live in [the mode](mode-implement.md). The decisions behind these rules are in the [sources file](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

How one approved record is delivered and brought to review.

### 2.1 In scope

- Preflight before any lifecycle change.
- Starting one delivery and its immutable baseline.
- Executing the approved plan, delegation included.
- Verification and the review packet.
- An unattended window's authority to start delivery.
- The controlled preflight model.

[Back to contents](#contents)

### 2.2 Out of scope

- Selection: [the next-work procedure](standard-next-work.md).
- Readiness: [the readiness procedure](standard-plan-lifecycle.md).
- Human review, closure and pruning: [the acceptance procedure](standard-acceptance.md).
- The review packet's schema: `ki-work-roadmap`'s work-item format.
- Delegation packets and background runs: `ki-delegation`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Baseline** | The full current `HEAD` commit ID recorded when delivery starts, the immutable starting evidence. **Standard:** this one, [4.2](#42-start-one-delivery) |
| **Review packet** | The six `###` headings under a roadmap record's `## Review`, in fixed order, that bring delivered work to review. **Standard:** `ki-work-roadmap`'s [work-item format](../../../work/ki-work-roadmap/references/standards-work-item-format.md#awaiting-review) |

[Back to contents](#contents)

## 4. Rules

The steps run in order; 4.5 and 4.6 hold what applies around them.

### 4.1 Preflight

1. Resolve the physical git root and the selected adapter through `ki-work`; never infer an adapter from filesystem shape.
2. Stop before execution if the adapter is unresolved or remote: remote discovery, authentication, stale-read checks, and every write remain unavailable.
3. Resolve exactly one canonical record through the selected local adapter. For the roadmap adapter, it is one regular work-item file under `docs/roadmap/` or `Streams/Roadmap/`.
4. Confirm that the item is `ready`, is explicitly approved for implementation, has satisfied dependencies, and contains a bounded plan with stated verification.
5. Confirm the repository's applicable read-only gates are clean before changing lifecycle state.
6. Read the item boundary, locked decisions, escalation points, delegation instruction, and stop conditions.

Stop if any precondition is missing or ambiguous.

Do not select another candidate, promote a horizon, invent plan detail, or treat a recap as approval.

[Back to contents](#contents)

### 4.2 Start one delivery

1. Record the full current `HEAD` commit ID as the immutable baseline.
2. Transition only the approved item to `in-progress`, moving it to `horizon: now` in the same change if it was at Next. A held ready or in-progress record resumes only after `ki-work next` releases it.
3. Begin implementation without requiring a standalone lifecycle-start commit. The `in-progress` update may land with the first coherent implementation change, or the completed delivery may land directly from the previously committed `ready` state to `awaiting-review` when every review gate is satisfied.

The baseline describes the starting evidence; it is not a substitute for verification.

[Back to contents](#contents)

### 4.3 Execute the approved plan

Follow the checked plan steps in order and preserve its boundary.

Use runtime subagents only when the plan explicitly calls for delegation, or when an explicit authority record permits it. Delegation never supplies that authority.

In territory or Project coordinating work under `ki-coordination`, every implementation unit goes to a detached background run under `ki-delegation`. An in-session subagent does not satisfy that boundary. The coordinator keeps the owner's conversation available, sequences dependencies, resolves escalations and receives the verified delivery. A background run implementing one record may use bounded runtime subagents within the approved plan or explicit authority; it retains integration and final verification of that record.

Apply `ki-delegation`'s suitability test and create or confirm a durable delegation packet where that contract requires one before spawning. Every delegated unit must retain the packet's inputs, bounded file or system scope, authority, isolation, locked decisions, escalation boundary, definition of done, verification gate, return contract, and checkpoint.

Use the runtime's available sandbox, tool, permission, context, or worktree controls to enforce the packet as narrowly as practical. Conversational bounded work and a background run may continue locally or serially where further delegation is unsuitable. A coordinating session still dispatches its unit; if detached execution is unavailable or unsafe, it reports the blocker instead of doing the unit in-session.

Review and integrate every result before the next dependent unit.

Stop rather than infer authority when scope must expand, a decision is escalated, verification fails, external coordination is needed, or an irreversible action is proposed.

For each local lifecycle or semantic record mutation, preserve `created_at` and advance `updated_at` to the later of the current UTC second or one second after its observed value. Compare the observed source revision immediately before publication and stop on source drift, a absent or malformed timestamps. Verification-only reads do not advance timestamps; remote adapters project provider-native values.

[Back to contents](#contents)

### 4.4 Verify and prepare review

Run the item's stated verification after integration and inspect its actual results.

For a roadmap record, insert `## Review` immediately before `## Discussion`, with these exact `###` headings in this order. The roadmap work-item format owns this schema; do not create a parallel version.

1. `Delivered` — approved boundary and exclusions, with immutable baseline and resulting evidence.
2. `Change Summary` — concrete changed files, material decisions, and approved deviations.
3. `Verification` — exact gates and outcomes.
4. `Outstanding concerns` — unresolved, unchecked, or failing issues, or an explicit none.
5. `Post-change review` — a fresh assessment of goal, scope, regression risk, and acceptance readiness.
6. `Mini recap` — item-scoped delivery, verification, concerns, and proposed learning routes without automatic promotion.

Set the record to `awaiting-review` only when all required steps are marked complete, all required checks pass, the approved scope has held, required delegation is authorised and integrated, and the canonical review packet is complete. Add the packet under `## Review` in the canonical roadmap item only when the resolved local adapter uses that record shape.

Then stop.

`ki-work accept` owns human review, terminal closure, retention, and explicit pruning.

[Back to contents](#contents)

### 4.5 Window authority

An unattended window's recorded grant, under `ki-coordination`, may authorise a named record of a frozen wave to enter this procedure only when it expressly grants that delivery.

It never makes a vague plan executable, and it does not make closure automatic unless the grant names closure for that wave, under `ki-work accept`.

[Back to contents](#contents)

### 4.6 Controlled preflight model

`scripts/internal/implementation-cycle.ts` exposes a pure no-write preflight model. Its focused fixtures cover selected-adapter resolution, the remote stop, one canonical ready record, immutable baseline, the `ready` → `in-progress` → `awaiting-review` transitions, completed steps, scope and gate stops, delegated-work authority, verification, and the exact acceptance handoff headings. It does not resolve a live adapter, edit a record, run a command, or contact a remote system.

[Back to contents](#contents)
