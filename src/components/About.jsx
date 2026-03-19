import './About.css'
import AnimateIn from './AnimateIn'
import CountUp from './CountUp'

const stats = [
  { value: '3',   label: 'Featured Projects' },
  { value: '5',   label: 'Certifications' },
  { value: '4.12', label: 'GPA · Covenant University' },
  { value: '1',   label: 'Years Industry Experience' },
]

const certifications = [
  'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
  'IBM Business Intelligence (BI) Analyst',
  'DataCamp Data Analysis Associate',
  'KPMG U.S. Advisory Job Simulation',
  'Excel for Analytics — Udemy',
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">

          <AnimateIn delay={0}>
            <div className="about__left">
              <div className="section-label">
                <span className="section-label__line"></span>
                <span className="section-label__text">About Me</span>
              </div>
              <h2 className="about__heading">
                Where structured thinking meets data intelligence.
              </h2>
              <div className="about__bio">
                <p className="about__bio--hook">
                  Nobody tells you that the internship that changes everything
                  will feel completely ordinary when it starts.
                </p>
                <p>
                  Mine did. A routine SIWES placement, until I sat across from
                  a business problem that code alone could not solve. One that
                  needed structure, context, and the ability to read what the
                  data was actually saying beneath the surface. Something clicked
                  that day that has not stopped clicking since.
                </p>
                <p>
                  I went looking for the overlap. Data and strategy. Finance and
                  engineering. The places where a Python pipeline meets a boardroom
                  decision. Where a DCF model tells you not just what a company is
                  worth, but why, and what has to be true for that to hold. I built
                  projects to find those edges. Certifications to sharpen them.
                  And I kept going, because in a field this demanding, standing
                  still is going backwards.
                </p>
                <p>
                  Today I work across ETL pipelines, cloud analytics platforms,
                  and financial modelling frameworks, turning raw, messy inputs
                  into structured intelligence that executives can act on. I keep
                  learning, keep building, and keep finding ways to do more with
                  less time.
                </p>
              </div>
              <div className="about__edu">
                <div className="about__edu-icon">🎓</div>
                <div className="about__edu-info">
                  <span className="about__edu-degree">BSc. Computer Science</span>
                  <span className="about__edu-school">Covenant University, Ota · Oct 2024</span>
                  <span className="about__edu-detail">GPA: 4.12 / 5.0 · Second Class Upper</span>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="about__right">
              <div className="about__stats">
                {stats.map((stat, i) => (
                  <div className="about__stat-card" key={i}>
                    <span className="about__stat-value">
                      <CountUp value={stat.value} />
                      {stat.value === '3' && '+'}
                      {stat.value === '5' && '+'}
                      {stat.value === '1' && '+'}
                    </span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="about__certs">
                <div className="about__certs-header">
                  <span className="about__certs-icon">◈</span>
                  <h3 className="about__certs-heading">Key Certifications</h3>
                </div>
                <ul className="about__certs-list">
                  {certifications.map((cert, i) => (
                    <li className="about__cert-item" key={i}>
                      <span className="about__cert-check">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}