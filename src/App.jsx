import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import MenuPreview from './MenuPreview'
import Community from './Community'
import Award from './Award'
import About from './About'
import ContactBanner from './ContactBanner'
import Footer from './Footer'
import MenuPage from './MenuPage'
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
