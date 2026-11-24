# agents

Knowledge Islands agent definitions live here, grouped by domain. Each is a **Claude Code subagent** file, one `.md` file per agent. That file is the designated primary projection of a portable role and carries the role record itself, as [ADR-KI-HARNESS-AGENTS-002](../docs/decisions/ADR-KI-HARNESS-AGENTS-002-portable-subagent-contract-and-runtime-adapters.md) decides. This repository declares no Codex projection; one would correspond to the primary and never establish the record.

## Convention

Each agent is a Markdown file with YAML frontmatter followed by a system-prompt body, per the [Claude Code subagents spec](https://code.claude.com/docs/en/sub-agents). The **record fields** are `name`, `description`, and the body; `name` must be unique across the whole tree. Every other frontmatter key - `model`, `tools`, `disallowedTools`, `permissionMode`, `color` and the rest - is a **projection field** owned by `ki-subagents-claude`, not part of the role. The partition is defined in `ki-subagents` under [Record and projections](../skills/agentic-ecosystems/ki-subagents/references/standard-portable-subagents.md#43-record-and-projections).

The governing skill for what makes a good agent definition is **`ki-subagents`** (under [skills/](../skills)) — the agents twin of `ki-skills`. Run its AUDIT mode over any agent, or the whole set, before shipping.

## Register

This file is the backpack's **role register**: every role source under `subagents/` is linked from a table below, and every link resolves to a source. There is no `ki` tool surface for subagent roles; an agent run installs them into each host, reading this register to find every role, under `ki-subagents`' [register and install](../skills/agentic-ecosystems/ki-subagents/references/standard-portable-subagents.md#45-register-and-install) rule. `ki-subagents`' REGISTER-1 checks that no role source is left out.

## governance/

KI governance-domain agents. Each is grounded in the ki-principal KB and the harness skill set; each defers to its siblings for adjacent concerns.

| Agent | Lane |
| --- | --- |
| [`ki-skills-lead`](governance/ki-skills-lead.md) | SKILL.md authoring, auditing, and conformance |
| [`ki-engineering-lead`](governance/ki-engineering-lead.md) | Toolchain compliance and repo structure |
| [`ki-repo-kb-curator`](governance/ki-repo-kb-curator.md) | KB zone health, note structure, and link integrity |
| [`ki-decision-author`](governance/ki-decision-author.md) | DR authoring (SDR / GDR / ADR) and the Decisions index |

Choosing, planning and recording work, which the retired `ki-repo-kb-streams-curator` once held as streams and proposals, belongs to the `ki-work` and `ki-work-roadmap` skills.

## Adding an agent

1. Group it in a domain subdirectory.
2. Add `<role>.md` with `name` and `description` frontmatter.
3. Register it: add its row, linking the file, to its domain's table above.
4. Audit with `ki-subagents` and resolve findings.
