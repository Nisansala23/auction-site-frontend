// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Category Links */}
        <div className="footer-column">
          <h4 className="footer-title">Categories</h4>
          <ul className="footer-links">
            <li><a href="#">Porcelain & Ceramics</a></li>
            <li><a href="#">Antique Clocks</a></li>
            <li><a href="#">Fine Jewelry</a></li>
            <li><a href="#">Rare Manuscripts</a></li>
            <li><a href="#">Sculptures & Art</a></li>
            <li><a href="#">Historic Weapons</a></li>
            <li><a href="#">Collectibles</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#">How to Bid</a></li>
            <li><a href="#">Sell Your Items</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* Logo + Social */}
        <div className="footer-column-center">
          <div className="footer-logo">
            <img src="https://via.placeholder.com/150x50?text=PROBID" alt="PROBID Logo" />
            <p className="logo-tagline">Bid High, Win Big, Smile Bigger</p>
          </div>
          <div className="social-section">
            <h5 className="social-title">Follow Us</h5>
            <p className="social-subtitle">Get auction alerts & exclusive deals</p>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Newsletter + Payments */}
        <div className="footer-column">
          <h4 className="footer-title">Stay Updated</h4>
          <p className="newsletter-desc">Get notified when rare items go live.</p>
          <div className="newsletter-form">
            <div className="email-input-container">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input" 
                aria-label="Email for newsletter"
              />
              <button className="newsletter-button" aria-label="Subscribe">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="payment-section">
            <p className="payment-title">Secured Payments</p>
            <div className="payment-icons">
              <img src="https://via.placeholder.com/40x25?text=VISA" alt="Visa" />
              <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" />
              <img src="https://via.placeholder.com/40x25?text=AMEX" alt="American Express" />
              <img src="https://via.placeholder.com/40x25?text=PayPal" alt="PayPal" />
              <img src="https://via.placeholder.com/40x25?text=ApplePay" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Probid Auctions. All rights reserved. Designed by <a href="#">Egens Lab</a>
        </p>
        <div className="bottom-links">
          <a href="#">Support Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;