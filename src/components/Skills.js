import React, { useRef } from 'react';
import { FaCode, FaPalette, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsContainerRef = useRef(null);

  const skillsData = [
    {
      id: 1,
      name: 'Web Development',
      percentage: 95,
      icon: <FaCode />,
      color: '#667eea'
    },
    {
      id: 2,
      name: 'Brand Identity',
      percentage: 80,
      icon: <FaPalette />,
      color: '#764ba2'
    },
    {
      id: 3,
      name: 'Logo Design',
      percentage: 90,
      icon: <FaPalette />,
      color: '#5e72e4'
    },
    {
      id: 4,
      name: 'UI/UX Design',
      percentage: 85,
      icon: <FaGlobe />,
      color: '#4fd1c5'
    },
    {
      id: 5,
      name: 'Mobile Development',
      percentage: 75,
      icon: <FaCode />,
      color: '#f687b3'
    }
  ];

  const scrollLeft = () => {
    if (skillsContainerRef.current) {
      skillsContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (skillsContainerRef.current) {
      skillsContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p className="skills-description">Here are some of the technologies and tools I work with</p>

        <div className="skills-carousel">
          <button 
            className="nav-arrow" 
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </button>

          <div className="skill-cards" ref={skillsContainerRef}>
            {skillsData.map(skill => (
              <div 
                key={skill.id} 
                className="skill-card"
                style={{
                  '--skill-color': skill.color
                }}
              >
                <div 
                  className="percentage-circle" 
                  style={{ background: `conic-gradient(${skill.color} ${skill.percentage}%, #e2e8f0 0)` }}
                >
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-info">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <div className="progress-container">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${skill.percentage}%`, background: skill.color }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="nav-arrow" 
            onClick={scrollRight}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;