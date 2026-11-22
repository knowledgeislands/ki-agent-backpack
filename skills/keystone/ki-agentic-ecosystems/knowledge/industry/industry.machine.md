---
id: industry.machine
title: Machine
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, ENVIRONMENT a) and HOST-SENSES (12 November 2026), revised by ki.summit change 21, EXEC-ENV a) (21 November 2026)
links:
  industry.environment:
    predicate: dcterms:hasPart
---

# Machine

A machine is the computer, physical or virtual, that [execution environments][industry.environment] run on.

Networking calls a machine a host, and OpenAI and Google write "host" or "host machine" for one; here it is always machine, so host never stands alone (HOST-SENSES). A virtual machine is a machine; a container or sandbox inside one is an execution environment, not a machine.

## Our conventions

A [rig][system.rig], Knowledge Islands' word for a machine it manages through Rig, such as terra or sol, maps onto a machine.

## Next

An [agent host][industry.agent-host] runs on a machine and owns the sessions.

[industry.environment]: ./industry.environment.md
[industry.agent-host]: ./industry.agent-host.md
[system.rig]: ../system/system.rig.md
