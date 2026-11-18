---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:32:50Z
ki-status: in force
---

# Delegation-packet standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Packets](#41-packets)
  - [4.2 Packet shape](#42-packet-shape)
  - [4.3 Authority and isolation](#43-authority-and-isolation)
  - [4.4 Quality bar](#44-quality-bar)
  - [4.5 Mechanical boundary](#45-mechanical-boundary)

## 1. Introduction

The durable packet that makes an approved high-risk handoff reviewable inside one work record: its shape, its authority and isolation, and its quality bar. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Opted-in delegation packets inside approved work records.

### 2.1 In scope

- When a packet is added and what it records.
- The packet's sections and each worker's fields.
- Least authority, isolation and the cold-agent quality bar.

[Back to contents](#contents)

### 2.2 Out of scope

- How any delegated run is launched, reports, coordinates and is watched: [the background-run standard](standard-background-runs.md).
- Worker creation, task selection, sandbox, permissions, model choice, scheduling and result integration, which the executing runtime and process supply.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Delegation packet** | An explicit, durable brief for high-risk delegated work inside one approved roadmap record. **Standard:** this one, [4.1](#41-packets) |
| **Worker subsection** | A `Worker:` subsection of the packet carrying one lane's labelled fields. **Standard:** this one, [4.2](#42-packet-shape) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Packets

A delegation packet is an explicit, durable brief for high-risk delegated work inside one approved roadmap record.

It translates a runtime subagent brief into a reviewable artifact before workers are dispatched.

Add a packet when mutation risk, cross-agent handoff, or later audit need makes durable authority and escalation evidence valuable. Every delegated run, routine or high-risk, follows the [background-run standard](standard-background-runs.md); the packet adds the durable record on top of it. A packet does not replace the work item’s plan, authority, baseline, review packet, or acceptance decision. The standard defines the durable packet; the executing runtime and process supply worker creation, task selection, sandbox, permissions, model choice, scheduling, and result integration.

[Back to contents](#contents)

### 4.2 Packet shape

An opted-in packet uses this structure inside the work item’s `## Delegation` section:

```markdown
## Delegation

### Locked decisions

- Decision that workers must not reopen.

### Escalate

- Decision that workers must return to the orchestrator.

### Worker: research-sources

- **Deliverable:** Primary-source evidence for the named unknown.
- **Inputs:** The named questions and authoritative source locators.
- **Scope:** Named primary sources only; no repository or external writes.
- **Authority:** Read the named sources; perform no repository or external writes.
- **Isolation:** Read-only worker context with no write-capable tools.
- **Verify:** Coordinator checks every source and conclusion.
- **Return:** Concise findings, source links, and unresolved conflicts; no raw browsing transcript.
- **Checkpoint:** Return after the source set is complete.
```

The packet contains non-empty `Locked decisions` and `Escalate` sections and at least one `Worker:` subsection.

Each worker subsection contains these non-empty fields:

- **Deliverable:** one bounded outcome;
- **Inputs:** source artifacts, locators, conventions, and decisions the cold worker needs;
- **Scope:** the exact file or external-system boundary and excluded side effects, including `None` for read-only research;
- **Authority:** allowed actions and prohibited side effects;
- **Isolation:** the runtime-neutral sandbox or worktree boundary;
- **Verify:** the check the coordinator will apply;
- **Return:** the concise result and evidence format;
- **Checkpoint:** the condition at which the worker stops and returns control.

A worker handed to a new agent session of its own, rather than run as a background agent, also carries a **Session:** field: the thread line the session takes and the instruction to rename itself to it as its first act, under the background-run standard's [Prompt shape](standard-background-runs.md#45-prompt-shape) (OPENER-NAME), and the instruction to delegate its work to its agent host's own subagents, stay responsive while they run and check what they return before posting it (OPENER-DELEGATE).

[Back to contents](#contents)

### 4.3 Authority and isolation

Grant the least authority and tool access that can complete the lane. The worker brief may narrow inherited runtime permissions but never expands the work record’s authority. State external effects explicitly; filesystem scope alone does not govern network calls, messages, deployments, or other systems.

Choose the strongest practical isolation for the lane: read-only for research, an exclusive non-overlapping write boundary in a shared worktree, or an isolated worktree or sandbox when writes could interfere. If the runtime cannot enforce the required boundary, reduce the lane to a safer read-only task or keep it with the coordinator.

When a worker may change a shared worktree, its brief names an exclusive file boundary and the worker retains a thread-local touched-path set as required by `ki-git`. If it must stage outside the shared commit window, the brief also names a unique temporary Git index path, passed explicitly on each preparatory staging command. The index is staging isolation, not working-file isolation: the worker may commit its own uncontested paths only through `ki-git`'s revalidation and serialized shared-`HEAD` commit window.

[Back to contents](#contents)

### 4.4 Quality bar

The packet must be cold-agent ready: a worker with no hidden conversation context can begin from the brief, knows what is fixed, and knows when to stop.

The packet makes only its durable governance boundaries explicit. Runtime and process guidance owns model selection, orchestration, worker capacity, and result integration.

[Back to contents](#contents)

### 4.5 Mechanical boundary

The native rubric checks only the opt-in marker, exact required headings, and non-empty labelled worker fields.

It cannot decide whether the durable-packet threshold is met, authority is appropriately narrow, isolation is enforceable, a decision is truly locked, or a verification gate is adequate; those are judgment review.

CONFORM does not rewrite authored packet content.

It never supplies semantic packet content.

[Back to contents](#contents)
