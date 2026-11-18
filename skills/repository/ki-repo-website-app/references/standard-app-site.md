---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:46:22Z
ki-status: in force
---

# Knowledge Islands interactive website standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Purpose](#41-purpose)
  - [4.2 Current implementation](#42-current-implementation)
  - [4.3 Static publication](#43-static-publication)
  - [4.4 Application rendered test](#44-application-rendered-test)
  - [4.5 Test pattern matches the file](#45-test-pattern-matches-the-file)

## 1. Introduction

The interactive implementation of the Knowledge Islands website: one browser application, currently React with Vite, built into the `dist/` seam that `ki-repo-website` sets. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

One interactive browser application at the selected site root.

### 2.1 In scope

- When the interactive implementation applies.
- The React and Vite implementation, its entry, scripts and output.
- Static, client-only publication.
- The application's own rendered test and its test include pattern.

[Back to contents](#contents)

### 2.2 Out of scope

- Selecting the site root and the root `ki:site:*` aliases: `ki-repo-website`.
- A page collection generated from Markdown and data: `ki-repo-website-content`.
- The SPA fallback and other hosting settings: the hosting adapter, such as `ki-repo-website-cloudflare`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Interactive implementation** | The website implementation for a single interactive browser application, mutually exclusive with the content implementation. **Standard:** this one, [4.1](#41-purpose) |
| **Application entry** | The `index.html` that loads a `src/main.tsx` or `src/main.jsx` module. **Standard:** this one, [4.2](#42-current-implementation) |
| **SPA fallback** | Serving `index.html` for client-side routes, a setting of the hosting adapter. **Standard:** this one, [4.3](#43-static-publication) |
| **Rendered test** | A test that builds the application's tree, in each form it has, rather than only exercising the modules beneath it. **Standard:** this one, [4.4](#44-application-rendered-test) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part: purpose, implementation, publication and the application's tests.

### 4.1 Purpose

Use this implementation for a single interactive browser application such as a dashboard. It is mutually exclusive with the content implementation.

[Back to contents](#contents)

### 4.2 Current implementation

The application uses React, React DOM, Vite, and the official React Vite plugin. An `index.html` application entry loads a `src/main.tsx` or `src/main.jsx` module. `vite build` emits `dist/`; Vite's default `build.outDir` is already `dist`.

The selected site's package scripts expose `build` using `vite build` and `ki:site:dev` using `vite`. `ki-repo-website` alone selects the root: `apps/site` by default, `.` explicitly for a flat repository, or another safe relative override. `[skills.ki-repo-website-app]` remains keyless. The repository root package exposes the public `ki:site:*` aliases and delegates development to the local `ki:site:dev` key.

Dependencies, Vite configuration, `index.html`, `src/main.*`, scripts, and `dist/` all resolve from that one root. Root-level or sibling manifests and configurations do not satisfy the app contract when another root is selected.

[Back to contents](#contents)

### 4.3 Static publication

The output is a client-only static application. A host serving client-side routes must provide an SPA fallback to `index.html`. That setting belongs to the hosting adapter. Server-side Worker code is not implied by React or Vite.

[Back to contents](#contents)

### 4.4 Application rendered test

An interactive application must be rendered by its own test suite, in whatever forms it has — read-only or editing, populated or empty — rather than only being reasoned about through the modules beneath it. A suite that exercises the model and never builds the tree cannot see faults that exist only once the tree is built: a control drawn inside a layer that takes no pointer events, a helper referenced above the line that declares it, or a hook whose order changes with a prop.

Rendering to static markup is enough and is the cheaper default. `react-dom/server` is already present wherever React is, so it needs no DOM environment and no additional dependency; the component throws either way. Reach for a DOM only when the assertion genuinely needs one, such as measuring layout or dispatching events.

Do not substitute a lint rule for this. A use-before-declaration rule does not fire when the call sits inside a closure, even where that closure is invoked synchronously, so it reports nothing while the application throws on first paint.

[Back to contents](#contents)

### 4.5 Test pattern matches the file

Where the site declares a test include, the pattern must cover the component file extension as well as the module one — `.tsx` alongside `.ts` for a React application, or `.jsx` alongside `.js` for a JavaScript one.

This matters because of how the omission fails. A pattern matching only `.ts` does not error on a `.tsx` test: it silently collects nothing and the suite reports every other test as passing. The signal the reader takes from the green run is exactly the signal that the missing test file removes, so the omission is invisible when it matters most.

[Back to contents](#contents)
