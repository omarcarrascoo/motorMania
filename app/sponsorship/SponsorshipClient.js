'use client'

import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import MagneticBtn from '../components/MagneticBtn'

const packageData = {
  silver: {
    title: 'Silver Package',
    price: '$250',
    tag: 'Popular with families & small businesses',
    deadline: null,
    body: `
      <p>Family or company name listed:</p>
      <ul>
        <li>In print at the event</li>
        <li>On the Motor Mania Georgina website</li>
      </ul>`,
  },
  gold: {
    title: 'Gold Package',
    price: '$500',
    tag: 'Includes all Silver points',
    deadline: 'August 1',
    body: `
      <p>Everything in Silver, plus:</p>
      <ul>
        <li>(1) 2' × 8' Banner displayed at event — kept with Motor Mania for future events</li>
        <li>$100 fee for banner changes in future years</li>
        <li>Recognition on social media platforms and website listing</li>
      </ul>`,
  },
  platinum: {
    title: 'Platinum Package',
    price: '$1,000 – $2,500',
    tag: 'Customizable',
    deadline: 'July 15',
    body: `
      <p>Includes all Silver and Gold points, plus:</p>
      <ul>
        <li>Predominant branding at the event</li>
        <li>Placement in event brochure / program</li>
        <li>Individual social media post</li>
        <li>Additional perks based on customization</li>
      </ul>`,
  },
  'title-partner': {
    title: 'Title Partner',
    price: '$3,000 – $10,000',
    tag: 'Limited to 2 partners · Highly customizable',
    deadline: 'July 15',
    body: `
      <p>Includes all other package points, plus:</p>
      <ul>
        <li>Customizable premium exposure</li>
        <li>(1) Class Award Sponsorship — custom trophy</li>
        <li>Roadside billboard advertising</li>
        <li>Stage presentation</li>
        <li>People’s Choice Award (via online survey)</li>
      </ul>`,
  },
}

const HERO_STATS = [
  { v: 66, suffix: '%', d: 'Bought from an exhibitor or sponsor' },
  { v: 80, suffix: '%', d: 'Male respondents — many with families' },
  { raw: '400–500', d: 'Vehicles on the grounds in 2025' },
  { raw: '1M+', d: 'Sq. ft. event footprint' },
]

const AGE = [
  { lbl: 'Under 25', pct: 20 },
  { lbl: '25 – 34', pct: 19 },
  { lbl: '35 – 44', pct: 14 },
  { lbl: '45 – 54', pct: 23 },
  { lbl: '55 – 64', pct: 17 },
  { lbl: '65+', pct: 7 },
]

const INCOME = [
  { lbl: '$50K – $80K', pct: 15 },
  { lbl: '$80K – $100K', pct: 17 },
  { lbl: '$100K – $150K', pct: 17 },
  { lbl: '$150K +', pct: 15 },
]

const GEO = [
  { lbl: '0 – 50 km', pct: 32 },
  { lbl: '50 – 100 km', pct: 32 },
  { lbl: '100 – 200 km', pct: 22 },
  { lbl: '200 km +', pct: 14 },
]

const VEHICLES = [
  { lbl: 'Classic / Collector', pct: 59 },
  { lbl: 'Pickup Truck', pct: 38 },
  { lbl: 'Tuner / Modified', pct: 18 },
  { lbl: 'Racing Vehicle', pct: 18 },
  { lbl: 'Exotic', pct: 3 },
]

const SUPPORT_USES = [
  { num: '01', title: 'Site Setup & Logistics' },
  { num: '02', title: 'Sound, Stage & Entertainment' },
  { num: '03', title: 'Promotional Materials' },
  { num: '04', title: 'Trophies, Prizes & Giveaways' },
  { num: '05', title: 'Vendor Support & Security' },
  { num: '06', title: 'Awards & Trophies' },
  { num: '07', title: 'Volunteer Support' },
]

