import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/tpp-white.png" alt="That Pizza Place" />
      </Link>

      {/* Three lines that turn into an X while the menu is open */}
      <button
        type="button"
        className={`navbar-toggle${menuOpen ? ' is-open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <ul id="navbar-links" className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/order" className="navbar-cta" onClick={() => setMenuOpen(false)}>Order Now</Link></li>
      </ul>
    </nav>
  )
}
