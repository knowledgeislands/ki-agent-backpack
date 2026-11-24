import { afterEach, expect, test } from 'bun:test'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { collectAuditFindings } from './audit.ts'

const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

const PRIVATE_IN_PUBLIC = 'public repo: package.json must not set "private": true'

const publicRepository = async (packagesDeclared: boolean): Promise<readonly string[]> => {
  const root = mkdtempSync(join(tmpdir(), 'ki-pkg-workspace-'))
  roots.push(root)
  execFileSync('git', ['init', '--quiet', root])
  writeFileSync(
    join(root, '.ki.toml'),
    `[skills.ki-repo]\nvisibility = "public"\n${packagesDeclared ? '\n[skills.ki-repo-packages]\n' : ''}`
  )
  writeFileSync(
    join(root, 'package.json'),
    JSON.stringify({ name: 'workspace', version: '0.0.0', private: true, author: 'Knowledge Islands' })
  )
  const { findings } = await collectAuditFindings([root, '--offline'])
  return findings.filter((finding) => finding.code === 'PKG-1').map((finding) => finding.message)
}

test('PKG-1 lets a public package repository keep its workspace root private', async () => {
  expect(await publicRepository(true)).not.toContain(PRIVATE_IN_PUBLIC)
})

test('PKG-1 fails a private root in a public repository that declares no packages', async () => {
  expect(await publicRepository(false)).toContain(PRIVATE_IN_PUBLIC)
})
