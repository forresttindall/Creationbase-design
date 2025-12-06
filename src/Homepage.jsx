import React, { useEffect, useState, useRef } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
import Testimonials from './Testimonials.jsx'
import './Homepage.css'

export default function Homepage() {
  const [typed, setTyped] = useState('')
  
  const [loaded, setLoaded] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const ctaRef = useRef(null)

  
  useEffect(() => {
    const fullText = 'Your Creation Studio'
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
    setLoaded(true)
  }, [])

  

  useEffect(() => {
    const el = ctaRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCtaVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="homepage homepage-no-offset">
      <div className="home-pane">
        <Nav />
        <div className="home-pane-content">
          <section className={`hero ${loaded ? 'hero-loaded' : ''}`}>
              <h1 className="name">Design and Development for bold brands.</h1>
              <div className="sub">{typed}<span className="caret" /></div>
          </section>

          <section className="grid">
            <a href="/graphicdesign" className="card-link">
              <div className="card">
                <img src="/images/paradoxlabscard.jpg" alt="Logo Design" className="card-img" />
                <div className="label">Logo Design</div>
                <p className="desc">Distinctive marks and identity systems that stand out and scale across mediums.</p>
              </div>
            </a>
            <a href="/graphicdesign" className="card-link">
              <div className="card">
                <img src="/images/analog square.png" alt="Graphic Design" className="card-img" />
                <div className="label">Graphic Design</div>
                <p className="desc">Posters, layouts, and digital assets crafted for clarity, impact, and polish.</p>
              </div>
            </a>
            <a href="/graphicdesign" className="card-link">
              <div className="card">
                <img src="/images/OPEN NETIZEN.jpg" alt="Branding" className="card-img" />
                <div className="label">Branding</div>
                <p className="desc">Strategy, tone, and a cohesive visual system that tells a consistent story.</p>
              </div>
            </a>
          </section>
        </div>
      </div>

      <div className="homepage-container">

<div>
        <a href="/websites" className="feature card feature-link">
          <img src="/images/amore mockup.png" alt="Web Design and Development" className="feature-img" />
          <div className="label">Web Design & Development</div>
          <p className="desc">Responsive sites and performant frontends built with modern tooling, accessibility, and clean code.</p>
        </a>
      </div>

      <Testimonials />



 




        


      </div>
      <div className="home-pane">
        <div className="home-pane-content">
          <section ref={ctaRef} className={`cta-section ${ctaVisible ? 'cta-visible' : ''}`}>
            <p className="cta-text">Have a project in mind?</p>
            <a href="/contact" className="cta-btn">Get Started</a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
