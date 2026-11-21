---
id: orca.environment
title: Environment (Orca)
type: vendor-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
vendor: Orca
origin: ki.summit change 21, EXEC-ENV a) (21 November 2026)
links:
  industry.environment:
    predicate: skos:relatedMatch
  orca.runtime:
    predicate: skos:related
---

# Environment (Orca)

Orca calls a remote [Orca runtime][orca.runtime] it has saved from a pairing code an "environment": another machine's runtime, reached over a websocket, as terra is paired with sol. `orca environment add`, `list`, `show` and `rm` manage them, and they are kept in `orca-environments.json` ([OR1]).

It is only related to an [execution environment][industry.environment], not one: it names another machine's agent host to reach, not the bounded place where a session's tool calls run, so it is easily mistaken for one.

[industry.environment]: ../../industry/industry.environment.md
[orca.runtime]: ./orca.runtime.md
[OR1]: ../../../references/sources.md#21-authoritative
