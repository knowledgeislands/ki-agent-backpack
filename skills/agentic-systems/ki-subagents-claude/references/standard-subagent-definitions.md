---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:27:44Z
ki-status: in force
---

# Claude Code subagent source projections standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Source format](#41-source-format)
  - [4.2 Required fields](#42-required-fields)
  - [4.3 Supported fields](#43-supported-fields)
  - [4.4 Source discovery and host boundary](#44-source-discovery-and-host-boundary)

## 1. Introduction

`ki-subagents` owns the portable role: identity, selection purpose, core instructions, lane, grounding, hand-offs, orchestration intent, and outcome evidence. This adapter owns only the Claude Code Markdown/YAML projection and candidate source discovery. That projection is the designated primary: it carries the portable role record, whose record fields are `name`, `description`, and the instruction body; every other key here is a projection field (see [Record and projections](../../ki-subagents/references/standard-portable-subagents.md#43-record-and-projections)). The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The Claude Code runtime binding of a portable subagent role, the designated primary projection.

### 2.1 In scope

- Where candidate Markdown/YAML sources live and how unsafe ones are refused.
- The required fields, the name rule and the supported field set.
- Name uniqueness in the candidate source tree, and what source conformance does not establish.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable role's semantics: `ki-subagents`.
- Publication, installation, activation, effective settings and execution, which belong to the host and runtime.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Candidate source payload** | A Markdown file with YAML frontmatter under a physical repository `subagents/` directory. **Standard:** this one, [4.1](#41-source-format) |
| **Supported field** | A frontmatter key in the set current Claude Code supports. **Standard:** this one, [4.3](#43-supported-fields) |

[Back to contents](#contents)

## 4. Rules

The runtime binding, part by part.

### 4.1 Source format

Candidate source payloads live under a physical repository `subagents/` directory for authoring. Each definition is a Markdown file with a YAML frontmatter mapping at its start and a non-empty instruction body. The checker refuses symbolic links, unreadable paths, non-mapping YAML, and malformed YAML; it never traverses them.

[Back to contents](#contents)

### 4.2 Required fields

Claude Code requires string `name` and `description` fields. A source name uses lowercase letters and hyphens only; digits and colons are invalid. The source filename is a useful human convention, not native identity authority.

[Back to contents](#contents)

### 4.3 Supported fields

Current Claude Code supports `name`, `description`, `tools`, `disallowedTools`, `model`, `permissionMode`, `maxTurns`, `skills`, `mcpServers`, `hooks`, `memory`, `background`, `effort`, `isolation`, `color`, and `initialPrompt`. The adapter checks that a candidate source uses only this set. It does not infer effective model, permissions, scheduling, nesting, tool availability, or spawned-agent policy from source text.

[Back to contents](#contents)

### 4.4 Source discovery and host boundary

Within the candidate source tree, declared names must be unique. This is source-payload evidence only. The Harness host advertises Claude subagent path metadata but has no generic publisher that consumes it, so publication, installation, activation, effective settings, and execution are all unavailable. A future authorised host integration must supply those claims and evidence.

[Back to contents](#contents)
