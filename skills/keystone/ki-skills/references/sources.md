---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Portable Agent Skills contract](#211-portable-agent-skills-contract)
    - [2.1.2 Established authoring practice](#212-established-authoring-practice)
    - [2.1.3 Runtime overlay: OpenAI](#213-runtime-overlay-openai)
    - [2.1.4 Knowledge Islands house standard](#214-knowledge-islands-house-standard)
    - [2.1.5 Runtime overlay: Claude Code](#215-runtime-overlay-claude-code)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Anthropic practice](#221-anthropic-practice)
    - [2.2.2 OpenAI practice](#222-openai-practice)
    - [2.2.3 Community](#223-community)
- [3. Last review](#3-last-review)

## 1. Introduction

The authoritative and community sources behind the [Agent Skills](standard-agent-skills.md), [Knowledge Islands](standard-knowledge-islands.md), [guilds](standard-guilds.md) and [rubric-authoring](standard-rubric-authoring.md) standards, the [skill](standard-formats-skill.md), [mode](standard-formats-mode.md), [exemplars](standard-formats-exemplars.md) and [rubric](standard-formats-rubric.md) formats, and their [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, diffs it against those standards and the rubric, then **bumps the `last reviewed` dates** and refreshes the [Last review](#3-last-review) block below (what changed is recorded in the commit, not a changelog). This is the skill's memory of where best practice comes from — keep it current.

Abbreviations match the `(SOURCE)` tags in the standards and [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

The specifications, practice and runtime documentation the standards follow or draw on. Each source carries its tag, as the standards and rubric cite it.

### 2.1 Authoritative

The portable contract, established practice, the runtime overlays and the house standard.

[Back to contents](#contents)

#### 2.1.1 Portable Agent Skills contract

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SPEC — [Agent Skills specification][spec] | Format and constraints | 2026-11-23 |
| — [`skills-ref validate`][skills-ref]‡ | Demonstration validator | 2026-11-23 |

‡ The reference library explicitly says it is demonstration-only and unsuitable as a production validator; it remains supporting validation evidence subordinate to the specification.

[Back to contents](#contents)

#### 2.1.2 Established authoring practice

The Agent Skills [documentation index][agentskills-index] is the inventory authority for this set. Every REFRESH fetches it first, reconciles this table with its current pages, then reviews every listed page individually. The index currently lists the nine documentation pages below; the index itself is also tracked because it detects additions and removals.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| AS — [Agent Skills documentation index][agentskills-index] | Page inventory | 2026-11-23 |
| AS — [Agent Skills overview][home] | Conceptual overview | 2026-11-23 |
| AS — [Skill-creator quickstart][quickstart] | First-skill workflow | 2026-11-23 |
| AS — [Skill-creator best practices][agentskills-best-practices] | Authoring guidance | 2026-11-23 |
| AS — [Optimising descriptions][optimizing-descriptions] | Description quality | 2026-11-23 |
| AS — [Evaluating skills][evaluating-skills] | Evaluation practice | 2026-11-23 |
| AS — [Using scripts][using-scripts] | Script execution | 2026-11-23 |
| AS — [Client showcase][clients] | Client inventory | 2026-11-23 |
| AS — [Adding skills support][adding-skills-support] | Client implementation | 2026-11-23 |
| BP — [Skill authoring best practices][bp] | Authoring checklist | 2026-11-23 |
| ENG — [Equipping agents with Agent Skills][eng]† | Design rationale | 2026-11-23 |

† Published 2025-10-16; updated to announce the open standard 2025-12-18.

[Back to contents](#contents)

#### 2.1.3 Runtime overlay: OpenAI

| Source | Governs | Last reviewed |
| --- | --- | --- |
| OA — [OpenAI Build skills][openai-skills] | ChatGPT/Codex runtime overlay | 2026-11-23 |

`OA` documents OpenAI runtime discovery, listing, path metadata, implicit invocation, and `agents/openai.yaml`. It qualifies runtime claims but never changes the portable Agent Skills contract.

[Back to contents](#contents)

#### 2.1.4 Knowledge Islands house standard

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ki-agent-backpack README — The repo's own `README.md` | Backpack structure | 2026-11-23 |
| ADR-KI-HARNESS-SKILLS-004 — Local decision record | Standalone skills and variation | 2026-11-23 |
| ADR-KI-HARNESS-SKILLS-006 — Local decision record | Kind, taxonomy, and dependencies | 2026-11-23 |

The README is cited only for the backpack's four-part structure. Local decision records, rather than the README, support the semantic house claims.

[Back to contents](#contents)

#### 2.1.5 Runtime overlay: Claude Code

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CC — [Claude Code — skills][cc] | Claude runtime overlay† | 2026-11-23 |

† Claude Code extensions and runtime behaviour. This overlay may qualify a portable or Knowledge Islands rule for Claude Code, but never weakens the portable contract.

[Back to contents](#contents)

### 2.2 Advisory

Discovery and community sources: supporting evidence, not normative rules.

[Back to contents](#contents)

#### 2.2.1 Anthropic practice

The Claude blog is a discovery source, not a normative standard. On each REFRESH, scan its landing page for new articles materially relevant to agent skills, agentic practice, or authoring workflows; open and assess only those relevant articles.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| BLOG — [Claude blog][claude-blog] | Agentic-practice and authoring article discovery | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.2 OpenAI practice

The OpenAI News page is a discovery source, not a normative standard. On each REFRESH, scan its landing page for new articles materially relevant to agent skills, agentic practice, or authoring workflows; open and assess only those relevant articles.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| OPENAI — [OpenAI News][openai-news] | Agentic-practice and authoring article discovery | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.3 Community

| Source | Informs | Last reviewed |
| --- | --- | --- |
| COMMUNITY — [Skill Authoring Patterns][patterns] | Patterns and feedback | 2026-11-23 |
| COMMUNITY — [obra/superpowers writing-skills][superpowers]† | Convergent conventions | 2026-11-23 |
| COMMUNITY — [skills.sh — Open Agent Skills Ecosystem][skills-sh] | Registry and security | 2026-11-23 |
| FAFF — [shftwst/faff][faff] | Claude Code delivery-harness and autonomy-gate discovery | 2026-11-23 |

† Community restatement of the best-practices document.

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, fetched [the documentation index][agentskills-index] first and found it still lists the same nine pages; each was fetched, and the Agent Skills repository shows no change since governance passed to the Agentic AI Foundation on 4 November, so the specification, every page and `skills-ref`, still demonstration-only, stand as last reviewed. BP, ENG, OA, CC, the house sources and the community sources were re-read and still support the standards and rubric as written, and neither discovery source carried a skill-authoring article. The review checked sources only and did not repeat the in-house scan.

**Watching:**

- ※3's substitution list lacks `${CLAUDE_PROJECT_DIR}` and the plugin-only `${CLAUDE_PLUGIN_ROOT}` and `${CLAUDE_PLUGIN_DATA}`; proposed on 2026-11-23.
- claude.ai uploads, the Skills API and `package_skill.py` reject any key outside the portable set with a hard error, which ※3 states only as "may not port"; proposed on 2026-11-23.
- Codex's `skills.max_context_tokens` raises the initial-list budget to 10,000 tokens, which 4.5.2 does not name; proposed on 2026-11-23.
- ADR-KI-HARNESS-SKILLS-006 still describes concern-first folders, which the backpack has since replaced with a folder per guild; proposed on 2026-11-23.

[Back to contents](#contents)

[spec]: https://agentskills.io/specification
[agentskills-index]: https://agentskills.io/llms.txt
[home]: https://agentskills.io/
[quickstart]: https://agentskills.io/skill-creation/quickstart
[agentskills-best-practices]: https://agentskills.io/skill-creation/best-practices
[optimizing-descriptions]: https://agentskills.io/skill-creation/optimizing-descriptions
[evaluating-skills]: https://agentskills.io/skill-creation/evaluating-skills
[using-scripts]: https://agentskills.io/skill-creation/using-scripts
[clients]: https://agentskills.io/clients
[adding-skills-support]: https://agentskills.io/client-implementation/adding-skills-support
[bp]: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
[cc]: https://code.claude.com/docs/en/skills
[eng]: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
[claude-blog]: https://claude.com/blog
[openai-news]: https://openai.com/news/
[openai-skills]: https://learn.chatgpt.com/docs/build-skills
[faff]: https://github.com/shftwst/faff
[skills-ref]: https://github.com/agentskills/agentskills/tree/main/skills-ref
[patterns]: https://generativeprogrammer.com/p/skill-authoring-patterns-from-anthropics
[superpowers]: https://github.com/obra/superpowers/blob/main/skills/writing-skills/references/anthropic-best-practices.md
[skills-sh]: https://www.skills.sh/