const EXPERIENCE = [
  'Sponsor booth visibility',
  'Covered gathering space',
  'Awards & prize moments',
  'Indoor & outdoor vendors',
  'Merchandise',
  'Food vendors',
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

function bar(pct, max = 100) {
  return (
    <div className="demo__row">
      <span className="lbl">{pct.lbl}</span>
      <span className="val">{pct.pct}%</span>
      <div className="bar"><span style={{ width: `${(pct.pct / max) * 100}%` }} /></div>
    </div>
  )
}

export default function SponsorshipClient() {
  const [modal, setModal] = useState({ open: false, key: null })

  function openModal(key) { setModal({ open: true, key }) }
  function closeModal() { setModal({ open: false, key: null }) }

  useEffect(() => {
    if (!modal.open) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [modal.open])

  const pkg = modal.key ? packageData[modal.key] : null

  return (
    <>
      <Nav />

      {/* HERO — billboard */}
      <section className="archive-hero">
        <div
          className="archive-hero__bg"
          style={{ backgroundImage: "url('/assets/img/11.jpg')" }}
        />
        <div className="archive-hero__scrim" />
        <div className="archive-hero__top">
          <span>Sponsor Pitch · 2026</span>
          <span className="dot" />
          <span>Powered by Kinsmen × Dirty Birdz</span>
        </div>
        <div className="archive-hero__stack">
          <h1>
            <span>Partner</span>
            <span className="year">With Us.</span>
          </h1>
        </div>
        <div className="archive-hero__foot">
          <p>
            Your brand, on the grounds — beside 400+ cars, a packed stage and a
            crowd that actually buys. A one-day cultural moment built around
            horsepower, heritage and heart.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Audience Snapshot</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              The fast numbers <span className="outline">first.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160} className="hero-stats reveal-stagger" stagger={120}>
            {HERO_STATS.map(({ v, suffix, raw, d }, i) => (
              <div key={i} className="hero-stats__cell">
                <div className="v">
                  {raw ? raw : <CountUp value={v} suffix={suffix} />}
                </div>
                <div className="d">{d}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHAT SUPPORT HELPS WITH */}
      <section className="section section--alt">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Where Your Money Goes</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              What your sponsorship <span className="outline">actually builds.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="big-lead">
              Every dollar lands on the grounds — from the stage that runs all day
              to the trophies handed out at sundown.
            </p>
          </Reveal>
          <Reveal variant="up" delay={220} className="support-uses reveal-stagger" stagger={80}>
            {SUPPORT_USES.map(({ num, title }) => (
              <div key={num} className="support-uses__item">
                <span className="num">{num}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* AUDIENCE PROOF */}
      <section id="audience" className="section">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Who Walks Through The Gates</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              Real families. <span className="outline">Real spend.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="big-lead">
              Numbers pulled from the 2025 attendee survey — the crowd you’d be
              advertising to in 2026.
            </p>
          </Reveal>

          {/* Audience top stats */}
          <Reveal variant="up" delay={220} className="demo__grid reveal-stagger" stagger={110}>
            <div className="demo__stat">
              <div className="k">Gender</div>
              <div className="v"><CountUp value={80} suffix="%" /></div>
              <div className="d">Male respondents — many with families</div>
            </div>
            <div className="demo__stat">
              <div className="k">Groups 1–3</div>
              <div className="v"><CountUp value={71} suffix="%" /></div>
              <div className="d">Arrive with 1 to 3 people</div>
            </div>
            <div className="demo__stat">
              <div className="k">Groups 4+</div>
              <div className="v"><CountUp value={27} suffix="%" /></div>
              <div className="d">Show up with 4+ friends or family</div>
            </div>
            <div className="demo__stat">
              <div className="k">Motivated Buyers</div>
              <div className="v"><CountUp value={66} suffix="%" /></div>
              <div className="d">Bought or planned to buy at the show</div>
            </div>
          </Reveal>

          {/* Four breakdown panels */}
          <Reveal variant="up" className="demo__panels demo__panels--4 reveal-stagger" stagger={140}>
            <div className="demo__panel">
              <h4>Age</h4>
              <div className="demo__rows">{AGE.map((r) => <div key={r.lbl}>{bar(r, 25)}</div>)}</div>
            </div>
            <div className="demo__panel">
              <h4>Income</h4>
              <div className="demo__rows">{INCOME.map((r) => <div key={r.lbl}>{bar(r, 25)}</div>)}</div>
            </div>
            <div className="demo__panel">
              <h4>Geographic Pull</h4>
              <div className="demo__rows">{GEO.map((r) => <div key={r.lbl}>{bar(r, 35)}</div>)}</div>
            </div>
            <div className="demo__panel">
              <h4>Vehicles Owned</h4>
              <div className="demo__rows">{VEHICLES.map((r) => <div key={r.lbl}>{bar(r, 60)}</div>)}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section section--alt">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Partner Opportunities</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              Pick your <span className="outline">lane.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="big-lead">
              Tiered for families, small businesses, growing brands and title
              sponsors. Click any tier to see exactly what’s included.
            </p>
          </Reveal>

          <Reveal variant="up" delay={220} className="packages-list reveal-stagger" stagger={110}>
            {Object.entries(packageData).map(([key, { title, price, tag, deadline }], i) => (
              <div
                key={key}
                className="package-row"
                onClick={() => openModal(key)}
                data-package={key}
              >
                <div className="package-row__num">0{i + 1}</div>
                <div className="package-row__info">
                  <div className="package-row__title">{title}</div>
                  <div className="package-row__tag">{tag}</div>
                </div>
                <div className="package-row__meta">
                  <div className="package-row__price">{price}</div>
                  {deadline && <div className="package-row__deadline">Deadline — {deadline}</div>}
                </div>
                <button
                  className="cta-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(key)
                  }}
                >
                  View <span className="arrow">→</span>
                </button>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DEADLINES */}
      <section className="section">
        <div className="container">
          <Reveal variant="scale">
            <div className="deadlines-band">
              <p className="kicker"><em /> Don&apos;t Miss The Cut</p>
              <div className="deadlines-band__grid">
                <div>
                  <div className="k">Platinum &amp; Title</div>
                  <div className="v">July 15</div>
                </div>
                <div>
                  <div className="k">Gold Package</div>
                  <div className="v">August 1</div>
                </div>
                <div>
                  <div className="k">Event Day</div>
                  <div className="v">Sept 5</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VENDORS + SHOW EXPERIENCE */}
      <section id="vendors" className="section section--alt">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> On The Grounds</p></Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="big-title">
              Vendors, food trucks <span className="outline">& the show.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="big-lead">
              Sponsor visibility, awards, merch, food — and a crowd that sticks
              around to actually engage with it.
            </p>
          </Reveal>

          <Reveal variant="up" delay={220} className="vendors__split reveal-stagger" stagger={160}>
            <div className="vendors__col">
              <h3>Vendor Spaces</h3>
              <p>10' × 10' spaces — with and without power.</p>
              <div className="vendors__price-list">
                <div className="vendors__price-row">
                  <span className="name">Indoor</span>
                  <span className="amt">$170</span>
                </div>
                <div className="vendors__price-row">
                  <span className="name">Outdoor</span>
                  <span className="amt">$120</span>
                </div>
                <div className="vendors__price-row">
                  <span className="name">Sponsors</span>
                  <span className="amt">50% off</span>
                </div>
              </div>
            </div>
            <div className="vendors__col">
              <h3>On The Grounds</h3>
              <ul className="experience-list">
                {EXPERIENCE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THANK YOU */}
      <section className="thankyou">
        <div className="container">
          <Reveal variant="up"><p className="kicker" style={{ paddingLeft: '2rem' }}><em /> Thank You</p></Reveal>
          <Reveal variant="mask" delay={80}>
            <h2>
              Community, culture, and a brand <span className="outline">sponsors can stand beside.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p>
              Thank you for considering a partnership with Motor Mania Georgina. Your
              support helps us bring the community together and celebrate a shared passion
              for cars, craftsmanship and connection. We look forward to creating
              something incredible with you.
            </p>
          </Reveal>
          <Reveal variant="up" delay={280}>
            <p className="thankyou__sign">Let’s drive the future together.</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section--alt">
        <div className="container">
          <Reveal variant="up"><p className="kicker"><em /> Let&apos;s Build Something Loud</p></Reveal>
          <div className="contact__wrap">
            <Reveal variant="mask">
              <h2 className="contact__title">
                <span>Contact</span>
                <span className="outline">Us.</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={160} className="contact__people reveal-stagger" stagger={140}>
              {CONTACTS.map(({ name, role, phone, email }, i) => (
                <div key={name} className="contact__person">
                  <span className="num">0{i + 1} / 0{CONTACTS.length}</span>
                  <h3>{name}</h3>
                  <span className="role">{role}</span>
                  {phone && <p>{phone}</p>}
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal variant="up" delay={120}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              {[
                { id: 'email', label: 'Email', type: 'email' },
                { id: 'phone', label: 'Phone Number', type: 'tel' },
                { id: 'package', label: 'Package', type: 'text' },
                { id: 'company', label: 'Company / Family', type: 'text' },
              ].map(({ id, label, type }) => (
                <div key={id} className="form-group">
                  <label htmlFor={id}>{label}</label>
                  <input id={id} name={id} type={type} required />
                </div>
              ))}
              <div className="form-actions">
                <MagneticBtn type="submit" variant="primary">
                  Send <span className="arrow">→</span>
                </MagneticBtn>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MODAL */}
      {modal.open && pkg && (
        <div className="modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal} aria-label="Close">×</button>
            <p className="kicker"><em /> Package Details</p>
            <h3 className="modal-title">{pkg.title}</h3>
            <div className="modal-meta">
              <span>{pkg.tag}</span>
              {pkg.deadline && <span className="modal-meta__deadline">Deadline {pkg.deadline}</span>}
            </div>
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: pkg.body }}
            />
            <div className="modal-footer">
              <span className="modal-price">{pkg.price}</span>
              <a href="#contact" onClick={closeModal} className="cta-btn primary">
                Get Started <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
