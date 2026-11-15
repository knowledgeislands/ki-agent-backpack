---
id: industry.agentic-system
title: Agentic system
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23, NAMES-SYSTEM a (13 November 2026)
links:
  industry.agent:
    predicate: dcterms:hasPart
  industry.model:
    predicate: dcterms:hasPart
---

# Agentic system

An agentic system lets work get done by models that decide some of their own steps, rather than by code that fixes every step in advance.

An agentic system is any system in which [models][industry.model] direct some of their own steps and tool use. It has two kinds: **workflows**, where code sets the path and orchestrates models and tools along it, and [agents][industry.agent], where the model directs its own process. It is the umbrella over every term in this graph: one agent with its subagents, an agent team, or agents in several systems reaching each other as remote agents.

## What the industry says

Anthropic, who lead (LEADERS), set the umbrella: "we categorize all these variations as agentic systems", workflows being "systems where LLMs and tools are orchestrated through predefined code paths" and agents "systems where LLMs dynamically direct their own processes and tool usage" ([building effective agents][a11]). The Agent2Agent protocol uses the term in the same sense: its remote agent is "an agent or agentic system that exposes an A2A-compliant endpoint", and its aim is to bridge "disparate agentic systems" ([A2A specification][A2A1]). OpenAI's multi-agent system is a narrower term, for a system of several agents.

## Our conventions

Knowledge Islands' own agents, with the skills and tools they work through, make up one agentic system in this sense.

## Next

The cards still to come: channel, tool and instruction file, then the system's own terms.

[industry.model]: ./industry.model.md
[industry.agent]: ./industry.agent.md
[a11]: https://www.anthropic.com/engineering/building-effective-agents
[A2A1]: https://a2a-protocol.org/latest/specification/
