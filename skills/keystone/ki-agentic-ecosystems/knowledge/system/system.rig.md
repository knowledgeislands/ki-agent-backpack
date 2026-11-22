---
id: system.rig
title: Rig
type: system-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23 (now 12), NAMES and HOST-SENSES (13 November 2026), and change 12, TERMS-SOURCE (16 November 2026)
links:
  industry.machine:
    predicate: skos:exactMatch
---

# Rig

A rig lets Knowledge Islands set up a machine, and put it right, the same way every time, so a session knows what it will find there.

A rig is a [machine][industry.machine] Knowledge Islands manages through Rig, its workstation tool, with a Rig profile and a declared setup, such as sol or terra. It is the same idea as a machine, not a narrower one: rig is Knowledge Islands' word where the industry says machine, `skos:exactMatch`. An agent host runs on a rig, so a rig is never called a host (HOST-SENSES).

## Our conventions

Each rig has a housekeeper, an agent that keeps the rig's setup, as Hob Sol keeps sol and Hob Terra keeps terra. An [actor's][system.actor] roster file names the rig it runs on. Rig, the tool, is written with a capital; a rig, the machine, without.

[industry.machine]: ../industry/industry.machine.md
[system.actor]: ./system.actor.md
