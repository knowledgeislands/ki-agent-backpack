---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Claude Code tokenomics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Claude Code tokenomics evidence standard](standard-claude-tokenomics.md), [the Claude model-tier resolution standard](standard-model-tier-resolution.md) and their [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

Claude Code's documentation governs the filesystem audit; Anthropic's model pages inform the dated, advisory model-tier evidence.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Code memory][memory] | repository instruction hierarchy and memory boundary | 2026-08-12 |
| [Claude Code settings][settings] | project source settings and effective-state boundary | 2026-08-12 |
| [Claude Code MCP][mcp] | project MCP source configuration and active-state boundary | 2026-08-12 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [Claude models overview][models] | dated model-tier candidates, IDs, and effort defaults | 2026-09-30 |
| [Claude model IDs][model-ids] | fixed-model identity versus aliases | 2026-09-30 |

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the rules follow the outside sources above and `ki-env-tokenomics`'s portable policy.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standards and this file into `ki-authoring`'s formats: `standards-claude-tokenomics.md` and `standards-model-tier-resolution.md` were renamed `standard-claude-tokenomics.md` and `standard-model-tier-resolution.md` and their rules placed, unchanged, under numbered sections, and this file took the sources format, with the model pages, which feed the advisory model-tier evidence, as advisory. The rubric's source names follow. No rule changed and no outside source was refreshed.

**Model-tier evidence refreshed 2026-09-30.** The Claude Code filesystem sources were not rechecked in this targeted refresh. Project observations remain distinct from user overrides and effective session state, which are unavailable.

**Watching:**

- The three Claude Code filesystem sources, last reviewed 2026-08-12, are past their quarterly cadence.
- Haiku 4.5's retirement commitment, which needs lifecycle rechecking before a durable fast-tier binding.

[Back to contents](#contents)

[memory]: https://code.claude.com/docs/en/memory
[settings]: https://code.claude.com/docs/en/settings
[mcp]: https://code.claude.com/docs/en/mcp
[models]: https://platform.claude.com/docs/en/models/overview
[model-ids]: https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions
