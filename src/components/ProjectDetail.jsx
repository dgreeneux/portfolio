import { useParams, Link } from 'react-router-dom'
import pickAndMixImg from '../assets/Pick and Mix.png'
import paymentImg from '../assets/Payment.png'
import CarHomeCase from './CarHomeCase'
import CommercialCase from './CommercialCase'
import AccessibilityToolCase from './AccessibilityToolCase'
import TempleStreetCase from './TempleStreetCase'

const projects = {
  'commercial-underwriters': {
    title: 'Commercial Underwriters',
    description: 'Designing a pick-and-mix cover selection and payment experience for commercial insurance brokers.',
    tags: ['UX Design', 'Interaction Design', 'Insurance'],
    images: [
      { src: pickAndMixImg, caption: 'Pick and mix covers:selecting products for the client' },
      { src: paymentImg, caption: 'Payment:choosing a payment method for the policy' },
    ],
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()

  if (slug === 'car-home-quote-and-buy') return <CarHomeCase />
  if (slug === 'commercial-underwriters') return <CommercialCase />
  if (slug === 'accessibility-token-audit') return <AccessibilityToolCase />
  if (slug === 'temple-street-eeg') return <TempleStreetCase />

  const project = projects[slug]

  if (!project) {
    return (
      <div className="detail-not-found">
        <Link to="/" className="detail-back">← Back</Link>
        <p>Project not found.</p>
      </div>
    )
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="detail-back">← Back</Link>
        </div>
      </header>
      <main className="detail">
        <div className="detail-header">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {project.tags && (
            <ul className="project-tags">
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          )}
        </div>
        <div className="detail-images">
          {project.images.map((img, i) => (
            <figure key={i} className="detail-figure">
              <img src={img.src} alt={img.caption} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </main>
    </>
  )
}
