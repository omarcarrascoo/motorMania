'use client'

import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomePage() {
  // hamburger nav
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector('.navbar')
        ?.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // init AOS
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  // gallery carousel
  const trackRef = useRef(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const totalImages = 13
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const item = track.children[0]
    const style = getComputedStyle(item)
    const itemW =
      item.getBoundingClientRect().width +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight)
    const offset =
      galleryIndex * itemW - (track.parentElement.clientWidth - itemW) / 6
    track.style.transform = `translateX(${-offset}px)`
  }, [galleryIndex])

  // demographics pager
  const [demoIdx, setDemoIdx] = useState(0)

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
              { href: '#event-info', text: 'Event Info' },
              { href: '#about', text: 'About' },
              { href: '#support-powers-top', text: 'Get Involved' },
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

      {/* HERO */}
      <section className="hero">
        <div
          className="hero-content"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>A one-day, horsepower-fueled community celebration like no other</h1>
          <p>Presented by Kinsmen of Georgina & Dirty Birdz Car Club</p>
          <a className="btn sponsor-btn" href="/sponsorship">
            Become a Sponsor
          </a>
        </div>
        <div
          className="hero-image"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src="/assets/img/carnuebo.png" alt="Hot Rod Car" />
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section id="event-info" className="event-details">
        <div className="container">
          <h2>
            EVENT DETAILS
            <span className="fee">ENTRANCE FEE $10</span>
          </h2>
          <div className="details-grid">
            {[
              {
                img: 'calendario.png',
                alt: 'Calendar icon',
                text: 'Saturday, September 6, 2025 10 AM to 3 PM',
              },
              {
                img: 'ubi.png',
                alt: 'Location icon',
                text: 'Sutton Fairgrounds, Sutton, Ontario',
              },
              {
                img: 'file.png',
                alt: 'Information icon',
                text:
                  'With over 1 M square feet of space including Curling Club, Kin Hall, and outdoor pavilions, there’s room for action and future growth.',
              },
            ].map(({ img, alt, text }) => (
              <div
                key={img}
                className="detail-card"
                data-aos="flip-down"
                data-aos-duration="800"
              >
                <img src={`/assets/img/${img}`} alt={alt} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section data-aos="flip-up" data-aos-duration="1200" id="about" className="about-section">
        <h2>TWO ICONS. ONE MISSION.</h2>
        <div className="logo-grid">
          {[
            {
              logo: 'Logo - Georgina_Transparent.png',
              alt: 'Kin Canada logo',
              summary:
                'A pillar of the community. For decades, the Kinsmen have organized parades…',
              items: [
                '75+ years of community service',
                '5+ years running the Earl Carpenter Car Show at The Sutton Fair Grounds',
                'Organizers of Georgina’s most cherished events',
                'Driven by passion and local enthusiasm',
              ],
            },
            {
              logo: 'Dirty Birdz Logo.png',
              alt: 'Dirty Birdz logo',
              summary:
                'An Ontario-grown car crew rooted in custom culture. Known for unforgettable meets…',
              items: [
                'Active car community leaders in Ontario',
                '5+ running the Dirty Birdz Car Show at Hidden Stone Farms',
                'Hosts of high-energy shows and creative rallies',
                'Champions of build-not-bought mentality',
              ],
            },
          ].map(({ logo, alt, summary, items }) => (
            <div key={logo} className="sectLogoText">
              <div className="logo-card">
                <img src={`/assets/img/${logo}`} alt={alt} />
              </div>
              <div
                className="desc-card"
                onClick={(e) => e.currentTarget.classList.toggle('expanded')}
              >
                <p className="summary-text">
                  {summary}
                  <span className="toggle-arrow" />
                </p>
                <ul className="more-info">
                  {items.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
                <div className="pager">
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section data-aos="flip-up" data-aos-duration="1200" >
        <div className="gallery-intro">
        <p className="intro-text">
          Motor Mania Georgina is the first-ever collaborative car event between the{' '}
          <span className="highlight">Kinsmen</span> and{' '}
          <span className="highlight">Dirty Birdz</span>.
        </p>
      </div>
      <div 
        id="gallery" 
        className="gallery-section"
        
      >
        <div className="gallery-container">
          <button
            className="gallery-nav prev"
            onClick={() => setGalleryIndex((i) => Math.max(i - 1, 0))}
          >
            ‹
          </button>
          <div className="gallery-track" ref={trackRef}>
            {Array.from({ length: totalImages }).map((_, i) => (
              <div key={i} className="gallery-item">
                <img src={`/assets/img/${i + 1}.jpg`} alt={`Event photo ${i + 1}`} />
              </div>
            ))}
          </div>
          <button
            className="gallery-nav next"
            onClick={() => setGalleryIndex((i) => Math.min(i + 1, totalImages - 1))}
          >
            ›
          </button>
        </div>
      </div>
      </section>

      {/* COMMUNITY CELEBRATION */}
      <section id="community‐celebration" className="celebration-section"
      data-aos="flip-up" data-aos-duration="1200">
        <h2 className="celebration-title">
          THIS ISN’T JUST A CAR SHOW.
          <br />
          IT’S A COMMUNITY-POWERED, TURBO-CHARGED CELEBRATION.
        </h2>
        <p className="celebration-title2">UNITING:</p>
        <p className="celebration-list">
          CAR LOVERS – FAMILIES – COLLECTORS – LOCAL VENDORS & SPONSORS – ARTISTS
        </p>
        <div id="support-powers-top" />
      </section>

      {/* YOUR SUPPORT POWERS */}
      <section id="support-powers" className="support-section" data-aos="flip-up" data-aos-duration="1200">
        <div className="support-inner">
          <h2>YOUR SUPPORT POWERS</h2>
          <ul className="support-list">
            {[
              'EVENT SETUP',
              'STAGE, SOUND AND ENTERTAINMENT',
              'MARKETING AND GIVEAWAYS',
              'VENDOR LOGISTICS AND SAFETY',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* VENDORS */}
      <section id="vendors" className="vendors-section" data-aos="flip-up" data-aos-duration="1200">
        <h2>VENDORS</h2>
        <div className="vendors-box">
          <p>– 10’×10’ spaces (with and without power)</p>
          <p>– Indoor $170</p>
          <p>– Outdoor $120</p>
          <p>– Sponsors get 50% off vendor spaces</p>
        </div>
        <a href="#contact">Contact Us</a>
      </section>

      {/* ATTENDEE DEMOGRAPHICS */}
      <section id="attendee-demographics" className="demographics-section" data-aos="flip-up" data-aos-duration="1200">
        <h2>ATTENDEE DEMOGRAPHICS</h2>
        <p className="subtitle">MOTOR MANIA DRAWS IN HIGH-INTENT BUYERS.</p>
        <div className="demo-carousel">
          <div className="slides" style={{ transform: `translateX(-${demoIdx * 50}%)` }}>
            {/* Slide #1 */}
            <div className="slide">
              <h3>WHO’S COMING?</h3>
              <p className="lead">
                MOTOR MANIA ATTRACTS A WIDE RANGE OF CAR LOVERS — FROM CLASSIC COLLECTORS TO
                CURIOUS FAMILIES.
              </p>
              <div className="row">
                <div className="col">
                  <h4>HOW FAR ARE THEY COMING FROM?</h4>
                  <p>
                    WITHIN 50 KM: 32%<br />
                    50–100 KM: 32%<br />
                    100–200 KM: 22%<br />
                    OVER 200 KM: 14%
                  </p>
                  <h4>GROUPS</h4>
                  <p>
                    71% ARRIVE WITH 3 OR MORE PEOPLE<br />
                    27% AS COUPLES OR SOLO
                  </p>
                </div>
                <div className="col">
                  <h4>GENDER</h4>
                  <p>80% MALE ATTENDEES<br />MANY WITH FAMILIES</p>
                  <h4>AGE BREAKDOWN</h4>
                  <p>
                    UNDER 25: 20%<br />
                    25–34: 19%<br />
                    35–44: 14%<br />
                    45–54: 23%<br />
                    55–64: 17%<br />
                    65 AND OLDER: 7%
                  </p>
                </div>
              </div>
            </div>
            {/* Slide #2 */}
            <div className="slide">
              <h3>WHAT DO THEY DRIVE?</h3>
              <p className="lead">MANY ATTENDEES OWN MORE THAN ONE TYPE OF VEHICLE.</p>
              <div className="row">
                <div className="col">
                  <p>
                    CLASSIC/COLLECTOR CARS: 59%<br />
                    PICKUP TRUCKS: 38%<br />
                    TUNERS/MODIFIED: 18%<br />
                    RACING VEHICLES: 18%<br />
                    EXOTICS: 3%
                  </p>
                </div>
                <div className="col">
                  <h4>INCOME BRACKETS</h4>
                  <p>
                    $50K–$80K: 15%<br />
                    $80K–$100K: 17%<br />
                    $100K–$150K: 17%<br />
                    $150K+: 15%
                  </p>
                  <h4>BUYING BEHAVIOUR</h4>
                  <p>66% BOUGHT SOMETHING AT THE SHOW!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pager">
            {[0, 1].map((idx) => (
              <span
                key={idx}
                className={`dot ${demoIdx === idx ? 'active' : ''}`}
                onClick={() => setDemoIdx(idx)}
              />
            ))}
          </div>
        </div>
        <div className="carousel-cta">
          <a className="btn sponsor-btn" href="/sponsorship">
            VIEW SPONSORSHIP PACKAGES
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section data-aos="flip-up" data-aos-duration="1200" className="contact-us" id="contact">
        <div className="contact-us__heading">
          <span>CONTACT</span>
          <span>US</span>
        </div>
        <div className="contact-us__details">
          {[
            {
              name: 'COURTNEY RENNIE',
              role: 'KINSMEN COMMITTEE CHAIR',
              phone: '905-955-5200',
              email: 'courtscustomcontracting@gmail.com',
            },
            {
              name: 'JEREMY RANGE',
              role: 'KINSMEN SECRETARY',
              phone: null,
              email: 'kinsmengeorgina@gmail.com',
            },
          ].map(({ name, role, phone, email }) => (
            <div key={name} className="person">
              <h3>{name}</h3>
              <p>{role}</p>
              {phone && <p>{phone}</p>}
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}