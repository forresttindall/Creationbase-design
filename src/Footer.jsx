import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const logoPath = '/images/dot-triangle.png'

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-container footer-row">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img
              src={logoPath}
              alt="Creationbase Logo"
              className="footer-logo-image"
              loading="lazy"
            />
            <h3 className="footer-logo">CREATIONBASE</h3>
          </div>
          <p className="footer-tagline">Design | Development | UXUI</p>
          <p className="footer-copy">© {currentYear} Creationbase. All rights reserved.</p>
        </div>
        <div className="footer-right" role="navigation" aria-label="Footer navigation">
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <a className="footer-link" href="/websites">Websites</a>
            <a className="footer-link" href="/graphicdesign">Graphic Design</a>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <a className="footer-link" href="/about">About</a>
            <a className="footer-link" href="#">Careers</a>
            <a className="footer-link" href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <a className="footer-link" href="#">Privacy Policy</a>
            <a className="footer-link" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
