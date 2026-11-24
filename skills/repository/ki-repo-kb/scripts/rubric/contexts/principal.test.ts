import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PRINCIPAL } from '../items/principal.ts'
import { createPrincipalSession } from './principal.ts'

// These tests came from ki-repo-kb-principal, when the principal standard came to
// apply whenever the base is its territory's Capital.
const REPOSITORY = 'https://github.com/example/capital'
const capital = (prefix: string, self = true): string => {
  const repository = mkdtempSync(join(tmpdir(), prefix))
  writeFileSync(
    join(repository, '.ki.toml'),
    `[skills.ki-repo]\nrepository = "${REPOSITORY}"\ncapital = "${self ? REPOSITORY : 'https://github.com/example/other'}"\n`
  )
  return repository
}
const REQUIRED = [
  'Admin/MEMORY.md',
  'Admin/Governance/Charter.md',
  'Admin/Governance/Known Lands.md',
  'Admin/Governance/Conventions/Conventions.md',
  'Admin/Operations/Processes/Enactment Process.md'
]
const surface = PRINCIPAL.items.find((item) => item.code === 'PRINCIPAL-1')

test('the principal family keeps its codes without the retired Enactment anchor', () => {
  expect(PRINCIPAL.items.map((item) => item.code)).toEqual(['PRINCIPAL-1', 'PRINCIPAL-3', 'PRINCIPAL-4', 'PRINCIPAL-5'])
  for (const item of PRINCIPAL.items.slice(1, 3)) {
    expect(item.mechanical).toBeUndefined()
    expect(item.judgment?.outcomes).toContain('owner decision required')
    expect(item.sources[0]).toStartWith('standard-principal.md#')
  }
})

test('the principal checker distinguishes a missing surface from a complete or empty one', () => {
  const repository = capital('ki-repo-kb-principal-rubric-')
  const context = () =>
    createPrincipalSession({ mode: 'audit', repository, userHome: tmpdir(), configuration: {} }).subjects[1]?.context()
  expect(context()).toMatchObject({ capital: true, missing: expect.arrayContaining(['Admin/MEMORY.md']), empty: [] })
  for (const path of REQUIRED) {
    mkdirSync(join(repository, path, '..'), { recursive: true })
    writeFileSync(join(repository, path), '\n')
  }
  expect(context()?.empty).toHaveLength(5)
  for (const path of REQUIRED) writeFileSync(join(repository, path), '# Record\n\nLocal structural orientation.\n')
  const complete = context()
  expect(complete).toMatchObject({ missing: [], empty: [] })
  expect(surface?.mechanical?.audit.run(complete as never)).toMatchObject([{ status: 'PASS' }])
})

test("a base that is not its territory's Capital is outside the principal standard", () => {
  const repository = capital('ki-repo-kb-principal-member-', false)
  const session = createPrincipalSession({ mode: 'conform', repository, userHome: tmpdir(), configuration: {} })
  const context = session.subjects[1]?.context()
  expect(context?.capital).toBe(false)
  expect(surface?.mechanical?.audit.run(context as never)).toMatchObject([{ status: 'NOT_APPLICABLE' }])
  PRINCIPAL.items.find((item) => item.code === 'PRINCIPAL-5')?.mechanical?.conform?.run(context as never)
  expect(session.proposal()).toEqual({ writes: [] })
})

const scaffoldPath = '+/_ACQUIRED/README.md'
const scaffoldTemplate = readFileSync(new URL('../../../assets/templates/acquired/README.md', import.meta.url), 'utf8')
const scaffoldCriterion = PRINCIPAL.items.find((item) => item.code === 'PRINCIPAL-5')
const principalSession = (repository: string, mode: 'audit' | 'conform') =>
  createPrincipalSession({ repository, mode, userHome: tmpdir(), configuration: {} })
const principalContext = (session: ReturnType<typeof principalSession>) => {
  const subject = session.subjects[1]
  if (!subject) throw new Error('Missing principal subject')
  return subject.context()
}
const auditScaffold = (session: ReturnType<typeof principalSession>) =>
  scaffoldCriterion?.mechanical?.audit.run(principalContext(session))
const conformScaffold = (session: ReturnType<typeof principalSession>) =>
  scaffoldCriterion?.mechanical?.conform?.run(principalContext(session))

