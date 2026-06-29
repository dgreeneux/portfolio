import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { mobileScreens, mobileHotspots, desktopScreens, desktopAnnotations } from '../data/carHomeData'
import '../tailwind.css'
import './CarHomeCase.css'

// ─── Hotspot ─────────────────────────────────────────────────────────────────

function Hotspot({ hotspot }) {
  const [open, setOpen] = useState(false)
  const [tipPos, setTipPos] = useState(null)
  const btnRef = useRef(null)
  const tipRef = useRef(null)
  const closeTimer = useRef(null)

  function computePos() {
    if (!btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    const vw = document.documentElement.clientWidth
    const tipW = 176
    const gap = 8
    const left = Math.min(Math.max(r.left + r.width / 2 - tipW / 2, gap), vw - tipW - gap)
    setTipPos({ top: r.bottom + gap, left })
  }

  // After each position update, measure the actual rendered tooltip and flip
  // above the button if it clips the bottom edge — runs before browser paint.
  useLayoutEffect(() => {
    if (!tipRef.current || !btnRef.current) return
    const tip = tipRef.current.getBoundingClientRect()
    const vh = document.documentElement.clientHeight
    if (tip.bottom > vh - 8) {
      const btn = btnRef.current.getBoundingClientRect()
      tipRef.current.style.top = `${btn.top - tip.height - 8}px`
    }
  }, [tipPos])

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }
  function cancelClose() {
    clearTimeout(closeTimer.current)
  }

  // Reposition on scroll so the tooltip tracks the button when the phone screen scrolls
  useEffect(() => {
    if (!open) return
    const onScroll = () => computePos()
    window.addEventListener('scroll', onScroll, true)
    return () => window.removeEventListener('scroll', onScroll, true)
  }, [open])

  return (
    <>
      <button
        ref={btnRef}
        className="absolute z-10 focus:outline-none outline-none appearance-none bg-transparent border-0 p-0 group"
        style={{ left: hotspot.x, top: hotspot.y, transform: 'translate(-50%, -50%)', pointerEvents: 'auto', WebkitTapHighlightColor: 'transparent' }}
        onPointerEnter={(e) => { if (e.pointerType !== 'mouse') return; cancelClose(); computePos(); setOpen(true) }}
        onPointerLeave={(e) => { if (e.pointerType !== 'mouse') return; scheduleClose() }}
        onClick={() => { computePos(); setOpen(o => !o) }}
        aria-label={hotspot.label}
      >
        <span className="hotspot-pulse" aria-hidden="true" />
        <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-blue-500" />
      </button>

      {open && tipPos && createPortal(
        <div
          ref={tipRef}
          className="w-44 text-left rounded-xl bg-gray-900 px-3 py-2.5 shadow-2xl"
          style={{ position: 'fixed', top: tipPos.top, left: tipPos.left, zIndex: 9999 }}
          role="tooltip"
          onPointerEnter={cancelClose}
          onPointerLeave={scheduleClose}
        >
          <p className="text-xs font-semibold text-blue-300 mb-1">{hotspot.label}</p>
          <p className="text-xs text-gray-300 leading-relaxed">{hotspot.tooltip}</p>
        </div>,
        document.body
      )}
    </>
  )
}

// ─── Placeholder screen (shown while image loads or if file is missing) ───────

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

// ─── Mobile carousel ─────────────────────────────────────────────────────────

