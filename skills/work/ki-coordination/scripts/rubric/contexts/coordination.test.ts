import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import {
  awaitingAcceptanceCounts,
  bindingOutcomes,
  createCoordinationSession,
  isCapital,
  repositoryIdentity,
  THEMES_CLOSE,
  themeOutcomes,
  workLevel
} from './coordination.ts'

const roots: string[] = []

const fixture = (identity: { repository: string; capital: string } | null): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-coordination-'))
  roots.push(root)
  if (identity)
    writeFileSync(
      join(root, '.ki.toml'),
      `[skills.ki-repo]\nrepository = "${identity.repository}"\ncapital = "${identity.capital}"\n`
    )
  return root
}

const checkpoint = (root: string, name: string, fields: Record<string, string>): void => {
  mkdirSync(join(root, '+', '_CHECKPOINTS'), { recursive: true })
  const frontmatter = Object.entries(fields)
    .map(([key, value]) => `${key}: '${value}'`)
    .join('\n')
  writeFileSync(join(root, '+', '_CHECKPOINTS', `${name}.md`), `---\n${frontmatter}\n---\n\n# ${name}\n`)
}

const work = (root: string, id: string, fields: Record<string, string>): string => {
  const folder = join(root, '+', '_WORK', id)
  mkdirSync(folder, { recursive: true })
  const frontmatter = Object.entries(fields)
    .map(([key, value]) => `${key}: '${value}'`)
    .join('\n')
  writeFileSync(join(folder, '_index.md'), `---\n${frontmatter}\n---\n\n# ${id}\n`)
  return folder
}

/** A flat registry page, `Streams/<kind>/<slug>.md`, the work-model shape. */
const page = (root: string, kind: 'Projects' | 'Themes', slug: string): void => {
  mkdirSync(join(root, 'Streams', kind), { recursive: true })
  writeFileSync(join(root, 'Streams', kind, `${slug}.md`), `# ${slug}\n`)
}

const register = (root: string, kind: 'Projects' | 'Initiatives', slug: string): void => {
  mkdirSync(join(root, 'Streams', kind, slug), { recursive: true })
  writeFileSync(join(root, 'Streams', kind, slug, `${slug}.md`), `# ${slug}\n`)
}

const context = (root: string) => {
  const session = createCoordinationSession({ mode: 'audit', repository: root, userHome: root, configuration: {} })
  return session.subjects[0]!.context()
}

/** Each outcome's status, a tolerance-window warning reading `WARN`. */
const statuses = (outcomes: readonly { status: string; level?: string }[]) =>
  outcomes.map((outcome) => (outcome.level === 'WARN' ? 'WARN' : outcome.status))

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

describe('repository identity', () => {
  test('a repository whose capital is itself is a Capital', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    expect(isCapital(repositoryIdentity(root))).toBe(true)
  })

  test('a repository naming another capital is not', () => {
    const root = fixture({ repository: 'ki-agent-backpack', capital: 'ki-principal' })
    expect(isCapital(repositoryIdentity(root))).toBe(false)
  })

  test('a missing configuration yields no identity', () => {
    expect(isCapital(repositoryIdentity(fixture(null)))).toBe(false)
  })
})

describe('outside a Capital', () => {
  test('no working areas outside a Capital is not applicable', () => {
    const root = fixture({ repository: 'ki-agent-backpack', capital: 'ki-principal' })
    const ctx = context(root)
    expect(statuses(ctx.labels.outcomes)).toEqual(['NOT_APPLICABLE'])
    expect(statuses(ctx.cap.outcomes)).toEqual(['NOT_APPLICABLE'])
  })
})

