---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T16:25:30Z
ki-refresh: external-spec · quarterly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 In-house tool repositories](#221-in-house-tool-repositories)
    - [2.2.2 Tap README](#222-tap-readme)
- [3. Last review](#3-last-review)

## 1. Introduction

The authoritative and in-house sources behind the [tool-repository standard](standard-tool-repositories.md), the [command-line conventions](standard-cli-conventions.md), the [change-readiness](standard-change-readiness.md) and [release-readiness](standard-release-readiness.md) checklists, the [shared-code standard](standard-tool-shared-code.md), the [Homebrew tap standard](standard-homebrew-tap.md), and the [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, and diffs it against the standard plus the structured catalogue under `scripts/rubric/items/`. It then **bumps the `Last reviewed` dates** and refreshes the `## Last review` block below; what changed belongs in the commit, not a changelog here.

[Back to contents](#contents)

## 2. Outside sources

Two layers feed the standard: the **external specs** (shellcheck, bats, keep-a-changelog, semver, XDG) that a conformant tool repo builds on, and the **in-house tool repos** that supply implementation evidence for shared practice. A finding is only "spec-driven" if it traces to an external spec; everything else is house style layered on top and should be labelled as such.

### 2.1 Authoritative

The external specifications a conformant tool repository builds on.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SHELLCHECK — [ShellCheck][shellcheck] | Shell-tool lint gate (SHELL-LINT) — clean in CI | 2026-11-23 |
| BATS — [bats-core][bats] | Shell-tool test framework (SHELL-TEST) — `*.bats` + CI run; fatal `[[ ]]` and `!` assertions (SHELL-FATAL) | 2026-11-23 |
| CHANGELOG — [Keep a Changelog][keepachangelog] | Optional chronological changelog shape | 2026-11-23 |
| SEMVER — [Semantic Versioning 2.0.0][semver] | `vX.Y.Z` version marker + release tags | 2026-11-23 |
| XDG — [XDG Base Directory Specification][xdg] | Where the tool writes config/state/cache; the [command-line conventions](standard-cli-conventions.md#47-configuration-state-and-cache) directory table | 2026-11-23 |
| POSIX-UTIL — [POSIX.1-2024 Utility Conventions][posix-util] | [Command-line](standard-cli-conventions.md) option syntax, `--`, `-` as standard input | 2026-11-23 |
| POSIX-FIND — [POSIX `find`][posix-find] and the `cp`, `chown`, `cd` pages | `-H`, `-L` and `-P` symbolic-link options | 2026-11-23 |
| GNU-CLI — [GNU Coding Standards: Command-Line Interfaces][gnu-cli] | Long options, `--help`, `--version`, the option table | 2026-11-23 |
| BASH-EXIT — [Bash Reference Manual: Exit Status][bash-exit] | 2 for usage, 126, 127 and 128 + n | 2026-11-23 |
| CLIG — [Command Line Interface Guidelines][clig] | Streams, prompts, colour, signals, secrets, configuration precedence | 2026-11-23 |
| NO-COLOR — [NO_COLOR][no-color] | Disabling colour by environment | 2026-11-23 |
| COOKBOOK — [Formula Cookbook][cookbook] | The required formula parts (`class < Formula`, `desc`, `homepage`, `url`, `sha256`, `license`, `install`, `test do`) and their idioms, the source of `TAP-2` and `TAP-3` | 2026-11-23 |
| AUDIT — [`brew audit` command reference][audit] | What `brew audit --strict` enforces: separate package-manager evidence, never run by static `TAP-7` | 2026-11-23 |
| STYLE — [`brew style` / rubocop formula cops][style] | The `desc` rules (≤ 80 characters, no leading "A", "An" or "The") and the formula cops, the source of `TAP-4`, mirrored without running `brew` | 2026-11-23 |
| ACCEPT — [Acceptable Formulae][acceptable] | Whether a tool is eligible for a formula (notability, stable release, versioned source), background for the sourcing rule | 2026-11-23 |
| TAP — [Taps (third-party repositories)][taps] | How a tap is named (`homebrew-<x>`) and resolved by `brew tap` and `brew install`, the source of the fixed-name constraint | 2026-11-23 |
| TESTBOT — [BrewTestBot][testbot] | The `brew test-bot` CI a tap may run, the backstop when a local audit has no `brew` | 2026-11-23 |

A `TAP` finding is spec-driven only if it traces to one of the six Homebrew rows; everything else in the [Homebrew tap standard](standard-homebrew-tap.md) is tap-shape convention and is labelled so, never presented as a Homebrew requirement.

[Back to contents](#contents)

### 2.2 Advisory

The house's own tool repositories, which inform house style.

#### 2.2.1 In-house tool repositories

The tool repositories under `knowledgeislands/` provide evidence for house style. When an implementation and the standard diverge, decide which is right and reconcile; keep shared policy in the skill and tool-specific procedures in the local guides.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| MGIT — `tools-mgit` | Bash/Git boundary, installer overrides, workspace/repository command grouping; fatal Bats assertions under Bash 3.2 (`00ef0de`) | 2026-11-23 |
| KI — `tools-ki` | Typed command host, diagnostics, completion, signed installer, manual distribution | 2026-11-23 |
| RIG — `tools-rig` | Authored assembly, terminal ownership, workstation isolation, installer verification | 2026-11-23 |
| TECHNE — `tools-techne` | Typed operator boundary, compiled archives, remote-environment hold | 2026-11-23 |
| ALMANAC — `tools-git-almanac` | Read-only Git inspection, reporting boundary, Node artifact delivery | 2026-11-23 |

[Back to contents](#contents)

#### 2.2.2 Tap README

Non-normative.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| README — [Standard Readme][standardreadme] | The section set a tap README follows (title, description, Install, Usage, Contributing, License) with the `## Formulae` table as an extra section: guidance for EDUCATE, CONFORM and `TAP-J5` only, never a mechanical check, since README composition is `ki-authoring`'s and README presence `ki-repo`'s | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, read all seventeen outside sources and the five in-house tool repositories, and no rule changed. ShellCheck 0.11.0, bats-core 1.14.0, Keep a Changelog 1.1.0, Semantic Versioning 2.0.0, XDG 0.8, the POSIX utility conventions and `find`, clig.dev and `NO_COLOR` still say what the standards follow; GNU-CLI and BASH-EXIT were read from source mirrors, unchanged, because gnu.org refused automated requests. Homebrew is at 7.0.15: the Cookbook keeps the same required parts, the `desc` cop still allows 80 characters with no leading article, and `brew audit --new` implies `--strict` and `--online`. On 24 November 2026 the standard came to allow CI and release on manual dispatch only, which settles the watch on the five tool repositories' manual-dispatch CI, so that item is closed.

**Watching:**

- **Tap trust.** Since Homebrew 6.0.0 third-party taps are untrusted by default; the tap README rule's wording may need to say so.
- **gnu.org refuses automated fetches.** GNU-CLI and BASH-EXIT are reviewed through source mirrors (gnulib, the Bash mirror); re-read the published pages once they can be reached.
- **`tools-mgit`'s `Unreleased` section** and **`tools-rig`'s bats 1.11.1 pin**, both findings for those repositories rather than standard changes.
- **Homebrew is a live target.** The Cookbook and the `brew audit` and `brew style` cops change without a versioned specification release; re-diff the required-fields list and the `desc` cops each cycle.
- **The `desc` mirror.** The tap rubric copies the 80-character and no-leading-article rule from `brew style` so the check runs without `brew`; if the cop changes upstream, update `scripts/rubric/items/tap.ts`.
- **No `head` or `bottle` guidance yet.** The tap standard covers stable versioned-tarball formulae only; extend it if a KI tool ever ships bottles or a `head` spec.
- **Standard Readme advisory.** If `ki-authoring` gains its own README convention set, reconcile the tap README entry with it.
- If a second shell-specific concern emerges beyond ShellCheck and bats, reconsider a dedicated `ki-shell` skill.

[Back to contents](#contents)

[shellcheck]: https://www.shellcheck.net/
[bats]: https://bats-core.readthedocs.io/
[keepachangelog]: https://keepachangelog.com/en/1.1.0/
[semver]: https://semver.org/spec/v2.0.0.html
[xdg]: https://specifications.freedesktop.org/basedir/latest/
[posix-util]: https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap12.html
[posix-find]: https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html
[gnu-cli]: https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html
[bash-exit]: https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html
[clig]: https://clig.dev/
[no-color]: https://no-color.org/

[cookbook]: https://docs.brew.sh/Formula-Cookbook

[audit]: https://docs.brew.sh/Manpage#audit-options-formulacask-

[style]: https://docs.brew.sh/Formula-Cookbook#audit-the-formula

[acceptable]: https://docs.brew.sh/Acceptable-Formulae

[taps]: https://docs.brew.sh/Taps

[testbot]: https://docs.brew.sh/BrewTestBot

[standardreadme]: https://github.com/RichardLitt/standard-readme
