---
id: industry.instruction-file
title: Instruction file
type: term
status: proposal
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 12, 4.5, drafted for the owner's review in the order change 22 set, after the tool and before the plugin (17 November 2026)
links:
  industry.agent-harness:
    predicate: skos:related
  industry.session:
    predicate: skos:related
  industry.skill:
    predicate: skos:related
---

# Instruction file

An instruction file gives every session in a place the same standing instructions, so they need not be repeated in each prompt.

An instruction file is a plain Markdown file that an [agent harness][industry.agent-harness] finds by its name and loads into a [session][industry.session] as standing context: from the user's own folder for every project, from the repository's root, and from folders nearer the work, the nearer file taking precedence. Harnesses load the user's and the root's files when a session starts, and some load a folder's file only once the agent works there ([AG1], [A13], [O15], [G10]). `AGENTS.md` is the open, shared name ([AG1]); Claude Code reads `CLAUDE.md`, and can read `AGENTS.md` in its place ([A13]); Codex reads `AGENTS.md`, with an `AGENTS.override.md` beside it ([O15]); and Gemini CLI reads `GEMINI.md`, its name configurable to `AGENTS.md` ([G10]). The instructions are context the model follows, not configuration the harness enforces ([A13]).

An instruction file is not a [skill][industry.skill]: it is always loaded, where a skill costs little until a task calls for it.

## Our conventions

A Knowledge Islands repository keeps its shared orientation in a physical root `AGENTS.md`, with any root `CLAUDE.md` a thin Claude-only appendix that imports it, as `ki-repo` sets; the owner's own preferences sit in the user-level files.

## Next

A [plugin][industry.plugin] is an installable bundle that extends an agent harness with skills and more.

[industry.agent-harness]: ./industry.agent-harness.md
[industry.session]: ./industry.session.md
[industry.skill]: ./industry.skill.md
[industry.plugin]: ./industry.plugin.md
[AG1]: https://agents.md/
[A13]: https://code.claude.com/docs/en/memory
[O15]: https://learn.chatgpt.com/docs/agent-configuration/agents-md
[G10]: https://geminicli.com/docs/cli/gemini-md/
