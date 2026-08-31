import { Link } from 'react-router-dom'
import { Heart, Users, Package } from 'lucide-react'
import { outreachTripPhotos } from '../outreachGalleryPhotos'

const countries = [
  {
    flag: '🇱🇷',
    name: 'Liberia',
    region: 'West Africa',
    desc: 'Providing nutritious food packages to children in orphan homes, bringing joy and nourishment to those who need it most.',
  },
  {
    flag: '🇳🇬',
    name: 'Nigeria',
    region: 'West Africa',
    desc: 'Reaching orphanages across Nigeria with food, love, and the message that they are seen, valued, and not forgotten.',
  },
  {
    flag: '🇬🇭',
    name: 'Ghana',
    region: 'West Africa',
    desc: 'Partnering with local volunteers to deliver food aid to orphan homes in communities across Ghana.',
  },
  {
    flag: '🇺🇬',
    name: 'Uganda',
    region: 'East Africa',
    desc: 'Extending God\'s love to vulnerable children in Uganda through food outreach and community partnership.',
  },
]

const howSteps = [
  {
    number: '01',
    icon: <Heart size={22} color="var(--gold)" />,
    title: 'Community Fundraises',
    desc: 'Members across the world contribute to a fund specifically for the annual outreach. Every dollar is given with prayer.',
  },
  {
    number: '02',
    icon: <Users size={22} color="var(--gold)" />,
    title: 'Local Volunteers Coordinate',
    desc: 'Members and trusted contacts in the target country organise logistics, identify orphanages, and plan the day of outreach.',
  },
  {
    number: '03',
    icon: <Package size={22} color="var(--gold)" />,
    title: 'Food Delivered to Orphan Homes',
    desc: 'On the day, food packages are delivered directly to orphanages — with love, prayer, and a celebration for the children.',
  },
]

export default function Outreach() {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-eyebrow">Annual Outreach</span>
            <h1>Serving the Nations<br />We Come From</h1>
            <p>
              Once a year, House of Zion returns home — not just in spirit, but in action —
              to serve the most vulnerable children in our countries.
            </p>
          </div>
        </div>
      </div>

      {/* ========== MISSION ========== */}
      <section className="outreach-mission">
        <div className="container">
          <div className="outreach-mission-grid">
            <div className="outreach-mission-text">
              <span className="eyebrow">Our Mission</span>
              <h2 className="reveal">Feeding Children, Expressing Faith</h2>
              <p className="reveal reveal-delay-1">
                House of Zion believes that true worship overflows into action. Each year,
                our community organises an outreach in one of our four home countries —
                providing food to orphanages and vulnerable children.
              </p>
              <p className="reveal reveal-delay-1">
                This is our way of saying: <em style={{ fontFamily: 'var(--font-head)', color: 'var(--navy)', fontStyle: 'italic' }}>
                  "We have not forgotten where we came from, and we have not forgotten those who need us."
                </em>
              </p>
              <p className="reveal reveal-delay-2">
                The outreach rotates each year across Liberia, Nigeria, Ghana, and Uganda — ensuring
                that every community feels the love of House of Zion over time.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }} className="reveal reveal-delay-3">
                <Link to="/join" className="btn btn-gold">
                  <Heart size={15} />
                  Get Involved
                </Link>
                <Link to="/join" className="btn btn-outline-dark">
                  Donate
                </Link>
              </div>
            </div>

            <div className="mission-icon-box reveal reveal-delay-1">
              <div style={{ fontSize: '5rem' }}>🍽️</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.4rem', color: 'var(--text-light)', textAlign: 'center' }}>
                Orphanage Food Drive
              </h3>
              <p>
                Providing nutritious food packages to children in orphan homes across
                Liberia, Nigeria, Ghana & Uganda.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                <span style={{ fontSize: '1.6rem' }}>🇱🇷</span>
                <span style={{ fontSize: '1.6rem' }}>🇳🇬</span>
                <span style={{ fontSize: '1.6rem' }}>🇬🇭</span>
                <span style={{ fontSize: '1.6rem' }}>🇺🇬</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COUNTRY ROTATION ========== */}
      <section className="country-rotation-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">Annual Rotation</span>
            <h2 className="section-heading section-heading-light reveal">
              One Country at a Time, Every Year
            </h2>
            <p className="section-subtext section-subtext-light reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              The outreach rotates across our four home countries, ensuring each receives
              the community's love and support over a four-year cycle.
            </p>
          </div>

          <div className="country-rotation-grid">
            {countries.map((c, i) => (
              <div key={c.name} className={`country-rotation-card reveal reveal-delay-${i + 1}`}>
                <div className="country-card-img">
                  <span style={{ position: 'relative', zIndex: 1, fontSize: '4rem' }}>{c.flag}</span>
                </div>
                <div className="country-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3>{c.name}</h3>
                    <span className="tag tag-gold" style={{ fontSize: '0.72rem' }}>Outreach Destination</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-light)', marginBottom: '6px', fontWeight: 500 }}>
                    {c.region}
                  </p>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="how-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">The Process</span>
            <h2 className="section-heading section-heading-dark reveal">
              How the Outreach Works
            </h2>
            <p className="section-subtext section-subtext-dark reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              From prayer and giving to boots-on-the-ground delivery — here is how
              House of Zion turns faith into action each year.
            </p>
          </div>

          <div className="how-timeline">
            {howSteps.map((step, i) => (
              <div key={step.number} className={`how-step reveal reveal-delay-${i + 1}`}>
                <div className="how-step-number">{step.number}</div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto 14px', width: '44px', height: '44px', background: 'var(--navy)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center' }}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="outreach-gallery-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">Our Gallery</span>
            <h2 className="section-heading section-heading-dark reveal">
              Uganda &amp; Liberia in Pictures
            </h2>
            <p className="section-subtext section-subtext-dark reveal reveal-delay-1" style={{ margin: '0 auto 0' }}>
              Scenes from recent annual outreaches — food packages, prayer, and time with children
              in the communities we serve.
            </p>
          </div>

          <div className="outreach-photo-grid outreach-photo-grid-real">
            {outreachTripPhotos.map((photo, i) => (
              <figure
                key={photo.id}
                className={`outreach-photo-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                <figcaption>{photo.country === 'uganda' ? '🇺🇬 Uganda' : '🇱🇷 Liberia'}</figcaption>
              </figure>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '0.92rem' }}>
            <Link to="/gallery" className="btn btn-outline-dark" style={{ display: 'inline-flex' }}>
              View full gallery
            </Link>
          </p>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="outreach-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow eyebrow-light">Be Part of It</span>
          <h2 className="section-heading section-heading-light reveal">
            Join Us in Serving
          </h2>
          <p className="section-subtext section-subtext-light reveal reveal-delay-1" style={{ margin: '0 auto 36px' }}>
            Whether you can donate, volunteer, or simply pray — your involvement makes
            a real difference in the lives of children who need it most.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }} className="reveal reveal-delay-2">
            <Link to="/join" className="btn btn-gold">
              <Heart size={15} />
              Donate to the Outreach
            </Link>
            <Link to="/join" className="btn btn-outline-light">
              <Users size={15} />
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
