import { Link } from 'react-router-dom'
import { Globe, Heart, BookOpen, Users } from 'lucide-react'

const nations = [
  {
    flag: '🇱🇷',
    name: 'Liberia',
    region: 'West Africa',
    desc: 'Where our roots run deep — a nation of resilience and unshakeable faith.',
  },
  {
    flag: '🇳🇬',
    name: 'Nigeria',
    region: 'West Africa',
    desc: 'The giant of Africa — home to a vibrant, passionate community of believers.',
  },
  {
    flag: '🇬🇭',
    name: 'Ghana',
    region: 'West Africa',
    desc: 'The gateway of Africa — a people rich in culture, worship, and hospitality.',
  },
  {
    flag: '🇺🇬',
    name: 'Uganda',
    region: 'East Africa',
    desc: 'The Pearl of Africa — where prayer and praise rise from the heartland.',
  },
]

const globalPresence = [
  { flag: '🇨🇳', country: 'China',       note: 'Where we were founded' },
  { flag: '🇱🇷', country: 'Liberia',     note: 'Home country' },
  { flag: '🇳🇬', country: 'Nigeria',     note: 'Home country' },
  { flag: '🇬🇭', country: 'Ghana',       note: 'Home country' },
  { flag: '🇺🇬', country: 'Uganda',      note: 'Home country' },
  { flag: '🇺🇸', country: 'USA',         note: 'Growing diaspora' },
  { flag: '🇨🇦', country: 'Canada',      note: 'Growing diaspora' },
  { flag: '🇰🇷', country: 'South Korea', note: 'Growing diaspora' },
]

const values = [
  { icon: <Heart   size={22} color="var(--gold)" />, label: 'Worship' },
  { icon: <BookOpen size={22} color="var(--gold)" />, label: 'The Word' },
  { icon: <Users   size={22} color="var(--gold)" />, label: 'Community' },
  { icon: <Globe   size={22} color="var(--gold)" />, label: 'Outreach' },
]

