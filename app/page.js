'use client'

import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Reveal from './components/Reveal'
import CountUp from './components/CountUp'
import MagneticBtn from './components/MagneticBtn'

const ABOUT = [
  {
    logo: 'Logo - Georgina_Transparent.png',
    alt: 'Kinsmen of Georgina',
    kicker: 'The Community',
    name: 'Kinsmen of Georgina',
    copy:
      'For seventy-five years they’ve been the quiet engine behind Georgina’s parades, fundraisers and festivals — turning up early, staying late, making the town stronger by showing up.',
    items: [
      '75+ years of service',
      '5+ years running the Earl Carpenter Car Show',
      'Organizers of Georgina’s most cherished events',
    ],
  },
  {
    logo: 'Dirty Birdz Logo.png',
    alt: 'Dirty Birdz Car Club',
    kicker: 'The Culture',
    name: 'Dirty Birdz Car Club',
    copy:
      'Ontario-grown, grease under the fingernails, built in driveways and backyard shops. Dirty Birdz show up with the builds, the people and the energy that turn a parking lot into an event.',
    items: [
      'Ontario car community leaders',
      '5+ years running the Dirty Birdz Car Show',
      'Champions of build-not-bought culture',
    ],
  },
]

const VISION = [
  { t: 'Vintages & Classics', s: 'Chrome, patina, provenance.' },
  { t: 'Custom Builds', s: 'Garage-born, loud on purpose.' },
  { t: 'Live Music', s: 'All day on the main stage.' },
  { t: 'Food Trucks', s: 'Street eats, cold drinks, shade.' },
  { t: 'Craft Vendors', s: 'Local makers and merch.' },
  { t: 'Trophies', s: 'Classics, Muscle, People’s Choice.' },
]

const MOSAIC = [
  { n: 1, tile: 'm-a', cap: 'Opening hour · 2025' },
  { n: 3, tile: 'm-b', cap: 'Muscle row' },
  { n: 5, tile: 'm-c', cap: 'Family day' },
  { n: 7, tile: 'm-d', cap: 'Sun-soaked chrome' },
  { n: 9, tile: 'm-e', cap: 'Kin Hall · vendors' },
  { n: 11, tile: 'm-f', cap: 'Build-not-bought' },
  { n: 13, tile: 'm-g', cap: 'Golden hour' },
]

