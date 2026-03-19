import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, duration = 1500 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const isFloat = value.toString().includes('.')
    const parsed = parseFloat(value)
    if (isNaN(parsed)) {
      setDisplay(value)
      return
    }
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = parsed * eased
      setDisplay(isFloat ? current.toFixed(2) : Math.floor(current).toString())
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value.toString())
    }
    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return <span ref={ref}>{display}</span>
}