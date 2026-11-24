import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { bindingOutcomes, createCoordinationSession } from './coordination.ts'

const roots: string[] = []

const fixture = (): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-coordination-'))
  roots.push(root)
  return root
}

const context = (root: string) => {
  const session = createCoordinationSession({ mode: 'audit', repository: root, userHome: root, configuration: {} })
  const [subject] = session.subjects
  if (!subject) throw new Error('the coordination session has no subject')
  return subject.context()
}

const statuses = (outcomes: readonly { status: string }[]) => outcomes.map((outcome) => outcome.status)

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

describe('coordinator binding', () => {
  const claude = (root: string, file: string, content: string): void => {
    mkdirSync(join(root, '.claude', 'output-styles'), { recursive: true })
    writeFileSync(join(root, '.claude', file), content)
  }
  const hooked = (command: string) => ({ hooks: [{ type: 'command', command }] })
  const footerHook = '$HOME/ki/hooks/coordinator-footer/coordinator-footer.sh'
  const userSettings = (events: readonly string[], footerEvent: string | null = 'Stop'): string =>
    JSON.stringify({
      hooks: {
        ...Object.fromEntries(
          events.map((event) => [event, [hooked('$HOME/ki/hooks/coordinator-reminder/coordinator-reminder.sh')]])
        ),
        ...(footerEvent ? { [footerEvent]: [hooked(footerHook)] } : {})
      }
    })

  test('a repository that does not select the output style is a violation', () => {
    const root = fixture()
    expect(statuses(context(root).binding.outcomes)).toEqual(['VIOLATION', 'INFO'])
  })

  test('the repository style is checked and the user half is not checked without user settings', () => {
    const root = fixture()
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture()
    expect(statuses(bindingOutcomes(root, home))).toEqual(['PASS', 'INFO'])
  })

  test('user settings that bind both events and a deployed style pass', () => {
    const root = fixture()
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture()
    claude(home, 'settings.json', userSettings(['UserPromptSubmit', 'SessionStart']))
    claude(home, join('output-styles', 'ki-coordinator.md'), '---\nname: ki-coordinator\n---\n')
    expect(statuses(bindingOutcomes(root, home))).toEqual(['PASS', 'PASS'])
  })

  test('a missing hook event and an undeployed style are each a violation', () => {
    const root = fixture()
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture()
    claude(home, 'settings.json', userSettings(['UserPromptSubmit']))
    const outcomes = bindingOutcomes(root, home)
    expect(statuses(outcomes)).toEqual(['PASS', 'VIOLATION', 'VIOLATION'])
    expect(outcomes[1]?.message).toContain('`SessionStart`')
    expect(outcomes[1]?.message).not.toContain('`UserPromptSubmit`')
  })

  test('a footer hook that is missing, or registered at another event, is a violation', () => {
    const root = fixture()
    claude(root, 'settings.json', JSON.stringify({ outputStyle: 'ki-coordinator' }))
    const home = fixture()
    claude(home, join('output-styles', 'ki-coordinator.md'), '---\nname: ki-coordinator\n---\n')
    for (const footerEvent of [null, 'SubagentStop']) {
      claude(home, 'settings.json', userSettings(['UserPromptSubmit', 'SessionStart'], footerEvent))
      const outcomes = bindingOutcomes(root, home)
      expect(statuses(outcomes)).toEqual(['PASS', 'VIOLATION'])
      expect(outcomes[1]?.message).toContain('`hooks/coordinator-footer/coordinator-footer.sh` at `Stop`')
    }
  })

  test('unreadable user settings are a violation, never printed', () => {
    const root = fixture()
    const home = fixture()
    claude(home, 'settings.json', '{ not json')
    claude(home, join('output-styles', 'ki-coordinator.md'), '')
    const outcomes = bindingOutcomes(root, home)
    expect(statuses(outcomes)).toEqual(['VIOLATION', 'VIOLATION', 'VIOLATION'])
    expect(outcomes.map((outcome) => outcome.message).join(' ')).not.toContain('not json')
  })
})
