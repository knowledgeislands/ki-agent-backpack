---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:05:00Z
ki-status: in force
---

# Homebrew tap standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 What a tap is](#41-what-a-tap-is)
  - [4.2 The name is fixed by Homebrew](#42-the-name-is-fixed-by-homebrew)
  - [4.3 Repo layout](#43-repo-layout)
  - [4.4 Formula shape](#44-formula-shape)
  - [4.5 Sourcing — versioned tarball, never HEAD](#45-sourcing--versioned-tarball-never-head)
  - [4.6 The tap README](#46-the-tap-readme)
  - [4.7 CI — brew test-bot](#47-ci--brew-test-bot)
  - [4.8 Commit gate](#48-commit-gate)
  - [4.9 Config marker](#49-config-marker)
  - [4.10 What `brew` checks that this skill does not](#410-what-brew-checks-that-this-skill-does-not)

## 1. Introduction

The quotable standard behind the [skills.ki-repo-homebrew-tap](../SKILL.md) skill and its [Audit Rubric](rubric.md). This skill **wraps Homebrew's external standard** — the [Formula Cookbook][cookbook], `brew audit`, and `brew style` — rather than inventing a house one. What this document adds on top of Homebrew is only the **tap-shape** conventions: the layout every Knowledge Islands tap shares and the sourcing rule. Where a rule is Homebrew's own, it is labelled _(spec)_; where it is a KI tap-shape convention, _(shape)_. The tracked upstream sources are in [sources.md](sources.md).

[Back to contents](#contents)

## 2. Scope

The static shape of a Knowledge Islands Homebrew tap, beyond what a single valid formula needs.

### 2.1 In scope

- What makes a repository a tap, and the name Homebrew fixes.
- The tap's layout, formula shape and sourcing rule.
- The tap README's formulae table, optional CI, commit gate and config marker.
- What static audit leaves to `brew` itself.

[Back to contents](#contents)

### 2.2 Out of scope

- The deep formula rules `brew audit` and `brew style` own.
- The README, LICENSE, `.gitignore`, GitHub settings and whether a committed hook exists: `ki-repo`.
- Generic README composition: `ki-authoring`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Tap** | A Git repository of Homebrew formulae, carrying a `Formula/` directory with one or more `*.rb` files. **Standard:** this one, [4.1](#41-what-a-tap-is) |
| **Formula** | A Ruby class Homebrew evaluates to install one tool. **Standard:** this one, [4.4](#44-formula-shape) |
| **(spec)** | A label on a rule that is Homebrew's own. **Standard:** this one, [1](#1-introduction) |
| **(shape)** | A label on a rule that is a Knowledge Islands tap-shape convention. **Standard:** this one, [1](#1-introduction) |
| **Config marker** | The keyless `[skills.ki-repo-homebrew-tap]` table in `.ki.toml`. **Standard:** this one, [4.9](#49-config-marker) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 What a tap is

A Homebrew **tap** is a git repository of formulae. A repo becomes a tap by carrying a `Formula/` directory with one or more `*.rb` formula files _(spec)_. Knowledge Islands keeps a single tap, `homebrew-tap`, that distributes the `tools-*` command-line tools; each tool gets one formula _(shape)_. An applicable tap with no `Formula/*.rb` fails rather than warns.

Checker applicability is declaration or structure: `[skills.ki-repo-homebrew-tap]` in `.ki.toml` or a root `Formula/` directory activates the complete audit. With neither, the checker reports one `NA` and stops. A declared repository with no `Formula/`, and a structurally marked but empty `Formula/`, remain applicable failures; an undeclared repository with `Formula/` remains applicable and surfaces the missing marker.

[Back to contents](#contents)

### 4.2 The name is fixed by Homebrew

The repository must be named `homebrew-<x>` _(spec)_. Homebrew strips the `homebrew-` prefix so that `brew tap <owner>/<x>` and `brew install <owner>/<x>/<formula>` resolve to it — `knowledgeislands/tap` is the `homebrew-tap` repo, and no explicit `brew tap` is needed before an install. Because the name is an external constraint, this skill governs the tap's **shape, not its name**; do not treat the `homebrew-` prefix as something to conform.

[Back to contents](#contents)

### 4.3 Repo layout

```text
homebrew-tap/
├── Formula/
│   └── <tool>.rb           # one formula per tool; filename = formula name (shape)
├── README.md               # Standard Readme shape, with a "## Formulae" table (shape)
├── .github/workflows/      # OPTIONAL brew test-bot (shape)
├── LICENSE                 # ki-repo's
└── .ki.toml          # [skills.ki-repo] + [skills.ki-repo-homebrew-tap] (shape)
```

The README, LICENSE, `.gitignore`, and GitHub settings are **`ki-repo`'s**, not this skill's — this skill checks only the tap-specific delta (the `Formula/` dir, the formula shape, the formulae table, the sourcing rule).

[Back to contents](#contents)

### 4.4 Formula shape

A formula is a Ruby class Homebrew evaluates. The required parts _(spec — Homebrew rejects a formula missing them)_:

| Part          | Rule                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `class`       | `class <CamelCase> < Formula`; the class name is the formula name camelised.                                              |
| `desc`        | One-line description, **≤ 80 chars**, and **not** starting with "A ", "An ", or "The ".                                   |
| `homepage`    | The tool's canonical URL (its source repo).                                                                               |
| `url`         | A versioned release tarball (see below).                                                                                  |
| `sha256`      | The SHA-256 of that exact tarball.                                                                                        |
| `license`     | An SPDX identifier (e.g. `"MIT"`).                                                                                        |
| `def install` | Installs the built artifact(s), e.g. `bin.install "bin/mgit"`.                                                            |
| `test do`     | Exercises the **installed** binary doing its basic job in `testpath`, with an assertion on the result, not a stub `true`. |

A good `test do` runs a real command on a small input, as Homebrew's Formula Cookbook asks: for `mgit`, initialise a repository in `testpath` and assert that `mgit` lists it. The Cookbook calls a `--version` or `--help` assertion a bad test, though better than none, so such a test is the floor, kept only where the tool has no basic operation it can run offline, and `TAP-J2` reports it as weak.

The `desc` length and article rules are `brew style`'s; `TAP-4` mirrors them so they are caught without invoking `brew`. Everything finer (interpolation style, `bin`/`libexec` idioms, dependency declarations) is left to explicit `brew audit`/`brew style` checks.

[Back to contents](#contents)

### 4.5 Sourcing — versioned tarball, never HEAD

`url` MUST point at a **tagged-release tarball** — `https://github.com/<owner>/<repo>/archive/refs/tags/vX.Y.Z.tar.gz` or a `/releases/download/…` asset — paired with the `sha256` of that tarball _(shape, reinforcing Homebrew's stable-formula guidance)_. A formula that installs from a branch or `head "…"` alone is unreproducible; a stable formula pins a version. The version in the tag drives `#{version}` in the formula, so the `test do` block's `--version` assertion stays honest.

[Back to contents](#contents)

### 4.6 The tap README

A tap README is read by someone deciding whether and how to install a tool, so it follows [Standard Readme][standardreadme] _(shape, advisory)_: a title, a one-line description, then `Install` and `Usage`. `Install` carries `brew install <owner>/<x>/<formula>` and the fact that naming the tap in the install argument taps it implicitly; a `Dependencies` subsection names Homebrew itself, and an `Updating` subsection gives `brew update` and `brew upgrade`. A `Contributing` section matters more here than in most repos because packaging bugs and tool bugs belong in different repositories, and the README is where a reader learns which is which.

The `## Formulae` table is the tap's own extra section inside that shape. It lists **every** formula, its description, and a link to its source `tools-*` repo _(shape)_:

```markdown
| Formula | Description                         | Source                                        |
| ------- | ----------------------------------- | --------------------------------------------- |
| `mgit`  | Run commands across many git repos. | [tools-mgit](https://github.com/…/tools-mgit) |
```

Every `Formula/*.rb` must appear in this table (`TAP-6`); a formula the table omits is an undiscoverable install. That table is the only mechanical README requirement this skill carries. The Standard Readme section set above is advisory — guidance for EDUCATE and CONFORM and for the `TAP-J5` judgment review, never a hosted finding — because generic README composition is `ki-authoring`'s and README presence is `ki-repo`'s.

[Back to contents](#contents)

### 4.7 CI — brew test-bot

A tap MAY carry a `.github/workflows/` job running [`brew test-bot`][testbot] — Homebrew's own CI action that runs `brew audit`, `brew style`, and `brew install` on each changed formula per PR _(shape, OPTIONAL)_. It can supply separately captured package-manager evidence; hosted static audit neither executes it nor treats its absence as a structural failure.

[Back to contents](#contents)

### 4.8 Commit gate

`ki-repo` owns whether a committed hook exists and compares it byte for byte with the canonical text ([ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md)). A tap's canonical hooks, with and without a `package.json`, are published as worked examples under [`assets/githooks/`](../assets/githooks/); copy them exactly _(shape)_. `GATE-1` checks what the committed `pre-commit` runs: `ruby -wc` over the staged Ruby files, which checks syntax with warnings and never rewrites, and otherwise only check-only staged lints, never `ki repo audit`, `ki repo conform`, `ki repo repair`, `--fix` or `--write`; the tap audit runs in CI, as Kris chose COMMIT-VS-CI a) on 26 October 2026. It is not applicable without a committed hook. `brew style`, `brew audit` and `brew test-bot` stay out of the hook, which stays fast and offline.

[Back to contents](#contents)

### 4.9 Config marker

The tap opts into governance with a keyless `[skills.ki-repo-homebrew-tap]` table in `.ki.toml`, alongside `[skills.ki-repo]` _(shape)_. It is **validate-down**: presence is the whole config, any key under it is unknown and WARNed (the tap's shape is fixed by Homebrew, so there is nothing to tune). Run `ki repo conform --skill ki-repo-homebrew-tap <tap-path>` to add the marker safely after `ki-repo` has created the shared config file.

[Back to contents](#contents)

### 4.10 What `brew` checks that this skill does not

`TAP-7` never runs `brew style` or `brew audit` from hosted audit. Those package-manager commands own the deep formula rules—dependency correctness, `bin`/`libexec` conventions, deprecated DSL, mirror/livecheck hygiene, and RuboCop style—and require separately authorized isolated diagnostics against the intended tap. Static audit reports only parsed source shape: that the tap has a `Formula/` directory, that a versioned tarball rather than HEAD is used, that the README lists the formula, and that the `[skills.ki-repo-homebrew-tap]` marker is present. Missing package-manager evidence is unavailable evidence, not a structural PASS.

[cookbook]: https://docs.brew.sh/Formula-Cookbook
[standardreadme]: https://github.com/RichardLitt/standard-readme
[testbot]: https://docs.brew.sh/BrewTestBot

[Back to contents](#contents)
