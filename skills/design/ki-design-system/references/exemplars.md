---
ki-document-type: exemplars@2026-11-17T00:55:00Z
---

# Exemplars

These illustrate [the Design System standard](standard-design-system.md) but do not add requirements.

## The Cairn Wayfinder

[`apps-cairn.local`](https://github.com/knowledgeislands/apps-cairn.local/tree/7f58d7714d13563ec1e85d9217e42ad7cb5a219e) at `7f58d7714`, the Cairn's local app, is the exemplar. It declares `[skills.ki-design-system]` and passes every mechanical criterion, and its design knowledge sits in the homes the standard names:

- **Values** - `apps/wayfinder/src/renderer/styles/tokens.css` holds every colour, size, layer and motion value as a custom property, night the reference and day beside it, and says which names follow Tessera's and which are the Wayfinder's own.
- **How** - `docs/guides/developer/wayfinder-design.md` gives principles, colour, type, layout, components, state, interaction and accessibility, enhancement, words and a merge section, naming tokens rather than values.
- **The design system folder** - `docs/design/design-system/` holds the design book, six design documents with their pictures beside them, the components document, `wayfinder-components.design.md`, among them; the boards exported from the design canvas, named by level and kind, `ia-`, `mock-`, `atoms-` and the like; and the canvas's copy under `projections/canvas/`, whose `index.json` names its url, type, account and source revision. Its README names the guide, and the guide names the components document.
- **The component library** - `apps/wayfinder/src/renderer/components/` sorts the components into atoms, molecules, organisms and templates, with pages beside them, and the components document gives each one its signature, what it owns, what it does not own and its hand-offs.
- **Why** - each design document's Decisions section cites the decisions it rests on, each taken in a change document of the Cairn's work package; the repository keeps no decision records of its own yet.
- **Proof** - `apps/wayfinder/src/renderer/styles.test.ts` finds any literal colour, duration, layer or monospace in a sheet, and `apps/wayfinder/src/renderer/contrast.test.ts` measures text at 4.5:1 and marks at 3:1 in night and day, naming today's shortfalls rather than hiding them; each component's suite checks its roles, names and keys.
- **Design work** - the Wayfinder's pages were drawn at the three levels in design meetings, each level agreed before the next, and the agreed designs were built, consolidated into the guide, the tokens and the checks, and kept in the design book.

## A declaration

```toml
[skills.ki-design-system]
tokens = [
  "apps/wayfinder/src/renderer/styles/tokens.css",
]
guide = "docs/guides/developer/wayfinder-design.md"
checks = [
  "apps/wayfinder/src/renderer/styles.test.ts",
  "apps/wayfinder/src/renderer/contrast.test.ts",
]
```

## A state table in a guide

| State       | How it looks                         | Second carrier          |
| ----------- | ------------------------------------ | ----------------------- |
| Confirmed   | Solid fill                           | The status word         |
| Provisional | Hatched or outlined                  | The status word         |
| Past        | Marks stepped back, muted words      | "past" after the date   |
| Selected    | Foreground outline                   | `aria-expanded`         |
