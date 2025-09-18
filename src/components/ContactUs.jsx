// src/components/ContactUs.jsx

import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We’ll get back to you soon.');
    // In real app: send to API
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p className="subtitle">Have questions about bidding, selling, or authentication? We’re here to help.</p>
      </div>

      <div className="contact-content">
        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="info-box">
            <div className="icon-wrapper">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h4>Call Us</h4>
              <p>+990-737 621 432</p>
              <p>+990-737 621 433</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-wrapper">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4>Email Us</h4>
              <p>support@probid.com</p>
              <p>sales@probid.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon-wrapper">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4>Visit Us</h4>
              <p>168/170, Avenue 01, Old York Drive<br />Rich Mirpur DOHS, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Daniel Scott"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+8801700000000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="daniel@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'm interested in selling a rare antique clock..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;