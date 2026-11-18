---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:26:43Z
ki-refresh: external-spec · quarterly
---

# Sources — where the ChatGPT acquisition standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources and decisions behind [the ChatGPT acquisition standard](standard-chatgpt-acquisition.md) and the generated [rubric](rubric.md). `ki-acquire` owns the common contract and its own sources.

REFRESH must inspect only privacy-minimised schemas and capability documentation. Never retain account identifiers, project identifiers, conversation identifiers, conversation text, files, credentials, or private URLs in this skill.

[Back to contents](#contents)

## 2. Outside sources

OpenAI's published documentation, and the in-house adapter whose evidence the standard bounds.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Projects in ChatGPT][chatgpt-projects] | Official project grouping, chats, files, and instructions | 2026-09-20 |
| [Exporting ChatGPT history and data][chatgpt-export] | Official readable export and its delivery boundary | 2026-09-22 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| [ChatGPT housekeeping adapter][housekeeping-adapter] | Opaque local-store evidence, never conversation content | 2026-09-20 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ATER-027 | The executable bridge is the assistant's, now the Inbox's, `ki-muninn chatgpt import` and `export`, after tools-ki `4faf9724` removed `ki acquire`; the `ki-acquire-*` adapter front matter, which only tools-ki read, is removed. | 2026-11-05 | [4.1](standard-chatgpt-acquisition.md#41-readable-source) | In force |
| INBOX-RENAME | The assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`; Kris's word, from `personal.reg.inbox-terra`. | 2026-11-06 | [4.1](standard-chatgpt-acquisition.md#41-readable-source) | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Acquire guild's review, in the Cairn summit's change 10, brought the skill's files into `ki-authoring`'s formats: the standard was renamed `standard-chatgpt-acquisition.md` and given the standard format's sections, its rules moved unchanged under numbered subsections, and this file took the sources format, its named decisions gathered into [Decisions](#3-decisions). No rule changed and no outside source was refreshed.

On 6 November 2026, under INBOX-RENAME from `personal.reg.inbox-terra`, at Kris's word ("Do full rename to inbox now and coordinate that"), the assistant repository became the Inbox: `krisb/assistant` is now `krisb/inbox`, its packages `personal.reg.inbox-terra` and `personal.reg.inbox-sol`, and its store `sources-inbox`. Live wording here follows; older lines below keep the names they had.

On 2026-11-05, under ATER-027, the executable bridge was pointed at the assistant's `ki-muninn chatgpt import` and `export` after tools-ki `4faf9724` removed `ki acquire`, and the `ki-acquire-*` adapter front matter, which only tools-ki read, was removed. The provider method is unchanged; no external source was re-fetched.

On 2026-10-20, the skill was cut to the owner's simplified capture model: the end point lives in the digest's README front matter, with no `capture-mark.json`, checkpoint or intake receipt, and the incremental project-acquisition design and opaque-store pairing were removed. No external source was re-fetched; the entries below stand as reviewed on 2026-09-22.

On 2026-09-22, official ChatGPT documentation confirmed that an eligible signed-in account can request an export whose ZIP includes chat history and other account data. Delivery may take up to seven days and the download link expires after 24 hours. The documentation does not establish a supported incremental conversation-read interface or guarantee that the archive exposes complete project membership, write-ups, assets, and stable project identifiers. The acquisition standard therefore selects the export as an authorised bootstrap snapshot while retaining the local store as content-minimised evidence, prepared capture as the bounded executable bridge, and incremental readable acquisition as an unresolved dependency.

**Watching**

- A supported incremental conversation-read interface, which would settle incremental readable acquisition, still an unresolved dependency.
- Whether an account export comes to expose complete project membership, write-ups, assets and stable project identifiers.

[Back to contents](#contents)

[chatgpt-export]: https://help.openai.com/en/articles/7260999
[chatgpt-projects]: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
[housekeeping-adapter]: https://github.com/knowledgeislands/mcp-housekeeping-chatgpt
