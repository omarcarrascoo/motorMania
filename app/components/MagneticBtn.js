'use client'

import { useEffect, useRef } from 'react'

export default function MagneticBtn({
  href,
  children,
  variant = '',
  strength = 0.35,
  onClick,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    const onLeave = () => {
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  const className = `cta-btn magnetic ${variant}`.trim()

  if (href) {
    return (
      <a ref={ref} href={href} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button ref={ref} className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
