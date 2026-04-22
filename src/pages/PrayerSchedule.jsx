import { Link } from 'react-router-dom'
import { Video, Clock, Calendar, Music, BookOpen, Heart, Users } from 'lucide-react'

export default function PrayerSchedule() {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-eyebrow">Daily Prayer</span>
            <h1>Pray Without Ceasing</h1>
            <p>
              Every day — morning and evening — House of Zion gathers online to seek God together.
              You are always welcome to join.
            </p>
          </div>
        </div>
      </div>

      {/* ========== PRAYER CARDS ========== */}
      <section className="prayer-cards-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow eyebrow-light">Daily Schedule</span>
            <h2 className="section-heading section-heading-light reveal">
              Two Sessions, Every Single Day
            </h2>
            <p className="section-subtext section-subtext-light reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              All sessions are held on Zoom and open to everyone — whether you are in China,
              Africa, America, or anywhere else in the world.
            </p>
          </div>

          <div className="prayer-cards-grid">
            {/* Morning Prayer */}
            <div className="prayer-card reveal">
              <span className="prayer-icon">🌅</span>
              <h2>Morning Prayer</h2>
              <p style={{ color: 'var(--muted-light)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Begin your day in God's presence. A focused 30-minute session to centre
                your heart, intercede for your needs, and set your spirit right before the day ahead.
              </p>

              <div className="prayer-time">
                <Clock size={15} />
                6:00 AM · China Standard Time (CST)
              </div>

              <ul className="prayer-meta-list">
                <li>
                  <Clock size={15} />
                  <span><strong>Duration:</strong> 30 minutes</span>
                </li>
                <li>
                  <Calendar size={15} />
                  <span><strong>Frequency:</strong> Every day of the year</span>
                </li>
                <li>
                  <Video size={15} />
                  <span><strong>Platform:</strong> Zoom (link shared via WeChat)</span>
                </li>
                <li>
                  <Users size={15} />
                  <span><strong>Open to:</strong> Everyone — all are welcome</span>
                </li>
              </ul>

              <div style={{ marginTop: '28px' }}>
                <Link to="/join" className="btn btn-gold">
                  <Video size={15} />
                  Get the Zoom Link
                </Link>
              </div>
            </div>

            {/* Evening Prayer */}
            <div className="prayer-card reveal reveal-delay-2">
              <span className="prayer-icon">🌙</span>
              <h2>Evening Prayer</h2>
              <p style={{ color: 'var(--muted-light)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                A rich full-hour session to close the day in worship. We sing, pray, receive
                the Word, and encourage one another. This is the heartbeat of House of Zion.
              </p>

              <div className="prayer-time">
                <Clock size={15} />
                Evening · China Standard Time (CST)
              </div>

              <ul className="prayer-meta-list">
                <li>
                  <Clock size={15} />
                  <span><strong>Duration:</strong> 1 hour</span>
                </li>
                <li>
                  <Calendar size={15} />
                  <span><strong>Frequency:</strong> Every day of the year</span>
                </li>
                <li>
                  <Video size={15} />
                  <span><strong>Platform:</strong> Zoom (link shared via WeChat)</span>
                </li>
                <li>
                  <Users size={15} />
                  <span><strong>Open to:</strong> Everyone — all are welcome</span>
                </li>
              </ul>

              <div className="activity-pills" style={{ marginTop: '20px' }}>
                <div className="tag tag-gold">
                  <Music size={12} /> Singing
                </div>
                <div className="tag tag-gold">
                  <Heart size={12} /> Worship
                </div>
                <div className="tag tag-gold">
                  🙏 Prayer
                </div>
                <div className="tag tag-gold">
                  <BookOpen size={12} /> Bible Teaching
                </div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <Link to="/join" className="btn btn-gold">
                  <Video size={15} />
                  Get the Zoom Link
                </Link>
              </div>
            </div>
          </div>

          {/* Timezone note */}
          <div className="timezone-note reveal">
            🕐 <strong>China Standard Time (CST) = UTC+8</strong> &nbsp;—&nbsp;
            Morning Prayer is 6:00 AM CST · Evening Prayer time is shared via WeChat.&nbsp;
            <a href="https://www.worldtimeserver.com" target="_blank" rel="noopener noreferrer">
              Convert to your timezone →
            </a>
          </div>
        </div>
      </section>

      {/* ========== FASTING SECTION ========== */}
      <section className="fasting-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <span className="eyebrow">Special Seasons</span>
            <h2 className="section-heading section-heading-dark reveal">
              Twice-Yearly Fasting
            </h2>
            <p className="section-subtext section-subtext-dark reveal reveal-delay-1" style={{ margin: '0 auto 56px' }}>
              Twice a year, House of Zion enters an extended period of fasting and prayer.
              These are special seasons of spiritual intensity — and they are open to all.
            </p>
          </div>

          <div className="fasting-grid">
            <div className="fasting-text">
              <h3 className="reveal">What Happens During Fasting?</h3>
              <p className="reveal reveal-delay-1">
                During fasting periods, the community commits to corporate fasting and
                intensified prayer. Guest preachers and ministers are invited to join
                the group — bringing the Word, leading intercession, and fellowshipping
                with the community.
              </p>
              <p className="reveal reveal-delay-2">
                These seasons are powerful times of spiritual breakthrough, deep community
                bonding, and encountering God in a fresh way. Members across all time zones
                participate, and the unity felt during these periods is extraordinary.
              </p>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }} className="reveal reveal-delay-3">
                <span className="tag tag-navy">🕊️ Corporate Fasting</span>
                <span className="tag tag-navy">🎙️ Guest Preachers</span>
                <span className="tag tag-navy">📖 Intensive Bible Study</span>
                <span className="tag tag-navy">🙏 Intercession</span>
              </div>
            </div>

            <div className="fast-date-cards">
              <div className="fast-date-card reveal">
                <span className="fast-icon">✨</span>
                <div>
                  <h4>First Fasting Period</h4>
                  <p>Usually held in the first half of the year. Dates announced via WeChat. Guest preachers lead special teaching sessions.</p>
                </div>
              </div>
              <div className="fast-date-card reveal reveal-delay-1">
                <span className="fast-icon">🔥</span>
                <div>
                  <h4>Second Fasting Period</h4>
                  <p>Held in the second half of the year. Another powerful season of prayer, worship, and the Word with invited ministers.</p>
                </div>
              </div>
              <div style={{ marginTop: '8px', padding: '16px 20px', background: 'var(--gold-dim)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 'var(--radius-md)' }} className="reveal reveal-delay-2">
                <p style={{ fontSize: '0.88rem', color: 'var(--navy)', lineHeight: '1.7' }}>
                  📲 <strong>Stay updated:</strong> Fasting dates and guest preacher announcements are shared
                  in our WeChat group. <Link to="/join" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>Join us to receive notifications →</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT TO EXPECT ========== */}
      <section style={{ background: 'var(--navy-mid)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="eyebrow eyebrow-light">First Time?</span>
            <h2 className="section-heading section-heading-light reveal">
              What to Expect
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                icon: '💻',
                title: 'Join via Zoom',
                desc: 'Get the Zoom link through our WeChat group. Click, join, and you are instantly connected with brothers and sisters from around the world.',
              },
              {
                icon: '🌍',
                title: 'From Anywhere',
                desc: 'It does not matter where you are — China, Africa, America, or anywhere else. As long as you have internet, you can join us.',
              },
              {
                icon: '🤝',
                title: 'Warm Welcome',
                desc: 'First-timers are warmly welcomed. No pressure, no performance — just genuine fellowship and prayer in a loving community.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`card-navy reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted-light)', lineHeight: '1.7' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="prayer-zoom-cta">
            <Link to="/join" className="btn btn-gold" style={{ fontSize: '1rem', padding: '16px 36px' }}>
              <Video size={18} />
              Get the Zoom Link — Join Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
