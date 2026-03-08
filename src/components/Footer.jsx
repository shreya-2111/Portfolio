import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Shreya Raval</h3>
          <p className="footer-subtitle">Full-Stack Developer</p>
          <p className="footer-description">
            Crafting beautiful and functional web experiences with modern technologies.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            {quickLinks.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Shreya Raval. All rights reserved.</p>
        <p>Made by Shreya Raval</p>
      </div>
    </footer>
  )
}

export default Footer
