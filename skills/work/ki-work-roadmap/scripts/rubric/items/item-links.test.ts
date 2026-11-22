import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { inspectRoadmap } from '../contexts/roadmap-evidence.ts'
import catalogue from './index.ts'

const directories: string[] = []
afterEach(() => {
  for (const directory of directories.splice(0)) rmSync(directory, { recursive: true, force: true })
})

const record = (id: string, slug: string, discussion: string): [string, string] => [
  `${id}-${slug}.md`,
  `---
id: ${id}
title: Build the foundation
size: m
assignee: owner
kind: deliver
horizon: next
status: draft
blocks: []
blocked_by: []
baseline_ref: null
created_at: 2026-09-13T12:00:00Z
updated_at: 2026-09-13T12:00:00Z
---

## Goal

Give users a working foundation.

## Discussion

${discussion}
`
]

const fixture = (...records: [string, string][]): string => {
  const repository = mkdtempSync(join(tmpdir(), 'ki-work-roadmap-links-'))
  directories.push(repository)
  mkdirSync(join(repository, 'docs', 'roadmap'), { recursive: true })
  writeFileSync(join(repository, '.ki.toml'), '[skills.ki-repo]\nrepo_code = "TEST"\n\n[skills.ki-work-roadmap]\n')
  for (const [name, text] of records) writeFileSync(join(repository, 'docs', 'roadmap', name), text)
  return repository
}

const item7 = (repository: string) => inspectRoadmap(repository).filter((finding) => finding.area === 'ITEM-7')

describe('ITEM-7 warns on links to pruned records (PRUNE-LINK-CHECK)', () => {
  test('is a WARN item in the catalogue', () => {
    const item = catalogue.families.flatMap((family) => family.items).find((candidate) => candidate.code === 'ITEM-7')
    expect(item?.mechanical?.level).toBe('WARN')
  })

  test('flags a relative link to a record no longer on disc and suggests ki link', () => {
    const repository = fixture(
      record('TEST-002', 'second-slice', 'Follows [TEST-001](TEST-001-build-the-foundation.md#goal).')
    )
    const [finding, ...rest] = item7(repository)
    expect(rest).toEqual([])
    expect(finding?.level).toBe('WARN')
    expect(finding?.file).toBe('docs/roadmap/TEST-002-second-slice.md')
    expect(finding?.msg).toContain('links pruned record TEST-001')
    expect(finding?.msg).toContain('`ki link TEST-001`')
  })

  test('passes a live record, a commit-pinned URL and a link to another kind of file', () => {
    const repository = fixture(
      record('TEST-001', 'build-the-foundation', 'Nothing links out.'),
      record(
        'TEST-002',
        'second-slice',
        [
          'Follows [TEST-001](TEST-001-build-the-foundation.md).',
          'Was [TEST-000 (pruned)](https://github.com/o/r/blob/0123abc/docs/roadmap/TEST-000-old-slice.md).',
          'See [the guide](../guides/missing-guide.md).'
        ].join('\n')
      )
    )
    expect(item7(repository)).toEqual([])
  })
})
