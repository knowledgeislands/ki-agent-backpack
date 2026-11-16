---
id: system.backpack
title: Backpack
type: system-term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23 (now 12), NAMES, HARNESS-NAME and BACKPACK-PATTERN (13 November 2026) and BACKPACK-DEPTH (14 November 2026)
links:
  industry.plugin:
    predicate: skos:closeMatch
  industry.skill:
    predicate: dcterms:hasPart
  system.guild:
    predicate: dcterms:hasPart
---

# Backpack

A backpack lets a territory carry everything its agents need to work its way, and install it on any rig in one step.

A backpack is a territory's installable bundle of [skills][industry.skill], subagent definitions, evals and hooks, such as the KI backpack: Knowledge Islands' [plugin][industry.plugin]. It maps onto plugin, `skos:closeMatch`, and will match it exactly once its repositories ship plugin manifests. It is written as a kind, in lower case: the KI backpack, each territory's backpack.

## Our conventions

Each territory's backpack is a repository named `<territory>-agent-backpack`, as `ki-agent-backpack`, and its skills are grouped in [guilds][system.guild]. A backpack is not an [agent harness][industry.agent-harness]: it runs no loop and calls no model, so agent harness keeps the industry's sense (HARNESS-NAME, BACKPACK-DEPTH).

[industry.skill]: ../industry/industry.skill.md
[industry.plugin]: ../industry/industry.plugin.md
[industry.agent-harness]: ../industry/industry.agent-harness.md
[system.guild]: ./system.guild.md
