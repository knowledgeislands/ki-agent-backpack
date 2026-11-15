# Sources — ki-repo-backpack

**Refresh:** external-spec · monthly

The tracked sources behind [the compatible harness standard](standards-compatible-harness.md). Provenance only: the record of _what changed_ lives in git, not a changelog here.

## Authoritative

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| [AS] | [Agent Skills specification][as-spec] | The individual `SKILL.md` format the harness serves † | 2026-11-15 |
| [CC] | [Claude Code subagent docs][cc-subagents] | The subagent definition format the `subagents/` part serves | 2026-11-15 |

† Including the directory-name = `name:` constraint and the `references/`, `scripts/`, `assets/` layout.

## In-house

| Tag | Source | Governs | Last reviewed |
| --- | --- | --- | --- |
| [AH] | [ki-agent-backpack README][ah-readme] | The KI canonical source-harness implementation § | 2026-11-15 |
| [CH] | [ADR-KI-HARNESS-012][compatible] | Installed identity, direct payload, capability, host, and activation boundaries | 2026-11-15 |
| [KR] | `ki-repo` skill | The `.ki.toml` contract and what makes a KI-governed repository | 2026-11-15 |
| [KS] | `ki-skills` skill | The governed-rubric family, session, and host boundary ‡ | 2026-11-15 |
| [KE] | `ki-engineering` skill | Development toolchain ownership outside compatible-harness installation semantics | 2026-11-15 |
| [BD] | Cairn summit change 12, BACKPACK-DEPTH (Kris, 14 November 2026) | This skill's name: `ki-repo-harness` became `ki-repo-backpack`; the harness wording in its standards follows when the backpack words are rolled out | 2026-11-15 |

§ Source layout and shelf practice are inferred from this repository; installed-payload policy comes from [CH].

‡ Catalogue shape, context/session ownership, generated publication, and direct host execution.

## Last review

_REFRESH last run **2026-11-15** (previous: 2026-09-26)._

**Confirmed:**

- [AS] re-fetched live: the specification still defines no bundle, harness, container or multi-skill grouping, still requires `name` to match the parent directory, and still describes the optional `scripts/`, `references/` and `assets/` folders. It now also forbids consecutive hyphens in `name` and points to the `skills-ref` validator; both are `ki-skills` matters, not this container standard.
- [CC] re-fetched live: a subagent is still one Markdown file with `name` and `description` required, optional `tools` and `model`, and the body as its system prompt, installed at project (`.claude/agents/`) or user (`~/.claude/agents/`) level. The page now lists many more optional fields and says subfolders under `agents/` are scanned without changing a project or user agent's identity. None of this changes the `subagents/` part of the harness contract.
- [AH] and [CH] re-read from this repository: the README still names the four shelves, and the ADR is current and still says the installed payload holds regular `skills/`, `subagents/` and `hooks/`, with no checkout, cache, runtime projection or `.ki/` folder ever an operation source.
- [KR], [KS] and [KE] re-read: `ki-repo` still owns the `.ki.toml` contract, `ki-skills` the governed-rubric framework, and `ki-engineering` package scripts and the toolchain.
- [BD] re-read in the Cairn store: BACKPACK-DEPTH renamed `ki-repo-harness` to `ki-repo-backpack`. The row had been caught by the rename itself and read "`ki-repo-backpack` became `ki-repo-backpack`"; it now names the old name again.

**Watching:**

- [CH] still calls `knowledgeislands/ki-agentic-harness` the baseline compatible harness; the repository is now `ki-agent-backpack`. The ADR owns that wording, and BACKPACK-DEPTH has the harness words follow when the backpack words are rolled out.
- The open watch-items below still stand.

_REFRESH last run **2026-09-26** (previous: 2026-08-12)._

**Confirmed:**

- [AS] re-fetched live: the Agent Skills specification still defines **no** bundle, harness, container, or multi-skill grouping concept — the four-part source structure and co-location intent remain a KI architectural convention. The spec requires the `name` field to match the parent directory name (reinforcing SKILLS-1) and documents optional frontmatter governed by `ki-skills`, not this container standard.
- [CC] re-fetched live: the subagent definition format (frontmatter `name` / `description` / `tools` / `model` + system-prompt body, project- and user-level install locations) is unchanged. No change to the `subagents/` part of the harness contract.
- [CH] confirms that the current installed payload contains regular `skills/`, `subagents/`, and `hooks/`; a checkout, cache, runtime projection, or `.ki/` directory is never an implicit operation source.
- [KR] / [KS] / [KE] confirm the direct boundaries: `.ki.toml` declares source-repository governance, rubrics execute through the `ki` host, and package scripts are development conveniences rather than installation or governance entry points.

**Drift resolved this pass:**

- The standard now separates the four-part source repository from the current three-directory compatible payload and names installed, verified harness state as the only operation source.
- Retired package aliases, repository-vendored executors, checkout-dependent runtime links, and a skill-owned global linker are removed from the harness contract.
- The mechanical catalogue now discovers grouped physical skill roots, uses the final session contract, and retains only the safe host-published `[skills.ki-repo-backpack]` marker append.

**Open watch-items:**

- [AS] — Monitor for any Agent Skills spec update that adds bundle / harness-level concepts. If agentskills.io ever formalises a multi-skill container, reconcile with this standard. Also: the newly-documented optional frontmatter fields (`compatibility`, `allowed-tools`, `metadata`) are a `ki-skills` concern to fold in — flag raised, not owned here.
- [CC] — Monitor Claude Code release notes for any change to skill-install paths or the project-local skill-install convention.
- Codex subagent discovery is now documented under `.codex/agents/`, but the compatible harness has no publication path for it; dispositioned on 2026-10-06: the runtime capability is recorded, publication remains host-owned and unavailable, and this repository declines a Codex projection.
- [CH] — Monitor host support for eval capabilities. Evals remain a source shelf until a compatible-payload contract lands; MCP servers remain independent repositories.

[as-spec]: https://agentskills.io/specification
[cc-subagents]: https://code.claude.com/docs/en/sub-agents
[ah-readme]: ../../../../README.md
[compatible]: ../../../../docs/decisions/ADR-KI-HARNESS-012-compatible-harness-publication-and-governed-rubric-boundary.md
