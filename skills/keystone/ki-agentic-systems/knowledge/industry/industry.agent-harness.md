---
id: industry.agent-harness
title: Agent harness
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, CARDS-AGENT (12 November 2026)
links:
  industry.model:
    predicate: ki:runs
---

# Agent harness

An agent harness turns a [model][industry.model] into an agent, so that what the model decides is carried out in the world.

It is software that runs the loop: it gives the model its context, carries out the tool calls the model asks for, and feeds the results back until the work is done. It holds the tools, handles the context as it grows, and keeps each run it carries out. The model decides; the harness acts.

Vendor text often writes "harness" for the harness and the agent together; read it as covering both layers unless the text separates them.

## Our conventions

A territory's bundle of skills, subagents, evals and hooks, such as the `ki-agent-backpack` repository, is not an agent harness: it runs no loop and calls no model. Under INDUSTRY-FIRST it has its own name, a [backpack][system.backpack] (HARNESS-NAME); never call it a harness.

## Next

The [agent][industry.agent] is a model working through an agent harness.

[industry.model]: ./industry.model.md
[industry.agent]: ./industry.agent.md
[system.backpack]: ../system/system.backpack.md
