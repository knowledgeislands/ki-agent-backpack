---
id: KI-HARNESS-GOV-242
area: GOV
title: Graphs inside knowledge bases
component: repository
priority: medium
size: m
assignee: work/ki.summit
status: triage
blocks: []
blocked_by: []
baseline_ref: null
created_at: 2026-11-22T04:26:00Z
updated_at: 2026-11-22T04:26:00Z
---

# Graphs inside knowledge bases

## Goal

A standard says how a knowledge graph lives inside a knowledge base: where its root definition and cards sit among the base's zones and folders, and how the base declares it.

## Context

No standard says this yet. `ki-knowledge-graph`'s [knowledge-graph standard](../../skills/keystone/ki-knowledge-graph/references/standard-knowledge-graph.md) defines a graph's root definition, cards, links and subgraphs, and leaves the folders and zones of any knowledge base to `ki-repo-kb`. `ki-repo-kb` governs those folders and zones but never mentions a graph. The graphs that exist today, such as `ki-agentic-ecosystems`' graph in `knowledge/`, live inside skills, not knowledge bases, so nothing shows the shape either.

The likely owners are `ki-repo-kb`, for the base's structure, and `ki-knowledge-graph`, for the graph's side of the boundary. Captured on Kris's request, through ki.summit's governor, on 22 November 2026.

## Boundary

Captures the gap only. It does not choose the owning skill, change either standard, or move any existing graph.

## Discussion

Not yet discussed.
