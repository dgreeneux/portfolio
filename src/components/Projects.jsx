import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import pickAndMixImg from '../assets/Pick and Mix.png'
import carHomeThumb from '../assets/Desk_1.png'
import templeStreetThumb from '../assets/Temple Street Bear.jpg'
import accessibilityThumb from '../assets/Screenshot 2026-06-27 at 23.59.48.png'
import devUJMThumb from '../assets/DevJourneyMapsession pic.jpg'

const projects = [
  {
    id: 1,
    slug: 'car-home-quote-and-buy',
    title: 'Inception to go-live in six months',
    description: 'White-label quote-and-buy for one of the world\'s largest personal lines insurers, delivered on a fixed-price contract from blank canvas to live partner deployment.',
    tags: ['Quote & Buy', 'White-label', 'B2C', 'Personal Lines'],
    thumbnail: carHomeThumb,
  },
  {
    id: 2,
    slug: 'commercial-underwriters',
    title: 'PI portal for 25 broker brands',
    description: 'Designing a pick-and-mix cover selection and payment experience for a professional indemnity portal serving multiple white-label broker brands.',
    tags: ['Professional Indemnity', 'White-label', 'B2B', 'London Market', 'Multi-broker'],
    thumbnail: pickAndMixImg,
    imagePosition: 'left top',
  },
  {
    id: 3,
    slug: 'temple-street-eeg',
    title: 'Redesigning the EEG experience for children and families',
    description: 'In partnership with the Neurophysiology Department at Children\'s Health Ireland, redesigning the end-to-end experience for families preparing for paediatric EEG scans. Research-led service design addressing a 15% appointment slot wastage rate.',
    tags: ['Healthcare', 'Service Design', 'UX Research', 'Paediatric'],
    thumbnail: templeStreetThumb,
  },
  {
    id: 4,
    slug: 'developer-ujm',
    title: 'Researching the design-to-dev handoff gap',
    description: 'A structured journey mapping session with front-end developers to surface and document the systemic friction in the design-to-development handoff. Findings shared across three offices.',
    tags: ['UX Research', 'Facilitation', 'Design Operations', 'Internal'],
    thumbnail: devUJMThumb,
  },
]

const moreWork = [
  {
    slug: 'accessibility-token-audit',
    title: 'Accessibility audit tool for design tokens',
    description: 'A NotebookLM-powered tool that automates WCAG 2.0 contrast auditing from a single JSON token file, eliminating manual colour extraction across 25+ white-label brands.',
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

        <div className="more-work">
          <h2>More work</h2>
          <div className="more-work-list">
            {moreWork.map(project => (
              <Link key={project.slug} to={`/project/${project.slug}`} className="more-work-item">
                <div className="more-work-thumb">
                  {project.thumbnail
                    ? <img src={project.thumbnail} alt={project.title} />
                    : <div className="more-work-thumb-placeholder" />}
                </div>
                <div className="more-work-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="project-tags">
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
                <span className="more-work-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
