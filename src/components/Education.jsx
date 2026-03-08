import React from 'react'
import '../styles/Education.css'

const Education = () => {
  const educationData = [
    {
      degree: '10th GSEB',
      institution: 'MANI-PRABHU School, Ahmedabad',
      year: '2019 – 2020',
      inProgress: false
    },
    {
      degree: '12th GSEB',
      institution: 'MANI-PRABHU School, Ahmedabad',
      year: '2021 – 2022',
      inProgress: false
    },
    {
      degree: "Bachelor's Degree (BCA)",
      institution: 'Gujarat Law Society University (GLS University), Ahmedabad',
      year: '2022 – 2025',
      inProgress: false
    },
    {
      degree: "Master's Degree (MSc IT)",
      institution: 'Gujarat Law Society University (GLS University), Ahmedabad',
      year: '2025 – 2027',
      inProgress: true
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="degree-header">
                <h3 className="education-degree">{edu.degree}</h3>
                {edu.inProgress && <span className="progress-badge">In Progress</span>}
              </div>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
