import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { AuditOutcome, RubricItem } from '../../shared/rubric.ts'
import { BOUNDARY } from '../items/boundary.ts'
import { CONFIG } from '../items/configuration.ts'
import { FOLDER } from '../items/folder.ts'
import { LIFECYCLE } from '../items/lifecycle.ts'
import { RECORD } from '../items/records.ts'
import { STRUCTURE } from '../items/structure.ts'
import { createWorkPackageSession, roleCatalogue, type WorkPackageRubricContext } from './work-package.ts'

const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const fixture = (): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-work-package-'))
  roots.push(root)
  return root
}

const write = (root: string, path: string, text: string): void => {
  const file = join(root, path)
  mkdirSync(join(file, '..'), { recursive: true })
  writeFileSync(file, text)
}

type Entry = {
  readonly id: string
  readonly fields?: readonly string[]
  readonly drop?: readonly string[]
  readonly body?: string
  readonly changes?: readonly string[]
  /** Write the fields without the `ki-` prefix, as packages written before KI-PREFIX do. */
  readonly bare?: boolean
}

const BASE_FIELDS = (id: string): Record<string, string> => ({
  id: `id: ${id}`,
  parent: 'parent: ki.summit',
  level: 'level: regular',
  description: 'description: Pilots the package shape. Takes pilot units. Not for other work.',
  worker: 'worker: agent',
  supervisor: 'supervisor: owner',
  role: 'role: warden',
  created_at: 'created_at: 2026-11-01T10:00:00Z',
  repositories: 'repositories:\n  - ki-agent-backpack',
  state: 'state: with-worker',
  since: 'since: 2026-11-09T10:00:00Z'
})

/** A field line with its top-level key given the `ki-` prefix, as every entry file field takes (KI-PREFIX a). */
const prefixed = (line: string): string => line.replace(/^(?!ki-)([a-z_]+):/, 'ki-$1:')

/**
 * An entry file: the base fields less `drop`, plus `fields`, each top-level key given the `ki-` prefix unless `bare`,
 * then the standard body.
 */
const entry = ({ id, fields = [], drop = [], body, changes = ['10-pilot.change.md'], bare = false }: Entry): string => {
  const base = Object.entries(BASE_FIELDS(id))
    .filter(([key]) => !drop.includes(key))
    .map(([, line]) => (bare ? line : prefixed(line)))
  const links = changes.length > 0 ? changes.map((target) => `- [${target}](${target}) - in hand.`).join('\n') : 'None'
  return [
    '---',
    ...base,
    ...fields.map((line) => (bare ? line : prefixed(line))),
    '---',
    '',
    body ??
      [
        `# ${id}`,
        '',
        '## Goals',
        '',
        'Pilot the shape.',
        '',
        '## Scope',
        '',
        'In: the pilot. Out: everything else. Works mainly in ki-agent-backpack and may change others.',
        '',
        "Signposts: the standard's defaults.",
        '',
        '## Now',
        '',
        '- The pilot runs.',
        '',
        '## Held',
        '',
        'None',
        '',
        '## Changes',
        '',
        links,
        ''
      ].join('\n')
  ].join('\n')
}

const MAIN = entry({
  id: 'ki.summit',
  drop: ['parent'],
  fields: ['parent: cairn.summit'],
  changes: []
}).replace('level: regular', 'level: territory')

/** A store with the territory's summit and one regular package, `ki.pilot`, each passing. */
const store = (pilot: Partial<Entry> = {}): string => {
  const root = fixture()
  write(root, 'work/ki/ki.summit/_index.md', MAIN)
  write(root, 'work/ki/ki.pilot/_index.md', entry({ id: 'ki.pilot', ...pilot }))
  write(root, 'work/ki/ki.pilot/10-pilot.change.md', '# Pilot\n')
  return root
}

