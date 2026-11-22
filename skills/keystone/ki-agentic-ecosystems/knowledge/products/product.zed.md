---
id: product.zed
title: Zed (Zed Industries)
type: product
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
vendor: Zed Industries
reviewed: 2026-11-22
origin: ki.summit change 21, ECOSYSTEM-HOME b and ECOSYSTEM-SHAPE a (22 November 2026)
links:
  industry.client:
    predicate: skos:broadMatch
  industry.agent-host:
    predicate: skos:broadMatch
  industry.agent-harness:
    predicate: skos:broadMatch
  spec.mcp:
    predicate: dcterms:conformsTo
  spec.acp:
    predicate: dcterms:conformsTo
  zed.zed:
    predicate: skos:related
---

# Zed (Zed Industries)

Zed lets developers write code with agents in a fast, shared editor: "a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter" ([S11]). Zed Industries, Inc. makes it ([S11]). Its Agent Panel runs Zed's own "first-party agent", an [agent harness][industry.agent-harness], or External Agents over ACP, so Zed is also their [client][industry.client] and [agent host][industry.agent-host] ([S2], [S1]). It runs as a desktop editor on macOS, Windows and Linux, with no web or mobile version offered ([S16]). It is "GPL-3.0-or-later, with Apache-2.0 components where marked"; Personal is free, Pro $10 a month and Business $30 a seat, and "Zed does not charge for External Agents" ([S11], [S10], [S1]). The latest stable release seen is 1.29.3, of 20 November 2026 ([S12], [S13]). Its maker's own words for it are on the vendor card [Zed (Zed Industries)][zed.zed].

## Contents

- [Capabilities](#capabilities)
- [State of play](#state-of-play)
- [Sources](#sources)

## Capabilities

| Term | Value | Detail | Sources |
| --- | --- | --- | --- |
| [Model][industry.model] | `yes` | Zed-hosted models, the user's own keys for Anthropic, OpenAI, Google, Bedrock, OpenRouter, Copilot and others, and local models through Ollama and LM Studio | [S10], [S2] |
| [Session][industry.session] | `yes` | Archived threads go to Thread History, "you can restore them at any time"; External Agent threads can be imported; restore "may not work for every External Agent" | [S2], [S1] |
| [Subagent][industry.subagent] | `yes` | `spawn_agent` "Spawns a subagent with its own context window to perform a delegated task" | [S5] |
| [Agent team][industry.agent-team] | `unknown` | Parallel threads each work "independently"; no coordination described | [S8] |
| [Skill][industry.skill] | `partial` | `SKILL.md` in `~/.agents/skills/` and the worktree's `.agents/skills/`, following agentskills.io, other fields of the specification planned "in the near future" | [S4] |
| [Instruction file][industry.instruction-file] | `yes` | The first of `.rules`, `.cursorrules`, `.windsurfrules`, `.clinerules`, `.github/copilot-instructions.md`, `AGENT.md`, `AGENTS.md`, `CLAUDE.md` and `GEMINI.md`, and a personal `AGENTS.md` | [S3] |
| [Plugin][industry.plugin] | `yes` | Extensions, which can provide MCP servers; "Extension-provided agents are deprecated" for the ACP Registry | [S7], [S1] |
| [MCP][spec.mcp] | `yes` | Local and remote servers with OAuth, tools and prompts; servers "may be forwarded to External Agents over ACP" | [S7] |
| [Execution environment][industry.environment] | `yes` | `harness-sandbox`: Seatbelt on macOS, bubblewrap on Linux, WSL only on Windows, for the `terminal` and `fetch` tools; worktrees isolate parallel threads | [S6], [S8] |
| [Client][industry.client] | `yes` | The desktop editor: Agent Panel, Threads Sidebar and Terminal Threads | [S2], [S9] |
| [Agent host][industry.agent-host] | `yes` | External Agents over ACP, among them Claude Agent, Codex, Gemini CLI, OpenCode, Copilot and Cursor; Terminal Threads run any agent CLI "directly in Zed" | [S1], [S9] |
| [Channel][industry.channel] | `unknown` | No source found | None |
| [Cross-session messaging][industry.cross-session-messaging] | `unknown` | No source found | None |
| [ACP][spec.acp] | `yes` | As client: Zed "hosts the thread" and agents "communicate with Zed over ACP"; the ACP Registry is "the primary way" to add agents | [S1] |
| [AHP][spec.ahp] | `unknown` | No source found | None |
| [A2A][spec.a2a] | `unknown` | No source found | None |
| [Bot][system.bot] | `unknown` | No source found; threads keep working in the background, no scheduled runs documented | [S8] |

## State of play

- **2026-11-20:** Version 1.29.3 fixes OpenAI prompt caching; 1.29.1, of 18 November, added a setting to turn off automatic thread titles. ([S12], [S13])
- **2026-11-11:** Version 1.28.1: "Improved compatibility" with the latest ACP, better subagent cards, project-skill fixes for remote workspaces. ([S13])
- **2026-11-04:** Version 1.27.0 "Removed agent checkpoints and 'Restore Checkpoint' button". ([S13])
- **2026-08-12:** Zed Industries introduced Delta, a "multiplayer environment for coding with agents" on DeltaDB, in private beta; delta.dev now says "Now in Beta". ([S14], [S15])

## Sources

| Id | Source | Read |
| --- | --- | --- |
| [S1] | Zed Industries, External Agents | 2026-11-22 |
| [S2] | Zed Industries, Agent Panel | 2026-11-22 |
| [S3] | Zed Industries, Instructions | 2026-11-22 |
| [S4] | Zed Industries, Skills | 2026-11-22 |
| [S5] | Zed Industries, Tools | 2026-11-22 |
| [S6] | Zed Industries, Agent Sandboxing | 2026-11-22 |
| [S7] | Zed Industries, Model Context Protocol | 2026-11-22 |
| [S8] | Zed Industries, Parallel Agents | 2026-11-22 |
| [S9] | Zed Industries, Terminal Threads | 2026-11-22 |
| [S10] | Zed Industries, Pricing | 2026-11-22 |
| [S11] | Zed Industries, zed-industries/zed README | 2026-11-22 |
| [S12] | Zed Industries, Stable releases | 2026-11-22 |
| [S13] | Zed Industries, GitHub releases | 2026-11-22 |
| [S14] | Zed Industries blog, Introducing Delta | 2026-11-22 |
| [S15] | Zed Industries, Delta | 2026-11-22 |
| [S16] | Zed Industries, Download | 2026-11-22 |

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
[zed.zed]: ../vendors/zed/zed.zed.md
[S1]: https://zed.dev/docs/ai/external-agents
[S2]: https://zed.dev/docs/ai/agent-panel
[S3]: https://zed.dev/docs/ai/instructions
[S4]: https://zed.dev/docs/ai/skills
[S5]: https://zed.dev/docs/ai/tools
[S6]: https://zed.dev/docs/ai/sandboxing
[S7]: https://zed.dev/docs/ai/mcp
[S8]: https://zed.dev/docs/ai/parallel-agents
[S9]: https://zed.dev/docs/ai/terminal-threads
[S10]: https://zed.dev/pricing
[S11]: https://github.com/zed-industries/zed
[S12]: https://zed.dev/releases/stable
[S13]: https://github.com/zed-industries/zed/releases
[S14]: https://zed.dev/blog/introducing-delta
[S15]: https://delta.dev/
[S16]: https://zed.dev/download
