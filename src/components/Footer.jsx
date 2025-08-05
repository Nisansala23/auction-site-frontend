// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* First column: Category links */}
        <div className="footer-column">
          <h4 className="footer-title">Category</h4>
          <ul className="footer-links">
            <li><a href="#">Porcelain</a></li>
            <li><a href="#">Old Clocks</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Manuscripts</a></li>
            <li><a href="#">Ceramics</a></li>
            <li><a href="#">Sculptures</a></li>
            <li><a href="#">Weapons</a></li>
          </ul>
        </div>

        {/* Second column: Company links */}
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#">How to bid with us</a></li>
            <li><a href="#">How to sell with us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">F.A.Q</a></li>
            <li><a href="#">Our Brand</a></li>
          </ul>
        </div>

        {/* Third column: Logo and Social Media */}
        <div className="footer-column-center">
          <div className="footer-logo">
            <img src="https://via.placeholder.com/150x50?text=PROBID" alt="PROBID Logo" />
            <p className="logo-tagline">Bid High, Win Big, Smile Bigger</p>
          </div>
          <div className="social-links">
            <p className="social-title">Social Just You Connected Us!</p>
            <p className="social-subtitle">All of update in social</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Fourth column: Newsletter and Payments */}
        <div className="footer-column">
          <h4 className="footer-title">Join Our Newsletter & More Information.</h4>
          <div className="newsletter-form">
            <div className="email-input-container">
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button className="newsletter-button">
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="payment-gateways">
            <p className="payment-title">Secured Payment Gateways</p>
            <div className="payment-icons">
              {/* Using placeholders for payment icons */}
              <img src="https://via.placeholder.com/60x40?text=VISA" alt="Visa" />
              <img src="https://via.placeholder.com/60x40?text=MASTERCARD" alt="Mastercard" />
              <img src="https://via.placeholder.com/60x40?text=AMEX" alt="American Express" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and links */}
      <div className="footer-bottom">
        <p className="copyright">&copy;Copyright 2024 | Probid | Design by <a href="#">Egens Lab</a></p>
        <div className="bottom-links">
          <a href="#">Support Center</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
