import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaArrowDown, FaInstagram} from 'react-icons/fa';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="glass-section">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span>Mail Me:</span>
                <a href="mailto:sortarekegn08@gmail.com" className="contact-link">sortarekegn08@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>Phone:</span>
                <a href="tel:+251987386603" className="contact-link">+251987386603</a>
              </div>
              <div className="contact-item">
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="divider"></div>

            <form className="contact-form">
              <div className="form-group">
                <h3>Name</h3>
                <input type="text" placeholder="Your name" />
              </div>
              
              <div className="form-group">
                <h3>Email</h3>
                <input type="email" placeholder="Your email" />
              </div>
              
              <div className="form-group">
                <h3>Message</h3>
                <textarea placeholder="Your message"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;