---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:16:03Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-claude

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind the [Claude binding standard](standard-claude-binding.md) and [rubric](rubric.md). Mode REFRESH re-examines each source, confirms the standard still matches, bumps the `last reviewed` dates, and refreshes the Last review block. The commit records what changed.

[Back to contents](#contents)

## 2. Outside sources

The standard follows Claude Code's MCP configuration documentation.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CC — [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp) | Native JSON definitions and explicit HTTP/SSE types | 2026-08-12 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ADR-KI-HARNESS-015 | Retire the Claude plugin projection: Knowledge Islands maintains no Claude Cowork plugin projection | 2026-10-05 | [Claude binding standard](standard-claude-binding.md#44-claude-cowork) | Current |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Claude binding standard](standard-claude-binding.md), formerly `standards-claude-binding.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

- 2026-08-12 — Claude Code MCP configuration reviewed.

**Watching:** every Claude-native configuration contract; refresh when any changes.

[Back to contents](#contents)
