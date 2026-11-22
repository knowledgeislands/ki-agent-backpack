---
id: diagram.agentic-standards
title: Agentic standards and channels
type: resource
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, DIAGRAM-RESOURCE (12 November 2026), and change 12, step 5, its redraw once the specification cards were agreed (19 November 2026)
links:
  industry.agent-host:
    predicate: dcterms:subject
  industry.agent:
    predicate: dcterms:subject
  industry.client:
    predicate: dcterms:subject
  industry.channel:
    predicate: dcterms:subject
  industry.cross-session-messaging:
    predicate: dcterms:subject
  industry.remote-agent:
    predicate: dcterms:subject
---

# Agentic standards and channels

A diagram of what each open standard connects: MCP an [agent][industry.agent] to its tools, ACP an editor, its [client][industry.client], to the agent it launches, AHP many clients to one [agent host][industry.agent-host], and A2A an agent to an opaque [remote agent][industry.remote-agent] in another agentic system. It also draws, in the industry's words (CARD-CHANNEL a), the other ways into a running session: a [channel][industry.channel], an MCP server pushing a Telegram event in, and [cross-session messaging][industry.cross-session-messaging] to a peer session; and the Cairn store, which sessions write and read and which pushes nothing, so is not a channel. Integration is left undrawn until its card is written.

- **Figure:** [agentic-standards.svg][svg], with the [interactive viewer][html].
- **Source and regeneration:** [its Archify source][src] and its table in the backpack's [diagram manifest][manifest].

It was redrawn on 19 November 2026, once the specification cards it points to, [MCP][spec.mcp], [ACP][spec.acp], [AHP][spec.ahp] and [A2A][spec.a2a], were agreed (SPEC-AGREE, SPEC-AHP), each standard given the version its card cites; its old labels for channels "intra-system" and "inter-system" were our own qualified words, which CARD-CHANNEL set aside.

[industry.agent]: ../industry/industry.agent.md
[industry.client]: ../industry/industry.client.md
[industry.agent-host]: ../industry/industry.agent-host.md
[industry.channel]: ../industry/industry.channel.md
[industry.cross-session-messaging]: ../industry/industry.cross-session-messaging.md
[industry.remote-agent]: ../industry/industry.remote-agent.md
[spec.mcp]: ../specs/mcp/spec.mcp.md
[spec.acp]: ../specs/acp/spec.acp.md
[spec.ahp]: ../specs/ahp/spec.ahp.md
[spec.a2a]: ../specs/a2a/spec.a2a.md
[svg]: https://github.com/knowledgeislands/ki-agent-backpack/blob/main/docs/diagrams/agentic-standards.svg
[html]: https://github.com/knowledgeislands/ki-agent-backpack/blob/main/docs/diagrams/agentic-standards.html
[src]: https://github.com/knowledgeislands/ki-agent-backpack/blob/main/docs/diagrams/agentic-standards.architecture.json
[manifest]: https://github.com/knowledgeislands/ki-agent-backpack/blob/main/docs/diagrams/diagrams.toml
