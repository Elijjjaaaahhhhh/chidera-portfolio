import { useState } from 'react'
import './Contact.css'

const contactCards = [
  { label: 'Email',    value: 'elichidera@gmail.com',       href: 'mailto:elichidera@gmail.com',          icon: '✉' },
  { label: 'LinkedIn', value: 'elijah-ibeh',                href: 'https://linkedin.com/in/elijah-ibeh',  icon: 'in' },
  { label: 'GitHub',   value: 'Elijjjaaaahhhhh',            href: 'https://github.com/Elijjjaaaahhhhh',   icon: '⌥' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mgondezz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-label">
          <span className="section-label__line"></span>
          <span className="section-label__text">Contact</span>
        </div>

        <div className="contact__grid">

          <div className="contact__left">
            <h2 className="contact__heading">
              Let's work<br />
              <span className="accent">together.</span>
            </h2>
            <p className="contact__desc">
              Whether you have a project in mind, a role to discuss,
              or just want to connect, my inbox is open.
            </p>
            <div className="contact__location">
              <span className="contact__location-dot"></span>
              <span>Lagos, Nigeria · Open to remote and hybrid roles</span>
            </div>
            <div className="contact__cards">
              {contactCards.map((card, i) => (
                <a key={i} href={card.href} className="contact__card" target="_blank" rel="noopener noreferrer">
                  <span className="contact__card-icon">{card.icon}</span>
                  <div className="contact__card-info">
                    <span className="contact__card-label">{card.label}</span>
                    <span className="contact__card-value">{card.value}</span>
                  </div>
                  <span className="contact__card-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__right">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" className="contact__input" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" className="contact__input" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="contact__input contact__textarea" placeholder="Tell me about the opportunity or project..." value={formData.message} onChange={handleChange} required rows={6} />
              </div>
              <button type="submit" className="contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
              {status === 'success' && (
                <div className="contact__feedback contact__feedback--success">
                  Message sent. I will get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="contact__feedback contact__feedback--error">
                  Something went wrong. Try emailing directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}