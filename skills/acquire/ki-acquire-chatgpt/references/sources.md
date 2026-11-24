---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the ChatGPT acquisition standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the ChatGPT acquisition standard](standard-chatgpt-acquisition.md) and the generated [rubric](rubric.md). `ki-acquire` owns the common contract and its own sources.

REFRESH must inspect only privacy-minimised schemas and capability documentation. Never retain account identifiers, project identifiers, conversation identifiers, conversation text, files, credentials, or private URLs in this skill.

[Back to contents](#contents)

## 2. Outside sources

OpenAI's published documentation, and the in-house adapter whose evidence the standard bounds.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Projects in ChatGPT][chatgpt-projects] | Official project grouping, chats, files, and instructions | 2026-11-23 |
| [Exporting ChatGPT history and data][chatgpt-export] | Official readable export and its delivery boundary | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [ChatGPT housekeeping adapter][housekeeping-adapter] | Opaque local-store evidence, never conversation content | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read all three sources and changed no rule. Projects in ChatGPT still groups chats, files and instructions and offers no dedicated project export; the export page still gives delivery within seven days and a 24-hour link, and mentions neither projects nor an incremental or API export; and the housekeeping adapter stays read-only, treating local `*.data` records as opaque bytes.

**Watching**

- A supported incremental conversation-read interface, which would settle incremental readable acquisition, still an unresolved dependency.
- Whether an account export comes to expose complete project membership, write-ups, assets and stable project identifiers.
- The Enterprise and Edu Compliance API, which exposes project data but lies outside a personal account; relevant only if an organisation-managed workspace is acquired.
- The housekeeping adapter's README still routes staging to `ki acquire import`, which `tools-ki` has since removed; that is the adapter repository's own drift to fix, not this skill's.

[Back to contents](#contents)

[chatgpt-export]: https://help.openai.com/en/articles/7260999
[chatgpt-projects]: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
[housekeeping-adapter]: https://github.com/knowledgeislands/mcp-housekeeping-chatgpt
