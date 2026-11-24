---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-git

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 External specifications](#211-external-specifications)
    - [2.1.2 In-house](#212-in-house)
- [3. Last review](#3-last-review)

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
| [Conventional Commits 1.0.0][cc] | commit-message grammar and optional scope  | 2026-11-23    |
| [Git documentation][git]         | Git command and worktree vocabulary        | 2026-11-23    |
| [Git workflows][workflows]       | upstream workflow guidance                 | 2026-11-23    |
| [git-worktree][worktree]         | linked-worktree terminology and boundaries | 2026-11-23    |

[cc]: https://www.conventionalcommits.org/en/v1.0.0/
[git]: https://git-scm.com/docs/git
[workflows]: https://git-scm.com/docs/gitworkflows
[worktree]: https://git-scm.com/docs/git-worktree

[Back to contents](#contents)

#### 2.1.2 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Harness commit history | current type vocabulary and direct-main practice | 2026-11-23 |
| `hooks/git-lock-check/git-lock-check.sh` and its run test | stale-lock guard semantics and safety boundary | 2026-11-23 |
| GDR-KI-HARNESS-003 | portable ownership boundaries | 2026-11-23 |
| Rig delivery guidance and shared-tree practice | post-hook committed-path inspection and bounded recovery | 2026-10-04 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched the four outside pages and re-read the in-house evidence, and no rule needs a change. Conventional Commits is still 1.0.0; the Git manual and `git-worktree` were last updated in 2.56.0, and `git-worktree` still refuses an unclean worktree without `--force` and a locked one without it twice, so the lock guard's boundary holds; `gitworkflows` is unchanged. The harness's last 200 commits use only the types [commit messages](standard-git.md#42-commit-messages) lists, and GDR-KI-HARNESS-003 is still current.

**Watching:** Git behaviour, the commit vocabulary, the hook contract and any runtime-binding boundary; refresh quarterly, or sooner when one changes. The Rig delivery guidance row has no live text behind it now, and may be retired once the standard is the rule's only home. Git's manual now lists the experimental `git history` and `git replay`, which rewrite history; nothing in the standard names them.

[Back to contents](#contents)
