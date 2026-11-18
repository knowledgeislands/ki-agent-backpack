---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:20:49Z
ki-status: in force
---

# Tokenomics standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Standing surfaces](#41-standing-surfaces)
  - [4.2 Budget policy](#42-budget-policy)
  - [4.3 Selected-repository configuration](#43-selected-repository-configuration)
  - [4.4 Model purpose](#44-model-purpose)
  - [4.5 Retrieval](#45-retrieval)
  - [4.6 Ownership](#46-ownership)

## 1. Introduction

This portable standard governs declared context-cost policy shared by supported agent runtimes. Each runtime adapter, `ki-env-tokenomics-claude` or `ki-env-tokenomics-chatgpt`, adds only the evidence its host documents. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The declared, portable policy for what an agent's context costs.

### 2.1 In scope

- Standing surfaces and what an adapter may report of them.
- Budget guide-rails and their defaults.
- The selected repository's `[skills.ki-env-tokenomics]` configuration.
- Model purposes, including coordination.
- Retrieval and the ownership of findings.

[Back to contents](#contents)

### 2.2 Out of scope

- Observed runtime evidence, effective state and model-tier evidence: the runtime adapters.
- MCP-server and search-surface design: `ki-repo-mcp` and `ki-repo-kb`.
- Installed-skill description quality: `ki-skills`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Standing surface** | The selected repository's instructions, durable memory, installed-skill descriptions, MCP definitions, and settings or output configuration that a runtime may load before or during work. **Standard:** this one, [4.1](#41-standing-surfaces) |
| **Budget** | A declared guide-rail for a component or the total; an overage warns and never fails. **Standard:** this one, [4.2](#42-budget-policy) |
| **Model purpose** | One of `frontier`, `reasoning`, `standard` and `fast`: a purpose, not a provider name. **Standard:** this one, [4.4](#44-model-purpose) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Standing surfaces

A standing surface is the selected repository's instructions, durable memory, installed-skill descriptions, MCP definitions, and settings or output configuration that a runtime may load before or during work. Runtime adapters may report only documented, directly observed surfaces and their bounded layer. Attribution, measurement, and effective runtime state require separately authorised adapter evidence.

[Back to contents](#contents)

### 4.2 Budget policy

Budgets are declared guide-rails. Any observed component or total overage is WARN, never FAIL. A portable policy check cannot observe an overage, usage, attribution, or billing. A FAIL is reserved for a malformed selected-repository configuration or a runtime adapter's explicit required integration that is absent. Token estimates, where an adapter is authorised to produce them, are labelled `~` and are not billing figures.

The default component budgets are `instructions = 2500`, `memory_index = 1000`, `skills_surface = 4000`, `mcp_servers = 5`, and `total = 30000`. A runtime adapter reports only categories it can document and measure.

[Back to contents](#contents)

### 4.3 Selected-repository configuration

Only `[skills.ki-env-tokenomics]` is read, validate-down. Recognised scalar keys are `headroom` (`required`, `recommended`, or `off`), positive integer `context_window_tokens`, and `preferred_model_type` (`frontier`, `reasoning`, `standard`, or `fast`). `budgets` and `model_tier_bindings`, when present, must be tables. `budgets` may contain only positive numeric values for the default budget categories. `model_tier_bindings` may contain only portable model-type keys with non-empty strings. Unknown keys WARN; malformed recognised values, including non-table nested values, FAIL.

[Back to contents](#contents)

### 4.4 Model purpose

`fast` is for mechanical or bulk work, `standard` for well-scoped default work, `reasoning` for hard judgement, and `frontier` for long-horizon autonomous work. These are purposes, not provider names. A runtime's concrete effective or default model is evidence owned by its adapter and cannot revise the repository's declared purpose.

Coordination is a purpose of its own. A coordinating thread, as defined in [the `ki-coordination` coordinating-thread standard](../../../work/ki-coordination/references/standards-coordination.md#coordinator-responsiveness), dispatches, decides with the owner and reports under its counted turn budget, so it should run on `fast`, or `standard` where `fast` is too weak to follow that contract reliably, at low reasoning effort. When the budget cannot be kept on the chosen model, escalate the model one step rather than letting the thread do the work itself. Reserve `reasoning` and `frontier` for the background agents that do the substantive reasoning, analysis and drafting. This is a recommendation for choosing a session's model; it adds no `preferred_model_type` value.

[Back to contents](#contents)

### 4.5 Retrieval

Prefer bounded snippets and targeted line-range reads before whole-file reads, widening only when the question requires more evidence. Exact identifiers use literal retrieval. Explicitly unavailable or insufficient search falls back to grep and targeted reads. Measure returned context with its actual unit: characters and UTF-8 bytes are not tokenizer counts; token estimates remain labelled `~` and never billing figures. Retrieval performance and quality need measured evidence rather than assumed savings. Route search-surface design to `ki-repo-mcp` and `ki-repo-kb`.

[Back to contents](#contents)

### 4.6 Ownership

The tokenomics report names cost and attribution; it does not silently edit another owner’s artifact. Route MCP-server design to `ki-repo-mcp`, installed-skill description quality to `ki-skills`, and runtime instruction, settings, memory, compaction, or tool evidence to the matching runtime adapter. Runtime adapters are separate capabilities, not compatibility fallbacks.

[Back to contents](#contents)