export default function About() {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-eyebrow">Our Story</span>
            <h1>Six Years of Faith,<br />Prayer & Community</h1>
            <p>
              Born in China, grown across the world — House of Zion is proof that
              distance cannot silence worship.
            </p>
          </div>
        </div>
      </div>

      {/* ========== STORY SECTION ========== */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            {/* Left: Narrative */}
            <div>
              <span className="eyebrow">The Beginning</span>
              <h2 className="section-heading section-heading-dark reveal">
                A Prayer Group Born Out of Need
              </h2>

              <p className="about-pull-quote reveal reveal-delay-1">
                "We were far from home, far from our churches — so we built a church of our own."
              </p>

              <p style={{ color: 'var(--muted-dark)', lineHeight: '1.8', marginBottom: '16px' }} className="reveal reveal-delay-2">
                Six years ago, a small group of African international students studying in China
                found themselves in a spiritually isolated situation. In a country where access
                to church services in their language and tradition was limited, they took matters
                into their own hands.
              </p>

              <p style={{ color: 'var(--muted-dark)', lineHeight: '1.8', marginBottom: '16px' }} className="reveal reveal-delay-2">
                They began gathering online — via WeChat and Zoom — to worship, pray, study the
                Bible, and encourage one another. What started as a small circle of friends quickly
                grew into a community of over 100 members.
              </p>

              <p style={{ color: 'var(--muted-dark)', lineHeight: '1.8', marginBottom: '32px' }} className="reveal reveal-delay-2">
                Today, House of Zion is no longer just a China-based group. Members now live
                in the USA, Canada, South Korea, and across Africa — but they remain united
                by the same daily rhythm of prayer, praise, and the Word.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} className="reveal reveal-delay-3">
                <Link to="/prayer-schedule" className="btn btn-gold">See Prayer Schedule</Link>
                <Link to="/join" className="btn btn-outline-dark">Join Us</Link>
              </div>
            </div>

            {/* Right: Stats visual */}
            <div className="about-story-visual reveal reveal-delay-1">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border-dark)' }}>
                {[
                  { number: '6',    label: 'Years Together' },
                  { number: '100+', label: 'Active Members' },
                  { number: '365',  label: 'Days of Prayer' },
                  { number: '4',    label: 'Home Countries' },
                ].map((s) => (
                  <div key={s.label} className="about-stat" style={{ padding: '28px 20px', background: 'var(--navy-card)' }}>
                    <span className="number">{s.number}</span>
                    <span className="label">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="about-stat-divider" />

              <div className="about-countries-row">
                <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
                  Member Countries
                </p>
                {nations.map((n) => (
                  <div key={n.name} className="about-country-row-item">
                    <span>{n.flag}</span>
                    <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>{n.name}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--muted-light)' }}>{n.region}</span>
                  </div>
                ))}
              </div>

              <div className="about-stat-divider" />

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {values.map((v) => (
                  <div key={v.label} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', background: 'var(--gold-dim)',
                    border: '1px solid var(--gold-border)', borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem', color: 'var(--text-light)'
                  }}>
                    {v.icon}
                    {v.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION STATEMENT ========== */}
      <section className="mission-section">
        <div className="container">
          <span className="eyebrow eyebrow-light" style={{ textAlign: 'center', display: 'block' }}>Our Mission</span>
          <blockquote className="mission-quote reveal">
            "Unity in <em>worship</em>, prayer, and the Word —
            a home for Christians <em>far from home</em>."
          </blockquote>
          <p className="mission-verse">— The heart of House of Zion</p>
        </div>
      </section>

      {/* ========== FOUR NATIONS ========== */}
      <section className="nations-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">Our Roots</span>
            <h2 className="section-heading section-heading-dark reveal">
              Four Nations, One Family
            </h2>
            <p className="section-subtext section-subtext-dark reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              Our members come from four beautiful African nations. No matter how far we travel,
              these places shape who we are and who we pray for.
            </p>
          </div>

          <div className="nations-grid">
            {nations.map((n, i) => (
              <div key={n.name} className={`nation-card reveal reveal-delay-${i + 1}`}>
                <span className="big-flag">{n.flag}</span>
                <div className="gold-line" />
                <h3>{n.name}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 600 }}>
                  {n.region}
                </p>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GLOBAL PRESENCE ========== */}
      <section className="global-section">
        <div className="container">
          <span className="eyebrow eyebrow-light" style={{ display: 'block', textAlign: 'center' }}>Where We Are</span>
          <h2 className="section-heading section-heading-light reveal" style={{ textAlign: 'center' }}>
            A Global Prayer Community
          </h2>
          <p className="section-subtext section-subtext-light reveal reveal-delay-1" style={{ textAlign: 'center', margin: '0 auto' }}>
            What started in China has grown to touch multiple continents. Our members are spread
            across the world, yet gathered daily in one Zoom room.
          </p>
          <div className="global-pins">
            {globalPresence.map((p, i) => (
              <div key={p.country} className={`global-pin reveal reveal-delay-${(i % 4) + 1}`}>
                <span className="pin-flag">{p.flag}</span>
                <span style={{ fontWeight: 500 }}>{p.country}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted-light)' }}>· {p.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP ========== */}
      <section className="leadership-section">
        <div className="container">
          <span className="eyebrow" style={{ display: 'block' }}>Leadership</span>
          <h2 className="section-heading section-heading-dark reveal">
            Guided by Faith
          </h2>
          <p className="section-subtext section-subtext-dark reveal reveal-delay-1" style={{ margin: '0 auto' }}>
            House of Zion is led with humility, prayer, and a heart for community.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="leader-card reveal reveal-delay-2">
              <div className="leader-avatar">
                ✝️
              </div>
              <h3 className="leader-name">Eneze Florence Ego</h3>
              <p className="leader-role">Community Leader</p>
              <p className="leader-bio">
                Eneze Florence Ego founded House of Zion six years ago with a vision to create
                a spiritual home for African Christians studying and living in China. Her leadership
                has guided the group through growth, outreach, and daily faithfulness — turning a
                small WeChat group into a global prayer family.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <span className="tag tag-navy">🇳🇬 Nigeria</span>
                <span className="tag tag-navy">📍 China</span>
                <span className="tag tag-navy">6 Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
