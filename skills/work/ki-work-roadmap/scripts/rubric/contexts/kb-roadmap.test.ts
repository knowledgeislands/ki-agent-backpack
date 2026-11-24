import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { inspectKbRoadmap, RECORD_FIELDS } from './kb-roadmap.ts'
import { createRoadmapSession } from './roadmap.ts'
import { inspectRoadmap } from './roadmap-evidence.ts'

// The KB record checks came from ki-repo-kb-streams on 22 November 2026, with these tests.
const STANDARD = 'references/standard-repository-roadmaps.md'
const FORMAT = 'references/standard-work-item-format.md'
const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const kbFixture = (areas = ''): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-work-roadmap-kb-'))
  roots.push(root)
  mkdirSync(join(root, 'Streams', 'Roadmap'), { recursive: true })
  writeFileSync(join(root, 'Streams', 'Roadmap', '_ISSUES.md'), '# Streams issue ledger\n')
  writeFileSync(
    join(root, '.ki.toml'),
    `[skills.ki-repo]\nrepo_type = "kb"\nrepo_code = "TEST-KB"\n[skills.ki-work-roadmap]\n${areas}\n`
  )
  return root
}

const inspect = (root: string) => inspectKbRoadmap(root, STANDARD, FORMAT)
const of = (root: string, area: string) => inspect(root).filter((finding) => finding.area === area)
const levels = (root: string, area: string) => of(root, area).map((finding) => finding.level)
const subject = (name: string) => join('Streams', 'Roadmap', name)

describe('roadmap areas in a KB', () => {
  const fixture = (areas: string, area?: string, id = 'TEST-KB-GOV-001'): string => {
    const root = kbFixture(areas)
    writeFileSync(
      join(root, 'Streams', 'Roadmap', `${id}-example.md`),
      `---\nid: ${id}\n${area === undefined ? '' : `area: ${area}\n`}status: triage\nsize: s\n---\n`
    )
    return root
  }

  test('warns on retired slug-valued area titles under ROAD-6', () => {
    const root = fixture('areas = { GOV = "company-record" }', 'GOV')
    expect(of(root, 'ROAD-6')).toContainEqual({
      level: 'WARN',
      area: 'ROAD-6',
      msg: "area GOV maps to theme 'company-record'; the area-to-theme map is retired, so map the code to its title",
      ref: STANDARD,
      file: '.ki.toml'
    })
  })

  test('warns on undeclared issuing areas when no area map exists', () => {
    const root = fixture('', 'GOV')
    writeFileSync(
      join(root, 'Streams', 'Roadmap', 'TEST-KB-KNW-001-knowledge.md'),
      '---\nid: TEST-KB-KNW-001\narea: KNW\n---\n'
    )
    expect(levels(root, 'ROAD-6').filter((level) => level === 'WARN')).toHaveLength(2)
  })

  test.each([
    ['areas = { GOV = "Governance" }', 'GOV', 'TEST-KB-GOV-001'],
    ['areas = ["GOV"]', 'GOV', 'TEST-KB-GOV-001'],
    ['', undefined, 'TEST-KB-001']
  ])('accepts declared and repository-wide issuing modes: %s', (areas, area, id) => {
    expect(levels(fixture(areas, area, id), 'ROAD-6')).toEqual(['PASS', 'PASS'])
  })

  test.each([
    ['KNW', 'TEST-KB-KNW-001'],
    [undefined, 'TEST-KB-GOV-001'],
    ['GOV', 'TEST-KB-KNW-001'],
    ['GOV', 'OTHER-GOV-001']
  ])('warns when area or identifier does not match declarations: %s %s', (area, id) => {
    expect(levels(fixture('areas = { GOV = "Governance" }', area, id), 'ROAD-6')).toContain('WARN')
  })
})

