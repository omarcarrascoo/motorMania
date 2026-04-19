'use client'

import Nav from '../components/Nav'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import MagneticBtn from '../components/MagneticBtn'

const ABOUT = [
  {
    logo: 'Logo - Georgina_Transparent.png',
    alt: 'Kinsmen of Georgina',
    kicker: 'The Community',
    name: 'Kinsmen of Georgina',
    copy:
      'A pillar of the community. For decades, the Kinsmen have organized parades, raised funds and delivered joy through meaningful service — the quiet, consistent engine behind Georgina.',
    items: [
      '75+ years of community service',
      '5+ years running the Earl Carpenter Car Show',
      'Driven by passion and local enthusiasm',
    ],
  },
  {
    logo: 'Dirty Birdz Logo.png',
    alt: 'Dirty Birdz Car Club',
    kicker: 'The Culture',
    name: 'Dirty Birdz Car Club',
    copy:
      'An Ontario-grown car crew rooted in custom culture — unforgettable meets, incredible builds, real community. The passion, grit and soul of grassroots car culture.',
    items: [
      'Active Ontario car community leaders',
      '5+ years running the Dirty Birdz Car Show',
      'Champions of build-not-bought',
    ],
  },
]

const STATS = [
  { k: 'Buy Rate', v: 66, suffix: '%', d: 'Attendees bought from an exhibitor or sponsor' },
  { k: 'Group Size', v: 71, suffix: '%', d: 'Arrive in groups of 1–3' },
  { k: 'Long Haul', v: 36, suffix: '%', d: 'Travel 100 km or more to attend' },
  { k: 'Prime Age', v: 76, suffix: '%', d: 'Attendees are under 55' },
]

const VEHICLES = [
  { lbl: 'Classic / Collector', pct: 59 },
  { lbl: 'Pickup Trucks', pct: 38 },
  { lbl: 'Tuners / Modified', pct: 18 },
  { lbl: 'Racing Vehicles', pct: 18 },
  { lbl: 'Exotics', pct: 3 },
]

const INCOME = [
  { lbl: '$50K – $80K', pct: 15 },
  { lbl: '$80K – $100K', pct: 17 },
  { lbl: '$100K – $150K', pct: 17 },
  { lbl: '$150K +', pct: 15 },
]

const CONTACTS = [
  {
    name: 'Courtney Rennie',
    role: 'Kinsmen Committee Chair',
    phone: '905-955-5200',
    email: 'courtscustomcontracting@gmail.com',
  },
  {
    name: 'Jeremy Range',
    role: 'Kinsmen Secretary',
    phone: null,
    email: 'kinsmengeorgina@gmail.com',
  },
]

const MOSAIC_CAPS = [
  'Opening hour',
  'Chrome line-up',
  'Muscle row',
  'Patina & provenance',
  'Family day',
  'Sun-soaked afternoon',
  'Kin Hall',
  'Build showcase',
  'Vendor alley',
  'Prize stage',
  'Dirty Birdz crew',
  'Golden hour',
  'Last lap',
]

