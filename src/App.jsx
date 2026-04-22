import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import PrayerSchedule from './pages/PrayerSchedule'
import Outreach from './pages/Outreach'
import JoinUs from './pages/JoinUs'
import Gallery from './pages/Gallery'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function RevealObserver() {
  const { pathname } = useLocation()
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08 }
      )
      document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timeout)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <RevealObserver />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<About />} />
          <Route path="/prayer-schedule" element={<PrayerSchedule />} />
          <Route path="/outreach"        element={<Outreach />} />
          <Route path="/join"            element={<JoinUs />} />
          <Route path="/gallery"         element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
