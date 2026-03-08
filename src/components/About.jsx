import React from 'react'
import '../styles/About.css'

const About = () => {
  const stats = [
    { number: '1.5+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '5+', label: 'Certifications' }
  ]

  const highlights = [
    'Strong foundation in HTML, CSS, JavaScript, React',
    'Experience with backend development, APIs, and database integration',
    'Responsive design and mobile-first development',
    'Passionate about clean code and UI/UX',
    'Continuous learner exploring new technologies'
  ]

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-subtitle">Full-Stack Developer & UI Enthusiast</h3>
          <p className="about-description">
            I'm a passionate full-stack developer with experience in building modern, scalable, 
            and responsive web applications. I specialize in frontend and backend technologies, 
            combining clean UI design with efficient server-side logic to deliver complete, 
            high-quality solutions.
          </p>
          <ul className="about-highlights">
            {highlights.map((highlight, index) => (
              <li key={index}>
                <span className="bullet">•</span> {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
