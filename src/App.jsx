import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
import Navbar from './Navbar'
import Hero from './Hero'
import MenuPreview from './MenuPreview'
import Community from './Community'
import Award from './Award'
import About from './About'
import ContactBanner from './ContactBanner'
import Footer from './Footer'
import MenuPage from './MenuPage'
import CommunityPage from './CommunityPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import OrderPage from './OrderPage'
import './App.css'

function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Hero />
        <MenuPreview />
        <Community />
        <Award />
        <About />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
