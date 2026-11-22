---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T18:32:15Z
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
| CC — [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp) | Native JSON definitions and explicit HTTP/SSE types | 2026-11-22 |

[Back to contents](#contents)

### 2.2 Advisory

The claude.ai connector documentation behind the [claude.ai connector control standard](standard-claude-ai-connectors.md), moved here with it from `ki-repo-mcp` on 19 November 2026 under MCP-SURFACES; each date is the source's last REFRESH.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) | Per-conversation toggles, per-tool permission modes and account connectors | 2026-11-22 |
| [Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) | Custom remote-MCP connectors and their OAuth client settings | 2026-11-22 |
| [Authorize MCP connectors for your entire organization](https://support.claude.com/en/articles/15537633-authorize-mcp-connectors-for-your-entire-organization) | Organization connectors, admin policies and Enterprise-managed auth | 2026-11-22 |
| [Control MCP server access for your organization (Claude Code)](https://code.claude.com/docs/en/managed-mcp) | `managed-mcp.json`, `allowedMcpServers` / `deniedMcpServers` and the claude.ai connector settings in Claude Code | 2026-11-22 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ADR-KI-HARNESS-015 | Retire the Claude plugin projection: Knowledge Islands maintains no Claude Cowork plugin projection | 2026-10-05 | [Claude binding standard](standard-claude-binding.md#44-claude-cowork) | Current |
| MCP-SURFACES | Where a KI MCP server is turned on belongs to the Environment guild's binding skills, not `ki-repo-mcp`: what `ki-repo-mcp`'s cross-surface enablement standard held beyond `ki-env-binding` and `ki-env-binding-claude` moved into them after a line-by-line check, its claude.ai connector control standard moved whole into `ki-env-binding-claude` with its sources, and `ki-repo-mcp` keeps only what an MCP repository ships, with a pointer. Taken by the Cairn summit's guardian, 19 November 2026, under GUARDIAN-LANDS a, from the summit's change 10. Reversible; Kris can overturn it. | 2026-11-19 | [Claude binding standard](standard-claude-binding.md#45-order-of-enablement), [claude.ai connector control standard](standard-claude-ai-connectors.md) | In force |
| PER-TOOL-LAYER | The per-tool permission mode is an organisation lever: Owners set Always allow, Needs approval or Blocked per tool under Organization settings → Connectors → Tools, members cannot override it, no default is documented, individuals have the Allow always prompt and the Search and tools menu, and Claude Code enforces Blocked. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | [Per-tool permission mode](standard-claude-ai-connectors.md#44-per-tool-permission-mode--the-fatigue-vs-safety-dial) | In force |
| MANAGED-MCP-THREE | Claude Code's managed MCP has three mechanisms: `managed-mcp.json` provides servers in place of users' own, `managedMcpServers` (v2.1.259+) provides remote servers alongside them, and the allow and deny lists filter; an empty `managed-mcp.json` map does not disable MCP entirely. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | [Three mechanisms](standard-claude-ai-connectors.md#471-three-mechanisms--provide-vs-filter) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 Loreward, within remit, landed the 4.1 refresh's queries against [the claude.ai connector control standard](standard-claude-ai-connectors.md), each recorded under [Decisions](#3-decisions): PER-TOOL-LAYER restates the per-tool permission mode as an organisation lever; MANAGED-MCP-THREE rewrites 4.7.1 as three mechanisms and corrects the empty-map wording. No outside source was refreshed.

On 22 November 2026 a REFRESH re-read all five outside sources, for the Cairn summit's change 10, step 4.1. Claude Code's MCP configuration still matches [the Claude binding standard](standard-claude-binding.md#42-claude-code-and-claude-desktop): a stdio entry may omit `type`, a URL entry without `type` is an error, and the project `.mcp.json` and the scopes stand. It now also documents a `ws` transport, `streamable-http` as an alias of `http` and SSE as deprecated, none of which changes a rule. The three claude.ai articles and the managed-MCP page have moved on from [the claude.ai connector control standard](standard-claude-ai-connectors.md): connectors are managed at Customize, Connectors; a custom connector takes authentication, OAuth client and request-header choices and must be reachable from Anthropic's cloud on port 443; Enterprise-managed auth has an IdP-managed source, generally available with Okta only, and a Claude-issued source in beta; Always allow, Needs approval and Blocked are set per tool by the organisation's owners, with no documented default; and Claude Code adds `managedMcpServers`, still loads some servers under an empty `managed-mcp.json`, and governs claude.ai connectors differently in terminal, cloud and desktop-app sessions. The connector control standard took the wording that changes no rule: the Customize, Connectors path, a custom connector's choices, On demand tool access, the organisation's connector roles and shared credentials, Enterprise-managed auth's two sources, and a fourth sharp edge in 4.7.2 on ports and name fallbacks. Four points that would change a rule or a protection are held for the owner as queries: the per-tool layer as an organisation lever (PER-TOOL-LAYER), `managedMcpServers` as a third mechanism (MANAGED-MCP-THREE), which sessions the Claude Code controls reach (CONNECTOR-SESSIONS), and a source for the server-managed settings claims (SERVER-MANAGED-SOURCE). The standard's server-managed settings claims, the direct `api.anthropic.com` connection, the gateway bypass and `forceRemoteSettingsRefresh`, appear in none of the five sources and were not checked.

On 19 November 2026 MCP-SURFACES, recorded under [Decisions](#3-decisions), moved `ki-repo-mcp`'s claude.ai connector control standard here whole, with its four sources under Advisory, and brought into the binding standard what `ki-repo-mcp`'s cross-surface enablement standard held beyond it: Claude Code's per-project `.mcp.json`, connector policy kept manual, Cowork's sandbox reason and the order of enablement, 4.5. No rule changed in substance and no outside source refreshed; the connector sources, last reviewed on 3 July 2026, are due a REFRESH.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Claude binding standard](standard-claude-binding.md), formerly `standards-claude-binding.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-08-12 — Claude Code MCP configuration reviewed.

**Watching:**

- Every Claude-native configuration contract; refresh when any changes.
- The 22 November 2026 REFRESH's queries CONNECTOR-SESSIONS and SERVER-MANAGED-SOURCE against the claude.ai connector control standard, until they land.
- The server-managed settings claims in the connector control standard, which no listed source covers.

[Back to contents](#contents)
