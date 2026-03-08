import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React JS', icon: '⚛️' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Git & GitHub', icon: '🔧' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Responsive Design', icon: '📐' }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
      <p className="skills-footer">Always learning and exploring new technologies.</p>
    </section>
  )
}

export default Skills