function MobileCarousel() {
  return (
    <div className="relative">

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 scrollbar-hide">
        {mobileScreens.map((screen, i) => (
          <div key={screen.id} className="snap-center flex-shrink-0 flex flex-col items-center">
            {/* Phone mockup */}
            <div className="phone-outer">
              {/* Scrollable screen — hotspots inside so they anchor to image content */}
              <div className="phone-screen">
                <div className="relative">
                  <ScreenImage
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full block"
                    placeholderStyle={{ height: 520, background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%)' }}
                  />
                  {mobileHotspots
                    .filter(h => h.screenIndex === i)
                    .map((hotspot, hi) => (
                      <Hotspot key={hi} hotspot={hotspot} />
                    ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-500 tracking-widest uppercase">
              {String(i + 1).padStart(2, '0')}. {screen.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Desktop sticky scroll ────────────────────────────────────────────────────

function DesktopStickyScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const screenRefs = useRef(desktopScreens.map(() => ({ current: null })))
  const annotation = desktopAnnotations[activeIndex]

  useEffect(() => {
    const observers = screenRefs.current.map((ref, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i) },
        { threshold: 0.4, rootMargin: '-10% 0px -30% 0px' }
      )
      if (ref.current) obs.observe(ref.current)
      return obs
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  function scrollToScreen(i) {
    screenRefs.current[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
      {/* Left — sticky annotation */}
      <div className="lg:sticky lg:top-28">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-blue-600 font-mono text-sm font-semibold">{annotation.step}</span>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">{activeIndex + 1} of {desktopScreens.length}</span>
        </div>

        <h3 key={`h-${activeIndex}`} className="text-2xl font-bold text-slate-900 leading-tight mb-3 annotation-enter">
          {annotation.heading}
        </h3>
        <p key={`p-${activeIndex}`} className="text-base text-slate-500 leading-relaxed annotation-enter">
          {annotation.body}
        </p>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-8">
          {desktopScreens.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToScreen(i)}
              aria-label={`View screen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-blue-500 w-8' : 'bg-slate-200 w-3 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right — scrolling screens */}
      <div className="space-y-10">
        {desktopScreens.map((screen, i) => (
          <div
            key={screen.id}
            ref={el => { screenRefs.current[i].current = el }}
          >
            <div className="macbook-outer">
              {/* Aluminum lid shell */}
              <div className="macbook-lid">
                {/* Recessed black bezel */}
                <div className="macbook-bezel">
                  <div className="macbook-camera-dot" />
                  <div className="macbook-screen-area">
                    <ScreenImage
                      src={screen.src}
                      alt={screen.alt}
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
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function CarHomeCase() {
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
            Inception to go-live in six months
          </h1>

          <div className="flex flex-wrap gap-2 mt-5">
            {['Car insurance', 'House insurance', 'White labelling', 'Digital transformation', 'Responsive design', 'B2C'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Section A — Desktop */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The challenge</p>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                One of the world's largest insurers needed to validate a new model: a scalable, white-label digital platform for personal lines that could be launched in six months and replicated for each new partner without bespoke engineering work. For end customers, the existing journey had real friction: a quote table that was difficult to scan, labels and error messages that weren't clear, and a form flow that tripped users on details that should have been invisible. For the business, this was as much a proof of trust as a UX project: the carrier needed to know that a scalable white-label platform was genuinely deliverable before committing to further investment.
              </p>
            </div>
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6">Project goals</p>
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-slate-100 mb-10">
              {[
                { metric: '65%', label: 'of new business premium generated online' },
                { metric: '12 weeks', label: 'to onboard each new partner' },
                { metric: '60%', label: 'of self-service transactions completed digitally' },
              ].map(({ metric, label }) => (
                <div key={metric}>
                  <p className="text-3xl font-bold text-slate-900 mb-1">{metric}</p>
                  <p className="text-sm text-slate-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">My role</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              I led the UX effort as the design lead, directing a supporting designer and serving as the UX representative in the core delivery leadership team. This was a fixed-price contract with a demanding client; scope protection was as critical as the design itself. The backlog was deliberately tight to meet the timeline, and the customer used the ambiguity in story definitions to push for additional scope at every opportunity. My job was to reason them down from their ideal state to what was actually deliverable, quickly and with clear rationale. One concrete example: when the customer's own UX designer proposed bespoke mid-term adjustment flows with reduced page sets for each journey type, I successfully argued against it. The work was unscoped, it would have prevented reuse of the existing submission flow, and users familiar with the quote-and-buy journey would already know the pattern. The proposal was dropped and the delivery timeline held.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              A recurring dynamic throughout was being positioned between competing pressures: the scope ambition of the client's own UX designer, component feasibility constraints from our engineering team, and timeline protection from the project manager. My role often involved finding a position the client's designer could accept and our developers could actually build, then documenting it clearly enough that it held when the conversation resumed the following sprint. The PM and I worked closely to keep client demands within achievable increments; the engineers and I worked closely to distinguish where custom component work was genuinely warranted from where a platform default was good enough.
            </p>

            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Research input</p>
              <p className="text-lg text-slate-500 leading-relaxed">
                The carrier provided their own research output at the start of the engagement: a mapped user journey, funnel analytics showing where users dropped off across the existing flow, and a documented list of known pain points from their internal research programme. Three headline findings shaped the core design decisions: quote page drop-off, difficulty scanning the comparison table, and confusion from vague labels throughout the flow. The funnel data also surfaced two specific flow changes: the product selection order was revised to put bikes before items (users were consistently adding bicycles to the items section because bikes appeared later in the flow, causing them to realise the mistake and backtrack), and multi-question form pages were restructured as natural language sentences users can review and correct, combining related inputs into a readable summary rather than a series of separate labelled fields, reducing perceived form length without removing any required questions.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Design approach</p>
              <p className="text-lg text-slate-500 leading-relaxed">
                The flow itself was largely inherited from the carrier's existing product, a deliberate call given the six-month delivery window. The real design challenge was adapting it to a responsive platform while building a white-label architecture future partners could adopt without custom work. I advised constraining partner theming to brand colour, system feedback colours, typography, and illustration retheming, and resisted granular component-level customisation. Leaving that door open would mean bespoke work for every new partner launch, directly undermining the scalability model. Decisions were also informed by analysis of the carrier's existing flow: their data identified two recurring issues: users failing date validation by entering two-digit years, and add-on selection states that weren't clear enough to give users confidence the cover had actually been applied. Both findings shaped specific design decisions, called out in the annotations below.
              </p>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-10">01. Desktop Journey</h2>
          <DesktopStickyScroll />
        </div>
      </section>

      {/* Section B — Mobile */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">02. Mobile Journey</h2>
            <p className="text-lg text-slate-500">
              With the majority of new business generated online, mobile wasn't a scaled-down desktop experience. Every screen had to work at thumb-reach, in a single session, without a safety net. Hover the pulsing blue nodes to explore the key friction points we solved.
            </p>
          </div>
          <MobileCarousel />
        </div>
      </section>

      {/* Outcome */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Delivery</p>
          <p className="text-lg text-slate-900 leading-relaxed font-medium max-w-3xl">
            The platform was delivered on schedule within a fixed-price contract. It is going live with the first partner in July 2026, six months from project kick-off, as committed.
          </p>
        </div>
      </section>

    </div>
  )
}