describe('coordination thread checkpoints', () => {
  test('a label ending in the Project name that resolves in the registry passes', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'Master: state-of-play' })
    checkpoint(root, 'knowledge-islands-model.ways-of-working', { label: 'KI Model: ways-of-working' })
    register(root, 'Projects', 'ways-of-working')
    register(root, 'Initiatives', 'knowledge-islands-model')
    expect(statuses(context(root).labels.outcomes)).toEqual(['WARN'])
  })

  test('a `<Space> > <Initiative> > <project in words>` label passes', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'KI > SoP' })
    checkpoint(root, 'knowledge-islands-model.ways-of-working', { label: 'KI > Model > ways of working' })
    register(root, 'Projects', 'ways-of-working')
    register(root, 'Initiatives', 'knowledge-islands-model')
    expect(statuses(context(root).labels.outcomes)).toEqual(['WARN'])
  })

  test('a label not ending in the Project name is a violation', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'Master: state-of-play' })
    checkpoint(root, 'knowledge-islands-model.ways-of-working', { label: 'Ways of working' })
    register(root, 'Projects', 'ways-of-working')
    register(root, 'Initiatives', 'knowledge-islands-model')
    const outcomes = context(root).labels.outcomes
    expect(statuses(outcomes)).toEqual(['VIOLATION', 'WARN'])
    expect(outcomes[0]?.message).toContain('ends in its Project name')
  })

  test('an unregistered Project or Initiative is a violation on a Capital', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'Master: state-of-play' })
    checkpoint(root, 'knowledge-islands-model.ways-of-working', { label: 'KI Model: ways-of-working' })
    mkdirSync(join(root, 'Streams', 'Projects'), { recursive: true })
    mkdirSync(join(root, 'Streams', 'Initiatives'), { recursive: true })
    expect(statuses(context(root).labels.outcomes)).toEqual(['VIOLATION', 'VIOLATION', 'WARN'])
  })

  test('a label ending in the registered Project title passes, and the slug in words then fails', () => {
    const root = fixture({ repository: 'personal', capital: 'personal' })
    checkpoint(root, '_state-of-play', { label: 'Personal > SoP' })
    checkpoint(root, 'health.personal-health', { label: 'Personal > Health > Stocktake' })
    register(root, 'Projects', 'personal-health')
    register(root, 'Initiatives', 'health')
    const note = join(root, 'Streams', 'Projects', 'personal-health', 'personal-health.md')
    writeFileSync(note, '---\ntitle: Stocktake\n---\n\n# Stocktake\n')
    expect(statuses(context(root).labels.outcomes)).toEqual(['WARN'])
    checkpoint(root, 'health.personal-health', { label: 'Personal > Health > personal health' })
    const outcomes = context(root).labels.outcomes
    expect(statuses(outcomes)).toEqual(['VIOLATION', 'WARN'])
    expect(outcomes[0]?.message).toContain(' > Stocktake')
  })

  test('the registry is not consulted outside a Capital', () => {
    const root = fixture({ repository: 'ki-agent-backpack', capital: 'ki-principal' })
    checkpoint(root, 'knowledge-islands-model.ways-of-working', { label: 'KI Model: ways-of-working' })
    expect(statuses(context(root).labels.outcomes)).toEqual(['WARN'])
  })
})

describe('sub-packages', () => {
  test('a four-part sub-package id leaves the Project checks and cap', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    work(root, 'ki.reg.topic.viewer', { level: 'regular' })
    work(root, 'ki.prj.alpha.site', { level: 'project', state: 'with-worker' })
    expect(context(root).labels.outcomes.map((outcome) => outcome.subject)).not.toContain(
      '+/_WORK/ki.prj.alpha.site/_index.md'
    )
  })
})

describe('active thread cap', () => {
  test('four active coordination threads are within the cap', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'Master: state-of-play' })
    for (const project of ['one', 'two', 'three', 'four'])
      checkpoint(root, `initiative.${project}`, { label: `Initiative: ${project}` })
    expect(statuses(context(root).cap.outcomes)).toEqual(['PASS'])
  })

  test('five active coordination threads exceed the cap', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'Master: state-of-play' })
    for (const project of ['one', 'two', 'three', 'four', 'five'])
      checkpoint(root, `initiative.${project}`, { label: `Initiative: ${project}` })
    const outcomes = context(root).cap.outcomes
    expect(statuses(outcomes)).toEqual(['VIOLATION'])
    expect(outcomes[0]?.message).toContain('5 pieces of Project work')
  })

  test('a closed thread does not count', () => {
    const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
    checkpoint(root, '_state-of-play', { label: 'Master: state-of-play' })
    for (const project of ['one', 'two', 'three', 'four'])
      checkpoint(root, `initiative.${project}`, { label: `Initiative: ${project}` })
    checkpoint(root, 'initiative.five', { label: 'Initiative: five', state: 'closed' })
    expect(statuses(context(root).cap.outcomes)).toEqual(['PASS'])
  })
})

