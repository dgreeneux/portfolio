import { Link } from 'react-router-dom'

export default function ProjectCard({ slug, title, description, tags, thumbnail, imagePosition = 'center' }) {
  return (
    <Link to={`/project/${slug}`} className="project-card">
      <div className="project-image">
        {thumbnail
          ? <img src={thumbnail} alt={title} style={{ objectPosition: imagePosition }} />
          : <div className="project-image-placeholder" />}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags && (
          <ul className="project-tags">
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  )
}
