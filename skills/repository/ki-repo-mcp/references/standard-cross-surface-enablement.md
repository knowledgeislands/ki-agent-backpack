---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:50:00Z
ki-status: in force
---

# Cross-surface MCP enablement standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Source and ownership](#41-source-and-ownership)
  - [4.2 Per-surface targeting](#42-per-surface-targeting)
  - [4.3 Binding model](#43-binding-model)
  - [4.4 Sequencing](#44-sequencing)

## 1. Introduction

This runtime-bound standard explains how one source of truth enables Knowledge Islands MCP servers, skills, and agents across Claude Code, Claude Desktop, and claude.ai web. It governs MCP surface targeting rather than server-code conformance; [the connector-control standard](standard-claude-ai-connectors.md) supplies the claude.ai policy details. The sources and decisions behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How Knowledge Islands MCP servers are targeted at each client surface from one source.

### 2.1 In scope

- The canonical source and which skill owns each surface.
- The per-surface control boundary, including Claude Cowork.
- The binding model and the order surfaces are enabled in.

[Back to contents](#contents)

### 2.2 Out of scope

- Server-code conformance: the [Workspace MCP Standard](standard-mcp-servers.md).
- The claude.ai policy details: the [connector-control standard](standard-claude-ai-connectors.md).
- The canonical source's schema and the binding itself: `ki-env-binding` and its adapters.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Canonical source** | `~/.config/ki/mcp-servers.yaml`, declaring each server and its target clients. **Standard:** this one, [4.1](#41-source-and-ownership) |
| **Surface** | A client a server is enabled in: Claude Code, Claude Desktop, Claude Cowork or claude.ai web. **Standard:** this one, [4.2](#42-per-surface-targeting) |
| **Binding** | Fanning the one declaration out to each controllable surface through its owning renderer or binding action. **Standard:** this one, [4.3](#43-binding-model) |

[Back to contents](#contents)

## 4. Rules

The source, each surface's boundary, the binding model and the order of enablement.

### 4.1 Source and ownership

The canonical source is `~/.config/ki/mcp-servers.yaml`. It declares each server and its target clients without assuming a particular renderer. `ki-env-binding` audits agreement across surfaces; `ki-env-binding-chezmoi` owns the maintainer-specific chezmoi rendering. A surface must not become a second authored server registry.

[Back to contents](#contents)

### 4.2 Per-surface targeting

| Surface        | Configuration                    | Control boundary                                 |
| -------------- | -------------------------------- | ------------------------------------------------ |
| Claude Code    | mcporter and project `.mcp.json` | File-editable, including per-project enablement  |
| Claude Desktop | rendered application config      | File-editable from the canonical source          |
| Claude Cowork  | none maintained                  | No Knowledge Islands packaging                   |
| claude.ai web  | account or organization UI       | Manual/admin control; no local file automation   |

Knowledge Islands maintains no Claude Cowork plugin projection (`ADR-KI-HARNESS-015`), so no KI skill, agent, or server targets Cowork. Cowork runs plugin stdio servers inside a gVisor sandbox where host-local servers, paths, secret providers, and loopback mcporter bridges are not assumed reachable; reinstating Cowork needs a new decision and a separate sandbox-portability or authenticated-remote design.

[Back to contents](#contents)

### 4.3 Binding model

Cross-surface fan-out is a binding concern, not a new MCP server or standalone registry:

1. Resolve the canonical source.
2. Audit each controllable surface against its declared client targeting.
3. Use the surface's owning renderer or binding action for file-editable state.
4. Keep claude.ai connector installation and organization policy explicit and manual.
5. Report an unportable server rather than silently omitting, rewriting, or exposing it.

The binding skill is the actor for every supported surface. This preserves one declaration while respecting each runtime's persistence and security boundary.

[Back to contents](#contents)

### 4.4 Sequencing

Enable and verify the most controllable surfaces first:

1. Claude Code through mcporter or project `.mcp.json`.
2. Claude Desktop from the same canonical source.
3. claude.ai through the account or organization connector controls in [the connector-control standard](standard-claude-ai-connectors.md).

External UI changes, organization policy, remote deployment, and sandbox-portability work remain report-only. No ki-repo-mcp conform action mutates these surfaces.

[Back to contents](#contents)
