---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T06:40:00Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-claude

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind the [Claude binding standard](standard-claude-binding.md), the [claude.ai connector control standard](standard-claude-ai-connectors.md) and the [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The binding standard follows Claude Code's MCP configuration documentation; the claude.ai connector documentation informs the connector control standard.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CC — [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp) | Native JSON definitions and explicit HTTP/SSE types | 2026-08-12 |

[Back to contents](#contents)

### 2.2 Advisory

The claude.ai connector documentation behind the [claude.ai connector control standard](standard-claude-ai-connectors.md), moved here with it from `ki-repo-mcp` on 19 November 2026 under MCP-SURFACES; the date is when that standard was written from them.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) | Per-conversation toggles, per-tool permission modes and account connectors | 2026-07-03 |
| [Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) | Custom remote-MCP connectors and their OAuth client settings | 2026-07-03 |
| [Authorize MCP connectors for your entire organization](https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization) | Organization connectors, admin policies and Enterprise-managed auth | 2026-07-03 |
| [Control MCP server access for your organization (Claude Code)](https://code.claude.com/docs/en/managed-mcp) | `managed-mcp.json`, `allowedMcpServers` / `deniedMcpServers` and the claude.ai connector settings in Claude Code | 2026-07-03 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ADR-KI-HARNESS-015 | Retire the Claude plugin projection: Knowledge Islands maintains no Claude Cowork plugin projection | 2026-10-05 | [Claude binding standard](standard-claude-binding.md#44-claude-cowork) | Current |
| MCP-SURFACES | Where a KI MCP server is turned on belongs to the Environment guild's binding skills, not `ki-repo-mcp`: what `ki-repo-mcp`'s cross-surface enablement standard held beyond `ki-env-binding` and `ki-env-binding-claude` moved into them after a line-by-line check, its claude.ai connector control standard moved whole into `ki-env-binding-claude` with its sources, and `ki-repo-mcp` keeps only what an MCP repository ships, with a pointer. Taken by the Cairn summit's guardian, 19 November 2026, under GUARDIAN-LANDS a, from the summit's change 10. Reversible; Kris can overturn it. | 2026-11-19 | [Claude binding standard](standard-claude-binding.md#45-order-of-enablement), [claude.ai connector control standard](standard-claude-ai-connectors.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 19 November 2026 MCP-SURFACES, recorded under [Decisions](#3-decisions), moved `ki-repo-mcp`'s claude.ai connector control standard here whole, with its four sources under Advisory, and brought into the binding standard what `ki-repo-mcp`'s cross-surface enablement standard held beyond it: Claude Code's per-project `.mcp.json`, connector policy kept manual, Cowork's sandbox reason and the order of enablement, 4.5. No rule changed in substance and no outside source refreshed; the connector sources, last reviewed on 3 July 2026, are due a REFRESH.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Claude binding standard](standard-claude-binding.md), formerly `standards-claude-binding.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-08-12 — Claude Code MCP configuration reviewed.

**Watching:** every Claude-native configuration contract; refresh when any changes.

[Back to contents](#contents)