describe('work files', () => {
  const capital = { repository: 'ki-principal', capital: 'ki-principal' }
  const project = (state = 'with-worker') => ({
    id: 'ki.ways-of-working',
    level: 'project',
    project: 'ways-of-working',
    theme: 'model',
    title: 'KI > Model > Ways of working',
    state
  })

  test('levels follow the id: one segment territory, `regular` regular, any other Project', () => {
    expect(workLevel('ki')).toBe('territory')
    expect(workLevel('ki.regular')).toBe('regular')
    expect(workLevel('ki.regular.tidy')).toBe('regular')
    expect(workLevel('ki.ways-of-working')).toBe('project')
    expect(workLevel('ki.sop.sites')).toBe('territory')
  })

  test('Project work naming a registered Project and theme in flat pages passes', () => {
    const root = fixture(capital)
    work(root, 'ki', { id: 'ki', level: 'territory', title: 'KI > SoP' })
    work(root, 'ki.ways-of-working', project())
    page(root, 'Projects', 'ways-of-working')
    page(root, 'Themes', 'model')
    expect(statuses(context(root).labels.outcomes)).toEqual(['PASS'])
  })

  test('Project work is not checked against its Project title, which packages no longer carry', () => {
    const root = fixture({ repository: 'personal', capital: 'personal' })
    const fields = {
      id: 'personal.personal-health',
      level: 'project',
      project: 'personal-health',
      theme: 'health',
      title: 'Personal > Health > Stocktake'
    }
    work(root, fields.id, fields)
    page(root, 'Themes', fields.theme)
    page(root, 'Projects', fields.project)
    const note = join(root, 'Streams', 'Projects', `${fields.project}.md`)
    writeFileSync(note, '---\ntitle: Stocktake\n---\n\n# Stocktake\n')
    expect(statuses(context(root).labels.outcomes)).toEqual(['PASS'])

    work(root, fields.id, { ...fields, title: 'Personal > Health > Personal health' })
    expect(statuses(context(root).labels.outcomes)).toEqual(['PASS'])
  })

  test('a theme found only in the legacy Initiatives registry warns before 7 November 2026 and fails from it', () => {
    const subject = { path: '_index.md', id: 'ki.ways-of-working', folder: '.', fields: { theme: 'model' } }
    const initiatives = new Set(['model'])
    const before = themeOutcomes(subject, new Set(), initiatives, '2026-11-06')
    expect(statuses(before)).toEqual(['WARN'])
    expect(before[0]?.message).toContain('Streams/Themes/model.md')
    expect(before[0]?.message).toContain(`fails from ${THEMES_CLOSE}`)
    expect(themeOutcomes(subject, new Set(), initiatives, THEMES_CLOSE)[0]?.level).toBe('FAIL')
    expect(themeOutcomes(subject, new Set(['model']), initiatives, THEMES_CLOSE)).toEqual([])

    const root = fixture(capital)
    work(root, 'ki.ways-of-working', project())
    page(root, 'Projects', 'ways-of-working')
    register(root, 'Initiatives', 'model')
    expect(context(root).labels.outcomes[0]?.message).toContain('Streams/Themes/model.md')
  })

  test('a mismatched project, unregistered Project and unknown theme are each a violation', () => {
    const root = fixture(capital)
    work(root, 'ki.ways-of-working', { ...project(), project: 'other', title: 'KI > Model > Other', theme: 'nowhere' })
    page(root, 'Themes', 'model')
    page(root, 'Projects', 'other')
    expect(statuses(context(root).labels.outcomes)).toEqual(['VIOLATION', 'VIOLATION', 'VIOLATION'])
  })

  test('active Project work counts toward the cap and on-hold or finished work does not', () => {
    const root = fixture(capital)
    for (const slug of ['a', 'b', 'c', 'd', 'e']) work(root, `ki.${slug}`, { level: 'project', state: 'with-worker' })
    expect(context(root).cap.outcomes[0]?.message).toContain('5 pieces of Project work')
    work(root, 'ki.e', { level: 'project', state: 'on-hold' })
    work(root, 'ki.f', { level: 'project', state: 'finished' })
    work(root, 'ki.regular', { level: 'regular', state: 'with-worker' })
    expect(statuses(context(root).cap.outcomes)).toEqual(['PASS'])
  })

  test('a work package is read for its state from `state.md`, over the work file', () => {
    const root = fixture(capital)
    for (const slug of ['a', 'b', 'c', 'd']) work(root, `ki.${slug}`, { level: 'project', state: 'with-worker' })
    const folder = work(root, 'ki.e', { id: 'ki.e', level: 'project' })
    writeFileSync(join(folder, 'state.md'), "---\nid: 'ki.e'\nstate: 'with-worker'\n---\n\n# ki.e state\n")
    expect(context(root).cap.outcomes[0]?.message).toContain('5 pieces of Project work')
    writeFileSync(join(folder, 'state.md'), "---\nid: 'ki.e'\nstate: 'on-hold'\n---\n\n# ki.e state\n")
    expect(statuses(context(root).cap.outcomes)).toEqual(['PASS'])
  })

  test('a leftover review folder is neither counted nor raised, `ki-work-package` warning on it instead', () => {
    const root = fixture(capital)
    mkdirSync(join(root, '+', '_WORK_REVIEW', 'ki.old-thread'), { recursive: true })
    expect(context(root).cap.outcomes.some((outcome) => outcome.status === 'VIOLATION')).toBe(false)
  })

  test('more than eight records awaiting acceptance for a Project, across the territory, is a warning', () => {
    const parent = mkdtempSync(join(tmpdir(), 'ki-coordination-queue-'))
    roots.push(parent)
    const checkout = (name: string, owner: string): string => {
      const root = join(parent, name)
      mkdirSync(root)
      writeFileSync(join(root, '.ki.toml'), `[skills.ki-repo]\nrepository = "${name}"\ncapital = "${owner}"\n`)
      return root
    }
    const record = (root: string, roadmap: string, name: string, status: string, project = 'ways-of-working'): void => {
      mkdirSync(join(root, roadmap), { recursive: true })
      writeFileSync(
        join(root, roadmap, `${name}.md`),
        `---\nstatus: ${status}\nproject: ${project}\n---\n\n# ${name}\n`
      )
    }
    const root = checkout('ki-principal', 'ki-principal')
    const sibling = checkout('ki-agent-backpack', 'ki-principal')
    const stranger = checkout('er-principal', 'er-principal')
    const folder = work(root, 'ki.ways-of-working', project())
    for (const name of ['decisions.md', 'state.md', 'messages.md', 'queries.md'])
      writeFileSync(join(folder, name), '# x\n')
    for (let at = 0; at < 4; at++)
      record(root, join('Streams', 'Roadmap'), `KI-PRINCIPAL-MODEL-${at}`, 'awaiting-review')
    for (let at = 0; at < 4; at++) record(sibling, join('docs', 'roadmap'), `KI-HARNESS-GOV-${at}`, 'awaiting-review')
    record(sibling, join('docs', 'roadmap'), 'KI-HARNESS-GOV-DRAFT', 'draft')
    record(sibling, join('docs', 'roadmap'), 'KI-HARNESS-GOV-OTHER', 'awaiting-review', 'observatory')
    record(stranger, join('Streams', 'Roadmap'), 'ER-PRINCIPAL-OPS-1', 'awaiting-review')
    expect(awaitingAcceptanceCounts([root, sibling]).get('ways-of-working')).toBe(8)
    expect(statuses(context(root).cap.outcomes)).toEqual(['PASS'])
    record(sibling, join('docs', 'roadmap'), 'KI-HARNESS-GOV-9', 'awaiting-review')
    expect(statuses(context(root).cap.outcomes)).toEqual(['VIOLATION'])
    expect(context(root).cap.outcomes[0]?.message).toStartWith('9 roadmap records await acceptance')
  })
})

