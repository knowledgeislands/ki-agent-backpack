---
id: industry.agent-host
title: Agent host
type: term
status: agreed
territory: knowledge-islands
island: ki-agent-backpack
origin: Cairn summit change 22, CARD-AGENT-HOST a) (12 November 2026)
links:
  industry.agent-harness:
    predicate: ki:runs
  industry.session:
    predicate: skos:related
  industry.environment:
    predicate: skos:related
  spec.ahp.agent-host:
    predicate: skos:exactMatch
---

# Agent host

An agent host lets [sessions][industry.session] outlive, and be shared across, the windows used to see them.

An agent host is the application or process, running in an [environment][industry.environment], that runs [agent harnesses][industry.agent-harness] and owns their sessions, independently of the clients that display them. The definition is the [Agent Host Protocol's agent host][spec.ahp.agent-host] (AGENT-HOST-CITE): AHP calls it "a portable, standalone sessions server" ([what is AHP][M8]), and the harness is what "the host wraps" ([MCP servers][AHP8]).

Examples: Orca, Claude Desktop, the ChatGPT desktop app, the Antigravity app and VS Code's Agent Host ([M12]). A harness run by itself, such as Claude Code or Codex in a terminal, is its own agent host and client in one process.

The leaders have no formal word: Anthropic's "surface" covers agent host and client together, and OpenAI's "host" is the machine.

## Our conventions

On terra, Orca's runtime lives inside the Orca app; `orca serve` runs the same runtime headless, as on sol.

Knowledge Islands names an agent host by one of six values: `orca`; `claude-desktop`; `chatgpt-desktop`; `chatgpt-voice`, the ChatGPT app in voice mode; `terminal`, a harness run by itself; and `ide`, an editor extension. The Cairn store's roster records each agent [actor][system.actor]'s agent host as `ki-host`, beside its agent harness as `ki-harness` (PRESENCE-FIELDS a), so the two are never folded into one: Claude Code inside Orca is `orca` with `claude-code`, and Claude Code alone in a terminal is `terminal` with `claude-code`.

## Next

A [client][industry.client] is a window onto a session an agent host owns.

[industry.session]: ./industry.session.md
[industry.environment]: ./industry.environment.md
[industry.agent-harness]: ./industry.agent-harness.md
[industry.client]: ./industry.client.md
[system.actor]: ../system/system.actor.md
[spec.ahp.agent-host]: ../specs/ahp/spec.ahp.agent-host.md
[M8]: https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp.html
[AHP8]: https://microsoft.github.io/agent-host-protocol/guide/mcp.html
[M12]: https://microsoft.github.io/agent-host-protocol/guide/implementations.html
