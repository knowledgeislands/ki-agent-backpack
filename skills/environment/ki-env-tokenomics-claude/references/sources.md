---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:35:58Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Claude Code tokenomics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Claude Code tokenomics evidence standard](standard-claude-tokenomics.md) and its [rubric](rubric.md). The model pages that backed the Claude model-tier evidence went with it to `ki-model-radar` under MODEL-TIERS a.

[Back to contents](#contents)

## 2. Outside sources

Claude Code's documentation governs the filesystem audit.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Code memory][memory] | repository instruction hierarchy and memory boundary | 2026-08-12 |
| [Claude Code settings][settings] | project source settings and effective-state boundary | 2026-08-12 |
| [Claude Code MCP][mcp] | project MCP source configuration and active-state boundary | 2026-08-12 |

[Back to contents](#contents)

## 3. Decisions

The rules follow the outside sources above and `ki-env-tokenomics`'s portable policy; one decision is recorded by id below.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| MODEL-TIERS a | The Claude and Codex model-tier standards move from `ki-env-tokenomics-claude` and `ki-env-tokenomics-chatgpt` into `ki-model-radar`; the adapters and `ki-env-tokenomics` keep the four purposes and point to the radar, the tier-movement rule is kept once, and the Fable 5.1 drift goes with the move. Kris, 22 November 2026, about 21:43 GMT, the Environment guild's sitting, card: "Move to ki-model-radar"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied MODEL-TIERS a, recorded under [Decisions](#3-decisions): the dated model-tier evidence moved to `ki-model-radar`'s model-tier standard, and this skill points there. No criterion changed.

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
