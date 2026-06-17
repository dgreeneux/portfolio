import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { mobileScreens, mobileHotspots, desktopScreens, desktopAnnotations } from '../data/carHomeData'
import '../tailwind.css'
import './CarHomeCase.css'

// ─── Hotspot ─────────────────────────────────────────────────────────────────

function Hotspot({ hotspot }) {
  const [open, setOpen] = useState(false)

  return (
    <button
      className="absolute z-10 focus:outline-none group"
      style={{ left: hotspot.x, top: hotspot.y, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(o => !o)}
      aria-label={hotspot.label}
    >
      <span className="hotspot-pulse" aria-hidden="true" />
      <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-lg" />

      {open && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 text-left rounded-xl bg-gray-900 px-3 py-2.5 shadow-2xl"
          role="tooltip"
        >
          <p className="text-xs font-semibold text-blue-300 mb-1">{hotspot.label}</p>
          <p className="text-xs text-gray-300 leading-relaxed">{hotspot.tooltip}</p>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </button>
  )
}

// ─── Placeholder screen (shown while image loads or if file is missing) ───────

function PlaceholderScreen({ label, className = '', style = {} }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 text-slate-400 ${className}`}
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
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 carousel-fade-left" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 carousel-fade-right" />

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-10 scrollbar-hide">
        {mobileScreens.map((screen, i) => (
          <div key={screen.id} className="snap-center flex-shrink-0 flex flex-col items-center">
            {/* Phone mockup */}
            <div className="phone-outer">
              {/* Dynamic Island */}
              <div className="phone-notch" />
              {/* Side buttons */}
              <div className="phone-btn phone-btn-mute" />
              <div className="phone-btn phone-btn-vol-up" />
              <div className="phone-btn phone-btn-vol-down" />
              <div className="phone-btn-power" />
              {/* Scrollable screen */}
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

            <p className="mt-4 text-xs font-semibold text-slate-400 tracking-widest uppercase">
              {String(i + 1).padStart(2, '0')} — {screen.label}
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
          <span className="text-blue-500 font-mono text-sm font-semibold">{annotation.step}</span>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">{activeIndex + 1} of {desktopScreens.length}</span>
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
      <div className="space-y-16">
        {desktopScreens.map((screen, i) => (
          <div
            key={screen.id}
            ref={el => { screenRefs.current[i].current = el }}
          >
            <div className="macbook-outer">
              <div className="macbook-lid">
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
              <div className="macbook-hinge" />
              <div className="macbook-base">
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
        <div className="max-w-5xl mx-auto px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header className="py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-blue-500 tracking-widest uppercase">Case Study</span>
            <span className="text-slate-200">·</span>
            <span className="text-xs text-slate-400">Insurance · UX Design</span>
          </div>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6" style={{ maxWidth: 640 }}>
            Car and home quote and buy flow
          </h1>

          <p className="text-xl text-slate-500 leading-relaxed" style={{ maxWidth: 520 }}>
            A self-serve digital journey enabling customers to get a quote and purchase car and home insurance products online.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {['UX Design', 'Interaction Design', 'Insurance', 'B2C'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Section A — Desktop */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">Section A</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">01. Empowering the User</h2>
            <p className="text-lg text-slate-500" style={{ maxWidth: 520 }}>
              Dynamic quote adjustments on desktop. Scroll through the screens — the panel on the left updates to explain each step as it comes into view.
            </p>
          </div>
          <DesktopStickyScroll />
        </div>
      </section>

      {/* Section B — Mobile */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">Section B</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">02. Frictionless Onboarding</h2>
            <p className="text-lg text-slate-500" style={{ maxWidth: 520 }}>
              Identity questions paired with smart API lookups. Hover the pulsing blue nodes to explore the key UX decisions behind each screen.
            </p>
          </div>
          <MobileCarousel />
        </div>
      </section>

    </div>
  )
}
