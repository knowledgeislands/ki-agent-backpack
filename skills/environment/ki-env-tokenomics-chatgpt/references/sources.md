---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Codex tokenomics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Codex tokenomics evidence standard](standard-codex-tokenomics.md), [the Codex model-tier resolution standard](standard-model-tier-resolution.md) and their [rubric](rubric.md). Mode REFRESH refreshes the adapter only from the official Codex documentation listed here.

[Back to contents](#contents)

## 2. Outside sources

OpenAI's Codex documentation governs the surfaces the adapter observes; its model guide informs the dated model-tier evidence.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Codex configuration][config] | trusted project configuration and effective-state boundary | 2026-08-12 |
| [Codex AGENTS.md instructions][instructions] | repository instruction source and loaded-hierarchy boundary | 2026-08-12 |
| [Codex MCP][mcp] | declared MCP source and active-state boundary | 2026-08-12 |
| [Codex skills][skills] | repository skill source directory | 2026-08-12 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [OpenAI GPT-6 guide][models] | current Astra/Sol/Luna positioning and reasoning-effort support | 2026-09-30 |

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the rules follow the outside sources above and `ki-env-tokenomics`'s portable policy.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standards and this file into `ki-authoring`'s formats: `standards-codex-tokenomics.md` and `standards-model-tier-resolution.md` were renamed `standard-codex-tokenomics.md` and `standard-model-tier-resolution.md` and their rules placed, unchanged, under numbered sections, and this file took the sources format, with the GPT-6 guide, which the model-tier standard calls planning evidence, as advisory. The rubric's source names follow. No rule changed and no outside source was refreshed.

**Model-tier evidence refreshed 2026-09-30.** Project source observations remain distinct from user configuration and effective session state, which are unavailable to this adapter. The other Codex integration sources were not rechecked in this targeted refresh.

**Watching:**

- The four Codex integration sources, last reviewed 2026-08-12, are past their quarterly cadence.

[Back to contents](#contents)

[config]: https://developers.openai.com/codex/config-reference/
[instructions]: https://developers.openai.com/codex/guides/agents-md/
[mcp]: https://developers.openai.com/codex/mcp/
[skills]: https://developers.openai.com/codex/skills/
[models]: https://developers.openai.com/api/docs/guides/latest-model
