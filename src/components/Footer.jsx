import { Link } from 'react-router-dom'
import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react'
import logoUrl from '../assets/logo.jpeg'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <img
                className="footer-logo-img"
                src={logoUrl}
                alt=""
                width={40}
                height={40}
                decoding="async"
              />
              <p className="footer-logo-wordmark">House of Zion</p>
            </div>
            <p className="footer-tagline">"Where the Nations Pray as One"</p>
            <p className="footer-about">
              A Christian online prayer group founded by and for African international students in China.
              Now spanning the globe — united in worship, prayer, and the Word.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/prayer-schedule">Prayer Schedule</Link></li>
              <li><Link to="/outreach">Outreach</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/join">Join Us</Link></li>
            </ul>
          </div>

          {/* Col 3 — Prayer Times */}
          <div className="footer-col">
            <h4>Daily Prayer</h4>
            <div className="footer-schedule-item">
              <p className="time">🌅 6:00 AM</p>
              <p className="desc">Morning Prayer · 30 min · Daily</p>
            </div>
            <div className="footer-schedule-item">
              <p className="time">🌙 Evening</p>
              <p className="desc">Evening Prayer · 1 hr · Daily</p>
            </div>
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} color="var(--gold)" />
              <span style={{ fontSize: '0.78rem', color: 'var(--muted-light)' }}>China Standard Time (UTC+8)</span>
            </div>
            <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} color="var(--gold)" />
              <span style={{ fontSize: '0.78rem', color: 'var(--muted-light)' }}>Hosted on Zoom</span>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer-col">
            <h4>Connect</h4>
            <div className="footer-contact-item">
              <MessageCircle size={15} />
              <span>Join our WeChat community group for daily updates, prayer requests, and fellowship</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} />
              <span>houseofzion.prayer@gmail.com</span>
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link to="/join" className="btn btn-gold" style={{ fontSize: '0.82rem', padding: '10px 20px' }}>
                Join the Community
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <span>House of Zion</span>. Founded with faith in China.</p>
          <p style={{ color: 'var(--muted-light)', fontSize: '0.78rem' }}>
            🇱🇷 🇳🇬 🇬🇭 🇺🇬 — Serving African students across the world
          </p>
        </div>
      </div>
    </footer>
  )
}