const context = (
  root: string,
  configuration: Readonly<Record<string, unknown>> | null = {}
): WorkPackageRubricContext => {
  const session = createWorkPackageSession({
    mode: 'audit',
    repository: root,
    userHome: tmpdir(),
    configuration: configuration as Readonly<Record<string, unknown>>
  })
  const found = session.subjects[0]?.context()
  if (!found) throw new Error('ki-work-package session did not expose its subject')
  return found as WorkPackageRubricContext
}

const run = <Context>(
  family: { items: readonly RubricItem<Context>[]; selectContext: (root: WorkPackageRubricContext) => Context },
  code: string,
  root: WorkPackageRubricContext
): readonly AuditOutcome[] => {
  const item = family.items.find((candidate) => candidate.code === code)
  if (!item?.mechanical) throw new Error(`${code} mechanical item is missing`)
  return item.mechanical.audit.run(family.selectContext(root))
}

const statuses = (outcomes: readonly AuditOutcome[]): string[] =>
  outcomes.map((outcome) => (outcome.status === 'VIOLATION' ? (outcome.level ?? 'VIOLATION') : outcome.status))

const messages = (outcomes: readonly AuditOutcome[]): string => outcomes.map((outcome) => outcome.message).join('\n')

describe('a store in the standard shape', () => {
  test('passes every mechanical item', () => {
    const found = context(store())
    for (const [family, codes] of [
      [CONFIG, ['CONFIG-1']],
      [STRUCTURE, ['STRUCTURE-1', 'STRUCTURE-2']],
      [RECORD, ['RECORD-1', 'RECORD-2']],
      [LIFECYCLE, ['LIFECYCLE-1', 'LIFECYCLE-3']],
      [FOLDER, ['FOLDER-1', 'FOLDER-4', 'FOLDER-8']],
      [BOUNDARY, ['BOUNDARY-1']]
    ] as const)
      for (const code of codes)
        expect({ code, outcomes: statuses(run(family as never, code, found)) }).toEqual({ code, outcomes: ['PASS'] })
  })

  test('an optional one-line Values after Scope is admitted', () => {
    const root = store()
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({ id: 'ki.pilot' }).replace('## Now', '## Values\n\nThe shared values.\n\n## Now')
    )
    expect(statuses(run(RECORD, 'RECORD-2', context(root)))).toEqual(['PASS'])
  })

  test('a Scope with no Signposts line is warned on, never failed', () => {
    const root = store()
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({ id: 'ki.pilot' }).replace("Signposts: the standard's defaults.\n\n", '')
    )
    const outcomes = run(RECORD, 'RECORD-2', context(root))
    expect(statuses(outcomes)).toEqual(['WARN'])
    expect(messages(outcomes)).toContain('names no Signposts')
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({ id: 'ki.pilot' }).replace("Signposts: the standard's defaults.", '**Signposts:** the defaults, and one.')
    )
    expect(statuses(run(RECORD, 'RECORD-2', context(root)))).toEqual(['PASS'])
  })

  test('fields written without the ki- prefix are read as their ki- names and warned on, never failed', () => {
    const root = store()
    write(root, 'work/ki/ki.pilot/_index.md', entry({ id: 'ki.pilot', bare: true }))
    const outcomes = run(RECORD, 'RECORD-2', context(root))
    expect(statuses(outcomes)).toEqual(['WARN'])
    expect(messages(outcomes)).toContain('writes id, parent, level')
    expect(messages(outcomes)).toContain('read as ki-id, ki-parent, ki-level')
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({ id: 'ki.pilot', bare: true, drop: ['since'], fields: ['ki-since: 2026-11-09T10:00:00Z'] })
    )
    expect(messages(run(RECORD, 'RECORD-2', context(root)))).not.toContain('since')
  })

  test('a repository without `work/` is not applicable, and an undeclared one is never read', () => {
    const empty = fixture()
    expect(statuses(run(STRUCTURE, 'STRUCTURE-1', context(empty)))).toEqual(['NOT_APPLICABLE'])
    expect(statuses(run(FOLDER, 'FOLDER-1', context(empty)))).toEqual(['NOT_APPLICABLE'])
    const undeclared = context(store(), null)
    expect(statuses(run(RECORD, 'RECORD-2', undeclared))).toEqual(['NOT_APPLICABLE'])
    expect(statuses(run(STRUCTURE, 'STRUCTURE-2', undeclared))).toEqual(['NOT_APPLICABLE'])
  })

  test('configuration options warn', () => {
    expect(statuses(run(CONFIG, 'CONFIG-1', context(store(), { retention: 3 })))).toEqual(['WARN'])
  })

  test('the session proposes no writes', () => {
    const session = createWorkPackageSession({
      mode: 'conform',
      repository: store(),
      userHome: tmpdir(),
      configuration: {}
    })
    expect(session.proposal()).toEqual({ writes: [] })
  })
})