describe('coordinator binding', () => {
  const claude = (root: string, file: string, content: string): void => {
    mkdirSync(join(root, '.claude', 'output-styles'), { recursive: true })
    writeFileSync(join(root, '.claude', file), content)
  }
  const hooked = (command: string) => ({ hooks: [{ type: 'command', command }] })
  const userSettings = (events: readonly string[]): string =>
    JSON.stringify({
      hooks: Object.fromEntries(
        events.map((event) => [event, [hooked('$HOME/ki/hooks/coordinator-reminder/coordinator-reminder.sh')]])
      )
    })

  test('a repository that does not select the output style is a violation', () => {
    const root = fixture(null)
    expect(statuses(context(root).binding.outcomes)).toEqual(['VIOLATION', 'INFO'])
  })

  test('the repository style is checked and the user half is not checked without user settings', () => {
    const root = fixture(null)
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture(null)
    expect(statuses(bindingOutcomes(root, home))).toEqual(['PASS', 'INFO'])
  })

  test('user settings that bind both events and a deployed style pass', () => {
    const root = fixture(null)
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture(null)
    claude(home, 'settings.json', userSettings(['UserPromptSubmit', 'SessionStart']))
    claude(home, join('output-styles', 'ki-coordinator.md'), '---\nname: ki-coordinator\n---\n')
    expect(statuses(bindingOutcomes(root, home))).toEqual(['PASS', 'PASS'])
  })

  test('a missing hook event and an undeployed style are each a violation', () => {
    const root = fixture(null)
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture(null)
    claude(home, 'settings.json', userSettings(['UserPromptSubmit']))
    const outcomes = bindingOutcomes(root, home)
    expect(statuses(outcomes)).toEqual(['PASS', 'VIOLATION', 'VIOLATION'])
    expect(outcomes[1]?.message).toContain('`SessionStart`')
    expect(outcomes[1]?.message).not.toContain('`UserPromptSubmit`')
  })

  test('unreadable user settings are a violation, never printed', () => {
    const root = fixture(null)
    const home = fixture(null)
    claude(home, 'settings.json', '{ not json')
    claude(home, join('output-styles', 'ki-coordinator.md'), '')
    const outcomes = bindingOutcomes(root, home)
    expect(statuses(outcomes)).toEqual(['VIOLATION', 'VIOLATION'])
    expect(outcomes.map((outcome) => outcome.message).join(' ')).not.toContain('not json')
  })
})

