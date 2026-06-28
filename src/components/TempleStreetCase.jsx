import { Link } from 'react-router-dom'
import '../tailwind.css'
import './CarHomeCase.css'
import bearHero from '../assets/Temple Street Bear.jpg'
import bearSetup from '../assets/Temple Street Bear_6.jpg'
import bearReception from '../assets/Temple Street Bear_11.jpg'
import appointmentLetter from '../assets/NewAppointmentLetter.png'

const researchFindings = [
  {
    source: 'Lean sigma report',
    stat: '15%',
    detail: 'of EEG slots went unused in 2019 — children arrived unprepared for sleep deprivation, forcing cancellations. Staff were spending significant time repeating information that should have been in written materials.',
  },
  {
    source: '30+ parent interviews',
    stat: '30+',
    detail: 'Parents described the sleep deprivation process as "very difficult and stressful." The journey to the hospital was "an unexpectedly difficult task." Electrode attachment was "a long process" and "quite uncomfortable" for children.',
  },
  {
    source: 'Staff interviews',
    stat: '',
    detail: 'Confirmed that patients regularly arrived without adequate sleep deprivation. Staff fielded frequent requests for information that should have been accessible independently — diverting time away from clinical work.',
  },
  {
    source: 'Appointment letter audit',
    stat: '',
    detail: 'Vague sleep deprivation guidelines. Text-heavy with no hierarchy. Directions assumed prior knowledge of the hospital. Critical information — contact details, cancellation policy — buried in the body copy.',
  },
]

const hmw = [
  {
    number: '01',
    question: 'How might we free up more time for staff to conduct tests?',
    detail: 'By reducing the time spent repeating information that parents couldn\'t find independently.',
  },
  {
    number: '02',
    question: 'How might we better support parents during the sleep deprivation process?',
    detail: 'By decreasing ineffective tests caused by poor preparation — the root cause of the 15% slot loss.',
  },
  {
    number: '03',
    question: 'How might we familiarise young patients with clinical environments?',
    detail: 'To reduce anxiety and improve cooperation during the EEG, particularly for children with secondary conditions like ASD or epilepsy.',
  },
]

const decisions = [
  {
    step: '01',
    heading: 'A gender-neutral teddy bear as the patient',
    body: 'Rather than written descriptions of the EEG process, we photographed "Alex" — a gender-neutral teddy bear — undergoing the procedure in the actual department. The same clinicians, the same room, the same equipment. Alex arrived at reception, was prepared in the waiting area, and had electrodes applied by clinical staff. Children could see exactly what would happen to them, modelled by something familiar and non-threatening.',
  },
  {
    step: '02',
    heading: 'Softening the seizure language',
    body: 'Early prototypes used clinical language around seizure risk. Testing with parents — including a nurse — revealed it was frightening enough to disengage them from the rest of the guide. The section was restructured in partnership with Epilepsy Ireland: what to do, what not to do, and when to call for help, written in plain language without alarming framing. Parents later cited it as one of the most valued sections.',
  },
  {
    step: '03',
    heading: 'Activities designed for 2am, not 2pm',
    body: 'The sleep deprivation guide needed activities that would keep a young child engaged through the night without tiring them out before the scan. Star-gazing, baking, board games, and a yoga routine were selected based on parent-tested feedback: low physical exertion, no screens late at night, accessible without spending money. A "Teddy Bear Mock EEG" activity let children practise electrode placement on their own toy before the appointment.',
  },
  {
    step: '04',
    heading: 'Sleep requirements as a table, not a paragraph',
    body: 'The original letter described sleep deprivation requirements in dense prose. The redesign used a structured table with icons, broken down by age group — babies, under two, over two, and older children. The requirement varied significantly by age, and parents needed to find their child\'s category instantly under stress. Hierarchy and visual separation did the work that words couldn\'t.',
  },
  {
    step: '05',
    heading: 'Maps over QR codes',
    body: 'An early prototype used QR codes to link to directions. Testing surfaced the problem: parents navigating to the hospital at 6am with a sleep-deprived child in the back seat are not stopping to scan a code. Basic maps and clear street-level directions were added to the letter itself, with the recommendation that a second adult accompany the family to handle the journey.',
  },
]

const validationQuotes = [
  {
    quote: 'A wonderful help. Much less scary than anything we received before.',
    context: 'Parent, child with epilepsy',
  },
  {
    quote: 'The seizure safety section was exactly what I needed. My daughter had an unexpected seizure and I didn\'t know what to do.',
    context: 'Parent, awaiting first sleep-deprived EEG',
  },
  {
    quote: 'Fantastic improvement on the original. Clear and concise — this will genuinely help families prepare.',
    context: 'Neurophysiology department staff',
  },
]

