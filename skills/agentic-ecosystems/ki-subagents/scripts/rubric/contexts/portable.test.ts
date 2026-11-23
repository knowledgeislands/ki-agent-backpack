import { afterEach, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { REGISTER } from '../items/register.ts'
import { createPortableSession } from './portable.ts'

const roots: string[] = []
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const repository = (files: Record<string, string>): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-subagents-register-'))
  roots.push(root)
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(join(root, path, '..'), { recursive: true })
    writeFileSync(join(root, path), content)
  }
  return root
}

const role = (name: string): string => `---\nname: ${name}\ndescription: A role.\n---\n\n# ${name}\n`

const run = (root: string) => {
  const session = createPortableSession({ mode: 'audit', repository: root, userHome: root, configuration: {} })
  const subject = session.subjects.find((candidate) => candidate.families.includes('REGISTER'))
  const item = REGISTER.items[0]
  return item?.mechanical?.audit.run(REGISTER.selectContext(subject?.context() as never))
}

test('a repository without subagents/ has nothing to register', () => {
  expect(run(repository({ 'README.md': '# Repo\n' }))).toEqual([
    { status: 'NOT_APPLICABLE', message: 'The repository has no subagents/ role sources.' }
  ])
})

test('every linked role source passes', () => {
  const root = repository({
    'subagents/README.md': '| Agent | Lane |\n| --- | --- |\n| [`a`](team/a.md) | A |\n| [`b`](team/b.md) | B |\n',
    'subagents/team/a.md': role('a'),
    'subagents/team/b.md': role('b')
  })
  expect(run(root)).toEqual([
    { status: 'PASS', message: 'All 2 role sources are registered.', subject: 'subagents/README.md' }
  ])
})

test('an unregistered source, a nameless source and a dangling link are each a violation', () => {
  const root = repository({
    'subagents/README.md': '- [A](team/a.md)\n- [Gone](team/gone.md)\n',
    'subagents/team/a.md': '# no frontmatter\n',
    'subagents/team/b.md': role('b')
  })
  expect(run(root)).toEqual([
    { status: 'VIOLATION', message: 'The role source declares no frontmatter name.', subject: 'subagents/team/a.md' },
    {
      status: 'VIOLATION',
      message: 'The role source is not registered: subagents/README.md does not link it.',
      subject: 'subagents/team/b.md'
    },
    {
      status: 'VIOLATION',
      message: 'The register links subagents/team/gone.md, which is not a role source.',
      subject: 'subagents/README.md'
    }
  ])
})

test('a subagents/ directory without a register is a violation', () => {
  expect(run(repository({ 'subagents/team/a.md': role('a') }))).toEqual([
    {
      status: 'VIOLATION',
      message: 'subagents/ has no register: add subagents/README.md linking every role source.',
      subject: 'subagents/README.md'
    }
  ])
})
