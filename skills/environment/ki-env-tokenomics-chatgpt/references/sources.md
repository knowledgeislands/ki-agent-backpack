---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Codex tokenomics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Codex tokenomics evidence standard](standard-codex-tokenomics.md) and its [rubric](rubric.md). Mode REFRESH refreshes the adapter only from the official Codex documentation listed here.

[Back to contents](#contents)

## 2. Outside sources

OpenAI's Codex documentation governs the surfaces the adapter observes.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Codex configuration][config] | trusted project configuration and effective-state boundary | 2026-11-22 |
| [Codex AGENTS.md instructions][instructions] | repository instruction source and loaded-hierarchy boundary | 2026-11-22 |
| [Codex MCP][mcp] | declared MCP source and active-state boundary | 2026-11-22 |
| [Codex skills][skills] | repository skill source directory | 2026-11-22 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, rechecked the four Codex sources at their new home on learn.chatgpt.com. A project `.codex/config.toml` is still read only when the project is trusted, and `AGENTS.md`, `.agents/skills/` and `.codex/agents/` are unchanged, so no rule changed.

**Watching:**

- Codex now reads `AGENTS.override.md` before `AGENTS.md` in each directory, and stops adding instruction files at `project_doc_max_bytes`, 32 KiB by default; the audit observes `AGENTS.md` only.

[Back to contents](#contents)

[config]: https://learn.chatgpt.com/docs/config-file/config-reference
[instructions]: https://learn.chatgpt.com/docs/agent-configuration/agents-md
[mcp]: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
[skills]: https://learn.chatgpt.com/docs/build-skills
