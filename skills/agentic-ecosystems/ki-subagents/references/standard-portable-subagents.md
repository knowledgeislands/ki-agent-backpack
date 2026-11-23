---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:25:51Z
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
  - [4.5 Register and install](#45-register-and-install)

## 1. Introduction

The runtime-neutral contract for a portable subagent role: what it must state, where its record lives, and which questions belong to the runtime adapters and hosts. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The semantics of a portable subagent role.

### 2.1 In scope

- The role's identity, selection, instructions, lane, grounding, hand-offs, orchestration and outcome evidence.
- Which projection carries the role record, and how other projections relate to it.
- The boundary between the role and its runtime adapters.
- The register of a backpack's roles, and the agent run that installs them from it.

[Back to contents](#contents)

### 2.2 Out of scope

- Each runtime's serialization and its fields: Claude Code Markdown/YAML in `ki-subagents-claude`, Codex standalone TOML in `ki-subagents-chatgpt`.
- Each host's effective settings, activation and runtime execution, which are host and runtime questions; this standard sets only how the install run finds and places the roles.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Portable subagent role** | A runtime-neutral delegation contract for a subagent, with no serialization of its own. **Standard:** this one, [4.1](#41-purpose) |
| **Primary projection** | The `ki-subagents-claude` Markdown file that carries the role record. **Standard:** this one, [4.3](#43-record-and-projections) |
| **Record fields** | Identity (`name`), selection (`description`) and the instruction body. **Standard:** this one, [4.3](#43-record-and-projections) |
| **Projection fields** | Every other key an adapter supports, owned by the runtime adapter. **Standard:** this one, [4.3](#43-record-and-projections) |
| **Role register** | A backpack's `subagents/README.md`, linking every role source, which the install run reads. **Standard:** this one, [4.5](#45-register-and-install) |
| **Install run** | The agent run that places every registered role into one host. **Standard:** this one, [4.5](#45-register-and-install) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Purpose

A portable subagent role is a runtime-neutral delegation contract for a [subagent](../../../keystone/ki-agentic-ecosystems/knowledge/industry/industry.subagent.md), in the sense `ki-agentic-ecosystems` defines. It defines a stable identity, a selection description, core instructions, a distinct lane, grounding, hand-offs, intended orchestration, and effectiveness evidence. It deliberately defines no serialization of its own: a designated primary projection carries the record, as [Record and projections](#43-record-and-projections) sets out.

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

Claude Code Markdown/YAML and its fields are owned by `ki-subagents-claude`. Codex standalone TOML and its fields are owned by `ki-subagents-chatgpt`. Activation, effective settings, and runtime execution are host/runtime questions. The `ki` host has no subagent publisher and gets none: roles reach a host only through the install run in [Register and install](#45-register-and-install), and neither adapter may claim a role is installed or active from its source alone.

[Back to contents](#contents)

### 4.5 Register and install

There is no `ki` tool surface for subagent roles, and none is to be added. Kris settled this on 23 November 2026 (SUBAGENT-PUBLISHER a, refined): "Yeah, just install them by hand, but automated for you. There's no need to add a tool surface for it, right? And yeah, they should be registered as well, actually. So it's important that it picks those up."

**The register.** Each backpack's `subagents/README.md` is its role register. It links every role source under `subagents/`, with the role's lane, and every link resolves to a source; a role that is not linked is not registered, and the install run does not see it. REGISTER-1 checks this mechanically.

The register is the backpack's README rather than a `[skills.ki-subagents]` list in a territory's `.ki.toml` for three reasons. The roles are authored in the backpack, so the register sits beside them and a new role and its registration are reviewed in one commit. The install run already reads the backpack it installs from, which is the territory's own. And a `.ki.toml` property is validated by the `ki` host, so it would need the tool-side change the decision rules out, and would repeat the list in each repository that declares the skill.

**The install run.** An agent run installs the roles into one host. The owner asks for it, or a coordinating session starts it under `ki-delegation`, after a role is added, changed or removed:

1. Read the register and resolve each link to its role source. If REGISTER-1 finds an unregistered source, a nameless source or a dangling link, stop and report it rather than guess.
2. Place each registered role with the host's adapter. For Claude Code, `ki-subagents-claude`'s primary projection is linked by a symbolic link named `<name>.md` into the host's agents folder, `~/.claude/agents/` for the user or a repository's `.claude/agents/`, pointing at the source, so the host always reads the reviewed file. For Codex, `ki-subagents-chatgpt` places a TOML projection only where the backpack has authored one; none exists yet.
3. Remove each link the run placed earlier, one pointing into a backpack's `subagents/`, whose role the register no longer lists. Leave every other agent file alone, because the run did not place it.
4. Report each role as placed, unchanged or removed, per host. The host listing the role is the installation evidence; source conformance alone is not.

[Back to contents](#contents)
