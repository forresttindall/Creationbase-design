import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const logoPath = '/images/Blocks.png'

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
            <div className="footer-text-block">
              <p className="footer-tagline">Design | Development | Strategy</p>
              <p className="footer-copy">© {currentYear} Creationbase. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="footer-right" role="navigation" aria-label="Footer navigation">
          <div className="footer-column services">
            <h4 className="footer-title">Services</h4>
            <a className="footer-link" href="/websites">Websites</a>
            <a className="footer-link" href="/graphicdesign">Graphic Design</a>
          </div>
          <div className="footer-column company">
            <h4 className="footer-title">Company</h4>
            <a className="footer-link" href="/about">About</a>
            <a className="footer-link" href="/casestudies">Case Studies</a>
            <a className="footer-link" href="#">Careers</a>
            <a className="footer-link" href="/#contact">Contact</a>
          </div>
          <div className="footer-column legal">
            <h4 className="footer-title">Legal</h4>
            <a className="footer-link" href="/privacy">Privacy Policy</a>
            <a className="footer-link" href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
