---
id: industry.client
title: Client
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, CARD-CLIENT a) (12 November 2026)
links:
  industry.agent-host:
    predicate: skos:related
  industry.session:
    predicate: skos:related
---

# Client

A client lets you see and drive a [session][industry.session] wherever you are, without the session living there.

A client is a window onto a session an [agent host][industry.agent-host] owns: it displays the session and sends your requests. One session can have several clients, and closing one does not end the session. One program can be both an agent host and its own client.

Examples: the Orca app, attached to its own runtime or a remote one; a terminal; Claude Desktop's window; a web page; a phone, through Remote Control or Orca's mobile pairing.

Anthropic says "surface", covering agent host and client together; OpenAI, Google for its CLI, and Microsoft say client. AHP's [client][spec.ahp.client] is this sense; the other senses of "client" belong on their specifications' cards: the [ACP client][spec.acp.client], the [MCP client][spec.mcp.client] and the [A2A client][spec.a2a.client].

## Next

[Cross-session messaging][industry.cross-session-messaging] lets one session send another a message while both run. The channel card, a proposal, is to come before it.

[industry.session]: ./industry.session.md
[spec.ahp.client]: ../specs/ahp/spec.ahp.client.md
[spec.acp.client]: ../specs/acp/spec.acp.client.md
[spec.mcp.client]: ../specs/mcp/spec.mcp.client.md
[spec.a2a.client]: ../specs/a2a/spec.a2a.client.md
[industry.agent-host]: ./industry.agent-host.md
[industry.cross-session-messaging]: ./industry.cross-session-messaging.md
