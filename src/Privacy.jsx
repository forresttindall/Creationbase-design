import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
import './Terms.css'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">
        <section className="terms-hero">
          <h1 className="name">Privacy Policy</h1>
          <p className="terms-effective">Last updated: Nov 25, 2025</p>
        </section>

        <div className="terms-content">
          <section className="terms-card card">
            <h3 className="terms-title">Introduction</h3>
            <p className="bio-text">Creationbase LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the website or use our services.</p>

            <h3 className="terms-title">Information We Collect</h3>
            <p className="bio-text">We collect information that you voluntarily provide to us when you:</p>
            <p className="bio-text">• Fill out a contact form<br />• Sign up for our newsletter<br />• Request a quote or service<br />• Communicate with us regarding our services</p>

            <h3 className="terms-title">Personal Information</h3>
            <p className="bio-text">The personal information we may collect includes:</p>
            <p className="bio-text">• Name<br />• Email address<br />• Phone number<br />• Business information<br />• Message content</p>

            <h3 className="terms-title">How We Use Your Information</h3>
            <p className="bio-text">We may use the information we collect for various purposes, including to:</p>
            <p className="bio-text">• Provide, operate, and maintain our website and services<br />• Respond to your inquiries and fulfill your requests<br />• Send you newsletters, updates, and marketing communications<br />• Improve our website and services<br />• Comply with legal obligations</p>

            <h3 className="terms-title">Cookies and Tracking Technologies</h3>
            <p className="bio-text">Our website does not use cookies or similar tracking technologies.</p>

            <h3 className="terms-title">Third-Party Services</h3>
            <p className="bio-text">We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
            <p className="bio-text">We may use third-party service providers to:</p>
            <p className="bio-text">• Host our website<br />• Send emails or newsletters<br />• Process payments</p>
            <p className="bio-text">These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h3 className="terms-title">Data Retention</h3>
            <p className="bio-text">We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information as needed to comply with legal obligations, resolve disputes, and enforce our agreements and policies.</p>

            <h3 className="terms-title">Data Security</h3>
            <p className="bio-text">We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no Internet or email transmission is ever fully secure or error-free. You should take special care in deciding what information you send to us.</p>

            <h3 className="terms-title">Your Rights</h3>
            <p className="bio-text">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <p className="bio-text">• The right to access information we have about you<br />• The right to correct inaccurate information<br />• The right to request deletion of your information<br />• The right to object to certain processing activities<br />• The right to data portability</p>
            <p className="bio-text">To exercise any of these rights, please contact us using the information provided at the end of this Privacy Policy.</p>

            <h3 className="terms-title">Children’s Privacy</h3>
            <p className="bio-text">Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe your child has provided us with personal information, please contact us so we can delete it.</p>

            <h3 className="terms-title">Changes to This Privacy Policy</h3>
            <p className="bio-text">We may update this Privacy Policy from time to time. The updated version will be indicated by the “Last Updated” date. Your continued use of our website after changes means you accept the revised Privacy Policy.</p>

            <h3 className="terms-title">Contact Us</h3>
            <p className="bio-text">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className="bio-text">Creationbase LLC<br />Attn: Jacob Forrest Tindall<br />1944 E Bobs Dr. Boise, Idaho 83712<br />Email: Forrest@creationbase.io</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

