import { Link } from 'react-router-dom'
import '../tailwind.css'
import './CarHomeCase.css'
import toolScreenshot from '../assets/Screenshot 2026-06-27 at 23.59.48.png'

const contrastData = [
  { name: 'Brand 60',             hex: '#052049', vsWhite: 16.04, vsBlack: 1.31,  whiteLevel: 'AAA', blackLevel: 'DNP' },
  { name: 'Brand Accent (Orange)', hex: '#FF6B00', vsWhite: 2.86,  vsBlack: 7.36,  whiteLevel: 'DNP', blackLevel: 'AAA' },
  { name: 'Brand Accent (Lime)',   hex: '#90BD31', vsWhite: 2.21,  vsBlack: 9.51,  whiteLevel: 'DNP', blackLevel: 'AAA' },
  { name: 'Trusted Blue 60',       hex: '#00739d', vsWhite: 5.33,  vsBlack: 3.94,  whiteLevel: 'AA',  blackLevel: 'AA18' },
  { name: 'Teal 60',               hex: '#66c7c5', vsWhite: 1.99,  vsBlack: 10.54, whiteLevel: 'DNP', blackLevel: 'AAA' },
  { name: 'Deep Blue 60',          hex: '#3C4C5E', vsWhite: 8.80,  vsBlack: 2.39,  whiteLevel: 'AAA', blackLevel: 'DNP' },
  { name: 'Gray 100 (text)',        hex: '#28333f', vsWhite: 12.84, vsBlack: 1.64,  whiteLevel: 'AAA', blackLevel: 'DNP' },
  { name: 'Red 60',                hex: '#c4221f', vsWhite: 5.84,  vsBlack: 3.60,  whiteLevel: 'AA',  blackLevel: 'AA18' },
  { name: 'Yellow 60',             hex: '#D66D00', vsWhite: 3.47,  vsBlack: 6.05,  whiteLevel: 'AA18', blackLevel: 'AA' },
  { name: 'Green 60',              hex: '#2a8440', vsWhite: 4.69,  vsBlack: 4.47,  whiteLevel: 'AA',  blackLevel: 'AA18' },
  { name: 'Blue 60',               hex: '#4074ce', vsWhite: 4.56,  vsBlack: 4.61,  whiteLevel: 'AA',  blackLevel: 'AA' },
  { name: 'Purple 60',             hex: '#954F9C', vsWhite: 5.42,  vsBlack: 3.88,  whiteLevel: 'AA',  blackLevel: 'AA18' },
]

const levelStyles = {
  AAA:  'bg-emerald-100 text-emerald-800',
  AA:   'bg-blue-100 text-blue-800',
  AA18: 'bg-amber-100 text-amber-800',
  DNP:  'bg-red-100 text-red-700',
}

