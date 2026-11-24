---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources — where the acquisition standards come from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the common acquisition standard](standard-acquisition.md), [the agent-session acquisition standard](standard-agent-session-acquisition.md), [the Pulse standard](standard-pulse.md) and the generated [rubric](rubric.md). The skill is canonical: review it alongside material changes to the common capture contract. Mode REFRESH reads this file, compares the durable acquisition model and actual capture practice with the standards, and records what it checked in [Last review](#3-last-review). The `ki-acquire-chatgpt` and `ki-acquire-granola` standards own provider fidelity, capability limits and separately authorised mutations, and are reviewed with their own skills.

[Back to contents](#contents)

## 2. Outside sources

The Knowledge Islands model and the in-house repositories whose published text the standards follow.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ACQ-PROCESS — [Knowledge Islands Acquisition Process](https://github.com/knowledgeislands/ki-principal/blob/main/Pillars/Philosophy/Model/Processes/Acquisition%20Process/Acquisition%20Process.md) | The durable lifecycle of acquisition and its rationale | Not recorded |
| ACQUIRE — Acquire's README, AGENTS.md and CAPTURE.md, its intake work `personal.reg.assistant-terra`, formerly `personal.reg.acquire-intake`, and that package's design note `design/acquire-structure.md` | The port and staging model: the `captured/`, `context/` and `curated/<territory>/<island>/` layout, incremental curation, front-matter card origins, cross-territory copies, meetings as sources, lean captures, held historical captures and future ideas. Acquire's own text is the authority for them for now, and Acquire intake is the primary source for the acquisition structure | 2026-11-01 |
| MUNINN — Harbour's `ki-muninn` README, in krisb/ki-cairn-harbour | Executable Granola and ChatGPT acquisition, outside the backpack | 2026-11-05 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| TOOLS-KI — tools-ki commit `26c754f3`, and its acquisition specification | The Granola ledger's removal, and the capture as the only record | Not recorded |
| TOOLS-KI-ACQUIRE — tools-ki commit `4faf9724` | `ki acquire` removed from tools-ki on 5 November 2026, its acquisition moving to `ki-muninn` | 2026-11-05 |

[Back to contents](#contents)

## 3. Last review

On 23 November 2026 the latest review confirmed that the common acquisition standard, the agent-session acquisition standard, the Pulse standard and the rubric still follow the acquisition model and the in-house text behind them, with curation and dispatch homed in Harbour rather than here. The outside sources were last refreshed on 5 November 2026, when Harbour's `ki-muninn` README and the tools-ki commit that removed `ki acquire` were read; Acquire's own text was last compared with the standards on 1 November 2026.

**Watching:**

- `ki muninn`: tools-ki is to run Harbour's muninn as `ki muninn` once its `ki-<name>` extension mechanism, KI-TOOL-KI-CLI-176, lands; the provider skills' how-to pointers follow it then.

[Back to contents](#contents)
