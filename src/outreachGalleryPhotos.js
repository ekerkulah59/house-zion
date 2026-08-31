import imgUga from './assets/uga.jpeg'
import imgAada from './assets/aada.jpeg'
import imgGaage from './assets/gaage.jpeg'
import imgGall from './assets/gall.jpeg'
import imgGallarar from './assets/gallarar.jpeg'
import imgGallary1 from './assets/gallary-1.jpeg'
import imgGallary from './assets/gallary.jpeg'
import imgGallay from './assets/gallay.jpeg'
import imgGlaaf from './assets/glaaf.jpeg'
import imgGlallay from './assets/glallay.jpeg'
import imgImafe from './assets/imafe.jpeg'
import imgHoz from './assets/hoz.jpeg'
import imgHozee from './assets/hozee.jpeg'
import imgHozw from './assets/hozw.jpeg'
import imgMomm from './assets/momm.jpeg'

/**
 * Community photography — outreach trips (Uganda & Liberia) and gatherings in China.
 * `country` drives gallery filters on /gallery.
 */
export const outreachGalleryPhotos = [
  {
    id: 'uga',
    src: imgUga,
    country: 'uganda',
    alt: 'House of Zion outreach in Uganda — sharing food and time with children',
  },
  {
    id: 'aada',
    src: imgAada,
    country: 'uganda',
    alt: 'House of Zion outreach in Uganda — community and children at the orphanage food drive',
  },
  {
    id: 'gaage',
    src: imgGaage,
    country: 'uganda',
    alt: 'Volunteers preparing food packages during House of Zion outreach',
  },
  {
    id: 'gall',
    src: imgGall,
    country: 'uganda',
    alt: 'Children and helpers during the annual orphanage food outreach',
  },
  {
    id: 'gallarar',
    src: imgGallarar,
    country: 'uganda',
    alt: 'Moments of joy during the Uganda outreach visit',
  },
  {
    id: 'gallary-1',
    src: imgGallary1,
    country: 'uganda',
    alt: 'Food packages and fellowship at the outreach',
  },
  {
    id: 'gallary',
    src: imgGallary,
    country: 'uganda',
    alt: 'House of Zion members serving during the outreach',
  },
  {
    id: 'gallay',
    src: imgGallay,
    country: 'uganda',
    alt: 'Celebrating together after food distribution',
  },
  {
    id: 'glaaf',
    src: imgGlaaf,
    country: 'liberia',
    alt: 'Prayer and presence with children at the outreach',
  },
  {
    id: 'glallay',
    src: imgGlallay,
    country: 'liberia',
    alt: 'Community volunteers alongside House of Zion at the food drive',
  },
  {
    id: 'imafe',
    src: imgImafe,
    country: 'liberia',
    alt: 'Sharing meals and hope during the annual outreach',
  },
  {
    id: 'hoz',
    src: imgHoz,
    country: 'china',
    alt: 'House of Zion gathering in China — the community seated in prayer and reflection',
  },
  {
    id: 'hozee',
    src: imgHozee,
    country: 'china',
    alt: 'Teaching on spiritual renewal during a House of Zion gathering',
  },
  {
    id: 'hozw',
    src: imgHozw,
    country: 'china',
    alt: 'A House of Zion minister sharing the Word, with worship on guitar beside the podium',
  },
  {
    id: 'momm',
    src: imgMomm,
    country: 'china',
    alt: 'Teaching on reconciliation through the Cross during a House of Zion gathering',
  },
]

export const outreachTripPhotos = outreachGalleryPhotos.filter(
  (p) => p.country === 'uganda' || p.country === 'liberia'
)