export default function HomePage() {
  const [countdown, setCountdown] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const target = new Date('2026-09-05T10:00:00-04:00').getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setCountdown({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <>
      <Nav />

      {/* ============= HERO — billboard ============= */}
      <section className="hero-billboard">
        <div
          className="hero-billboard__bg"
          style={{ backgroundImage: "url('/assets/img/1.jpg')" }}
        />
        <div className="hero-billboard__scrim" />

        <div className="hero-billboard__top">
          <span>Motor Mania Georgina</span>
          <span className="dot" />
          <span>2026 Edition</span>
          <span className="dot" />
          <span>Sutton Fairgrounds · ON</span>
        </div>

        <div className="hero-billboard__stack">
          <h1>
            <span>Motor</span>
            <span>Mania</span>
            <span className="year">2026</span>
          </h1>
        </div>

        <div className="hero-billboard__foot">
          <div className="hero-billboard__lead">
            <span className="kicker"><em /> Saturday · September 5 · 2026</span>
            <p>
              Four hundred engines warming up. A million square feet of fairground.
              One loud, sun-soaked day where Georgina turns into the biggest car
              meet in Ontario.
            </p>
          </div>
          <div className="hero-billboard__ctas">
            <MagneticBtn href="/sponsorship" variant="primary">
              Partner With Us <span className="arrow">→</span>
            </MagneticBtn>
            <MagneticBtn href="#what" variant="ghost">
              What to Expect <span className="arrow">↓</span>
            </MagneticBtn>
          </div>
        </div>
      </section>

      {/* ============= TICKER ============= */}
      <section className="ticker">
        <div className="ticker__track">
          {[0, 1].map((k) => (
            <div className="ticker__group" key={k}>
              <span>Sept 5 · 2026</span>
              <span className="tdot" />
              <span className="outline">Kinsmen × Dirty Birdz</span>
              <span className="tdot" />
              <span>400–500 Vehicles</span>
              <span className="tdot" />
              <span className="outline">Sutton Fairgrounds</span>
              <span className="tdot" />
              <span>Horsepower · Heritage · Heart</span>
              <span className="tdot" />
            </div>
          ))}
        </div>
      </section>

      {/* ============= STATEMENT + COUNTDOWN ============= */}
      <section id="what" className="statement">
        <div className="container statement__inner">
          <Reveal variant="up">
            <p className="kicker"><em /> Coming Soon</p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="statement__title">
              One day. One town. <span className="outline">Every kind</span> of
              horsepower imaginable.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="statement__copy">
              Motor Mania Georgina is a one-day, horsepower-fueled community
              celebration like no other. After an inaugural run that pulled
              400–500 vehicles and filled the grounds, we’re coming back bigger —
              louder stage, more builds, more vendors, same family-first energy.
            </p>
          </Reveal>

          <Reveal variant="scale" delay={240} className="countdown-band reveal-stagger" stagger={120}>
            {[
              { k: 'Days', v: pad(countdown.d) },
              { k: 'Hours', v: pad(countdown.h) },
              { k: 'Minutes', v: pad(countdown.m) },
              { k: 'Seconds', v: pad(countdown.s) },
            ].map(({ k, v }) => (
              <div key={k}>
                <div className="v">{v}</div>
                <div className="k">{k}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============= EVENT DETAILS — image side ============= */}
      <section id="event-info" className="event-strip">
        <Reveal variant="left" className="event-strip__media">
          <div
            className="event-strip__img"
            style={{ backgroundImage: "url('/assets/img/5.jpg')" }}
          />
          <div className="event-strip__badge">
            <span className="label">Entrance</span>
            <span className="amt">$10</span>
          </div>
        </Reveal>
        <div className="event-strip__copy">
          <Reveal variant="up"><p className="kicker"><em /> Logistics</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2>
              Saturday, <br />
              <span className="outline">September 5.</span> <br />
              10 AM — 3 PM.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160} className="event-strip__meta reveal-stagger" stagger={100}>
            <div>
              <div className="k">Location</div>
              <div className="v">Sutton Fairgrounds, Sutton, Ontario</div>
            </div>
            <div>
              <div className="k">Grounds</div>
              <div className="v">1M+ sq ft · Curling Club · Kin Hall · 2 outdoor pavilions</div>
            </div>
            <div>
              <div className="k">Draw</div>
              <div className="v">400–500 vehicles · families, collectors, vendors</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============= TWO ICONS ============= */}
      <section id="about" className="icons-section">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Who&apos;s Behind It</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              Two crews. <span className="outline">One mission.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="big-lead">
              A service club that’s been in Georgina since before your grandpa had
              a hot rod. A car club that builds cars the way they’re meant to be
              built. Together — something neither could pull off alone.
            </p>
          </Reveal>
          <Reveal variant="up" delay={220} className="icons-grid reveal-stagger" stagger={140}>
            {ABOUT.map(({ logo, alt, kicker, name, copy, items }) => (
              <article key={name} className="icons-card">
                <div className="icons-card__head">
                  <div className="icons-card__logo">
                    <img src={`/assets/img/${logo}`} alt={alt} />
                  </div>
                  <div>
                    <span className="icons-card__kicker">{kicker}</span>
                    <h3>{name}</h3>
                  </div>
                </div>
                <p>{copy}</p>
                <ul>
                  {items.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============= WHAT TO EXPECT — over photo ============= */}
      <section className="expect">
        <div
          className="expect__bg"
          style={{ backgroundImage: "url('/assets/img/7.jpg')" }}
        />
        <div className="expect__scrim" />
        <div className="container expect__inner">
          <Reveal variant="up"><p className="kicker"><em /> The Vision · 2026</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2>
              What you’ll see <br />
              <span className="outline">when the gates open.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160} className="expect__grid reveal-stagger" stagger={80}>
            {VISION.map(({ t, s }, i) => (
              <div key={t} className="expect__cell">
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p>{s}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============= GALLERY MOSAIC ============= */}
      <section className="mosaic">
        <div className="container">
          <div className="mosaic__head">
            <Reveal variant="up">
              <div>
                <p className="kicker"><em /> 2025 · On The Grounds</p>
                <h2 className="big-title">
                  A look at <span className="outline">last year.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <MagneticBtn href="/2025" variant="ghost dark">
                Full recap <span className="arrow">→</span>
              </MagneticBtn>
            </Reveal>
          </div>
        </div>
        <Reveal variant="fade" className="mosaic__grid reveal-stagger" stagger={90}>
          {MOSAIC.map(({ n, tile, cap }) => (
            <figure key={n} className={`mosaic__tile ${tile}`} data-caption={cap}>
              <img src={`/assets/img/${n}.jpg`} alt={cap} />
            </figure>
          ))}
        </Reveal>
      </section>

      {/* ============= MANIFESTO over photo ============= */}
      <section className="manifesto-photo">
        <div
          className="manifesto-photo__bg"
          style={{ backgroundImage: "url('/assets/img/10.jpg')" }}
        />
        <div className="manifesto-photo__scrim" />
        <div className="container manifesto-photo__inner">
          <Reveal variant="mask">
            <h2>
              This isn’t just a car show. <br />
              <span className="outline">It’s a community-powered,</span> <br />
              turbo-charged celebration.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p>
              Car lovers, families, collectors, artists, local vendors and
              sponsors — all fueling a cultural moment built around horsepower,
              heritage and heart.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============= STATS TEASER ============= */}
      <section className="stats-band">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Why Sponsors Show Up</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              Real buyers. <span className="outline">Real spend.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal variant="up" delay={160} className="stats-band__grid reveal-stagger" stagger={120}>
          <div className="stats-band__cell">
            <div className="v"><CountUp value={66} suffix="%" /></div>
            <div className="d">Bought from an exhibitor or sponsor on-site.</div>
          </div>
          <div className="stats-band__cell">
            <div className="v"><CountUp value={71} suffix="%" /></div>
            <div className="d">Arrive in groups of 1–3 — couples, crews, families.</div>
          </div>
          <div className="stats-band__cell">
            <div className="v">400–500</div>
            <div className="d">Vehicles rolled through in 2025. Growing in 2026.</div>
          </div>
          <div className="stats-band__cell">
            <div className="v">1M+</div>
            <div className="d">Sq ft of fairground taken over for one day.</div>
          </div>
        </Reveal>
        <div className="container stats-band__foot">
          <Reveal variant="up">
            <p>
              Full demographics — age, income, geography, vehicle ownership —
              inside the 2026 sponsor pitch.
            </p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <MagneticBtn href="/sponsorship">
              See The Pitch <span className="arrow">→</span>
            </MagneticBtn>
          </Reveal>
        </div>
      </section>

      {/* ============= CTA BAND ============= */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <Reveal variant="mask">
            <h2>
              Let’s build <br />
              something <span className="outline">loud.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160} className="cta-band__actions reveal-stagger" stagger={120}>
            <MagneticBtn href="/sponsorship#contact" variant="primary">
              Partner With Us <span className="arrow">→</span>
            </MagneticBtn>
            <MagneticBtn href="/2025">
              Relive 2025 <span className="arrow">→</span>
            </MagneticBtn>
          </Reveal>
        </div>
      </section>
    </>
  )
}
