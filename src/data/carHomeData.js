import mob1 from '../assets/Mob_1.png'
import mob2 from '../assets/Mob_2.png'
import mob3 from '../assets/Mob_3.png'
import mob4 from '../assets/Mob_4.png'
import desk1 from '../assets/Desk_1.png'
import desk2 from '../assets/Desk_2.png'
import desk3 from '../assets/Desk_3.png'
import desk4 from '../assets/Desk_4.png'
import desk5 from '../assets/Desk_5.png'

// ─── Mobile screens ───────────────────────────────────────────────────────────

export const mobileScreens = [
  { id: 'mob-1', src: mob1, alt: 'About you: personal details', label: 'About you' },
  { id: 'mob-2', src: mob2, alt: 'Driving history', label: 'Driving history' },
  { id: 'mob-3', src: mob3, alt: 'Enter reg: car and drivers', label: 'Enter reg' },
  { id: 'mob-4', src: mob4, alt: 'Car details: auto-populated', label: 'Car details' },
]

// ─── Mobile hotspot annotations ───────────────────────────────────────────────

export const mobileHotspots = [
  {
    screenIndex: 0,
    x: '82%',
    y: '33%',
    label: 'Interaction design over form design',
    tooltip: 'Stacked button groups for employment status cut taps on mobile. Occupation and industry use live-search autocomplete: type a partial match, not scroll a long list. Perceived form length drops significantly without removing a single question.',
  },
  {
    screenIndex: 1,
    x: '65%',
    y: '77%',
    label: 'Personalized and pre-contextualized',
    tooltip: 'Every question is anchored to the policyholder by name. A summary format at the bottom, "Dave Greene has been a UK resident for 3+ years", lets users confirm the output rather than re-read every answer. Drivers with a clean licence skip endorsement and claims questions entirely.',
  },
  {
    screenIndex: 2,
    x: '50%',
    y: '46%',
    label: 'One field, one tap',
    tooltip: 'A single reg input via DVLA API replaces 10+ manual vehicle fields, the biggest single drop-off reduction in the flow. A "Don\'t know the registration?" escape handles edge cases without cluttering the primary path.',
  },
  {
    screenIndex: 3,
    x: '86%',
    y: '11%',
    label: 'Confirm, don\'t retype',
    tooltip: 'Make, model, engine, year, and transmission are pulled from the reg lookup and shown in a confirmation card with a "Search again" edit option. Users verify, not enter. The screen then builds progressively: mileage, overnight storage, and safety features.',
  },
]

// ─── Desktop screens ──────────────────────────────────────────────────────────

export const desktopScreens = [
  { id: 'desk-1', src: desk1, alt: 'Desktop – Quote overview' },
  { id: 'desk-2', src: desk2, alt: 'Desktop – Cover selection' },
  { id: 'desk-3', src: desk3, alt: 'Desktop – Quote adjustments' },
  { id: 'desk-4', src: desk4, alt: 'Desktop – Policy details' },
  { id: 'desk-5', src: desk5, alt: 'Desktop – About you (final step)' },
]

// ─── Desktop sticky annotations ───────────────────────────────────────────────

export const desktopAnnotations = [
  {
    step: '01',
    heading: 'Structured capture, guided by context',
    body: 'Button groups over dropdowns for employment and home ownership: faster to answer, fewer taps. Occupation uses live-search autocomplete with a contextual help link for edge cases. A calendar date picker replaces free-text date entry. Analysis of the carrier\'s existing flow identified two-digit year entry as a recurring validation failure and support issue. The compliance declaration surfaces inline so users never leave the flow.',
  },
  {
    step: '02',
    heading: 'Property detail without the form fatigue',
    body: 'Address pre-fills in an editable card with no re-entry. Cover type and property type use visual button grids rather than dropdowns. Compliance statements surface as closeable inline accordions, handling regulatory requirements without a separate T&Cs screen.',
  },
  {
    step: '03',
    heading: 'Comparison that guides without forcing',
    body: 'Three named tiers with a feature matrix frame the decision without overwhelming. The excess slider links directly to the quoted premium, so users trade upfront cost against claim protection in real time. A sticky price component follows the user as they scroll, keeping the quoted premium visible throughout without cluttering the comparison interface, satisfying FCA price visibility requirements while maintaining clarity. Excess categories are broken out individually so there are no surprises at claim time.',
  },
  {
    step: '04',
    heading: 'Payment flexibility, built into the quote',
    body: 'Analysis of the carrier\'s existing flow showed users frequently couldn\'t tell whether add-ons had been applied. Add-ons now surface with explicit selected and unselected states alongside value bullets, making the upsell part of the decision rather than a post-purchase surprise. One Annual/Monthly toggle recalculates all three tiers simultaneously with no page reload. The running total updates visibly with every choice.',
  },
  {
    step: '05',
    heading: 'A summary screen that earns confidence',
    body: 'Every section of cover is expandable inline with no separate review pages. All four policy documents surface pre-purchase, satisfying FCA pre-sale requirements. Auto-renewal opt-out is given equal prominence to the default, and the declaration uses plain English rather than a standard T&Cs checkbox.',
  },
]
