import React, { useMemo, useState, useEffect } from 'react'
import { InstagramLogo } from '@phosphor-icons/react'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [homeContact, setHomeContact] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.location.hash === '#contact'
  })
  useEffect(() => {
    const onHashChange = () => {
      if (typeof window === 'undefined') return
      setHomeContact(window.location.hash === '#contact')
    }
    const onCtaEvent = (e) => {
      setHomeContact(Boolean(e.detail && e.detail.visible))
    }
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('creationbase:cta', onCtaEvent)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('creationbase:cta', onCtaEvent)
    }
  }, [])
  const active = useMemo(() => {
    if (typeof window === 'undefined') return 'home'
    const p = window.location.pathname.replace(/\/$/, '') || '/'
    if (p === '/') return homeContact ? 'contact' : 'home'
    return p
  }, [homeContact])
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
            <img src="/images/all white png.png" alt="Creationbase Logo" className="logo-inline" />
            <a href="/" className={`nav-link ${active === 'home' ? 'active' : ''}`}><span className="nav-link-text">Home</span></a>
            <a href="/websites" className={`nav-link ${active === '/websites' ? 'active' : ''}`}><span className="nav-link-text">Websites</span></a>
            <a href="/graphicdesign" className={`nav-link ${active === '/graphicdesign' ? 'active' : ''}`}><span className="nav-link-text">Graphic Design</span></a>
            <a href="/casestudies" className={`nav-link ${active === '/casestudies' ? 'active' : ''}`}><span className="nav-link-text">Case Studies</span></a>
            <a href="/biography" className={`nav-link ${active === '/biography' ? 'active' : ''}`}><span className="nav-link-text">About</span></a>
            <a href="/#contact" className={`nav-link ${active === 'contact' ? 'active' : ''}`}><span className="nav-link-text">Contact</span></a>
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
          <a href="/" className={`nav-link ${active === 'home' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-link-text">Home</span></a>
          <a href="/websites" className={`nav-link ${active === '/websites' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-link-text">Websites</span></a>
          <a href="/graphicdesign" className={`nav-link ${active === '/graphicdesign' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-link-text">Graphic Design</span></a>
          <a href="/casestudies" className={`nav-link ${active === '/casestudies' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-link-text">Case Studies</span></a>
          <a href="/biography" className={`nav-link ${active === '/biography' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-link-text">About</span></a>
          <a href="/#contact" className={`nav-link ${active === 'contact' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-link-text">Contact</span></a>
          <a href="https://www.instagram.com/creationbase.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link" onClick={() => setMenuOpen(false)}><InstagramLogo size={18} /></a>
        </div>
      </div>
    </nav>
  )
}
