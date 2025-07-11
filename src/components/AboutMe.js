import React, { useRef } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import './AboutMe.css';
import profilePhoto from '../assets/Sor grad.jpg'; // Update this path

const AboutMe = () => {
  const aboutMeContainerRef = useRef(null);
  const skillsRef = useRef(null);

  const aboutMeData = [
    {
      icon: <FaUser />,
      title: 'Who I Am',
      content: 'A software engineer with a creative edge, combining development skills and digital marketing expertise to build functional, engaging digital experiences. Passionate about coding, problem-solving, and using marketing strategies to deliver results.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Professional Experience',
      content: 'Full-stack developer and digital marketer with experience building scalable web apps and optimizing them for performance, usability, and conversion.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      content: 'Software Engineering graduate passionate about full-stack development and data-driven marketing. Committed to lifelong learning to build cutting-edge, user-centric solutions.'
    },
    {
      icon: <FaCertificate />,
      title: 'Certifications',
      content: 'Certified in leadership, Tech Field, and proven in competitive hackathons.'
    },
    {
      icon: <FaTrophy />,
      title: 'Achievements',
      content: 'Top-ranked female Software Engineer (Dire Dawa University) celebrated for academic excellence, open-source contributions, and pioneering technical solutions.'
    }
  ];

  const technicalSkills = [
    'HTML/CSS', 'JavaScript', 'React', 'Node.js', 
  
  ];

  const scrollAbout = (direction) => {
    if (aboutMeContainerRef.current) {
      aboutMeContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollSkills = (direction) => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="about-me-section" id="about">
      <div className="about-me-header">
      <div className="about-me-intro">
          <div className="profile-photo-container">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
          </div>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better through my journey and expertise</p>
      </div>
      </div>
      <div className="about-me-container">
        <button className="scroll-button left" onClick={() => scrollAbout('left')}>
          &lt;
        </button>
        
        <div className="about-me-scroll-container" ref={aboutMeContainerRef}>
          {aboutMeData.map((item, index) => (
            <div className="about-me-card" key={index}>
              <div className="about-me-icon">{item.icon}</div>
              <h3 className="about-me-title">{item.title}</h3>
              <p className="about-me-content">{item.content}</p>
            </div>
          ))}
        </div>
        
        <button className="scroll-button right" onClick={() => scrollAbout('right')}>
          &gt;
        </button>
      </div>

      {/* Technical Skills subsection */}
      <div className="technical-skills-container">
        <h3 className="skills-subheading">Technical Skills</h3>
        
        <div className="skills-scroller">
          <button 
            className="skill-scroll-btn left" 
            onClick={() => scrollSkills('left')}
          >
            &lt;
          </button>
          
          <div className="skills-list" ref={skillsRef}>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
          
          <button 
            className="skill-scroll-btn right" 
            onClick={() => scrollSkills('right')}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;