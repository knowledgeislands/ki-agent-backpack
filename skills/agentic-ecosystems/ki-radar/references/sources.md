---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:10:23Z
ki-refresh: external-spec · monthly
---

# Sources — where the radar standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative, agentic subjects](#21-authoritative-agentic-subjects)
    - [2.1.1 Identity, specification, and governance](#211-identity-specification-and-governance)
    - [2.1.2 Independent implementation and local evidence](#212-independent-implementation-and-local-evidence)
    - [2.1.3 Agent coordination tooling](#213-agent-coordination-tooling)
    - [2.1.4 Agent-owned browser runtimes](#214-agent-owned-browser-runtimes)
    - [2.1.5 Structural vocabulary evidence](#215-structural-vocabulary-evidence)
  - [2.2 Authoritative, model subjects](#22-authoritative-model-subjects)
    - [2.2.1 Local owner sources](#221-local-owner-sources)
    - [2.2.2 Standards](#222-standards)
    - [2.2.3 Providers](#223-providers)
  - [2.3 Advisory, agentic subjects](#23-advisory-agentic-subjects)
  - [2.4 Advisory, model subjects](#24-advisory-model-subjects)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)
  - [4.1 Agentic subjects](#41-agentic-subjects)
  - [4.2 Model subjects](#42-model-subjects)

## 1. Introduction

The sources behind [the radar standard](standard-radar.md), [the agentic-radar standard](standard-agentic-radar.md), [the model-radar standard](standard-model-radar.md), [the model-tier standard](standard-model-tiers.md), the `agentic-radar.toml` and `model-radar.toml` snapshots and the [rubric](rubric.md). This is the one refresh ledger for both subject kinds, merged from the two radars' ledgers under RADAR-MERGE a. Evidence identities and claim-level notes live in the snapshots; inclusion here does not by itself establish maturity, implementation, interoperability, recommendation or adoption.

[Back to contents](#contents)

## 2. Outside sources

The primary and corroborating sources accepted into the radar, by subject kind and source group. Each row names a subject, structure or source and the claims its sources support; local owner sources, published standards and providers govern the claims they back, while independent benchmark owners inform movement but none is universally authoritative.

### 2.1 Authoritative, agentic subjects

Each row's date is when its sources were last re-fetched; the weekly reviews of 22 and 23 November 2026 re-fetched every row dated on those days.

#### 2.1.1 Identity, specification, and governance

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Model Context Protocol (MCP) | the [2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28/basic) is the normative protocol text; the [Agentic AI Foundation transfer announcement](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) establishes current governance; and the [SDK tier policy](https://modelcontextprotocol.io/community/sdk-tiers) defines scenario-based conformance expectations. The [release-cycle post](https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/) of 2026-11-11 moves specification releases to a six-month schedule and targets 2027-03-30 for the next. | 2026-11-22 |
| Agent Client Protocol (ACP) | the [version 1 protocol overview](https://agentclientprotocol.com/protocol/v1/overview), stable [schema v1.34.0 release](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v1.34.0), and [governance page](https://agentclientprotocol.com/community/governance) define the stable wire contract and interim joint stewardship by Zed and JetBrains. The [v1.25.0 release](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v1.25.0) (2026-10-09) stabilises session notices and session compaction, v1.30.0 (2026-11-09) the client system prompt, and v1.34.0 (2026-11-20) subagent sessions and plan operations; v1.34.1 (2026-11-21) is still the latest stable release on 2026-11-23. The separately published [v2.0.0 beta 1 schema](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/schema-v2.0.0-beta.1) marks ACP v2's move to Preview, which carries no stability contract, and beta 3 (2026-11-21) only adds documentation-level changes: pre-stable counter-evidence, not a replacement for protocolVersion 1. | 2026-11-23 |
| Agent Host Protocol (AHP) | the [specification overview](https://microsoft.github.io/agent-host-protocol/specification/overview.html), [1.0.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.0.0), and [versioning policy](https://microsoft.github.io/agent-host-protocol/specification/versioning) establish a 1.0 Microsoft protocol (released 2026-10-02) with SemVer compatibility within a MAJOR for Stable channels. The [1.1.0 release](https://github.com/microsoft/agent-host-protocol/releases/tag/spec%2Fv1.1.0) (2026-11-12) is current and a 1.2.0 draft is published; 1.1.0 promotes no channel and adds an experimental TCP channel. Root, Session, Chat, Terminal, Telemetry, and Resource watch are Stable; Canvas, Annotations, Changeset, MCP, TCP, and both Automation channels remain below Stable; unchanged on 2026-11-22. | 2026-11-22 |
| Agent2Agent Protocol (A2A) | the [latest specification](https://a2a-protocol.org/latest/specification/) and [v1.0.1 release](https://github.com/a2aproject/A2A/releases/tag/v1.0.1) establish the current Linux Foundation protocol release, still the latest on 2026-11-23; the project's [Agentic AI Foundation post](https://a2a-protocol.org/latest/blog/2026/08/27/a-new-chapter-for-a2a-joining-the-agentic-ai-foundation/) of 2026-08-27 records its move into the foundation as a Growth Stage project. | 2026-11-23 |
| AGENTS.md | the [format site](https://agents.md/) describes the unversioned repository instruction format; the [Linux Foundation Agentic AI Foundation announcement](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) records its transfer to foundation governance, which the format site states on 2026-11-23, still with no version or formal specification. | 2026-11-23 |
| W3C AI Agent Protocol Community Group | the [Community Group page](https://www.w3.org/community/agentprotocol/) identifies the incubating group and its draft report; the [living protocol draft](https://w3c-cg.github.io/ai-agent-protocol/protocol.html) is exploratory Community Group work, not a W3C Recommendation; on 2026-11-22 the newest drafts are still those of 2025-08-19. | 2026-11-22 |

> [!IMPORTANT]
> In this ledger, **ACP** means the Agent Client Protocol stewarded by Zed and JetBrains. It does not mean IBM's Agent Communication Protocol or AGNTCY's Agent Connect Protocol.

[Back to contents](#contents)

#### 2.1.2 Independent implementation and local evidence

| Source | Governs | Last reviewed |
| --- | --- | --- |
| MCP | [OpenAI Agents SDK](https://openai.github.io/openai-agents-js/guides/mcp/) and [Cloudflare Agents](https://developers.cloudflare.com/agents/model-context-protocol/) provide independent implementations. The local [ki-env-binding capability](https://github.com/knowledgeislands/ki-agent-backpack/tree/main/skills/environment/ki-env-binding) supplies bounded Knowledge Islands adoption evidence. On 2026-11-23 the OpenAI guide covers stdio, SSE, Streamable HTTP and hosted MCP tools, and Cloudflare's page still documents remote MCP servers, naming clients only in terminology. | 2026-11-23 |
| ACP | [Gemini CLI's ACP adapter](https://github.com/google-gemini/gemini-cli/blob/main/packages/cli/src/acp/README.md) and [CodeCompanion's ACP client](https://github.com/olimorris/codecompanion.nvim/blob/main/doc/codecompanion.txt) are independent implementations. Their [documented integration result](https://github.com/olimorris/codecompanion.nvim/discussions/2030) is bounded interoperability evidence. The ACP introduction still marks [full remote-agent support as work in progress](https://agentclientprotocol.com/get-started/introduction), unchanged on 2026-11-23. | 2026-11-23 |
| AHP | the official [implementation catalogue](https://microsoft.github.io/agent-host-protocol/guide/implementations.html) lists Microsoft-project clients and reference surfaces plus independent clients and hosts, among them [pi-ahp](https://github.com/Qusic/pi-ahp), which states AHP 1.0.0 and 0.9.0 support, and [ahpd](https://github.com/softov/ahpd), which states AHP 1.1.0 on 2026-11-23; AgentConnect is the only catalogue entry that names a version, as an AHP 1.0 host. Wyrd Company's independent [AHP server](https://github.com/wyrd-company/ahp-server) implements a bounded server surface and publishes compatibility tests against Microsoft's TypeScript client. That establishes multiple independent implementations, not an independently witnessed interoperability result. | 2026-11-23 |
| AHP adoption by agent host | checked on 2026-11-10, 2026-11-15 and 2026-11-22 against [Orca's releases](https://github.com/stablyai/orca/releases), [Claude's release notes](https://support.claude.com/en/articles/12138966-release-notes) and [OpenAI's changelog](https://learn.chatgpt.com/docs/changelog) for ChatGPT Desktop and ChatGPT Mobile. None names AHP support; each absence is dated counter-evidence on the AHP subject, not a finding that support is ruled out. | 2026-11-22 |
| A2A | [Google ADK](https://github.com/google/adk-docs/blob/main/docs/a2a/index.md) and [BeeAI Framework](https://github.com/i-am-bee/beeai-framework) provide independent implementations. The official [A2A technology compatibility kit](https://github.com/a2aproject/a2a-tck) covers the protocol bindings, but no reviewed public pass or certification matrix was found, still so on 2026-11-23. ADK's A2A guide covers Python, Go and Java, with Go and Java marked experimental. | 2026-11-23 |
| AGENTS.md | [OpenAI Codex](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [Visual Studio Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions) implement the format independently. The format site reports broad operational adoption, while VS Code's [custom instructions reference](https://code.visualstudio.com/docs/agents/reference/custom-instructions-reference) makes discovery differ by harness: nested `AGENTS.md` discovery is experimental and off by default only in the Local harness, which is deprecated and due for removal in February 2027. This repository's [AGENTS.md](https://github.com/knowledgeislands/ki-agent-backpack/blob/main/AGENTS.md) is the local adoption evidence. | 2026-11-23 |
| W3C AI Agent Protocol Community Group | no reviewed implementation, conformance result, or interoperability demonstration was found in the group's primary publications. | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.3 Agent coordination tooling

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Orca orchestration | the [first implementation](https://github.com/stablyai/orca/pull/1188), merged on 28 April 2026, supplies reference-implementation evidence; the [orchestration documentation](https://orca.dev/docs/cli/orchestration) describes the experimental coordinator, workers, ask and reply, and gates. It is watched as a way agent hosts coordinate; since ROOMS-CHANNEL and ORCA-FIRST, 20 November 2026, its mail is the channel between Cairn sessions in Orca. On 2026-11-22 it is still experimental and its panel still temporarily unavailable. | 2026-11-22 |
| Gas City | the [open-source orchestrator](https://github.com/gastownhall/gascity) supplies reference-implementation evidence; the [software-factory guide](https://gascity.com/guide/ai-software-factory/) describes Beads-backed durable work, configured coding workflows, routing, retries, and review gates; v1.5.1 (2026-10-24) is still the latest stable release on 2026-11-22. | 2026-11-22 |

These sources establish two implemented coordination tools and their primary abstractions. They do not establish comparative fitness, cross-tool interoperability, or a Knowledge Islands adoption decision.

[Back to contents](#contents)

#### 2.1.4 Agent-owned browser runtimes

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Obscura | the [open-source implementation](https://github.com/h4ckf0r0day/obscura) documents a self-hosted Rust browser engine with CDP, Playwright, Puppeteer, rendering, storage, and MCP surfaces. The [product description](https://obscura.sh/#how) emphasises isolated zero-state sessions; that supports isolation. The project's [persistent cookies and storage guide](https://github.com/h4ckf0r0day/obscura/blob/main/docs/Persist-cookies-and-storage.md) documents opt-in persistent profiles through `--storage-dir`, hardened in v0.2.7 (2026-11-13), which leaves authenticated-profile provisioning and recurring ChatGPT fidelity for local evaluation. | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.5 Structural vocabulary evidence

These sources bound recurring architecture terms without treating them as protocols or comparable standards in the radar snapshot.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Agent loop | the [OpenAI Agents SDK run loop](https://openai.github.io/openai-agents-js/guides/running-agents/) repeatedly invokes a model, interprets a final output, handoff, or tool call, and stops on final output or a bounded turn limit, ten turns by default on 2026-11-23. | 2026-11-23 |
| Supervisor or branching tree | the [OpenAI multi-agent guide](https://openai.github.io/openai-agents-js/guides/multi-agent/) and Anthropic's [multi-agent research system account](https://www.anthropic.com/engineering/multi-agent-research-system) describe a coordinating agent retaining responsibility while delegating bounded work, often in parallel, to specialists. A concrete system can include retries or shared workers and therefore need not be a literal tree. | 2026-11-23 |
| Graph-orchestrated execution | the [LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) models executable shared state with nodes and edges, including cycles, conditional branches, joins, and parallel fan-out. | 2026-11-23 |
| Knowledge graph | [RDF 1.1 Concepts](https://www.w3.org/TR/rdf11-concepts/) supplies a stable graph data model of subject-predicate-object triples. The broader term "knowledge graph" is not necessarily RDF and does not imply an execution engine. [RDF 1.2 Concepts](https://www.w3.org/TR/rdf12-concepts/) is a Candidate Recommendation Draft of 2026-11-16, so RDF 1.1 stays the cited Recommendation. | 2026-11-23 |
| Provenance graph | the W3C [PROV data model](https://www.w3.org/TR/prov-dm/) and [PROV-O ontology](https://www.w3.org/TR/prov-o/) model entities, activities, agents, derivation, use, generation, attribution, and responsibility. Provenance records lineage; it is not itself workflow execution or domain knowledge. | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Authoritative, model subjects

By class, as the standard's evidence independence reads them.

#### 2.2.1 Local owner sources

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Local model-radar roadmap][local-roadmap] | Initial route ownership and recommendation (pinned commit) | 2026-11-23 |
| [Owner default-route decision][local-defaults] | 2026-10-06 default decision (pinned commit); owner-attested day-to-day use | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.2 Standards

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Thoughtworks Technology Radar FAQ][thoughtworks-radar] | Source ring semantics | 2026-11-23 |
| [Open Source AI Definition 1.0][osi-osaid] | Open Source AI classification | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.3 Providers

Provider evidence may establish identity, access, licence, pricing and lifecycle, not performance.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Claude Opus 5 launch][claude-opus] | Identity, access, release | 2026-11-23 |
| [Claude Fable 5.1 model overview][claude-fable] | Identity, access, lifecycle | 2026-11-23 |
| [Claude model deprecations][claude-lifecycle] | Opus and Fable lifecycle | 2026-11-23 |
| [Current Claude models][claude-current] | Fable, Opus, Sonnet, and Haiku identities and effort | 2026-11-23 |
| [OpenAI model catalogue][openai-models] | Current flagship identities and access | 2026-11-23 |
| [OpenAI GPT-6 guide][openai-gpt-6] | Current GPT-6.2 Astra and Sol positioning | 2026-11-23 |
| [GPT-5.6 Sol model page][openai-sol] | Previous-family Sol identity, alias, and access | 2026-11-23 |
| [GPT-5.6 Terra model page][openai-terra] | Previous-family Terra identity and access | 2026-11-23 |
| [GPT-6 Astra model page][openai-gpt-6-astra] | Astra identity and access | 2026-11-23 |
| [GPT-6.1 Sol model page][openai-gpt-6-1-sol] | Default-route Sol identity and access | 2026-11-23 |
| [GPT-6 Sol model page][openai-gpt-6-sol] | Earlier Sol identity and access | 2026-11-23 |
| [Codex models][codex-models] | Models selectable in Codex | 2026-11-23 |
| [Claude model IDs and versions][claude-model-ids] | Fixed model identities against aliases, for the model-tier standard | 2026-11-23 |
| [Claude Code model configuration][claude-code-models] | Claude Code aliases and selectable models | 2026-11-23 |
| [Gemini CLI ACP mode][gemini-cli-acp] | Gemini CLI ACP support and access | 2026-11-23 |
| [OpenCode ACP support][opencode-acp] | OpenCode ACP support | 2026-11-23 |
| [Zed external agents][zed-agents] | ACP client integration of the routed agents | 2026-11-23 |
| [Gemini 3.8 Flash model page][gemini-flash] | Identity, capability, stable access | 2026-11-23 |
| [Gemini model deprecations][gemini-lifecycle] | Release and shutdown status | 2026-11-23 |
| [GLM-5.3 checkpoint][glm-53] | Identity, weights, deployment | 2026-11-23 |
| [GLM-5.3 licence][glm-53-license] | Exact weights licence | 2026-11-23 |
| [GLM-5.3-Flash release][glm-53-flash] | Identity, scale, deployment | 2026-11-23 |
| [GLM-5.3-Flash licence][glm-53-flash-license] | Exact weights licence | 2026-11-23 |
| [Kimi K3 repository][kimi-k3] | Identity, weights, access | 2026-11-23 |
| [Kimi K3 licence][kimi-k3-license] | Exact weights licence | 2026-11-23 |
| [Qwen3.8 Max model page][qwen-max] | Exact hosted Max identity | 2026-11-23 |
| [Qwen3.8 repository][qwen-family] | Open-model family boundary | 2026-11-23 |
| [Qwen3.8-27B checkpoint][qwen-27b] | Workstation-lane weights and licence | 2026-11-23 |
| [Grok 4.6 launch][grok-launch] | Identity, release, hosted routes | 2026-11-23 |
| [Grok 4.6 model page][grok-model] | API identity and current access | 2026-11-23 |
| [Grok 4.7 launch][grok-47-launch] | Identity, release, hosted routes | 2026-11-23 |
| [Grok 4.7 model page][grok-47-model] | API identity and current access | 2026-11-23 |
| [SpaceXAI models and pricing index][xai-models] | Current recommended model and listed alternatives | 2026-11-23 |

[Back to contents](#contents)

### 2.3 Advisory, agentic subjects

None.

[Back to contents](#contents)

### 2.4 Advisory, model subjects

Independent benchmark and methodology owners.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [BenchLM methodology][benchlm] | BenchAlign aggregation and uncertainty | 2026-11-23 |
| [AA Intelligence methodology][aa-intelligence] | Intelligence Index v5.0.1 | 2026-11-23 |
| [AA Coding Agent methodology][aa-coding] | Coding Agent Index v2.1 | 2026-11-23 |
| [Arena-Rank methodology][arena-rank] | Bradley–Terry ranking and uncertainty | 2026-11-23 |
| [Arena leaderboard policy][arena-policy] | Public model and data policy | 2026-11-23 |
| [Arena leaderboard changelog][arena-changelog] | Leaderboard method and data changes | 2026-11-23 |
| [SWE-bench leaderboards][swe-bench] | Current benchmark-family shape | 2026-11-23 |
| [Terminal-Bench 4.1][terminal-bench] | Current terminal benchmark | 2026-11-23 |
| [Harbor core concepts][harbor] | Task-environment evaluation unit | 2026-11-23 |
| [HELM repository][helm] | Framework and leaderboard scope | 2026-11-23 |
| [HELM maintenance policy][helm-maintenance] | Maintenance lifecycle | 2026-11-23 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| RADAR-MERGE a | “a: `ki-agentic-radar` and `ki-model-radar` merge into one `ki-radar`: a shared radar standard, a standard and snapshot for each subject kind kept intact, one rubric, one REFRESH, the evidence schemas merged, and a monthly cadence matching how they are run; MODEL-TIERS' tiers go with it (Kris, 22 November, about 22:33 GMT, the Agentic ecosystems guild's sitting, card: "One ki-radar, monthly")”, in the Cairn summit's change 10, 4.3, landed under step 6.3. The two snapshots keep their records as `agentic-radar.toml` and `model-radar.toml`; the evidence schemas merge as one evidence core with each kind's own classification fields; reviews warn after 35 days. | 2026-11-22 | [Radar standard](standard-radar.md), [4.3](standard-radar.md#43-evidence), [4.4](standard-radar.md#44-dates-and-cadence), [4.5](standard-radar.md#45-refresh) | In force |
| PULSE-BOUNDARY | “PULSE discovers and the radars assess, as both sides already state; PULSE's destinations are corrected: Read/learn goes to Harbour's capture instead of `ki-repo-kb` SAVE or `ki-trades`, and Act on an agentic or model signal fires the radar's REFRESH return trigger (`ki-acquire` standard 4.5, `mode-pulse.md`) (settled by Kitteth within remit under CONFIDENCE-FIRST, 22 November, about 22:31 GMT, the Agentic ecosystems guild's sitting, from its brief)”, in the Cairn summit's change 10, 4.3. | 2026-11-22 | [4.5](standard-radar.md#45-refresh) | In force |
| ORCA-WORKERS b | “b: `ki-delegation-orca` is retired; background work goes to each host's own subagents under `ki-delegation`, and if Kris later asks for Orca workers, Orca's own `orchestration` skill covers the commands; the skill folder goes, its mentions in `ki-delegation`, `ki-agentic-bots`, `ki-coordination`, the guild map and the catalogue are removed or repointed, any declaration is dropped, and `tools-ki`'s retired-name tolerance covers it; the bots' own use of Orca in `ki-agentic-bots` is unchanged (Kris, 22 November, about 22:45 GMT, the Agentic ecosystems guild's sitting, card: "Retire it")”, in the Cairn summit's change 10, 4.3. The Orca orchestration subject's uncertainty names Orca's own `orchestration` skill for a session's Orca workers. | 2026-11-22 | `agentic-radar.toml` | In force |
| AHP-RADAR | AHP adoption is tracked per agent host, each absence dated counter-evidence on the AHP subject; Orca orchestration is assessed, watched and never adopted as a channel between Agora sessions | 2026-11-10 | `agentic-radar.toml`, [4.2.2](standard-agentic-radar.md#422-subjects) | taken |
| ORCA-MOVEMENT | Orca orchestration's movement reads `unchanged`, since movement describes the current review and nothing about it was new on 22 November 2026; its stance stays assess. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `agentic-radar.toml`, [Agentic radar standard](standard-agentic-radar.md) | In force |
| FIRED-TRIGGERS | Two return triggers that fired and were reassessed on 22 November 2026 are retired, so later reviews do not fire them again: AHP's "independent hosts adopting 1.0" and the browser runtime's "documented persistent-profile controls". Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `agentic-radar.toml`, [Agentic radar standard](standard-agentic-radar.md) | In force |
| MODEL-TIERS a | The Claude and Codex model-tier standards move from `ki-env-tokenomics-claude` and `ki-env-tokenomics-chatgpt` into `ki-model-radar`, which already tracks the models and is refreshed; the adapters and `ki-env-tokenomics` keep the four purposes and point to the radar, the repeated tier-movement rule is kept once, and the drift (Fable 5.1 against 5.2) goes with the move; if the radar merges into `ki-radar` at the Agentic sitting, the tiers go with it. Kris, 22 November 2026, about 21:43 GMT, the Environment guild's sitting, card: "Move to ki-model-radar"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Model-tier standard](standard-model-tiers.md#1-introduction) | In force |
| HAIKU-5.5 | Claude Haiku 5.5 joins as a model identity with no route | 2026-10-18 | `model-radar.toml`, [4.2.2](standard-model-radar.md#422-models) | taken |
| ASTRA-SOURCE | Keep the GPT-6 Astra launch post retired until it is fetchable | 2026-10-18 | `model-radar.toml`, [4.2.5](standard-model-radar.md#425-evidence) | taken |
| MOVEMENT | Five routes whose movement still recorded the 2026-10-06 decisions read `unchanged`, since movement describes the current review: Claude Opus 5 and Grok 4.6 from `outward`, and Claude Opus 5.5, GPT-6.1 Sol and Grok 4.7 from `new`. GPT-5.6 Sol keeps `outward` under GPT-5.6-SOL-ROUTE. No ring, support level or default moved. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `model-radar.toml`, [4.2.3](standard-model-radar.md#423-executable-routes) | taken |
| GEMINI-CLI-ROUTE | The Gemini 3.8 Flash route through Gemini CLI stays at Assess and not-integrated, with Antigravity CLI's replacement of Gemini CLI for unpaid-tier and Google One users recorded as counter-evidence; no Antigravity CLI route is proposed. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `model-radar.toml`, [4.2.3](standard-model-radar.md#423-executable-routes) | taken |
| GPT-5.6-SOL-ROUTE | The GPT-5.6 Sol route through Codex stays Adopt, available and `outward`, though Codex's models page no longer mentions the model; it is rechecked after its promotional pricing ends on 2026-11-30. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `model-radar.toml`, [4.2.3](standard-model-radar.md#423-executable-routes) | taken |
| AA-APPLICABILITY | Artificial Analysis's Coding Agent Index, now v2.1, stays primary evidence and its Intelligence Index, now v5.0.1, stays corroborating; the refresh's update of both records to the new versions stands. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `model-radar.toml`, [4.2.5](standard-model-radar.md#425-evidence) | taken |
| NEW-IDENTITIES | GPT-6.2 Astra (`gpt-6-2-astra`), GPT-6.2 Sol (`gpt-6-2-sol`) and Claude Fable 5.2 (`claude-fable-5-2`) join as model identities with no route; GPT-6.1 Terra, Gemini 4 Argon, Carbon, Hydrogen and Neon, Qwen4 Max and Claude Mythos 5.2 stay held. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | `model-radar.toml`, [4.2.2](standard-model-radar.md#422-models) | taken |

[Back to contents](#contents)

## 4. Last review

- 2026-11-23 — The Agentic ecosystems guild's landing, from the Cairn summit's change 10, step 6.3, applied RADAR-MERGE a, PULSE-BOUNDARY and ORCA-WORKERS b, recorded under [Decisions](#3-decisions): `ki-agentic-radar` and `ki-model-radar` became `ki-radar`, with [the radar standard](standard-radar.md) shared, each subject kind's standard and snapshot kept, one rubric, one monthly REFRESH and this one ledger; the model tiers moved with it. No source was re-fetched and no record's classification changed; the agentic subjects' owner became `ki-radar`.

### 4.1 Agentic subjects

On 23 November 2026 the weekly review re-fetched the sources the 22 November review had left at 15 November, the structural vocabulary and the independent-implementation pages for MCP, ACP, A2A and AGENTS.md, and rechecked the fast-moving releases; nothing changed a stance or movement, and `radar.toml` was not touched, so its evidence dates still read as before. Rows not re-fetched keep their 22 November dates.

The review log records outcomes, newest first; source freshness is tracked in each source row so an old log entry does not read as a stale source.

| Review | Outcome | Date |
| --- | --- | --- |
| Weekly review | The rows left at 15 November re-fetched. ACP's latest stable schema is still v1.34.1, with v2 at beta 3 in Preview; A2A still v1.0.1; AHP still spec v1.1.0, its catalogue unchanged, AgentConnect alone naming a version; Orca to 1.4.271 still names no AHP support. VS Code's nested `AGENTS.md` caveat now applies only to its deprecated Local harness; RDF 1.2 Concepts is a Candidate Recommendation Draft of 2026-11-16. The other implementation and structural sources unchanged; no stance or movement changed, and the matching `radar.toml` evidence dates are left for the owner. | 2026-11-23 |
| Within-remit ruling | FIRED-TRIGGERS: AHP's "independent hosts adopting 1.0" and the browser runtime's "documented persistent-profile controls" leave their return triggers, having fired and been reassessed that day; neither stance changed. Loreward, within remit, from the 4.1 refresh. | 2026-11-22 |
| Within-remit ruling | ORCA-MOVEMENT: Orca orchestration's movement goes from `new`, set at its 10 November addition, to `unchanged`; its stance stays assess. Loreward, within remit, from the 4.1 refresh. | 2026-11-22 |
| Weekly review | ACP's latest stable schema is v1.34.1 (2026-11-21): v1.34.0 (2026-11-20) stabilises subagent sessions and plan operations, and v2 moved to Preview with beta schemas that carry no stability contract, so its v2-stabilisation trigger has not fired; release records added and the uncertainty brought up to date. AHP is unchanged at spec v1.1.0 with a 1.2.0 draft; ahpd now states AHP 1.1.0, and the owner's reassessment of the fired 1.0 host-adoption trigger keeps assess with interoperability untested. Orca to 1.4.269, Claude release notes to 20 November and OpenAI's changelog to Codex CLI 0.171.0 and ChatGPT for iOS 1.2026.314 still name no AHP support. MCP's next specification is targeted for 2027-03-30; A2A's 2026-08-27 move into the Agentic AI Foundation is recorded; Obscura documents opt-in persistent profiles, which meets the browser runtime's persistent-profile return trigger without a local trial. AGENTS.md, W3C, Gas City and Orca orchestration unchanged. | 2026-11-22 |
| Change 50 alignment | The Orca orchestration entry, in `agentic-radar.toml` and its source row, brought to ROOMS-CHANNEL and ORCA-FIRST, which Kris took on 20 November 2026 in the Cairn summit's change 50: its mail is the channel between Cairn sessions in Orca, and the rest is still watched. Stance and evidence unchanged; no source refreshed. | 2026-11-20 |
| Agentic systems guild review | From the Cairn summit's change 10: `standards-agentic-radar.md` renamed `standard-agentic-radar.md` and reshaped, its rules unchanged under numbered sections; this file took the sources format, each source group's bullets becoming table rows with their reviewed date, the review log newest first, AHP-RADAR as a decision and the open watch items under Watching. No rule changed and no outside source was refreshed. | 2026-11-18 |
| Weekly review | Every source re-read. ACP's latest stable schema is now v1.32.0 (2026-11-14): of the releases since v1.25.0 only v1.30.0 (2026-11-09) stabilises anything, the client system prompt, and v2 has reached alpha 16; the release records are added and the subject's assessment is unchanged. AHP released spec v1.1.0 (2026-11-12), which promotes no channel and adds an experimental TCP channel, with a 1.2.0 draft published; pi-ahp and ahpd now state 1.0.0 support and the implementation catalogue lists more independent clients and hosts, which fires the 1.0 host-adoption return trigger and is held for the owner. Orca, Claude Desktop, ChatGPT Desktop and ChatGPT Mobile still name no AHP support. Orca's documentation moved to orca.dev and its orchestration panel is temporarily unavailable; VS Code's nested `AGENTS.md` caveat moved to its custom instructions reference; Cloudflare's page now documents MCP servers only. RDF 1.2 Concepts is a Candidate Recommendation draft of 2026-11-13, so RDF 1.1 stays the cited Recommendation. MCP, A2A, AGENTS.md, W3C, Gas City, Obscura and the other structural sources unchanged; no stance or movement changed. | 2026-11-15 |
| AHP adoption signal | AHP-RADAR: AHP adoption is tracked per agent host. Orca, Claude Desktop, ChatGPT Desktop and ChatGPT Mobile each show no AHP support, recorded as dated counter-evidence on the AHP subject; Orca orchestration added as a new assessment subject, watched and never adopted as a channel between Agora sessions. Other subjects not refreshed. | 2026-11-10 |
| Weekly review | ACP schema v1.25.0 (2026-10-09) stabilizes session notices and session compaction on wire protocolVersion 1; v2.0.0 alpha 8 also released (pre-stable counter-evidence). MCP, AHP, A2A, AGENTS.md, W3C, Gas City, and Obscura unchanged. | 2026-10-19 |
| Disposition | The 2026-09-26 AHP finding is closed: implementation multiplicity is recorded, interoperability remains unwitnessed, the assess stance is unchanged, and the open cross-implementation watch item carries the follow-up. | 2026-10-06 |
| Weekly review | AHP released spec v1.0.0 (2026-10-02), firing its 1.0 return trigger; specification maturity moves from versioned to stable on normative text plus governance release, while interoperability stays untested, stance stays assess, and a new trigger tracks 1.0 host adoption and the six sub-Stable channels. ACP advanced to schema v1.24.1 and v2 alpha 7 (2026-09-30) with only unstable additions. Repointed the ki-env-binding, Codex AGENTS.md, and AGENTS.md governance sources to reachable primary pages. MCP, A2A, AGENTS.md, W3C, Obscura, and Gas City unchanged. | 2026-10-06 |
| Coordination-tooling signal | Added Gas City as a new assessment subject without adoption inference. | 2026-09-26 |
| Weekly review | ACP advanced to stable schema v1.23.0 and v2 alpha 5; AHP now has multiple independent hosts, while interoperability remains untested; other stances remain unchanged. | 2026-09-26 |
| Browser-runtime signal | Added agent-owned isolated browser runtimes for assessment, with Obscura as reference implementation and a bounded local trial required before adoption. | 2026-09-22 |
| Weekly review | ACP schema releases and AHP release plus independent implementation accepted; other subject stances unchanged. | 2026-09-17 |
| Initial evidence set | Six subjects and structural vocabulary reviewed. | 2026-09-14 |

Return triggers: new protocol release, governance transfer, independent implementation, published conformance result, cross-implementation demonstration, deprecation, or a Knowledge Islands use case requiring reassessment.

Agent Client Protocol is disambiguated from similarly named IBM and AGNTCY protocols; structural vocabulary remains outside the subject registry where the schema would misclassify it.

**Watching:**

- Seek public cross-implementation conformance or interoperability results for AHP, A2A, and AGENTS.md rather than inferring them from package or implementation counts.
- Obscura's documented persistent profiles met the browser runtime's return trigger, since retired; moving it inward still needs a bounded local ChatGPT acquisition trial, which is `ki-work next`'s to capture.
- ACP v2 is in Preview with beta schemas; watch for its stabilisation, which is the ACP subject's return trigger.

[Back to contents](#contents)

### 4.2 Model subjects

- 2026-11-23 — Weekly review, in the overnight sources refresh, rechecked every tracked source, including the standards, licences and local owner sources last reviewed on 2026-11-15; `radar.toml` and the model-tier tables were not changed, and the data updates below are held as proposals for the owner. BenchLM now presents BenchAlign v6.0, its methodology and catalogue dated 2026-11-21, and no longer states a retrospective-validation date, so its record's method version and data date are stale. The Arena changelog runs to 2026-11-20, adding a 2026-11-17 Alignment Index method change (majority vote of multi-lab LLM judges) and a 2026-11-18 Agent leaderboard overhaul into an overall and six focused indexes. Terminal-Bench is still 4.1, its newest entries dated 2026-11-18. Artificial Analysis stays at Intelligence Index v5.0.1 and Coding Agent Index v2.1, still without a data date. Moonshot released Kimi K3.1 Pro, a post-trained Kimi K3 with open weights from early November under its own licence, found through the Arena and Terminal-Bench boards and secondary reports rather than the Kimi K3 repository, which does not mention it. The retired GPT-6 Astra launch post is fetchable again: it confirms `gpt-6-astra` with Azure and Amazon Bedrock access, but gives no exact release date, its earliest update being dated 2026-09-22. Claude Code's page says sessions migrated to Fable 5.2 start at `medium` effort, where the API overview gives `high` as Fable 5.2's default; the tier table follows the API. The Thoughtworks FAQ names the fourth ring Caution, as the local adaptation already reads. SWE-bench again rendered only partly. Claude, OpenAI, Codex, ACP harness, Gemini, GLM, Kimi K3, Qwen, Grok, OSAID, Harbor and HELM identities, lifecycles and licences are otherwise unchanged since 2026-11-22; Google also lists `genie-4` (2026-11-19), not a radar candidate.
- 2026-11-22 — The Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied MODEL-TIERS a, recorded under [Decisions](#3-decisions): the [model-tier standard](standard-model-tiers.md) joins from the two tokenomics adapters, with the Codex role resolver and its test, and states the tier-movement rule once. Its tables were rechecked against the Claude models overview, the Claude model IDs page and the GPT-6 guide: the `frontier` candidate is now Claude Fable 5.2, the `fast` candidate Claude Haiku 5.5 at `medium` effort, Haiku 4.5 being listed among older models, and the GPT-6 guide now names only GPT-6.2 Astra and GPT-6.2 Sol. No criterion changed.
- 2026-11-22 — Loreward, within remit, from the 4.1 refresh, took NEW-IDENTITIES, recorded under [Decisions](#3-decisions): GPT-6.2 Astra and GPT-6.2 Sol join as model identities on the OpenAI model catalogue, GPT-6 guide and Codex models page, and Claude Fable 5.2 on the Claude models overview and deprecations page, each with no route. The other new identities stay held. No outside source was refreshed.
- 2026-11-22 — Loreward, within remit, from the 4.1 refresh, took AA-APPLICABILITY, recorded under [Decisions](#3-decisions): the Coding Agent Index v2.1 stays primary and the Intelligence Index v5.0.1 corroborating. Nothing in `radar.toml` changed, and no outside source was refreshed.
- 2026-11-22 — Loreward, within remit, from the 4.1 refresh, took GPT-5.6-SOL-ROUTE, recorded under [Decisions](#3-decisions): the GPT-5.6 Sol route keeps Adopt, available and `outward`, with a recheck after 2026-11-30 under **Watching**. Nothing in `radar.toml` changed, and no outside source was refreshed.
- 2026-11-22 — Loreward, within remit, from the 4.1 refresh, took GEMINI-CLI-ROUTE, recorded under [Decisions](#3-decisions): the Gemini CLI route keeps Assess and not-integrated, its counter-evidence recorded. Nothing in `radar.toml` changed, and no outside source was refreshed.
- 2026-11-22 — Loreward, within remit, from the 4.1 refresh, took MOVEMENT, recorded under [Decisions](#3-decisions): the Claude Opus 5, Claude Opus 5.5, GPT-6.1 Sol, Grok 4.6 and Grok 4.7 routes read `unchanged`, their 2026-10-06 movement no longer describing the current review; GPT-5.6 Sol stays `outward`. No ring, support level or default changed, and no outside source was refreshed.
- 2026-11-22 — Weekly review rechecked the provider, open-weight and Artificial Analysis sources and every route's harness. BenchLM, Arena, SWE-bench, Terminal-Bench, Harbor, HELM, the GLM and Kimi licence files, the Claude Opus 5 launch post, the Fable 5.1 overview, the standards, and the local owner sources were not refetched and keep their 2026-11-15 review. No ring, support level, applicability or default changed; the proposals below are held for the owner. OpenAI now presents GPT-6.2 Astra (`gpt-6.2-astra`) and GPT-6.2 Sol (`gpt-6.2-sol`) as its current flagships: the model catalogue and GPT-6 guide no longer list GPT-6 Astra or GPT-6.1 Sol, so both become counter-evidence for those models and their Codex routes, while each model's own page, now tracked, shows it available with no deprecation notice; the GPT-6 guide no longer names GPT-6 Sol or Luna, whose evidence moves to the GPT-6 Sol model page and the catalogue. Codex, its models page moved to learn.chatgpt.com, recommends the GPT-6.2 pair for the app and CLI and still lists GPT-6 Astra and GPT-6.1 Sol in every client, but no longer mentions GPT-5.6 Sol, which becomes that route's counter-evidence. Claude Code's `opus` alias still resolves to Opus 5.5, and Opus 5 and Fable 5.1 remain selectable, though from v2.1.321 a Fable 5.1 saved in subscription user settings migrates to the `fable` alias, now Fable 5.2. Gemini CLI runs as an ACP agent, but its own page says it was replaced by Antigravity CLI for unpaid-tier and Google One users on 2026-06-18, recorded as that route's counter-evidence. OpenCode runs as an ACP agent, and Zed installs all four routed agents from its ACP Registry; whether OpenCode reaches the Z.AI, Moonshot and Alibaba endpoints was not checked. Artificial Analysis records now describe Intelligence Index v5.0.1 and Coding Agent Index v2.1, keeping their applicability; neither page gives a data date, so both benchmark dates use the first of November 2026. Gemini 4 Neon was released on 2026-11-18, Alibaba labels `qwen4-max` its latest model, Anthropic lists Claude Mythos 5.2 under limited availability, and SpaceXAI's index also lists `grok-build-0.1`. The Grok Build page returned HTTP 403, so Grok Build availability rests on the Grok 4.6 and 4.7 launch posts. Claude, Gemini 3.8 Flash, GLM-5.3, GLM-5.3-Flash, Kimi K3, Qwen3.8 and Grok identities and lifecycles are otherwise unchanged.
- 2026-11-18 — The Agentic systems guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-model-radar.md` was renamed `standard-model-radar.md` and reshaped, its rules unchanged under numbered sections, and this file took the sources format, its classes as authoritative sub-groups and the independent sources as advisory, with the review entries now newest first. The rubric's source names follow. No rule changed and no outside source was refreshed.
- 2026-11-15 — Weekly review rechecked every tracked source. No ring, support level, movement, or default changed, and routes keep their 2026-10-18 review. Claude Haiku 5.5 (`claude-haiku-5-5`, retirement not sooner than 2027-10-07) joins as a model identity with no route, as the owner decided on 2026-10-18 (HAIKU-5.5), verified again against the current Claude models and deprecations pages; Claude Haiku 4.5 is still active with no deprecation notice. Anthropic released Claude Fable 5.2 (`claude-fable-5-2`, retirement not sooner than 2027-11-09), now its current Fable model, with Fable 5.1 active but legacy; the Fable product page now presents 5.2, so the Fable 5.1 source moves to its own model overview, and adding Fable 5.2 is held for the owner. OpenAI now names GPT-6.1 Terra (`gpt-6.1-terra`) as a fourth current GPT-6 family choice, held for the owner; GPT-5.6 Sol's promotional pricing runs to 2026-11-30, and GPT-5.6 Sol and Terra keep their own model pages with no deprecation notice. Google's Gemini pages moved from ai.google.dev to aistudio.google.com; Gemini 3.8 Flash is unchanged, and the deprecations page now lists Gemini 4 Argon (2026-10-13), Carbon (2026-11-10), and Hydrogen (2026-11-12), with a stable Argon model page. Alibaba's documentation labels `qwen4-max-preview` as its latest model; `qwen3.8-max` carries no deprecation notice. BenchLM refreshed its catalogue on 2026-11-13 and the Arena changelog runs to 2026-11-12, so their data dates move. Terminal-Bench advanced to 4.1 (announced 2026-11-09, the same 66 tasks with updated verifiers), and its record follows. Artificial Analysis now publishes Intelligence Index v5.0.1 and Coding Agent Index v2.1, both from November 2026, with changed components; their records keep v4.3.2 and v1.5 and their 2026-10-18 review until the owner reviews the change. SWE-bench again rendered only partly, so its instance counts and data date are unchanged. GLM-5.3, GLM-5.3-Flash, Kimi K3, Qwen3.8 open weights, Grok, HELM, Harbor, OSAID, and the Thoughtworks rings are unchanged. The GPT-6 Astra launch post still returns HTTP 403.
- 2026-10-18 — Weekly review under KI-HARNESS-GOV-194 rechecked every tracked source and the local Zed agent configuration, which still selects the `opus` alias for Claude Code and `gpt-6.1-sol` for Codex. No ring, support level, movement, or default changed. The GPT-6 Astra launch post returned HTTP 403 again and an archived copy could not be fetched, so it is retired from this ledger and from the Astra model and route evidence; `gpt-6-astra` identity and current access rest on the OpenAI model catalogue and GPT-6 guide, both rechecked, and the 2026-09-03 release date and Azure and AWS Bedrock access claims it alone carried leave the snapshot. Anthropic's lineup now names Haiku 5.5 as current and lists Haiku 4.5 as legacy, still active; Sonnet 4.5, never a radar model, was deprecated on 2026-09-30 for retirement on 2026-11-30. The OpenAI catalogue no longer lists GPT-6 Sol, which the GPT-6 guide still names as the earlier Sol, so the catalogue is now its counter-evidence; GPT-5.6 Sol and Terra keep their own model pages with no deprecation notice. BenchLM's catalogue refreshed on 2026-10-17 and the Arena changelog runs to 2026-10-16, adding the Alignment Index and a Bash Reliability method change; Artificial Analysis stays at Intelligence Index v4.3.2 and Coding Agent Index v1.5. SWE-bench and Terminal-Bench pages again show no data date and rendered only partly, so their `data_as_of` values and SWE-bench instance counts are unchanged. Grok, Gemini 3.8 Flash, GLM-5.3, GLM-5.3-Flash, Kimi K3, and Qwen3.8 identities and licences are unchanged; Qwen3.8 Max adds an upgraded `qwen3.8-max-0902` snapshot. The retired [Astra launch post][openai-astra] can return as a source once it is fetchable.
- 2026-10-06 — Owner follow-up decisions: Grok 4.7 joins the radar, verified against SpaceXAI's launch post, model page, and models index, and a new Grok Build route at Assess and not-integrated takes over from Grok 4.6, whose route moves outward; its ring and support are unchanged, and `outward` records the supersession, with the models index as counter-evidence. The owner's day-to-day use of Claude Opus 5.5 through Claude Code and GPT-6.1 Sol through Codex is recorded as local-fit evidence for both defaults, closing the local-fit watch-item; the owner accepted that use in lieu of a structured assessment on representative tasks, effort, cost, and runtime access. The Claude Haiku 4.5 watch-item now tracks a formal deprecation notice rather than implying retirement on 2026-10-15.
- 2026-10-06 — Owner decision: Claude Opus 5.5 through Claude Code and GPT-6.1 Sol through Codex become new Adopt default routes, matching the local Zed agent configuration. Rechecked the current Claude models overview, Claude deprecations page, and OpenAI GPT-6 guide: `claude-opus-5-5` is active with retirement not sooner than 2027-09-22, and `gpt-6.1-sol` remains a current GPT-6 family choice with no deprecation notice. The superseded Claude Opus 5 and GPT-5.6 Sol routes stay available and outward.
- 2026-10-06 — Disposition of the 2026-09-26 candidate-identity follow-up: the 2026-09-30 targeted review discharged it by recording the current Claude and GPT-6 family identities. Route evaluation for any new model needs its own work item with local-fit evidence; this disposition moves no default, route, or recommendation.
- 2026-10-06 — Weekly review rechecked every tracked source except the GPT-6 Astra launch post, which returned HTTP 403 and keeps its earlier date. The local Zed agent configuration no longer selects Claude Opus 5 or GPT-5.6 Sol: Claude Code uses the `opus` alias (current Opus 5.5) and Codex uses `gpt-6.1-sol`, so both recorded default routes moved outward to available without adding replacement defaults. The OpenAI catalogue dropped GPT-5.6 Sol, which remains available on its own model page. BenchLM advanced to v5.8 (2026-09-30) with data refreshed 2026-10-05; Terminal-Bench 4.0 was announced 2026-08-28; the Arena policy claim moved from the Arena-Rank post to its own policy and changelog records; Harbor and the Claude deprecations page moved URL; the roadmap evidence is pinned to its last commit after leaving main. Artificial Analysis, SWE-bench, and Terminal-Bench pages show no data date, so those `data_as_of` values are unchanged. Grok 4.7 (2026-09-21) now supersedes Grok 4.6 as the recommended xAI model; Gemini 4 Argon (2026-09-30) is a limited preview only.
- 2026-09-30 — Targeted release-triggered review added the current Claude and GPT-6 family identities plus GPT-5.6 Terra as an available previous-family option. Existing route defaults and recommendations did not move: provider positioning alone does not establish Codex or Claude Code route fit. Previously tracked sources outside this targeted review retain their earlier review dates.
- 2026-09-26 — Rechecked every tracked source. Existing model identities remain active, Artificial Analysis advanced to Intelligence Index v4.3.2, and no existing recommendation moved. New model candidates and local route implications were held for a bounded disposition, recorded below on 2026-10-06.
- 2026-09-17 — Rechecked current provider lifecycle pages and benchmark-owner return triggers. Sol, Astra, Opus 5, and Gemini 3.8 Flash remain active; BenchLM v5.5, Coding Agent Index v1.5, SWE-bench, Terminal-Bench 4.0, and HELM maintenance state did not justify recommendation or lifecycle movement.
- 2026-09-14 — Replaced the placeholder with individually reviewed primary methodology, benchmark-owner, provider, licence, lifecycle, and local-owner sources.

The KI recommendation vocabulary is a documented local adaptation of Thoughtworks' four rings: it preserves Adopt, Trial, Assess, and Caution as Hold rather than claiming an exact reproduction.

HELM entered maintenance mode on 2026-06-01 and remains watch-level corroborating evidence, not a current frontier-primary source.

All named initial model identities were substantiated. Hosted-only variants retain a conservative proprietary distribution classification; no public weights licence was found for those exact variants.

**Watching:**

- reassess provider availability, retirement notices, pricing, route support, benchmark versions, and data dates during every monthly refresh.
- do not promote an open-weight model to Open Source AI Definition conformance without evidence for the definition's data-information, code, and parameter requirements.
- keep hosted `qwen3.8-max` separate from Apache-2.0 Qwen3.8 open-weight checkpoints.
- track Gemini 4 Argon only once it reaches general availability. On 2026-11-15 the deprecations page lists `gemini-4-argon` as released on 2026-10-13 with no shutdown date and its model page marks it stable, so it appears to have reached general availability; adding it, and Gemini 4 Carbon, Hydrogen and, from 2026-11-18, Neon, awaits the owner.
- watch for a formal Claude Haiku 4.5 deprecation notice. On 2026-11-23 it is still active on the deprecations page with no notice, its not-sooner-than date of 2026-10-15 has passed, and the models overview lists it among older models rather than the current lineup; Anthropic gives at least 60 days' notice before retiring a publicly released model, so it cannot retire before mid-January 2027. It has no route today.
- Artificial Analysis moved to Intelligence Index v5.0.1 and Coding Agent Index v2.1 in November 2026, and on 2026-11-22 their records took the new versions, metrics and constraints. The Coding Agent Index now uses FrontierCode-AA 2.0, with private tasks and an LLM judge, in place of DeepSWE, and Terminal-Bench 4.1; whether each record keeps its applicability is the owner's call.
- decide whether Claude Fable 5.2, GPT-6.2 Astra, GPT-6.2 Sol, GPT-6.1 Terra, Qwen4 Max, and the Gemini 4 models, Neon included, join the radar as model identities; none has a route. Claude Mythos 5.2 is limited to verified organisations.
- GPT-6.1 Sol, a default route's model, and GPT-6 Astra have left OpenAI's catalogue and GPT-6 guide in favour of GPT-6.2 Sol and Astra, with no deprecation notice; watch for one, and for Codex dropping either model. On 2026-11-23 both model pages show no notice and Codex still lists both.
- the owner kept the [GPT-6 Astra launch post][openai-astra] retired on 2026-10-18 (ASTRA-SOURCE). On 2026-11-23 it was fetchable again and supports the Azure and Amazon Bedrock access claims, but not the 2026-09-03 release date; re-adding it, with its evidence in `radar.toml`, awaits the owner.
- decide whether Kimi K3.1 Pro, an open-weight successor to Kimi K3 released on 2026-10-23 with weights from early November, joins the radar; its own repository and licence need fetching first, and Kimi K3 has no successor recorded.
- BenchLM's record still reads method v5.8 and data of 2026-11-13, the Arena record data of 2026-11-12 and Terminal-Bench data of 2026-11-14; on 2026-11-23 they read BenchAlign v6.0 with data of 2026-11-21, 2026-11-20 and 2026-11-18, held as proposals.
- recheck the GPT-5.6 Sol route after its promotional pricing ends on 2026-11-30: on 2026-11-22 Codex's models page no longer mentions it, and its own model page shows it available (GPT-5.6-SOL-ROUTE).

[Back to contents](#contents)

[aa-coding]: https://artificialanalysis.ai/methodology/coding-agents-benchmarking/
[aa-intelligence]: https://artificialanalysis.ai/methodology/intelligence-benchmarking
[arena-changelog]: https://arena.ai/company/leaderboard-changelog
[arena-policy]: https://arena.ai/blog/policy
[arena-rank]: https://arena.ai/blog/arena-rank
[benchlm]: https://benchlm.ai/methodology
[claude-fable]: https://platform.claude.com/docs/en/models/fable-5-1/overview
[claude-code-models]: https://code.claude.com/docs/en/model-config
[claude-current]: https://platform.claude.com/docs/en/models/overview
[claude-lifecycle]: https://platform.claude.com/docs/en/about-claude/model-deprecations
[claude-opus]: https://www.anthropic.com/news/claude-opus-5
[codex-models]: https://learn.chatgpt.com/docs/models
[gemini-cli-acp]: https://geminicli.com/docs/cli/acp-mode
[gemini-flash]: https://aistudio.google.com/docs/models/gemini-3.8-flash
[gemini-lifecycle]: https://aistudio.google.com/docs/deprecations
[glm-53-flash-license]: https://huggingface.co/zai-org/GLM-5.3-Flash/blob/main/LICENSE
[glm-53-flash]: https://autoclaw.z.ai/blog/model/glm-5.3-flash/
[glm-53-license]: https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE
[glm-53]: https://huggingface.co/zai-org/GLM-5.3
[grok-launch]: https://x.ai/news/grok-4-6
[grok-model]: https://docs.x.ai/developers/models/grok-4.6
[grok-47-launch]: https://x.ai/news/grok-4-7
[grok-47-model]: https://docs.x.ai/developers/models/grok-4.7
[harbor]: https://docs.harborframework.com/core-concepts/index
[helm-maintenance]: https://github.com/stanford-crfm/helm/blob/main/docs/maintenance_mode.md
[helm]: https://github.com/stanford-crfm/helm
[kimi-k3]: https://github.com/MoonshotAI/Kimi-K3
[kimi-k3-license]: https://github.com/MoonshotAI/Kimi-K3/blob/main/LICENSE
[local-defaults]: https://github.com/knowledgeislands/ki-agent-backpack/commit/709f49fec523f596d1b388391bff6aed39ac5198
[local-roadmap]: https://github.com/knowledgeislands/ki-agent-backpack/blob/dd45807722a06cf3e54686f4eaa38c1149836e3a/docs/roadmap/KI-HARNESS-REV-003-establish-model-radar.md
[openai-astra]: https://openai.com/index/gpt-6-astra/
[openai-gpt-6]: https://developers.openai.com/api/docs/guides/latest-model
[claude-model-ids]: https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions
[openai-gpt-6-1-sol]: https://developers.openai.com/api/docs/models/gpt-6.1-sol
[openai-gpt-6-astra]: https://developers.openai.com/api/docs/models/gpt-6-astra
[openai-gpt-6-sol]: https://developers.openai.com/api/docs/models/gpt-6-sol
[openai-models]: https://developers.openai.com/api/docs/models
[opencode-acp]: https://opencode.ai/docs/acp/
[openai-sol]: https://developers.openai.com/api/docs/models/gpt-5.6-sol
[openai-terra]: https://developers.openai.com/api/docs/models/gpt-5.6-terra
[osi-osaid]: https://opensource.org/ai/open-source-ai-definition
[qwen-27b]: https://huggingface.co/Qwen/Qwen3.8-27B
[qwen-family]: https://github.com/QwenLM/Qwen3.8
[qwen-max]: https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-8-max
[swe-bench]: https://www.swebench.com/
[terminal-bench]: https://www.tbench.ai/
[thoughtworks-radar]: https://www.thoughtworks.com/radar/faq
[xai-models]: https://docs.x.ai/developers/models
[zed-agents]: https://zed.dev/docs/ai/external-agents
