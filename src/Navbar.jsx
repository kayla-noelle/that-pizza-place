import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/tpp-black.png" alt="That Pizza Place" />
      </Link>

      <button
        className="navbar-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/order" className="navbar-cta">Order Now</Link></li>
      </ul>
    </nav>
  )
}
