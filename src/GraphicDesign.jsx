import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
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
              <img src="/images/creationbasemockup.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Creationbase (agency)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/LRK.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Lost River Knives</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

         



          <section className='project card'>
            <div className="featured-image">
              <img src="/images/OPEN NETIZEN.jpg" alt="Featured artwork" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Open Netizen (non-profit organization)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>

                <section className='project card'>
            <div className="featured-image">
              <img src="/images/parallax shirt 3.jpg" alt="Parallax Zine" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Parallax Zine (Film Photography Zine)</p>
            <p className="mono-text"><span className="bold">Work:</span> Brand Identity Creation And Design</p>
          </section>


          <section className='project card'>
            <div className="featured-image">
              <img src="/images/paradoxlabs.jpg" alt="Featured artwork" />
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
