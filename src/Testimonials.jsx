import React from 'react'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" role="region" aria-labelledby="testimonials-title">
      <div className="testimonials-content">
        <div className="testimonials-title" id="testimonials-title">
          Wall Of <span className="gradient-text">Trust</span>
        </div>

        <div className="testimonialscontainer" role="list" aria-label="Client testimonials">
          <div className="row1">
            <div className="box" role="listitem">
              <div className="div1 eachdiv fulllegth">
                <div className="userdetails">
                  <div className="imgbox">
                    <img src="/images/lori.jpg" alt="Lori Tindall" loading="lazy" />
                  </div>
                  <div className="detbox">
                    <p className="testimonial-name">Lori Tindall</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review">
                  <h4>FIVE STARS!!!</h4>
                  <p>I put off rebranding my business and building out a new website because I just didn't have the time or inclination to do it all myself. Working with Creationbase was easy and fun because they were able to draw information out of me that helped make the design and layout reflect my values. They also built elements into my website that gets it ranked higher in search engines and it gets noticed.</p>
                </div>
              </div>
            </div>

            <div className="box" role="listitem">
              <div className="div2 eachdiv fulllegth">
                <div className="userdetails">
                  <div className="imgbox">
                    <img src="/images/grammie.jpg" alt="Jackie Beauchaine" loading="lazy" />
                  </div>
                  <div className="detbox">
                    <p className="testimonial-name">Jackie Beauchaine</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review">
                  <h4>I couldn't be happier!</h4>
                  <p>Creationbase did a fantastic job on my website. It's now ranking higher on Google and bringing in more business. They gave my site the professional look I always wanted!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row2">
            <div role="listitem">
              <div className="div4 eachdiv glow">
                <div className="userdetails">
                  <div className="imgbox">
                    <img src="/images/doug.webp" alt="Douglas Herlocker" loading="lazy" />
                  </div>
                  <div className="detbox">
                    <p className="testimonial-name">Douglas Herlocker</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review">
                  <h4>Very pleased with the results!</h4>
                  <p>Their quality and attention to detail is among the best. They built a website for my business partner that was clean, professional, and exceeded expectations.</p>
                </div>
              </div>
            </div>

            <div role="listitem">
              <div className="div5 eachdiv glow">
                <div className="userdetails">
                  <div className="imgbox">
                    <img src="/images/patrick.jpeg" alt="Patrick Abrams" loading="lazy" />
                  </div>
                  <div className="detbox">
                    <p className="testimonial-name">Patrick Abrams</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review">
                  <h4>5 out of 5 stars!</h4>
                  <p>I couldn't be happier with the rewards app Creationbase built for our carwash. It works seamlessly on both iOS and Android, and our customer engagement has increased significantly. They guided us through the entire process and backed up their recommendations with clear data and insights.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row3">
            <div className="box" role="listitem">
              <div className="div6 eachdiv fulllegth">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      alt="Sarah Mitchell"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 40 40\'><rect width=\'40\' height=\'40\' fill=\'%230a0a0a\'/><circle cx=\'20\' cy=\'20\' r=\'12\' fill=\'%231a1a1a\'/></svg>'
                      }}
                    />
                  </div>
                  <div className="detbox">
                    <p className="testimonial-name">Sarah Mitchell</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review">
                  <h4>Absolutely Outstanding!</h4>
                  <p>Creationbase transformed our outdated e-commerce platform into a modern, user-friendly experience. Our online sales have tripled since the launch, and customers constantly compliment how easy it is to navigate. Their team understood our vision perfectly and delivered beyond our expectations.</p>
                </div>
              </div>
            </div>

            <div className="box" role="listitem">
              <div className="div7 eachdiv fulllegth">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                      alt="Marcus Thompson"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 40 40\'><rect width=\'40\' height=\'40\' fill=\'%230a0a0a\'/><circle cx=\'20\' cy=\'20\' r=\'12\' fill=\'%231a1a1a\'/></svg>'
                      }}
                    />
                  </div>
                  <div className="detbox">
                    <p className="testimonial-name">Marcus Thompson</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review">
                  <h4>Game changer for my business!</h4>
                  <p>The mobile app Creationbase developed for my fitness studio has revolutionized how we connect with clients. Class bookings increased by 200%, and the integrated payment system makes everything seamless. Highly recommend their innovative approach!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
