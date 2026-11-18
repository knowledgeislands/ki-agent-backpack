---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T03:52:00Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The decisions and sources behind `ki-work`'s standards: [the change-management adapter standard](standard-change-management-adapters.md), [the next-work procedure](standard-next-work.md), [the readiness procedure](standard-plan-lifecycle.md), [the implementation procedure](standard-implementation.md), [the review closure and pruning procedure](standard-acceptance.md), [the recap procedure](standard-session-recap.md), [the work design standard](standard-work-design.md) and [the Project registry standard](standard-project-registry.md), with the [rubric](rubric.md).

The adapter contract and the work subcommands are house practice, reviewed when an adapter, a subcommand or the authority model for a tracker changes. The `recap` subcommand also tracks runtime documentation that moves, so the file is reviewed monthly. Each subcommand's local authority and earlier reviews follow, as the separate skills recorded them before they folded into this one; their lines keep the names the skills had then.

[Back to contents](#contents)

## 2. Outside sources

The recap's runtime claims follow vendor documentation; the adapter contract and the subcommands follow in-house standards owned by other skills; the design loop draws on its own first run.

### 2.1 Authoritative

Two sub-groups: the runtime documentation behind the recap, and the in-house standards the subcommands consume.

#### 2.1.1 Runtime documentation

The runtime documentation behind the recap's transcript and compaction claims.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CODEX-COMMANDS — [OpenAI Codex developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli) | User-invocable `/compact` and current Codex session controls | 2026-11-17 |
| CODEX-HOOKS — [OpenAI Codex hooks](https://learn.chatgpt.com/docs/hooks) | Manual/automatic compaction hooks and transcript-format stability boundary | 2026-11-17 |
| CLAUDE-SESSIONS — [Claude Code sessions](https://code.claude.com/docs/en/sessions) | Session storage, compaction, and transcript parsing boundary | 2026-11-17 |
| CLAUDE-HOOKS — [Claude Code hooks](https://code.claude.com/docs/en/hooks) | Manual/automatic compaction events | 2026-11-17 |
| CLAUDE-ENV — [Claude Code environment variables](https://code.claude.com/docs/en/env-vars) | `CLAUDE_CODE_SESSION_ID`, `CLAUDECODE`, `CLAUDE_CONFIG_DIR`, and `CLAUDE_CODE_PROJECT_DIR_NAME` for live-session transcript location | 2026-11-17 |

[Back to contents](#contents)

#### 2.1.2 In-house standards

The adapter contract is a backpack-owned boundary; review its sources when adding or changing an adapter, a shared process skill, or the authority model for a tracker. Remote adapter documentation is adapter-owned and must be refreshed by the owning adapter skill. These sources are reviewed on change rather than monthly; their last recorded reviews are in [4](#4-last-review).

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Repository kind contract](../../../keystone/ki-repo/references/standard-repository.md#42-repository-kind-and-knowledge-base-stores) | The adapters' local sources: the repository kinds an adapter is valid for | On change |
| [KB Streams placement contract](../../../repository/ki-repo-kb-streams/references/standards-streams-structure.md#roadmap) | The adapters' local sources: where a Knowledge Base keeps its records | On change |
| [Change-management adapter standard](standard-change-management-adapters.md) | `implement` and `accept`: selected-adapter resolution and the remote no-execution boundary | On change |
| [Repository work-item format](../../../work/ki-work-roadmap/references/standards-work-item-format.md#awaiting-review) | `implement` and `accept`: the roadmap review packet, its six headings, exact order, and producer/consumer semantics | On change |
| [Repository-roadmap lifecycle](../../../work/ki-work-roadmap/references/standards-repository-roadmaps.md#work-item-discipline) | `implement`: the local record lifecycle and `baseline_ref` evidence; `accept`: closure, selected pruning, and completion-observation retention | On change |
| [Housekeeping template state machine](../../../work/ki-work-recurring/references/standard-recurring-work.md#47-due-run-procedure) | `accept`: template shape and the division between spawning and successful completion | On change |

[Back to contents](#contents)

### 2.2 Advisory

The loop of [the work design standard](standard-work-design.md) is house practice, recorded from its first full run rather than imported from an external method.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| DESIGN-RUN — The roadmap-model design run of 7 October 2026, whose outcome Knowledge Islands Principal consolidated into one Decision Record | Five stages; a brief with a numbered reflection; three independent reviewers on different models, one also fact-checking the brief; a merged report settling disputes on evidence; the owner's decisions with an authority grant; a pilot record before parallel waves. Explicitly not adopted: its particular reviewer roster, keeping the artefacts in an untracked local folder, and later filing them as permanent supporting files in the decisions collection | 2026-10-07 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| PROCESS-SUBCOMMANDS | The `ki-next`, `ki-plan`, `ki-implement`, `ki-accept`, `ki-recap` and `ki-work-design` process skills fold into this skill as the `next`, `plan`, `implement`, `accept`, `recap` and `design` subcommands, each skill's body becoming its `mode-<verb>.md` and its standard, scripts and templates moving here unchanged in substance; in the Cairn summit's change 25 (now 14). | 2026-11-14 | [Next work](standard-next-work.md), [readiness](standard-plan-lifecycle.md), [implementation](standard-implementation.md), [acceptance](standard-acceptance.md), [recap](standard-session-recap.md), [work design](standard-work-design.md) | In force |
| RENAME-NOW | The renames of the Cairn summit's change 25 (now 14) land at once, with PROCESS-SUBCOMMANDS. | 2026-11-14 | [Next work](standard-next-work.md), [readiness](standard-plan-lifecycle.md), [implementation](standard-implementation.md), [acceptance](standard-acceptance.md), [recap](standard-session-recap.md), [work design](standard-work-design.md) | In force |
| IDEAS-INBOX | Roadmaps stop keeping `_IDEAS.md`, and an idea no Project or theme owns goes through capture, intake and maturation in the Inbox until it is ready to become a record; Kris, about 02:25 GMT, in the Cairn summit's [change 42](https://github.com/krisb/ki-cairn-store/blob/4af7d31/work/cairn/cairn.summit/42-roadmap-2.change.md#61-stop-keeping-ideasmd-in-roadmaps). | 2026-11-17 | [4.3.2](standard-next-work.md#432-capture-substantive-prospective-work) | In force |
| CAPTURE-GATE | Option a): "runs never create records; the owning work's coordinator captures only a blocker, a defect seen failing or a Kris request; ideas go to Project notes; small audit fixes need no record". | 2026-10-19 | [4.3.2](standard-next-work.md#432-capture-substantive-prospective-work) | In force; ideas without a Project now go to the Inbox under IDEAS-INBOX |
| HANDOFF-AS-MESSAGE | "Handoffs are not roadmap items ... A rollout that needs people to make those changes sooner rather than later must go as a message". | 2026-10-20 | [4.3.2](standard-next-work.md#432-capture-substantive-prospective-work) | In force; the message now goes along the tree under MSG-RETIRE |
| MSG-RETIRE | The message queue retires, and work between packages goes along the tree under `ki-coordination`. | 2026-11-17 | [4.3.2](standard-next-work.md#432-capture-substantive-prospective-work) | In force |
| HELD-VS-RECORD | Option a): deliverable work that the run or session producing it did not deliver, and that outlives that session, becomes an unadopted triage record in its home repository; a package's `## Held` list keeps only items waiting on a named decision or event. | 2026-11-07 | [4.3.2](standard-next-work.md#432-capture-substantive-prospective-work) | In force |
| ACCEPT-BUNDLE | "from Knowledge Islands perspective, I think we need to accept them ... happier for us to go through that ... definitely something that should happen as the first point of call in the state of play": a coordinating work brings its `awaiting-review` records as one `ACCEPT` query. | 2026-10-20 | [4.2](standard-acceptance.md#42-obtain-closure-authority) | In force |
| RECAP-OWNER | "RECAP-OWNER - ki-recap keeps the ordinary session recap only, and ki-coordination's standard carries the one sentence saying so". | 2026-10-14 | [Recap](standard-session-recap.md) | In force |
| RECAP-NAME | The composition argument is `checkpoint <work id>`, because the work model made work the unit; `checkpoint <thread>` accepted through the tolerance window. | 2026-10-26 | [Recap](standard-session-recap.md) | Superseded by RECAP-NARROW |
| RECAP-NARROW | Option a): the skill keeps only the conversational session recap and its learning routes; the `checkpoint <work id>` composition and its preflight model, and the batch-retention housekeeping, are removed. | 2026-11-07 | [Recap](standard-session-recap.md) | In force |
| BATCH-RETIRE | Option a): `ki-batch` is retired, and an unattended window's grant in the coordinating package's decisions log is the one authority record for autonomous delivery, under `ki-coordination`. | 2026-11-07 | [Adapters](standard-change-management-adapters.md) | In force; its remaining transition is in [the adapter migration](standards-change-management-adapters-migration.md) |
| MIGRATION-OVERLAY | A standard describes only the final state; a transition it leaves out is held in a migration file beside it until every step has landed. | 2026-11-07 | [Adapters](standard-change-management-adapters.md) | In force |
| LOOP-NAME | "LOOP-NAME - `ki-work design`": the `ki-design-loop` skill becomes the work design subcommand, the method still called a design loop. | 2026-10-14 | [1](standard-work-design.md#1-introduction) | In force |
| DOC-TYPES | Option a), Kris at 22:05 CET, relayed by `personal.reg.inbox`: two document types only, the change document (`.change.md`) and the standard, a design note becoming a change document. | 2026-11-08 | [4.1](standard-work-design.md#41-artefact-home) | In force; the types are `ki-authoring`'s |
| STD-BASE | Option a), the same: every change document carries `Base: ki-agent-backpack@<commit>` and a `Touches:` line, rebased by reading `git diff <base>..main -- <touched files>`. | 2026-11-08 | [4.1](standard-work-design.md#41-artefact-home) | In force; the change document's header is `ki-authoring`'s |
| OLD-SHAPE-HOMES | Option a): "briefs and reports go into wherever they need to go into"; a design is a change document in its work's package in the Cairn store. | 2026-11-14 | [4.1](standard-work-design.md#41-artefact-home) | In force |
| REVIEW-INDEPENDENCE | Blind reviews "must be able to challenge" earlier decisions. | 2026-10-30 | [4.2](standard-work-design.md#42-stage-contracts) | In force |
| REVIEW-CHALLENGE | Option a), taken under ACCEPT-BY-CRITERIA: a reviewer may challenge any earlier decision the brief names, listing each under **Challenges**, and the merged report puts each to the owner. | 2026-10-31 | [4.2](standard-work-design.md#42-stage-contracts) | In force |
| OPENER-NAME | Option a), in conversation: every brief that starts a new agent session names its thread line and tells the session to rename itself to it first. | 2026-11-14 | [4.2](standard-work-design.md#42-stage-contracts) | In force |
| OPENER-DELEGATE | Option a), in conversation: every opener or brief that starts a session tells it to delegate its work to its agent host's own subagents, stay responsive while that work runs, and check what they return before posting it. | 2026-11-14 | [4.2](standard-work-design.md#42-stage-contracts) | In force |
| THEME-CLOSE | The `Streams/Initiatives/` and `initiative:` warnings become failures on 7 November 2026, or earlier once a scan finds no residue. | 2026-10-25 | [4.13](standard-project-registry.md#413-tolerance-window) | In force |

[Back to contents](#contents)

## 4. Last review

Later on 18 November 2026 the Keystone guild's review, from the Cairn summit's change 10, brought the old package shape's last words out of `ki-work`: a work package keeps no decisions log, its owner's decisions being logged in its change documents, so [the acceptance procedure](standard-acceptance.md#42-obtain-closure-authority), the `accept` and `next` modes now find an acceptance bundle's answer and an unattended window's grant in the change document, as `ki-coordination`'s unattended rule already did. No criterion changed and no outside source was refreshed.

On 18 November 2026 the Keystone guild's review in the Cairn summit's change 10 brought this skill's files into `ki-authoring`'s formats: each plural standard was renamed `standard-<name>.md` and reshaped to the standard format, its rules moved into numbered sections unchanged in substance, and this file was reshaped to the sources format, the decisions its standards name gathered into [3](#3-decisions) with their recorded dates and words. The adapter migration keeps its plural name for now. No rule changed and no outside source was refreshed.

On 17 November 2026 Kris took IDEAS-INBOX a, at about 02:25 GMT in the Cairn summit's [change 42](https://github.com/krisb/ki-cairn-store/blob/4af7d31/work/cairn/cairn.summit/42-roadmap-2.change.md#61-stop-keeping-ideasmd-in-roadmaps): roadmaps stop keeping `_IDEAS.md`, and an idea no Project or theme owns goes through capture, intake and maturation in the Inbox until it is ready to become a record. `ki-work next`'s [capture rule](standard-next-work.md#432-capture-substantive-prospective-work) and its mode summary now send such an idea to the Inbox, following the roadmap standard's [ideas rule](../../../work/ki-work-roadmap/references/standards-repository-roadmaps.md#ideas-and-graduation). This is an in-house decision review; no external source was refreshed.

On 14 November 2026 Kris also took OPENER-DELEGATE a in conversation: every opener or brief that starts a session tells it to delegate its work to its agent host's own subagents, stay responsive while that work runs, and check what they return before posting it. The design loop's [Reviews](standard-work-design.md#42-stage-contracts) stage now says so for a review started in a session of its own. No external source was refreshed.

On 14 November 2026 Kris took OPENER-NAME a in conversation: every brief that starts a new agent session names its thread line and tells the session to rename itself to it first. The design loop's [Reviews](standard-work-design.md#42-stage-contracts) stage now says so for a review started in a session of its own; a background run needs nothing. No external source was refreshed.

On 14 November 2026, under PROCESS-SUBCOMMANDS and RENAME-NOW in the Cairn summit's change 25 (now 14), the `ki-next`, `ki-plan`, `ki-implement`, `ki-accept`, `ki-recap` and `ki-work-design` process skills folded into this skill as the `next`, `plan`, `implement`, `accept`, `recap` and `design` subcommands, and this skill now leads the Work guild. Each skill's body became its `mode-<verb>.md` reference, loaded only when the subcommand is called, and its standard, scripts and templates moved here unchanged in substance. The kept boundaries survive as rules of their subcommands: `implement` never accepts its own work, and `accept` needs the owner's approval. No external source was refreshed.

Earlier reviews, as each subcommand's skill recorded them:

- **implement,** 2026-08-12: the selected-adapter standard continued to make remote execution fail closed pending `KI-HARNESS-FND-014`; the roadmap work-item format continued to own the six-part review packet. This skill consumes those contracts and does not redefine them.
- **implement,** October 2026: Kris's 13 October 2026 coordinating-work rule, carried by [Coordinator responsiveness](../../../work/ki-coordination/references/standards-coordination.md#coordinator-responsiveness), requires detached background runs for implementation units. His 16 October separation of [conversational bounded work](../../../work/ki-coordination/references/standards-reporting.md#conversational-bounded-work) preserves direct work in an ordinary session; bounded subagents inside an authorised delivering run do not replace the coordinator's detached run.
- **accept,** 2026-10-05: the owner approved the cross-repository reference preflight after a Done record remained linked from an archived, deregistered peer. Pruning now distinguishes mechanically discovered references from surviving dependencies, records search coverage, verifies immutable history links, and retains affected records when evidence or repair authority is unavailable. The change grants no peer mutation or publication authority.
- **accept,** 2026-08-12: the integrated local standards retained selected-adapter resolution, the exact six-heading review packet, completion-observation retention, and the successful-run boundary. `ki-accept` consumes those contracts without creating a remote execution path or a second tracker.
- **recap,** 2026-11-17: REFRESH re-fetched the five runtime sources, taken by the Cairn summit's guardian at about 04:03 GMT from the summit's change 11, gap 4; no claim the recap relies on changed. Both Codex and Claude Code still offer `/compact`, and both document `PreCompact` and `PostCompact` hooks matched on `manual` or `auto`, with `SessionStart` firing again after a compaction. Codex hooks receive `transcript_path` and warn that the transcript format "isn't a stable interface"; Claude Code's sessions page says the same of its JSONL entries and keeps transcripts at `<config>/projects/<project>/<session-id>.jsonl`. `CLAUDE_CODE_SESSION_ID` still matches the hook `session_id`, updates on `/clear`, and takes the resumed id on `--resume <session-id>`; an MCP server subprocess keeps the id it was spawned with. `CLAUDE_CODE_PROJECT_DIR_NAME` now takes effect only when `CLAUDE_CONFIG_DIR` is set too, from Claude Code v2.1.234, which the helper's probe of every project directory already absorbs.
- **recap,** 2026-11-07: an in-house review under `cm-tidy` applies RECAP-NARROW, which Kris took that day as option a): the skill keeps only the conversational session recap and its learning routes. The `checkpoint <work id>` composition and its preflight model are removed, since `ki-work-package` owns every package write, and so is the batch-retention housekeeping, since `ki-batch` is retired under BATCH-RETIRE. The RECAP-NAME entry below records the argument's earlier name only.
- **recap,** 2026-10-26: an in-house review under `wow-harness-a` applies RECAP-NAME, which Kris decided that day: the composition argument is `checkpoint <work id>`, because the work model made work the unit and the argument already resolves a work id; `checkpoint <thread>` is accepted through the tolerance window. Runtime sources were not re-fetched.
- **recap,** 2026-10-21: an in-house review under `wow-day-push-reporting` applies Kris's instruction to omit routine push state and other sessions' stacked commits from reports, preserving a report of a failed push that prevented publication of the session's own unit. The recap now follows the aligned `ki-git` and `ki-coordination` rule. Runtime sources were not re-fetched; implementation history is in Git.
- **recap,** 2026-10-14: under the `pmo-simplify` brief, the coordinating-thread hand-off was removed from this skill, which keeps the ordinary session recap only, after Kris decided in the `ways-of-working` thread, as received: "RECAP-OWNER - ki-recap keeps the ordinary session recap only, and ki-coordination's standard carries the one sentence saying so".
- **recap,** 2026-10-06: Claude Code documented `CLAUDE_CODE_SESSION_ID` as set in Bash, PowerShell, hook, and stdio MCP subprocesses, matching the hook `session_id` and updated on `/clear`; after `--continue` or an ID-less `--resume` it may carry the initial startup ID. Transcripts live at `<config>/projects/<project>/<session-id>.jsonl`. `<config>` is `CLAUDE_CONFIG_DIR` or `~/.claude`. `<project>` replaces every non-alphanumeric character of the working directory with `-`, is truncated with a hash beyond 200 characters, or is named by `CLAUDE_CODE_PROJECT_DIR_NAME`, and `/cd` relocates it. The helper therefore probes every project directory for the identified session rather than deriving the launch slug. The Codex documentation reviewed exposes no equivalent session-identity variable, so Codex selection remains bounded repository-matched discovery.
- **recap,** 2026-09-26: current official documentation still showed both Codex and Claude Code exposing user-invocable `/compact` alongside automatic compaction. Codex also documents explicit pre- and post-compaction hook events. These controls do not grant an agent standing authority to invoke compaction. Both vendors expose transcript paths or files, but their structured formats remain version-sensitive convenience surfaces; Git remains the authoritative repository-grounding source.
- **design,** 2026-11-08: Kris took DOC-TYPES a and STD-BASE a at 22:05 CET, relayed by `personal.reg.inbox`: two document types only, the change document (`.change.md`) and the standard, a design note becoming a change document; and every change document carries `Base: ki-agent-backpack@<commit>` and a `Touches:` line, rebased by reading `git diff <base>..main -- <touched files>`. The [artefact home](standard-work-design.md#41-artefact-home) now names the change document; `ki-authoring` owns the type and its header.
- **design,** October 2026: Kris's 14 October 2026 decision-tag rule, carried by the [coordination decisions life cycle](../../../work/ki-coordination/references/standards-decisions.md#decisions-life-cycle), supersedes numbered decision entries. Reports and the owner's decisions use matching tags; numbered reflection points remain claims.
- **design,** 2026-10-07: the run's brief, three reviews, merged report and decisions file shaped the stage contracts and templates. The run first kept its artefacts only in local state, and then beside its Decision Record in the decisions collection. The owner then ruled that design artefacts are temporary working material kept beside the subject Project or Initiative and deleted once consolidated, and that the decisions collection holds only Decision Records and their index; the artefact-home rule follows that ruling.

[Back to contents](#contents)
