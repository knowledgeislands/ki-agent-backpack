---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:10:23Z
ki-status: draft
---

# Product cards

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Where a product card sits](#41-where-a-product-card-sits)
  - [4.2 Front matter](#42-front-matter)
  - [4.3 Body](#43-body)
  - [4.4 Capabilities](#44-capabilities)
  - [4.5 Evidence and dates](#45-evidence-and-dates)

## 1. Introduction

The ecosystem map's knowledge base is one card per product in this skill's knowledge graph, beside the term cards, and the matrix, the crosswalk and the agenticecosystems.info site are generated from it (ECOSYSTEM-HOME b, ECOSYSTEM-SHAPE a). A product card says what one agentic product is and who makes it, what it can do against the graph's terms, how things stand with it on a given date, and where each fact came from, in a shape fixed enough for a generator to read. This standard sets that shape. It is a draft, written with the first product cards on 22 November 2026, for the owner's review in ki.summit's change 21. The decisions behind it are in [the sources](sources.md#3-decisions).

[Back to contents](#contents)

## 2. Scope

The shape of a product card.

### 2.1 In scope

- Where a product card sits and how it is named.
- Its front matter, its body and its capabilities table.
- How its facts are evidenced and dated.

[Back to contents](#contents)

### 2.2 Out of scope

- The card format every card shares, which `ki-knowledge-graph` owns, and the graph's card types and link vocabulary, which [the root definition](../knowledge/_graph.md) declares.
- A vendor's own words for a term, which stay on its vendor cards.
- Maturity, adoption and the house stance on a product, which `ki-radar` owns.
- The word for the parts a product plays and whether orchestration is one, open in change 21 as PRODUCT-ROLES, and how cards are kept current, open there as ECOSYSTEM-UPKEEP.
- The generator, the matrix, the crosswalk and the site.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Product card** | A card of type `product`: one agentic product, its maker, its capabilities, its state of play and its sources. **Standard:** this one, [4.1](#41-where-a-product-card-sits) |
| **Capability row** | One row of a product card's capabilities table: a term or specification card, a value from a closed list, a detail and its sources. **Standard:** this one, [4.4](#44-capabilities) |
| **State of play** | A product card's dated record of how things stand with the product, newest first. **Standard:** this one, [4.3](#43-body) |

The agentic terms themselves are the graph's industry, specification and system cards.

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Where a product card sits

1. **One card per product,** in the `products/` folder of `knowledge/`, its id `product.<slug>`, the slug the product's name in lower case with hyphens, such as `product.gemini-cli`. A product offered on several surfaces under one name, a terminal, a desktop app and a cloud, is one card; a product sold under its own name is a card of its own.
2. **A card describes, it never defines.** A product card links the term cards for what the product is and does, and never restates a term. Where the maker uses a word of its own for a term, that word belongs on a vendor card, which the product card links.
3. **New cards start as proposals,** `status: proposal`, until the owner has reviewed them.

[Back to contents](#contents)

### 4.2 Front matter

Beside the properties every card carries, a product card's front matter holds:

1. **`title`:** the product's name, with its maker in brackets, as a vendor card's title is, such as `Zed (Zed Industries)`.
2. **`vendor`:** its maker, as the maker names itself, such as `Zed Industries` or `Anysphere`.
3. **`reviewed`:** the date, `YYYY-MM-DD`, its facts were last checked against its sources.
4. **`links`,** keyed by card id, with the predicates [the root definition](../knowledge/_graph.md#link-vocabulary) declares:
   - `skos:broadMatch` to each industry term the product is an instance of, such as the [agent harness](../knowledge/industry/industry.agent-harness.md), the [agent host](../knowledge/industry/industry.agent-host.md) and the [client](../knowledge/industry/industry.client.md), a product being narrower than its term;
   - `dcterms:conformsTo` to each specification card it implements, by its sources and with a `yes` capability row, such as [MCP](../knowledge/specs/mcp/spec.mcp.md) or [ACP](../knowledge/specs/acp/spec.acp.md);
   - `skos:related` to each vendor card that holds the product's name, such as [Zed (Zed Industries)](../knowledge/vendors/zed/zed.zed.md).

[Back to contents](#contents)

### 4.3 Body

In this order:

1. **The title,** as `# <title>`.
2. **What it is,** in one paragraph, purpose first (PURPOSE-FIRST): what the product lets its users do, then what it is, who makes it, the surfaces it runs on and its licence, each fact cited.
3. **`## Contents`:** links to the three sections that follow.
4. **`## Capabilities`:** the capabilities table, [4.4](#44-capabilities).
5. **`## State of play`:** a list of dated items, newest first, each `- **YYYY-MM-DD:** <what happened>` with its sources. An item is added, never rewritten; one that stops being true is answered by a newer item.
6. **`## Sources`:** a table of the card's sources, `| Id | Source | Read |`, each id a reference link, `[S1]`, to the source's URL, the source named by its publisher and title, and the date it was read. The URLs are the card's link reference definitions, `[S1]: https://…`, after the table. A source with no URL, such as a command's help read on a rig, says so in its Source cell and has no link.

A product card's sources sit on the card, not in [the sources](sources.md), so nothing is kept twice; the sources file records the decisions and each review.

[Back to contents](#contents)

### 4.4 Capabilities

1. **The table's columns** are `| Term | Value | Detail | Sources |`. Term links the card the row is about; Value is one of the closed list below; Detail is one line in the product's own words where it has them; Sources cites the card's source ids, as `[S1]`.
2. **Values:**
   - `yes`: a source says the product does it, generally available;
   - `partial`: a source says it does it in preview, beta or experimentally, only in part, or only through a separate adapter, the Detail saying which;
   - `no`: a source says it does not;
   - `unknown`: no source read says either way. Absence from a vendor's documentation is `unknown`, never `no`.
3. **Every row, in this order,** so cards line up in the matrix:

| Row | Term card | Asks |
| --- | --- | --- |
| 1 | [Model](../knowledge/industry/industry.model.md) | Which models it runs: its maker's own, several providers', local models |
| 2 | [Session](../knowledge/industry/industry.session.md) | Whether its sessions persist and can be resumed |
| 3 | [Subagent](../knowledge/industry/industry.subagent.md) | Whether its agent starts subagents |
| 4 | [Agent team](../knowledge/industry/industry.agent-team.md) | Whether several sessions work together, messaging each other |
| 5 | [Skill](../knowledge/industry/industry.skill.md) | Whether it loads skills, folders holding a `SKILL.md`, the Detail saying whether its maker names the Agent Skills specification |
| 6 | [Instruction file](../knowledge/industry/industry.instruction-file.md) | Which instruction files it loads |
| 7 | [Plugin](../knowledge/industry/industry.plugin.md) | Whether it installs bundles that extend it |
| 8 | [MCP](../knowledge/specs/mcp/spec.mcp.md) | Whether it connects to MCP servers |
| 9 | [Execution environment](../knowledge/industry/industry.environment.md) | The isolation it offers, in `ki-environment`'s values where they fit: `none`, `harness-sandbox`, `container`, `vendor-sandbox` |
| 10 | [Client](../knowledge/industry/industry.client.md) | The windows onto its sessions it offers: terminal, editor, desktop, web, mobile |
| 11 | [Agent host](../knowledge/industry/industry.agent-host.md) | Whether it runs other makers' harnesses and owns their sessions |
| 12 | [Channel](../knowledge/industry/industry.channel.md) | Whether outside events can be pushed into a running session |
| 13 | [Cross-session messaging](../knowledge/industry/industry.cross-session-messaging.md) | Whether one of its sessions can message another |
| 14 | [ACP](../knowledge/specs/acp/spec.acp.md) | Whether it speaks the Agent Client Protocol, and as client or agent |
| 15 | [AHP](../knowledge/specs/ahp/spec.ahp.md) | Whether it speaks the Agent Host Protocol |
| 16 | [A2A](../knowledge/specs/a2a/spec.a2a.md) | Whether it speaks Agent2Agent |
| 17 | [Bot](../knowledge/system/system.bot.md) | Whether it keeps a durable, named agent with its own memory and processes, woken by schedules or events |

A new row is added here first, then to every card, `unknown` until checked.

[Back to contents](#contents)

### 4.5 Evidence and dates

1. **Every fact is sourced,** from a page read on the date the Sources table gives, the maker's own documentation, changelog, repository or announcement first. A card holds no fact from memory.
2. **The maker's claim, unless observed.** A fact read from the maker's own pages is the maker's claim. One the card's author saw for themselves, such as a command's help on a rig, says "observed" in its Detail or item.
3. **Nothing is invented.** Where no source settles a question, the card says `unknown`; a guess is never written as a fact.
4. **Dated,** by `reviewed` for the card and by each state-of-play item and source for its own fact. Re-checking a card updates `reviewed`, the Read dates of the sources re-read, and any value that changed, with a state-of-play item saying so.

[Back to contents](#contents)
