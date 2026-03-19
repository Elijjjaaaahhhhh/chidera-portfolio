import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'
import ProjectDetail from './pages/ProjectDetail'

function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setWidth(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <a href="/cv/Chidera_Ibeh_CV.pdf" className="float-cv" download>
        Download CV <span className="float-cv__arrow">↓</span>
      </a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App