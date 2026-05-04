import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Video, Users, Heart, Globe } from 'lucide-react'
import hero1 from '../assets/hero1.jpeg'
import hero2 from '../assets/hero2.jpeg'

const HERO_SLIDES = [hero1, hero2]

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setHeroSlide((i) => (i + 1) % HERO_SLIDES.length),
      6500
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Hero">
        <div className="hero-slides" aria-hidden="true">
          {HERO_SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`hero-slide-img${i === heroSlide ? ' is-active' : ''}`}
              decoding="async"
            />
          ))}
        </div>
        <div className="hero-bg" aria-hidden="true" />

        {/* Animated cross glow */}
        <svg className="hero-cross-glow" viewBox="0 0 320 320" fill="none" aria-hidden="true">
          <rect x="148" y="20"  width="24" height="280" rx="12" fill="white" />
          <rect x="20"  y="120" width="280" height="24" rx="12" fill="white" />
          <circle cx="160" cy="160" r="140" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="160" cy="160" r="100" stroke="white" strokeWidth="1" fill="none" />
        </svg>

        <div className="hero-geo" aria-hidden="true" />

        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow" aria-hidden="true">
              Christian · Prayer · Community
            </div>

            <h1>
              Where the <em>Nations</em><br />Pray as One
            </h1>

            <p className="hero-desc">
              House of Zion is an online Christian prayer community founded by African international
              students in China — now worshipping together across four continents.
              Every day. Every voice. One Spirit.
            </p>

            <div className="hero-ctas">
              <Link to="/join" className="btn btn-gold">
                <Video size={16} />
                Join Our Prayer
              </Link>
              <Link to="/about" className="btn btn-outline-light">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-slide-dots"
          role="tablist"
          aria-label="Hero background slides"
        >
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === heroSlide}
              aria-label={`Show slide ${i + 1}`}
              className={`hero-slide-dot${i === heroSlide ? ' is-active' : ''}`}
              onClick={() => setHeroSlide(i)}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" aria-hidden="true">
          <ChevronDown size={18} />
          <span>Scroll</span>
        </div>
      </section>

      {/* ========== SCHEDULE STRIP ========== */}
      <section className="schedule-strip" aria-label="Daily prayer schedule">
        <div className="container">
          <div className="schedule-strip-header">
            <span className="eyebrow eyebrow-light">Daily Prayer</span>
            <h2 className="section-heading section-heading-light">
              Every Day, Without Fail
            </h2>
            <p className="section-subtext section-subtext-light" style={{ margin: '0 auto' }}>
              We gather online every single day — morning and evening — to seek God together.
              All sessions are held via Zoom and open to everyone.
            </p>
          </div>

          <div className="schedule-cards">
            {/* Morning */}
            <div className="schedule-card reveal">
              <div className="schedule-card-media">
                <img
                  src={hero1}
                  alt="Morning Flame — daily morning prayer with House of Zion on Zoom"
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="schedule-card-body">
              <span className="schedule-card-icon">🌅</span>
              <h3>Morning Prayer</h3>
              <p>Start your day anchored in faith and the presence of God.</p>
              <div className="time-badge">
                <Video size={13} />
                6:00 AM China Time (CST)
              </div>
              <div className="meta-row">
                <span className="tag tag-gold">30 Minutes</span>
                <span className="tag tag-gold">Daily</span>
                <span className="tag tag-gold">Zoom</span>
              </div>
              </div>
            </div>

            {/* Evening */}
            <div className="schedule-card reveal reveal-delay-2">
              <div className="schedule-card-media">
                <img
                  src={hero2}
                  alt="Online fellowship — evening worship, praise, and preaching with House of Zion on Zoom"
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="schedule-card-body">
              <span className="schedule-card-icon">🌙</span>
              <h3>Evening Prayer</h3>
              <p>A full hour of worship, praise, intercession, and the Word of God.</p>
              <div className="time-badge">
                <Video size={13} />
                Evening · China Time (CST)
              </div>
              <div className="meta-row">
                <span className="tag tag-gold">1 Hour</span>
                <span className="tag tag-gold">Daily</span>
                <span className="tag tag-gold">Zoom</span>
              </div>
              <div className="activity-tags">
                <span className="tag tag-gold">🎵 Singing</span>
                <span className="tag tag-gold">🙌 Worship</span>
                <span className="tag tag-gold">🙏 Prayer</span>
                <span className="tag tag-gold">📖 Bible Teaching</span>
              </div>
              </div>
            </div>
          </div>

          <p className="zoom-note">
            All sessions are hosted on Zoom.{' '}
            <Link to="/join">Get the link →</Link>
          </p>
        </div>
      </section>

      {/* ========== ABOUT SNAPSHOT ========== */}
      <section className="about-snap" aria-label="About House of Zion">
        <div className="container">
          <div className="about-snap-grid">
            <div className="about-snap-text">
              <span className="eyebrow">Our Story</span>
              <h2 className="section-heading section-heading-dark reveal">
                A Home for African Christians Far from Home
              </h2>
              <p className="lead reveal reveal-delay-1">
                Six years ago, a small group of African international students in China found
                themselves far from their churches, their families, and their communities.
                So they built their own — online.
              </p>
              <p className="lead reveal reveal-delay-2">
                Today, House of Zion is a thriving global family of over 100 members across
                China, the USA, Canada, South Korea, and across Africa — all connected through
                WeChat and daily Zoom prayer.
              </p>
              <div className="nations-row" style={{ margin: '28px 0' }}>
                <span className="nation-pill nation-pill-dark">🇱🇷 Liberia</span>
                <span className="nation-pill nation-pill-dark">🇳🇬 Nigeria</span>
                <span className="nation-pill nation-pill-dark">🇬🇭 Ghana</span>
                <span className="nation-pill nation-pill-dark">🇺🇬 Uganda</span>
              </div>
              <Link to="/about" className="btn btn-outline-dark">Read Our Story</Link>
            </div>

            <div className="about-snap-visual reveal reveal-delay-1">
              <div className="nations-visual-grid">
                {[
                  { flag: '🇱🇷', name: 'Liberia',  sub: 'West Africa' },
                  { flag: '🇳🇬', name: 'Nigeria',  sub: 'West Africa' },
                  { flag: '🇬🇭', name: 'Ghana',    sub: 'West Africa' },
                  { flag: '🇺🇬', name: 'Uganda',   sub: 'East Africa' },
                ].map((n) => (
                  <div key={n.name} className="nation-card-mini">
                    <span className="nation-flag">{n.flag}</span>
                    <p className="nation-name">{n.name}</p>
                    <p className="nation-sub">{n.sub}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem', fontFamily: 'var(--font-head)', fontWeight: 700, color: 'var(--navy)' }}>6</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '2px' }}>Years Together</p>
                </div>
                <div style={{ width: '1px', background: 'var(--border-light)' }} />
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem', fontFamily: 'var(--font-head)', fontWeight: 700, color: 'var(--navy)' }}>100+</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '2px' }}>Active Members</p>
                </div>
                <div style={{ width: '1px', background: 'var(--border-light)' }} />
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem', fontFamily: 'var(--font-head)', fontWeight: 700, color: 'var(--navy)' }}>365</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '2px' }}>Days of Prayer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUTREACH TEASER ========== */}
      <section className="outreach-teaser" aria-label="Community outreach">
        <div className="container">
          <div className="outreach-teaser-inner">
            <div>
              <span className="eyebrow eyebrow-light">Annual Outreach</span>
              <h2 className="reveal">
                Giving Back to the Places We Come From
              </h2>
              <p className="reveal reveal-delay-1">
                Once a year, House of Zion organises a community outreach in our home countries —
                providing food to orphanages and vulnerable children. We rotate across
                Liberia, Nigeria, Ghana, and Uganda.
              </p>
              <div className="nations-row" style={{ margin: '24px 0' }}>
                <span className="nation-pill">🇱🇷 Liberia</span>
                <span className="nation-pill">🇳🇬 Nigeria</span>
                <span className="nation-pill">🇬🇭 Ghana</span>
                <span className="nation-pill">🇺🇬 Uganda</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/outreach" className="btn btn-gold">Learn About Outreach</Link>
                <Link to="/join"     className="btn btn-outline-light">Get Involved</Link>
              </div>
            </div>

            <div className="outreach-countries-grid reveal reveal-delay-1">
              {[
                { flag: '🇱🇷', name: 'Liberia',  meta: 'Orphanage Food Drive' },
                { flag: '🇳🇬', name: 'Nigeria',  meta: 'Orphanage Food Drive' },
                { flag: '🇬🇭', name: 'Ghana',    meta: 'Orphanage Food Drive' },
                { flag: '🇺🇬', name: 'Uganda',   meta: 'Orphanage Food Drive' },
              ].map((c) => (
                <div key={c.name} className="outreach-country-tile">
                  <span className="flag">{c.flag}</span>
                  <div className="country-info">
                    <p className="cname">{c.name}</p>
                    <p className="cmeta">{c.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES STRIP ========== */}
      <section style={{ background: 'var(--cream)', padding: '72px 0' }} aria-label="Our values">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: <Heart size={24} color="var(--gold)" />, title: 'Worship',   text: 'Lifting our voices in praise and adoration every single day.' },
              { icon: <Users size={24} color="var(--gold)" />, title: 'Community', text: 'A family for Africans abroad, no matter where in the world you are.' },
              { icon: <Globe size={24} color="var(--gold)" />, title: 'Outreach',  text: 'Serving orphans and the vulnerable in our home countries.' },
              { icon: <Video size={24} color="var(--gold)" />, title: 'Prayer',    text: 'Interceding together — morning and evening, without fail.' },
            ].map((v, i) => (
              <div
                key={v.title}
                className="card-cream reveal"
                style={{ textAlign: 'center', animationDelay: `${i * 0.1}s` }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'var(--navy)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {v.icon}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted-dark)', lineHeight: '1.7' }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== JOIN STRIP ========== */}
      <section className="join-strip" aria-label="Call to action — join us">
        <div className="container">
          <div className="join-strip-inner">
            <span className="eyebrow eyebrow-light">Open to Everyone</span>
            <h2 className="reveal">You Don't Have to Pray Alone</h2>
            <p className="reveal reveal-delay-1">
              Whether you are an African student in China, a believer in the diaspora, or anyone
              seeking a community of faith — you are welcome at House of Zion.
            </p>
            <div className="join-strip-ctas">
              <Link to="/join" className="btn btn-gold">
                <Video size={16} />
                Get the Zoom Link
              </Link>
              <Link to="/join" className="btn btn-outline-light">
                Join Our WeChat Group
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
