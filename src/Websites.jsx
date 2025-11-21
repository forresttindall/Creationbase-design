import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './Websites.css'

export default function Websites() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">
        <h1 className="name">Websites</h1>
        <p className="sites-desc">Web design and development focused on clean visuals, fast performance, and maintainable code. Responsive layouts, accessible UI, and modern tooling to ship quickly and scale.</p>

        <div className="sites-grid">

                 <section className='project card'>
            <div className="featured-image">
              <img src="/images/amore mockup.png" alt="Amore" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Amore</p>
            <p className="mono-text"><span className="bold">Description:</span> Boise Restaurant</p>
            <p className="mono-text"><span className="bold">Work:</span> Design, prototyping and development of the website</p>
          </section>


          <section className='project card'>
            <div className="featured-image">
              <img src="/images/creationbase.png" alt="Creationbase" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Creationbase</p>
            <p className="mono-text"><span className="bold">Description:</span> Agency</p>
            <p className="mono-text"><span className="bold">Work:</span> Design, prototyping and development of the website</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/clearfeed.jpg" alt="Clearfeed" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Clearfeed</p>
            <p className="mono-text"><span className="bold">Description:</span> Open‑source, totally private RSS feed reader</p>
            <p className="mono-text"><span className="bold">Work:</span> Design, prototyping and development of the website</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/quantumkeep2.png" alt="QuantumKeep" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> QuantumKeep</p>
            <p className="mono-text"><span className="bold">Description:</span>Quantum enhanced file encryption web app</p>
            <p className="mono-text"><span className="bold">Work:</span> Design, prototyping and development of the website</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/arrowleaf.png" alt="Arrowleaf" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Arrowleaf</p>
            <p className="mono-text"><span className="bold">Description:</span>Restaurant website</p>
            <p className="mono-text"><span className="bold">Work:</span> Design, prototyping and development of the website</p>
          </section>

          <section className='project card'>
            <div className="featured-image">
              <img src="/images/habitat.png" alt="Habitat lab" />
            </div>
            <p className="mono-text"><span className="bold">Brand:</span> Habitat</p>
            <p className="mono-text"><span className="bold">Description:</span>Property management website</p>
            <p className="mono-text"><span className="bold">Work:</span> Design, prototyping and development of the website</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}