---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:47:13Z
ki-status: in force
---

# Principal Knowledge Base standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Required principal surface](#41-required-principal-surface)
  - [4.2 Acquired-packet scaffold](#42-acquired-packet-scaffold)
  - [4.3 Territorial declaration](#43-territorial-declaration)
  - [4.4 Known Lands relationships](#44-known-lands-relationships)
  - [4.5 Boundary](#45-boundary)

## 1. Introduction

This overlay provides a visible governance system for a Knowledge Base designated as its territory's principal island, holding the Capital role. It composes the normal Knowledge Islands zone model and Decision Records, and reviews the territorial declaration. Adoption of the overlay or a passing audit does not appoint a principal or grant jurisdiction.

The sources behind it, and the acquired-scaffold rollout evidence, are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The governance overlay of a territory's principal island.

### 2.1 In scope

- The principal's required governance surface and its always-loaded Enactment gate.
- The acquired-packet scaffold this overlay owns.
- The territorial declaration in the Charter and Known Lands.
- How Known Lands keeps internal inventory and external signposting apart.

[Back to contents](#contents)

### 2.2 Out of scope

- The zone model and Decision Records the overlay composes: `ki-repo-kb` and `ki-decision-records`.
- Triage of delivered packets: `ki-repo-kb`; their delivery: Acquire.
- What [4.5](#45-boundary) leaves to local governance.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Principal island** | The one Knowledge Base of a territory that holds its Capital role. **Standard:** this one, [4.3](#43-territorial-declaration) |
| **Acquired-packet scaffold** | The byte-exact `+/_ACQUIRED/README.md` a declared principal carries from this skill's template. **Standard:** this one, [4.2](#42-acquired-packet-scaffold) |
| **Known Lands** | The principal's note that distinguishes the territory's governed internal inventory from external lands known to this island. **Standard:** this one, [4.4](#44-known-lands-relationships) |
| **External signposting** | A description of this island's relationship to another authority, citing it without claiming jurisdiction over it. **Standard:** this one, [4.4](#44-known-lands-relationships) |

[Back to contents](#contents)

## 4. Rules

The required surface, the acquired-packet scaffold, the territorial declaration, Known Lands relationships and the overlay's boundary.

### 4.1 Required principal surface

- `Admin/MEMORY.md` is the root memory anchor.
- `Admin/Governance/Charter.md` states the base's scope, stewardship, territory, Capital, and authority boundary.
- `Admin/Governance/Known Lands.md` distinguishes the territory's governed internal inventory from external lands known to this island.
- `Admin/Governance/Conventions/Conventions.md` points to the local authoring and classification conventions.
- `Admin/Operations/Processes/Enactment Process.md` defines the route from Stream proposal to canonical content.

The repository's always-loaded orientation anchors the Enactment gate: substantive changes to `Admin/`, `Pillars/`, and `Resources/` proceed through an approved Stream proposal. Calendar entries and inbound triage remain lightweight exceptions.

[Back to contents](#contents)

### 4.2 Acquired-packet scaffold

While `ki-repo-kb-principal` is declared, the principal must carry the byte-exact `+/_ACQUIRED/README.md` from this skill's `assets/templates/acquired/README.md`. This overlay owns that scaffold; it is not required for ordinary knowledge bases. The literal path is independent of any base zone alias. Dropping the declaration ends this overlay's requirement without authorising removal of the README or packets.

AUDIT fails when the README is missing, differs from the template, or has an unsafe path. CONFORM proposes only that README: it creates a missing scaffold or restores a drifted regular file. Every existing ancestor must be a real directory and the leaf must be a regular file; symlinks, dangling symlinks and other file types fail without a repair proposal. Publication and concurrent-change protection belong to the host. Neither mode reads or changes packet contents, invents a dispatch record, or grants dispatch authority.

Acquire alone delivers packets: each delivery is a folder holding one whole capture package or a roll-up of whole packages, preserving original names and bytes without a manifest, dispatch ID or ledger. Delivery is acceptance. The receiver triages their local packets under `ki-repo-kb`; the scaffold does not authorise canonical adoption or change selection. There is no return route or return marker, and the receiver writes nothing into the port.

Publishing this overlay does not conform its receivers. The [rollout evidence](sources.md#4-last-review) distinguishes accepted reusable delivery from receiver-owned applications; audit each declared principal under its own authority before claiming it conformed. The scaffold is not a dispatch precondition.

[Back to contents](#contents)

### 4.3 Territorial declaration

Each territory has exactly one principal island holding its Capital role. The Charter identifies that territory and the Capital's canonical repository identity. Known Lands identifies internal members by canonical repository identity, such as `owner/repo`, and states their governed relationship. The two declarations must agree; discrepancies remain visible for the territorial owner to resolve.

Territory membership establishes shared governance without removing repository-specific audiences, access controls, canonical acceptance, or release boundaries. A repository's structure or subject expertise does not appoint it as a Capital. Local registry entries resolve checkouts and source-store locations; Territory-derived repository selection identifies a governed set and company bindings describe coordination. None independently establishes territorial membership or exchange permission.

[Back to contents](#contents)

### 4.4 Known Lands relationships

The Capital's internal inventory is authoritative for its territory. External signposting describes this island's relationship to another authority, citing that authority without claiming jurisdiction over it. Keep the two relationships distinguishable through sections or explicit relationship labels; Markdown tables with canonical repository identities are sufficient. Checkout and source-store locations remain in the local registry rather than the portable inventory. Local unavailability does not remove an island from the governed inventory.

Any island may maintain a narrower Known Lands chart for topics, queries, captures, or work. Principal status is not required for signposting. A receiver may privately declare consumption or adoption of public knowledge without the publishing territory maintaining a reciprocal consumer list. The receiver chooses canonical adoption and updates; contribution back to the publisher follows its separate intake and acceptance rules. Restricted exchange requires the participating owners' explicit rules; shared territory, person, company, checkout, or repository selection alone does not grant permission.

[Back to contents](#contents)

### 4.5 Boundary

The contract does not prescribe an island's name, language, integrations, pillar taxonomy, external-source classification, metadata keys, or a machine-readable territorial schema. Actual identities, membership, and authority remain locally governed content. A bootstrap preserves existing material and records a proposal to migrate it; it never silently relocates content into a canonical zone.

[Back to contents](#contents)