function Badge({ level }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${levelStyles[level]}`}>
      {level}
    </span>
  )
}

const steps = [
  {
    step: '01',
    heading: 'Load the token file',
    body: 'Paste or upload a customer JSON design token file into the notebook. The tool reads the token architecture and extracts all key brand colour values.',
  },
  {
    step: '02',
    heading: 'Calculate contrast ratios',
    body: 'Using the WCAG 2.0 relative luminance formula, the tool calculates contrast ratios for each colour against standard white (#ffffff) and black (#000000) backgrounds.',
  },
  {
    step: '03',
    heading: 'Flag compliance levels',
    body: 'Each colour is assessed against AAA (7.0+), AA (4.5+), AA18 (3.0+), and DNP thresholds. Failures are surfaced immediately with context on where the colour can and cannot be safely used.',
  },
  {
    step: '04',
    heading: 'Deliver plain-language recommendations',
    body: 'For every colour, the tool explains not just whether it passes, but where it can and cannot safely be used: which backgrounds work, which fail, and why. Brand teams get actionable guidance without needing a designer in the room to interpret the results.',
  },
]

const insights = [
  {
    step: '01',
    heading: 'Catches failures before implementation',
    body: 'Brand teams typically submit token files without accessibility validation. This tool surfaces contrast failures at the configuration stage, before they reach a live partner environment and require rework.',
  },
  {
    step: '02',
    heading: 'Scales across 25+ brands without extra effort',
    body: 'Each new partner onboarding generates a new token file. Running the audit takes seconds per brand rather than manual calculation per colour pair, and the time saving compounds as the partner count grows.',
  },
  {
    step: '03',
    heading: 'Output is immediately actionable',
    body: 'Plain-language recommendations mean brand teams can act on findings without UX involvement in every remediation. The tool transfers knowledge, not just results: explaining what fails, why, and what to do about it.',
  },
]

export default function AccessibilityToolCase() {
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
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Design Tooling</p>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Accessibility audit tooling for design token files
          </h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Design tooling', 'Accessibility', 'WCAG 2.0', 'Design tokens', 'AI', 'White labelling'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">

          {/* Challenge */}
          <div className="mb-16">
            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The problem</p>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                Configuring 25+ white-label broker brands means 25+ unique colour palettes, each defined in a JSON design token file. A plugin tool already existed for accessibility checking, but it still required manually pulling each colour value out of the JSON file and entering it one by one before any test could be run. On a live client token file, that meant extracting values, running each check, and compiling the output by hand, a slow, error-prone process that made proper WCAG auditing something that rarely happened as thoroughly as it should.
              </p>
            </div>

            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The solution</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-4">
              A NotebookLM-powered tool that reads a client's design token JSON directly, knows which colour values to extract, and runs the full WCAG 2.0 audit automatically. Rather than entering values manually, I provide the JSON file and the tool produces the complete contrast report (AAA, AA, AA18, or DNP for each colour against white and black backgrounds) with plain-language guidance on where each colour can and cannot safely be used. An audit that previously required significant manual work now takes seconds from a single file. Built for my own workflow, with the intention of sharing and extending it once the core audit logic is solid.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Note on methodology: the WCAG 2.0 contrast calculations use standard relative luminance formulas, the same underlying maths as tools like the EightShapes Contrast Grid. The contribution here is the extraction layer: rather than manually pulling colour values out of a JSON token file and entering them into a separate tool, this notebook reads the token file directly and applies those calculations automatically. The problem it solves is the manual handoff step, not the maths.
            </p>
          </div>

          {/* Tool screenshot */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The tool</p>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src={toolScreenshot} alt="NotebookLM contrast audit tool showing colour swatches, hex values, and WCAG compliance results" className="w-full block" />
            </div>
          </div>

          {/* How it works */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-10">How it works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {steps.map(s => (
                <div key={s.step} className="flex gap-4">
                  <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{s.step}</span>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1.5">{s.heading}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample output */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Sample output</h2>
            <p className="text-base text-slate-500 mb-8">Contrast audit results for a sample brand token file. 12 key colours assessed against white and black.</p>

            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[40px_1fr_1fr_100px_100px] gap-4 px-5 py-3 bg-slate-50 border-b border-slate-200">
                <div />
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Colour</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Hex</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">vs White</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">vs Black</p>
              </div>

              {/* Rows */}
              {contrastData.map((row, i) => (
                <div
                  key={row.hex}
                  className={`grid grid-cols-[40px_1fr_1fr_100px_100px] gap-4 items-center px-5 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                >
                  <div className="w-7 h-7 rounded-md border border-slate-200 flex-shrink-0" style={{ background: row.hex }} />
                  <p className="text-sm font-medium text-slate-800">{row.name}</p>
                  <p className="text-sm text-slate-500 font-mono">{row.hex}</p>
                  <div className="flex flex-col gap-0.5">
                    <Badge level={row.whiteLevel} />
                    <p className="text-xs text-slate-400">{row.vsWhite.toFixed(2)}:1</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <Badge level={row.blackLevel} />
                    <p className="text-xs text-slate-400">{row.vsBlack.toFixed(2)}:1</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4">
              {[['AAA', '7.0+ ratio'], ['AA', '4.5+ ratio'], ['AA18', '3.0+ large text only'], ['DNP', 'Does not pass']].map(([level, desc]) => (
                <div key={level} className="flex items-center gap-2">
                  <Badge level={level} />
                  <span className="text-xs text-slate-500">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-10">Impact</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {insights.map(s => (
                <div key={s.step} className="flex gap-4">
                  <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{s.step}</span>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1.5">{s.heading}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
