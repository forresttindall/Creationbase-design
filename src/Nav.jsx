import React, { useState } from 'react'
import { InstagramLogo } from '@phosphor-icons/react'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" aria-label="Home" className="brand-link">
            <img src="/images/typography logo png.png" alt="Creationbase Logo" className="logo" />
          
          </a>
        </div>
        <div className="nav-right">
           <a href="/websites" className="nav-link"><span className="nav-link-text">Websites</span></a>
          
          <a href="/graphicdesign" className="nav-link"><span className="nav-link-text">Graphic Design</span></a>
         
          <a href="/about" className="nav-link"><span className="nav-link-text">About</span></a>
          <a href="/contact" className="nav-link"><span className="nav-link-text">Contact</span></a>
          <a href="https://www.instagram.com/creationbase.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link"><InstagramLogo size={18} /></a>
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
          <a href="/websites" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Websites</span></a>
          <a href="/graphicdesign" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Graphic Design</span></a>
          <a href="/about" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">About</span></a>
          <a href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Contact</span></a>
          <a href="https://www.instagram.com/creationbase.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link" onClick={() => setMenuOpen(false)}><InstagramLogo size={18} /></a>
        </div>
      </div>
    </nav>
  )
}
