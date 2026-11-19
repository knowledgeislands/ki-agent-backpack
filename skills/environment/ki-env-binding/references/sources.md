---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T06:40:00Z
ki-refresh: canonical · on-change
---

# Sources — ki-env-binding

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house](#211-in-house)
    - [2.1.2 External specifications](#212-external-specifications)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind the [cross-surface binding standard](standard-cross-surface-binding.md) and [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The standard follows the canonical source it keeps, the MCP transport vocabulary and mcporter's configuration. Runtime-native config and plugin sources are tracked by their binding adapters.

### 2.1 Authoritative

The house's canonical source, then the outside specifications.

#### 2.1.1 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SRC — Canonical XDG `mcp-servers.yaml` | House-owned portable location, closed schema, and client targeting | 2026-08-12 |

[Back to contents](#contents)

#### 2.1.2 External specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| MCP — [MCP transports](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports) | Protocol transport vocabulary | 2026-08-12 |
| MCPORTER — [mcporter configuration](https://github.com/openclaw/mcporter/blob/main/docs/config.md) | Explicit config selection, merged target caveat, and definition representation | 2026-08-12 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| MCP-SURFACES | Where a KI MCP server is turned on belongs to the Environment guild's binding skills, not `ki-repo-mcp`: what `ki-repo-mcp`'s cross-surface enablement standard held beyond `ki-env-binding` and `ki-env-binding-claude` moved into them after a line-by-line check, its claude.ai connector control standard moved whole into `ki-env-binding-claude` with its sources, and `ki-repo-mcp` keeps only what an MCP repository ships, with a pointer. Taken by the Cairn summit's guardian, 19 November 2026, under GUARDIAN-LANDS a, from the summit's change 10. Reversible; Kris can overturn it. | 2026-11-19 | [Edits flow through the source](standard-cross-surface-binding.md#43-edits-flow-through-the-source) | In force |

[Back to contents](#contents)

## 4. Last review

On 19 November 2026 MCP-SURFACES, recorded under [Decisions](#3-decisions), brought in from `ki-repo-mcp`'s retired cross-surface enablement standard the two portable rules this one lacked: a surface never becomes a second authored registry, fan-out is a binding concern, and an unportable server is reported, never silently dropped. No outside source refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the cross-surface binding standard](standard-cross-surface-binding.md), formerly `standards-cross-surface-binding.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-08-12 — The canonical source, MCP transports and mcporter configuration reviewed.

**Watching:** the source schema and mcporter's representation; re-anchor this root when either changes.

[Back to contents](#contents)
