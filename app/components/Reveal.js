'use client'

import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  stagger,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = {
    transitionDelay: visible ? `${delay}ms` : '0ms',
    ...(stagger ? { '--stagger': `${stagger}ms` } : {}),
  }

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
