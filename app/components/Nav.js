'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector('.navbar')
        ?.classList.toggle('scrolled', window.scrollY > 30)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setNavOpen(false)
    document.querySelector('.nav-links')?.classList.remove('open')
  }, [pathname])

  const links = [
    { href: '/', text: '2026', match: '/' },
    { href: '/2025', text: '2025', match: '/2025' },
    { href: '/sponsorship', text: 'Sponsorship', match: '/sponsorship' },
    { href: '/sponsorship#contact', text: 'Contact', match: null },
  ]

  const isActive = (match) => {
    if (!match) return false
    if (match === '/') return pathname === '/'
    return pathname?.startsWith(match)
  }

  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">
          <span className="logo-mark">Motor Mania</span>
          <span className="logo-tag">/ GEORGINA</span>
        </a>
      </div>
      <div
        className={`hamburger ${navOpen ? 'open' : ''}`}
        onClick={() => {
          setNavOpen(!navOpen)
          document.querySelector('.nav-links')?.classList.toggle('open')
        }}
      >
        <span />
        <span />
        <span />
      </div>
      <nav>
        <ul className="nav-links">
          {links.map(({ href, text, match }) => (
            <li key={href}>
              <a href={href} className={isActive(match) ? 'active' : ''}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
