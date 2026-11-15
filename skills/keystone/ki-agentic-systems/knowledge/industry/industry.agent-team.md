---
id: industry.agent-team
title: Agent team
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23 (now 12), NAMES-TEAM a (13 November 2026)
links:
  industry.session:
    predicate: dcterms:hasPart
  industry.subagent:
    predicate: skos:related
  industry.cross-session-messaging:
    predicate: skos:related
---

# Agent team

An agent team lets several agents take on one piece of work together, each working its own part and sharing and challenging what the others find, where one session would work through it alone.

An agent team is several [sessions][industry.session] working on one piece of work together. A **team lead** sets the work out, assigns it and brings the results together; **teammates**, each a full, independent session with its own context, take their parts and message each other and the lead directly. Teammates are [agents][industry.agent] in their own right, not [subagents][industry.subagent], since they interact with each other rather than only with the agent that started them. Their messages travel within the team, as [cross-session messaging][industry.cross-session-messaging] carries them between sessions outside one.

## Our conventions

Knowledge Islands' guardian, warden and housekeepers work as an agent team in this sense when they take one job together: separate sessions messaging each other, though not through Anthropic's feature.

## Next

A [remote agent][industry.remote-agent] is an agent in another system, reached over a protocol.

[industry.session]: ./industry.session.md
[industry.agent]: ./industry.agent.md
[industry.subagent]: ./industry.subagent.md
[industry.cross-session-messaging]: ./industry.cross-session-messaging.md
[industry.remote-agent]: ./industry.remote-agent.md
