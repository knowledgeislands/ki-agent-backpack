---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:27:04Z
ki-status: in force
---

# Codex standalone subagent source projections standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Source format](#41-source-format)
  - [4.2 Required fields](#42-required-fields)
  - [4.3 Supported keys](#43-supported-keys)
  - [4.4 Host boundary](#44-host-boundary)

## 1. Introduction

A Codex file is a corresponding projection, never the role record. The `ki-subagents-claude` Markdown file is the designated primary; a Codex `name`, `description`, and `developer_instructions` must agree with its record fields, and every other key is a projection field (see [Record and projections](../../ki-subagents/references/standard-portable-subagents.md#43-record-and-projections)). The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The Codex runtime binding of a portable subagent role.

### 2.1 In scope

- Where candidate Codex custom-agent TOML sources live and how unsafe ones fail closed.
- The required fields and the supported custom-agent projection keys.
- What source conformance does not establish.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable role and its record fields: `ki-subagents`.
- Global `[agents]` settings, discovery, publication, installation, activation and execution, which belong to the host and runtime.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Candidate source** | An authorised physical `.codex/agents/` TOML file, read as source only. **Standard:** this one, [4.1](#41-source-format) |
| **Projection key** | A supported custom-agent key in the file's root table. **Standard:** this one, [4.3](#43-supported-keys) |

[Back to contents](#contents)

## 4. Rules

The runtime binding, part by part.

### 4.1 Source format

Codex custom agents are standalone TOML files in `.codex/agents/` (repository) or `~/.codex/agents/` (user). This adapter treats an authorised physical `.codex/agents/` directory as candidate source only. Symbolic links, unreadable paths, malformed TOML, and non-table roots fail closed.

[Back to contents](#contents)

### 4.2 Required fields

Every custom Codex agent file defines non-empty string `name`, `description`, and `developer_instructions`. The documented simple convention is to make the filename match `name`; the declared name remains source identity.

[Back to contents](#contents)

### 4.3 Supported keys

The supported custom-agent projection keys are `name`, `description`, `developer_instructions`, `model`, `model_reasoning_effort`, `sandbox_mode`, `mcp_servers`, and `skills`. Global `[agents]` settings are not custom-agent source fields and are not inferred from the file.

[Back to contents](#contents)

### 4.4 Host boundary

Candidate source conformance does not establish discovery, publication, installation, activation, effective model/profile/MCP configuration, permissions, or execution. The current Harness host publishes Codex skills only and has neither a Codex subagent capability/path nor a generic publisher. Route activation evidence to a future authorised host/runtime owner.

[Back to contents](#contents)
