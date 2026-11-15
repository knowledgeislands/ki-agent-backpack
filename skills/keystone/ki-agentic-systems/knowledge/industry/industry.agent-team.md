---
id: industry.agent-team
title: Agent team
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23, NAMES-TEAM a (13 November 2026)
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

## What the industry says

Anthropic's [agent team][anthropic.agent-team] is the example: in Claude Code, "one session acts as the team lead, coordinating work, assigning tasks, and synthesizing results", and teammates "work independently, each in its own context window, and communicate directly with each other", through a mailbox and a shared task list. The feature is experimental ([agent teams][a9]).

## Our conventions

Knowledge Islands' guardian, warden and housekeepers work as an agent team in this sense when they take one job together: separate sessions messaging each other, though not through Anthropic's feature.

## Next

A [remote agent][industry.remote-agent] is an agent in another system, reached over a protocol.

[industry.session]: ./industry.session.md
[industry.agent]: ./industry.agent.md
[industry.subagent]: ./industry.subagent.md
[industry.cross-session-messaging]: ./industry.cross-session-messaging.md
[industry.remote-agent]: ./industry.remote-agent.md
[anthropic.agent-team]: ../vendors/anthropic/anthropic.agent-team.md
[a9]: https://code.claude.com/docs/en/agent-teams
