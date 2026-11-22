---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:35:54Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-chatgpt

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind the [Codex binding standard](standard-codex-binding.md) and [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The standard follows Codex's own MCP documentation and configuration reference.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CLI — [Codex MCP documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) | Native merge writer and MCP state boundaries | 2026-11-22 |
| TOML — [Codex configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference) | TOML location and full non-secret MCP fields | 2026-11-22 |

[Back to contents](#contents)

## 3. Decisions

The standard rests on the Codex documentation above and `ki-env-binding`'s canonical source; one decision is recorded by id below.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ENV-FIXES a | All ten Environment skills are kept, with the fixes: `ki-env-housekeeping-chatgpt` repointed from the old Inbox (`krisb/inbox`) to Harbour (`krisb/ki-cairn-harbour`); `ki-env-housekeeping-claude`'s memory text trimmed to the disabled case; `ki-env-binding-chatgpt` refreshed, due since 12 November; `ki-env-binding-chezmoi`'s SKILL.md, which stated its composition three times, trimmed to once; the two tokenomics adapters' sources refreshed with the MODEL-TIERS move; no regrouping by host. Kris, 22 November 2026, about 21:45 GMT, the Environment guild's sitting, card: "Keep all ten, with fixes"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Sources](#21-authoritative) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied ENV-FIXES a, recorded under [Decisions](#3-decisions): both Codex sources were rechecked against Codex CLI 0.171.0. `codex mcp add`, `codex mcp get <name> --json` and `codex mcp remove` still exist; the configuration reference now lists more `[mcp_servers]` fields, such as `bearer_token_env_var`, header helpers, `auth`, approval modes and `startup_readiness`, which [partial-update recovery](standard-codex-binding.md#43-partial-update-recovery) already treats as fields the renderer cannot replay. No rule changed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Codex binding standard](standard-codex-binding.md), formerly `standards-codex-binding.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-08-12 — Codex MCP documentation and configuration reference reviewed.

**Watching:**

- The native command and TOML shape; refresh when either changes.
- The replayable snapshot subset in [partial-update recovery](standard-codex-binding.md#43-partial-update-recovery): if KI entries come to need `bearer_token_env_var`, headers or OAuth, the renderer's subset has to widen before it can replace them.

[Back to contents](#contents)
