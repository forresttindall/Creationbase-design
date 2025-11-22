import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './GraphicDesign.css'

export default function GraphicDesign() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">
        <h1 className="name">Graphic Design</h1>
        <p className="gd-desc">Logo design, graphic design, and branding. Identity systems, typography, layouts, and production-ready assets.</p>

        <div className="gd-grid">
          <section className='project card'>
            <div className="featured-image">
              <video src="/images/cbliquid.mov" autoPlay loop muted playsInline />
              <img src="/images/banner.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Creationbase (agency)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/lrk.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Tindall Knives</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

         



          <section className='project card'>
            <div className="featured-image">
              <img src="/images/Open-Netizen.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Open Netizen (non-profit organization)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

                <section className='project card'>
            <div className="featured-image">
              <img src="/images/parallax shirt.jpg" alt="Parallax Zine" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Parallax Zine (Film Photography Zine)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/logo.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Lavendair (software)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/paradoxlabsgreensmaller.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Paradox Labs (Tech)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}