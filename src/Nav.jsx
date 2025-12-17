import React, { useEffect, useState } from 'react'
import { InstagramLogo } from '@phosphor-icons/react'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')
  const [hash, setHash] = useState('')
  const [workOpen, setWorkOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      const p = window.location.pathname.replace(/\/$/, '')
      setCurrentPath(p === '' ? '/' : p)
      setHash(window.location.hash || '')
    }
    update()
    window.addEventListener('popstate', update)
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" aria-label="Home" className="brand-link">
            <img src="/images/geist yellow.png" alt="Creationbase Logo" className="logo" />
          
          </a>
        </div>
        <div className="nav-float">
          <div className="nav-right">
            <img src="/images/fttypelogo.png" alt="Creationbase Logo" className="logo-inline" />
            <a href="/" className={`nav-link ${currentPath === '/' && hash !== '#contact' ? 'active' : ''}`}><span className="nav-link-text">Home</span></a>
            <div
              className={`dropdown ${workOpen ? 'open' : ''}`}
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                type="button"
                className={`nav-link dropdown-trigger ${['/websites','/graphicdesign','/photography'].includes(currentPath) ? 'active' : ''}`}
                onClick={() => setWorkOpen(o => !o)}
              >
                <span className="nav-link-text">Work</span>
                <svg className="caret-icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="/websites" className={`nav-link ${currentPath === '/websites' ? 'active' : ''}`}><span className="nav-link-text">Websites</span></a>
                <a href="/graphicdesign" className={`nav-link ${currentPath === '/graphicdesign' ? 'active' : ''}`}><span className="nav-link-text">Graphic Design</span></a>
              
              </div>
            </div>
            <a href="/casestudies" className={`nav-link ${currentPath === '/casestudies' ? 'active' : ''}`}><span className="nav-link-text">Case Studies</span></a>
            <a href="/biography" className={`nav-link ${currentPath === '/biography' ? 'active' : ''}`}><span className="nav-link-text">About</span></a>
            <a href="/#contact" className={`nav-link ${currentPath === '/' && hash === '#contact' ? 'active' : ''}`}><span className="nav-link-text">Contact</span></a>
            <a href="https://www.instagram.com/forrest.creates" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link"><InstagramLogo size={18} /></a>
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
          <a href="/biography" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">About</span></a>
          <a href="/#contact" className="nav-link" onClick={() => setMenuOpen(false)}><span className="nav-link-text">Contact</span></a>
          <a href="https://www.instagram.com/forrest.creates" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link" onClick={() => setMenuOpen(false)}><InstagramLogo size={18} /></a>
        </div>
      </div>
    </nav>
  )
}
