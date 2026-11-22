---
id: spec.ahp.session
title: Session and chat, in the Agent Host Protocol
type: specification
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, SPEC-CARDS, drafted as a proposal for the owner's review (12 November 2026), corrected from the blind review of 18 November 2026 and agreed against AHP 1.1.0, SPEC-AHP a (19 November 2026)
links:
  spec.ahp:
    predicate: dcterms:isPartOf
  industry.session:
    predicate: skos:closeMatch
  spec.acp.session:
    predicate: skos:related
---

# Session and chat, in the Agent Host Protocol

AHP's sessions and chats let clients follow and share a piece of agent work, or just one conversation within it. They are part of the [Agent Host Protocol][spec.ahp].

A session is the coordination scope for one or more chats. Its state holds its lifecycle, title and status, the agent that backs it, its working directory, customizations, changesets, active clients and the catalogue of its chats ([session channel][AHP4]). A client chooses the session's id when it asks the [agent host][spec.ahp.agent-host] to create it, and the agent host then starts the agent.

A chat carries one conversation: its turns, streamed responses, tool calls, pending messages and requests for input. Every chat belongs to a session and records how it began: made by the user; forked from another chat at a completed turn; opened as a side chat, a conversation of its own using another chat's context; or spawned by a tool call in another chat, as when work is delegated to a subagent ([chat channel][AHP5]). Only one turn runs at a time in each chat ([AHP and ACP][AHP1]).

AHP's session is close to the [session][industry.session] term, but its chats are not all that card's threads. Only a chat spawned by a tool call is one: a [subagent][industry.subagent]'s thread. A chat the user makes, a fork or a side chat is a conversation of its own, nearer an [ACP session][spec.acp.session] than a thread.

[spec.ahp]: ./spec.ahp.md
[spec.ahp.agent-host]: ./spec.ahp.agent-host.md
[industry.session]: ../../industry/industry.session.md
[industry.subagent]: ../../industry/industry.subagent.md
[spec.acp.session]: ../acp/spec.acp.session.md
[AHP1]: https://microsoft.github.io/agent-host-protocol/guide/ahp-and-acp.html
[AHP4]: https://microsoft.github.io/agent-host-protocol/specification/session-channel.html
[AHP5]: https://microsoft.github.io/agent-host-protocol/specification/chat-channel.html