describe('STRUCTURE', () => {
  test('`work/` holds only territory folders of packages with their entry file', () => {
    const root = store()
    write(root, 'work/notes.md', '# Notes\n')
    mkdirSync(join(root, 'work', 'empty'))
    mkdirSync(join(root, 'work', 'ki', 'no-entry'))
    write(root, 'work/ki/loose.md', '# Loose\n')
    const outcomes = run(STRUCTURE, 'STRUCTURE-1', context(root))
    expect(outcomes.map((outcome) => outcome.subject)).toEqual([
      'work/empty',
      'work/ki/loose.md',
      'work/ki/no-entry',
      'work/notes.md'
    ])
  })

  test('a symlinked package folder fails', () => {
    const root = store()
    symlinkSync(join(root, 'work', 'ki', 'ki.pilot'), join(root, 'work', 'ki', 'ki.alias'))
    expect(run(STRUCTURE, 'STRUCTURE-1', context(root)).map((outcome) => outcome.subject)).toEqual(['work/ki/ki.alias'])
  })

  test('each earlier copy in a retired working area is listed and warned', () => {
    const root = store()
    for (const area of ['_WORK', '_THREADS']) write(root, `+/${area}/ki.pilot/_index.md`, '# old\n')
    const outcomes = run(STRUCTURE, 'STRUCTURE-2', context(root))
    expect(outcomes.map((outcome) => outcome.subject)).toEqual(['+/_WORK', '+/_THREADS'])
    expect(STRUCTURE.items.find((item) => item.code === 'STRUCTURE-2')?.mechanical?.level).toBe('WARN')
  })

  test('earlier copies are listed in a declaring repository without `work/`', () => {
    const root = fixture()
    write(root, '+/_CHECKPOINTS/README.md', '# Checkpoints\n')
    expect(run(STRUCTURE, 'STRUCTURE-2', context(root)).map((outcome) => outcome.subject)).toEqual(['+/_CHECKPOINTS'])
  })
})

