---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-refresh: external-spec · quarterly
---

# Sources — where the tokenomics standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the tokenomics standard](standard-tokenomics.md), the portable policy, and its [rubric](rubric.md). Runtime configuration and model documentation are owned by the relevant adapter source list.

[Back to contents](#contents)

## 2. Outside sources

Two sources set the principles the portable policy follows.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Effective context engineering for AI agents][context] | finite-context and attribution principles | 2026-11-15 |
| [Agent Skills specification][skills] | skill descriptions as a standing selection surface | 2026-11-15 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

None recorded by id. The coordination recommendation in [Model purpose](standard-tokenomics.md#44-model-purpose) follows Kris's decision of 2026-10-13 in the `ways-of-working` run, recorded in the [Last review](#4-last-review).

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH redirects to the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the standard and this file into `ki-authoring`'s formats: the standard was renamed `standard-tokenomics.md`, from `standards-tokenomics.md`, and its rules placed, unchanged, under numbered sections, and this file took the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

**REFRESH last run 2026-11-15.** Both sources were re-read and confirmed. Anthropic's context-engineering article is unchanged since its September 2025 publication: context is still a finite attention budget that degrades as it grows, and the aim is still the smallest set of high-signal tokens, with tools, retrieval and sub-agents weighed for their cost. The Agent Skills specification still loads every skill's name and description at startup, at about 100 tokens each, and loads the body only on activation, so descriptions remain a standing selection surface. It still caps a description at 1,024 characters and recommends a body under 5,000 tokens and 500 lines. Nothing in either touches the budget defaults, the model-purpose set or POL-2.

**REFRESH last run 2026-10-13.** Under Kris's 2026-10-13 decision in the `ways-of-working` run that 'the main thread should be a coordinator, not do the reasoning', model purpose now recommends `fast`, or `standard` where needed, at low effort for coordinating threads, defined by `ki-delegation` at the time and by `ki-coordination` since 2026-10-14, reserving `reasoning` and `frontier` for the background agents that do the reasoning. This is practice-driven; the external sources were not re-reviewed, and the portable model-type set and POL-2 are unchanged.

The 2026-08-12 review made portable claims distinguish declared policy from observed measurement and effective runtime state.

**Watching:**

- The context-engineering article puts no token figures on tool definitions, so the MCP server budget remains a count of servers, not a token estimate.

[Back to contents](#contents)

[context]: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
[skills]: https://agentskills.io/specification
