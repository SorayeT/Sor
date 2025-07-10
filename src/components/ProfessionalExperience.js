import React from 'react';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage } from 'react-icons/fa';
import './ProfessionalExperience.css';

const ProfessionalExperience = ({ onClose }) => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading a team of developers on enterprise-level applications using modern technologies.',
      documents: [
        { type: 'pdf', name: 'Performance Review 2023.pdf', url: '#', icon: <FaFilePdf /> },
        { type: 'word', name: 'Project Report.docx', url: '#', icon: <FaFileWord /> },
        { type: 'excel', name: 'Sales Analysis.xlsx', url: '#', icon: <FaFileExcel /> }
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Innovate Solutions',
      period: '2020 - 2022',
      description: 'Developed scalable web applications using React, Node.js, and MongoDB.',
      documents: [
        { type: 'pdf', name: 'Employee Certificate.pdf', url: '#', icon: <FaFilePdf /> },
        { type: 'image', name: 'Project Screenshots.zip', url: '#', icon: <FaFileImage /> }
      ]
    }
  ];

  return (
    <div className="experience-modal">
      <div className="experience-content">
        <div className="experience-header">
          <h2>Professional Experience</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
              
              <div className="documents-section">
                <h4>Documents</h4>
                <div className="documents-grid">
                  {exp.documents.map((doc) => (
                    <a key={doc.name} href={doc.url} className="document-item">
                      <div className="doc-icon">{doc.icon}</div>
                      <div className="doc-info">
                        <span className="doc-name">{doc.name}</span>
                        <span className="doc-type">.{doc.type}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
