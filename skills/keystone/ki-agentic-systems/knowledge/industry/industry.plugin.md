---
id: industry.plugin
title: Plugin
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23 (now 12), NAMES and HARNESS-NAME a (13 November 2026)
links:
  industry.skill:
    predicate: dcterms:hasPart
  industry.agent-harness:
    predicate: skos:related
---

# Plugin

A plugin lets a whole working setup for an agent harness be installed, and shared, in one step, rather than gathered a piece at a time.

A plugin is an installable bundle that extends an [agent harness][industry.agent-harness]. It holds [skills][industry.skill] and often hooks, subagent definitions and MCP servers (`spec.mcp`, pending), packaged, installed, enabled and shared as one unit, usually from a catalogue called a marketplace. It is the way skills are distributed, not a skill itself.

## Our conventions

Each territory's [backpack][system.backpack], such as the KI backpack, is Knowledge Islands' plugin: a bundle of skills, subagent definitions, evals and hooks. It is a close match until the repositories ship plugin manifests.

## Next

The industry's terms in reading order end here. The channel's place in the order is still to settle, and the system's own terms follow in a subgraph of their own.

[industry.agent-harness]: ./industry.agent-harness.md
[industry.skill]: ./industry.skill.md
[system.backpack]: ../system/system.backpack.md
