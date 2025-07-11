import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaArrowDown, FaInstagram } from 'react-icons/fa';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'; // Contact component imported
import './App.css';

const App = () => {
  document.title = 'Sor Portfolio';
  
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/SorayeT", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/soreti-tarekegn/", label: "LinkedIn" },
    { icon: <FaTelegram />, url: "https://t.me/Soranish", label: "Telegram" },
    { icon: <FaInstagram />, url: "https://instagram.com/soraye151/", label: "Instagram" },
    { icon: <FaEnvelope />, url: "mailto:sortarekegn08@gmail.com", label: "Email" }
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToContact = (e) => {
    e.preventDefault();
    smoothScrollTo('contact');
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass-nav">
        <div className="logo">Sor</div>
        <div className="nav-content">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.href.substring(1));
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="social-media">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <div className="section-content">
          <Home />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section">
        <div className="section-content">
          <AboutMe />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-content">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section glass-section">
        <div className="section-content">
          <Projects />
          <div className="cta-container" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <button 
              onClick={scrollToContact}
              className="contact-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 2rem',
                background: 'white',
                color: 'var(--primary-color)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'var(--transition)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Contact Me <FaArrowDown />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Using the imported Contact component */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default App;
