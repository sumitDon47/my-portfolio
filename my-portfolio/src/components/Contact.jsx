function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">
          I’m always open to discuss new projects or opportunities.
        </p>

        <div className="contact-cards">
          <a href="mailto:sumitsapkota47@gmail.com" className="contact-card">
            <h3>Email</h3>
            
          </a>

          <a href="https://github.com/sumitDon47" target="_blank" className="contact-card">
            <h3>GitHub</h3>
            
          </a>

          <a href="https://www.linkedin.com/in/sumitsapkota/" target="_blank" className="contact-card">
            <h3>LinkedIn</h3>
          
          </a>
        </div>
              </div>
        
              <footer className="footer">
                © {new Date().getFullYear()} Sumit Sapkota. All Rights Reserved.
              </footer>
      
    </section>
  )
}

export default Contact
