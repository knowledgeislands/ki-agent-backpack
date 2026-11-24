---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the delegation standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the background-run standard](standard-background-runs.md), [the delegation-packet standard](standard-delegation-packets.md), the authority footers and grants in `assets/`, and the [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

Knowledge Islands' own delegation practice and the neighbouring skills govern; the vendor subagent guides inform the ordinary task fit this skill leaves to them.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Knowledge Islands delegation practice | Durable high-risk handoff, authority, escalation, verification, and return boundaries; background runs on the agent host's own subagents within the package's repositories, run packet and report homing, authority tiers and grants, decisions log and its tracked home in the package, coordination, worktree placement, concurrency, monitoring, and the owner report with its Needs tags; coordinating work is `ki-coordination`'s | 2026-11-23 |
| `ki-env-tokenomics` | Model-purpose and context-cost policy belong outside the packet, including the coordinating-thread model | 2026-11-23 |
| `ki-work-roadmap` | Approved work-record lifecycle, plan ownership, and review boundary | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [OpenAI: Codex subagents][openai-subagents] | Ordinary subagent task selection, permissions, and execution guidance | 2026-11-23 |
| [Anthropic: Claude Code sub-agents][anthropic-subagents] | Ordinary subagent task fit, restricted capabilities, and isolation guidance | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched both vendor guides and re-read the in-house sources, and found that no rule needs to change. Claude Code's sub-agents page still describes a subagent as its own context returning a summary, with tool limits, inherited permission modes and worktree isolation; subagents now start in the background by default and surface their permission prompts in the main session, which an unattended run still cannot answer, as [Permission prompts](standard-background-runs.md#483-permission-prompts) holds. OpenAI's Codex subagents page still favours read-heavy work over parallel write-heavy work, with subagents inheriting the parent's sandbox and approvals, and its concurrency setting is now `agents.max_concurrent_threads_per_session`. The standards follow the house's current delegation practice, `ki-env-tokenomics` still owns model-purpose and context-cost policy, and `ki-work-roadmap` the work-record lifecycle.

**Watching:**

- Re-review quarterly or when either guide changes its delegation, isolation, permission, or background-execution semantics. Watch whether a runtime adds durable, portable authority and escalation records that make this packet redundant; until then, packets describe the needed governance boundary and executing processes choose a mechanism that can honour it.
- Claude Code's `isolation: worktree` branches from the default branch, not the parent's `HEAD`, so a worktree subagent does not see unpushed work on a coordinator's branch; [Coordination rules](standard-background-runs.md#481-coordination-rules) places worktree runs itself and does not rely on it.
- Whether a run confirms that a linked worktree inherits its primary checkout's `ki` registration, so that `ki repo audit` runs in the worktree directly; the isolated-home recipe in [Coordination rules](standard-background-runs.md#481-coordination-rules) stays the fallback until one does.
- Whether the interactive cause of Claude Code's `rm` safety prompts under bypass mode is confirmed from a prompt's wording, and whether Codex gains a counterpart; until then the shapes [Permission prompts](standard-background-runs.md#483-permission-prompts) names remain the probable cause.

[Back to contents](#contents)

[anthropic-subagents]: https://code.claude.com/docs/en/sub-agents
[openai-subagents]: https://learn.chatgpt.com/docs/agent-configuration/subagents
