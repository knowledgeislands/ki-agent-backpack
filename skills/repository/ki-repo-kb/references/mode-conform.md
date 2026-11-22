---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode CONFORM — bring a base into line

**Precondition:** run [Mode AUDIT](mode-audit.md) first and retain its findings.

1. Run `ki repo conform --skill ki-repo-kb --repo <base> --dry-run`. The current safe actions propose missing same-name zone indexes and the root `Admin/MEMORY.md` from session-owned drafts; the host validates and publishes the transaction.
2. Refile misrouted notes, repair note frontmatter and naming, and reconcile the memory index. Confirm before moving or rewriting notes.
3. For an Admin warning, create a missing `Governance/` or `Operations/` subdivision and its index only when the base has material belonging there. If active governance lacks `Charter.md` or `Conformance.md`, confirm with the owner before creating those owner-maintained documents.
4. When MEM-2 reports no always-loaded anchor, add a line to the base's `CLAUDE.md` or `AGENTS.md` naming the root memory index and the scope-before-work rule.
5. For the folded families, the dry run also proposes the `Activities.md` and `Live Artifacts.md` index entries, a missing `renders: html` declaration, and, in a Capital, the exact `+/_ACQUIRED/README.md` scaffold. Prompt for missing Activity or Live Artifact frontmatter rather than guess it; offer `ki-skills` EDUCATE for a `slash-command` Activity whose skill is absent; ask before creating a missing source for an orphaned render or deleting it; and ask the user to regenerate stale renders.
6. Move Streams records only once the base owner has classified them under the [legacy migration](standard-streams-structure.md#45-legacy-migration) rules; never establish `Streams/Housekeeping/` or recreate Focus folders, and leave roadmap identity and `_ISSUES.md` to `ki-work-roadmap`. When ENACT-1 reports no anchor, add a line to the base's `AGENTS.md` naming its Enactment Process note and routing canonical changes through `ki-work`.
7. Apply the conform modes of the other applicable skills in sequence, then rerun [Mode AUDIT](mode-audit.md) until clean.
