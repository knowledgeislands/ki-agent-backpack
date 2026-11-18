---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:15:00Z
ki-status: in force
---

# Codex binding standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The native Codex surface](#41-the-native-codex-surface)
  - [4.2 Comparison](#42-comparison)
  - [4.3 Partial-update recovery](#43-partial-update-recovery)

## 1. Introduction

The native Codex MCP surface: its target, how it is compared and rendered, and how a replacement recovers from a partial update. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The native Codex MCP configuration, after the canonical source.

### 2.1 In scope

- The `~/.codex/config.toml` target and rendering through `codex mcp add`.
- Comparing targeted definitions read-only.
- Recovering from a failed replacement.

[Back to contents](#contents)

### 2.2 Out of scope

- The canonical source, its schema and mcporter comparison: `ki-env-binding`.
- Repository selection and hosted Codex activation: the coordinator.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **KI-managed entry** | A `[mcp_servers.*]` entry rendered from a canonical entry targeting `chatgpt-codex`. **Standard:** this one, [4.1](#41-the-native-codex-surface) |
| **Snapshot** | The `codex mcp get <name> --json` record read before replacing a KI-managed entry, accepted only when every configured field can be replayed. **Standard:** this one, [4.3](#43-partial-update-recovery) |

[Back to contents](#contents)

## 4. Rules

The target and its rendering, the comparison, and recovery from a partial update.

### 4.1 The native Codex surface

`ki-env-binding-chatgpt` owns the native Codex surface after `ki-env-binding` establishes the canonical source.

The target is `~/.codex/config.toml` and its `[mcp_servers.*]` entries. This is application-owned TOML that can contain non-KI entries, including app-provided servers. Compare full non-secret targeted definitions read-only during audit. Render only canonical entries targeting `chatgpt-codex`, using `codex mcp add` so Codex owns its merge and formatting behavior. Do not template or rewrite the complete TOML file; do not remove unrecognised entries. Repository selection and hosted Codex activation are coordinator-owned; configuration parity never proves either activation or runtime health.

[Back to contents](#contents)

### 4.2 Comparison

For comparison, a command containing `/` matches only the exact source value. A bare command matches its exact source token or current `Bun.which` result; bare `node` also matches the deterministic `<home>/.local/share/mise/shims/node` projection. The comparison never executes a configured command or accepts basename equivalence. Each argument matches its exact source value or, for `~` and `~/`, its deterministic selected-home expansion. Environment keys are exact, literal values are exact, and an `{ op: ... }` source requires the same key with a non-empty rendered string without reading or comparing its secret value. URLs remain exact. Unrelated native servers are outside comparison scope.

[Back to contents](#contents)

### 4.3 Partial-update recovery

`codex mcp` has no transaction for a replacement. Before replacing an existing KI-managed entry, the renderer reads `codex mcp get <name> --json` and accepts a snapshot only when it can replay every configured field with `codex mcp add`.

The supported snapshot subset is an enabled stdio server with only `command`, `args`, and literal `env`, or an enabled streamable-HTTP server with only `url`. `cwd`, environment-variable indirection, headers, bearer-token references, timeouts, tool filters, disabled state, and unknown native fields are not replayable by this renderer. It must stop before `remove` for any such record.

After a supported snapshot is captured, the renderer removes the old entry, adds the canonical entry, and reads it again to verify the expected supported shape. If the add or verification fails after a successful removal, it makes one native replay attempt from the captured snapshot. The result reports the primary and recovery outcome, never serialises native JSON or command failures into findings, and never calls a native command in `--check` mode.

[Back to contents](#contents)
