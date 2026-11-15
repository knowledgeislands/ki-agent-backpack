---
id: industry.plugin
title: Plugin
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 23, NAMES and HARNESS-NAME a (13 November 2026)
links:
  industry.skill:
    predicate: dcterms:hasPart
  industry.agent-harness:
    predicate: skos:related
---

# Plugin

A plugin lets a whole working setup for an agent harness be installed, and shared, in one step, rather than gathered a piece at a time.

A plugin is an installable bundle that extends an [agent harness][industry.agent-harness]. It holds [skills][industry.skill] and often hooks, subagent definitions and MCP servers (`spec.mcp`, pending), packaged, installed, enabled and shared as one unit, usually from a catalogue called a marketplace. It is the way skills are distributed, not a skill itself.

## What the industry says

Anthropic and OpenAI, who lead (LEADERS), use the word alike. A Claude Code plugin "is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit", named by its manifest and mostly installed from a marketplace ([plugins][a10]). OpenAI's [plugin][openai.plugin] "is an installable bundle that can include skills and Model Context Protocol (MCP) servers" ([skills and plugins][o13]).

## Our conventions

Each territory's backpack, such as the KI backpack, is Knowledge Islands' plugin: a bundle of skills, subagent definitions, evals and hooks. It is a close match until the repositories ship plugin manifests, and its card comes with the system's own terms.

## Next

An [agentic system][industry.agentic-system] is any system in which models direct some of their own steps: the umbrella over every term here.

[industry.agent-harness]: ./industry.agent-harness.md
[industry.skill]: ./industry.skill.md
[industry.agentic-system]: ./industry.agentic-system.md
[openai.plugin]: ../vendors/openai/openai.plugin.md
[a10]: https://code.claude.com/docs/en/plugins
[o13]: https://learn.chatgpt.com/docs/skills-and-plugins.md