describe('KB roadmap records', () => {
  test('fails every record whose identifier another record shares, under ITEM-1', () => {
    const root = kbFixture()
    const record = (name: string, id?: string) =>
      writeFileSync(
        join(root, 'Streams', 'Roadmap', name),
        `${id ? `---\nid: ${id}\ntitle: Fixture\n---\n\n` : ''}# Fixture\n`
      )
    record('KB-OPS-001-first.md', 'KB-OPS-001')
    record('KB-OPS-002-second.md', 'KB-OPS-002')
    record('_ISSUES.md', 'KB-OPS-001')
    expect(of(root, 'ITEM-1')).toEqual([
      {
        level: 'PASS',
        area: 'ITEM-1',
        msg: 'Every roadmap record identifier is unique.',
        ref: FORMAT,
        file: join('Streams', 'Roadmap')
      }
    ])

    record('KB-OPS-001-collision.md', 'KB-OPS-001')
    expect(of(root, 'ITEM-1').map((finding) => [finding.level, finding.file])).toEqual([
      ['FAIL', subject('KB-OPS-001-collision.md')],
      ['FAIL', subject('KB-OPS-001-first.md')]
    ])
  })

  test('fails each record without valid frontmatter whose id matches its filename, under ITEM-2', () => {
    const root = kbFixture()
    const roadmap = join(root, 'Streams', 'Roadmap')
    const write = (name: string, content: string) => writeFileSync(join(roadmap, name), content)
    write('KB-OPS-001-valid.md', '---\nid: KB-OPS-001\ntitle: Valid\nsize: s\nassignee: owner\n---\n\n# Valid\n')
    write('Roadmap.md', '# Roadmap index note without frontmatter\n')
    expect(levels(root, 'ITEM-2')).toEqual(['PASS', 'PASS'])

    write('KB-OPS-002-no-frontmatter.md', '# No frontmatter\n')
    write('KB-OPS-003-no-id.md', '---\ntitle: No id\n---\n\n# No id\n')
    write('KB-OPS-004-mismatch.md', '---\nid: KB-OPS-040\ntitle: Mismatch\n---\n\n# Mismatch\n')
    write('KB-OPS-005-unparseable.md', '---\nid: KB-OPS-005\ntitle: [unclosed\n---\n\n# Unparseable\n')
    write('notes.md', '---\nid: KB-OPS-006\n---\n\n# Notes\n')
    write('KB-OPS-007.md', '---\nid: KB-OPS-007\n---\n\n# No slug\n')
    const failures = of(root, 'ITEM-2').filter((finding) => finding.level === 'FAIL')
    expect(failures.map((finding) => finding.msg)).toEqual([
      `Roadmap record ${subject('KB-OPS-002-no-frontmatter.md')} does not begin with YAML frontmatter.`,
      `Roadmap record ${subject('KB-OPS-003-no-id.md')} has no frontmatter id.`,
      `Roadmap record ${subject('KB-OPS-004-mismatch.md')} has id KB-OPS-040, which does not match its filename identifier KB-OPS-004.`,
      `Roadmap record ${subject('KB-OPS-005-unparseable.md')} has frontmatter that is not parseable YAML.`,
      `Roadmap record ${subject('KB-OPS-007.md')} has id KB-OPS-007, but its filename is not of the form KB-OPS-007-<slug>.md.`,
      `Roadmap record ${subject('notes.md')} has id KB-OPS-006, but its filename is not of the form KB-OPS-006-<slug>.md.`
    ])
    expect(failures.every((finding) => finding.ref === FORMAT)).toBe(true)
  })

  test('warns on a record carrying an undefined field or lacking a size or an assignee', () => {
    const root = kbFixture()
    const roadmap = join(root, 'Streams', 'Roadmap')
    writeFileSync(
      join(roadmap, 'KB-OPS-001-known.md'),
      '---\nnote_type: stream-roadmap\nid: KB-OPS-001\ntitle: Known\npriority: high\nsize: m\nassignee: owner\nhorizon: next\ntags:\n  - topic/ops\n---\n'
    )
    expect(levels(root, 'ITEM-2')).toEqual(['PASS', 'PASS'])

    writeFileSync(
      join(roadmap, 'KB-OPS-002-priority.md'),
      '---\nid: KB-OPS-002\ntitle: Priority\npriority: medium\nowner: Kris\n---\n'
    )
    const file = subject('KB-OPS-002-priority.md')
    expect(of(root, 'ITEM-2').filter((finding) => finding.level === 'WARN')).toEqual([
      { level: 'WARN', area: 'ITEM-2', msg: `Roadmap record ${file} has unknown field(s): owner.`, ref: FORMAT, file },
      {
        level: 'WARN',
        area: 'ITEM-2',
        msg: `Roadmap record ${file} has no size; give it s, m, l or xl.`,
        ref: FORMAT,
        file
      },
      {
        level: 'WARN',
        area: 'ITEM-2',
        msg: `Roadmap record ${file} has no assignee; name its holder, such as owner or work/<id>.`,
        ref: FORMAT,
        file
      }
    ])
  })

  test('exempts a closed record from size and assignee, and fails a ready record of size xl', () => {
    const root = kbFixture()
    const record = join(root, 'Streams', 'Roadmap', 'KB-OPS-001-known.md')
    writeFileSync(record, '---\nid: KB-OPS-001\ntitle: Known\nstatus: done\n---\n')
    expect(levels(root, 'ITEM-2')).toEqual(['PASS', 'PASS'])

    writeFileSync(record, '---\nid: KB-OPS-001\ntitle: Known\nsize: xl\nhorizon: next\nstatus: ready\n---\n')
    expect(of(root, 'ITEM-2').map((finding) => finding.msg)).toContain(
      `Roadmap record ${subject('KB-OPS-001-known.md')} is ready at size xl; split it before Ready.`
    )
  })

  test('warns on an adopted draft of size xl, which is split before adoption', () => {
    const root = kbFixture()
    writeFileSync(
      join(root, 'Streams', 'Roadmap', 'KB-OPS-001-known.md'),
      '---\nid: KB-OPS-001\ntitle: Known\nsize: xl\nassignee: owner\nhorizon: next\nstatus: draft\n---\n'
    )
    expect(of(root, 'ITEM-2').filter((finding) => finding.level === 'WARN')).toEqual([
      {
        level: 'WARN',
        area: 'ITEM-2',
        msg: `Roadmap record ${subject('KB-OPS-001-known.md')} is adopted at size xl; split it, as XL work is split before adoption.`,
        ref: FORMAT,
        file: subject('KB-OPS-001-known.md')
      }
    ])
  })

  test("mirrors the roadmap adapter's current record fields", () => {
    const source = readFileSync(join(import.meta.dir, 'roadmap-evidence.ts'), 'utf8')
    const block = /const RECORD_FIELDS = new Set\(\[([\s\S]*?)\]\)/.exec(source)?.[1] ?? ''
    const current = block.split('// Retired fields')[0] ?? ''
    const adapter = [...current.matchAll(/'([a-z_]+)'/g)].map((match) => match[1])

    expect(adapter.length).toBeGreaterThan(0)
    expect([...RECORD_FIELDS]).toEqual(adapter)
  })

  test('reports a record skipped by the identity check under ITEM-2 and a shared id under ITEM-1', () => {
    const root = kbFixture()
    const roadmap = join(root, 'Streams', 'Roadmap')
    writeFileSync(join(roadmap, 'KIT-007-first.md'), '---\nid: KIT-007\n---\n\n# First\n')
    writeFileSync(join(roadmap, 'KIT-007-second.md'), '---\nid: KIT-007\n---\n\n# Second\n')
    writeFileSync(join(roadmap, 'KIT-008-unformatted.md'), '# Unformatted\n')

    expect(of(root, 'ITEM-1').map((finding) => [finding.level, finding.file])).toEqual([
      ['FAIL', subject('KIT-007-first.md')],
      ['FAIL', subject('KIT-007-second.md')]
    ])
    expect(
      of(root, 'ITEM-2')
        .filter((finding) => finding.level === 'FAIL')
        .map((finding) => finding.file)
    ).toEqual([subject('KIT-008-unformatted.md')])
  })

  test('treats a roadmap without records as not applicable', () => {
    const root = kbFixture()
    expect(of(root, 'ITEM-1')).toEqual([
      { level: 'NA', area: 'ITEM-1', msg: 'No identified roadmap records are present.', ref: FORMAT }
    ])
    expect(of(root, 'ITEM-2')[0]).toEqual({
      level: 'NA',
      area: 'ITEM-2',
      msg: 'No roadmap records are present.',
      ref: FORMAT
    })
  })
})

