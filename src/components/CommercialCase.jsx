import { useState } from 'react'
import { Link } from 'react-router-dom'
import { commercialScreens } from '../data/commercialData'
import '../tailwind.css'
import './CarHomeCase.css'

function PlaceholderScreen({ label, className = '', style = {} }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 text-slate-600 ${className}`}
      style={style}
    >
      <svg className="w-8 h-8 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-xs font-medium text-center px-4">{label}</span>
    </div>
  )
}

function ScreenImage({ src, alt, className = '', style = {}, placeholderStyle = {} }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <PlaceholderScreen label={alt} className={className} style={placeholderStyle} />
  return <img src={src} alt={alt} className={className} style={style} draggable={false} onError={() => setFailed(true)} />
}

function MacbookMockup({ src, alt }) {
  return (
    <div className="macbook-outer">
      <div className="macbook-lid">
        <div className="macbook-bezel">
          <div className="macbook-camera-dot" />
          <div className="macbook-screen-area">
            <ScreenImage
              src={src}
              alt={alt}
              className="w-full block"
              placeholderStyle={{ aspectRatio: '16/10', background: 'linear-gradient(160deg, #f8fafc 0%, #f1f5f9 100%)' }}
            />
          </div>
        </div>
      </div>
      <div className="macbook-hinge" />
      <div className="macbook-base">
        <div className="macbook-keyboard-area" />
        <div className="macbook-trackpad" />
      </div>
    </div>
  )
}

function AnnotationCard({ step, heading, body }) {
  return (
    <div className="flex gap-4">
      <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{step}</span>
      <div>
        <h4 className="text-base font-semibold text-slate-900 mb-1.5">{heading}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

export default function CommercialCase() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Nav back */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Case Study</p>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Building a PI portal for 25 brands at once
          </h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Professional indemnity', 'White labelling', 'B2B', 'B2C', 'Multi-broker', 'EMEA', 'London market'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Context */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">

            {/* Challenge */}
            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The challenge</p>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                A London market carrier's Professional Risks division had no digital portal. Brokers were working without self-service tooling, direct customers had no way to complete their own submissions, and the carrier needed to support new business, mid-term adjustments, and renewals across a white-label architecture that would eventually serve more than 25 broker brands across EMEA. Everything had to integrate with an existing ecosystem of core policy systems, identity management, payment providers, and document generation, while a separate consulting firm ran the backend track in parallel.
              </p>
            </div>

            {/* Scope metrics */}
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6">Project scope</p>
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-slate-100 mb-10">
              {[
                { metric: '25+', label: 'white-label broker brand variants' },
                { metric: '3', label: 'core policy journeys (new business, MTA, renewal)' },
                { metric: '2', label: 'personas served in a single flow (broker agent + direct customer)' },
              ].map(({ metric, label }) => (
                <div key={metric}>
                  <p className="text-3xl font-bold text-slate-900 mb-1">{metric}</p>
                  <p className="text-sm text-slate-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            {/* My role */}
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">My role</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              I joined as part of a design team working across the submission flow. The project ran during a period of significant resourcing pressure across our EMEA digital practice, with demand for platform work high, and two lead designers left the company in quick succession. With the team reduced to one remaining lead and myself covering the entire EMEA region, I stepped into full design ownership of the Commercial Underwriters track: the quote page (the most complex screen in the product), the logged-in portal experience, and the white-label theming configuration system. I had access to the remaining lead for consultation, but day-to-day design decisions and the client relationship were mine to manage. It was, in practice, an accelerated entry into lead-level delivery.
            </p>

            {/* Discovery context */}
            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Discovery context</p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Formal user research with brokers wasn't part of the engagement; discovery was conducted with internal subject matter experts who understood the product domain but weren't always empowered to make decisions on behalf of the business. The existing solution provided a useful reference point: brokers and agents were filling out paper forms and calling customers directly, with no self-service capability at all. That baseline made the design direction clear even without direct user access; the challenge was getting the details right without the usual feedback loops.
              </p>
            </div>

            {/* Design approach */}
            <div>
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Design approach</p>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                The design challenge on this project was less about interface patterns and more about operating without stable ground. Requirements were signed off by subject matter experts who weren't empowered to commit on behalf of the product, which meant designs that had passed review were regularly revisited when the product owner saw them for the first time at demo. Meanwhile, the backend configuration track, run by a separate consulting firm, introduced a second layer of moving targets: any screen depending on a configurable field could be invalidated without notice.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                My response was to design defensibly. Rather than waiting for consensus that rarely came, I documented the rationale behind every significant decision so it could survive a challenge without relying on verbal sign-off. When requirements were genuinely ambiguous, I made the more conservative choice and flagged the assumption explicitly. When the cycle of late-stage demo changes threatened delivery, I escalated to the project manager and introduced a process change: SMEs were required to sign off directly on individual Jira tickets before they could be closed, creating a paper trail that made reversals visible and accountable. It didn't eliminate the dysfunction but it reduced the churn and kept engineering on track.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                The white-label requirement added a third constraint. The carrier was reluctant to interface directly with its broker clients, which meant we were building theming tooling for brands we had never spoken to. We resolved this the same way we handled the theming architecture: define the configurable surface clearly, limit partner theming to brand colour, typography, illustration, and content rules, and build the tooling flexible enough that brokers could self-configure within those bounds without needing a designer in the room.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Throughout, I was regularly caught between the client's commercial expectations and what our engineering team could deliver on the agreed schedule. Working closely with the project manager on scope management, and with engineers to understand what was technically feasible versus where a platform default was sufficient, was as much a part of the role as the design work itself. When client expectations and engineering constraints were in direct conflict, finding a position both sides could commit to, and documenting it clearly enough to prevent revisits, became a core skill on this project.
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-16 py-8 border-t border-b border-slate-100">
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6">Outcome</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { metric: '10 Nov 2025', label: 'technical go-live for the PI digital portal' },
                { metric: '5', label: 'broker portals live by January 2026' },
                { metric: 'BAU', label: 'platform handed to advisory support, June 2026. Active implementation complete.' },
              ].map(({ metric, label }) => (
                <div key={metric}>
                  <p className="text-2xl font-bold text-slate-900 mb-1">{metric}</p>
                  <p className="text-sm text-slate-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured screens */}
          <div className="space-y-20">
            {commercialScreens.map((screen) => (
              <div key={screen.id}>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">{screen.label}</h2>

                {/* MacBook mockup */}
                <div className="mb-10">
                  <MacbookMockup src={screen.src} alt={screen.alt} />
                </div>

                {/* Annotation cards */}
                <div className={`grid gap-8 ${screen.annotations.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-3'}`}>
                  {screen.annotations.map((ann) => (
                    <AnnotationCard key={ann.step} {...ann} />
                  ))}
                </div>

                {/* Divider between screens */}
                <div className="mt-20 border-t border-slate-100" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
