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
          Dublin-based UX lead working at the intersection of regulated insurance products and scalable digital platforms. I specialise in systems thinking and delivery pragmatism — designing white-label architectures, navigating constrained delivery environments, and maintaining design quality when requirements shift. Beyond product work, I mentor designers on craft and confidence, run internal UX education workshops, and have led on hiring and building UX capability across the wider team. I've also applied research methods internally — running journey mapping sessions with engineering teams to document recurring process inefficiencies that were invisible in the project backlog. My MA in Design at NCAD included a final project in paediatric healthcare, partnering directly with the Neurophysiology Department at Children's Health Ireland.
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

function Home() {
  return (
    <>
      <Hero />
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
