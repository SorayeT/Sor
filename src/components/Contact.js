import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="contact-item">
            <div className="contact-label">
              <FaEnvelope className="contact-icon" />
              <span>Mail Me</span>
            </div>
            <p className="contact-value">+251987386603</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-label">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="contact-form">
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
  );
};

export default Contact;
