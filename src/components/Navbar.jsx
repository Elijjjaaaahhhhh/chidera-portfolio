import { useEffect, useState } from 'react'
import './Navbar.css'

const modalOptions = [
  { label: 'Email',    value: 'elichidera@gmail.com',      href: 'mailto:elichidera@gmail.com',         icon: '✉' },
  { label: 'Phone',    value: '+234 814 409 7907',          href: 'tel:+2348144097907',                  icon: '✆' },
  { label: 'LinkedIn', value: 'elijah-ibeh',               href: 'https://linkedin.com/in/elijah-ibeh', icon: 'in' },
]

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [modalOpen,  setModalOpen]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          <a href="#hero" className="navbar__logo">
            CE<span className="navbar__logo-dot">.</span>
          </a>

          <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button className="navbar__theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? '○' : '●'}
            </button>
            <button className="navbar__cta" onClick={() => setModalOpen(true)}>
              Contact Me
            </button>
            <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </nav>

      {modalOpen && (
        <div className="modal__backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal__box" onClick={e => e.stopPropagation()}>

            <div className="modal__header">
              <h3 className="modal__title">Get in touch</h3>
              <button className="modal__close" onClick={() => setModalOpen(false)}>✕</button>
            </div>

            <p className="modal__desc">Choose how you would like to reach me.</p>

            <div className="modal__options">
              {modalOptions.map((opt, i) => (
                <a key={i} href={opt.href} className="modal__option" target="_blank" rel="noopener noreferrer" onClick={() => setModalOpen(false)}>
                  <span className="modal__option-icon">{opt.icon}</span>
                  <div className="modal__option-info">
                    <span className="modal__option-label">{opt.label}</span>
                    <span className="modal__option-value">{opt.value}</span>
                  </div>
                  <span className="modal__option-arrow">→</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  )
}