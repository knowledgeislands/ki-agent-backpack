# CLAUDE.md — ki-agent-backpack

@AGENTS.md

The runtime-neutral orientation lives in [AGENTS.md](AGENTS.md), imported above. This appendix contains only Claude-Code-specific repository detail.

## Claude Code specifics

- **Hooks** — the canonical backpack carries the five global hook payloads listed in [hooks/README.md](hooks/README.md#payload), but `ki` does not write `.claude/settings.json`. A user-environment manager binds the Plan Mode lifecycle pair, the `Stop(*)` stale Git-lock guard and the coordinator reminder and footer hooks into settings.
