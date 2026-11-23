---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T23:56:44Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Codex tokenomics standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

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

## 3. Decisions

The rules follow the outside sources above and `ki-env-tokenomics`'s portable policy; one decision is recorded by id below.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ENV-FIXES a | All ten Environment skills are kept, with the fixes: `ki-env-housekeeping-chatgpt` repointed from the old Inbox (`krisb/inbox`) to Harbour (`krisb/ki-cairn-harbour`); `ki-env-housekeeping-claude`'s memory text trimmed to the disabled case; `ki-env-binding-chatgpt` refreshed, due since 12 November; `ki-env-binding-chezmoi`'s SKILL.md, which stated its composition three times, trimmed to once; the two tokenomics adapters' sources refreshed with the MODEL-TIERS move; no regrouping by host. Kris, 22 November 2026, about 21:45 GMT, the Environment guild's sitting, card: "Keep all ten, with fixes"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Sources](#21-authoritative) | In force |
| MODEL-TIERS a | The Claude and Codex model-tier standards move from `ki-env-tokenomics-claude` and `ki-env-tokenomics-chatgpt` into `ki-model-radar`; the adapters and `ki-env-tokenomics` keep the four purposes and point to the radar, the tier-movement rule is kept once, and the Fable 5.1 drift goes with the move. Kris, 22 November 2026, about 21:43 GMT, the Environment guild's sitting, card: "Move to ki-model-radar"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Codex tokenomics standard, 4.3](standard-codex-tokenomics.md#43-model-tier-evidence) | In force |
| RADAR-MERGE a | “a: `ki-agentic-radar` and `ki-model-radar` merge into one `ki-radar`: a shared radar standard, a standard and snapshot for each subject kind kept intact, one rubric, one REFRESH, the evidence schemas merged, and a monthly cadence matching how they are run; MODEL-TIERS' tiers go with it (Kris, 22 November, about 22:33 GMT, the Agentic ecosystems guild's sitting, card: "One ki-radar, monthly")”, Cairn summit's change 10, 4.3, landed under step 6.3. The dated Codex model-tier evidence and role resolver now live in `ki-radar`'s model-tier standard, and this adapter points there. | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied ENV-FIXES a, recorded under [Decisions](#3-decisions): the four Codex sources were rechecked and their links follow the documentation's move to learn.chatgpt.com. A project `.codex/config.toml` is still read only when the project is trusted, `AGENTS.md`, `.agents/skills/` and `.codex/agents/` are unchanged, and `AGENTS.override.md` is held under Watching. The GPT-6 guide left with the model tiers. No rule changed.

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied MODEL-TIERS a, recorded under [Decisions](#3-decisions): the dated model-tier evidence moved to `ki-model-radar`'s model-tier standard, and this skill points there. No criterion changed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standards and this file into `ki-authoring`'s formats: `standards-codex-tokenomics.md` and `standards-model-tier-resolution.md` were renamed `standard-codex-tokenomics.md` and `standard-model-tier-resolution.md` and their rules placed, unchanged, under numbered sections, and this file took the sources format, with the GPT-6 guide, which the model-tier standard calls planning evidence, as advisory. The rubric's source names follow. No rule changed and no outside source was refreshed.

**Model-tier evidence refreshed 2026-09-30**, before it moved to `ki-model-radar`. Project source observations remain distinct from user configuration and effective session state, which are unavailable to this adapter.

**Watching:**

- Codex now reads `AGENTS.override.md` before `AGENTS.md` in each directory, and stops adding instruction files at `project_doc_max_bytes`, 32 KiB by default; the audit observes `AGENTS.md` only.

[Back to contents](#contents)

[config]: https://learn.chatgpt.com/docs/config-file/config-reference
[instructions]: https://learn.chatgpt.com/docs/agent-configuration/agents-md
[mcp]: https://learn.chatgpt.com/docs/extend/mcp?surface=cli
[skills]: https://learn.chatgpt.com/docs/build-skills
