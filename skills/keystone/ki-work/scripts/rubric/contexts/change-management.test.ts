import { afterEach, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createChangeManagementSession } from './change-management.ts'

const temporaryDirectories: string[] = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) rmSync(directory, { recursive: true, force: true })
})

const audit = (config: string) => {
  const repository = mkdtempSync(join(tmpdir(), 'ki-work-'))
  temporaryDirectories.push(repository)
  writeFileSync(join(repository, '.ki.toml'), config)
  return createChangeManagementSession({
    mode: 'audit',
    repository,
    userHome: '/tmp',
    configuration: {}
  }).subjects[0]?.context().selection.outcomes
}

test('requires the selected adapter to be declared and applicable', () => {
  expect(audit('[skills.ki-work]\nadapter = "roadmap"\n')).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ status: 'VIOLATION', message: expect.stringContaining('ki-work-roadmap') })
    ])
  )
  expect(audit('[skills.ki-work]\nadapter = "roadmap"\n')).not.toEqual(
    expect.arrayContaining([expect.objectContaining({ status: 'PASS' })])
  )
  expect(
    audit('[skills.ki-repo]\nrepo_type = "kb"\n\n[skills.ki-work]\nadapter = "roadmap"\n\n[skills.ki-work-roadmap]\n')
  ).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ status: 'VIOLATION', message: expect.stringContaining('not kb') })
    ])
  )
})

test('resolves valid local and remote adapters from declared tables', () => {
  expect(
    audit(
      '[skills.ki-repo]\nrepo_type = "project"\nprimary_shape = "ki-repo-project"\n[skills.ki-work]\nadapter = "roadmap"\n\n[skills.ki-work-roadmap]\n'
    )
  ).toEqual([expect.objectContaining({ status: 'PASS', message: expect.stringContaining('ki-work-roadmap') })])
  expect(
    audit(
      '[skills.ki-repo]\nrepo_type = "kb"\n\n[skills.ki-work]\nadapter = "kb-streams"\n\n[skills.ki-work-roadmap]\n'
    )
  ).toEqual([expect.objectContaining({ status: 'PASS', message: expect.stringContaining('ki-work-roadmap') })])
  expect(
    audit(
      '[skills.ki-repo]\nrepo_type = "project"\nprimary_shape = "ki-repo-project"\n[skills.ki-work]\nadapter = "linear"\n\n[skills.ki-work-linear]\n'
    )
  ).toEqual([expect.objectContaining({ status: 'PASS', message: expect.stringContaining('ki-work-linear') })])
})

test('does not resolve adapters against an unsupported explicit repository kind', () => {
  for (const kind of ['repository', '', 'mcp'])
    for (const [adapter, skill] of [
      ['roadmap', 'ki-work-roadmap'],
      ['linear', 'ki-work-linear']
    ])
      expect(
        audit(`[skills.ki-repo]\nrepo_type = "${kind}"\n[skills.ki-work]\nadapter = "${adapter}"\n[skills.${skill}]`)
      ).toContainEqual(
        expect.objectContaining({ status: 'VIOLATION', message: expect.stringContaining('Invalid repository kind') })
      )
})

test("reports a Capital's Project registry close-out under PROJ (KB-FOLD b)", () => {
  const repository = mkdtempSync(join(tmpdir(), 'ki-work-'))
  temporaryDirectories.push(repository)
  const capital = 'https://github.com/example/capital'
  writeFileSync(
    join(repository, '.ki.toml'),
    `[skills.ki-repo]\nrepo_type = "kb"\nrepository = "${capital}"\ncapital = "${capital}"\n`
  )
  mkdirSync(join(repository, 'Streams', 'Projects'), { recursive: true })
  writeFileSync(
    join(repository, 'Streams', 'Projects', 'finished.md'),
    '---\nnote_type: streams/project\nslug: finished\nlifecycle: completed\n---\n\n# Finished\n\n## Notes\n'
  )
  const session = createChangeManagementSession({ mode: 'audit', repository, userHome: '/tmp', configuration: {} })
  expect(session.subjects[0]?.families).toEqual(['SELECT', 'PROJ'])
  expect(session.subjects[0]?.context().projects.closeOut).toContainEqual(
    expect.objectContaining({ status: 'VIOLATION', subject: join('Streams', 'Projects', 'finished.md') })
  )
  expect(session.subjects[0]?.context().projects.ideaStage).toEqual([
    expect.objectContaining({ status: 'NOT_APPLICABLE' })
  ])
})
