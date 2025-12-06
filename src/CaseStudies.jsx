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
            <img src="/images/analog2.png" alt="Boise Analog Club Logo" className="case-hero-logo" />
          </div>
          <div className="case-hero-content">
            <h1 className="name">Boise Analog Club</h1>
            <p className="case-summary">A community for film photography enthusiasts in Boise.</p>
            <p className="case-summary">Creationbase led a retro redesign of the brand identity inspired by an iconic camera brand, delivering a cohesive visual system and supporting assets.</p>
          </div>
        </section>

        <section className="case-split">
          <div className="case-section card">
            <h2 className="case-title">The Problem</h2>
            <p className="case-text">Boise Analog Club needed a refreshed identity that reflected film photography roots and felt timeless, while supporting community events and digital presence.</p>
          </div>
          <div className="case-section card">
            <h2 className="case-title">The Solution</h2>
            <p className="case-text">Creationbase delivered a retro brand redesign inspired by an iconic camera brand, with crisp typography and a badge‑style mark, plus supporting web and print assets.</p>
            <div className="case-list">
              <p className="case-text"><span className="bold">Brand identity:</span> retro‑inspired logo, unified typography, restrained palette</p>
              <p className="case-text"><span className="bold">Assets:</span> club meetup flyer and infographic for social/web</p>
              <p className="case-text"><span className="bold">Website:</span> clean mockup highlighting events and membership</p>
            </div>
            <div className="case-list">
              <p className="case-text"><span className="bold">Heritage</span> • <span className="bold">Clarity</span> • <span className="bold">Community</span></p>
            </div>
          </div>
        </section>

        <section className="case-section card">
          <h2 className="case-title">Final Screens</h2>
          <div className="case-media-grid">
            <div className="case-media card">
              <img src="/images/analog2.png" alt="Boise Analog Club Logo" />
            </div>
             <div className="case-media card">
              <img src="/images/analogflyer.png" alt="Club Meetup Flyer" />
            </div>
              <div className="case-media card">
              <img src="/images/bac.png" alt="Boise Analog Club Infographic" />
            </div>
            <div className="case-media card">
              <img src="/images/analogmockup.png" alt="Boise Analog Club Website Mockup" />
            </div>
           
          
          </div>
          <div className="case-points">
            <p className="case-text">Retro logo mark and visual system grounded in film heritage</p>
            <p className="case-text">Website mockup highlighting events, membership, and community storytelling</p>
            <p className="case-text">Club meetup flyer asset designed for print and digital circulation</p>
            <p className="case-text">Infographic asset tailored for social and web content</p>
            <p className="case-text">Together, these deliverables form a cohesive identity system for Boise Analog Club.</p>
          </div>
        </section>

        <section className="case-section card">
          <h2 className="case-title">Role & Tools</h2>
          <p className="case-text">Creationbase led brand identity redesign, logo creation, web mockups, and community assets (flyer and infographic).</p>
          <p className="case-text">Work was completed using Figma, Affinity, React, and supporting exploration in Illustrator and Procreate.</p>
        </section>
      </div>
      <Footer />
    </div>
  )
}
