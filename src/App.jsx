import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function Bio() {
  return (
    <section className="bio">
      <p className="bio-text">
        Dublin-based UX lead working at the intersection of regulated insurance products and scalable digital platforms. I specialise in systems thinking and delivery pragmatism — designing white-label architectures, navigating constrained delivery environments, and maintaining design quality when requirements shift. Alongside project work I mentor designers, run internal UX education workshops, and have led on hiring and building UX capability across the wider team.
      </p>
    </section>
  )
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Bio />
        <Projects />
        <Contact />
      </main>
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