export default function Event2025Client() {
  return (
    <>
      <Nav />

      {/* HEADER — hero over photo */}
      <section className="archive-hero">
        <div
          className="archive-hero__bg"
          style={{ backgroundImage: "url('/assets/img/3.jpg')" }}
        />
        <div className="archive-hero__scrim" />
        <div className="archive-hero__top">
          <span>Archive</span>
          <span className="dot" />
          <span>September 6, 2025</span>
          <span className="dot" />
          <span>Sutton Fairgrounds</span>
        </div>
        <div className="archive-hero__stack">
          <h1>
            <span>Motor</span>
            <span>Mania</span>
            <span className="year">2025</span>
          </h1>
        </div>
        <div className="archive-hero__foot">
          <p>
            The inaugural edition. One Saturday. 400–500 vehicles. A fairground
            full of engines, families and a community that showed up. Here’s how
            it went.
          </p>
        </div>
      </section>

      {/* EVENT FACTS STRIP */}
      <section id="event-info" className="event-strip event-strip--reverse">
        <Reveal variant="right" className="event-strip__media">
          <div
            className="event-strip__img"
            style={{ backgroundImage: "url('/assets/img/9.jpg')" }}
          />
          <div className="event-strip__badge">
            <span className="label">Entrance</span>
            <span className="amt">$10</span>
          </div>
        </Reveal>
        <div className="event-strip__copy">
          <Reveal variant="up"><p className="kicker"><em /> The Day</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2>
              Saturday, <br />
              <span className="outline">September 6.</span> <br />
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
              <div className="v">1M+ sq ft · Curling Club · Kin Hall · outdoor pavilions</div>
            </div>
            <div>
              <div className="k">On the Grounds</div>
              <div className="v">400–500 vehicles · families · vendors · food trucks</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TWO ICONS */}
      <section id="about" className="icons-section">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Behind the Show</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              Two crews. <span className="outline">One mission.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160} className="icons-grid reveal-stagger" stagger={140}>
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

      {/* MOSAIC — full gallery in grid */}
      <section className="mosaic mosaic--full">
        <div className="container">
          <div className="mosaic__head">
            <Reveal variant="up">
              <div>
                <p className="kicker"><em /> The Grounds</p>
                <h2 className="big-title">
                  Chrome, <span className="outline">sunshine,</span> <br />
                  and a full fairground.
                </h2>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal variant="fade" className="mosaic__grid mosaic__grid--full reveal-stagger" stagger={70}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n, i) => (
            <figure
              key={n}
              className={`mosaic__tile f-${i}`}
              data-caption={MOSAIC_CAPS[i]}
            >
              <img src={`/assets/img/${n}.jpg`} alt={`Motor Mania 2025 ${MOSAIC_CAPS[i]}`} />
            </figure>
          ))}
        </Reveal>
      </section>

      {/* MANIFESTO OVER PHOTO */}
      <section className="manifesto-photo">
        <div
          className="manifesto-photo__bg"
          style={{ backgroundImage: "url('/assets/img/6.jpg')" }}
        />
        <div className="manifesto-photo__scrim" />
        <div className="container manifesto-photo__inner">
          <Reveal variant="mask">
            <h2>
              This wasn’t just a car show. <br />
              <span className="outline">It was a community-powered,</span> <br />
              turbo-charged celebration.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p>
              Uniting car lovers, families, collectors, artists, local vendors and
              sponsors — all in one place, for one loud day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEMOGRAPHICS — cleaner narrative */}
      <section className="stats-band">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Who Came Through</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              High-intent <span className="outline">buyers.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="big-lead">
              Families, enthusiasts and strong walk-up traffic. Numbers from the
              attendee survey after the inaugural edition.
            </p>
          </Reveal>
        </div>
        <Reveal variant="up" delay={80} className="stats-band__grid reveal-stagger" stagger={120}>
          {STATS.map(({ k, v, suffix, d }) => (
            <div key={k} className="stats-band__cell">
              <div className="label">{k}</div>
              <div className="v"><CountUp value={v} suffix={suffix} /></div>
              <div className="d">{d}</div>
            </div>
          ))}
        </Reveal>

        <div className="container">
          <Reveal variant="up" className="demo-panels reveal-stagger" stagger={140}>
            <div className="demo-panel">
              <h4>Vehicles Owned</h4>
              <div className="demo-rows">
                {VEHICLES.map(({ lbl, pct }) => (
                  <div className="demo-row" key={lbl}>
                    <span className="lbl">{lbl}</span>
                    <span className="val">{pct}%</span>
                    <div className="bar"><span style={{ width: `${(pct / 60) * 100}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="demo-panel">
              <h4>Income Brackets</h4>
              <div className="demo-rows">
                {INCOME.map(({ lbl, pct }) => (
                  <div className="demo-row" key={lbl}>
                    <span className="lbl">{lbl}</span>
                    <span className="val">{pct}%</span>
                    <div className="bar"><span style={{ width: `${(pct / 25) * 100}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container stats-band__foot">
          <Reveal variant="up">
            <p>
              80% male attendees — many with their families. They travel far,
              stay long, and spend money on the grounds.
            </p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <MagneticBtn href="/sponsorship" variant="primary">
              See the 2026 Pitch <span className="arrow">→</span>
            </MagneticBtn>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Get In Touch</p></Reveal>
          <div className="contact__wrap">
            <Reveal variant="mask">
              <h2 className="contact__title">
                <span>Reach</span>
                <span className="outline">Out.</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={160} className="contact__people reveal-stagger" stagger={140}>
              {CONTACTS.map(({ name, role, phone, email }, i) => (
                <div key={name} className="contact__person">
                  <span className="num">0{i + 1} / 02</span>
                  <h3>{name}</h3>
                  <span className="role">{role}</span>
                  {phone && <p>{phone}</p>}
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
