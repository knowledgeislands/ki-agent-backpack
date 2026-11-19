---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T06:40:00Z
ki-status: in force
---

# Canonical MCP binding standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The canonical source](#41-the-canonical-source)
  - [4.2 Comparison and ownership](#42-comparison-and-ownership)
  - [4.3 Edits flow through the source](#43-edits-flow-through-the-source)
  - [4.4 Host surface selection](#44-host-surface-selection)

## 1. Introduction

The portable contract for the KI MCP inventory: the one canonical source, its closed schema and client targeting, mcporter comparison, and how a host-bound runtime reaches KI MCP servers. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The canonical MCP source and the vendor-neutral mcporter projection.

### 2.1 In scope

- The canonical inventory's location, closed schema and client tokens.
- Comparing an explicitly selected mcporter configuration with the source.
- Which skill owns each surface, and how edits flow.
- Host surface selection for host-bound runtimes.

[Back to contents](#contents)

### 2.2 Out of scope

- Runtime-native surfaces, compared across runtimes: Claude's JSON surfaces in `ki-env-binding-claude`, and Codex's native TOML in `ki-env-binding-chatgpt`.
- Rendering the source through chezmoi: `ki-env-binding-chezmoi`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Canonical source** | The one `mcpServers:` YAML inventory at `$XDG_CONFIG_HOME/ki/mcp-servers.yaml`, unless `$KI_MCP_SOURCE` overrides it. **Standard:** this one, [4.1](#41-the-canonical-source) |
| **Client token** | One of `mcporter`, `claude-code`, `claude-desktop` and `chatgpt-codex`, listed in an entry's `clients:` to target that client. **Standard:** this one, [4.1](#41-the-canonical-source) |
| **Host-bound runtime** | A runtime, such as Claude Code, Claude Desktop or Codex, that reaches KI MCP servers through its own host's mcporter bridge. **Standard:** this one, [4.4](#44-host-surface-selection) |

[Back to contents](#contents)

## 4. Rules

The source, its comparison, how edits flow, and host surface selection.

### 4.1 The canonical source

The portable contract is one `mcpServers:` YAML inventory at `$XDG_CONFIG_HOME/ki/mcp-servers.yaml` (default `~/.config/ki/mcp-servers.yaml`). `$KI_MCP_SOURCE` may explicitly override that path.

Every entry has a unique non-empty `name`, a non-empty unique `clients:` list, and exactly one definition. A stdio definition is `command`, optional `args:` strings, and optional literal-string or 1Password-reference `env:` values. A URL definition is `url`, optional `auth: oauth`, optional literal-string or 1Password-reference `headers:`, plus one `transports:` mapping for every targeted client: `http` or `sse` for `mcporter`, `claude-code`, and `claude-desktop`; `streamable_http` for `chatgpt-codex`. A 1Password reference is an exact `{ op: "op://..." }` mapping. Either definition may carry a `lifecycle` of `ephemeral` or `keep-alive` for renderers that manage connection retention. `auth` is valid only on URL entries and accepts only `oauth`; renderers emit it only for mcporter, which uses the marker to refresh tokens and retry after a 401 response. No other fields are portable. Recognised client tokens are `mcporter`, `claude-code`, `claude-desktop`, and `chatgpt-codex`.

[Back to contents](#contents)

### 4.2 Comparison and ownership

`ki-env-binding` compares an explicitly selected, readable mcporter configuration with entries targeting `mcporter`; literal header values, OAuth markers, and lifecycle must match, an OAuth marker absent from the source staying absent from mcporter, while a secret-derived header value is checked only for non-empty presence and is never reported. Without that evidence, target and runtime parity are unavailable. `ki-env-binding-claude` owns Claude Code, Desktop, Cowork, and web convention. `ki-env-binding-chatgpt` owns native Codex TOML. A renderer such as `ki-env-binding-chezmoi` owns source-structure evidence, while render, apply, activation, and runtime health remain distinct evidence classes.

[Back to contents](#contents)

### 4.3 Edits flow through the source

Edits flow through the canonical source and its selected renderer or adapter. Never hand-edit a rendered target as a substitute for changing its source. A surface never becomes a second authored server registry, and fanning the source out to the surfaces is a binding concern, never a new MCP server or registry. A server that cannot be carried to a targeted surface is reported, never silently omitted, rewritten or exposed.

[Back to contents](#contents)

### 4.4 Host surface selection

A host-bound runtime reaches KI MCP servers through its own host's mcporter bridge. Claude Code, Claude Desktop and Codex are host-bound on whichever host they run on. claude.ai connectors belong to cloud sessions. An unauthorised connector in a host-bound session is expected state; report it only when a task needs that service and no bridge route provides it.

Each host owns its canonical inventory, bridge and secret store. A runtime never depends on another host's loopback bridge. Reaching a bridge across hosts is an exposure decision for the host's owner, not a binding default.

[Back to contents](#contents)
