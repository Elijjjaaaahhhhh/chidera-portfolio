import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectDetail.css'

function Lightbox({ screenshots, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setCurrent(i => (i + 1) % screenshots.length)
      if (e.key === 'ArrowLeft')  setCurrent(i => (i - 1 + screenshots.length) % screenshots.length)
      if (e.key === 'Escape')     onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [screenshots.length, onClose])

  return (
    <div className="lightbox__backdrop" onClick={onClose}>
      <div className="lightbox__box" onClick={e => e.stopPropagation()}>

        <button className="lightbox__close" onClick={onClose}>✕</button>

        <div className="lightbox__img-wrap">
          <img
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            className="lightbox__img"
          />
        </div>

        <div className="lightbox__controls">
          <button
            className="lightbox__btn"
            onClick={() => setCurrent(i => (i - 1 + screenshots.length) % screenshots.length)}
          >
            ←
          </button>
          <span className="lightbox__counter">
            {current + 1} / {screenshots.length}
          </span>
          <button
            className="lightbox__btn"
            onClick={() => setCurrent(i => (i + 1) % screenshots.length)}
          >
            →
          </button>
        </div>

        <div className="lightbox__thumbs">
          {screenshots.map((shot, i) => (
            <button
              key={i}
              className={`lightbox__thumb ${i === current ? 'lightbox__thumb--active' : ''}`}
              onClick={() => setCurrent(i)}
            >
              <img src={shot} alt={`Thumb ${i + 1}`} />
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const otherProjects = projects.filter(p => p.id !== id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!project) {
    return (
      <div className="project-detail__notfound">
        <h1>Project not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="project-detail">

      {lightboxIndex !== null && (
        <Lightbox
          screenshots={project.screenshots}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="project-detail__hero">
        <div className="container">
          <Link to="/#projects" className="project-detail__back">
            ← Back to Projects
          </Link>
          <span className="project-detail__badge">{project.category}</span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.subtitle}</p>
          <div className="project-detail__meta">
            <span>📅 {project.duration}</span>
            <span>👤 {project.role}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-detail__layout">

          <div className="project-detail__main">

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">Project Overview</h2>
              <p>{project.overview}</p>
            </div>

            <div className="project-detail__challenge">
              <h3 className="project-detail__challenge-title">The Challenge</h3>
              <p>{project.challenge}</p>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">The Solution</h2>
              <p>{project.solution}</p>
            </div>

            <div className="project-detail__results">
              <h2 className="project-detail__results-title">Results & Impact</h2>
              <ul className="project-detail__results-list">
                {project.results.map((result, i) => (
                  <li key={i}>
                    <span className="project-detail__results-check">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">Project Screenshots</h2>
              <p className="project-detail__gallery-hint">
                Click any image to view full size
              </p>
              <div className="project-detail__gallery">
                {project.screenshots.map((shot, i) => (
                  <button
                    key={i}
                    className="project-detail__screenshot-btn"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img
                      src={shot}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="project-detail__screenshot"
                    />
                    <div className="project-detail__screenshot-overlay">
                      <span>⤢ View</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="project-detail__sidebar">

            <div className="project-detail__sidebar-card">
              <h3 className="project-detail__sidebar-title">Key Metrics</h3>
              <div className="project-detail__sidebar-metrics">
                {project.metrics.map((m, i) => (
                  <div key={i} className="project-detail__sidebar-metric">
                    <span className="project-detail__sidebar-value">{m.value}</span>
                    <span className="project-detail__sidebar-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-detail__sidebar-card">
              <h3 className="project-detail__sidebar-title">Tools & Technologies</h3>
              <div className="project-detail__tools">
                {project.tools.map((tool, i) => (
                  <span key={i} className="project-detail__tool-tag">{tool}</span>
                ))}
              </div>
            </div>

            <div className="project-detail__sidebar-card">
              <h3 className="project-detail__sidebar-title">Project Details</h3>
              <div className="project-detail__details-list">
                <div className="project-detail__detail-item">
                  <span className="project-detail__detail-label">Duration</span>
                  <span className="project-detail__detail-value">{project.duration}</span>
                </div>
                <div className="project-detail__detail-item">
                  <span className="project-detail__detail-label">My Role</span>
                  <span className="project-detail__detail-value">{project.role}</span>
                </div>
                <div className="project-detail__detail-item">
                  <span className="project-detail__detail-label">Category</span>
                  <span className="project-detail__detail-value">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="project-detail__sidebar-card">
              <h3 className="project-detail__sidebar-title">Project Links</h3>
              <div className="project-detail__links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                    <span>GitHub Repository</span>
                    <span>↗</span>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--accent">
                    <span>Live Dashboard</span>
                    <span>↗</span>
                  </a>
                )}
                {project.links.presentation && (
                  <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                    <span>View Presentation</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>

            <div className="project-detail__cta-card">
              <h3>Interested in this project?</h3>
              <p>Let's discuss how I can apply similar solutions to your challenges.</p>
              <Link to="/#contact" className="project-detail__cta-btn">
                Get in Touch
              </Link>
            </div>

          </div>
        </div>

        <div className="project-detail__others">
          <h2 className="project-detail__others-title">Other Projects</h2>
          <div className="project-detail__others-grid">
            {otherProjects.map((p, i) => (
              <Link to={`/projects/${p.id}`} className="project-detail__other-card" key={i}>
                <div className="project-detail__other-cover">
                  <img src={p.coverImage} alt={p.title} />
                  <div className="project-detail__other-overlay"></div>
                </div>
                <div className="project-detail__other-body">
                  <span className="project-detail__other-badge">{p.category}</span>
                  <h3>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}