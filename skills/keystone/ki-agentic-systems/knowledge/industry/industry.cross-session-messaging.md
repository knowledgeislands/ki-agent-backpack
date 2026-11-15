---
id: industry.cross-session-messaging
title: Cross-session messaging
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, CARD-CHANNEL a, and change 23 (now 12), NAMES-PEER a (13 November 2026)
links:
  industry.session:
    predicate: skos:related
  industry.machine:
    predicate: skos:related
---

# Cross-session messaging

Cross-session messaging lets one session tell another what it needs to know while both are running, such as a finding, a status or a decision, without anyone copying it across.

Cross-session messaging is one [session][industry.session] sending a plain-text message to another, on the same [machine][industry.machine] or beyond it. A message is text the sending agent writes, never its history or files. The receiving agent reads it between tool calls during a turn, or, when its session is idle, a new turn starts with it. A **peer** is the session at the other end; there is no separate peer agent. Each session keeps its own permissions, and a message from a peer is never the user's consent.

## Our conventions

Sessions on Knowledge Islands' rigs that message one another, such as a session handing the housekeeper on its rig a piece of work, are peers in this sense.

## Next

An [agent team][industry.agent-team] is several sessions working on one piece of work together, messaging each other and a team lead.

[industry.session]: ./industry.session.md
[industry.machine]: ./industry.machine.md
[industry.agent-team]: ./industry.agent-team.md
