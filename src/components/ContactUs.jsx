import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-box">
          <i className="icon">📞</i>
          <div>
            <h4>To Know More</h4>
            <p>+990-737 621 432</p>
            <p>+990-737 621 432</p>
          </div>
        </div>

        <div className="info-box">
          <i className="icon">@</i>
          <div>
            <h4>Email Now</h4>
            <p>info@example.com</p>
            <p>example@example.com</p>
          </div>
        </div>

        <div className="info-box">
          <i className="icon">📍</i>
          <div>
            <h4>Location</h4>
            <p>168/170, Avenue 01, Old York Drive<br />Rich Mirpur DOHS, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label>Name*</label>
            <input type="text" placeholder="Daniel Scoot" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="+8801700000000" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="info@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Write Your Message*</label>
            <textarea placeholder="What’s on your mind" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
