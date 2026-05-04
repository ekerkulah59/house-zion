import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoUrl from '../assets/logo.jpeg'

const navLinks = [
  { to: '/',                label: 'Home',           end: true },
  { to: '/about',           label: 'About'                    },
  { to: '/prayer-schedule', label: 'Prayer Schedule'          },
  { to: '/outreach',        label: 'Outreach'                 },
  { to: '/gallery',         label: 'Gallery'                  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()

  // Solid bg on non-home pages (they don't have a dark hero)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navClass = [
    'navbar',
    !isHome || scrolled ? 'scrolled' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="nav-logo" aria-label="House of Zion — go to homepage">
          <img
            className="nav-logo-img"
            src={logoUrl}
            alt=""
            width={44}
            height={44}
            decoding="async"
          />
          <span className="nav-logo-wordmark">
            House of Zion
            <span>Christian Prayer Group</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-links" role="menubar">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              role="menuitem"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/join" className="nav-cta" role="menuitem">Join Us</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {link.label}
          </NavLink>
        ))}
        <Link
          to="/join"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Join Us →
        </Link>
      </div>
    </>
  )
}
