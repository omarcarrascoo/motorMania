'use client'

import { useState } from 'react'

const packageData = {
  silver: {
    title: 'SILVER PACKAGE',
    body: `
      <p>Perfect for families or small local businesses</p>
      <p>Includes:</p>
      <ul>
        <li>Your Name (Or Business Name) Listed In Event Print Materials</li>
        <li>Recognition On The Official Motor Mania Georgina Website</li>
      </ul>`,
    price: '$250',
  },
  gold: {
    title: 'GOLD PACKAGE',
    body: `
      <p>Level up your presence at the event</p>
      <p>Includes everything in Silver, plus:</p>
      <ul>
        <li>A custom 2’×8’ banner displayed at the event</li>
        <li>Recognition on our social media platforms</li>
        <li>Banner storage for future Motor Mania events</li>
        <li>Option to update banner later for a small fee</li>
      </ul>`,
    price: '$500',
  },
  platinum: {
    title: 'PLATINUM PACKAGE',
    body: `
      <p>High-impact visibility for growing brands</p>
      <p>Includes everything in Gold, plus:</p>
      <ul>
        <li>Premium branding placement at the event</li>
        <li>Feature in the event brochure/program</li>
        <li>Dedicated social media post</li>
        <li>Additional custom perks depending on your goals</li>
      </ul>`,
    price: '$1000 – $2500',
  },
  'title-partner': {
    title: 'TITLE PARTNER',
    body: `
      <p>Our most exclusive package, limited to just 2 partners</p>
      <p>Includes everything in Platinum, plus:</p>
      <ul>
        <li>Premium event exposure & branding</li>
        <li>Sponsor a custom class trophy</li>
        <li>Roadside billboard advertising</li>
        <li>Stage time at the event</li>
        <li>Sponsor the People’s Choice Award (via live attendee survey)</li>
        <li>Perfect for major local or regional sponsors</li>
      </ul>`,
    price: '$3000 – $10000',
  },
}

export default function SponsorshipClient() {
  const [modal, setModal] = useState({ open: false, pkg: null })
  const [navOpen, setNavOpen] = useState(false)
  
  function openModal(key) {
    console.log(`Opening modal for package: ${key}`, packageData[key]);
    
    setModal({ open: true, pkg: packageData[key] })
  }

  function closeModal() {
    setModal({ open: false, pkg: null })
  }

  return (
    <>
    <header className="navbar">
        <div className="logo">
          <a href="/">
            <img src="/assets/img/logoN.png" alt="Motor Mania Georgina Logo" />
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
            {[
              { href: '/', text: 'Home' },
              { href: '/sponsorship', text: 'Sponsorship' },
              { href: '#contact', text: 'Contact' },
            ].map(({ href, text }) => (
              <li key={href}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* Packages */}
      <section id="packages" className="packages-section">
        <h2>SPONSORSHIP PACKAGES</h2>
        <p className="subtitle">
          SUPPORT MOTOR MANIA GEORGINA AND{' '}
          <span className="highlight">
            SHOWCASE YOUR BRAND TO A PASSIONATE, ENGAGED COMMUNITY.
          </span>
        </p>
        <div className="packages-list">
          {Object.entries(packageData).map(([key, { title, price }]) => (
            <div
              key={key}
              className="package-item"
              onClick={() => openModal(key)}
              data-package={key}
            >
              <div className="info">
                <span className="title">{title}</span>
                <span className="price">{price}</span>
              </div>
              <button
                className="view-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  openModal(key)
                }}
              >
                VIEW
              </button>
              <div className="separator" />
            </div>
          ))}
        </div>
      </section>

      {/* Deadlines & Ready to Roll */}
      <section id="deadlines" className="deadlines-section">
        <div className="deadlines-inner">
          <section id="ready" className="ready-alt">
            <div className="ready-alt__container">
              <div className="ready-alt__teal">
                <h2>READY TO ROLL<br />WITH US?</h2>
              </div>
              <div className="ready-alt__white">
                <p>
                  Your support fuels more than just an event — it builds community,
                  connection, and a shared passion for cars and craftsmanship.
                </p>
                <p>
                  Together, we can create an unforgettable experience that
                  celebrates heritage, horsepower, and heart.
                </p>
                <p>
                  We can’t wait to partner with you. Let’s drive the future together.
                </p>
                <div className="ready-alt__cta">
                  <a href="#contact" className="ready-alt__button">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="blue-car">
            <div className="deadline-text">
              <h2>IMPORTANT DEADLINES</h2>
              <p>Platinum &amp; Title Packages — July 15</p>
              <p>Gold Package — August 1</p>
            </div>
            <div className="deadline-image">
              <img src="/assets/img/blucarV.png" alt="Classic car illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="contact-section">
        <h3 className='contactTitle'>CONTACT</h3>
        <form className="contact-form">
          {[
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'phone', label: 'Phone Number', type: 'tel' },
            { id: 'package', label: 'Select Your Package', type: 'text' },
            { id: 'company', label: 'Company/Family Name', type: 'text' },
          ].map(({ id, label, type }) => (
            <div key={id} className="form-group">
              <label htmlFor={id}>{label}</label>
              <input id={id} name={id} type={type} required />
            </div>
          ))}
          <div className="form-actions">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>

      {/* Modal */}
      {modal.open && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <h3 className="modal-title">{modal.pkg.title}</h3>
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: modal.pkg.body }}
            />
            <div className="modal-footer">
              <span className="modal-price">{modal.pkg.price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}