describe('RECORD-1 identity', () => {
  test('the id, folder and H1 agree, and the territory folder is the first segment', () => {
    const root = store({ fields: [] })
    write(root, 'work/ki/ki.pilot/_index.md', entry({ id: 'ki.pilot' }).replace('id: ki.pilot', 'id: ki.other'))
    write(root, 'work/hnr/ki.stray/_index.md', entry({ id: 'ki.stray' }))
    write(root, 'work/hnr/ki.stray/10-pilot.change.md', '# Pilot\n')
    const text = messages(run(RECORD, 'RECORD-1', context(root)))
    expect(text).toContain('id must exactly match the package folder name')
    expect(text).toContain('territory folder of its id')
  })

  test('an opaque session name fails', () => {
    const root = store()
    const id = 'session-abcdef123456789'
    write(root, `work/ki/${id}/_index.md`, entry({ id }))
    write(root, `work/ki/${id}/10-pilot.change.md`, '# Pilot\n')
    expect(messages(run(RECORD, 'RECORD-1', context(root)))).toContain('dotted id')
  })

  test('a sub-package is `<parent id>+<slug>`', () => {
    const root = store({ changes: ['10-pilot.change.md', 'viewer/'] })
    write(
      root,
      'work/ki/ki.pilot/viewer/_index.md',
      entry({ id: 'ki.pilot+viewer', drop: ['parent'], fields: ['parent: ki.pilot'] })
    )
    write(root, 'work/ki/ki.pilot/viewer/10-pilot.change.md', '# Viewer\n')
    expect(statuses(run(RECORD, 'RECORD-1', context(root)))).toEqual(['PASS'])
    expect(statuses(run(RECORD, 'RECORD-2', context(root)))).toEqual(['PASS'])
    write(
      root,
      'work/ki/ki.pilot/viewer/_index.md',
      entry({ id: 'ki.viewer', drop: ['parent'], fields: ['parent: ki.pilot'] })
    )
    expect(messages(run(RECORD, 'RECORD-1', context(root)))).toContain('id must be ki.pilot+viewer')
  })

  test('the earlier `<parent id>.<slug>` sub-package id warns under the role migration file', () => {
    const root = store({ changes: ['10-pilot.change.md', 'viewer/'] })
    write(
      root,
      'work/ki/ki.pilot/viewer/_index.md',
      entry({ id: 'ki.pilot.viewer', drop: ['parent'], fields: ['parent: ki.pilot'] })
    )
    write(root, 'work/ki/ki.pilot/viewer/10-pilot.change.md', '# Viewer\n')
    const outcomes = run(RECORD, 'RECORD-1', context(root))
    expect(statuses(outcomes)).toEqual(['WARN'])
    expect(messages(outcomes)).toContain('migration-roles.md')
    expect(statuses(run(RECORD, 'RECORD-2', context(root)))).toEqual(['PASS'])
  })

  test('an id still naming its kind, sop, prj or reg, warns under the role migration file (NODE-ID)', () => {
    for (const id of ['ki.sop.tools', 'ki.prj.observatory', 'ki.reg.guilds']) {
      const root = fixture()
      write(root, 'work/ki/ki.summit/_index.md', MAIN)
      write(root, `work/ki/${id}/_index.md`, entry({ id }))
      write(root, `work/ki/${id}/10-pilot.change.md`, '# Pilot\n')
      const outcomes = run(RECORD, 'RECORD-1', context(root))
      expect(statuses(outcomes)).toEqual(['WARN'])
      expect(messages(outcomes)).toContain('<territory>.<slug>')
    }
  })
})

