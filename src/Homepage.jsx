import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './Homepage.css'

export default function Homepage() {
  const [typed, setTyped] = useState('')
  const fullText = 'Fullstack Creative'
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    let i = 0
    let active = true
    const type = () => {
      if (!active) return
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i))
        i += 1
        setTimeout(type, 80)
      } else {
        setTimeout(() => {
          if (!active) return
          setTyped('')
          i = 0
          setTimeout(type, 300)
        }, 800)
      }
    }
    type()
    return () => { active = false }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setParallax(-y * 0.25)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">

        
        <section className="hero">
         
            <h1 className="name">Forrest Tindall</h1>
           
            <img src="/images/hero-photo.jpg" alt="Hero" className="hero-img" style={{ transform: `translateY(${parallax}px)` }} />
          <div className="sub">{typed}<span className="caret" /></div>
      
        </section>


<div>
        <a href="/websites" className="feature card feature-link">
          <img src="/images/arrowleaf.png" alt="Web Design and Development" className="feature-img" />
          <div className="label">Web Design & Development</div>
          <p className="desc">Responsive sites and performant frontends built with modern tooling, accessibility, and clean code.</p>
        </a>
</div>


        <section className="grid">
          <a href="/graphicdesign" className="card-link">
            <div className="card">
              <img src="/images/paradoxlabsgreensmaller.jpg" alt="Logo Design" className="card-img" />
              <div className="label">Logo Design</div>
              <p className="desc">Distinctive marks and identity systems that stand out and scale across mediums.</p>
            </div>
          </a>
          <a href="/graphicdesign" className="card-link">
            <div className="card">
              <img src="/images/IMG_3103.PNG" alt="Graphic Design" className="card-img" />
              <div className="label">Graphic Design</div>
              <p className="desc">Posters, layouts, and digital assets crafted for clarity, impact, and polish.</p>
            </div>
          </a>
          <a href="/graphicdesign" className="card-link">
            <div className="card">
              <img src="/images/IMG_3105.PNG" alt="Branding" className="card-img" />
              <div className="label">Branding</div>
              <p className="desc">Strategy, tone, and a cohesive visual system that tells a consistent story.</p>
            </div>
          </a>
        </section>

<div>
        <a href="/photography" className="feature card feature-link">
          <img src="/images/hero.jpg" alt="Commercial Photography" className="feature-img" />
          <div className="label">Commercial Photography</div>
          <p className="desc">Product, lifestyle, and editorial images shot in studio and on location. Lighting, composition, and post tuned to showcase brand and drive results.</p>
        </a>
</div>




        <section className="cta-section">
          <p className="cta-text">Have a project in mind?</p>
          <a href="/contact" className="cta-btn">Contact</a>
        </section>


      </div>
      <Footer />
    </div>
  )
}