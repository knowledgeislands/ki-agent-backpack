---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — ki-agentic-ecosystems

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The vendor sources behind the skill's rules in [SKILL.md](../SKILL.md#rules) and its knowledge graph, opened by [its root definition](../knowledge/_graph.md): the industry's cards, from [model](../knowledge/industry/industry.model.md) to [skill](../knowledge/industry/industry.skill.md), the specification cards, and the vendor subgraphs. Each vendor card cites the sources below by their links. Provenance only: the record of what changed lives in git, not a changelog here.

The vendors' naming keeps changing, so refreshing is a regular activity, run monthly and whenever a vendor renames a product or a layer. Each refresh:

1. **Re-checks every source below,** and each source a card cites, for the names, the vendor's own word and the dates on each card, and records unverified or secondary facts as such.
2. **Watches how the industry's terms move:** a new word for a layer, a word that changes sense, a product renamed, merged, replaced or closed, and a vendor that starts or stops using a term.
3. **Keeps each vendor card current,** Anthropic and OpenAI first, then Google and Microsoft: its examples, its sense and its link to the industry's term, with a new vendor card for a new word and the card retired when a vendor drops one. A change to an industry card's definition is a change of substance and goes to the change that governs the skill, not into a refresh.
4. **Updates this file:** the last-reviewed dates, any source added or retired, and the Last review.

