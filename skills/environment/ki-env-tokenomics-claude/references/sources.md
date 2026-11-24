---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Claude Code tokenomics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Claude Code tokenomics evidence standard](standard-claude-tokenomics.md) and its [rubric](rubric.md). The model pages that backed the Claude model-tier evidence went with it to `ki-model-radar`.

[Back to contents](#contents)

## 2. Outside sources

Claude Code's documentation governs the filesystem audit.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Code memory][memory] | repository instruction hierarchy and memory boundary | 2026-11-22 |
| [Claude Code settings][settings] | project source settings and effective-state boundary | 2026-11-22 |
| [Claude Code MCP][mcp] | project MCP source configuration and active-state boundary | 2026-11-22 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, rechecked the three Claude Code sources: the repository instruction files, `.claude/settings.json` and `.mcp.json` the standard names are unchanged, and no rule changed.

**Watching:**

- The memory page now has Claude Code read `AGENTS.md` where no `CLAUDE.md`, `.claude/CLAUDE.md` or `CLAUDE.local.md` is found, from v2.1.277, and caps `@` imports at four hops; the audit observes neither `AGENTS.md` nor `CLAUDE.local.md`, and its resolver bounds imports at twelve levels.

[Back to contents](#contents)

[memory]: https://code.claude.com/docs/en/memory
[settings]: https://code.claude.com/docs/en/settings
[mcp]: https://code.claude.com/docs/en/mcp
