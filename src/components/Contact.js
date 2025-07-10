import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    { id: 1, name: 'Facebook', icon: <FaFacebook />, url: '#' },
    { id: 2, name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { id: 3, name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { id: 4, name: 'LinkedIn', icon: <FaLinkedin />, url: '#' }
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="address-box">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <span className="label">
              <FaPhone className="contact-icon" /> Mail Me
            </span>
            <p className="value">+251987632898</p>
          </div>
          <div className="contact-item">
            <span className="label">
              <FaMapMarkerAlt className="contact-icon" /> Addis Ababa, Ethiopia
            </span>
          </div>
          
          <div className="social-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} className="social-link">
                  <span className="social-icon">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-header">
            <h1>Get In Touch</h1>
          </div>
          <div className="form-content">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;