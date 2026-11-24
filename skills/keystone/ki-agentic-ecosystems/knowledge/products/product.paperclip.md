---
id: product.paperclip
title: Paperclip (Paperclip Labs)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Paperclip Labs
reviewed: 2026-11-22
origin: ki.summit change 21 (22 November 2026)
links:
  industry.agent-host:
    predicate: skos:broadMatch
  industry.client:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
---

# Paperclip (Paperclip Labs)

Paperclip lets one person run a company of AI agents, with "org charts, budgets, goals, governance, and accountability": "the app people use to manage AI agents for work" ([S1]). Paperclip Labs, Inc. makes it, in the `paperclipai` GitHub organisation; it is "a Node.js server and React UI that orchestrates a team of AI agents to run a business", whose agents are other makers' harnesses such as Claude Code, Codex, Gemini CLI, Cursor, OpenCode, Pi and Hermes ([S1], [S2], [S5]). It runs self-hosted "as a local instance or a remote deploy", started from the `paperclipai` CLI, with a web board that phones can install as a standalone app, and a waitlist for a hosted app ([S1], [S2], [S4], [S19]). It is MIT open source, "self-hosted, no Paperclip account required" ([S1], [S2]). The latest release seen is v2026.1117.0, of 17 November 2026; the repository's Releases section is empty ([S3], [S2]). It is an [agent host][industry.agent-host] and a [client][industry.client].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Whatever its agents' harnesses run: "Agents bring their own prompts, models, and runtimes"; a default model per agent, with "provider/model routing" for OpenCode and Pi and "multi-provider routing" for Hermes | [S2], [S5], [S15] |
| [Session][industry.session] | `yes` | "sessions persist across reboots"; "Supporting adapters resume saved sessions across runs"; **Reset sessions** clears them | [S2], [S5], [S15] |
| [Subagent][industry.subagent] | `unknown` | Work is handed to other hired agents as child tasks, agents in their own right; the Runner page names "native child work" without saying what it is | [S17], [S16] |
| [Agent team][industry.agent-team] | `yes` | "Delegation flows up and down the org chart": managers "break their tasks into subtasks and assign to their reports", and "Comments are the primary communication channel between agents" | [S1], [S18], [S17] |
| [Skill][industry.skill] | `yes` | "A skill is a folder containing a `SKILL.md` file", from GitHub, skills.sh, local paths or a built-in catalogue, synced into each agent's workspace by its adapter; the pages read do not name the specification | [S6] |
| [Instruction file][industry.instruction-file] | `yes` | Each agent's instructions bundle has an entry file, usually `AGENTS.md`, "the file the adapter feeds to the agent on every run", beside `SOUL.md`, `HEARTBEAT.md` and `TOOLS.md` | [S15] |
| [Plugin][industry.plugin] | `partial` | "Plugins are in alpha": packages from npm, a local path or a bundled list add pages, widgets, scheduled jobs, webhooks and sandbox providers; no marketplace mentioned | [S7] |
| [MCP][spec.mcp] | `yes` | Connectors reach outside services "or your own MCP server", with per-action controls set to "Allowed, Ask first, or Off"; an MCP server can also be added to an agent at adapter level | [S2], [S8] |
| [Execution environment][industry.environment] | `partial` | `container` and `vendor-sandbox` through sandbox provider plugins (E2B, Daytona, Modal, Cloudflare, Kubernetes in alpha, boxd microVMs), under the experimental Environments setting; worktree "execution workspaces" otherwise | [S9], [S10], [S11] |
| [Client][industry.client] | `yes` | Web board and API at `localhost:3100`, a phone view that installs "as a standalone app", and the `paperclipai` CLI; desktop only as a "Community Desktop App (unofficial)" | [S2], [S4], [S19] |
| [Agent host][industry.agent-host] | `yes` | Adapters "Launch or call the underlying runtime" and "Capture results, session state, and usage metadata" for Claude Code, Codex, Gemini, Cursor, OpenCode, Pi, Hermes and others; the experimental Runner keeps "the provider process and session alive between runs" | [S5], [S16] |
| [Channel][industry.channel] | `partial` | Experimental chat connectors for Slack, Discord, Teams and Telegram, where "eligible messages can start or continue agent tasks"; signed webhook triggers start routines | [S8], [S11], [S13] |
| [Cross-session messaging][industry.cross-session-messaging] | `yes` | Agents message each other through task comments, and "a comment on an open task" wakes the assignee; "@mentions ... don't wake the mentioned agent"; Agent Chat is between a person and an agent | [S13], [S17], [S12] |
| [ACP][spec.acp] | `yes` | As client: `claude_local`, `codex_local`, `gemini_local` and `kimi_local` run "through the Agent Client Protocol" under the default `engine: auto`; "ACP agents include qualified Cursor, Pi, and GitHub Copilot runtimes" | [S5] |
| [AHP][spec.ahp] | `unknown` | Not found | None |
| [A2A][spec.a2a] | `unknown` | Not found; external agents join over MCP and HTTPS webhooks | [S14] |
| [Bot][system.bot] | `yes` | Each agent is named, with a role, a manager, "a persistent Ed25519 keypair" and its own folder for "notes, memory, reference material"; it wakes on timers, assignments, comments and routines | [S15], [S13] |

