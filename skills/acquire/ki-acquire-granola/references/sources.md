---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the Granola acquisition standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the Granola acquisition standard](standard-granola-acquisition.md) and the generated [rubric](rubric.md). The official MCP surface is volatile, so REFRESH re-reads it. `ki-acquire` owns the common contract and its own sources.

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

## 3. Last review

The latest review, on 23 November 2026, re-read all four outside sources, and no rule changed. The MCP documentation keeps its endpoint and browser OAuth, and the personal notes it now names include notes shared directly with the principal, which [4.1](standard-granola-acquisition.md#41-owned-notes-and-source-boundary) already excludes; shared-screen snapshots and historical export are unchanged in substance; and nothing in the mcporter configuration changes the credential boundary in 4.1. No live schema was inspected and no Granola tool was called.

**Watching**

- The MCP's advertised tools: thirteen at the last live inspection, on 16 October 2026, and 23 names on the local bridge on 23 November 2026, two more than the documentation and both mutations acquisition does not allowlist; and any change of shape in the reads acquisition allowlists.
- Whether `list_meetings`, hidden from named clients in the documentation since November 2026, stays available, since complete enumeration in [4.2](standard-granola-acquisition.md#42-complete-identity-enumeration) relies on date-window listing.
- The current omissions, among them source URL, creation and update timestamps, tags, audio, content version and a deletion tombstone, should the MCP come to return them.

[Back to contents](#contents)

[granola-mcp]: https://docs.granola.ai/help-center/sharing/integrations/mcp
[granola-snapshots]: https://docs.granola.ai/help-center/taking-notes/capture-shared-screens
[granola-export]: https://docs.granola.ai/help-center/sharing/exporting-notes
[mcporter-config]: https://github.com/openclaw/mcporter/blob/main/docs/config.md
