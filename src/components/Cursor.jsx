import { useEffect, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }
    const handleOver = (e) => {
      const el = e.target.closest('a, button, [role="button"]')
      setHovering(!!el)
    }
    const handleLeave = () => setHidden(true)
    const handleEnter = () => setHidden(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [])

  return (
    <div
      className={`cursor ${hovering ? 'cursor--hover' : ''} ${hidden ? 'cursor--hidden' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div className="cursor__cross cursor__cross--h"></div>
      <div className="cursor__cross cursor__cross--v"></div>
      <div className="cursor__dot"></div>
    </div>
  )
}