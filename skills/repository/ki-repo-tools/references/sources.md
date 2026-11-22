---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T21:58:53Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The authoritative and in-house sources behind the [tool-repository standard](standard-tool-repositories.md), the [command-line conventions](standard-cli-conventions.md), the [change-readiness](standard-change-readiness.md) and [release-readiness](standard-release-readiness.md) checklists, the [shared-code standard](standard-tool-shared-code.md), the [Homebrew tap standard](standard-homebrew-tap.md), and the [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, and diffs it against the standard plus the structured catalogue under `scripts/rubric/items/`. It then **bumps the `Last reviewed` dates** and refreshes the `## Last review` block below; what changed belongs in the commit, not a changelog here.

[Back to contents](#contents)

## 2. Outside sources

Two layers feed the standard: the **external specs** (shellcheck, bats, keep-a-changelog, semver, XDG) that a conformant tool repo builds on, and the **in-house tool repos** that supply implementation evidence for shared practice. A finding is only "spec-driven" if it traces to an external spec; everything else is house style layered on top and should be labelled as such.

### 2.1 Authoritative

The external specifications a conformant tool repository builds on.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| SHELLCHECK — [ShellCheck][shellcheck] | Shell-tool lint gate (SHELL-LINT) — clean in CI | 2026-11-15 |
| BATS — [bats-core][bats] | Shell-tool test framework (SHELL-TEST) — `*.bats` + CI run; fatal `[[ ]]` and `!` assertions (SHELL-FATAL) | 2026-11-15 |
| CHANGELOG — [Keep a Changelog][keepachangelog] | Optional chronological changelog shape | 2026-11-15 |
| SEMVER — [Semantic Versioning 2.0.0][semver] | `vX.Y.Z` version marker + release tags | 2026-11-15 |
| XDG — [XDG Base Directory Specification][xdg] | Where the tool writes config/state/cache; the [command-line conventions](standard-cli-conventions.md#47-configuration-state-and-cache) directory table | 2026-11-15 |
| POSIX-UTIL — [POSIX.1-2024 Utility Conventions][posix-util] | [Command-line](standard-cli-conventions.md) option syntax, `--`, `-` as standard input | 2026-11-15 |
| POSIX-FIND — [POSIX `find`][posix-find] and the `cp`, `chown`, `cd` pages | `-H`, `-L` and `-P` symbolic-link options | 2026-11-15 |
| GNU-CLI — [GNU Coding Standards: Command-Line Interfaces][gnu-cli] | Long options, `--help`, `--version`, the option table | 2026-10-18 |
| BASH-EXIT — [Bash Reference Manual: Exit Status][bash-exit] | 2 for usage, 126, 127 and 128 + n | 2026-10-18 |
| CLIG — [Command Line Interface Guidelines][clig] | Streams, prompts, colour, signals, secrets, configuration precedence | 2026-11-15 |
| NO-COLOR — [NO_COLOR][no-color] | Disabling colour by environment | 2026-11-15 |
| COOKBOOK — [Formula Cookbook][cookbook] | The required formula parts (`class < Formula`, `desc`, `homepage`, `url`, `sha256`, `license`, `install`, `test do`) and their idioms, the source of `TAP-2` and `TAP-3` | 2026-11-17 |
| AUDIT — [`brew audit` command reference][audit] | What `brew audit --strict` enforces: separate package-manager evidence, never run by static `TAP-7` | 2026-11-15 |
| STYLE — [`brew style` / rubocop formula cops][style] | The `desc` rules (≤ 80 characters, no leading "A", "An" or "The") and the formula cops, the source of `TAP-4`, mirrored without running `brew` | 2026-11-15 |
| ACCEPT — [Acceptable Formulae][acceptable] | Whether a tool is eligible for a formula (notability, stable release, versioned source), background for the sourcing rule | 2026-11-15 |
| TAP — [Taps (third-party repositories)][taps] | How a tap is named (`homebrew-<x>`) and resolved by `brew tap` and `brew install`, the source of the fixed-name constraint | 2026-11-15 |
| TESTBOT — [BrewTestBot][testbot] | The `brew test-bot` CI a tap may run, the backstop when a local audit has no `brew` | 2026-11-15 |

A `TAP` finding is spec-driven only if it traces to one of the six Homebrew rows; everything else in the [Homebrew tap standard](standard-homebrew-tap.md) is tap-shape convention and is labelled so, never presented as a Homebrew requirement.

[Back to contents](#contents)

### 2.2 Advisory

The house's own tool repositories, which inform house style.

#### 2.2.1 In-house tool repositories

The tool repositories under `knowledgeislands/` provide evidence for house style. When an implementation and the standard diverge, decide which is right and reconcile; keep shared policy in the skill and tool-specific procedures in the local guides.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| MGIT — `tools-mgit` | Bash/Git boundary, installer overrides, workspace/repository command grouping; fatal Bats assertions under Bash 3.2 (`00ef0de`) | 2026-10-04 |
| KI — `tools-ki` | Typed command host, diagnostics, completion, signed installer, manual distribution | 2026-10-04 |
| RIG — `tools-rig` | Authored assembly, terminal ownership, workstation isolation, installer verification | 2026-10-04 |
| TECHNE — `tools-techne` | Typed operator boundary, compiled archives, remote-environment hold | 2026-10-04 |
| ALMANAC — `tools-git-almanac` | Read-only Git inspection, reporting boundary, Node artifact delivery | 2026-10-04 |

[Back to contents](#contents)

#### 2.2.2 Tap README

Non-normative.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| README — [Standard Readme][standardreadme] | The section set a tap README follows (title, description, Install, Usage, Contributing, License) with the `## Formulae` table as an extra section: guidance for EDUCATE, CONFORM and `TAP-J5` only, never a mechanical check, since README composition is `ki-authoring`'s and README presence `ki-repo`'s | 2026-11-15 |

[Back to contents](#contents)

## 3. Decisions

Decisions behind the rules that carry an id. Others, such as Kris's word after RIG-REL-PATCH that follow-up releases stop and ask first, are quoted in the standards beside the rules they set.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| CLI-CONVENTIONS | Write the command-line conventions from the POSIX, GNU, Bash, clig.dev, `NO_COLOR` and XDG sources and the symbolic-link survey of the `mgit-learn` run | 2026-10-18 | [command-line conventions](standard-cli-conventions.md) | taken |
| RELEASE-NOTICE | After an authorised release, the releasing territory owner or coordinator informs affected owning work, with version, change, compatibility, adoption and reply needs; a notice obligation, not release authority | 2026-10-29 | [4.2](standard-release-readiness.md#42-release-notice) | taken |
| RELEASE-ACCEPTED | Option a): before a tag, list the roadmap records the release range ships; any not yet accepted is either accepted first or named in the release notice as shipping under review, and acceptance and release stay independent otherwise. Kris, by voice through Natter, 22 November 2026, about 18:36 GMT: "Yeah. Makes sense." (store `meetings/cairn.summit/20261114-voice/messages/20261122T1836Z-voice-release-accepted-answer.md`), from ki.summit's change 23. | 2026-11-22 | [Release readiness](standard-release-readiness.md#43-establish-the-candidate) | In force |
| COMMIT-VS-CI a) | The tap's committed `pre-commit` runs only check-only staged lints, `ruby -wc` among them, and the tap audit runs in CI. Carried from `ki-repo-homebrew-tap` when it folded in. | 2026-10-26 | [Homebrew tap 4.8](standard-homebrew-tap.md#48-commit-gate) | taken |
| REPO-OTHERS | Option a: `ki-repo-backpack`, `ki-repo-mcp`, `ki-repo-packages`, `ki-repo-tools` and `ki-repo-dotfiles-chezmoi` stay; `ki-repo-homebrew-tap` folds into `ki-repo-tools` as its distribution standard, the [Homebrew tap standard](standard-homebrew-tap.md), with the `TAP` family, its `GATE-1` becoming `TAP-HOOK`, and the tap keeping `primary_shape = "ki-repo-homebrew-tap"` beside a `[skills.ki-repo-tools]` table; `ki-repo-specifications` retires; release-on-demand stays in this skill. Kris, 22 November 2026, about 21:13 GMT, the Repository guild's sitting, card: "Take the top homes"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Homebrew tap](standard-homebrew-tap.md), [release readiness](standard-release-readiness.md#41-release-on-demand) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 REPO-OTHERS a folded the `ki-repo-homebrew-tap` skill in, recorded under [Decisions](#3-decisions): its standard became the [Homebrew tap standard](standard-homebrew-tap.md) here with its rules unchanged, its seven Homebrew sources joined the tables above with their review dates, its watch-items joined Watching below, and its rubric became the `TAP` family, `GATE-1` renamed `TAP-HOOK` and its keyless-marker `CONFIG-1` replaced by this skill's own. The tap skill's last REFRESH ran on 15 November 2026, with a focused Cookbook re-read on 17 November. No outside source was refreshed in the fold.

On 22 November 2026 an in-house review applied RELEASE-ACCEPTED a, recorded under [Decisions](#3-decisions): [Establish the candidate](standard-release-readiness.md#43-establish-the-candidate) gains the pre-tag check of the records a release ships, the release notice names any shipping under review, and [Release on demand](standard-release-readiness.md#41-release-on-demand) points at it as the one place acceptance meets release. No rubric check was added, since the check runs at release time rather than on the repository's files. No outside source was refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: REFRESH points at the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: the five standards, formerly `standards-tool-repositories.md`, `standards-cli-conventions.md`, `standards-change-readiness.md`, `standards-release-readiness.md` and `standards-tool-shared-code.md`, were renamed `standard-<topic>.md` and reshaped to the standard format with their rules unchanged, and this file to the sources format, with the in-house tool repositories as advisory and the open watch items under Watching. The links between the standards, and SKILL.md's, the modes' and the rubric's, follow the new names and anchors. No rule changed and no outside source was refreshed.

The external-spec REFRESH of **15 November 2026** re-read nine of the eleven external sources and confirmed them. ShellCheck is unchanged. bats-core 1.14.0, released in July, still supports Bash 3.2, and its gotchas page still says a failing `[[ ]]` mid-test passes on Bash before 4.1 and that `|| false` fixes both that and `!`, which is what SHELL-FATAL asks for. Keep a Changelog is still 1.1.0, and Semantic Versioning still 2.0.0, which still treats a `v` prefix as a tag convention rather than part of the version. The XDG specification is still version 0.8 with the same defaults and the same rule for relative paths, but it has moved to a new address, which is now linked. The POSIX.1-2024 utility guidelines and the `find`, `cp`, `chown` and `cd` pages, clig.dev and `NO_COLOR` read as the command-line conventions say. The two GNU sources, the Coding Standards' command-line page and the Bash manual's Exit Status page, refused every request this run, so they keep 18 October. Being watched: bats-core 1.14.0 now applies `set -e` inside `run` and fails a suite that finds no tests; POSIX `find` has only `-H` and `-L`, with `-P` coming from `cp`, `chown` and the GNU and BSD `find`; clig.dev would let `-v` mean version, where the house rule keeps it for verbose; and all five tool repositories have changed a great deal since the 4 October in-house review, including CI and release workflows that now run only on manual dispatch. The in-house rows were not re-reviewed and keep their dates.

The bounded in-house review of 29 October 2026 records RELEASE-NOTICE: after an authorised release, the releasing territory owner or coordinator informs affected owning work through its messages queue, falling back to receiving State of play when ownership is unclear, with version, change, compatibility, adoption and reply needs. Existing release approval, receiver ownership and routing boundaries remain; no release, consumer selection engine or rollout is performed. External sources were not re-fetched.

The CLI-CONVENTIONS addition on **2026-10-18** wrote the [command-line conventions](standard-cli-conventions.md) from the POSIX, GNU, Bash, clig.dev, `NO_COLOR` and XDG sources above and from the symbolic-link survey of the `mgit-learn` run, comparing `tools-ki`, `tools-mgit` and `tools-rig` against it. The sources were cited from their published text without being re-fetched in that run; the next external-spec REFRESH re-reads them.

The owner-approved diagnostic review on **2026-10-05** compared all five tools' `diag` and `doctor` implementations and Rig's table renderer. It established common execution-context facts, evidence-backed local/release/unknown installation provenance, scoped health verdicts and counts, share-safe default diagnostics, and width-aware tables with lossless identifiers and deterministic redirected output. These are house conventions rather than new external requirements. Isolated repository-native fixtures own runtime proof; the hosted audit continues to report the semantic review as judgment work without launching target executables.

The external-spec REFRESH last ran **2026-07-30**. The targeted in-house review on **2026-10-04** compared all five tools' standing instructions and delivery/release guides, clarified shared policy versus executable local procedures, and consolidated repeated guidance. Installer verification examples now require explicit disposable executable/manual destinations, unavailable checks remain visible, and post-hook committed-path inspection belongs to `ki-git`. Repeatable CLI parity remains a native-test responsibility; static hosted audit does not execute tools or claim semantic conformance. External specifications were not re-fetched in this review.

**Watching:**

- **Homebrew is a live target.** The Cookbook and the `brew audit` and `brew style` cops change without a versioned spec release. Re-diff the required-fields list and the `desc` cops each cycle.
- **`TAP-4` is a mirror.** The 80-character and no-leading-article rule is copied from `brew style` so the check runs without `brew`; if that cop changes upstream, update `scripts/rubric/items/tap.ts`.
- **No `head` or `bottle` guidance yet.** The tap standard covers stable versioned-tarball formulae only; extend it if a KI tool ever ships bottles or a `head` spec.
- **Standard Readme is advisory.** If `ki-authoring` gains its own README convention set (KI-HARNESS-GOV-048), reconcile the tap README entry with it.
- If a second shell-specific concern emerges beyond shellcheck + bats, reconsider a dedicated `ki-shell` skill (deliberately not created at n=1).

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