test('missing scaffold audit is read-only and conform proposes only its exact README', () => {
  const repository = capital('principal-scaffold-missing-')
  const audit = principalSession(repository, 'audit')
  expect(principalContext(audit).acquired.state).toBe('missing')
  expect(auditScaffold(audit)).toMatchObject([{ status: 'VIOLATION', subject: scaffoldPath }])
  conformScaffold(audit)
  expect(audit.proposal()).toEqual({ writes: [] })
  const conform = principalSession(repository, 'conform')
  expect(conform.proposal()).toEqual({ writes: [] })
  conformScaffold(conform)
  conformScaffold(conform)
  expect(conform.proposal()).toEqual({ writes: [{ path: scaffoldPath, content: scaffoldTemplate, create: true }] })
  expect(existsSync(join(repository, '+'))).toBe(false)
})

test('canonical scaffold passes and conform stays idempotent', () => {
  const repository = capital('principal-scaffold-canonical-')
  mkdirSync(join(repository, '+/_ACQUIRED'), { recursive: true })
  writeFileSync(join(repository, scaffoldPath), scaffoldTemplate)
  const session = principalSession(repository, 'conform')
  expect(principalContext(session).acquired.state).toBe('canonical')
  expect(auditScaffold(session)).toMatchObject([{ status: 'PASS' }])
  conformScaffold(session)
  expect(session.proposal()).toEqual({ writes: [] })
})

test.each(['', '# Local replacement\n', scaffoldTemplate.replaceAll('\n', '\r\n'), `${scaffoldTemplate}\0`])(
  'drifted scaffold is restored byte exactly without reading or changing packets (%#)',
  (content) => {
    const repository = capital('principal-scaffold-drift-')
    const delivery = join(repository, '+/_ACQUIRED/delivery/package')
    mkdirSync(delivery, { recursive: true })
    const original = Buffer.from([0, 255, 13, 10, 42])
    writeFileSync(join(delivery, 'original.bin'), original)
    // A packet symlink is deliberately not traversed by the scaffold checker.
    symlinkSync(join(repository, 'absent-packet-target'), join(delivery, 'unread-link'))
    writeFileSync(join(repository, scaffoldPath), content)
    const session = principalSession(repository, 'conform')
    expect(principalContext(session).acquired.state).toBe('drifted')
    expect(auditScaffold(session)).toMatchObject([{ status: 'VIOLATION' }])
    conformScaffold(session)
    expect(session.proposal()).toEqual({ writes: [{ path: scaffoldPath, content: scaffoldTemplate }] })
    expect(readFileSync(join(repository, scaffoldPath), 'utf8')).toBe(content)
    expect(readFileSync(join(delivery, 'original.bin'))).toEqual(original)
    // Simulate host publication in this disposable fixture only.
    for (const write of session.proposal().writes) writeFileSync(join(repository, write.path), write.content)
    expect(auditScaffold(principalSession(repository, 'audit'))).toMatchObject([{ status: 'PASS' }])
    expect(readFileSync(join(delivery, 'original.bin'))).toEqual(original)
  }
)

test.each(['+', '+/_ACQUIRED', scaffoldPath])('unsafe path %s is never proposed for repair', (unsafePath) => {
  for (const kind of ['symlink', 'dangling', 'wrong-type']) {
    const repository = capital('principal-scaffold-unsafe-')
    const path = join(repository, unsafePath)
    mkdirSync(join(path, '..'), { recursive: true })
    const external = mkdtempSync(join(tmpdir(), 'principal-scaffold-external-'))
    const sentinel = join(external, 'sentinel')
    writeFileSync(sentinel, 'untouched')
    if (kind === 'wrong-type') {
      if (unsafePath === scaffoldPath) mkdirSync(path)
      else writeFileSync(path, 'not a directory')
    } else
      symlinkSync(
        kind === 'dangling' ? join(external, 'absent') : unsafePath === scaffoldPath ? sentinel : external,
        path
      )
    const session = principalSession(repository, 'conform')
    expect(principalContext(session).acquired.state).toBe('unsafe')
    expect(auditScaffold(session)).toMatchObject([{ status: 'VIOLATION' }])
    conformScaffold(session)
    expect(session.proposal()).toEqual({ writes: [] })
    expect(readFileSync(sentinel, 'utf8')).toBe('untouched')
  }
})
