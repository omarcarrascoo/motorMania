'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      if (hidden) setHidden(false)
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const hoverables = 'a, button, [data-cursor], .mosaic__tile, .icons-card, .package-row, .stats-band__cell'
    const onOver = (e) => {
      if (e.target.closest(hoverables)) setHover(true)
    }
    const onOut = (e) => {
      if (e.target.closest(hoverables)) setHover(false)
    }
    const onLeave = () => setHidden(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [hidden])

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor cursor--dot ${hover ? 'hover' : ''} ${hidden ? 'hidden' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor cursor--ring ${hover ? 'hover' : ''} ${hidden ? 'hidden' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
