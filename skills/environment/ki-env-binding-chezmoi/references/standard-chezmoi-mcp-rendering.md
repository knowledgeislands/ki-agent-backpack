---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:15:00Z
ki-status: in force
---

# Chezmoi MCP rendering standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 What each layer owns](#41-what-each-layer-owns)
  - [4.2 The render contract](#42-the-render-contract)
  - [4.3 External policy](#43-external-policy)
  - [4.4 Invariants](#44-invariants)

## 1. Introduction

The normative standard behind [the generated rubric](rubric.md); the sources behind it are in [the sources file](sources.md). It governs one thing only: **rendering the canonical MCP single source through chezmoi** so the file-editable surfaces are generated from it rather than maintained by hand.

This is a **governance skill** and a **composition skill** in the sense of `ADR-KI-HARNESS-SKILLS-004`. It composes two siblings and adds a renderer-specific delta; it does not import or re-implement either sibling.

[Back to contents](#contents)

## 2. Scope

Rendering the canonical MCP source through chezmoi.

### 2.1 In scope

- The connection between MCP render data, the `mcp-servers-json` partial, target templates and the reviewed `chezmoi apply` result.
- The two supported data patterns and the evidence the rubric reads.

[Back to contents](#contents)

### 2.2 Out of scope

- The portable MCP source, its client tokens and mcporter comparison: `ki-env-binding`; native vendor surfaces: its runtime adapters.
- Generic chezmoi repository shape, naming, templating, apply and reverse-merge: `ki-repo-dotfiles-chezmoi`.
- Choosing a data pattern, a partial location or target surfaces, and running `chezmoi apply`: the repository's own policy.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Data-merge pattern** | MCP render data held as one YAML input in `.chezmoidata/`, merged into template data by chezmoi. **Standard:** this one, [4.2](#42-the-render-contract) |
| **Managed-source pattern** | A plain, non-templated `mcp-servers.yaml` applied to the canonical XDG path and read from the chezmoi source tree by the render partial. **Standard:** this one, [4.2](#42-the-render-contract) |
| **Render partial** | The sole `.chezmoitemplates/mcp-servers-json` template, which expands client-targeted data into a surface's `mcpServers` representation. **Standard:** this one, [4.2](#42-the-render-contract) |

[Back to contents](#contents)

## 4. Rules

What each layer owns, the render contract, what stays external policy, and the invariants.

### 4.1 What each layer owns

- **`ki-env-binding`** owns the portable MCP source, its client tokens, and mcporter comparison. Runtime adapters own native vendor surface comparison.
- **`ki-repo-dotfiles-chezmoi`** governs generic chezmoi repository shape, naming, templating, apply, and reverse-merge practices. It has no MCP-specific policy.
- **`ki-env-binding-chezmoi`** owns the connection between MCP render data, the `mcp-servers-json` partial, target templates, and the reviewed `chezmoi apply` result.

AUDIT runs the two sibling audits in that order, then this skill's rubric. Findings remain under their owning skill.

[Back to contents](#contents)

### 4.2 The render contract

1. **The source repository is inspectable.** Rubric evidence comes only from a physical repository directory and physical files within it. Symlinked or non-regular evidence is reported and not traversed.
2. **MCP render data is present and valid.** The repository uses one of two supported patterns:
   - **Data-merge pattern:** `.chezmoidata/` contains one MCP YAML input with the portable canonical schema, merged into template data by chezmoi.
   - **Managed-source pattern:** a plain, non-templated `mcp-servers.yaml` is applied to the canonical XDG path and read from the chezmoi source tree by the render partial.
3. **The render partial exists.** The sole `.chezmoitemplates/mcp-servers-json` partial (optionally suffixed `.tmpl`) expands client-targeted data into a surface's `mcpServers` representation.
4. **At least one target is wired.** A physical target `.tmpl` calls the chosen partial by its exact name with `template`, or includes the selected managed source; substrings and comments do not count.
5. **Render, apply, activation, and health remain separate.** `chezmoi diff` is reviewed before `chezmoi apply`, but source structure cannot claim a render, applied target, client activation, or runtime health. Those require separately authorised, secret-safe evidence.

[Back to contents](#contents)

### 4.3 External policy

Both data patterns are valid. Choosing between them, selecting a partial location, deciding which targets to render, and executing `chezmoi apply` are external repository policy. The rubric reports the available evidence and missing links but deliberately proposes no files or commands.

When the data-merge pattern is used, the render must also produce the canonical source consumed by `ki-env-binding`, or the operator must bind that audit to the intended source explicitly. A private `.chezmoidata` input is not itself a second canonical source.

[Back to contents](#contents)

### 4.4 Invariants

- **Composition stays explicit.** Run `ki-repo-dotfiles-chezmoi`, then `ki-env-binding`, then this skill. This rubric checks only the renderer-specific delta.
- **Edits flow through the selected source.** A hand-written rendered surface is drift; CONFORM changes the source or template and then applies chezmoi.
- **External choices remain report-only.** The skill does not infer a data pattern, author a template, choose target surfaces, or launch chezmoi.
- **Renderer scope stays local.** A non-chezmoi setup uses `ki-env-binding` with another renderer and does not install this skill. Do not invent a renderer skill for every vendor/client combination.

[Back to contents](#contents)
