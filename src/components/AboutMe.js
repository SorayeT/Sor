import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy, FaChevronLeft, FaChevronRight, FaUpload } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSkillsIndex, setCurrentSkillsIndex] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 100, height: 100 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setImageSize({ width: 100, height: 100 });
        setImagePosition({ x: 0, y: 0 }); // Reset position on upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResize = (e) => {
    if (e.target.classList.contains('resize-handle')) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const startX = e.clientX - containerRect.left;
      const startY = e.clientY - containerRect.top;
      
      const handleMouseMove = (moveEvent) => {
        const currentX = moveEvent.clientX - containerRect.left;
        const currentY = moveEvent.clientY - containerRect.top;
        
        const newWidth = Math.max(10, Math.min(100, ((currentX - startX) / containerRect.width) * 100 + imageSize.width));
        const newHeight = Math.max(10, Math.min(100, ((currentY - startY) / containerRect.height) * 100 + imageSize.height));
        
        setImageSize({ width: newWidth, height: newHeight });
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleDragStart = (e) => {
    if (e.target.classList.contains('profile-photo')) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const startX = e.clientX - containerRect.left;
      const startY = e.clientY - containerRect.top;
      
      const handleMouseMove = (moveEvent) => {
        const currentX = moveEvent.clientX - containerRect.left;
        const currentY = moveEvent.clientY - containerRect.top;
        
        const newX = Math.max(-50, Math.min(50, currentX - startX + imagePosition.x));
        const newY = Math.max(-50, Math.min(50, currentY - startY + imagePosition.y));
        
        setImagePosition({ x: newX, y: newY });
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const sections = [
    {
      id: 1,
      title: 'Who I Am',
      icon: <FaUser />,
      content: 'A software engineer with a creative edge, combining development skills and digital marketing expertise to build functional, engaging digital experiences. Passionate about coding, problem-solving, and using marketing strategies to deliver results..'
    },
    {
      id: 2,
      title: 'Professional Experience',
      icon: <FaBriefcase />,
      content: 'Full-stack developer and digital marketer with experience building scalable web apps and optimizing them for performance, usability, and conversion.'
    },
    {
      id: 3,
      title: 'Education',
      icon: <FaGraduationCap />,
      content: 'Software Engineering graduate passionate about full-stack development and data-driven marketing. Committed to lifelong learning to build cutting-edge, user-centric solutions.'
    },
    {
      id: 4,
      title: 'Certifications',
      icon: <FaCertificate />,
      content: 'Certified in leadership, Tech Field, and proven in competitive hackathons.'
    },
    {
      id: 5,
      title: 'Achievements',
      icon: <FaTrophy />,
      content: 'Top-ranked female Software Engineer (Dire Dawa University) celebrated for academic excellence, open-source contributions, and pioneering technical solutions.'
    }
  ];

  const skills = [
    'React', 'JavaScript', 'Node.js', 'HTML/CSS', 'SQL', 
  ];

  const nextSection = () => {
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const prevSection = () => {
    setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const nextSkill = () => {
    setCurrentSkillsIndex((prev) => (prev >= skills.length - 6 ? 0 : prev + 6));
  };

  const prevSkill = () => {
    setCurrentSkillsIndex((prev) => (prev === 0 ? skills.length - 6 : prev - 6));
  };

  return (
    <div className="about-me-section" id="about">
      <div className="about-me-container">
        <div className="about-me-cover">
          <div className="profile-photo-container">
            <div className="profile-photo-upload" ref={containerRef}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
              {profileImage ? (
                <div className="resizable-image-container">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="profile-photo"
                    style={{ 
                      width: `${imageSize.width}%`, 
                      height: `${imageSize.height}%`,
                      transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`
                    }}
                    onMouseDown={handleDragStart}
                  />
                  <div className="resize-handle" onMouseDown={handleResize}>
                    <FaUpload className="resize-icon" />
                  </div>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <FaUpload className="upload-icon" />
                  <p>Choose Photo</p>
                </div>
              )}
            </div>
          </div>
          <div className="about-me-content">
            <div className="about-me-header">
              <h1 className="section-title">About Me</h1>
              <p className="section-description">
                Get to know me better through my journey and expertise
              </p>
            </div>
          </div>
        </div>

        <div className="about-me-sections">
          {sections.map((section) => (
            <div className="about-me-section-box" key={section.id}>
              <div className="section-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-carousel">
            <button 
              className="nav-arrow" 
              onClick={prevSkill}
              disabled={currentSkillsIndex === 0}
            >
              <FaChevronLeft />
            </button>

            <div className="skills-grid">
              {skills.slice(currentSkillsIndex, currentSkillsIndex + 6).map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item ${index === 0 ? 'active' : ''}`}
                >
                  {skill}
                </div>
              ))}
            </div>

            <button 
              className="nav-arrow" 
              onClick={nextSkill}
              disabled={currentSkillsIndex >= skills.length - 6}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;