describe('RECORD-2 schema', () => {
  const failing: readonly [string, Partial<Entry>, string][] = [
    ['a missing repositories', { drop: ['repositories'] }, 'missing: ki-repositories'],
    [
      'repositories that is not a list',
      { drop: ['repositories'], fields: ['repositories: harness'] },
      'repositories must be a list'
    ],
    [
      'records that is not a list',
      { fields: ['records: KI-HARNESS-GOV-152'] },
      'records must be a list of full record ids'
    ],
    [
      'a record named by its repository and id',
      { fields: ['records:\n  - KI-HARNESS-GOV-152\n  - ki/tools-ki#KI-TOOL-KI-CLI-127'] },
      'records must be a list of full record ids'
    ],
    ['a retired state.md field kept elsewhere', { fields: ['focus: pilot'] }, 'outside it: ki-focus'],
    ['an unknown state', { drop: ['state'], fields: ['state: done'] }, 'state must be one of'],
    ['a target outside handoff', { fields: ['target: owner'] }, 'target names a holder'],
    ['a hold outside on-hold', { fields: ['hold:\n  reason: paused\n  release: later'] }, 'hold carries reason'],
    [
      'a worker setting a paused hold',
      {
        drop: ['state'],
        fields: ['state: on-hold', 'hold:\n  reason: paused\n  release: later\n  set_by: worker']
      },
      'hold carries reason'
    ],
    ['a status on without its capability', { fields: ['listening_status: on'] }, 'listening_status is on only while'],

    ['a status outside on and off', { fields: ['listening_status: armed'] }, 'listening_status is on or off'],

    [
      'an enabled capability with no status',
      { fields: ['listening_enabled: true'] },
      'required while listening_enabled'
    ],
    [
      'syncing without listening',
      {
        fields: ['syncing_enabled: true', 'syncing_status: on']
      },
      'a syncing thread is always a listening thread'
    ],
    ['a bad method_read', { fields: ['method_read: latest'] }, 'method_read must be'],
    ['a project field below project level', { fields: ['project: pilot'] }, 'project names the Project slug'],
    ['a non-catalogue role', { drop: ['role'], fields: ['role: wizard'] }, 'role must be one catalogue role'],
    [
      'a worker tier not its role',
      {
        fields: ['workers:\n  - role: housekeeper\n    tier: leaders']
      },
      'tier must be managers'
    ],
    [
      'a worker key outside the closed set',
      {
        fields: ['workers:\n  - role: warden\n    tier: managers\n    host: orca']
      },
      'outside id, role, tier, since and status'
    ],
    [
      'a parent outside the territory',
      { drop: ['parent'], fields: ['parent: hnr.summit'] },
      'parent must name a different node of the same territory'
    ]
  ]
  for (const [name, change, expected] of failing)
    test(`${name} fails`, () => {
      const outcomes = run(RECORD, 'RECORD-2', context(store(change)))
      expect(statuses(outcomes)).toContain('VIOLATION')
      expect(messages(outcomes)).toContain(expected)
    })

  test('a list of full record ids passes (RECORD-LINKS)', () => {
    const outcomes = run(RECORD, 'RECORD-2', context(store({ fields: ['records:\n  - KI-HARNESS-GOV-152'] })))
    expect(statuses(outcomes)).toEqual(['PASS'])
  })

  test('the four capability fields, off and not enabled, pass as ki-coordination records them', () => {
    const fields = [
      'listening_enabled: false',
      'listening_status: off',
      'syncing_enabled: false',
      'syncing_status: off'
    ]
    const outcomes = run(RECORD, 'RECORD-2', context(store({ fields })))
    expect(statuses(outcomes)).toEqual(['PASS'])
  })

  test('the old body sections fail', () => {
    const root = store()
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({
        id: 'ki.pilot',
        body: '# ki.pilot\n\n## Goals\n\nPilot.\n\n## Scope\n\nIn: all.\n\n## Focus\n\n- `pilot`\n'
      })
    )
    expect(messages(run(RECORD, 'RECORD-2', context(root)))).toContain(
      'then Goals, Scope, an optional Values, Now, Held and Changes'
    )
  })

  test('an empty section fails', () => {
    const root = store()
    write(root, 'work/ki/ki.pilot/_index.md', entry({ id: 'ki.pilot' }).replace('None\n', '\n'))
    expect(messages(run(RECORD, 'RECORD-2', context(root)))).toContain('Held must say something')
  })

  test('the tree is rooted at cairn.summit, each summit under it, and any node may split', () => {
    const root = store()
    write(
      root,
      'work/cairn/cairn.summit/_index.md',
      entry({ id: 'cairn.summit', drop: ['parent'], changes: [] })
        .replace('level: regular', 'level: root')
        .replace('role: warden', 'role: guardian')
    )
    write(
      root,
      'work/ki/ki.pilot-part/_index.md',
      entry({ id: 'ki.pilot-part', drop: ['parent'], fields: ['parent: ki.pilot'] })
    )
    write(root, 'work/ki/ki.pilot-part/10-pilot.change.md', '# Part\n')
    expect(statuses(run(RECORD, 'RECORD-2', context(root)))).toEqual(['PASS'])
  })

  const misplaced: readonly [string, string, string, string][] = [
    [
      'the old main State of play',
      'ki.sop.main',
      MAIN.replace('id: ki.summit', 'id: ki.sop.main').replace('# ki.summit', '# ki.sop.main'),
      'territory work id must be its summit'
    ],
    [
      'a summit naming another parent',
      'ki.summit',
      MAIN.replace('parent: cairn.summit', 'parent: hnr.summit'),
      "a territory's summit names the root, cairn.summit, as parent"
    ],
    [
      'level root away from the root',
      'ki.summit',
      MAIN.replace('level: territory', 'level: root'),
      'level root belongs to the root, cairn.summit, and only to it'
    ]
  ]
  for (const [name, id, text, expected] of misplaced)
    test(`${name} fails`, () => {
      const root = store()
      rmSync(join(root, 'work/ki/ki.summit'), { recursive: true })
      write(root, `work/ki/${id}/_index.md`, text)
      expect(messages(run(RECORD, 'RECORD-2', context(root)))).toContain(expected)
    })

  const ROOT = entry({ id: 'cairn.summit', drop: ['parent'], changes: [] })
    .replace('level: regular', 'level: root')
    .replace('role: warden', 'role: guardian')
  const misrooted: readonly [string, string, string][] = [
    ['a root with a parent', ROOT.replace('level: root', 'level: root\nparent: ki.summit'), 'carries no parent'],
    ['the root at another level', ROOT.replace('level: root', 'level: territory'), 'level root belongs to the root']
  ]
  for (const [name, text, expected] of misrooted)
    test(`${name} fails`, () => {
      const root = store()
      write(root, 'work/cairn/cairn.summit/_index.md', text)
      expect(messages(run(RECORD, 'RECORD-2', context(root)))).toContain(expected)
    })

  test('a parent chain that loops fails', () => {
    const root = store({ drop: ['parent'], fields: ['parent: ki.pilot-part'] })
    write(
      root,
      'work/ki/ki.pilot-part/_index.md',
      entry({ id: 'ki.pilot-part', drop: ['parent'], fields: ['parent: ki.pilot'] })
    )
    write(root, 'work/ki/ki.pilot-part/10-pilot.change.md', '# Part\n')
    expect(messages(run(RECORD, 'RECORD-2', context(root)))).toContain('the parent chain loops back to this package')
  })

  test('a sub-package names its parent package and keeps its level', () => {
    const root = store({ changes: ['10-pilot.change.md', 'viewer/'] })
    write(
      root,
      'work/ki/ki.pilot/viewer/_index.md',
      entry({ id: 'ki.pilot+viewer' }).replace('level: regular', 'level: project')
    )
    write(root, 'work/ki/ki.pilot/viewer/10-pilot.change.md', '# Viewer\n')
    const text = messages(run(RECORD, 'RECORD-2', context(root)))
    expect(text).toContain("parent must name the sub-package's parent package, ki.pilot")
    expect(text).toContain("a sub-package's level is its parent's, regular")
  })

  test("a summit's sub-package takes level regular", () => {
    const root = store()
    write(
      root,
      'work/ki/ki.summit/_index.md',
      MAIN.replace('## Changes\n\nNone', '## Changes\n\n- [website/](website/) - in hand.')
    )
    const sub = (level: string): string =>
      entry({ id: 'ki.summit+website', drop: ['parent'], fields: ['parent: ki.summit'] }).replace(
        'level: regular',
        `level: ${level}`
      )
    write(root, 'work/ki/ki.summit/website/_index.md', sub('regular'))
    write(root, 'work/ki/ki.summit/website/10-pilot.change.md', '# Website\n')
    expect(statuses(run(RECORD, 'RECORD-1', context(root)))).toEqual(['PASS'])
    expect(statuses(run(RECORD, 'RECORD-2', context(root)))).toEqual(['PASS'])
    write(root, 'work/ki/ki.summit/website/_index.md', sub('territory'))
    expect(messages(run(RECORD, 'RECORD-2', context(root)))).toContain(
      'a sub-package of the root or a summit takes level regular'
    )
  })

  const tolerated: readonly [string, Partial<Entry>][] = [
    ['an absent role', { drop: ['role'] }],
    ['the old role word keeper', { drop: ['role'], fields: ['role: keeper'] }],
    ['the folded role steward', { drop: ['role'], fields: ['role: steward'] }],
    ['a steward seat', { fields: ['workers:\n  - role: steward\n    tier: managers'] }],
    ['a worker focus', { fields: ['workers:\n  - role: warden\n    tier: managers\n    focus:\n      - pilot'] }],
    ['the old tier enablers', { fields: ['workers:\n  - role: warden\n    tier: enablers'] }],
    ['a worker listening', { fields: ['workers:\n  - role: warden\n    tier: managers\n    listening: off'] }],
    ['a leftover covers', { fields: ['covers: []'] }],
    ['a leftover theme', { fields: ['theme: model'] }],
    ['a worker name', { fields: ['workers:\n  - name: Wayland\n    role: warden\n    tier: managers'] }],
    ['a worker actor', { fields: ['workers:\n  - actor: wayland\n    role: warden\n    tier: managers'] }],
    [
      'a seat id in the earlier + form',
      {
        fields: [
          'workers:\n  - id: actor:ki.cairn+information-architect\n    role: information-architect\n    tier: makers'
        ]
      }
    ],
    ['the split role architect', { drop: ['role'], fields: ['role: architect'] }],
    [
      'an architect seat',
      { fields: ['workers:\n  - id: actor:ki.cairn@architect\n    role: architect\n    tier: makers'] }
    ],
    [
      'an illustrator seat',
      { fields: ['workers:\n  - id: actor:ki.cairn@illustrator\n    role: illustrator\n    tier: makers'] }
    ]
  ]
  for (const [name, change] of tolerated)
    test(`${name} warns under the role migration file`, () => {
      const outcomes = run(RECORD, 'RECORD-2', context(store(change)))
      expect(statuses(outcomes)).toEqual(['WARN'])
      expect(messages(outcomes)).toContain('migration-roles.md')
    })

  test("a worker binding with its actor's typed id passes", () => {
    const binding = 'workers:\n  - id: actor:wayland\n    role: warden\n    tier: managers\n    status: active'
    expect(statuses(run(RECORD, 'RECORD-2', context(store({ fields: [binding] }))))).toEqual(['PASS'])
  })

  test("a worker binding with a seat's id passes", () => {
    for (const [id, role] of [
      ['actor:ki.cairn@information-architect', 'information-architect'],
      ['actor:hnr.summit+website@technical-architect', 'technical-architect']
    ]) {
      const binding = `workers:\n  - id: ${id}\n    role: ${role}\n    tier: makers`
      expect(statuses(run(RECORD, 'RECORD-2', context(store({ fields: [binding] }))))).toEqual(['PASS'])
    }
  })

  test('a vacant seat with its role and tier passes (SEATS-VACANT a)', () => {
    const binding = 'workers:\n  - role: guildmaster\n    tier: managers\n    status: vacant'
    expect(statuses(run(RECORD, 'RECORD-2', context(store({ fields: [binding] }))))).toEqual(['PASS'])
  })

  test('a vacant seat with an id or since fails', () => {
    for (const extra of ['id: actor:wayland', 'since: 2026-11-20T13:11:00Z']) {
      const binding = `workers:\n  - role: guildmaster\n    tier: managers\n    status: vacant\n    ${extra}`
      expect(messages(run(RECORD, 'RECORD-2', context(store({ fields: [binding] }))))).toContain(
        'is a vacant seat and carries no id or since'
      )
    }
  })

  test('a worker id that is not a typed actor id fails', () => {
    const binding = 'workers:\n  - id: wayland\n    role: warden\n    tier: managers'
    expect(messages(run(RECORD, 'RECORD-2', context(store({ fields: [binding] }))))).toContain(
      "id must be the actor's typed id"
    )
  })

  test('every outcome level is one RECORD-2 declares', () => {
    const declared = RECORD.items.find((item) => item.code === 'RECORD-2')?.mechanical
    const levels = [declared?.level, ...(declared?.overrideLevels ?? [])]
    const outcomes = run(RECORD, 'RECORD-2', context(store({ drop: ['role'] })))
    for (const outcome of outcomes)
      if (outcome.status === 'VIOLATION' && outcome.level) expect(levels).toContain(outcome.level)
  })
})