## State of play

- **2026-11-17:** Version 2026.1117.0, marked breaking: "The Coordinator workspace and Agent Chat are standard", agents post to their responsible person's chat with `send_chat_message`, sandbox workspaces survive a server replacement, and a boxd provider plugin runs each sandbox as a KVM microVM. ([S3], [S4])
- **2026-11-06:** Version 2026.1106.0, marked breaking; its notes were not read. ([S3])
- **2026-01-15:** Version 0.1.0, the oldest release on the changelog. ([S3])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Paperclip Labs, Paperclip home | 2026-11-22 |
| [S2] | Paperclip Labs, paperclipai/paperclip repository | 2026-11-22 |
| [S3] | Paperclip Labs, Paperclip changelog | 2026-11-22 |
| [S4] | Paperclip Labs, changelog v2026.1117.0 | 2026-11-22 |
| [S5] | Paperclip Labs, Paperclip docs: Adapters overview | 2026-11-22 |
| [S6] | Paperclip Labs, Paperclip docs: Skills | 2026-11-22 |
| [S7] | Paperclip Labs, Paperclip docs: Plugins | 2026-11-22 |
| [S8] | Paperclip Labs, Paperclip docs: Connectors | 2026-11-22 |
| [S9] | Paperclip Labs, Paperclip docs: Sandbox providers | 2026-11-22 |
| [S10] | Paperclip Labs, Paperclip docs: Projects | 2026-11-22 |
| [S11] | Paperclip Labs, Paperclip docs: Experimental features | 2026-11-22 |
| [S12] | Paperclip Labs, Paperclip docs: Agent Chat | 2026-11-22 |
| [S13] | Paperclip Labs, Paperclip docs: Heartbeats and routines | 2026-11-22 |
| [S14] | Paperclip Labs, Paperclip docs: External agents | 2026-11-22 |
| [S15] | Paperclip Labs, Paperclip docs: Agents | 2026-11-22 |
| [S16] | Paperclip Labs, Paperclip docs: Paperclip Runner | 2026-11-22 |
| [S17] | Paperclip Labs, Paperclip docs: Issues API | 2026-11-22 |
| [S18] | Paperclip Labs, Paperclip docs: Building your org structure | 2026-11-22 |
| [S19] | Paperclip Labs, Paperclip docs: Deployment modes | 2026-11-22 |

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
[S1]: https://paperclip.ing
[S2]: https://github.com/paperclipai/paperclip
[S3]: https://paperclip.ing/changelog/
[S4]: https://paperclip.ing/changelog/v2026.1117.0/
[S5]: https://docs.paperclip.ing/reference/adapters/overview/
[S6]: https://docs.paperclip.ing/guides/org/skills/
[S7]: https://docs.paperclip.ing/administration/plugins/
[S8]: https://docs.paperclip.ing/connectors/
[S9]: https://docs.paperclip.ing/reference/adapters/sandbox-providers/
[S10]: https://docs.paperclip.ing/guides/projects-workflow/projects/
[S11]: https://docs.paperclip.ing/experimental/overview/
[S12]: https://docs.paperclip.ing/experimental/agent-chat/
[S13]: https://docs.paperclip.ing/guides/projects-workflow/routines/
[S14]: https://docs.paperclip.ing/experimental/external-agents/
[S15]: https://docs.paperclip.ing/guides/org/agents/
[S16]: https://docs.paperclip.ing/reference/adapters/paperclip-runner/
[S17]: https://docs.paperclip.ing/reference/api/issues/
[S18]: https://docs.paperclip.ing/guides/org/org-structure/
[S19]: https://docs.paperclip.ing/reference/deploy/deployment-modes/
