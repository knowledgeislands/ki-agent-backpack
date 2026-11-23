import type { AuditOutcome, RubricFamily } from '../../shared/rubric.ts'
import { judgment } from '../../shared/rubric.ts'
import { type PortableContext, REGISTER_PATH } from '../contexts/portable.ts'

const SOURCE = 'standard-portable-subagents.md#45-register-and-install'

export const REGISTER: RubricFamily<PortableContext, PortableContext> = {
  code: 'REGISTER',
  title: 'Role register',
  description: 'Every role source is registered, so the install run picks every one up.',
  standard: 'standard-portable-subagents.md',
  selectContext: (context) => context,
  items: [
    {
      code: 'REGISTER-1',
      title: 'Every role source is registered',
      description:
        'subagents/README.md links every role source under subagents/, each source declares a name, and every link resolves to a source.',
      sources: [SOURCE],
      mechanical: {
        level: 'WARN',
        remediation: {
          class: 'diagnostic',
          guidance:
            'Add a link to each unregistered role source in subagents/README.md, give each source a frontmatter name, and remove or correct each link that resolves to no source.'
        },
        audit: {
          phase: 'INSPECT',
          run: (context) => {
            const register = context.register()
            if (!register.present)
              return [{ status: 'NOT_APPLICABLE', message: 'The repository has no subagents/ role sources.' }]
            if (!register.registerExists)
              return [
                {
                  status: 'VIOLATION',
                  message: 'subagents/ has no register: add subagents/README.md linking every role source.',
                  subject: REGISTER_PATH
                }
              ]
            const outcomes: AuditOutcome[] = []
            const registered = new Set(register.registered)
            const sourcePaths = new Set(register.sources.map((source) => source.path))
            for (const source of register.sources) {
              if (source.name === null)
                outcomes.push({
                  status: 'VIOLATION',
                  message: `The role source declares no frontmatter name.`,
                  subject: source.path
                })
              if (!registered.has(source.path))
                outcomes.push({
                  status: 'VIOLATION',
                  message: `The role source is not registered: ${REGISTER_PATH} does not link it.`,
                  subject: source.path
                })
            }
            for (const path of register.registered)
              if (!sourcePaths.has(path))
                outcomes.push({
                  status: 'VIOLATION',
                  message: `The register links ${path}, which is not a role source.`,
                  subject: REGISTER_PATH
                })
            return outcomes.length
              ? outcomes
              : [
                  {
                    status: 'PASS',
                    message: `All ${register.sources.length} role sources are registered.`,
                    subject: REGISTER_PATH
                  }
                ]
          }
        }
      },
      judgment: judgment(
        'The register gives each role its lane, so the install run and a reader can tell the roles apart without opening each source.'
      )
    }
  ]
}
