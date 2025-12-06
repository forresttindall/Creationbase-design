import React, { useMemo, useState } from 'react'
import { InstagramLogo } from '@phosphor-icons/react'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPath = useMemo(() => {
    if (typeof window === 'undefined') return '/'
    const p = window.location.pathname.replace(/\/$/, '')
    return p === '' ? '/' : p
  }, [])
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" aria-label="Home" className="brand-link">
            <img src="/images/all white png.png" alt="Creationbase Logo" className="logo" />
          
          </a>
        </div>
        <div className="nav-float">
          <div className="nav-right">
            <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}><span className="nav-link-text">Home</span></a>
            <a href="/websites" className={`nav-link ${currentPath === '/websites' ? 'active' : ''}`}><span className="nav-link-text">Websites</span></a>
            <a href="/graphicdesign" className={`nav-link ${currentPath === '/graphicdesign' ? 'active' : ''}`}><span className="nav-link-text">Graphic Design</span></a>
            <a href="/casestudies" className={`nav-link ${currentPath === '/casestudies' ? 'active' : ''}`}><span className="nav-link-text">Case Studies</span></a>
            <a href="/about" className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}><span className="nav-link-text">About</span></a>
            <a href="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}><span className="nav-link-text">Contact</span></a>
            <a href="https://www.instagram.com/creationbase.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link"><InstagramLogo size={18} /></a>
          </div>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="bar bar-top" />
          <span className="bar bar-bottom" />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <a href="/" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Home</span></a>
          <a href="/websites" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Websites</span></a>
          <a href="/graphicdesign" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Graphic Design</span></a>
          <a href="/casestudies" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Case Studies</span></a>
          <a href="/about" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">About</span></a>
          <a href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Contact</span></a>
          <a href="https://www.instagram.com/creationbase.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link" onClick={() => setMenuOpen(false)}><InstagramLogo size={18} /></a>
        </div>
      </div>
    </nav>
  )
}
