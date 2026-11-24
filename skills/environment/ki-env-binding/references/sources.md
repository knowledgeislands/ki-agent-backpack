---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources — ki-env-binding

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house](#211-in-house)
    - [2.1.2 External specifications](#212-external-specifications)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind the [cross-surface binding standard](standard-cross-surface-binding.md), the [credential access standard](standard-credential-access.md) and the [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The standard follows the canonical source it keeps, the MCP transport vocabulary and mcporter's configuration. Runtime-native config and plugin sources are tracked by their binding adapters.

### 2.1 Authoritative

The house's canonical source, then the outside specifications.

#### 2.1.1 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SRC — Canonical XDG `mcp-servers.yaml` | House-owned portable location, closed schema, and client targeting | 2026-08-12 |
| CREDS — the chezmoi source's credential helpers, `~/bin/chezmoi/op-cache`, `chezmoi-op` and `~/bin/cf-token` | The readers the credential access standard names, their call forms and cache | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.2 External specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| MCP — [MCP transports](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports) | Protocol transport vocabulary | 2026-08-12 |
| MCPORTER — [mcporter configuration](https://github.com/openclaw/mcporter/blob/main/docs/config.md) | Explicit config selection, merged target caveat, and definition representation | 2026-08-12 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, checked the in-house credential helpers against the [credential access standard](standard-credential-access.md), with no criterion changed. The canonical source, MCP transports and mcporter's configuration were last reviewed on 12 August 2026.

**Watching:** the source schema and mcporter's representation; re-anchor this root when either changes.

[Back to contents](#contents)
