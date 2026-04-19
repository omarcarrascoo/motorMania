'use client'

import { useEffect, useRef } from 'react'

export default function Parallax({
  src,
  speed = 0.25,
  className = '',
  children,
  overlayClassName,
}) {
  const ref = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf
    let visible = false
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !raf) raf = requestAnimationFrame(loop)
      },
      { threshold: 0 }
    )

    const loop = () => {
      if (!ref.current || !bgRef.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      const centerOffset = rect.top + rect.height / 2 - vh / 2
      const shift = -centerOffset * speed
      bgRef.current.style.transform = `translate3d(0, ${shift}px, 0) scale(1.12)`
      if (visible) raf = requestAnimationFrame(loop)
      else raf = null
    }

    if (ref.current) io.observe(ref.current)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={className}>
      <div
        ref={bgRef}
        className="parallax__bg"
        style={{ backgroundImage: `url('${src}')` }}
      />
      {overlayClassName && <div className={overlayClassName} />}
      {children}
    </div>
  )
}
