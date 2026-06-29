import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import pickAndMixImg from '../assets/Pick and Mix.png'
import carHomeThumb from '../assets/Desk_1.png'
import templeStreetThumb from '../assets/Temple Street Bear.jpg'
import accessibilityThumb from '../assets/Screenshot 2026-06-27 at 23.59.48.png'

const projects = [
  {
    id: 1,
    slug: 'car-home-quote-and-buy',
    title: 'Inception to go-live in six months',
    description: 'Validating a scalable white-label partnerships model for one of the world\'s largest insurers, launching two partners on a fixed-price contract while redesigning a complex personal lines quote-and-buy flow for end customers.',
    tags: ['Quote & Buy', 'Responsive Design', 'White-label', 'B2C', 'Personal Lines'],
    thumbnail: carHomeThumb,
  },
  {
    id: 2,
    slug: 'commercial-underwriters',
    title: 'Commercial Underwriters',
    description: 'Designing a pick-and-mix cover selection and payment experience for commercial insurance brokers.',
    tags: ['Professional Indemnity', 'White-label', 'B2B', 'London Market', 'Multi-broker'],
    thumbnail: pickAndMixImg,
    imagePosition: 'left top',
  },
  {
    id: 3,
    slug: 'temple-street-eeg',
    title: 'Redesigning the EEG experience for children and families',
    description: 'Redesigning how families prepare for paediatric EEG scans at Children\'s Health Ireland, addressing a 15% slot wastage rate through research, information design, and a parent sleep deprivation guide.',
    tags: ['Healthcare', 'Service Design', 'UX Research', 'Paediatric'],
    thumbnail: templeStreetThumb,
  },
  {
    id: 4,
    slug: 'accessibility-token-audit',
    title: 'Accessibility audit tool for design tokens',
    description: 'A NotebookLM-powered tool that reads client JSON token files and automatically audits brand colours for WCAG 2.0 compliance across 25+ white-label brands.',
    tags: ['Design Tooling', 'Accessibility', 'WCAG', 'AI'],
    thumbnail: accessibilityThumb,
  },
]

function FeaturedCard({ slug, title, description, tags, thumbnail }) {
  return (
    <Link to={`/project/${slug}`} className="featured-card">
      <div className="featured-image">
        {thumbnail
          ? <img src={thumbnail} alt={title} />
          : <div className="featured-image-placeholder" />}
      </div>
      <div className="featured-info">
        {tags && (
          <ul className="project-tags" style={{ marginBottom: '1rem' }}>
            {tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="featured-cta">View case study →</span>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Selected Work</h2>
        <FeaturedCard {...featured} />
        <div className="projects-grid">
          {rest.map(project => (
            <ProjectCard key={project.id} {...project} imagePosition={project.imagePosition} />
          ))}
        </div>
      </div>
    </section>
  )
}
