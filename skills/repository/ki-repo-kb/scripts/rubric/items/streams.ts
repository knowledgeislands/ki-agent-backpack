import type { RubricFamily, RubricItem } from '../../shared/rubric.ts'
import type { KbRubricContext } from '../contexts/kb.ts'
import { auditEvidence, type StreamRubricContext } from '../contexts/streams.ts'

const SOURCE = 'standard-streams-structure.md'

// The Streams layout checks came from ki-repo-kb-streams under KB-FOLD b (22 November 2026), keeping their codes.
const STREAM_1: RubricItem<StreamRubricContext> = {
  code: 'STREAM-1',
  title: 'operational areas',
  description:
    'Streams contains the Roadmap operational area and no design folder; recurring definitions belong in Activities, with Trades reserved for later explicit adoption.',
  sources: [SOURCE],
  mechanical: {
    level: 'WARN',
    overrideLevels: ['FAIL'],
    remediation: {
      class: 'diagnostic',
      guidance:
        'Establish Roadmap; move any design folder into a change document in the package of its work, work/<territory>/<id>/; reconcile any Housekeeping definitions into configured Activities only with owner approval, preserving linked-run evidence.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.operationalAreas, 'WARN', ['FAIL']) }
  }
}

const STREAM_2: RubricItem<StreamRubricContext> = {
  code: 'STREAM-2',
  title: 'legacy state folders',
  description:
    'Legacy state and Focus folders, Streams/Initiatives/ and Project folder notes are migration inputs, not target Streams structure.',
  sources: [SOURCE],
  mechanical: {
    level: 'WARN',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Classify each retained legacy record before removing or replacing a legacy navigation folder; move each Initiative to a theme page and each Project folder note to a flat note.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.legacyFolders, 'WARN') }
  }
}

const STREAM_4: RubricItem<StreamRubricContext> = {
  code: 'STREAM-4',
  title: 'adapter-owned records',
  description:
    'Roadmap records follow their owning adapter; recurring definitions are Activity notes rather than a generic Streams record model.',
  sources: [SOURCE],
  judgment: {
    scope: 'Roadmap records and any recurring definitions still awaiting reconciliation out of Streams.',
    prompt:
      'Does each roadmap record follow its adapter, with recurring obligations routed to the configured Activity collection?',
    outcomes: ['conforming', 'adapter migration required', 'classification decision required'],
    guidance:
      'Route the record to the correct area and apply its owning adapter’s format; record any unresolved classification decision.'
  }
}

const STREAM_5: RubricItem<StreamRubricContext> = {
  code: 'STREAM-5',
  title: 'legacy migration disposition',
  description:
    'Each retained legacy Stream has a deliberate roadmap, recurring Activity, canonical-knowledge, or prune disposition.',
  sources: [SOURCE],
  judgment: {
    scope: 'Sampled legacy Streams records and their owner-approved migration decisions.',
    prompt: 'Does each sampled legacy record have an appropriate explicit disposition?',
    outcomes: ['conforming', 'migration required', 'owner decision required'],
    guidance:
      'Record the owner-approved destination before moving, retaining, or pruning the legacy record; never infer it from the former path.'
  }
}

const STREAM_9: RubricItem<StreamRubricContext> = {
  code: 'STREAM-9',
  title: 'upward-only registry notes',
  description:
    'Project notes and theme pages under Streams/Projects/ and Streams/Themes/, and any legacy Initiative notes, name no work records and carry no dated ## Update section; records link upwards to their Project or theme.',
  sources: [SOURCE],
  mechanical: {
    level: 'FAIL',
    remediation: {
      class: 'diagnostic',
      guidance:
        'Remove record lists, record links and status narrative from the note, keeping any idea or context in ## Notes. Records carry their own project or theme, and ki views list them.'
    },
    audit: { phase: 'INSPECT', run: (context) => auditEvidence(context.registryNotes, 'FAIL') }
  }
}

export const STREAM: RubricFamily<KbRubricContext, StreamRubricContext> = {
  code: 'STREAM',
  title: 'Streams structure',
  description: 'Operational-area layout, legacy migration, and upward-only registry notes.',
  standard: SOURCE,
  selectContext: (context) => context.stream,
  items: [STREAM_1, STREAM_2, STREAM_4, STREAM_5, STREAM_9]
}
