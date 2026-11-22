---
id: product.gemini-cli
title: Gemini CLI (Google)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Google
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEM-HOME b and ECOSYSTEM-SHAPE a (22 November 2026)
links:
  industry.agent-harness:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.agent-skills:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
  spec.a2a:
    predicate: dcterms:conformsTo
  google.gemini:
    predicate: skos:related
---

# Gemini CLI (Google)

Gemini CLI lets a developer use Gemini "to understand code, automate tasks, and build workflows with your local project context": "an open-source AI agent that brings the power of Gemini directly into your terminal" ([S1], [S2]). Google makes it, as `google-gemini/gemini-cli`, under the Apache License 2.0 ([S2]). It runs as a terminal CLI, headless for scripts, with a VS Code companion and in JetBrains and Zed through ACP ([S1], [S9]). Since 18 June 2026 it serves only organisations with Gemini Code Assist Standard or Enterprise licences or paid API keys; free, Google AI Pro and Ultra users moved to the Antigravity CLI ([S2], [S12]). The latest stable release seen is 0.70.0, of 19 November 2026 ([S3]). It is an [agent harness][industry.agent-harness] and a [client][industry.client]. Its skills follow the [Agent Skills specification][spec.agent-skills]. Its maker's own words for it are on the vendor card [Gemini (Google)][google.gemini].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Gemini models only on the pages read, Auto or a chosen model; "Not optimized for Gemini 4 Argon" | [S11], [S1] |
| [Session][industry.session] | `yes` | History saved per project; `gemini --resume`, the `/resume` browser, `/chat save` checkpoints, checkpointing and rewind | [S8], [S1] |
| [Subagent][industry.subagent] | `yes` | Markdown agents in `.gemini/agents/`, "exposed to the main agent as a tool", on by default; "Subagents cannot call other subagents" | [S4] |
| [Agent team][industry.agent-team] | `unknown` | No peer messaging described; a subagent "reports back to the main agent" | [S4] |
| [Skill][industry.skill] | `yes` | "Based on the Agent Skills open standard": `SKILL.md` from `.gemini/skills/` and `.agents/skills/`, extensions and built-ins | [S5] |
| [Instruction file][industry.instruction-file] | `yes` | `GEMINI.md` at global, workspace and subdirectory levels; `context.fileName` can add `AGENTS.md` and others, not loaded by default | [S6] |
| [Plugin][industry.plugin] | `yes` | Extensions bundle "prompts, MCP servers, custom commands, themes, hooks, sub-agents, and agent skills", from a GitHub URL or a folder | [S10] |
| [MCP][spec.mcp] | `yes` | "Extend the tool with MCP servers"; subagents can declare their own | [S2], [S4] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox` or `container`: Seatbelt, Docker or Podman, the Windows sandbox, gVisor, and LXC experimentally; the whole-process sandbox is opt-in | [S7] |
| [Client][industry.client] | `yes` | Terminal; the VS Code companion; ACP editors such as JetBrains and Zed | [S9] |
| [Agent host][industry.agent-host] | `unknown` | The pages read do not say it runs other makers' harnesses | [S1] |
| [Channel][industry.channel] | `unknown` | Nothing found | [S1] |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | Nothing found | [S4] |
| [ACP][spec.acp] | `yes` | As agent: "Gemini CLI is an ACP-compatible agent available in the ACP Agent Registry" | [S9] |
| [AHP][spec.ahp] | `unknown` | Not mentioned | [S1] |
| [A2A][spec.a2a] | `yes` | As client: subagents of `kind: remote` "delegate tasks to remote subagents using the Agent-to-Agent (A2A) protocol" | [S4] |
| [Bot][system.bot] | `unknown` | Nothing found; Auto Memory is experimental. Scheduling: headless runs for scripts, no built-in scheduler found | [S1], [S2] |

## State of play

- **2026-11-19:** Version 0.70.0: insecure system MCP servers skipped, policy patterns evaluated in linear time, worktree and IDE fixes. ([S3])
- **2026-06-18:** Free, Google AI Pro and Ultra access moved to the Antigravity CLI; Gemini CLI is "maintained for enterprise Gemini Code Assist workflows on Google Cloud". ([S2], [S12])
- **2026-05-19:** Google announced the move to the Antigravity CLI: skills, hooks, subagents and extensions carry over, without full parity at first. ([S12])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Google, Gemini CLI documentation | 2026-11-22 |
| [S2] | Google, google-gemini/gemini-cli README | 2026-11-22 |
| [S3] | Google, gemini-cli releases | 2026-11-22 |
| [S4] | Google, Gemini CLI subagents | 2026-11-22 |
| [S5] | Google, Agent Skills in Gemini CLI | 2026-11-22 |
| [S6] | Google, Project context (GEMINI.md) | 2026-11-22 |
| [S7] | Google, Sandboxing | 2026-11-22 |
| [S8] | Google, Session management | 2026-11-22 |
| [S9] | Google, IDE integration | 2026-11-22 |
| [S10] | Google, Extensions | 2026-11-22 |
| [S11] | Google, Model selection | 2026-11-22 |
| [S12] | Google Developers Blog, Transitioning Gemini CLI to Antigravity CLI, 19 May 2026 | 2026-11-22 |

[industry.model]: ../industry/industry.model.md
[industry.session]: ../industry/industry.session.md
[industry.subagent]: ../industry/industry.subagent.md
[industry.agent-team]: ../industry/industry.agent-team.md
[industry.skill]: ../industry/industry.skill.md
[industry.instruction-file]: ../industry/industry.instruction-file.md
[industry.plugin]: ../industry/industry.plugin.md
[spec.mcp]: ../specs/mcp/spec.mcp.md
[industry.environment]: ../industry/industry.environment.md
[industry.client]: ../industry/industry.client.md
[industry.agent-host]: ../industry/industry.agent-host.md
[industry.channel]: ../industry/industry.channel.md
[industry.cross-session-messaging]: ../industry/industry.cross-session-messaging.md
[spec.acp]: ../specs/acp/spec.acp.md
[spec.ahp]: ../specs/ahp/spec.ahp.md
[spec.a2a]: ../specs/a2a/spec.a2a.md
[system.bot]: ../system/system.bot.md
[industry.agent-harness]: ../industry/industry.agent-harness.md
[spec.agent-skills]: ../specs/agent-skills/spec.agent-skills.md
[google.gemini]: ../vendors/google/google.gemini.md
[S1]: https://geminicli.com/docs/
[S2]: https://github.com/google-gemini/gemini-cli
[S3]: https://github.com/google-gemini/gemini-cli/releases
[S4]: https://geminicli.com/docs/core/subagents/
[S5]: https://geminicli.com/docs/cli/skills/
[S6]: https://geminicli.com/docs/cli/gemini-md/
[S7]: https://geminicli.com/docs/cli/sandbox/
[S8]: https://geminicli.com/docs/cli/session-management/
[S9]: https://geminicli.com/docs/ide-integration/
[S10]: https://geminicli.com/docs/extensions/
[S11]: https://geminicli.com/docs/cli/model/
[S12]: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
