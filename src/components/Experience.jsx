import AnimateIn from './AnimateIn'
import './Experience.css'

const experiences = [
  {
    role: 'Data & IT Intern',
    company: 'Surulere Local Government Office',
    location: 'Lagos, Nigeria',
    period: 'Jul 2025 – Present',
    badge: 'NYSC',
    badgeType: 'nysc',
    bullets: [
      'Enforced end-to-end data governance across 5+ departments as the primary data resource, achieving 100% accuracy in municipal records maintenance.',
      'Strengthened organisational data security by migrating critical legacy datasets to digital, trackable form and implementing granular access controls aligned to internal protection standards.',
      'Developed dashboards to track KPIs, trends, and variances across reporting periods, communicating insights to internal teams through data visualisation best practices.',
    ],
  },
  {
    role: 'Information Technology Intern',
    company: 'PwC Nigeria',
    location: 'Lagos, Nigeria',
    period: 'Nov 2024 – Feb 2025',
    badge: null,
    badgeType: null,
    bullets: [
      'Automated the cloud migration and data reconciliation of partner-level engagement records using Python scripts, ensuring zero downtime in active engagements and smooth continuity of firm operations.',
      'Identified infrastructure bottlenecks by analysing system and network performance data, enabling targeted improvements that reduced system latency.',
      'Spearheaded an efficiency initiative streamlining IT support workflows across the firm, reducing staff downtime and accelerating resolution times to maintain operational continuity.',
    ],
  },
  {
    role: 'Information Technology Intern',
    company: 'PwC Nigeria',
    location: 'Lagos, Nigeria',
    period: 'Apr 2023 – Oct 2023',
    badge: 'SIWES',
    badgeType: 'siwes',
    bullets: [
      'Applied data visualisation best practices to communicate insights to internal teams through dashboards tracking KPIs, trends, and variances across reporting periods.',
      'Supported cross-functional IT workflows and contributed to operational continuity across departments during placement.',
      'First industry exposure to real business problems — the intersection of data, systems, and strategy that shaped the direction of everything since.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <div className="section-label">
          <span className="section-label__line"></span>
          <span className="section-label__text">Experience</span>
        </div>

        <AnimateIn>
          <div className="experience__header-row">
            <h2 className="experience__heading">
              Where the work<br />
              <span className="accent">got real.</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="experience__entry">
                <div className="experience__line-col">
                  <div className="experience__dot"></div>
                  {i < experiences.length - 1 && (
                    <div className="experience__connector"></div>
                  )}
                </div>
                <div className="experience__card">
                  <div className="experience__card-header">
                    <div className="experience__card-left">
                      <h3 className="experience__role">{exp.role}</h3>
                      <div className="experience__company-row">
                        <span className="experience__company">{exp.company}</span>
                        <span className="experience__sep">·</span>
                        <span className="experience__location">{exp.location}</span>
                      </div>
                    </div>
                    <div className="experience__card-right">
                      <span className="experience__period">{exp.period}</span>
                      {exp.badge && (
                        <span className={`experience__badge experience__badge--${exp.badgeType}`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="experience__bullets">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j}>
                        <span className="experience__bullet-dot"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}