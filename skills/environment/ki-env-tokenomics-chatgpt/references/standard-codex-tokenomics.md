---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-status: in force
---

# Codex tokenomics evidence standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Documented sources](#41-documented-sources)
  - [4.2 Unavailable state](#42-unavailable-state)
  - [4.3 Model-tier evidence](#43-model-tier-evidence)
  - [4.4 Changes](#44-changes)

## 1. Introduction

The Codex delta to `ki-env-tokenomics`'s portable policy: which Codex evidence the adapter may observe in the selected repository, and what stays unavailable. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Codex tokenomics evidence bounded to the selected repository.

### 2.1 In scope

- The documented Codex project sources the adapter observes.
- The effective-session facts it reports as unavailable.
- How dated model-tier evidence relates to the portable purposes.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable policy, budgets and model purposes: `ki-env-tokenomics`.
- User-home Codex state, including `~/.codex/memories/`.
- Codex memory and session housekeeping: `ki-env-housekeeping-chatgpt`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Documented Codex source** | A trusted project `.codex/config.toml`, `AGENTS.md`, or a project `.codex/agents/` or `.agents/skills/` directory. **Standard:** this one, [4.1](#41-documented-sources) |
| **NOT_APPLICABLE** | The result for an effective-session fact the adapter has no authorised evidence for. **Standard:** this one, [4.2](#42-unavailable-state) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Documented sources

Use only documented Codex sources bounded to the selected repository: trusted project `.codex/config.toml`, `AGENTS.md`, and project `.codex/agents/` and `.agents/skills/` directories. Report structural facts only; do not emit configuration values that may contain secrets. Documented `~/.codex/memories/` is a user surface and is outside this adapter's observation authority; memory use remains unavailable. Symbolic links are also outside the boundary.

[Back to contents](#contents)

### 4.2 Unavailable state

The standard does not infer effective model/profile, loaded instruction hierarchy, active MCP tools or server instructions, trust, memory use, billing, exact token counts, tool-schema weight, compaction, or transcript state. Each is explicitly NOT_APPLICABLE until a separately authorised session-evidence contract exists.

[Back to contents](#contents)

### 4.3 Model-tier evidence

The dated [model-tier resolution standard](standard-model-tier-resolution.md) may map a Codex work role to a portable purpose and source-local family evidence. It does not establish effective-model availability, alter the portable taxonomy, select a runtime model, or bypass evaluation, delegation, or spending authority.

[Back to contents](#contents)

### 4.4 Changes

Configuration and artifact changes are report-only. No safe item-owned write is currently proven.

[Back to contents](#contents)
