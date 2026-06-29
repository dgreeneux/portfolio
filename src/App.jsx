import { HashRouter, Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Lead UX Designer · Dublin</p>
        <h1 className="hero-name">David Greene</h1>
        <p className="hero-bio">
          Dublin-based UX lead working at the intersection of regulated insurance products and scalable digital platforms. I specialise in systems thinking and delivery pragmatism: designing white-label architectures, navigating constrained delivery environments, and maintaining design quality when requirements shift. Beyond product work, I mentor designers on craft and confidence — one recent example being one-to-one coaching sessions with a technically strong designer who needed to develop their presenting skills, specifically reading audiences and adapting their communication style. I run internal UX education workshops, have led on hiring and building UX capability across the wider team, and have applied research methods internally to surface process inefficiencies invisible in the backlog. My MA in Design at NCAD included a final project in paediatric healthcare, partnering directly with the Neurophysiology Department at Children's Health Ireland.
        </p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/david-m-greene/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/DavidGreene_CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
          <a href="mailto:davidgreenedesign@gmail.com">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="footer-name">David Greene · Lead UX Designer</span>
        <div className="footer-links">
          <a href="mailto:davidgreenedesign@gmail.com">davidgreenedesign@gmail.com</a>
          <a href="https://www.linkedin.com/in/david-m-greene/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/DavidGreene_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        </div>
      </div>
    </footer>
  )
}

const howILead = [
  {
    heading: 'Delivery pragmatism',
    body: 'Fixed-price contracts live or die on scope discipline. I protect the backlog, document design rationale so it survives late challenges, and negotiate scope down with evidence rather than instinct. When timelines are tight, I distinguish what is essential from what is desirable and make that case clearly.',
  },
  {
    heading: 'Designing defensibly',
    body: 'In unstable delivery environments, verbal sign-off is not enough. I build paper trails, introduce process changes when existing ones are breaking, and make assumptions explicit so decisions survive being revisited. On one project, I required SMEs to sign off directly on individual Jira tickets — it reduced churn and kept engineering on track.',
  },
  {
    heading: 'Growing capability',
    body: 'I mentor designers on both craft and confidence, run UX education sessions for developers and business analysts, and have led on hiring and building design capability across the team. I have also created reusable design infrastructure — including a baseline line-of-business template — to reduce ramp-up time on future engagements.',
  },
]

const philosophy = [
  {
    heading: 'Know the rules before you design',
    body: 'Timeline, architecture, stakeholder power, contractual scope — these are not obstacles to good design, they define what good design means in this context. I establish those constraints first, then find the best achievable solution within them.',
  },
  {
    heading: 'Back your judgment under pressure',
    body: 'In consulting, the ideal process rarely survives contact with delivery. When a story hits the rocks and engineering needs a working solution signed off by the client that afternoon, you lean on experience, do rapid ideation, and back your own design judgment. The alternative is not available.',
  },
  {
    heading: 'Think in releases, not deliverables',
    body: 'Getting an MVP to market and generating value creates space to do the next phase properly. If a feature can move to release 2 without compromising the core journey, that is often the right call — it reduces delivery risk and removes pressure from the go-live.',
  },
]

function HowILead() {
  return (
    <>
      <section className="how-i-lead">
        <div className="how-i-lead-inner">
          <h2 className="how-i-lead-label">How I lead</h2>
          <div className="how-i-lead-grid">
            {howILead.map(item => (
              <div key={item.heading} className="how-i-lead-item">
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="philosophy">
        <div className="how-i-lead-inner">
          <h2 className="how-i-lead-label">What I believe</h2>
          <div className="how-i-lead-grid">
            {philosophy.map(item => (
              <div key={item.heading} className="how-i-lead-item">
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <HowILead />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  )
}
