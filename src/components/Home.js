import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaMousePointer, FaUser } from 'react-icons/fa';
import './Home.css';

// Smooth scroll function
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth'
    });
  }
};

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    // Welcome message timer
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(() => setShowContent(true), 500);
    }, 3000);

    // Add floating elements
    const elements = [];
    for (let i = 0; i < 10; i++) {
      elements.push({
        id: i,
        type: Math.random() > 0.5 ? 'circle' : 'square',
        size: 50 + Math.random() * 100,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      });
    }
    setFloatingElements(elements);

    // Animate floating elements
    const animate = () => {
      setFloatingElements(prev => prev.map(element => ({
        ...element,
        x: element.x + element.speedX,
        y: element.y + element.speedY,
        speedX: element.x > window.innerWidth || element.x < 0 ? -element.speedX : element.speedX,
        speedY: element.y > window.innerHeight || element.y < 0 ? -element.speedY : element.speedY
      })));
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      clearTimeout(welcomeTimer);
      cancelAnimationFrame(animate);
    };
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="home-container" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`floating-element ${element.type}`}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            top: `${element.y}px`,
            left: `${element.x}px`,
          }}
        />
      ))}

      {/* Animated Cursor */}
      <div className="animated-cursor" style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`
      }}>
        {isHovering && <FaMousePointer className="cursor-icon" />}
      </div>

      {/* Hero Content */}
      <div className="hero-section">
        {/* Welcome Message (shows first) */}
        {showWelcome && (
          <div className="welcome-message-container">
            <h3 className="welcome-message">Welcome to my portfolio</h3>
            <p className="welcome-text">Scroll down to explore my journey</p>
            <div className="action-buttons">
              <button className="about-button" onClick={() => smoothScroll('#about')}>
                About Me
              </button>
            </div>
          </div>
        )}

        {/* Main Content (shows after welcome) */}
        {showContent && (
          <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
            <div className="animated-title">
              <h2 className="name-title">Hi! I'm <span>Sor</span></h2>
            </div>
            <div className="animated-tagline">
              <p className="tagline">
                Full Stack Developer & Creative Problem Solver<br />
                Creating beautiful digital experiences that captivate users.
              </p>
            </div>
            
            <div className="connect-section">
              <h3 className="connect-title">Let's Connect</h3>
              <div className="cta-buttons">
                <button
                  className={`primary-btn ${isScrolling ? 'loading' : ''} ${activeButton === 'projects' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveButton('projects');
                    setIsScrolling(true);
                    setTimeout(() => {
                      smoothScroll('#projects');
                      setIsScrolling(false);
                    }, 100);
                  }}
                  disabled={isScrolling}
                >
                  View Projects
                  <FaChevronDown className="button-icon" />
                  <div className="loading-indicator"></div>
                </button>
                <button
                  className={`secondary-btn ${isScrolling ? 'loading' : ''} ${activeButton === 'AboutMe' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveButton('AboutMe');
                    setIsScrolling(true);
                    smoothScroll('#about');
                    setIsScrolling(false);
                  }}
                  disabled={isScrolling}
                >
                  About Me
                  <div className="loading-indicator"></div>
                </button>
                 
                <button
                  className={`secondary-btn ${isScrolling ? 'loading' : ''} ${activeButton === 'contact' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveButton('contact');
                    setIsScrolling(true);
                    setTimeout(() => {
                      smoothScroll('#contact');
                      setIsScrolling(false);
                    }, 100);
                  }}
                  disabled={isScrolling}
                >
                  Contact Me
                  <div className="loading-indicator"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;