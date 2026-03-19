import { Link } from 'react-router-dom'
import projects from '../data/projects'
import AnimateIn from './AnimateIn'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <AnimateIn>
          <div className="projects__header">
            <div className="section-label">
              <span className="section-label__line"></span>
              <span className="section-label__text">Projects</span>
            </div>
            <div className="projects__header-row">
              <h2 className="projects__heading">
                Featured Work.<br />
                <span className="accent">Real problems. Real output.</span>
              </h2>
              <p className="projects__subheading">
                Three end-to-end projects spanning data engineering,
                business intelligence, and financial modelling.
              </p>
            </div>
          </div>
        </AnimateIn>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <Link to={`/projects/${project.id}`} className="project-card">
                <div className="project-card__cover">
                  <img src={project.coverImage} alt={project.title} className="project-card__img" />
                  <div className="project-card__overlay"></div>
                  <span className="project-card__badge">{project.category}</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.subtitle}</p>
                  <div className="project-card__metrics">
                    {project.metrics.map((m, j) => (
                      <div className="project-card__metric" key={j}>
                        <span className="project-card__metric-value">{m.value}</span>
                        <span className="project-card__metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-card__tools">
                    {project.tools.slice(0, 4).map((tool, k) => (
                      <span className="project-card__tool" key={k}>{tool}</span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="project-card__tool project-card__tool--more">
                        +{project.tools.length - 4}
                      </span>
                    )}
                  </div>
                  <span className="project-card__cta">
                    View Details <span>→</span>
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}