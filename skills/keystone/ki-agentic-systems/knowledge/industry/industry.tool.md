---
id: industry.tool
title: Tool
type: term
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 12, 4.5, drafted for the owner's review in the order change 22 set, after the agent team and before the plugin (17 November 2026)
links:
  industry.agent:
    predicate: skos:related
  industry.agent-harness:
    predicate: skos:related
  spec.mcp.tools:
    predicate: skos:closeMatch
---

# Tool

A tool lets an agent act on the world, or fetch what it does not know, beyond what the model can do with its own text.

A tool is a function an [agent][industry.agent] can call, described by a name, a description saying when and how to use it, and an input schema in JSON Schema. The model only asks for the call, choosing the tool from its description; the [agent harness][industry.agent-harness], the application, or a server on the agent's behalf runs it and hands the result back, so the model never runs code itself ([A12], [O14]). The [Model Context Protocol's tools][spec.mcp.tools] are tools offered by a server in this sense, discovered and called over the protocol.

A tool is not a skill: a skill is knowledge and procedure the agent reads, and it may tell the agent which tools to call.

## Our conventions

The tools Knowledge Islands sessions call come from the agent harness itself, such as reading and editing files and running commands, and from MCP servers declared in the portable MCP inventory under `ki-env-binding`.

## Next

An [instruction file][industry.instruction-file] holds the standing instructions a harness loads into a session.

[industry.agent]: ./industry.agent.md
[industry.agent-harness]: ./industry.agent-harness.md
[spec.mcp.tools]: ../specs/mcp/spec.mcp.tools.md
[industry.instruction-file]: ./industry.instruction-file.md
[A12]: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
[O14]: https://developers.openai.com/api/docs/guides/function-calling
