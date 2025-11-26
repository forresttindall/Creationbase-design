import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer.jsx'
import './Terms.css'

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Nav />
      <div className="homepage-container">
        <section className="terms-hero">
          <h1 className="name">Terms of Service</h1>
          <p className="terms-effective">Effective: Nov 25, 2025</p>
        </section>

        <div className="terms-content">
          <section className="terms-card card">
            <h3 className="terms-title">Introduction</h3>
            <p className="bio-text">These Terms of Service ("Terms") govern your use of the website operated by Creationbase LLC ("Company," "we," "us," or "our") and any services offered by the Company. By accessing or using our website or services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our services.</p>

            <h3 className="terms-title">Services</h3>
            <p className="bio-text">Creationbase LLC is a web and app development studio offering design, development, and related digital services. Our offerings include, but are not limited to, website design and development, mobile application development, software engineering, and digital consulting.</p>

            <h3 className="terms-title">User Representations</h3>
            <p className="bio-text">By using our website or engaging our services, you represent and warrant that you have the legal capacity and authority to enter into these Terms; you will use the website and our services in accordance with these Terms; you will not use the website or services for any unlawful or unauthorized purpose; and any information you provide to us is accurate, complete, and current.</p>

            <h3 className="terms-title">Intellectual Property</h3>
            <p className="bio-text"><span className="bold">Our Intellectual Property</span> — The website and all original content, including but not limited to design, code, and documentation created by Creationbase LLC, are protected by copyright and other intellectual property laws. Unless otherwise agreed in writing, all code, frameworks, scripts, and intellectual property developed by Creationbase LLC remain the sole property of the Company. You are granted a non-exclusive, non-transferable license to use deliverables for their intended purpose, but you may not reproduce, resell, sublicense, or redistribute any of our code without our express written consent.</p>
            <p className="bio-text"><span className="bold">Client Content</span> — Any content you provide to us (including text, logos, images, and copy) remains your property. You grant us a license to use, reproduce, and display such content for the purpose of providing our services.</p>

            <h3 className="terms-title">Payments and Refund Policy</h3>
            <p className="bio-text">A non-refundable deposit is required to begin any project. The remaining balance is due upon project completion and prior to handoff or deployment. If the final payment is not received, we reserve the right to retain the deposit and disable, restrict, or remove access to the delivered work, including any live websites or applications. All payments are final. No refunds will be issued under any circumstances.</p>

            <h3 className="terms-title">No Liability for Downtime</h3>
            <p className="bio-text">You acknowledge and agree that Creationbase LLC is not liable for any lost revenue, business interruption, or damages caused by website downtime, service interruptions, bugs, or other service limitations, regardless of the cause. We make no guarantee of uptime or uninterrupted availability unless explicitly defined in a written Service Level Agreement (SLA).</p>

            <h3 className="terms-title">User Content</h3>
            <p className="bio-text">If our website allows user submissions, you retain any ownership rights you have in your content but grant us a non-exclusive, royalty-free license to use it solely to deliver services to you.</p>

            <h3 className="terms-title">Prohibited Activities</h3>
            <p className="bio-text">You agree not to use the website or services in violation of any laws or regulations; attempt unauthorized access to our systems or data; upload harmful code or malware; or impersonate Creationbase LLC or its employees.</p>

            <h3 className="terms-title">Disclaimer of Warranties</h3>
            <p className="bio-text">The website and services are provided "as is" and "as available." We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

            <h3 className="terms-title">Limitation of Liability</h3>
            <p className="bio-text">In no event shall Creationbase LLC or its affiliates be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or business, arising out of your use of our services.</p>

            <h3 className="terms-title">Indemnification</h3>
            <p className="bio-text">You agree to defend, indemnify, and hold harmless Creationbase LLC and its officers, directors, employees, and agents from any claims or damages arising from your use of our services or your violation of these Terms.</p>

            <h3 className="terms-title">Termination</h3>
            <p className="bio-text">We may suspend or terminate your access to the website or our services at any time, for any reason, including breach of these Terms.</p>

            <h3 className="terms-title">Governing Law</h3>
            <p className="bio-text">These Terms shall be governed by and construed in accordance with the laws of the State of Idaho.</p>

            <h3 className="terms-title">Dispute Resolution</h3>
            <p className="bio-text">Any disputes shall be resolved through binding arbitration under the rules of the American Arbitration Association. Arbitration shall take place in Idaho and be conducted in English.</p>

            <h3 className="terms-title">Changes to These Terms</h3>
            <p className="bio-text">We reserve the right to modify these Terms at any time. Updates will be posted on this page, and continued use of our services constitutes acceptance.</p>

            <h3 className="terms-title">Severability</h3>
            <p className="bio-text">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force.</p>

            <h3 className="terms-title">Entire Agreement</h3>
            <p className="bio-text">These Terms constitute the full agreement between you and Creationbase LLC with respect to your use of the website and services, superseding all prior agreements.</p>

            <h3 className="terms-title">Contact Us</h3>
            <p className="bio-text">Creationbase LLC<br />Attn: Jacob Forrest Tindall<br />1944 E Bobs Dr. Boise, Idaho 83712<br />Email: Forrest@creationbase.io</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
