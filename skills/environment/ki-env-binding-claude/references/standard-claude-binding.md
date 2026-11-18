---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:15:00Z
ki-status: in force
---

# Claude binding standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 What this adapter owns](#41-what-this-adapter-owns)
  - [4.2 Claude Code and Claude Desktop](#42-claude-code-and-claude-desktop)
  - [4.3 claude.ai web](#43-claudeai-web)
  - [4.4 Claude Cowork](#44-claude-cowork)

## 1. Introduction

The Claude-native MCP surfaces: how the Claude Code and Claude Desktop JSON surfaces are compared with the canonical source, and how claude.ai web and Cowork stand. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Claude-native MCP surfaces, after the canonical source.

### 2.1 In scope

- Comparing the Claude Code and Claude Desktop JSON surfaces with the canonical source.
- claude.ai web as an explicit convention.
- Cowork's place outside comparison.

[Back to contents](#contents)

### 2.2 Out of scope

- The canonical source, its schema, mcporter comparison and host surface selection: `ki-env-binding`.
- Generic Cowork state: `ki-env-housekeeping-claude`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Claude JSON surface** | The MCP configuration of Claude Code or Claude Desktop, compared with the canonical source when its physical file is readable. **Standard:** this one, [4.2](#42-claude-code-and-claude-desktop) |
| **Web convention** | claude.ai web's use of MCP, documented as a convention rather than claimed as a render target. **Standard:** this one, [4.3](#43-claudeai-web) |

[Back to contents](#contents)

## 4. Rules

What the adapter owns, then each Claude surface.

### 4.1 What this adapter owns

`ki-env-binding-claude` owns only Claude-native surfaces after `ki-env-binding` has established the canonical MCP source.

[Back to contents](#contents)

### 4.2 Claude Code and Claude Desktop

- Claude Code and Claude Desktop are JSON MCP surfaces; full non-secret definitions are compared only when their physical files are readable. A command containing `/` matches only the exact source value. A bare command matches its exact source token or current `Bun.which` result; bare `node` also matches the deterministic `<home>/.local/share/mise/shims/node` projection. The comparison never executes a configured command or accepts basename equivalence. Each argument matches its exact source value or, for `~` and `~/`, its deterministic selected-home expansion. Environment keys are exact, literal values are exact, and an `{ op: ... }` source requires the same key with a non-empty rendered string without reading or comparing its secret value. Claude's JSON surface represents a portable URL definition with the targeted client's declared transport as `type` and an exact URL, and permits a stdio definition to omit its default `type`. The portable source requires an explicit supported transport for each targeted Claude client. Unrelated native servers are outside comparison scope.

[Back to contents](#contents)

### 4.3 claude.ai web

- claude.ai web has no local file contract. Treat it as an explicit convention, never a claimed render target. claude.ai connectors belong to that cloud surface: a host-bound Claude session reaches KI MCP servers through its host's mcporter bridge, as [host surface selection](../../ki-env-binding/references/standard-cross-surface-binding.md#44-host-surface-selection) requires, and does not report an unauthorised connector as a local gap.

[Back to contents](#contents)

### 4.4 Claude Cowork

- Knowledge Islands maintains no Claude Cowork plugin projection (`ADR-KI-HARNESS-015`). Cowork settings are outside this adapter's comparison scope; generic Cowork state belongs to `ki-env-housekeeping-claude`.

[Back to contents](#contents)
