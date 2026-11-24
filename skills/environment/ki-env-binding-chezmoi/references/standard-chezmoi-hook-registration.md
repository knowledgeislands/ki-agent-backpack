---
ki-document-type: standard@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-status: in force
---

# Chezmoi hook registration standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 What each part owns](#41-what-each-part-owns)
  - [4.2 The registration contract](#42-the-registration-contract)
  - [4.3 Invariants](#43-invariants)

## 1. Introduction

This standard governs one thing: **how chezmoi registers a selected backpack hook payload in Claude Code's and Codex's settings**. It is the one home of that rule. Every other skill that names hook registration points here: `ki-repo-dotfiles-chezmoi`, `ki-git` and `ki-repo-backpack`.

The [generated rubric](rubric.md) has no hook criterion yet, so a reviewer reads this standard beside it; the sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

Registering installed backpack hooks in runtime settings through chezmoi.

### 2.1 In scope

- The `.chezmoitemplates/*-hook-registrations-json` partials, one for each hook or hook group, and the data that turns each on.
- The Claude Code and Codex settings targets that read those partials, and Codex's trusted hook hashes.
- Registering from the `ki`-installed payload path, and removing a registration whose hook is turned off.

[Back to contents](#contents)

### 2.2 Out of scope

- The hook payloads themselves, each `hooks/<hook>/<hook>.sh` and the `hooks/README.md` payload table: the backpack, under `ki-repo-backpack`'s three-part hook model.
- Installing and checking the payload: `ki`.
- Each hook's own behaviour: the skill that owns its semantics, such as `ki-git` for the stale-lock guard, `ki-work` for the Plan Mode pair and `ki-coordination` for the coordinator hooks.
- Generic chezmoi repository shape, templating and fragment binding: `ki-repo-dotfiles-chezmoi`.
- A repository's committed `.githooks/` commit gate: `ki-repo`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Hook registration** | An entry in a runtime's settings that runs an installed hook on an event, with its matcher and timeout. **Standard:** this one, [4.2](#42-the-registration-contract) |
| **Registration partial** | A `.chezmoitemplates/<name>-hook-registrations-json` template that renders one `{commands, hooks}` object: the commands it owns and the event entries to register. **Standard:** this one, [4.2](#42-the-registration-contract) |
| **Trusted hook hash** | The runtime-specific hash Codex's `config.toml` holds for a user hook before Codex runs it. **Standard:** this one, [4.2](#42-the-registration-contract) |

[Back to contents](#contents)

## 4. Rules

What each part owns, the registration contract, and the invariants.

### 4.1 What each part owns

A hook reaches a runtime in three parts, as `ki-repo-backpack` sets out and the backpack's `hooks/README.md` describes: the backpack ships the payload, `ki` installs and checks it, and the user-environment manager registers it. On a chezmoi-managed machine this skill owns the third part. `ki-repo-dotfiles-chezmoi` owns the generic fragment binding the settings targets use, and knows nothing of hooks.

[Back to contents](#contents)

### 4.2 The registration contract

1. **One partial for each hook or hook group.** Each registration partial renders `{commands, hooks}`: `commands` lists every command string the data owns, current and legacy, and `hooks` holds the event entries in the shape Claude Code's `settings.json` and Codex's `hooks.json` share under their `hooks` key. A disabled hook renders an empty `hooks` while keeping its `commands`, so its registration is removed rather than left behind.
2. **Data turns each hook on.** Each partial reads its own `.chezmoidata` entry for the command, timeout and enabled flag. The command names the installed payload path, `~/.local/share/ki/backpacks/<org>/<backpack>/hooks/<hook>/<hook>.sh`, never a source checkout.
3. **The settings targets bind fragments.** Claude Code's `settings.json` target and Codex's `hooks.json` target read the partials they register and merge them as fragments, keeping every hook they do not own, such as a host's own hooks.
4. **Codex trusts what it runs, unlike Claude Code.** A hook registered for Codex has its hash in Codex's `config.toml`, rendered from the same data, since Codex runs a user hook only once its hash is trusted; Claude Code needs no hash.
5. **A runtime gets only verified events.** A hook is registered for a runtime only where the backpack's payload table names that runtime and event.
6. **Preview before apply.** `chezmoi diff` is reviewed before `chezmoi apply`; source structure does not prove a registration was applied or that a hook ran.

[Back to contents](#contents)

### 4.3 Invariants

- **Edits flow through the source.** A hand-edited registration in a rendered settings file is drift; change the data or partial, then apply chezmoi.
- **`ki` does not write settings chezmoi owns.** Where chezmoi owns a runtime's settings, `ki` is to report a missing registration as managed by chezmoi rather than write it; the backpack's `hooks/README.md` says how much of that `ki` does today.
- **No repository installs a user hook.** Repository operations and skill activation never write user settings.

[Back to contents](#contents)
