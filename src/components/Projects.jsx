import ProjectCard from './ProjectCard'
import pickAndMixImg from '../assets/Pick and Mix.png'
import carHomeThumb from '../assets/Desk_1.png'

const projects = [
  {
    id: 1,
    slug: 'car-home-quote-and-buy',
    title: 'Car and home quote and buy flow',
    description: 'A self-serve digital journey enabling customers to get a quote and purchase car and home insurance products online.',
    tags: ['UX Design', 'Interaction Design', 'Insurance'],
    thumbnail: carHomeThumb,
  },
  {
    id: 2,
    slug: 'commercial-underwriters',
    title: 'Commercial Underwriters',
    description: 'Designing a pick-and-mix cover selection and payment experience for commercial insurance brokers.',
    tags: ['UX Design', 'Interaction Design', 'Insurance'],
    thumbnail: pickAndMixImg,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Selected Work</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
