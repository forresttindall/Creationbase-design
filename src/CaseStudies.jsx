import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
import './CaseStudies.css'

export default function CaseStudies() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">
        <section className="case-hero card">
          <div className="case-hero-media">
            <img src="/images/paradoxlabslogo.jpg" alt="Paradox Labs Logo" className="case-hero-logo" />
          </div>
          <div className="case-hero-content">
            <h1 className="name">Paradox Labs</h1>
            <p className="case-summary">A hardware + software brand designing compact cybersecurity tools.</p>
            <p className="case-summary">Creationbase developed a complete brand identity and digital experience that reflects the project’s counter-culture, industrial, and cutting-edge ethos.</p>
          </div>
        </section>

        <section className="case-split">
          <div className="case-section card">
            <h2 className="case-title">The Problem</h2>
            <p className="case-text">Paradox Labs needed a clear identity that communicated privacy and security to a niche audience of cybersecurity enthusiasts, IT professionals, and tech enthusiasts. The prior web presence didn’t reflect the brand’s dark, industrial tone.</p>
          </div>
          <div className="case-section card">
            <h2 className="case-title">The Solution</h2>
            <p className="case-text">Creationbase delivered a modular, industrial visual system and a product‑first web experience.</p>
            <div className="case-list">
              <p className="case-text"><span className="bold">Brand identity:</span> new logo, tight typography, monochrome palette</p>
              <p className="case-text"><span className="bold">UI system:</span> hardware‑inspired components with layered depth</p>
              <p className="case-text"><span className="bold">Website:</span> product‑driven homepage and clear feature flow</p>
            </div>
            <div className="case-list">
              <p className="case-text"><span className="bold">Clarity</span> • <span className="bold">Tension</span> • <span className="bold">Trust</span></p>
            </div>
          </div>
        </section>

        <section className="case-section card">
          <h2 className="case-title">Final Screens</h2>
          <div className="case-media-grid">
            <div className="case-media card">
              <img src="/images/paradoxlabscard.jpg" alt="Paradox Labs Card" />
            </div>
            <div className="case-media card">
              <img src="/images/PARADOXMOCKUP.png" alt="Paradox Labs Website" />
            </div>
          </div>
          <div className="case-points">
            <p className="case-text">A bold homepage hero that anchors the brand’s tone</p>
            <p className="case-text">A feature-focused product page showcasing hardware and software concepts</p>
            <p className="case-text">A mobile-optimized version for fast browsing and dark-mode environments</p>
            <p className="case-text">Optional dashboard/interface concepts for the broader software ecosystem</p>
            <p className="case-text">Together, these screens form a cohesive identity system suitable for a modern cybersecurity product line.</p>
          </div>
        </section>

        <section className="case-section card">
          <h2 className="case-title">Role & Tools</h2>
          <p className="case-text">Creationbase led the end-to-end redevelopment across: brand identity design, logo creation, UX/UI design, component systems, product design, and web development direction.</p>
          <p className="case-text">Work was completed using Figma, React, Vercel, and supporting exploration in Illustrator and Procreate</p>
        </section>
      </div>
      <Footer />
    </div>
  )
}
