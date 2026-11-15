---
id: industry.remote-agent
title: Remote agent
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, AGENT-KINDS (12 November 2026), and change 23, NAMES-REMOTE a (13 November 2026)
links:
  industry.agent:
    predicate: skos:broader
  spec.a2a.remote-agent:
    predicate: skos:exactMatch
  industry.subagent:
    predicate: skos:related
---

# Remote agent

A remote agent lets an agent use another system's agent as a service, asking it for work and getting results back without knowing or controlling how that system works.

A remote agent is an [agent][industry.agent], or a system of agents, in another system, which a client agent reaches over a protocol and which stays opaque to it: its memory, tools and inner agents are hidden. The word and its sense are the [Agent2Agent protocol's remote agent][spec.a2a.remote-agent], the A2A server. It is not a [subagent][industry.subagent], since it is independent of the agent that asks it, even where a vendor calls it one.

## Our conventions

No Knowledge Islands system offers or reaches a remote agent today; a session on another rig is a peer, in [cross-session messaging][industry.cross-session-messaging]'s sense, not a remote agent, because it is in the same system.

## Next

A [plugin][industry.plugin] is an installable bundle that extends an agent harness with skills and more.

[industry.agent]: ./industry.agent.md
[industry.subagent]: ./industry.subagent.md
[spec.a2a.remote-agent]: ../specs/a2a/spec.a2a.remote-agent.md
[industry.cross-session-messaging]: ./industry.cross-session-messaging.md
[industry.plugin]: ./industry.plugin.md