describe('LIFECYCLE', () => {
  test('created_at later than since fails', () => {
    const outcomes = run(
      LIFECYCLE,
      'LIFECYCLE-1',
      context(store({ drop: ['created_at'], fields: ['created_at: 2026-11-10T10:00:00Z'] }))
    )
    expect(messages(outcomes)).toContain('created_at must not be later than since')
  })

  test('a long description, a long Now and history in the state warn', () => {
    const root = store({ drop: ['description'], fields: [`description: ${'x'.repeat(501)}`] })
    const now = Array.from({ length: 6 }, (_, index) => `- 2026-11-0${index + 1} line ${index}`).join('\n')
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({ id: 'ki.pilot', drop: ['description'], fields: [`description: ${'x'.repeat(501)}`] }).replace(
        '- The pilot runs.',
        now
      )
    )
    const text = messages(run(LIFECYCLE, 'LIFECYCLE-3', context(root)))
    expect(text).toContain('description runs past 500 characters')
    expect(text).toContain('Now runs past 5 lines')
    expect(text).toContain('appear to carry history')
  })
})

describe('BOUNDARY', () => {
  test('a session field and a session claim fail', () => {
    const root = store({ fields: ['session_id: abc'] })
    write(
      root,
      'work/ki/ki.pilot/_index.md',
      entry({ id: 'ki.pilot', fields: ['session_id: abc'] }).replace(
        '- The pilot runs.',
        '- Resume the conversation session to continue.'
      )
    )
    const text = messages(run(BOUNDARY, 'BOUNDARY-1', context(root)))
    expect(text).toContain('forbidden session or transcript field')
    expect(text).toContain('claim continuity')
  })
})

