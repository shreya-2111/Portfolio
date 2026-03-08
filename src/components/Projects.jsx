import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Modern Portfolio',
      description: 'Modern portfolio website built with HTML, CSS, and JavaScript',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://shreya-2111.github.io/Portfolio/'
    },
    {
      title: 'Login Page',
      description: 'Responsive login page UI with form validation',
      tags: ['React', 'CSS', 'Form Validation'],
      demo: 'https://shreya-2111.github.io/Login_Practice/'
    },
    {
      title: 'Profile Card',
      description: 'Minimal profile card UI focusing on responsive design',
      tags: ['HTML', 'CSS', 'Responsive'],
      demo: 'https://shreya-2111.github.io/Profile_Card/'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.demo} className="btn-outline" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <a href="https://github.com/shreya-2111" className="btn-primary" target="_blank" rel="noopener noreferrer">
          View More on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects
