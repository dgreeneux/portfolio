import ProjectCard from './ProjectCard'
import paymentImg from '../assets/Payment.png'
import pickAndMixImg from '../assets/Pick and Mix.png'

const projects = [
  {
    id: 1,
    title: 'Commercial Underwriters — Quote Flow',
    description: 'Designing a pick-and-mix insurance cover selection and payment experience for commercial brokers.',
    tags: ['UX Design', 'Interaction Design', 'Insurance'],
    image: pickAndMixImg,
  },
  {
    id: 2,
    title: 'Commercial Underwriters — Payment',
    description: 'Streamlining payment method selection and quote confirmation for a commercial insurance platform.',
    tags: ['UX Design', 'Visual Design', 'Fintech'],
    image: paymentImg,
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
