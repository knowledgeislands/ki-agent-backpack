import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { RecordContext, WorkPackageRubricContext } from '../contexts/work-package.ts'

const SOURCE = 'standard-work-package.md'

const RECORD_1: RubricItem<RecordContext> = {
  code: 'RECORD-1',
  title: 'package identity is chosen and consistent',
  description:
    "Each package folder is named by the work's dotted id, lower-case kebab segments joined by `.` with no mechanically recognisable opaque runtime-session identifier, and stands in the territory folder of the id's first segment; a node beneath a summit is `<territory>.<slug>`, an id still naming its kind, `sop`, `prj` or `reg`, warned on under the role migration file; a sub-package's id is `<parent id>+<slug>`, its folder named by the slug, the earlier `<parent id>.<slug>` warned on under the role migration file. The folder, the `id` field of `_index.md` and its H1 agree.",
  sources: [`${SOURCE}#42-location-and-identity`, `${SOURCE}#47-sub-packages`],
  mechanical: {
    level: 'FAIL',
    overrideLevels: ['WARN'],
    heuristic: true,
    remediation: {
      class: 'guarded',
      guidance: "Correct package identity only through an explicit rename the work's owner selects."
    },
    audit: { phase: 'INSPECT', run: (context) => context.identity }
  },
  judgment: {
    scope: 'Every package and sub-package folder, its id field and its H1.',
    prompt: 'Is each id a stable chosen lookup key rather than a vendor or runtime identifier?',
    outcomes: ['conforming', 'explicit rename required', 'escalate to user'],
    guidance: 'Keep the work id as the lookup key; do not derive or replace it from runtime metadata.'
  }
}

const RECORD_2: RubricItem<RecordContext> = {
  code: 'RECORD-2',
  title: 'the entry file uses the closed schema',
  description:
    "A package's `_index.md` declares id, level, description, worker, supervisor and `repositories`, a list that may be empty of repositories, each named `<territory folder>/<repository>`; project at project level and only there; level root on the root, `cairn.summit`, alone; parent on every package below the root, the root on a territory's summit, `<territory>.summit`, and a node of the same territory elsewhere, with no parent chain looping, the tree beneath a node being its register; on a sub-package, parent naming its parent package and its parent's level, or level regular beneath the root or a summit; its role, one role from the role standard's catalogue, its absence and the old words assistant, keeper and steward warned on under the role migration file; and at most the optional label, created_at and `records`, a list of full record ids, as `KI-HARNESS-GOV-152`, each a record the package works. Beside them stand the state fields: state and since; target in handoff and only there; hold with its reason, release and optional set_by, owner or worker, the worker setting only more-expected, on hold and only there; at most the optional blocking, received, beat, mark and method_read, each of its stated type, method_read a short backpack revision string or null; the thread capability fields, listening_enabled and syncing_enabled booleans, listening_status and syncing_status on or off, each status required while its capability is enabled, optional otherwise and on only while it is enabled, as ki-coordination sets them, and syncing_enabled true only where listening_enabled is true; and the optional `workers`, a list of live seats, each its binding: a mapping of `role`, one catalogue role, and `tier`, that role's catalogue tier, and at most `id`, the holding actor's typed id `actor:<id>`, an actor with no name taking its seat's id, `<package>@<role>`, and the earlier `<work id>+<role>` warned on, `since`, a UTC timestamp, and `status`, active, idle or vacant, a vacant seat carrying no id or since, checked against the catalogue table read at audit time, its presence left to the roster, and an entry's focus, uri, designation, listening, name or actor and the old tiers enablers and doers warned on under the role migration file, as is a leftover covers or theme. Nothing else stands in the front matter, and every field named here takes the `ki-` prefix, as `ki-id` and `ki-state`, the keys inside a `workers` entry or a hold keeping their names; a field written without the prefix is read as its `ki-` name and warned on until packages are swept. Its body is the id H1, then Goals, Scope, an optional one-line Values, Now, Held and Changes, each saying something, if only None; a Scope naming no Signposts is warned on.",
  sources: [`${SOURCE}#44-the-entry-file`, `${SOURCE}#45-the-state`, `${SOURCE}#47-sub-packages`],
  mechanical: {
    level: 'FAIL',
    overrideLevels: ['WARN'],
    remediation: {
      class: 'guarded',
      guidance: "Correct the entry file only through an explicit update by the package's keyholder."
    },
    audit: { phase: 'INSPECT', run: (context) => context.schema }
  },
  judgment: {
    scope: "Every package's and sub-package's entry file: its front matter, headings and sections.",
    prompt: 'Can the schema correction be made without inventing or discarding user-owned work state?',
    outcomes: ['conforming', 'explicit update required', 'escalate to user'],
    guidance: 'Ask the user to update uncertain authored content; the checker must not infer missing work state.'
  }
}

export const RECORD: RubricFamily<WorkPackageRubricContext, RecordContext> = {
  code: 'RECORD',
  title: 'Work-package record',
  description: 'Closed metadata and document shape make one work package portable and deterministically readable.',
  standard: SOURCE,
  selectContext: (context) => context.records,
  items: [RECORD_1, RECORD_2]
}
