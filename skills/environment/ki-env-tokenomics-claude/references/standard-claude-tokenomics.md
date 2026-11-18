---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-status: in force
---

# Claude Code tokenomics evidence standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Repository evidence](#41-repository-evidence)
  - [4.2 The resolver](#42-the-resolver)
  - [4.3 Unavailable state](#43-unavailable-state)

## 1. Introduction

The Claude Code delta to `ki-env-tokenomics`'s portable policy: which Claude Code evidence the filesystem audit may observe in the selected repository, and what stays unavailable. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Claude Code tokenomics evidence bounded to the selected repository.

### 2.1 In scope

- The physical repository Claude surfaces the audit reads.
- How the resolver counts instruction text and follows `@` imports.
- The effective-session facts it reports as unavailable.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable policy, budgets and model purposes: `ki-env-tokenomics`.
- Dated Claude model-family evidence: [the Claude model-tier resolution standard](standard-model-tier-resolution.md).
- User-home state, another repository and live session data.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Repository Claude evidence** | Physical repository `CLAUDE.md`, `.claude/CLAUDE.md`, `.claude/rules/`, `.claude/settings.json` and `.mcp.json` surfaces. **Standard:** this one, [4.1](#41-repository-evidence) |
| **Resolver** | The audit's counter of directly observed instruction source text, following `@` imports within bounds. **Standard:** this one, [4.2](#42-the-resolver) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Repository evidence

The selected repository's Claude evidence consists only of physical repository `CLAUDE.md`, `.claude/CLAUDE.md`, `.claude/rules/`, `.claude/settings.json`, and `.mcp.json` surfaces. The audit does not read user-home state, another repository, live session data, or symbolic links.

[Back to contents](#contents)

### 4.2 The resolver

The resolver counts only directly observed instruction source text and resolves `@` imports relative to their importing file, rejecting cycles, depth overflow, out-of-repository targets, and symbolic links. It ignores code fences. It reports only parseable settings and MCP-source presence, never their values.

[Back to contents](#contents)

### 4.3 Unavailable state

Effective model, loaded context hierarchy, active MCP tools, approvals, trust, memory use, Headroom execution, billing, tool-schema weights, transcript, and compaction totals are not inferred from filesystem evidence. They remain unavailable absent separately authorised session evidence.

[Back to contents](#contents)
