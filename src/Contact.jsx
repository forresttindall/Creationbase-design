import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { blastConfetti } from './confetti'
import Nav from './Nav'
import Footer from './Footer.jsx'

export default function Contact() {
  const form = useRef()
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false,
  })

  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleString('en-UK', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
      setCurrentDateTime(formatted)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus((prev) => ({ ...prev, isSubmitting: true }))

    emailjs.init('pZtlnSO7NHel0tpbW')

    emailjs
      .sendForm('service_qlqfr28', 'template_cc2wh4f', form.current, {
        publicKey: 'pZtlnSO7NHel0tpbW',
      })
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', isError: false, isSubmitting: false })
          form.current.reset()
          blastConfetti()
        },
        (error) => {
          console.error('EmailJS Error:', error)
          setStatus({ message: 'Failed to send message. Please try again.', isError: true, isSubmitting: false })
          blastConfetti()
        }
      )
  }

  return (
    <div className="homepage contact-page">
      <Nav />
      <div className="homepage-container">
        <div className="contact-section" ref={vantaRef}>
          <div className="contact-content">
            <h1>Contact</h1>

            <p className="mono-text"><span className="bold">Description:</span> Contact the Creaionbase studio about projects or work.</p>
            <p className="mono-text"><span className="bold">Medium:</span> E-mail</p>
            <p className="mono-text"><span className="bold">Date:</span> {currentDateTime}</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="from_name" required placeholder="Your Name" className="contact-input" />
              <input type="email" name="user_email" required placeholder="Your Email" className="contact-input" />
              <input type="text" name="subject" required placeholder="Subject" className="contact-input" />
              <textarea name="message" required placeholder="Your Message" className="contact-input" rows="6"></textarea>

              <button type="submit" className="submit-button" disabled={status.isSubmitting}>
                {status.isSubmitting ? <span className="loading-spinner"></span> : 'Send Message'}
              </button>

              {status.message && (
                <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
                  {status.message}
                </div>
              )}
            </form>

            <h1>Follow</h1>
            <p className="mono-text"><span className="bold">Description:</span> Follow Creaionbase on social.</p>
            <p className="mono-text"><span className="bold">Medium:</span> World Wide Web</p>
            <p className="mono-text"><span className="bold">Instagram:</span> <a className="project-link" href="https://www.instagram.com/creationbase.io/" target="_blank">Instagram</a></p>
            <p className="mono-text"><span className="bold">Threads:</span> <a className="project-link" href="https://www.threads.net/@creationbase.io" target="_blank">Threads</a></p>
            <p className="mono-text"><span className="bold">Bluesky:</span> <a className="project-link" href="https://bsky.app/profile/creationbase.io" target="_blank">Bluesky</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
