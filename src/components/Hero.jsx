import profilePhoto from '../assets/chidera-profile.jpg'
import './Hero.css'

const tickerItems = [
  { label: 'SQL',               value: '90%' },
  { label: 'Power BI',          value: '90%' },
  { label: 'GPA',               value: '4.12' },
  { label: 'Projects',          value: '3' },
  { label: 'Certifications',    value: '5+' },
  { label: 'Tools Mastered',    value: '10+' },
  { label: 'Covenant University', value: 'B.Sc Computer Science' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* BLOOMBERG TICKER — top of hero */}
      <div className="ticker">
        <div className="ticker__track">
          {/* Duplicate items so the loop is seamless */}
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="ticker__item" key={i}>
              <span className="ticker__label">{item.label}</span>
              <span className="ticker__value">{item.value}</span>
              <span className="ticker__sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="hero__inner">

        {/* LEFT — text content */}
        <div className="hero__content">


          <h1 className="hero__name">
            Chidera<br />
            <span className="hero__name-accent">Elijah</span><br />
            Ibeh
          </h1>

          <p className="hero__tagline">
             Analyze. Strategize. Succeed.
            </p>

          <div className="hero__role">
            <span>Data Analyst</span>
            <span className="hero__role-sep">·</span>
            <span>Strategist</span>
            <span className="hero__role-sep">·</span>
            <span>Financial Modeller</span>
          </div>

          {/* CTA BUTTONS */}
          <div className="hero__ctas">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
              <span className="hero__btn-arrow">→</span>
            </a>
            <a href="/cv/Chidera_Ibeh_CV.pdf" className="hero__btn hero__btn--secondary" download>
              Download CV
              <span className="hero__btn-arrow">↓</span>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero__socials">
            <a href="mailto:elichidera@gmail.com" className="hero__social-link">
              Email
            </a>
            <a href="https://linkedin.com/in/elijah-ibeh" className="hero__social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Elijjjaaaahhhhh" className="hero__social-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

        </div>

        {/* RIGHT — photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img
              src={profilePhoto}
              alt="Chidera Elijah Ibeh"
              className="hero__photo"
            />
          </div>
          {/* Floating accent card */}
          
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line"></span>
      </div>

    </section>
  )
}