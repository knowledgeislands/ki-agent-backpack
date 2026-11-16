# Role migration

This file holds the tolerance for the forms [the role standard](standard-roles.md) replaces, so that the standard describes only the final state, as Kris set under MIGRATION-OVERLAY on 7 November 2026. Each form below is read as shown and warned on, never failed. The standard wins wherever the two differ. Delete this file whole, with the checker's migration warnings, once every territory's governor has brought its packages into line.

| Old form | Read as | Where it is warned on |
| --- | --- | --- |
| `🧵 <work-id>` closing a session whose package names a role | The same session; it moves to `<role glyph> 🔑 <work-id>` at its next bootstrap | The footer hook passes it; reports are judged by `ki-coordination` |
| `_index.md` without `role` | The package's role not yet declared | RECORD-2 warns |
| `role: assistant` | gatekeeper | RECORD-2 warns |
| `role: keeper` | warden | RECORD-2 warns |
| `role: steward` | warden | RECORD-2 warns |
| `tier: enablers` | managers | RECORD-2 warns |
| `tier: doers` | makers | RECORD-2 warns |
| `uri` or `designation` in a `workers` entry | Dropped: a session address stays out of the package | RECORD-2 warns |
| `focus` in a `workers` entry | Dropped: a package has no focus areas | RECORD-2 warns |
| `listening` in a `workers` entry | Dropped: listening is read from the meetings a session sits in, and no roster file holds it either (LISTEN-HOME) | RECORD-2 warns |
| `name` or `actor` in a `workers` entry | `id: actor:<id>`, the holding actor's typed id; the entry passes ids, never copies (ACTOR-KEY) | RECORD-2 warns |
| `actor: <id>` or `titles` in a roster file | `id: actor:<id>` with `type: actor`; titles are read from the tree's `workers` entries (ACTOR-KEY) | No checker reads roster files; a reader takes the old keys as shown |
| A seat's id in the earlier `<work id>+<role>` form, the Cairn store's title, as `actor:ki.cairn+information-architect` | `<package>@<role>`, as `actor:ki.cairn@information-architect`, its roster file renamed to match; `+` now adds a strand (SEAT-AT) | RECORD-2 warns on a `workers` entry's `id`; no checker reads roster files or meetings |
| A thread line's seat in the earlier `<role glyph> <work-id>+<role>` form, as `📐 ki.cairn+architect` | `<role glyph> <package>@<role>`, as `📐 ki.cairn@architect` (SEAT-AT) | The footer hook warns |
| A sub-package's id in the earlier `<parent id>.<slug>` form | `<parent id>+<slug>`, the folder unchanged (SUMMIT-SUB-PACKAGES) | RECORD-1 warns |
| A package's id naming its kind, `<territory>.sop.<name>`, `<territory>.prj.<project>` or `<territory>.reg.<slug>`, or the legacy `regular` | `<territory>.<slug>`, its kind its `level`, the package renamed with its folder when it is next placed (NODE-ID) | RECORD-1 warns |
| `covers` in `_index.md` | Dropped: the tree beneath a node, read from `parent`, is its register (COVERS-REGISTER) | RECORD-2 warns |
| ⭐ or 🔧 in a glyph run, as in `🦉⭐ 🔑 personal.reg.inbox-terra` | The role glyph alone; neither is a role, and ⭐ and 🔧 leave the thread line under MARKS-RETIRE | The footer hook warns |
| `🧵 🔑 <work-id>` | `🧵 <work-id>`, or the role glyph's key form once the seat has a role | The footer hook warns |