[Back to contents](#contents)

## 2. Outside sources

The vendors' own documentation and the specifications the cards follow, checked on 12 November 2026 and re-checked on 23 November 2026. The identifiers match the link labels on each card.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| **[A1]** [Anthropic, Models overview](https://platform.claude.com/docs/en/models/overview) | Model: current Claude models and ids | 2026-11-23 |
| **[A2]** [Anthropic, Claude Code overview](https://code.claude.com/docs/en/overview) | Agent harness and agent: Claude Code as harness and product | 2026-11-23 |
| **[A3]** [Anthropic, Claude Code glossary](https://code.claude.com/docs/en/glossary.md) | Agent harness, agent and session: "agentic harness", "Claude is the model inside it"; session, turn and transcript; subagents and agent teams | 2026-11-23 |
| **[A4]** [Anthropic, Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview) | Agent harness and agent: the Agent SDK, Managed Agents, "Claude Agent" branding | 2026-11-23 |
| **[A5]** [Anthropic, Subagents](https://code.claude.com/docs/en/sub-agents) | Subagent: Claude Code's subagents | 2026-11-23 |
| **[A6]** [Anthropic, Extend Claude with skills](https://code.claude.com/docs/en/skills) | Skill: Claude Code's skills on the Agent Skills open standard; descriptions in context, bodies on use; custom commands merged into skills | 2026-11-23 |
| **[A7]** [Anthropic, Claude Code channels](https://code.claude.com/docs/en/channels) | Channel card (proposal): "an MCP server that pushes events into your running Claude Code session"; integrations start a new session; research preview | 2026-11-23 |
| **[A8]** [Anthropic, Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging) | Cross-session messaging card, and the channel card (proposal): one session messaging another, on the same machine or beyond it; "Peer address" and `/peers` | 2026-11-23 |
| **[A9]** [Anthropic, Agent teams](https://code.claude.com/docs/en/agent-teams) | Agent team card: team lead and teammates, each "a full, independent Claude Code session", messaging each other; experimental | 2026-11-23 |
| **[A10]** [Anthropic, Plugins overview](https://code.claude.com/docs/en/plugins) | Plugin card: "a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit"; marketplaces | 2026-11-23 |
| **[A11]** [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents) | Agentic system card: the umbrella term, workflows and agents; 19 December 2024 | 2026-11-23 |
| **[A12]** [Anthropic, Tool use with Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) | Tool card: a tool's name, description and input schema; the application runs the call and returns the result | 2026-11-23 |
| **[A13]** [Anthropic, How Claude remembers your project](https://code.claude.com/docs/en/memory) | Instruction file card: `CLAUDE.md` at user, project and folder level, importing `AGENTS.md`; context, not enforced configuration | 2026-11-23 |
| **[O1]** [OpenAI, Models](https://learn.chatgpt.com/docs/models.md) | Model: current GPT models | 2026-11-23 |
| **[O2]** [OpenAI, Workspace model availability](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability.md) | Model: models still listed | 2026-11-23 |
| **[O3]** [OpenAI, Unlocking the Codex harness](https://openai.com/index/unlocking-the-codex-harness/) | Agent harness: "Codex harness", 4 February 2026 | 2026-11-23 |
| **[O4]** [OpenAI, App Server](https://learn.chatgpt.com/docs/app-server) | Agent harness, agent and session: the Codex App Server, "the Codex agent"; thread, turn and item | 2026-11-23 |
| **[O5]** [OpenAI Agents SDK, sessions](https://openai.github.io/openai-agents-python/sessions/) and [running agents](https://openai.github.io/openai-agents-js/guides/running-agents/) | Agent harness: the run loop with handoffs | 2026-11-23 |
| **[O6]** [OpenAI, Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work.md) | Agent: ChatGPT Work | 2026-11-23 |
| **[O7]** [OpenAI, Meet dots](https://learn.chatgpt.com/docs/dots.md) | Agent: dots, "an always-on agent" | 2026-11-23 |
| **[O8]** [OpenAI, Codex on mobile](https://learn.chatgpt.com/docs/mobile.md) | Session: task on mobile | 2026-11-23 |
| **[O9]** [OpenAI, ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) | Session and subagent: task in Codex Cloud and the iOS app; Ultra mode's subagents | 2026-11-23 |
| **[O10]** [OpenAI, Remote connections](https://learn.chatgpt.com/docs/remote-connections.md) | Session: chat, and the heading renamed from thread to task to chat | 2026-11-23 |
| **[O11]** [OpenAI, Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) | Session and subagent: Codex subagents and their agent threads | 2026-11-23 |
| **[O12]** [OpenAI, Build skills](https://learn.chatgpt.com/docs/build-skills.md) | Skill: a directory with a SKILL.md on the open standard; the 2% cap on the initial skill list; plugins as distribution | 2026-11-23 |
| **[O13]** [OpenAI, Skills and plugins](https://learn.chatgpt.com/docs/skills-and-plugins.md) | Skill and plugin cards: a skill and a plugin, "an installable bundle that can include skills and Model Context Protocol (MCP) servers" | 2026-11-23 |
| **[O14]** [OpenAI, Function calling](https://developers.openai.com/api/docs/guides/function-calling) | Tool card: tools defined by a JSON schema, called by the model and run by the application | 2026-11-23 |
| **[O15]** [OpenAI, Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) | Instruction file card: Codex's `AGENTS.md` and `AGENTS.override.md`, global and per folder | 2026-11-23 |
| **[G1]** [Google, Gemini models](https://aistudio.google.com/docs/models) | Model: current Gemini models | 2026-11-23 |
| **[G2]** [Google, Antigravity overview](https://antigravity.google/docs/overview) | Agent harness, agent, session and subagent: the Antigravity harness and its surfaces; conversation; subagents in their own worktrees | 2026-11-23 |
| **[G3]** [Google, Gemini CLI docs](https://geminicli.com/docs/) | Agent: Gemini CLI and its replacement | 2026-11-23 |
| **[G4]** [Google, Antigravity CLI conversations](https://antigravity.google/docs/cli/conversations/) | Session: session ids in the CLI | 2026-11-23 |
| **[G5]** [Google, ADK sessions](https://adk.dev/sessions/) | Agent harness and session: the Agent Development Kit and its Session | 2026-11-23 |
| **[G6]** [Google, Jules changelog](https://jules.google/docs/changelog/) | Agent and session: Jules wind-down notice of 29 October 2026; task and Session | 2026-11-23 |
| **[G7]** [Google, Gemini CLI subagents](https://geminicli.com/docs/core/subagents/) | Subagent: Gemini CLI's subagents, which cannot call other subagents, and its remote subagents over A2A | 2026-11-23 |
| **[G8]** [Google, Agent Skills in Gemini CLI](https://geminicli.com/docs/cli/skills/) | Skill: Gemini CLI's Agent Skills, activated by `activate_skill`, against GEMINI.md | 2026-11-23 |
| **[G9]** [Google, ADK collaborative workflows](https://adk.dev/workflows/collaboration/) | Cross-session messaging card: "peer agents" in a parallel workflow, used descriptively | 2026-11-23 |
| **[G10]** [Google, Provide context with GEMINI.md files](https://geminicli.com/docs/cli/gemini-md/) | Instruction file card: Gemini CLI's `GEMINI.md`, its hierarchy and configurable file name | 2026-11-23 |
| **[M1]** [Microsoft, MAI models](https://microsoft.ai/models/) | Model: Microsoft's own models | 2026-11-23 |
| **[M2]** [GitHub, Copilot supported models](https://docs.github.com/en/copilot/reference/ai-models/supported-models) | Model: the models Copilot serves | 2026-11-23 |
| **[M3]** [VS Code, Build with agents](https://code.visualstudio.com/docs/agents/overview) | Agent harness, agent and session: VS Code's harnesses, agent mode and agent session | 2026-11-23 |
| **[M4]** [VS Code, Understand agent harnesses](https://code.visualstudio.com/docs/agents/concepts/agent-harnesses) | Agent harness: "the software layer that runs an agent session" | 2026-11-23 |
| **[M5]** [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/) and [Copilot SDK](https://github.com/github/copilot-sdk) | Agent harness and session: the Harness Agent, the Copilot SDK and the agent session; page dated 23 October 2026 | 2026-11-23 |
| **[M6]** [GitHub, Copilot coding agent in Slack](https://github.blog/changelog/2025-10-28-work-with-copilot-coding-agent-in-slack/) | Agent: the former name, Copilot coding agent | 2026-11-23 |
| **[M7]** [GitHub, Copilot on GitHub.com and GitHub Mobile](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github) | Agent and session: Copilot in the cloud; session and agent task | 2026-11-23 |
| **[M8]** [Agent Host Protocol, What is AHP](https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp.html) | Session, and the AHP and industry agent host cards: a portable, standalone sessions server | 2026-11-23 |
| **[M9]** [VS Code, Subagents](https://code.visualstudio.com/docs/agents/run/subagents) | Subagent: VS Code's subagents and their nesting | 2026-11-23 |
| **[M10]** [VS Code, Use Agent Skills in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills) | Skill: Agent Skills across Copilot and Codex, their three levels, against custom instructions | 2026-11-23 |
| **[S1]** [Agent Skills specification](https://agentskills.io/specification) | Skill and the specification cards: a skill's directory, front matter and optional folders; progressive disclosure in three levels; file references one level deep | 2026-11-23 |
| **[S2]** [Agent Skills, governance](https://github.com/agentskills/agentskills/blob/main/GOVERNANCE.md) | Specification cards: Agent Skills donated to the Agentic AI Foundation, governance adopted 4 November 2026 as an LF Projects series | 2026-11-23 |
| **[SKOS1]** [W3C, SKOS Reference, semantic relations](https://www.w3.org/TR/skos-reference/#semantic-relations) | The root definition's meanings for `skos:broader`, a direct hierarchical link to a broader concept, and `skos:related`, an associative link, disjoint from the hierarchical ones | 2026-11-23 |
| **[AG1]** [AGENTS.md](https://agents.md/) | Instruction file card: the open, shared instruction file format, nearest file taking precedence | 2026-11-23 |
| **[CR1]** [CrewAI, Agents](https://docs.crewai.com/en/concepts/agents) | Role card: an agent's `role`, "the agent's function and expertise within the crew" | 2026-11-23 |
| **[M11]** [Agent Host Protocol, specification overview](https://microsoft.github.io/agent-host-protocol/specification/overview.html) | Agent host: the process that runs harnesses and owns their sessions, independently of clients | 2026-11-23 |
| **[M12]** [Agent Host Protocol, implementations](https://microsoft.github.io/agent-host-protocol/guide/implementations.html) | Agent host: VS Code's Agent Host and the other implementations | 2026-11-23 |
| **[OR1]** Orca's own command line on terra and sol, `orca serve`, `orca open`, `orca host list`, `orca environment add`, `list`, `show` and `rm`, and `orca-environments.json` | Orca runtime and app: the runtime inside the app, headless `orca serve`, remote Orca runtimes saved from a pairing code as environments | 2026-11-23 |
| **[Z1]** [Agent Client Protocol, agents](https://agentclientprotocol.com/get-started/agents) | Zed as an ACP client, and the agents it drives | 2026-11-23 |
| **[MCP1]** [Model Context Protocol, specification 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) | MCP card: purpose, roles, extensions; revision 2026-07-28 | 2026-11-23 |
| **[MCP2]** [MCP, architecture](https://modelcontextprotocol.io/specification/2026-07-28/architecture) | MCP host, client and server cards: one client for each server | 2026-11-23 |
| **[MCP3]** [MCP, tools](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) | MCP tools card | 2026-11-23 |
| **[MCP4]** [MCP, transports](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports) | MCP transports card | 2026-11-23 |
| **[MCP5]** [MCP, stdio transport](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio) | MCP transports card: stdio | 2026-11-23 |
| **[MCP6]** [MCP, Streamable HTTP transport](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http) | MCP transports card: Streamable HTTP | 2026-11-23 |
| **[MCP7]** [MCP, versioning](https://modelcontextprotocol.io/docs/2026-07-28/learn/versioning) | MCP card: current revision | 2026-11-23 |
| **[MCP8]** [MCP, changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) | MCP card: stateless protocol, protocol-level session removed | 2026-11-23 |
| **[MCP9]** [MCP, resources](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) | MCP server card: resources | 2026-11-23 |
| **[MCP10]** [MCP, prompts](https://modelcontextprotocol.io/specification/2026-07-28/server/prompts) | MCP server card: prompts | 2026-11-23 |
| **[MCP11]** [MCP joins the Agentic AI Foundation](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) | MCP card: in the Linux Foundation's Agentic AI Foundation since 9 December 2025 | 2026-11-23 |
| **[ACP1]** [Agent Client Protocol, introduction](https://agentclientprotocol.com/get-started/introduction) | ACP card: purpose | 2026-11-23 |
| **[ACP2]** [ACP, protocol v1 overview](https://agentclientprotocol.com/protocol/v1/overview) | ACP client and agent cards: roles and messages | 2026-11-23 |
| **[ACP3]** [ACP, session setup](https://agentclientprotocol.com/protocol/v1/session-setup) | ACP session card: "a conversation or thread" | 2026-11-23 |
| **[ACP4]** [ACP, transports](https://agentclientprotocol.com/protocol/v1/transports) | ACP card: transports | 2026-11-23 |
| **[ACP5]** [ACP, related protocols](https://agentclientprotocol.com/get-started/related-protocols) | ACP card: against MCP, and IBM's Agent Communication Protocol merged into A2A | 2026-11-23 |
| **[ACP6]** [ACP, governance](https://agentclientprotocol.com/community/governance) | ACP card: jointly governed by Zed Industries and JetBrains, an interim model working towards an independent foundation | 2026-11-23 |
| **[ACP7]** [ACP, v2 draft announcement](https://agentclientprotocol.com/announcements/acp-v2-draft) | ACP card: version 2 in draft since 20 July 2026 | 2026-11-23 |
| **[ACP8]** [ACP, releases](https://github.com/agentclientprotocol/agent-client-protocol/releases) | ACP card: the release of 18 November 2026, schema v1.33.0, v2.0.0-alpha.17 and Rust crate v1.19.0 | 2026-11-23 |
| **[ACP9]** [ACP, agents](https://agentclientprotocol.com/get-started/agents) | ACP agent card: the same page as [Z1] | 2026-11-23 |
| **[ACP10]** [ACP, architecture](https://agentclientprotocol.com/get-started/architecture) | ACP client and agent cards | 2026-11-23 |
| **[ACP11]** [ACP, session list](https://agentclientprotocol.com/protocol/v1/session-list) | ACP session card: listing sessions | 2026-11-23 |
| **[ACP12]** [ACP, session delete](https://agentclientprotocol.com/protocol/v1/session-delete) | ACP session card: deleting sessions | 2026-11-23 |
| **[ACP13]** [ACP, v2 preview announcement](https://agentclientprotocol.com/announcements/acp-v2-preview) | ACP card: version 2 moved from draft to preview on 20 November 2026, the last stage before stable | 2026-11-23 |
| **[AHP1]** [Agent Host Protocol, AHP and ACP](https://microsoft.github.io/agent-host-protocol/guide/ahp-and-acp.html) | AHP, AHP agent host and client cards: coordination layer against communication layer; the first tool approval wins | 2026-11-23 |
| **[AHP2]** [AHP, doctrine](https://microsoft.github.io/agent-host-protocol/guide/doctrine.html) | AHP agent host card | 2026-11-23 |
| **[AHP3]** [AHP, subscriptions](https://microsoft.github.io/agent-host-protocol/specification/subscriptions.html) | AHP client, channels and agent host cards: a channel is "a sequence of messages that is identified by a URI" | 2026-11-23 |
| **[AHP4]** [AHP, session channel](https://microsoft.github.io/agent-host-protocol/specification/session-channel.html) | AHP session and channels cards | 2026-11-23 |
| **[AHP5]** [AHP, chat channel](https://microsoft.github.io/agent-host-protocol/specification/chat-channel.html) | AHP session card: a chat's origin, user, fork, side chat or tool; only a chat spawned by a tool call is our thread | 2026-11-23 |
| **[AHP6]** [AHP, transport](https://microsoft.github.io/agent-host-protocol/specification/transport.html) | AHP card: transport | 2026-11-23 |
| **[AHP7]** [AHP, specification 1.1.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.1.0) | AHP card: spec 1.1.0, released 13 November 2026; 1.2.0 in draft | 2026-11-23 |
| **[AHP8]** [AHP, MCP servers](https://microsoft.github.io/agent-host-protocol/guide/mcp.html) | AHP and industry agent host cards: the harness the host wraps | 2026-11-23 |
| **[AHP9]** [AHP, versioning](https://microsoft.github.io/agent-host-protocol/specification/versioning.html) | AHP card: versioning, the channels' stability and 1.2.0 in draft | 2026-11-23 |
| **[A2A1]** [Agent2Agent, specification](https://a2a-protocol.org/latest/specification/) | A2A cards: client, remote agent, Agent Card and task; the remote agent and agentic system cards | 2026-11-23 |
| **[A2A2]** [A2A, key concepts](https://a2a-protocol.org/latest/topics/key-concepts/) | A2A remote agent and Agent Card cards: opaque agents | 2026-11-23 |
| **[A2A3]** [A2A, life of a task](https://a2a-protocol.org/latest/topics/life-of-a-task/) | A2A task card: task and contextId | 2026-11-23 |
| **[A2A4]** [A2A, release 1.0.1](https://github.com/a2aproject/A2A/releases/tag/v1.0.1) | A2A card: 1.0.0 of 12 March 2026, 1.0.1 published 28 May 2026, the latest | 2026-11-23 |
| **[A2A5]** [A2A, joining the Agentic AI Foundation](https://a2a-protocol.org/latest/blog/2026/08/27/a-new-chapter-for-a2a-joining-the-agentic-ai-foundation/) | A2A card: its joining the Agentic AI Foundation, announced 27 August 2026 | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| **[ST]** The earlier local terms study of 4 November 2026, in the Cairn store's legacy work | which words sessions already used loosely, such as launcher, harness and host | 2026-11-12 |
| **[RD]** The `ki-radar` skill's sources, for AHP adoption by agent host | the standards cards | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

On 23 November 2026 the monthly refresh re-read every outside source but the legacy terms study [ST], 94 of 95, repointed seven moved pages to the addresses they now redirect to, and added [ACP13] and [S2]. The cards still follow their sources: Anthropic, Google and Microsoft name the layer an agent harness and OpenAI the Codex harness, session is the majority's word, all four vendors say subagent, and all four build their skills on the Agent Skills specification. [OR1] was rechecked on sol at Orca 1.4.269. What has moved is listed under Watching and proposed for the cards, not written.

**Watching:**

- Jules has been read-only since 11 November 2026 and closes on 31 December 2026, and Gemini CLI's replacement by the Antigravity CLI is spreading; move both to past examples when they go.
- GitHub's Copilot in the cloud page moved to [M7]'s new address on 23 November and now names the older experience Copilot cloud agent plus Copilot Chat; the cards still link the old address, which redirects, and still say Copilot coding agent was the former name.
- The vendors' model cards are behind: OpenAI added GPT-6.2 Astra and GPT-6.2 Sol, retired GPT-5.4 and took GPT-5.5 out of Codex sign-in on 14 October 2026 ([O1], [O2]); Google lists Gemini 4 Neon and Gemini 4 Hydrogen beside Carbon and Argon ([G1]). Proposed, not written.
- OpenAI's session words still move: the Remote connections page says chat, the iOS app task and the Codex CLI thread ([O9], [O10]); [O4] says thread, turn and item.
- ACP's v2 is in preview since 20 November 2026 ([ACP13]), its schema at v2.0.0-beta.3 and v1 at schema v1.34.1 on 21 November ([ACP8]); the ACP card still says draft. MCP has no revision after 2026-07-28 ([MCP7]) and AHP 1.2.0 is still in draft ([AHP9]); refresh the specification cards when any lands. ACP releases several times a week, so its card is refreshed only monthly, citing the release by its date.
- Agent Skills joined the Agentic AI Foundation with governance adopted on 4 November 2026 ([S2]); the specification card does not say so yet.

[Back to contents](#contents)
