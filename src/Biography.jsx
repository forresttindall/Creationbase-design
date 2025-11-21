import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './Biography.css'

export default function Biography() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container biography">
        <section className="bio-hero">
         
          <div className="bio-hero-text">
            <h1 className="bio-title">Biography</h1>
            <div className="bio-hero-images">
              <img src="/images/IMG_2273-2.jpg" alt="Biography photo" />
              
            </div>
            <p className="bio-text">Forrest Tindall is a Fullstack Creative from Boise, Idaho, raised in the wide landscapes of the American West. His work spans photography, design, art, and web development, blending technical precision with visual storytelling.</p>
            <p className="bio-text">He began making art early, first through drawing and writing, then discovering film photography at thirteen.</p>
            <p className="bio-text">In 2012, he began designing logos, and he launched Tindall Knives, beginning an over decade-long career as a bladesmith.</p>
            <p className="bio-text">Around the same time, he started a parallel path in photography, focusing on outdoor and product photography for the knife and tool industry. His photography has been featured in multiple publications, including Popular Mechanics Magazine.</p>
            <p className="bio-text">Years spent shaping steel by hand in the mountains became a study in patience, discipline, and craftsmanship, qualities that continue to define his creative work today. Through photography, design, writing, illustration, and mixed media, Tindall explores identity, society, and the subtle contradictions of modern life, examining the space between what we call things and what they truly are.</p>
            <p className="bio-text">His work has appeared in exhibitions, global publications, and bespoke retailers, reflecting an ongoing effort to bridge the personal and the universal.</p>
          </div>
        </section>

        <h2 className="bio-section-title">Publications</h2>
        <div className="publications-grid">
        <section className="project card">
          <div className="featured-image">
            <img src="/images/IMG_3005.jpg" alt="Popular Mechanics feature" />
            <img src="/images/IMG_3004.jpg" alt="Popular Mechanics feature" />
          </div>
          <p className="desc"><span className="bold">Publication:</span> Popular Mechanics Magazine</p>
          <p className="desc"><span className="bold">Description:</span> Magazine Feature</p>
          <p className="desc"><span className="bold">Date:</span> JULY/AUG 2017</p>
        </section>

        <section className="project card">
          <div className="featured-image">
            <img src="/images/campfire.JPG" alt="Sun Valley Magazine" />
          </div>
          <p className="desc"><span className="bold">Publication:</span> Sun Valley Magazine</p>
          <p className="desc"><span className="bold">Description:</span> Magazine Feature</p>
          <p className="desc"><span className="bold">Date:</span> 9.23.2019</p>
        </section>

        <section className="project card">
          <div className="featured-image">
            <img src="/images/IMG_8359.JPG" alt="Condor Knife And Tool" />
          </div>
          <p className="desc"><span className="bold">Publication:</span> Condor Knife And Tool</p>
          <p className="desc"><span className="bold">Description:</span> Catalog Cover</p>
          <p className="desc"><span className="bold">Date:</span> 1.30.2017</p>
        </section>

        <section className="project card">
          <div className="featured-image">
            <img src="/images/_DSC9182.jpg" alt="SHOT Show exhibit" />
          </div>
          <p className="desc"><span className="bold">Publication:</span> SHOT Show</p>
          <p className="desc"><span className="bold">Description:</span> Exhibit Wall</p>
          <p className="desc"><span className="bold">Date:</span> 2016 & 2017</p>
        </section>

        <section className="project card">
          <div className="featured-image">
            <img src="/images/bestmade.PNG" alt="Best Made Co. NYC" />
          </div>
          <p className="desc"><span className="bold">Publication:</span> Best Made Co. NYC</p>
          <p className="desc"><span className="bold">Description:</span> Limited Edition Knife Collaboration</p>
          <p className="desc"><span className="bold">Date:</span> 2017</p>
        </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}