test('the role catalogue is read from the role standard', () => {
  const catalogue = roleCatalogue()
  // ROLE-RANK, Kris, 17 November 2026: tiers in order, roles by rank within each, the default lowest.
  expect([...catalogue.keys()]).toEqual([
    'guardian',
    'governor',
    'councillor',
    'guildmaster',
    'quartermaster',
    'librarian',
    'gatekeeper',
    'housekeeper',
    'warden',
    'voice',
    'technical-architect',
    'information-architect',
    'graphic-designer',
    'journeyman'
  ])
  const glyphs = [...catalogue.values()].map((role) => role.glyph)
  expect(new Set(glyphs).size).toBe(glyphs.length)
  for (const tier of ['leaders', 'managers', 'makers']) {
    const ranks = [...catalogue.values()].filter((role) => role.tier === tier).map((role) => role.rank)
    expect(ranks).toEqual(ranks.map((_, index) => index + 1))
  }
  expect(catalogue.get('housekeeper')).toEqual({ tier: 'managers', rank: 5, glyph: '🏠' })
  expect(catalogue.get('quartermaster')).toEqual({ tier: 'managers', rank: 2, glyph: '🧰' })
  expect(catalogue.get('guardian')).toEqual({ tier: 'leaders', rank: 1, glyph: '🪨' })
  expect(catalogue.get('councillor')).toEqual({ tier: 'leaders', rank: 3, glyph: '🗳️' })
  expect(catalogue.get('warden')).toEqual({ tier: 'managers', rank: 6, glyph: '⚒️' })
  expect(catalogue.get('journeyman')).toEqual({ tier: 'makers', rank: 5, glyph: '🐝' })
  expect(catalogue.get('information-architect')).toEqual({ tier: 'makers', rank: 3, glyph: '📐' })
  expect(catalogue.get('technical-architect')).toEqual({ tier: 'makers', rank: 2, glyph: '🏗️' })
  expect(catalogue.get('voice')).toEqual({ tier: 'makers', rank: 1, glyph: '🦜' })
  expect(catalogue.get('graphic-designer')).toEqual({ tier: 'makers', rank: 4, glyph: '🎨' })
  expect(catalogue.has('architect')).toBe(false)
  expect(catalogue.has('illustrator')).toBe(false)
})
