// src/components/AboutSection.jsx
import React from 'react';

import FeatureItem from './FeatureItem';
import './AboutSection.css';



// You would import your icons here from a library like 'react-icons/fi' or 'react-icons/fa'
// For example: import { FiBox, FiShield, FiStar } from 'react-icons/fi';
const BoxIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.89 1.45l7.35 12.68a2 2 0 01-1.73 3.02L5.86 17.15A2 2 0 014.13 14.13L11.48 1.45a2 2 0 011.41 0z"></path></svg>;
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const StarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2 className="section-title">Who We Are</h2>
        <p className="intro-text">
          Cras cursus faucibus enim id porta. Curabitur et feugiat tortor. Duis ut egestas lib. Aenean id lacin est. Mauris urn purus, docnri aliquet id elit id, tempus suscipit dui. Phasellus dictum sem sed ipsum posuer, eget tristique turpis ten. Sed sodales pur ide ex imperdiet of this year we are free offer that your type.
        </p>
        <div className="feature-list">
          <FeatureItem
            icon={<BoxIcon />}
            title="Our Expert Solutions"
            description="Praesent gravida nunc at tortor cursus, molestie dapibus purus posuere. Vestibulum commodo, massa eget rutrum feugiat."
          />
          <FeatureItem
            icon={<ShieldIcon />}
            title="Trusted Performance"
            description="Praesent gravida nunc at tortor cursus, molestie dapibus purus posuere. Vestibulum commodo, massa eget rutrum feugiat."
          />
          <FeatureItem
            icon={<StarIcon />}
            title="Experience the Difference"
            description="Praesent gravida nunc at tortor cursus, molestie dapibus purus posuere. Vestibulum commodo, massa eget rutrum feugiat."
          />
        </div>
      </div>
      <div className="about-image-gallery">
        <div className="main-image-wrapper">
          <img
            src="src/Images/images.jpg"
            alt="Main product"
            className="main-image"
          />
          <div className="bidder-overlay">
            <h4 className="bidder-count">5.6k Bidder</h4>
            <p className="bidder-subtext">Number Of Total Bidder</p>
          </div>
        </div>
        <img
          src="src\Images\Old+Crows+Antique+Mall+Dealers.webp"
          alt="Desktop setup"
          className="secondary-image"
        />
      </div>
    </section>
  );
};

export default AboutSection;