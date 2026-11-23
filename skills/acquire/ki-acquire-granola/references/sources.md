---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:28:17Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Granola acquisition standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the Granola acquisition standard](standard-granola-acquisition.md) and the generated [rubric](rubric.md). The official MCP surface is volatile, so REFRESH re-reads it. `ki-acquire` owns the common contract and its own sources.

[Back to contents](#contents)

## 2. Outside sources

Granola's published documentation, and the client whose transport the standard relies on.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Granola MCP documentation][granola-mcp] | Official endpoint, OAuth, scopes, current tool descriptions | 2026-11-23 |
| [Shared-screen snapshots][granola-snapshots] | Source image capture and Images stack | 2026-11-23 |
| [Historical export][granola-export] | CSV export contents and limits | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [mcporter configuration][mcporter-config] | HTTP transport, OAuth credential boundary, schema and CLI access | 2026-11-23 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ACQUIRE-019 | The importer is ledger-free: Acquired membership alone skips a meeting, captures are found by UUID, `status`, `reconcile`, `reset` and `--refresh-transcripts` are gone, and the retirement standard is folded into the acquisition standard; tools-ki `26c754f3`. | 2026-10-20 | [1](standard-granola-acquisition.md#1-introduction), [4.5](standard-granola-acquisition.md#45-repeat-runs-and-amendments), [4.9](standard-granola-acquisition.md#49-source-retirement) | In force |
| GRANOLA-MOVE | A repository may declare `capture_moves` instead of `acquired_folder_id`, and the confirmed move adds Captured and reads it back before invoking `remove_note_from_folder` on Triaged and reading back again; tools-ki `e4fbd81c` and `d85feb4a`. | 2026-11-03 | [4.8](standard-granola-acquisition.md#48-triaged-to-captured-moves) | In force |
| ATER-027 | The how-to points at the assistant's, now the Inbox's, `ki-muninn` after tools-ki `4faf9724` removed `ki acquire`; the `ki-acquire-*` adapter front matter, which only tools-ki read, is removed, `capture_moves` is shown in `[muninn.granola]`, and repeat runs name the recent-changes window `ki-muninn` runs by default. | 2026-11-05 | [1](standard-granola-acquisition.md#1-introduction), [4.5](standard-granola-acquisition.md#45-repeat-runs-and-amendments), [4.8](standard-granola-acquisition.md#48-triaged-to-captured-moves) | In force |
| INBOX-RENAME | The assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`; Kris's word, from `personal.reg.inbox-terra`. | 2026-11-06 | [1](standard-granola-acquisition.md#1-introduction) | In force |
| ACQUIRE-FIXES | The skill "is repointed from the Inbox (`krisb/inbox`) to Harbour (`krisb/ki-cairn-harbour`)", the name the repository took under HARBOUR-RENAME, "is refreshed (its oldest source falls due on 27 November)", and "the Granola off-ramp naming Knowledge Islands Principal as owner of the acquisition lifecycle is corrected"; settled by Kitteth within remit, the Acquire guild's sitting in the Cairn summit's change 10. | 2026-11-22 | [1](standard-granola-acquisition.md#1-introduction), [2.2](standard-granola-acquisition.md#22-out-of-scope) | In force |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026, in the Cairn summit's change 10, step 6.3, under ACQUIRE-FIXES, recorded under [Decisions](#3-decisions): live wording naming the Inbox's muninn now names Harbour's (`krisb/ki-cairn-harbour`, `packages/ki-muninn/`) and its Granola operator guide, and the off-ramp and Out of scope no longer name Knowledge Islands Principal as owner of the lifecycle: `ki-acquire` owns the provider-neutral common contract, and the durable lifecycle is Knowledge Islands' Acquisition Process, which `ki-acquire` names. All four outside sources were re-read, and no rule changed:

- **MCP documentation.** The endpoint, `https://mcp.granola.ai/mcp`, and browser OAuth with dynamic client registration are unchanged. The scope is now named as the active workspace, one at a time, and its personal notes take in notes shared directly with the principal and notes in private folders shared with them; [4.1](standard-granola-acquisition.md#41-owned-notes-and-source-boundary) already excludes those. Twenty-one tools are documented: reads, among them `get_meeting_attachment` for shared-screen snapshots and `search_meetings` and `search_transcripts`; paid-plan organise and edit tools, among them `add_note_to_folder`, `remove_note_from_folder`, `update_summary` and `generate_summary`; and account tools, among them `switch_workspace` and `sign_out`. `list_meetings` is hidden from some named clients but still documented. The free plan reaches only the last 30 days and has no transcript or edit tools. Rate limits are now published: most tools allow 5 requests a second on paid plans.
- **Shared-screen snapshots.** Unchanged in substance: only screens others share, in the Images stack; the page names no MCP or API route, which the MCP page gives as `get_meeting_attachment`.
- **Historical export.** Still CSV only, emailed within a few hours, of owned notes with full history, excluding deleted notes and notes without a summary; one export a day, with the link lasting 24 hours.
- **mcporter configuration.** A configured server name is the OAuth trust boundary, and changing its URL wipes its tokens; credentials sit in a shared vault, `~/.mcporter/credentials.json` or under `$XDG_DATA_HOME`, with optional encryption; `allowedTools` and `blockedTools` can narrow what is advertised. None of this changes the credential boundary in [4.1](standard-granola-acquisition.md#41-owned-notes-and-source-boundary).

No live schema was inspected and no Granola tool was called. The local bridge's tool list advertises 23 tool names, two more than the documentation: `create_meeting_note_from_transcript` and `give_feedback`, both mutations that acquisition does not allowlist.

On 18 November 2026 the Acquire guild's review, in the Cairn summit's change 10, brought the skill's files into `ki-authoring`'s formats: the standard was renamed `standard-granola-acquisition.md` and given the standard format's sections, its rules moved unchanged under numbered subsections, and this file took the sources format, its named decisions gathered into [Decisions](#3-decisions). No rule changed and no outside source was refreshed.

On 6 November 2026, under INBOX-RENAME from `personal.reg.inbox-terra`, at Kris's word ("Do full rename to inbox now and coordinate that"), the assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`, its packages `personal.reg.inbox-terra` and `personal.reg.inbox-sol`, and its store `sources-inbox`. Live wording here follows; older lines below keep the names they had.

On 2026-11-05, under ATER-027, the how-to was pointed at the assistant's `ki-muninn` after tools-ki `4faf9724` removed `ki acquire`: the `ki-acquire-*` adapter front matter, which only tools-ki read, was removed, `capture_moves` is now shown in `[muninn.granola]`, and repeat runs name the recent-changes window `ki-muninn` runs by default. The provider method is otherwise unchanged; no external source was re-fetched and no live schema was inspected.

On 2026-11-03, the skill took up tools-ki `e4fbd81c` and `d85feb4a` (GRANOLA-MOVE): a repository may declare `capture_moves` instead of `acquired_folder_id`, and the confirmed move adds Captured and reads it back before invoking `remove_note_from_folder` on Triaged and reading back again. The removal tool was among the thirteen seen on 2026-10-16; no external source was re-fetched and no live schema was inspected for this change.

On 2026-10-20, the skill was cut to the ledger-free importer in tools-ki `26c754f3` (ACQUIRE-019): Acquired membership alone skips a meeting, captures are found by UUID, `status`, `reconcile`, `reset` and `--refresh-transcripts` are gone, and the retirement standard was folded into the acquisition standard. No external source was re-fetched; the MCP surface below stands as reviewed on 2026-10-16.

On 2026-10-16, official documentation confirmed owned/shared scopes, screenshot reads, and account tools. Separately authorised live schema inspection exposed thirteen tools, including additive/removal membership and folder administration. Structural reads verified owned-note filtering, paged folders and transcripts, listing screenshot counts, detail attachment UUIDs, and image-plus-metadata responses. A bounded authorised additive-marker spike preserved existing memberships. No documented release date establishes when these capabilities arrived. Acquisition allowlists reads; the separate confirmed marker permits only additive membership in an owner-controlled private folder. Screenshot evidence establishes exact returned MCP bytes, not byte equivalence with desktop originals. Retirement retains the independent export gate. Refresh must inspect only schemas and privacy-minimised structural evidence. Never retain account identifiers, meeting identifiers, notes, summaries, transcripts, credentials, or media in this skill.

**Watching**

- The MCP's advertised tools, thirteen when last inspected on 2026-10-16 and 23 names on the local bridge on 23 November 2026, and any change of shape in the reads acquisition allowlists.
- Whether `list_meetings`, hidden from some clients since the documentation of November 2026, stays available, since complete enumeration in [4.2](standard-granola-acquisition.md#42-complete-identity-enumeration) relies on its date-window listing.
- The current omissions, among them source URL, creation and update timestamps, tags, audio, content version and deletion tombstone, should the MCP come to return them.

[Back to contents](#contents)

[granola-mcp]: https://docs.granola.ai/help-center/sharing/integrations/mcp
[granola-snapshots]: https://docs.granola.ai/help-center/taking-notes/capture-shared-screens
[granola-export]: https://docs.granola.ai/help-center/sharing/exporting-notes
[mcporter-config]: https://github.com/openclaw/mcporter/blob/main/docs/config.md
