---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:26:09Z
ki-status: in force
---

# Portable subagent roles standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Purpose](#41-purpose)
  - [4.2 Required semantic evidence](#42-required-semantic-evidence)
  - [4.3 Record and projections](#43-record-and-projections)
  - [4.4 Boundary](#44-boundary)

## 1. Introduction

The runtime-neutral contract for a portable subagent role: what it must state, where its record lives, and which questions belong to the runtime adapters and hosts. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The semantics of a portable subagent role.

### 2.1 In scope

- The role's identity, selection, instructions, lane, grounding, hand-offs, orchestration and outcome evidence.
- Which projection carries the role record, and how other projections relate to it.
- The boundary between the role and its runtime adapters.

[Back to contents](#contents)

### 2.2 Out of scope

- Each runtime's serialization and its fields: Claude Code Markdown/YAML in `ki-subagents-claude`, Codex standalone TOML in `ki-subagents-chatgpt`.
- Installation, publication, activation, effective settings and runtime execution, which are host and runtime questions.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Portable subagent role** | A runtime-neutral delegation contract for a subagent, with no serialization of its own. **Standard:** this one, [4.1](#41-purpose) |
| **Primary projection** | The `ki-subagents-claude` Markdown file that carries the role record. **Standard:** this one, [4.3](#43-record-and-projections) |
| **Record fields** | Identity (`name`), selection (`description`) and the instruction body. **Standard:** this one, [4.3](#43-record-and-projections) |
| **Projection fields** | Every other key an adapter supports, owned by the runtime adapter. **Standard:** this one, [4.3](#43-record-and-projections) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Purpose

A portable subagent role is a runtime-neutral delegation contract for a [subagent](../../../keystone/ki-agentic-systems/knowledge/industry/industry.subagent.md), in the sense `ki-agentic-systems` defines. It defines a stable identity, a selection description, core instructions, a distinct lane, grounding, hand-offs, intended orchestration, and effectiveness evidence. It deliberately defines no serialization of its own: a designated primary projection carries the record, as [Record and projections](#43-record-and-projections) sets out.

[Back to contents](#contents)

### 4.2 Required semantic evidence

- **Identity and selection.** State what role exists and the request cues that select it.
- **Core instructions and lane.** Bound ownership and state what is out of scope.
- **Grounding and hand-offs.** Name evidence to read before action and the receiving capability for adjacent work.
- **Orchestration.** If the role delegates, state the intended coordination boundary without assuming runtime limits or permissions.
- **Outcome.** Retain representative evidence that selection was appropriate and improved the requested result; a syntactically valid file is not such evidence.

[Back to contents](#contents)

### 4.3 Record and projections

The role record is carried by one designated primary projection, the `ki-subagents-claude` Markdown file under a domain directory of `subagents/`, as [ADR-KI-HARNESS-AGENTS-002](../../../../docs/decisions/ADR-KI-HARNESS-AGENTS-002-portable-subagent-contract-and-runtime-adapters.md) decides.

- **Record fields** are identity (`name`), selection (`description`), and the instruction body that carries lane, grounding, hand-offs, orchestration, and outcome evidence. Portable criteria are judged against these in the primary file.
- **Projection fields** are every other key an adapter supports, such as `model`, `color`, or `tools`. They belong to the runtime adapter, not to the role.

Any other projection with the same `name` corresponds to the primary and never establishes the record. Its record fields must agree with the primary's; where they disagree, the primary prevails.

[Back to contents](#contents)

### 4.4 Boundary

Claude Code Markdown/YAML and its fields are owned by `ki-subagents-claude`. Codex standalone TOML and its fields are owned by `ki-subagents-chatgpt`. Installation, publication, activation, effective settings, and runtime execution are host/runtime questions. The current Harness host implements no generic subagent publisher, so neither adapter may claim them.

[Back to contents](#contents)
