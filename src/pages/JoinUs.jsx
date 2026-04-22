import { useState } from 'react'
import { MessageCircle, Video, Send, User, Mail, Globe, MessageSquare } from 'lucide-react'

const countries = [
  'China', 'Liberia', 'Nigeria', 'Ghana', 'Uganda',
  'United States', 'Canada', 'South Korea',
  'United Kingdom', 'Germany', 'France', 'Australia',
  'Other African Country', 'Other Country',
]

export default function JoinUs() {
  const [formData, setFormData] = useState({ name: '', email: '', country: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic non-empty check
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-eyebrow">Open to Everyone</span>
            <h1>You Are<br />Welcome Here</h1>
            <p>
              Whether you are an African student in China, a believer in the diaspora,
              or simply someone seeking a community of faith — there is a place for you
              at House of Zion.
            </p>
          </div>
        </div>
      </div>

      {/* ========== JOIN OPTIONS ========== */}
      <section className="join-options">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">Two Ways to Connect</span>
            <h2 className="section-heading section-heading-dark reveal">
              Join the Community
            </h2>
            <p className="section-subtext section-subtext-dark reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              Stay connected through our WeChat group for daily fellowship,
              or join us live on Zoom for morning and evening prayer.
            </p>
          </div>

          <div className="join-options-grid">
            {/* WeChat */}
            <div className="join-option-card reveal">
              <div className="join-option-icon">
                <MessageCircle size={30} color="var(--gold)" />
              </div>
              <h3>Join Our WeChat Group</h3>
              <p>
                Our primary community hub — where Zoom links, prayer requests, announcements,
                and daily encouragement are shared. Connect with 100+ members from around the world.
              </p>

              <div className="qr-placeholder">
                <MessageCircle size={40} color="var(--gold)" />
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', margin: '4px 0 16px', fontStyle: 'italic' }}>
                Scan QR code or send a message below to receive the WeChat group link
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                <span className="tag tag-navy">🌍 Global members</span>
                <span className="tag tag-navy">📢 Daily updates</span>
                <span className="tag tag-navy">🙏 Prayer requests</span>
              </div>

              <a
                href="#contact-form"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={16} />
                Request WeChat Link
              </a>
            </div>

            {/* Zoom */}
            <div className="join-option-card reveal reveal-delay-2">
              <div className="join-option-icon">
                <Video size={30} color="var(--gold)" />
              </div>
              <h3>Join Us on Zoom</h3>
              <p>
                Attend our daily morning prayer (6:00 AM CST) or evening prayer session live on
                Zoom. See faces, hear voices, and pray together in real time — from anywhere in the world.
              </p>

              <div style={{ width: '100%', background: 'var(--cream)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '24px', margin: '12px 0', textAlign: 'center' }}>
                <Video size={40} color="var(--navy)" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontSize: '0.88rem', color: 'var(--muted-dark)', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--navy)' }}>🌅 Morning Prayer</strong><br />
                  6:00 AM · China Time · 30 min<br /><br />
                  <strong style={{ color: 'var(--navy)' }}>🌙 Evening Prayer</strong><br />
                  Evening · China Time · 1 hour
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                <span className="tag tag-navy">📅 Daily</span>
                <span className="tag tag-navy">🎵 Worship</span>
                <span className="tag tag-navy">📖 Bible Teaching</span>
              </div>

              <a
                href="#contact-form"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Video size={16} />
                Request Zoom Link
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <section className="join-form-section" id="contact-form">
        <div className="container">
          <div className="join-form-grid">
            {/* Left: Text */}
            <div className="join-form-text">
              <span className="eyebrow eyebrow-light">Get in Touch</span>
              <h2 className="reveal">Send Us a Message</h2>
              <p className="reveal reveal-delay-1">
                Fill in the form and we will send you the WeChat group invite and Zoom link.
                If you have questions or a prayer request, we'd love to hear from you too.
              </p>

              <blockquote className="welcome-quote reveal reveal-delay-2">
                "No matter where in the world you are,
                there is a <span style={{ color: 'var(--gold)' }}>seat at this table</span>
                — and a family ready to pray with you."
              </blockquote>

              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <User size={15} />, text: 'All backgrounds and nationalities welcome' },
                  { icon: <Globe size={15} />, text: 'Members from China, USA, Canada, South Korea & Africa' },
                  { icon: <MessageCircle size={15} />, text: 'WeChat + Zoom links sent within 24 hours' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--muted-light)', fontSize: '0.9rem' }} className="reveal">
                    <div style={{ color: 'var(--gold)', flexShrink: 0 }}>{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div style={{
                  background: 'var(--navy-card)', border: '1px solid var(--border-dark)',
                  borderTop: '4px solid var(--gold)', borderRadius: 'var(--radius-xl)',
                  padding: '56px 40px', textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🙏</div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', color: 'var(--text-light)', marginBottom: '12px' }}>
                    Welcome to House of Zion!
                  </h3>
                  <p style={{ color: 'var(--muted-light)', lineHeight: '1.8' }}>
                    Thank you, <strong style={{ color: 'var(--gold)' }}>{formData.name}</strong>!
                    We have received your message and will send your WeChat link and Zoom details
                    to <strong style={{ color: 'var(--gold)' }}>{formData.email}</strong> within 24 hours.
                  </p>
                  <p style={{ color: 'var(--gold)', marginTop: '20px', fontFamily: 'var(--font-head)', fontStyle: 'italic' }}>
                    "You are no longer a stranger — you are family."
                  </p>
                </div>
              ) : (
                <form className="join-form reveal" onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', color: 'var(--text-light)', marginBottom: '24px' }}>
                    Request Your Invite
                  </h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <User size={12} style={{ display: 'inline', marginRight: '6px' }} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <Mail size={12} style={{ display: 'inline', marginRight: '6px' }} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">
                      <Globe size={12} style={{ display: 'inline', marginRight: '6px' }} />
                      Country / Location
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="">Select your country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <MessageSquare size={12} style={{ display: 'inline', marginRight: '6px' }} />
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us a bit about yourself, share a prayer request, or just say hi..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-gold form-submit">
                    <Send size={16} />
                    Send & Request Invite
                  </button>

                  <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.8rem', color: 'var(--muted-light)' }}>
                    We respond within 24 hours. Your information is kept private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WELCOME QUOTE ========== */}
      <section className="join-welcome-section">
        <div className="container">
          <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>An Open Door</span>
          <blockquote className="reveal">
            "No matter where in the world you are,<br />
            there is a <em>seat at this table</em>."
          </blockquote>
          <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--muted-dark)', fontSize: '0.9rem' }}>
            — The spirit of House of Zion
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <span className="tag tag-navy">🇱🇷 Liberians</span>
            <span className="tag tag-navy">🇳🇬 Nigerians</span>
            <span className="tag tag-navy">🇬🇭 Ghanaians</span>
            <span className="tag tag-navy">🇺🇬 Ugandans</span>
            <span className="tag tag-navy">🌍 All Africans Abroad</span>
            <span className="tag tag-navy">🌏 Everyone Seeking God</span>
          </div>
        </div>
      </section>
    </>
  )
}
