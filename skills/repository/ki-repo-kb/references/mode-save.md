---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode SAVE — write a new note

_On-demand procedure for kb's SAVE mode. The shared model — the five-zone structure, routing test, memory cascade, project bindings, and Step 1 (Load context) — lives in [`SKILL.md`](../SKILL.md) and is already loaded; this file is the procedure only._

_Gate: if the destination is a canonical zone (`Admin`, `Pillars`, `Resources`) and the base runs the Enactment Process (its `AGENTS.md` says so), this is a canonical change under [the Enactment gate](standard-enactment-process.md#42-canonical-change-gate) — capture forward work through `ki-work next` rather than writing directly. `Calendar/`, `+/`, and trivial fixes are exempt._

1. Run pre-flight.
2. Determine the destination zone using the routing test.
3. Propose a filename per the base's naming convention (dated for `Calendar/`; descriptive title elsewhere; follow the [source mirror contract](standard-source-mirrors.md) for declared source extracts).
4. Draft per the project's writing standards. Cite every fact to a source path or reference; label analysis explicitly where the base distinguishes fact from analysis.
5. Confirm, then write.

## An Activity note

When the note records a behaviour the base has adopted, read [the Activity standard](standard-activities.md) first. The Activity NEW mode folded into SAVE.

1. Prompt for **Name** (the filename and the `# Heading`) and **realization type** from the known list (`slash-command`, `scheduled-task`, `conversational`, `manual`, `workflow`), accepting free text for a new type.
2. Prompt for the realization's fields: `skill` for `slash-command`; `schedule_name` and `schedule_env` for `scheduled-task`. Default the status to `active`.
3. Write `<activities_dir>/<Name>.md` (default `Admin/Operations/Activities/`) from the [activity template](../assets/templates/admin/activity.md), then add it to `Activities.md`, creating the index stub if absent.

## A Live Artifact source

When the note is a dashboard, queue, tracker or status board updated in place, read [the Live Artifact standard](standard-live-artifacts.md) first. The Live Artifact NEW mode folded into SAVE.

1. Prompt for **Name** (the file stem and the `# Heading`) and a one-line **description** for the index. Default the status to `active`.
2. Write `<artifacts_dir>/<Name>.md` (default `Admin/Operations/Live Artifacts/`) with `status`, `renders: html` and `author` frontmatter and a stub body.
3. Add it to `Live Artifacts.md`, noting it is unpublished until `<Name>.html` is generated; this skill does not render HTML.