// INDEX-ENTRY (Kris, 8 November 2026): a work whose entry file is still `work.md` is read the same during the rollout.
test('a Project package whose entry file is still work.md is found and read', () => {
  const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
  const folder = work(root, 'ki.ways-of-working', { level: 'project', project: 'other' })
  renameSync(join(folder, '_index.md'), join(folder, 'work.md'))
  expect(context(root).labels.outcomes).toContainEqual(
    expect.objectContaining({ status: 'VIOLATION', subject: '+/_WORK/ki.ways-of-working/work.md' })
  )
})

test('typed Project resolves its unchanged registry slug', () => {
  const root = fixture({ repository: 'ki-principal', capital: 'ki-principal' })
  work(root, 'ki.sop.main', { id: 'ki.sop.main', level: 'territory', title: 'KI > SoP' })
  work(root, 'ki.prj.ways-of-working', {
    id: 'ki.prj.ways-of-working',
    level: 'project',
    project: 'ways-of-working',
    title: 'KI > Ways of working'
  })
  page(root, 'Projects', 'ways-of-working')
  const value = context(root)
  expect(value.labels.outcomes.some((outcome) => outcome.message.includes('prj'))).toBe(false)
})

test.each(['ki.reg.main', 'ki.reg.topic', 'ki.regular', 'ki.regular.main', 'ki.regular.topic', 'hnr.regular.intake'])(
  'classifies %s as regular without requiring a coordinator',
  (id) => {
    expect(workLevel(id)).toBe('regular')
  }
)
