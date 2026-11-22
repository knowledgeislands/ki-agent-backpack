---
id: spec.mcp
title: Model Context Protocol (MCP)
type: specification
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, SPEC-CARDS, drafted as a proposal for the owner's review (12 November 2026), corrected from the blind review of 18 November 2026 and agreed, SPEC-AGREE a (19 November 2026)
links:
  spec.mcp.host:
    predicate: dcterms:hasPart
  spec.mcp.client:
    predicate: dcterms:hasPart
  spec.mcp.server:
    predicate: dcterms:hasPart
  spec.mcp.tools:
    predicate: dcterms:hasPart
  spec.mcp.transports:
    predicate: dcterms:hasPart
  industry.agent-harness:
    predicate: skos:relatedMatch
  spec.acp:
    predicate: skos:related
---

# Model Context Protocol (MCP)

The Model Context Protocol gives any LLM application one standard way to reach the context, data and tools it needs, so one integration works in every application that adopts it ([MCP1]).

MCP is a protocol of JSON-RPC 2.0 messages between three roles: an [MCP host][spec.mcp.host], the application, which creates one [MCP client][spec.mcp.client] for each [MCP server][spec.mcp.server] it connects to. A server offers resources, prompts and [tools][spec.mcp.tools]; a client may offer elicitation, asking the user for more information. Messages travel over its [transports][spec.mcp.transports]. Optional extensions, among them tasks and Skills over MCP, are negotiated on top ([MCP1]).

The current revision is 2026-07-28 ([MCP7]). It made MCP stateless: the `initialize` handshake and the protocol-level session of revisions up to 2025-11-25 are gone, and every request carries its own protocol version and capabilities ([MCP8]). MCP has no session in this graph's sense. The same revision deprecates four features, which still work but which new implementations should not adopt: roots, sampling, logging, and dynamic client registration, replaced by Client ID Metadata Documents ([MCP8]).

An [agent harness][industry.agent-harness] uses MCP to reach its tools; the [tool][industry.tool] card rests on it. The [Agent Client Protocol][spec.acp] works beside it.

MCP sits in the Linux Foundation's Agentic AI Foundation (AAIF), to which Anthropic gave it on 9 December 2025; its maintainers keep its governance ([MCP11]).

[spec.mcp.host]: ./spec.mcp.host.md
[spec.mcp.client]: ./spec.mcp.client.md
[spec.mcp.server]: ./spec.mcp.server.md
[spec.mcp.tools]: ./spec.mcp.tools.md
[spec.mcp.transports]: ./spec.mcp.transports.md
[industry.agent-harness]: ../../industry/industry.agent-harness.md
[industry.tool]: ../../industry/industry.tool.md
[spec.acp]: ../acp/spec.acp.md
[MCP1]: https://modelcontextprotocol.io/specification/2026-07-28
[MCP7]: https://modelcontextprotocol.io/specification/versioning
[MCP8]: https://modelcontextprotocol.io/specification/2026-07-28/changelog
[MCP11]: https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/
