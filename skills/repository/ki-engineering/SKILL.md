---
name: ki-engineering
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: detected
ki-guild: repository
ki-depends-on: []
ki-shared-dependencies: [ki-skills:rubric]
ki-owns: [mise.toml, tsconfig.json, biome.json, knip.json, commitlint.config.ts]
ki-contributes: ['.ki.toml', '.gitignore', package.json, '.githooks/pre-commit', '.githooks/commit-msg']
ki-requires: ['tooling/depcruise/package.json']
description: >
  Audit or conform KI TypeScript/Bun engineering: modularity, reuse, boundary testing, package scripts,
  tsconfig, Biome, and toolchain consistency. Use `ki-repo` for repository configuration, `ki-authoring` for
  documents, and `ki-repo-mcp` for MCP specifics.
argument-hint: 'audit <repo> | conform <repo> | help | educate <repo> | refresh'
---

# Knowledge Islands engineering standard

You are applying the **Knowledge Islands engineering standard**, the shared code design and TypeScript/Bun toolchain every repository carrying a `[skills.ki-engineering]` table builds on. It is the build-and-test twin of `ki-authoring`: that skill owns _how we write_; this one owns _how we structure, build, lint and test_. `ki-skills` owns the rubric framework this skill follows. This file routes; the rules live in [the engineering standard](references/standard-engineering.md) and the checkable items in [the rubric](references/rubric.md).

## Where the rules live

| Concern | Standard |
| --- | --- |
| Scope, the core and capability layers, and how a repository is fully audited beside its artifact skill | [4.1](references/standard-engineering.md#41-scope-and-layers) |
| Code design, reuse and the change-aware consistency review | [4.2](references/standard-engineering.md#42-code-design), [4.3](references/standard-engineering.md#43-change-aware-consistency-review) |
| Flat and monorepo shapes, Turborepo's task graph and `inputs`, and boundary checking (`DESIGN-2`) | [4.4](references/standard-engineering.md#44-repo-shapes--flat-vs-monorepo-core) |
| `package.json`, pinning, the common Git hooks, CI and dependency freshness | [4.5](references/standard-engineering.md#45-packagejson--toolchain-pinning-core) |
| The governed script surface: `ki:`, `self:` and `script_exclusions` | [4.6](references/standard-engineering.md#46-the-governed-script-surface-core) |
| Bun and Node, `tsconfig.json`, Biome and Knip | [4.7](references/standard-engineering.md#47-bun-vs-node-core) to [4.9](references/standard-engineering.md#49-biomejson--rumdl-config-core) |
| Capability conditionals: tests, compiled build and CLI, `.env` and XDG | [4.10](references/standard-engineering.md#410-testing-capability-the-repo-ships-tests) to [4.12](references/standard-engineering.md#412-env-discipline-capability-the-repo-reads-env-config) |
| The `[skills.ki-engineering]` table | [4.13](references/standard-engineering.md#413-kitoml--skillski-engineering-core) |

`DESIGN-2` selects the boundary ruleset conditionally, `.dependency-cruiser.ts` when present and otherwise `.dependency-cruiser.mjs`, so neither is an unconditional `ki-requires` entry. Rules meaningful for one artifact type live in that artifact's skill, such as `ki-repo-mcp`.

## Operating modes

The installed CLI exposes the repository modes directly: `ki repo educate`, `ki repo audit` and `ki repo conform`. It resolves the repository's declared skills, imports each canonical `scripts/rubric/items/index.ts` catalogue, and owns execution, reporting and transactional repairs. REFRESH stays a maintainer operation over this skill's own sources.

### Mode HELP — describe the engineering boundary

Explain the common TypeScript/Bun toolchain, the direct `ki repo` workflow, the modes, and the off-ramps below, then stop without inspecting or changing a repository.

### Mode AUDIT — check a repo's common toolchain

1. Run `ki repo audit --skill ki-engineering` for the focused mechanical pass, or `ki repo audit` for the repository's complete declared set. The host loads [the item catalogue](scripts/rubric/items/index.ts) and reports findings with rubric codes. `DESIGN-2` executes its boundary assertions in a disposable source copy; no product source is mutated and no architecture is rewritten.
2. **Apply the judgment items** in [the rubric](references/rubric.md). Treat malformed, foreign or unresolved review trailers as unavailable evidence, never as a signal to infer a boundary.
3. Ensure the artifact skill is declared in `.ki.toml`; a repository is clean only when every applicable layer passes. Report by location, criterion and fix, FAIL first.

### Mode CONFORM — bring a repo's toolchain into line

1. Run **AUDIT** first, so you change against a known gap list.
2. Run `ki repo conform --skill ki-engineering`; the host applies the catalogue's bounded writes and commands transactionally. Resolve judgment-only gaps by hand, copying repo-specific shapes from the closest healthy sibling rather than inventing.
3. Re-run `ki repo audit`; the full declared set must be clean.

### Mode EDUCATE — scaffold a new TS/Bun repo's toolchain

Run `ki repo educate --skill ki-engineering` to inspect the criterion catalogue without executing checks or writing. For a new TypeScript/Bun repository, declare `[skills.ki-engineering]`, run focused CONFORM for safe scaffolding, make the repo-shaped decisions for compiled build and test configuration, then run the complete repository AUDIT.

### Mode REFRESH — re-anchor the toolchain pins to their sources

**Precondition:** REFRESH edits this skill's own canonical files, which exist only in `ki-agent-backpack`. Invoked from an installed copy, it stops here and names the backpack as where to run it — or, for a pattern recurring across bases, routes it through `ki-repo-kb`'s IMPROVE mode instead.

The standard pins volatile versions (Bun, Node, Biome, TypeScript, Vitest, Syncpack, rumdl, dependency-cruiser). Run on its declared cadence (see `references/sources.md`), or when asked "are the engineering standards current". Derive the active repository set from the current configured collection; it is evidence, not a count.

1. **Read [the source list](references/sources.md)** — each pin with its `last reviewed` date.
2. **Re-fetch each** (WebFetch / WebSearch) and diff against the standard, rubric, and [item catalogue](scripts/rubric/items/index.ts): a bumped Bun or Biome line, a TypeScript option deprecation, a changed default. Then check every row of the tool compatibility constraints: whether each consumer still supports the pin it consumes, whether a pin bump under review would break one, and whether a recorded workaround's retirement condition has now been met. Add a row whenever a consumer lags a pin.
3. **Propose a diff**; confirm before writing.
4. **Update [the source list](references/sources.md)** — bump each `last reviewed` date and the `## Last review` block. What changed goes in the commit.

## Boundaries

Reciprocal off-ramps, each naming this skill back for the engineering layer:

- **GitHub settings, security, the universal files and the `.ki.toml` contract** → `ki-repo`, including whether the commit hooks exist and match their canonical text; this skill contributes its own table and the hooks' package block.
- **`.rumdl.toml`, `.editorconfig`, and Markdown and TOML style** → `ki-authoring`, which owns both files wholly; engineering owns the declared tool dependencies, authoring their Markdown execution.
- **The commit-message vocabulary** → `ki-git`.
- **Artifact-specific code and deltas**, such as the MCP `src/` layout, tool naming, access gate and coverage-exclude list → `ki-repo-mcp` and the other artifact skills, built on this common layer.
