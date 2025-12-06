import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
import './Biography.css'

export default function Biography() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">
        <section className="about-hero">
          <h1 className="name">About</h1>
          <p className="about-leadline">Designing Digital Experiences That Convert</p>
        </section>

        <div className="about-grid">
          <section className="about-card card about-lead">
            <div className="about-image">
              <img src="/images/launch art.png" alt="Creationbase mockup" loading="lazy" />
            </div>
            <p className="bio-text">At Creationbase, we don't just build websites and apps; we craft powerful digital experiences and brand systems. Alongside web design and development, we deliver branding, logo design, and graphic design that unify your presence and drive measurable results. We understand that for small and medium sized businesses, your online presence is a critical tool for growth, and we're passionate about making it as effective as possible.</p>
          </section>

          <section className="about-card card about-method">
            <h3 className="about-card-title">Our Methodology</h3>
            <p className="bio-text">Our unique approach is built on our proprietary 4 Cs methodology: Connect, Clarify, Convince, and Convert. This, combined with our expertise in color psychology, interaction design, and behavioral psychology, allows us to create not just beautiful websites, but intelligent platforms that intuitively guide user behavior and transform visitors into loyal customers.</p>
          </section>

          <section className="about-card card about-founded">
            <h3 className="about-card-title">Founded in 2022</h3>
            <p className="bio-text">Founded in 2022 out of a deep-seated passion for web design and a desire to have complete control over the creative process. Creationbase (led by founder and Creative Director, Forrest Tindall) brings a unique blend of entrepreneurial experience and technical skill to every project. Having over a decade of experience building websites, we understand the challenges and opportunities businesses face online.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
