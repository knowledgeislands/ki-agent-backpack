---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T07:10:00Z
ki-status: in force
---

# Codex local-memory standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Codex local memory](#41-codex-local-memory)
  - [4.2 Repository policy](#42-repository-policy)
  - [4.3 Runtime settings](#43-runtime-settings)
  - [4.4 Reconciliation](#44-reconciliation)

## 1. Introduction

The Codex delta to the native-memory policy every agent host shares in `ki-env-housekeeping`: how a repository declares its Codex local-memory policy, how readable Codex settings are compared with it, and how retained memory files are reconciled. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Codex local memory for one selected repository.

### 2.1 In scope

- The repository's declared Codex memory policy.
- Readable user and project Codex memory settings.
- Retained files in the selected Codex home's `memories/` directory.

[Back to contents](#contents)

### 2.2 Out of scope

- ChatGPT web memory, an account or workspace feature.
- Codex threads, their inventory and deletion: [the Codex state standard](standard-codex-state.md).
- The rules every agent host shares: `ki-env-housekeeping`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Codex local memory** | Generated state Codex keeps under its home's `memories/` directory, not the durable Knowledge Islands record. **Standard:** this one, [4.1](#41-codex-local-memory) |
| **Memory policy** | The repository's `auto_memory` declaration in its `ki-env-housekeeping-chatgpt` table: `disabled`, `transition` or `enabled`. **Standard:** this one, [4.2](#42-repository-policy) |
| **Selected Codex home** | `$CODEX_HOME`, or `~/.codex` by default, the one store the checker reads. **Standard:** this one, [4.3](#43-runtime-settings) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Codex local memory

Codex local memory is generated state, not the durable Knowledge Islands record. Keep standing guidance in reviewed repository files and route useful learning through existing repository or KB intake and approval rules. ChatGPT web memory is a separate account or workspace feature and is not represented by this filesystem check. [OpenAI's memory documentation](https://learn.chatgpt.com/docs/customization/memories) distinguishes these stores.

[Back to contents](#contents)

### 4.2 Repository policy

A repository declaring `ki-env-housekeeping-chatgpt` sets `auto_memory` in its skill table under the lead's [native-memory policy](../../ki-env-housekeeping/references/standard-housekeeping.md#41-native-memory-policy). For Codex:

- An unset or invalid value is a **FAIL** even though local Codex memory is off by default.
- Under `disabled`, a selected store with files still warns for reconciliation, [4.4](#44-reconciliation); do not delete or rewrite them automatically.
- `enabled` needs a project-scoped Codex setting, [4.3](#43-runtime-settings).

The shared Codex home store cannot establish which repository owns a memory file. An enabled project setting controls behaviour for that trusted project but does not prove file isolation. Do not present global store contents as this repository's knowledge.

[Back to contents](#contents)

### 4.3 Runtime settings

The checker reads the selected `$CODEX_HOME` or default `~/.codex` and the repository's `.codex/config.toml`, without reading memory contents. It compares readable user and project `[features] memories` values, with project configuration taking precedence. It does not change either file. A project-level enable is required for an `enabled` declaration; a user-wide enable alone is insufficient. The checked project file must actually load in a trusted project. [OpenAI's configuration precedence](https://learn.chatgpt.com/docs/config-file/config-basic) also includes command-line overrides, profiles, cloud-managed and system defaults; desktop and per-chat controls can change the live state. Therefore a static audit is not proof of effective session memory. Verify an approved opt-in or disablement in the active client before relying on it.

An untrusted project skips its project configuration. If trust or an override cannot be established from available evidence, do not claim a verified project opt-in. Keep chezmoi-managed user settings under separate review rather than changing them as a checker repair.

[Back to contents](#contents)

### 4.4 Reconciliation

Inspect only the selected Codex home `memories/` directory. The checker counts regular files without reading content or following symlinks. Files under an unset or disabled policy warn for review, and `transition` warns even if the store is empty. Do not create empty memory files, delete existing files, or copy unreviewed memory into Git. The KB's tracked `Admin/MEMORY.md` is repository knowledge, not Codex local memory.

[Back to contents](#contents)
