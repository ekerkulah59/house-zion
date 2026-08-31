import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { outreachGalleryPhotos } from '../outreachGalleryPhotos'

const filters = [
  { key: 'all', label: 'All Photos' },
  { key: 'uganda', label: 'Uganda' },
  { key: 'liberia', label: 'Liberia' },
  { key: 'china', label: 'China' },
]

const countryLabels = {
  uganda: 'Uganda',
  liberia: 'Liberia',
  china: 'China',
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    setLightbox(null)
  }, [active])

  const filtered =
    active === 'all'
      ? outreachGalleryPhotos
      : outreachGalleryPhotos.filter((p) => p.country === active)

  const openAt = (index) => setLightbox(index)
  const close = () => setLightbox(null)

  const goPrev = useCallback(() => {
    setLightbox((i) => (i == null ? null : (i - 1 + filtered.length) % filtered.length))
  }, [filtered.length])

  const goNext = useCallback(() => {
    setLightbox((i) => (i == null ? null : (i + 1) % filtered.length))
  }, [filtered.length])

  useEffect(() => {
    if (lightbox == null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox, goPrev, goNext])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-eyebrow">Our Gallery</span>
            <h1>Outreach, Gatherings &amp; Fellowship</h1>
            <p>
              Real moments from our annual orphanage food drives and gatherings in China —
              faith, community, and love across the places we come from.
            </p>
          </div>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filter">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`filter-pill${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
                aria-pressed={active === f.key}
              >
                {f.label}
                <span
                  style={{
                    marginLeft: '6px',
                    fontSize: '0.72rem',
                    background: active === f.key ? 'rgba(13, 61, 38, 0.14)' : 'var(--cream)',
                    padding: '1px 7px',
                    borderRadius: '100px',
                  }}
                >
                  {f.key === 'all'
                    ? outreachGalleryPhotos.length
                    : outreachGalleryPhotos.filter((p) => p.country === f.key).length}
                </span>
              </button>
            ))}
          </div>

          <div className="gallery-grid gallery-grid-photos">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className="gallery-photo-card"
                style={{ '--i': i }}
                onClick={() => openAt(i)}
                aria-label={`Open photo: ${item.alt}`}
              >
                <span className="gallery-item-cat">{countryLabels[item.country]}</span>
                <img src={item.src} alt="" loading="lazy" decoding="async" />
                <span className="gallery-photo-caption">{item.alt}</span>
              </button>
            ))}
          </div>

          <p className="gallery-footnote">
            Want your outreach photos featured here?{' '}
            <Link to="/join">Share them with the community via WeChat →</Link>
          </p>

          <div
            style={{
              textAlign: 'center',
              marginTop: '48px',
              padding: '40px',
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📷</div>
            <h3
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '1.3rem',
                color: 'var(--text-dark)',
                marginBottom: '10px',
              }}
            >
              Share Your Photos
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--muted-dark)',
                marginBottom: '20px',
                maxWidth: '420px',
                margin: '0 auto 20px',
              }}
            >
              Have photos from our prayer sessions, fasting periods, or outreach trips? Send them
              via WeChat so we can celebrate the journey together.
            </p>
            <Link to="/join" className="btn btn-gold">
              <Image size={15} />
              Join &amp; Share Photos
            </Link>
          </div>
        </div>
      </section>

      {lightbox != null && filtered[lightbox] && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={close}
        >
          <button type="button" className="gallery-lightbox-close" onClick={close} aria-label="Close">
            <X size={22} />
          </button>
          {filtered.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-next"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <figure className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} />
            <figcaption>{filtered[lightbox].alt}</figcaption>
          </figure>
        </div>
      )}

      <section style={{ background: 'var(--navy)', padding: '64px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            {[
              { number: '6+', label: 'Years of Memories' },
              { number: '4', label: 'Countries Visited' },
              { number: '2×', label: 'Yearly Fasting Seasons' },
              { number: '365', label: 'Days of Prayer Each Year' },
            ].map((s, i) => (
              <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
                <p
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {s.number}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-light)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
