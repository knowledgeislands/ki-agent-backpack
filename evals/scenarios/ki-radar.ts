/**
 * Outcome scenarios for the `ki-radar` governance contract, one radar of two subject kinds (RADAR-MERGE a).
 *
 * The agentic scenarios test the house-specific distinction between specification maturity, implementation
 * evidence, interoperability evidence, and structural patterns. The model scenarios test the separation of
 * recommendation, support, and retirement state; evaluation-unit integrity; and evidence-backed consumer
 * hand-off rather than general model-comparison advice.
 */
import type { Scenario } from '../harness.ts'

export const scenarios: Scenario[] = [
  {
    skill: 'ki-radar',
    id: 'agentic-radar-classification-and-uncertainty',
    prompt:
      'A vendor repeatedly calls its orchestration design an agent graph and a W3C Community Group is discussing a related protocol. May the radar call either one a formal standard?',
    assertions: [
      {
        name: 'vendor term is not a standard',
        re: /(vendor|marketing)[^.\n]{0,80}(not|does not|isn.t)[^.\n]{0,45}(standard|normative)|cannot[^.\n]{0,55}formal standard/i
      },
      {
        name: 'community group is incubation evidence',
        re: /community group[^.\n]{0,90}(incubat|not[^.\n]{0,30}(recommendation|standard))/i
      },
      { name: 'records uncertainty', re: /uncertainty|unknown|unverified|evidence gap/i }
    ],
    rubric:
      'House contract: vendor terminology is not a formal standard, and standards-body incubation is not a Recommendation. Record each subject kind and maturity from evidence, retain uncertainty, and avoid upgrading claims through association.'
  },
  {
    skill: 'ki-radar',
    id: 'agentic-radar-interoperability-gate',
    prompt:
      'A protocol has a versioned specification and several client packages, but only one catalogued server. Is that enough for Trial or Adopt in Knowledge Islands?',
    assertions: [
      {
        name: 'packages are not interoperability proof',
        re: /(package|client)[^.\n]{0,80}(not enough|insufficient|does not prove|isn.t proof)/i
      },
      {
        name: 'requires independent interoperability evidence',
        re: /independent[^.\n]{0,70}(server|implementation|interop)|interoperab[^.\n]{0,70}(demonstrat|evidence|test)/i
      },
      {
        name: 'requires KI use and local evidence',
        re: /(Knowledge Islands|KI|local)[^.\n]{0,80}(use case|evidence|trial|fit)/i
      }
    ],
    rubric:
      'House contract: versioning and package availability are separate from demonstrated independent interoperability. Trial or Adopt needs a concrete Knowledge Islands use case and proportionate local evidence; the radar may retain Assess or Watch without changing consumers.'
  },
  {
    skill: 'ki-radar',
    id: 'agentic-radar-structural-vocabulary',
    prompt:
      'Explain why a graph-orchestrated agent workflow, a knowledge graph, and a provenance graph must remain separate radar subjects.',
    assertions: [
      { name: 'control flow', re: /control flow|execution|orchestrat|routing/i },
      { name: 'knowledge structure', re: /knowledge[^.\n]{0,45}(entity|relation|semantic|fact)/i },
      { name: 'provenance structure', re: /provenance[^.\n]{0,55}(lineage|evidence|origin|derivation)/i },
      { name: 'not equivalent standards', re: /(distinct|separate|not equivalent|different)/i }
    ],
    rubric:
      'House contract: graph orchestration describes execution or control flow, a knowledge graph represents semantic entities and relations, and a provenance graph represents origin or derivation of evidence. Similar graph language does not make them equivalent standards or collapse their owners.'
  },
  {
    skill: 'ki-radar',
    id: 'model-radar-separate-state-axes',
    prompt:
      'A model is currently a runtime default, but new evidence makes further adoption questionable. Can one status describe it, or which independent radar states must be recorded?',
    assertions: [
      { name: 'recommendation ring remains separate', re: /adopt|trial|assess|hold/i },
      { name: 'support state remains separate', re: /default|available|evaluation|not integrated/i },
      { name: 'retirement state remains separate', re: /active|retiring|retired/i },
      { name: 'movement remains separate', re: /new|inward|outward|unchanged/i }
    ],
    rubric:
      'House contract: recommendation ring (`adopt`, `trial`, `assess`, `hold`), actual harness support (`default`, `available`, `evaluation`, `not-integrated`), retirement (`active`, `retiring`, `retired`), and movement (`new`, `inward`, `outward`, `unchanged`) are independent axes. A default may move outward or to hold before downstream configuration changes.'
  },
  {
    skill: 'ki-radar',
    id: 'model-radar-evaluation-unit-integrity',
    prompt:
      'One source reports a bare model score and another reports a coding-agent route using that model. May I merge the scores into one ranking, and what identity must local evidence retain?',
    assertions: [
      {
        name: 'rejects numerical merging',
        re: /(do not|must not|cannot|should not)[^.\n]{0,70}(merge|combine)|not[^.\n]{0,40}comparable/i
      },
      {
        name: 'distinguishes evaluation units',
        re: /bare model|model-agent|provider endpoint|complete task environment/i
      },
      { name: 'retains executable route', re: /route|agent|harness|environment/i }
    ],
    rubric:
      'House contract: bare-model, provider-endpoint, model-agent, and complete-task-environment evidence remain distinct. They may corroborate one another but are not numerically merged without an explicit defensible method. Local evidence retains the exact model version plus executable agent, protocol/access route, harness, dataset, and environment.'
  },
  {
    skill: 'ki-radar',
    id: 'model-radar-movement-and-handoff',
    prompt:
      'A provider model card claims a new model leads its benchmark. Is that enough to move it from Assess to Adopt and change our default immediately?',
    assertions: [
      {
        name: 'provider claim is corroborating only',
        re: /provider[^.\n]{0,70}(corroborat|not enough|insufficient|self.report)/i
      },
      {
        name: 'requires independent and local-fit evidence',
        re: /(two|independent)[^.\n]{0,70}(source|evidence)|local.fit|controlled real use/i
      },
      {
        name: 'radar does not mutate consumers',
        re: /(does not|must not|cannot)[^.\n]{0,70}(default|configuration|runtime)|inform[^.\n]{0,30}(not|rather than).*mutat/i
      },
      {
        name: 'routes implementation through normal work',
        re: /ki-work next|roadmap|owning repository|owner.local/i
      }
    ],
    rubric:
      'House contract: provider performance claims are corroborating evidence, not sufficient movement evidence. Inward movement needs current primary identity evidence, materially independent evaluation evidence where available, and local-fit evidence proportional to the ring; Trial requires controlled real use. The radar informs consumers but never changes defaults, installs routes, or retires support. Approved consequences become owner-local work through `ki-work next`.'
  }
]
