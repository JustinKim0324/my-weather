import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="page">
      <div className="project-list">
        {projects.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="project-card">
            <div className="project-card-header">
              <h3>{p.title}</h3>
              <span className="project-arrow">→</span>
            </div>
            <p className="project-summary">{p.summary}</p>
            <div className="project-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
