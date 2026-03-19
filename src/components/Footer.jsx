import './Footer.css'

const footerLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/elijah-ibeh' },
  { label: 'GitHub',   href: 'https://github.com/Elijjjaaaahhhhh' },
  { label: 'Email',    href: 'mailto:elichidera@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              CE<span className="footer__logo-dot">.</span>
            </span>
            <p className="footer__tagline">
              Analytical Engineer.<br />
              From raw data to boardroom insight.
            </p>
          </div>

          <div className="footer__links">
            <span className="footer__links-heading">Navigation</span>
            <ul className="footer__links-list">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <span className="footer__links-heading">Connect</span>
            <ul className="footer__links-list">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link" target="_blank" rel="noopener noreferrer">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Chidera Elijah Ibeh. All rights reserved.
          </span>
          <span className="footer__built">
            Built with React · Deployed on Vercel
          </span>
        </div>

      </div>
    </footer>
  )
}