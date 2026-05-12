import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <div className="page">
        <div className="content-card">
          <h2>프로젝트를 찾을 수 없습니다</h2>
          <p>존재하지 않는 프로젝트입니다.</p>
          <Link to="/projects" className="back-link">← 목록으로</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="content-card">
        <Link to="/projects" className="back-link">← 목록으로</Link>

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link project-link--demo">
              라이브 데모 ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
