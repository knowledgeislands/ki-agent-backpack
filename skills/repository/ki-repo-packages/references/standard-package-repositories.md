---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:05:00Z
ki-status: in force
---

# Package repository standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 How it differs from a tool repository](#41-how-it-differs-from-a-tool-repository)
  - [4.2 Layout](#42-layout)
  - [4.3 Several packages](#43-several-packages)
  - [4.4 The Storybook](#44-the-storybook)
  - [4.5 The custom elements manifest](#45-the-custom-elements-manifest)
  - [4.6 The vendoring contract](#46-the-vendoring-contract)
  - [4.7 The sync paragraph](#47-the-sync-paragraph)
  - [4.8 Consumers](#48-consumers)
  - [4.9 Versions and releases](#49-versions-and-releases)
  - [4.10 Changing the package](#410-changing-the-package)
  - [4.11 Generic units](#411-generic-units)
  - [4.12 Code form and the engineering standard](#412-code-form-and-the-engineering-standard)
  - [4.13 Declaration](#413-declaration)

## 1. Introduction

A **package repository** is the canonical source of one or more source trees that other repositories copy whole into themselves and build from: they **vendor** them. It ships no binary, installer, formula or registry package, and no consumer's build ever fetches it. [`packages-stoa`](https://github.com/knowledgeislands/packages-stoa), the source of the Stoa units the Knowledge Islands sites share, is the reference repository. A package of custom elements that any page uses by its tag, as Stoa's `<stoa-header>` and `<stoa-command-bar>` are, is a **web component library**: `ki-design-system` owns how a component library is designed, and this standard how it is packaged and shared. The [generated rubric](rubric.md) holds the checkable criteria and [the sources](sources.md) the evidence. While [the migration overlay](standards-package-repositories-migration.md) exists, it lists the temporary adjustments to this final-state standard.

[Back to contents](#contents)

## 2. Scope

`packages-*` repositories: the canonical source of source trees that other repositories vendor.

### 2.1 In scope

- How a package repository differs from a tool repository, its layout, and several packages in one repository.
- The Storybook, the custom elements manifest, the vendoring contract and the sync paragraph.
- Consumers, versions and releases, changing the package, generic units and code form.
- The `[skills.ki-repo-packages]` declaration.

[Back to contents](#contents)

### 2.2 Out of scope

- How a component library is designed: `ki-design-system`.
- When to release: the release-on-demand policy `ki-repo-tools` owns.
- The toolchain, scripts and tests: `ki-engineering`.
- The general Project baseline and commit gate: `ki-repo-project`; the universal files: `ki-repo`.
- Temporary adjustments while repositories migrate: [the migration overlay](standards-package-repositories-migration.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Package repository** | The canonical source of one or more source trees that other repositories copy whole into themselves and build from. **Standard:** this one, [1](#1-introduction) |
| **Vendor** | To copy a package whole into a consumer and pin it with a lock file, so that no consumer's build fetches it. **Standard:** this one, [4.6](#46-the-vendoring-contract) |
| **Web component library** | A package of custom elements that any page uses by its tag. **Standard:** this one, [1](#1-introduction) |
| **Consumer** | Any repository on a Rig host's local estate that holds the package's lock file. **Standard:** this one, [4.8](#48-consumers) |
| **Sync paragraph** | The paragraph for each vendored package that every consumer carries word for word in its `AGENTS.md`. **Standard:** this one, [4.7](#47-the-sync-paragraph) |

[Back to contents](#contents)

## 4. Rules

How the shape differs from a tool repository, its layout and parts, the vendoring contract, releases and changes, and the declaration.

### 4.1 How it differs from a tool repository

A `tools-*` repository under `ki-repo-tools` ships one command that users install. A package repository ships a tree that other repositories own a copy of, so its contract runs both ways: what the package must offer its consumers, and what each consumer must keep. The table sets the two side by side.

| Aspect | Tool repository | Package repository |
| --- | --- | --- |
| What ships | One command under `bin/`, an installer, a Homebrew formula | One or more source trees, `packages/<package>/`, each copied whole into the consumers that take it and pinned by a lock file |
| Layout | One tool at the root | Workspaces: the vendored packages, a Storybook app, and any repository-only checks |
| Version | The tool's own version | The vendored packages' version locations, one version for all; the root is never released |
| Release | Tag, build artefacts, update the formula | Bump the version locations, add a changelog section, tag; no notice is sent, and each consumer finds the release with its own `drift` |
| Consumers | Installed by users | Repositories that keep a locked copy, found by scanning the local estate |

[Back to contents](#contents)

### 4.2 Layout

```text
packages-<name>/
├── packages/
│   ├── <package>/          # a vendored tree: the units, their styles, tests, the vendoring tools and the unit manifest
│   ├── <package>-<layer>/  # optional further vendored trees, one per layer, such as the tokens alone
│   └── <check>/            # optional repository-only workspaces, such as a boundary proof; never vendored
├── apps/
│   └── storybook/          # every unit on its own with editable inputs, built to static files
├── CHANGELOG.md            # one section per release, breaking changes marked
├── AGENTS.md               # the change and release rules and each package's sync paragraph
├── package.json            # private workspace root, never released
└── .ki.toml                # [skills.ki-repo-packages] package = "<package>", or packages = [...]
```

Each vendored folder holds exactly what a consumer copies: nothing outside it reaches a consumer, and nothing inside it may depend on a path outside it. Its own `package.json` carries the release version. A unit manifest beside it, such as Stoa's `units.json5`, lists the units and carries the same version where the package keeps one.

[Back to contents](#contents)

### 4.3 Several packages

A package repository may hold several vendored packages, one per layer, where consumers need different layers: a public site may take only the tokens, the glyph sprite and the symbols, while an application takes the components too. Each is copied and locked on its own, with its own `<package>-lock.json` and the same `verify`, `drift`, `sync` and `defer`, so a consumer takes only the layers it uses. A package may rely on another layer only where its consumers also vendor that layer, never by a path outside its own folder.

The packages release together, at one version, from one changelog and one tag, so a consumer that takes several layers can always lock them at the same release.

[Back to contents](#contents)

### 4.4 The Storybook

The Storybook, at `apps/storybook/`, shows each unit alone with inputs anyone can edit, and logs its events and state; every unit has one story there. [Storybook](https://storybook.js.org/) is the tool: it renders web components directly, and its static build publishes from any folder, as Fluent UI's `apps/public-docsite-v9` does. The app's own `build` script writes the static site, so it can be published or opened without a server; the repository's `self:storybook` runs it while a unit is being changed.

A repository that still has the earlier `apps/workbench/`, a hand-made page with no build, moves its stories to the Storybook and retires it.

[Back to contents](#contents)

### 4.5 The custom elements manifest

Each package of web components publishes its manifest: `custom-elements.json` inside the vendored folder, generated from the source by the [Custom Elements Manifest analyser](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/) and named by `customElements` in the package's `package.json`, as Spectrum Web Components and Shoelace do. The manifest lists each element's tag, attributes, properties, events, slots and custom properties. The Storybook builds its controls and documentation from it, and any site may read it, as Shoelace's and Red Hat's Eleventy sites do, so no element is described twice by hand. The manifest is regenerated whenever an element's interface changes, and a check fails when the committed manifest differs from a fresh one.

[Back to contents](#contents)

### 4.6 The vendoring contract

A consumer copies each package it takes, `packages/<package>/`, whole and records the release in a lock file at its root, `<package>-lock.json`, with a SHA-256 hash of the copied tree. The vendoring tools ship inside the vendored tree, so every consumer runs the same version of them, and each consumer exposes them as package scripts named `self:<package>:<verb>`:

- `verify` fails the consumer's build on any local edit to the vendored copy.
- `drift` shows what upstream has changed since the locked release.
- `sync` re-vendors a release and rewrites the lock.
- `defer` declines a release, recording the release, a reason and, where the consumer's main line is the subject, its commit, in the lock.

A change the consumer needs is made upstream first and then re-vendored; the vendored copy is never edited in place.

[Back to contents](#contents)

### 4.7 The sync paragraph

The package repository's `AGENTS.md` publishes one paragraph for each vendored package, as a block quotation under its own heading, that every consumer of that package carries word for word in its `AGENTS.md`. It names the vendored path and the lock, forbids local edits, routes changes upstream, and names `verify`, `drift`, `sync` and `defer`. Changing it is a release: consumers take the new wording when they next re-vendor.

[Back to contents](#contents)

### 4.8 Consumers

The package repository keeps no list of its consumers. Kris set this on 1 November 2026: "There should be no reference out of Knowledge Islands to other territories", and where the package needs to know its consumers, "it can look for patterns that it knows about that would identify that it's been used. It shouldn't have a finite list of them". A consumer is any repository on a Rig host's local estate that holds the package's lock file; the lock gives its release and any deferral.

[Back to contents](#contents)

### 4.9 Versions and releases

When to release is decided by the release-on-demand policy `ki-repo-tools` owns: hold by default, release when something needs it, and never as a side effect of delivering work. A change to a vendored package that a consumer would notice is a release; a change outside them, to the Storybook, the checks or the repository's own files, is not, and a behaviour-neutral change to the vendored tree still changes every consumer's lock hash at the next re-vendor, so it waits for a release that needs it.

A release:

1. bumps the version in each `packages/<package>/package.json` and in each unit manifest that carries one, all of them always agreeing; the root `package.json` keeps its own unreleased version;
2. adds a `CHANGELOG.md` section for the version, marking breaking changes;
3. tags `v<version>`.

A release sends no notice. Each consumer finds a new release with its own `drift`, then takes it with `sync` or sets it aside with `defer` and a reason; its changelog says what a consumer must change, and each consumer judges that for itself, as `packages-stoa`'s ADR-STOA-057 and `packages-tessera`'s `AGENTS.md` set. A consumer whose deferral is older than two releases, found in its lock when the estate is scanned, becomes a query to the owner. The release is published by the push of its tag; nothing is built or uploaded.

[Back to contents](#contents)

### 4.10 Changing the package

Every change to a unit comes with its tests in the vendored tree and a look in the Storybook; a new unit gets a story, and a change to a web component's interface regenerates its manifest. The repository's `AGENTS.md` states this change rule and the release rule above, so an agent working in the repository meets both before it changes anything.

[Back to contents](#contents)

### 4.11 Generic units

The units stay generic. Anything that one consumer or one organisation needs reaches a unit only through configuration, a slot, a namespaced custom property or the consumer's own adapter, never as a constant inside the unit. No consumer, site or organisation name appears anywhere in a vendored tree.

[Back to contents](#contents)

### 4.12 Code form and the engineering standard

A package repository has a `package.json` and declares `ki-engineering`, which governs its toolchain, scripts and tests. Where the package is plain JavaScript, `ki-engineering`'s intent applies rather than its TypeScript letter:

- Units, tests and the vendoring tools may stay plain ES modules typed with JSDoc and checked by `tsc --checkJs`. Each workspace `tsconfig.json` sets `allowJs` and `checkJs` and keeps the house compiler invariants. Tool configurations whose names the convention fixes, such as `commitlint.config.ts` and `.dependency-cruiser.ts`, are TypeScript, and the root `tsconfig.json` checks them.
- The package declares `"type": "module"`, so modules use `.js`, never `.mjs`.
- Each vendored `tsconfig.json` stands alone and never `extends` another configuration: a consumer vendors that folder, and an `extends` would resolve against the consumer's root.
- The module-boundary proof is a test run by the workspace test runner, its rules drawn from the repository's own boundaries, such as "no runtime dependency".
- Repository scripts follow the house script names: `test`, `self:typecheck`, `self:lint` and `self:storybook`. `self:<package>:*` belongs to consumers' vendoring tools.
- The Storybook workspace has its own `build`, which writes the static site; `ki-engineering`'s workspace lifecycle covers it.

[Back to contents](#contents)

### 4.13 Declaration

A package repository declares `repo_type = "project"`, `primary_shape = "ki-repo-project"`, and this skill as an overlay:

```toml
[skills.ki-repo-packages]
package = "stoa"
```

`package` names the folder under `packages/` that consumers vendor. A repository with several declares `packages` instead, a list of folders, such as `packages = ["tessera", "tessera-tokens"]`. One of the two is required, never both, and every other key is unknown and warned. The overlay adds the package delta to the general Project baseline; it neither selects nor replaces the primary shape, so the general Project commit gate and `ki-repo`'s universal files still apply.

[Back to contents](#contents)
