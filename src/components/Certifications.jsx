import './Certifications.css'

const certifications = [
  {
    name: 'Microsoft Certified: Power BI Data Analyst Associate',
    code: 'PL-300',
    issuer: 'Microsoft',
    year: '2026',
    type: 'microsoft',
  },
  {
    name: 'IBM Business Intelligence (BI) Analyst',
    code: null,
    issuer: 'IBM',
    year: '2026',
    type: 'ibm',
  },
  {
    name: 'DataCamp Data Analysis Associate',
    code: null,
    issuer: 'DataCamp',
    year: '2026',
    type: 'datacamp',
  },
  {
    name: 'KPMG U.S. Advisory Job Simulation',
    code: null,
    issuer: 'KPMG · Forage',
    year: '2025',
    type: 'kpmg',
  },
  {
    name: 'Excel for Analytics',
    code: null,
    issuer: 'Udemy',
    year: '2025',
    type: 'udemy',
  },
]

const initials = {
  microsoft: 'MS',
  ibm: 'IBM',
  datacamp: 'DC',
  kpmg: 'KP',
  udemy: 'UD',
}

const colors = {
  microsoft: '#0078D4',
  ibm:       '#1F70C1',
  datacamp:  '#03EF62',
  kpmg:      '#00338D',
  udemy:     '#A435F0',
}

export default function Certifications() {
  return (
    <section className="certs section" id="certifications">
      <div className="container">

        <div className="section-label">
          <span className="section-label__line"></span>
          <span className="section-label__text">Certifications</span>
        </div>

        <div className="certs__header-row">
          <h2 className="certs__heading">
            Validated.<br />
            <span className="accent">Verified. Current.</span>
          </h2>
          <p className="certs__subheading">
            Industry certifications from global institutions —
            each one earned through examination, not just completion.
          </p>
        </div>

        {/* CERT GRID */}
        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div
                className="cert-card__badge"
                style={{ backgroundColor: colors[cert.type] }}
              >
                <span>{initials[cert.type]}</span>
              </div>
              <div className="cert-card__body">
                <span className="cert-card__issuer">{cert.issuer}</span>
                <h3 className="cert-card__name">{cert.name}</h3>
                {cert.code && (
                  <span className="cert-card__code">{cert.code}</span>
                )}
              </div>
              <div className="cert-card__year">
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION CARD — full width */}
        <div className="certs__edu">
          <div className="certs__edu-left">
            <div className="certs__edu-icon">🎓</div>
            <div className="certs__edu-info">
              <span className="certs__edu-label">Education</span>
              <h3 className="certs__edu-degree">BSc. Computer Science</h3>
              <span className="certs__edu-school">
                Covenant University, Ota · Ogun State
              </span>
              <p className="certs__edu-courses">
                Data Management · SQL Fundamentals · Algorithm Design ·
                Modelling & Simulation · Structured Programming
              </p>
            </div>
          </div>
          <div className="certs__edu-right">
            <div className="certs__edu-stat">
              <span className="certs__edu-gpa">4.12</span>
              <span className="certs__edu-gpa-label">GPA / 5.0</span>
            </div>
            <div className="certs__edu-meta">
              <span className="certs__edu-class">Second Class Upper</span>
              <span className="certs__edu-year">Oct 2024</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}