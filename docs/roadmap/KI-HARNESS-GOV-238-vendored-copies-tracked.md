---
id: KI-HARNESS-GOV-238
area: GOV
title: Vendored copies tracked
kind: deliver
component: repository
priority: low
size: s
assignee: work/ki.guilds
horizon: next
status: draft
blocks: []
blocked_by: []
baseline_ref: null
created_at: 2026-11-19T07:01:00Z
updated_at: 2026-11-24T10:01:46Z
---

# Vendored copies tracked

## Goal

A repository that vendors a skill keeps its copy in Git without hand-written ignore rules, `ki-repo`'s audit checks that the copy is tracked, and the hashes it compares come from Git rather than from its own reading of the files.

## Context

COPY-DETAILS, which Kris took on 17 November 2026, about 23:34 GMT, under GUARDIAN-LANDS a, in the Cairn summit's change Runtimes and skill copies (13), had three parts. The first two are in `ki-repo`'s [vendored skills rule](../../skills/keystone/ki-repo/references/standard-configuration.md#434-vendored-skills): a copy the audit cannot check stays information, and the audit notes, as information, when the backpack has moved on past a copy's `commit`. The third went to the Repository guild's review, which finished on 18 November 2026 without taking it:

- **The managed `.gitignore` block re-includes vendored copies.** Today the rule says a vendored copy and its Claude link are committed, "so the repository's own ignore rules re-include them": each repository writes its own `!.agents/skills/<name>/` lines, as the Cairn store does for `ki-meeting`, while the managed block already re-includes `ki-self` the same way ([runtime skill ignore contract](../../skills/keystone/ki-repo/references/standard-repository.md)).
- **`RUNTIMES-6` checks the copy is tracked.** It checks the copy's shape and its `mode` and `commit` keys, not whether Git tracks the files; `ki` already warns when Git ignores a copy.
- **Git computes the hashes** the drift check compares, so the comparison is the one Git would make.

The change closed on 19 November 2026 with this carried here; its text at its last revision is [Runtimes and skill copies (13), gap 3](https://github.com/krisb/ki-cairn-store/blob/3fd8cee865304baf91d30708ac8c58df5b18270b/work/cairn/cairn.summit/13-runtimes-and-skill-copies.change.md#72-gaps).

## Boundary

`ki-repo`'s repository and configuration standards, the `RUNTIMES-6` rubric item and the managed `.gitignore` block, with `tools-ki`'s matching code where the Repository guild decides it is needed. It does not change what a vendored copy is, the moved-on note, which `tools-ki` builds for ki.tools, or which repositories vendor which skills.

## Current state

Not started, and the option is not yet chosen. Of COPY-DETAILS's three parts, the first two are in `ki-repo`'s vendored skills rule; this record carries the third. Each vendoring repository still writes its own `!.agents/skills/<name>/` re-include lines, `RUNTIMES-6` checks a copy's shape and its `mode` and `commit` keys but not whether Git tracks it, and the drift check hashes the files by its own reading.

## Steps

- [ ] Choose between options a) and b) below in the Repository guild's next review, held by ki.guilds.
- [ ] `RUNTIMES-6` fails a vendored copy Git does not track, under either option.
- [ ] Under option a) only: the managed `.gitignore` block re-includes each skill declared `mode = "vendored"`, and the drift check takes its hashes from `git ls-tree` on both sides.
- [ ] Bring `tools-ki`'s matching code into line where the guild decides it is needed, through that repository's owner.

## Files touched

- `skills/keystone/ki-repo/references/standard-repository.md`
- `skills/keystone/ki-repo/references/standard-configuration.md`
- `ki-repo`'s rubric source and its generated `skills/keystone/ki-repo/references/rubric.md`
- `tools-ki`'s matching audit code, in that repository, if the guild decides it is needed

## Verify

`ki repo audit --repo . --skill ki-repo` passes, and a repository whose vendored copy Git ignores fails `RUNTIMES-6`.

## Dependencies / blocks

The Repository guild's choice between the options. Any `tools-ki` change lands in that repository under its own owner.

## Documentation impact

### Decision Records

None: the option the guild takes is recorded in `ki-repo`'s sources.

### Specifications

`ki-repo`'s repository and configuration standards change as the Steps say.

### Guides

None expected: the change is to the standards and the audit, and any guide found naming hand-written re-include lines is brought into line in the same pass.

### Roadmap

This record only.

## Discussion

### Options

- a) Build all three: the managed block gains a re-include line for each skill declared `mode = "vendored"`, `RUNTIMES-6` fails a vendored copy Git does not track, and the drift check takes its hashes from `git ls-tree` on both sides. Recommended, medium confidence: each part removes a hand-kept rule, but the managed block writing per-skill lines is a new kind of block content the guild should weigh.
- b) Build only the tracking check in `RUNTIMES-6`, leaving the ignore lines to each repository and the hashing as it is.

### Handover

Carried from the Cairn summit by its guardian on 19 November 2026 for the Repository guild, held by ki.summit while ki.guilds has no one seated; Loreward routes it to the guild's next review or cancels it with the reason.
