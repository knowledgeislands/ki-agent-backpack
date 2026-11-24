---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-claude

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind the [Claude binding standard](standard-claude-binding.md), the [claude.ai connector control standard](standard-claude-ai-connectors.md) and the [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The binding standard follows Claude Code's MCP configuration documentation; the claude.ai connector documentation informs the connector control standard.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CC — [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp) | Native JSON definitions and explicit HTTP/SSE types | 2026-11-22 |
| [ADR-KI-HARNESS-015](../../../../docs/decisions/ADR-KI-HARNESS-015-retire-the-claude-plugin-projection.md) | No Claude Cowork plugin projection, behind the [Claude binding standard](standard-claude-binding.md#44-claude-cowork) | 2026-11-24 |

[Back to contents](#contents)

### 2.2 Advisory

The claude.ai connector documentation behind the [claude.ai connector control standard](standard-claude-ai-connectors.md), moved here with it from `ki-repo-mcp` on 19 November 2026; each date is the source's last REFRESH.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) | Per-conversation toggles, per-tool permission modes and account connectors | 2026-11-22 |
| [Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) | Custom remote-MCP connectors and their OAuth client settings | 2026-11-22 |
| [Authorize MCP connectors for your entire organization](https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization) | Organization connectors, admin policies and Enterprise-managed auth | 2026-11-22 |
| [Control MCP server access for your organization (Claude Code)](https://code.claude.com/docs/en/managed-mcp) | `managed-mcp.json`, `allowedMcpServers` / `deniedMcpServers` and the claude.ai connector settings in Claude Code | 2026-11-22 |
| [Server-managed settings (Claude Code)](https://code.claude.com/docs/en/server-managed-settings) | The server-managed settings claims in 4.6 and 4.7.3: the direct `api.anthropic.com` connection, the `ANTHROPIC_BASE_URL` bypass and `forceRemoteSettingsRefresh` | Not yet reviewed |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, re-read the outside sources. Claude Code's MCP configuration still matches [the Claude binding standard](standard-claude-binding.md#42-claude-code-and-claude-desktop): a stdio entry may omit `type`, a URL entry without `type` is an error, and the project `.mcp.json` and the scopes stand, while its new `ws` transport, `streamable-http` alias and deprecated SSE change no rule. The connector articles and the managed-MCP page had moved on, and [the claude.ai connector control standard](standard-claude-ai-connectors.md) now follows them.

**Watching:**

- Every Claude-native configuration contract; refresh when any changes.
- The server-managed settings claims in the connector control standard, 4.6 and 4.7.3, to check against the server-managed settings page at the next REFRESH.

[Back to contents](#contents)