export default function TempleStreetCase() {
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

      {/* Hero image — full bleed */}
      <div className="w-full" style={{ maxHeight: '520px', overflow: 'hidden' }}>
        <img
          src={bearHero}
          alt="Clinician applying EEG electrodes to Alex the teddy bear at Temple Street hospital"
          className="w-full object-cover object-center"
          style={{ maxHeight: '520px' }}
        />
      </div>

      {/* Header */}
      <header className="pt-10 pb-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">Case Study · Children's Health Ireland at Temple Street</p>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-4">
            Redesigning the EEG experience for children and families
          </h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Healthcare', 'Service Design', 'UX Research', 'Information Design', 'Paediatric', 'Pro bono'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Challenge */}
      <section className="pt-8 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">The challenge</p>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                A sleep-deprived EEG means keeping a young child — often with epilepsy, ASD, or other complex conditions — awake through the night, navigating an unfamiliar hospital in the early morning, and then holding them still while electrodes are attached to their scalp. In 2019, 15% of EEG appointment slots at Children's Health Ireland at Temple Street went unused because families weren't adequately prepared. Parents were failing the process not through negligence but through lack of accessible, understandable information.
              </p>
            </div>

            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">My role</p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              This was a pro bono project undertaken in partnership with the Neurophysiology Department at Children's Health Ireland. I led the end-to-end design process — from research through to validated final deliverables — producing a redesigned appointment letter, a comprehensive sleep deprivation guide for parents, and a restructured department website. The project ran under real constraints: no print budget, time-limited staff access, and a user group under significant emotional stress.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Research</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl">
            The project began with a lean sigma report already commissioned by the department — a rare gift of quantified baseline data. That was followed by primary research across three groups.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {researchFindings.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">{f.source}</p>
                {f.stat && (
                  <p className="text-4xl font-bold text-slate-900 mb-3">{f.stat}</p>
                )}
                <p className="text-sm text-slate-500 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HMW */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-10">How might we</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hmw.map(h => (
              <div key={h.number} className="flex gap-4">
                <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{h.number}</span>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1.5">{h.question}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverable 1 — Appointment letter */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Deliverable 01</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Appointment letter</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl">
            The original letter was text-heavy, assumed knowledge of the hospital layout, and buried critical information — contact details, cancellation policy, sleep deprivation requirements — deep in unstructured prose. The redesign reorganised content by urgency, replaced directions with a basic map, and introduced a structured table for sleep requirements by age group.
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src={appointmentLetter}
              alt="Redesigned Temple Street EEG appointment letter"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      {/* Deliverable 2 — Sleep guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Deliverable 02</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Sleep deprivation guide</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl">
            A dedicated guide for parents covering the night before the appointment, the journey to the hospital, what to expect in the department, and what to do in the event of a seizure. Content was shaped by parent-tested activity recommendations and developed in partnership with Epilepsy Ireland for the seizure safety section. Two coloring pages featuring nocturnal animals with EEG electrodes were included as a tool for children while parents read.
          </p>

          {/* Hospital context photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={bearReception}
                alt="Alex the teddy bear arriving at Temple Street reception"
                className="w-full block object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="p-4 bg-white border-t border-slate-100">
                <p className="text-sm text-slate-500">Alex arriving at Temple Street — the guide walks families through each moment of the visit</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={bearSetup}
                alt="Alex the teddy bear in the EEG room with the monitoring setup"
                className="w-full block object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="p-4 bg-white border-t border-slate-100">
                <p className="text-sm text-slate-500">The full EEG setup — equipment, monitoring screen, and the clinical environment children will encounter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key design decisions */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-10">Key design decisions</h2>
          <div className="space-y-8">
            {decisions.map(d => (
              <div key={d.step} className="flex gap-6 bg-white rounded-2xl p-6 border border-slate-100">
                <span className="text-blue-600 font-mono text-sm font-semibold flex-shrink-0 mt-0.5">{d.step}</span>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1.5">{d.heading}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Validation</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl">
            The final guide was shared with 40 parents. Nine responded — a strong return rate for an unsolicited design validation. The appointment letter and guide were reviewed by two department staff members, who provided language feedback on the seizure section and confirmed the letter layout was a clear improvement.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {validationQuotes.map((q, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-base text-slate-700 leading-relaxed mb-4 italic">"{q.quote}"</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{q.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
