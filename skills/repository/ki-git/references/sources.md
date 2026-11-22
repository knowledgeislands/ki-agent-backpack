---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T17:40:00Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-git

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 External specifications](#211-external-specifications)
    - [2.1.2 In-house](#212-in-house)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Git standard](standard-git.md) and [rubric](rubric.md). Mode REFRESH re-checks the Git and Conventional Commits sources and current Knowledge Islands practice, then records the review date and findings here; implementation history is in Git.

[Back to contents](#contents)

## 2. Outside sources

The standard follows Conventional Commits and the Git documentation, and keeps its concrete safety limits in house.

### 2.1 Authoritative

The outside specifications, then the house's own evidence.

#### 2.1.1 External specifications

| Source                           | Governs                                    | Last reviewed |
| -------------------------------- | ------------------------------------------ | ------------- |
| [Conventional Commits 1.0.0][cc] | commit-message grammar and optional scope  | 2026-08-12    |
| [Git documentation][git]         | Git command and worktree vocabulary        | 2026-08-12    |
| [Git workflows][workflows]       | upstream workflow guidance                 | 2026-08-12    |
| [git-worktree][worktree]         | linked-worktree terminology and boundaries | 2026-08-12    |

[cc]: https://www.conventionalcommits.org/en/v1.0.0/
[git]: https://git-scm.com/docs/git
[workflows]: https://git-scm.com/docs/gitworkflows
[worktree]: https://git-scm.com/docs/git-worktree

[Back to contents](#contents)

#### 2.1.2 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Harness commit history | current type vocabulary and direct-main practice | 2026-08-12 |
| `hooks/git-lock-check/git-lock-check.sh` and its run test | stale-lock guard semantics and safety boundary | 2026-08-12 |
| GDR-KI-HARNESS-003 | portable ownership boundaries | 2026-08-12 |
| Rig delivery guidance and shared-tree practice | post-hook committed-path inspection and bounded recovery | 2026-10-04 |

[Back to contents](#contents)

## 3. Decisions

Kris's decisions behind the rules, each quoted in the standard beside the rule it sets or in the reviews below.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| REPO-GIT-HYGIENE | The clean-down criteria, each naming a read-only Git or provider command and a fixed rule | 2026-10-16 | [4.6](standard-git.md#46-clean-down-state) | taken |
| GREEN-MAIN | "GREEN-MAIN - agreed as recommended": a repository whose skills, hooks or rubrics run in other repositories' gates takes every edit off its shared primary checkout, extended to `tools-ki` the same day | 2026-10-20 | [4.4](standard-git.md#44-working-copy-and-review-approaches) | taken |
| WORKTREE-INTEGRATE a) | "do whatever that needs to be": a background run fast-forwards its own worktree branch into the local primary checkout's `main`, and one that cannot fast-forward cleanly keeps its worktree and reports it stranded | 2026-10-20 | [4.4.2](standard-git.md#442-worktree-run-self-integration) | taken |
| ACCEPT-BY-CRITERIA a) | "amend in a shared checkout only inside the serialised write window after confirming `HEAD` is this session's own unpushed commit, otherwise make a new commit" | 2026-10-31 | [4.5](standard-git.md#45-safe-git-hygiene) | taken |
| HOOK-STASH a) | Commit hooks run `lint-staged` with `--no-stash` under the never-stash rule | 2026-11-01 | [4.5](standard-git.md#45-safe-git-hygiene) | taken |
| LINT-BEFORE-PUSH | "It's really important that we make sure that things do pass the linting before we push them." | 2026-11-06 | [4.5.1](standard-git.md#451-checks-before-committing) | taken |
| WORKTREE-RUNS | WT-ADOPT a, about 08:58 GMT, in the Cairn summit's [change 70, 4.6](https://github.com/krisb/ki-cairn-store/blob/a5798e5b/work/cairn/cairn.summit/70-bots.change.md#46-decided): "Yeah, we can adopt the worksheet proposal, but I want you to do it only if you're in high confidence and I agree with you"; the purpose test, the branch holder's life and the allowed worktree folders, as the eight high-confidence points with the blind review's amendments | 2026-11-22 | [4.4](standard-git.md#44-working-copy-and-review-approaches), [4.4.2](standard-git.md#442-worktree-run-self-integration), [4.4.3](standard-git.md#443-worktree-location) | taken |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 the third SKILLS-LEARNING batch added two pitfalls: in [safe Git hygiene](standard-git.md#45-safe-git-hygiene), a commit refused by its message check leaves what was added before it staged, so check each commit landed before the next; and in [the local integration write boundary](standard-git.md#441-local-integration-write-boundary), typecheck again after resolving a merge conflict. No criterion changed and no external source refreshed.

On 22 November 2026 the second SKILLS-LEARNING batch added three pitfalls: in [commit messages](standard-git.md#42-commit-messages), read an earlier commit's diff before planning on its message; in [safe Git hygiene](standard-git.md#45-safe-git-hygiene), `git commit --only` takes no untracked file until it is added, and a commit rejected by its hook leaves nothing committed, so wait for the verdict. No rule changed and no outside source was refreshed.

On 22 November 2026 WORKTREE-RUNS, which Kris adopted at about 08:58 GMT, landed: [working-copy approaches](standard-git.md#44-working-copy-and-review-approaches) gained the purpose test, [worktree-run self-integration](standard-git.md#442-worktree-run-self-integration) the branch holder's life, based and rebased on a freshly fetched `origin/main` in place of local `main` without a fetch, and [worktree location](standard-git.md#443-worktree-location) the allowed folders. GREEN-MAIN's paragraph is unchanged; how it meets the purpose test went to Kris as a query. No outside source was refreshed.

On 22 November 2026 SKILLS-LEARNING, Kris's steer of that morning to bake the night's lessons into the skills, brought three pitfalls from the overnight runs into [safe Git hygiene](standard-git.md#45-safe-git-hygiene) and one into [commit messages](standard-git.md#42-commit-messages): sync by `git fetch` and `git merge --ff-only @{u}` rather than `git pull`, which a branch rebase setting or other sessions' uncommitted files make refuse; stage and commit in one `git commit --only -- <path>...`; write pathspecs literally under zsh; and wrap commit bodies at 100 characters. The hygiene rubric's guidance follows. No rule changed and no outside source was refreshed.

On 22 November 2026 [checks before committing](standard-git.md#451-checks-before-committing) was brought to BASELINE-CHECKS, Kris's steer of that day at about 08:20 GMT in the Cairn summit's [change 70, 4.6](https://github.com/krisb/ki-cairn-store/blob/bf8acca3/work/cairn/cairn.summit/70-bots.change.md#46-decided) and owned by `ki-delegation`: the full suite belongs to the baseline and release tiers rather than daily. No outside source was refreshed.

On 22 November 2026 [checks before committing](standard-git.md#451-checks-before-committing) was aligned with CHECKS-LIGHT, Kris's steer of that day recorded in the Cairn summit's [change 70, 4.6](https://github.com/krisb/ki-cairn-store/blob/72d309b1/work/cairn/cairn.summit/70-bots.change.md#46-decided) and owned by `ki-delegation`: the per-file checks and the commit hooks are all a commit needs while iterating, and the full suite belongs to the daily and release tiers. LINT-BEFORE-PUSH is unchanged; no outside source was refreshed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: the backpack owns and publishes the hook payload sources, and REFRESH names the backpack. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Git standard](standard-git.md), formerly `standards-git.md`, was renamed and reshaped to the standard format with its rules unchanged, the old Scope and ownership becoming the first rules section, and this file to the sources format, with the decisions the standard quotes gathered in the Decisions table. SKILL.md and the rubric follow the new name and anchors. No rule changed and no outside source was refreshed.

A 2026-11-06 review under `ki.reg.guilds` applies LINT-BEFORE-PUSH, Kris's words of 6 November 2026, "It's really important that we make sure that things do pass the linting before we push them", proposed by `ki.prj.agora`: the new [checks before committing](standard-git.md#451-checks-before-committing) rule runs the repository's own checks on each file before committing, treats a refused commit as a failure to report and confirms each committed path clean before pushing. `ki-coordination` and `ki-delegation` point to it rather than restating it. This is an in-house policy review; external sources were not re-fetched.

A 2026-10-21 review under `wow-day-push-reporting` applies Kris's "push state out of reports" instruction in `ki.ways-of-working`: owner reports, run reports and banners omit routine push state and other sessions' stacked commits; a run still reports a failed push that prevented publication of its own unit, naming the unit and reason. A hold report keeps nothing about pushes beyond a failure. Fast-forward, own-commits-only and no-force safeguards remain. This is an in-house policy review; external sources were not re-fetched. Implementation history is in Git.

On 2026-10-16 the CLEAN family added the clean-down criteria from Kris Brown's REPO-GIT-HYGIENE decision, as judgment items that each name a read-only Git or provider command and a fixed rule, so that `ki repo audit` can later run them mechanically; no external source was re-fetched for it.

The targeted in-house review on 2026-10-04 promoted actual committed-path inspection after hooks from Rig's delivery guidance into the shared hygiene standard and rubric. The external sources were not re-fetched during this consolidation.

The 2026-08-12 refresh re-checked the primary Git, Git workflow, and worktree documentation. `git-worktree` now supplies the direct terminology source for the guard's linked-worktree boundary; the harness hook and its run test remain the normative local safety contract.

Conventional Commits confirms the `type(scope): summary` shape; the Knowledge Islands type vocabulary is deliberately narrower and records only types established in current practice.

Git and workflow documentation remain supporting source context, while the harness keeps the concrete safety limits for the local hook. The native rubric remains judgment-only: its source-backed prompts name the minimum read-only evidence but do not claim a mechanical Git-state audit.

**Watching:** Git behaviour, the commit vocabulary, the hook contract, and any runtime-binding boundary; refresh quarterly, or earlier when one changes.

[Back to contents](#contents)
