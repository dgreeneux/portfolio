import { Link } from 'react-router-dom'
import '../tailwind.css'
import './CarHomeCase.css'
import sessionPic1 from '../assets/DevJourneyMapsession pic.jpg'
import sessionPic2 from '../assets/DevJourneyMapsession pic2.jpg'
import slide1 from '../assets/Devjourneysession-slide1.png'
import slide2 from '../assets/Devjourneysession-slide2.png'

const sessionStats = [
  { metric: '4', label: 'front-end developers from across active digital projects' },
  { metric: '3', label: 'UX facilitators, including a junior designer learning the process' },
  { metric: '4', label: 'systemic pain points surfaced consistently across every developer map' },
]

const findings = [
  {
    source: 'Figma access and training',
    detail: 'Developers had limited access to Figma and no formal training on it. They could not reliably find the information they needed in project files, did not know navigation shortcuts, and struggled with complex file structures. Screens frequently lacked flow context: how they connected to each other and what behaviours applied between states.',
  },
  {
    source: 'Inconsistent UI specifications',
    detail: 'Specs were useful when present but not consistently structured. Some contained excessive detail that generated unnecessary implementation work. Others were too thin, particularly around design tokens and interaction behaviours. Developers had no reliable expectation of what a handoff package would contain.',
  },
  {
    source: 'Story definition vs. design mismatch',
    detail: 'When story specifications and Figma designs diverged, especially after a design change had been made post-sign-off, developers did not know which was the source of truth. This created repeated clarification loops, implementation rework, and uncertainty about whether a completed story was actually done.',
  },
  {
    source: 'Design token and theming gaps',
    detail: 'Developers were unclear on when and how to apply design tokens (for text styles, colour, and theming) and this guidance was sometimes missing or delivered late. The result was inconsistent implementation across projects, and token debt that accumulated quietly across releases.',
  },
]

const recommendations = [
  {
    step: '01',
    heading: 'Figma education for developers',
    body: 'Basic training on navigating Figma project files, understanding design token layers, and reading component documentation. Not design theory; functional literacy for implementation.',
  },
  {
    step: '02',
    heading: 'Standardised spec structure',
    body: 'A consistent template for design handoff packages: what is always included, what is optional, and how flow context and interaction behaviours are documented. Reduces the variance that was generating repeated clarification requests.',
  },
  {
    step: '03',
    heading: 'Single source of truth protocol',
    body: 'A defined process for managing divergence between story definitions and design files, particularly after a design has been changed post-sign-off. Designers flag the change in the story; the story is updated before the ticket can be closed.',
  },
  {
    step: '04',
    heading: 'Token guidance documentation',
    body: 'Clear, accessible documentation on how tokens work conceptually and how to apply them during implementation, owned by UX and maintained as a shared reference for both design and development.',
  },
  {
    step: '05',
    heading: 'Developer readiness checklist',
    body: 'A checklist developers complete before starting implementation on a new story, confirming they have the necessary design inputs. Combined with a lightweight survey to collect ongoing feedback from developers across projects.',
  },
]

export default function DevUJMCase() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Nav back */}
      <div className="border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header className="pt-10 pb-6 border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Internal Research · Design Operations</p>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Researching the design-to-dev handoff gap
          </h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {['UX Research', 'Facilitation', 'Design Operations', 'Journey Mapping', 'Internal'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Challenge */}
      <section className="pt-8 pb-0 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="mb-16">

            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The problem</p>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                Digital delivery projects were generating significant unplanned work for front-end developers: repeated builds, late corrections, and implementation cycles that should not have been necessary. The root causes were not visible in any project backlog. They lived in the gaps between design handoff, story definition, and implementation: the invisible friction that accumulates when teams assume alignment they do not actually have.
              </p>
            </div>

            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">My role</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Rather than hypothesising about what was causing the repeated work, I proposed a structured investigation: a half-day journey mapping session with the developers who had worked across these projects. I designed the session format, recruited participants, booked the space, and facilitated the day. A junior designer attended to learn the facilitation process. A senior designer based in another office joined remotely, both to contribute findings and to understand how this kind of session is structured, so they could run one with their own team.
            </p>

            {/* Session stats */}
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6">The session</p>
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-slate-100 mb-10">
              {sessionStats.map(({ metric, label }) => (
                <div key={metric}>
                  <p className="text-3xl font-bold text-slate-900 mb-1">{metric}</p>
                  <p className="text-sm text-slate-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Session structure</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
              {[
                { step: '01', title: 'Individual mapping', body: 'Each developer mapped their own workflow independently: activities, tools, people, pain points, and satisfaction across their end-to-end process on a structured whiteboard template.' },
                { step: '02', title: 'Group synthesis', body: 'Pain points were grouped, compared, and prioritised as a team. Patterns across individual maps became visible: the same friction points were appearing on every map.' },
                { step: '03', title: 'Solution ideation', body: 'The group generated potential fixes for the highest-priority pain points. Ideas were practical and immediate, not product vision, but changes to process, documentation, and tooling access.' },
                { step: '04', title: 'Next steps', body: 'Findings were captured in a structured deck. The session closed with a shared lunch, which surfaced additional comments not raised in the formal part of the day.' },
              ].map(s => (
                <div key={s.step} className="flex gap-4">
                  <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{s.step}</span>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1.5">{s.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Session photos */}
      <section className="py-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6">From the session</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ aspectRatio: '4/3' }}>
              <img src={sessionPic1} alt="Journey mapping session: developers mapping individual workflows" className="w-full h-full object-cover block" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ aspectRatio: '4/3' }}>
              <img src={sessionPic2} alt="Group synthesis: pain points grouped and prioritised" className="w-full h-full object-cover block" />
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">What we found</h2>
          <p className="text-lg text-slate-500 mb-10">
            Four pain points appeared consistently across every developer's journey map. None were surprising individually, but seeing them all in one room made their combined cost legible for the first time.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {findings.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">{f.source}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-10">Recommendations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recommendations.map(r => (
              <div key={r.step} className="flex gap-4">
                <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{r.step}</span>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1.5">{r.heading}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Outcome</p>
          <p className="text-lg text-slate-900 leading-relaxed font-medium mb-6">
            The findings were presented to the wider professional services group. The session format and materials were shared with UX designers in Kuala Lumpur and Toronto, who used them to run equivalent sessions with their own development teams independently.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            The value of the session was less in the individual findings (most of which experienced designers would have guessed) and more in making them visible and shared. Developers who had been navigating these friction points in isolation could see that their experience was structural, not personal. That shift in framing is what makes process change possible.
          </p>
        </div>
      </section>

    </div>
  )
}
