---
id: KI-HARNESS-GOV-239
area: GOV
title: Codex's workstation notes
component: environment
priority: low
size: s
assignee: work/ki.summit
status: triage
blocks: []
blocked_by: []
baseline_ref: null
created_at: 2026-11-19T07:05:00Z
updated_at: 2026-11-19T07:05:00Z
---

# Codex's workstation notes

## Goal

The two workstation notes still in Codex's own instructions file, on Zed's external-agent keys and on the router's stale DNS, live in a skill every agent host loads, so Codex's file holds only what is Codex's own.

## Context

CODEX-MOVES a, which Kris took on 16 November 2026, about 15:40 GMT, in the Cairn summit's change Where guidance lives (15), moved out of Codex's own file the lines a skill already said. Two were left, to go to the Environment guild once a Rig skill takes them, as the guardian's own work with the guild reviews (Kris, 17 November 2026, about 23:34 GMT, under GUARDIAN-LANDS a). The backpack had no Rig skill on 18 November 2026, and still has none, so both notes stay in `~/.codex/AGENTS.md`, rendered from chezmoi's `dot_codex/`:

- **Zed external agents:** `agent: new thread` and `⌘N` start a thread with the default agent; choosing between Codex and Claude takes `⌘⌥⇧N` or the Agent Panel's `+` button.
- **Local DNS troubleshooting:** the router at `192.168.1.1` can keep stale `NXDOMAIN` answers; compare with `dig <host> @1.1.1.1`, switch Wi-Fi to Cloudflare DNS for a while, and do not restore automatic DNS until the router's cache has cleared.

The change closed on 19 November 2026 with this carried here; its text at its last revision is [Where guidance lives (15), gap 1](https://github.com/krisb/ki-cairn-store/blob/3fd8cee865304baf91d30708ac8c58df5b18270b/work/cairn/cairn.summit/15-where-guidance-lives.change.md#72-gaps).

## Boundary

The two notes' home and their removal from Codex's file in chezmoi. It does not decide what a Rig skill covers beyond them, nor move anything else out of the user-level files.

## Discussion

### Options

- a) When the Environment guild, or `tools-rig`'s owner, writes a skill for the workstation, the two notes go into it and leave Codex's file in the same pass; until then they stay where they are. Recommended, high confidence: it is what CODEX-MOVES a set, and the notes do no harm where they are.
- b) Put them now into the nearest existing skill, such as `ki-env-housekeeping`, though neither is housekeeping.

### Handover

Carried from the Cairn summit by its guardian on 19 November 2026 for the Environment guild, held by ki.summit while ki.guilds has no one seated; Loreward routes it, or cancels it if no Rig skill is planned.
