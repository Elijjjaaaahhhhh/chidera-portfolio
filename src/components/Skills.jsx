import './Skills.css'

const skillCategories = [
  {
    title: 'Programming & Tools',
    icon: '⟨/⟩',
    skills: [
      { name: 'SQL',        pct: 90 },
      { name: 'Excel / VBA', pct: 95 },
      { name: 'Python',     pct: 75 },
      { name: 'R',          pct: 50 },
    ]
  },
  {
    title: 'Data Visualisation',
    icon: '◎',
    skills: [
      { name: 'Power BI',          pct: 90 },
      { name: 'Tableau',           pct: 75 },
      { name: 'Matplotlib/Seaborn', pct: 70 },
      { name: 'Plotly',            pct: 50 },
    ]
  },
  {
    title: 'Data & Analytics',
    icon: '⬡',
    skills: [
      { name: 'Data Modeling',       pct: 90 },
      { name: 'Statistical Analysis', pct: 85 },
      { name: 'ETL Processes',       pct: 80 },
      { name: 'Machine Learning',    pct: 75 },
    ]
  },
  {
    title: 'Business & Finance',
    icon: '◈',
    skills: [
      { name: 'Financial Modeling',  pct: 75 },
      { name: 'Financial Analysis',  pct: 75 },
      { name: 'Strategic Planning',  pct: 80 },
      { name: 'Business Development', pct: 80 },
    ]
  },
  {
    title: 'Project Management',
    icon: '◇',
    skills: [
      { name: 'Documentation',          pct: 90 },
      { name: 'Requirements Gathering', pct: 85 },
      { name: 'Stakeholder Management', pct: 80 },
      { name: 'Timeline Management',    pct: 75 },
    ]
  },
  {
    title: 'Soft Skills',
    icon: '◉',
    skills: [
      { name: 'Communication',   pct: 92 },
      { name: 'Critical Thinking', pct: 90 },
      { name: 'Collaboration',   pct: 90 },
      { name: 'Problem Solving', pct: 88 },
    ]
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="skills__header">
  <div className="section-label">
    <span className="section-label__line"></span>
    <span className="section-label__text">Skills</span>
  </div>
  <h2 className="skills__heading">
    My Toolkit.<br />
    <span className="accent">Depth Across Disciplines.</span>
  </h2>
  <p className="skills__subheading">
    Skills acquired the hard way, by actually using them.
  </p>
</div>
        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div className="skills__card" key={i}>

              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>

              <div className="skills__list">
                {cat.skills.map((skill, j) => (
                  <div className="skills__item" key={j}>
                    <div className="skills__item-top">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-pct">{skill.pct}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${skill.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}