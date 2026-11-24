---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the work subcommands' standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Runtime documentation](#211-runtime-documentation)
    - [2.1.2 In-house standards](#212-in-house-standards)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind `ki-work`'s standards: [the change-management adapter standard](standard-change-management-adapters.md), [the next-work procedure](standard-next-work.md), [the readiness procedure](standard-plan-lifecycle.md), [the implementation procedure](standard-implementation.md), [the review closure and pruning procedure](standard-acceptance.md), [the recap procedure](standard-session-recap.md), [the work design standard](standard-work-design.md) and [the Project registry standard](standard-project-registry.md), with the [rubric](rubric.md).

The adapter contract and the work subcommands are house practice, reviewed when an adapter, a subcommand or the authority model for a tracker changes. The `recap` subcommand also tracks runtime documentation that moves, so the file is reviewed monthly.

[Back to contents](#contents)

## 2. Outside sources

The recap's runtime claims follow vendor documentation; the adapter contract and the subcommands follow in-house standards owned by other skills; the design loop draws on its own first run.

### 2.1 Authoritative

Two sub-groups: the runtime documentation behind the recap, and the in-house standards the subcommands consume.

#### 2.1.1 Runtime documentation

The runtime documentation behind the recap's transcript and compaction claims.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CODEX-COMMANDS — [OpenAI Codex developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli) | User-invocable `/compact` and current Codex session controls | 2026-11-22 |
| CODEX-HOOKS — [OpenAI Codex hooks](https://learn.chatgpt.com/docs/hooks) | Manual/automatic compaction hooks and transcript-format stability boundary | 2026-11-22 |
| CLAUDE-SESSIONS — [Claude Code sessions](https://code.claude.com/docs/en/sessions) | Session storage, compaction, and transcript parsing boundary | 2026-11-22 |
| CLAUDE-HOOKS — [Claude Code hooks](https://code.claude.com/docs/en/hooks) | Manual/automatic compaction events | 2026-11-22 |
| CLAUDE-ENV — [Claude Code environment variables](https://code.claude.com/docs/en/env-vars) | `CLAUDE_CODE_SESSION_ID`, `CLAUDECODE`, `CLAUDE_CONFIG_DIR`, and `CLAUDE_CODE_PROJECT_DIR_NAME` for live-session transcript location | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.2 In-house standards

The adapter contract is a backpack-owned boundary; review its sources when adding or changing an adapter, a shared process skill, or the authority model for a tracker. Remote adapter documentation is adapter-owned and must be refreshed by the owning adapter skill. These sources are reviewed on change rather than monthly; their latest review is in [Last review](#3-last-review).

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Repository kind contract](../../../keystone/ki-repo/references/standard-repository.md#42-repository-kind-and-knowledge-base-stores) | The adapters' local sources: the repository kinds an adapter is valid for | On change |
| [Knowledge Base Streams layout](../../../repository/ki-repo-kb/references/standard-knowledge-base.md) | The adapters' local sources: where a Knowledge Base keeps its records | On change |
| [Change-management adapter standard](standard-change-management-adapters.md) | `implement` and `accept`: selected-adapter resolution and the remote no-execution boundary | On change |
| [Repository work-item format](../../../work/ki-work-roadmap/references/standard-work-item-format.md#4136-awaiting-review) | `implement` and `accept`: the roadmap review packet, its six headings, exact order, and producer/consumer semantics | On change |
| [Repository-roadmap lifecycle](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#48-work-item-discipline) | `implement`: the local record lifecycle and `baseline_ref` evidence; `accept`: closure, selected pruning, and completion-observation retention | On change |
| [Housekeeping template state machine](../../../work/ki-work-recurring/references/standard-recurring-work.md#47-due-run-procedure) | `accept`: template shape and the division between spawning and successful completion | On change |

[Back to contents](#contents)

### 2.2 Advisory

The loop of [the work design standard](standard-work-design.md) is house practice, recorded from its first full run rather than imported from an external method.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| DESIGN-RUN — The roadmap-model design run of 7 October 2026, whose outcome Knowledge Islands Principal consolidated into one Decision Record | Five stages; a brief with a numbered reflection; three independent reviewers on different models, one also fact-checking the brief; a merged report settling disputes on evidence; the owner's decisions with an authority grant; a pilot record before parallel waves. Explicitly not adopted: its particular reviewer roster, keeping the artefacts in an untracked local folder, and later filing them as permanent supporting files in the decisions collection | On change |

[Back to contents](#contents)

## 3. Last review

On 22 November 2026 the latest review re-fetched the five runtime sources behind the recap, and no claim the recap relies on had changed: Codex and Claude Code still document `/compact`, the `PreCompact` and `PostCompact` hooks matched on `manual` or `auto`, and `SessionStart` firing after a compaction, and both still call their transcript format internal and liable to change. The in-house standards the subcommands consume are reviewed on change, and the subcommands' standards follow them as they stand. DESIGN-RUN was not re-reviewed, since the run's artefacts were deleted once consolidated and nothing outside the house records it.

**Watching:**

- The recap's runtime detection: Claude Code's IDE extensions also set `CLAUDECODE=1` in their integrated terminals, so a grounding helper run by hand there reads as Claude Code and skips Codex transcripts. Change the detection to `CLAUDE_CODE_CHILD_SESSION` or `CLAUDE_CODE_SESSION_ID` if that case is seen in use or the vendor makes the variable authoritative.
- [The standing prune](standard-acceptance.md#443-the-standing-prune) runs through `accept prune`, because `ki repo roadmap prune` has no age or landed filter yet; it can move to the command once the command gains one.

[Back to contents](#contents)