describe('the KB issue ledger under ROAD-7', () => {
  const header =
    "This ledger reserves fixed issuing-area namespaces. Allocate the next work item in its area as one greater than that area's high-water mark; never lower a value or reuse an issued number after a record is pruned. Reserve a number by committing this ledger's advance on its own before writing the record. Areas are not mutable themes or groups."

  test('passes a canonical counts-only ledger and fails one carrying extra prose', () => {
    const root = kbFixture()
    const ledger = join(root, 'Streams', 'Roadmap', '_ISSUES.md')
    const canonical = `---\nareas: { GOV: 27, OPS: 11 }\n---\n\n# Roadmap issue ledger\n\n${header}\n\n- \`GOV\` reserves through \`027\`.\n- \`OPS\` reserves through \`011\`.\n`
    writeFileSync(ledger, canonical)
    expect(of(root, 'ROAD-7')).toEqual([
      {
        level: 'PASS',
        area: 'ROAD-7',
        msg: 'The issue ledger holds only its header and counters.',
        ref: STANDARD,
        file: 'Streams/Roadmap/_ISSUES.md'
      }
    ])

    writeFileSync(ledger, `${canonical}\n## Owner-reviewed legacy migration\n\nDispositions.\n`)
    expect(of(root, 'ROAD-7').map((finding) => [finding.level, finding.msg])).toEqual([
      ['FAIL', 'The issue ledger holds content beyond its canonical header and counters.']
    ])

    writeFileSync(ledger, '# Roadmap issue ledger\n\n| Area | High-water mark |\n| --- | --- |\n| `GOV` | 027 |\n')
    expect(levels(root, 'ROAD-7')).toEqual(['FAIL'])
  })

  test('reads a digit-leading area counter but fails an all-digit one', () => {
    const root = kbFixture()
    const ledger = join(root, 'Streams', 'Roadmap', '_ISSUES.md')
    const canonical = `---\nareas: { 5GE: 12, ENG: 3 }\n---\n\n# Roadmap issue ledger\n\n${header}\n\n- \`5GE\` reserves through \`012\`.\n- \`ENG\` reserves through \`003\`.\n`
    writeFileSync(ledger, canonical)
    expect(levels(root, 'ROAD-7')).toEqual(['PASS'])

    writeFileSync(ledger, canonical.replaceAll('5GE', '555'))
    expect(of(root, 'ROAD-7').map((finding) => finding.msg)).toEqual([
      'The issue ledger must open with last_id or an areas map of high-water marks.'
    ])
  })
})

describe('the roadmap rubric in a KB', () => {
  test('reports the KB record checks after a passing SCOPE-1', () => {
    const root = kbFixture()
    const findings = inspectRoadmap(root)
    expect(findings[0]).toMatchObject({ level: 'PASS', area: 'SCOPE-1' })
    expect(findings.map((finding) => finding.area)).toEqual(
      expect.arrayContaining(['ITEM-1', 'ITEM-2', 'ROAD-6', 'ROAD-7'])
    )
  })

  test('never drafts a docs/roadmap ledger in a KB', () => {
    const root = kbFixture()
    rmSync(join(root, 'Streams', 'Roadmap', '_ISSUES.md'))
    const session = createRoadmapSession({ mode: 'conform', repository: root, userHome: root, configuration: {} })
    expect(session.proposal()).toEqual({ writes: [] })
  })
})
