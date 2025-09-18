// src/components/AboutSection.jsx

import React from 'react';
import FeatureItem from './FeatureItem';
import './AboutSection.css';

// ✅ Updated Icons (Simpler + More Auction-Themed)
const GavelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 5l7 7-7 7M8 12H2" strokeLinecap="round"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.47 18.45 12 18.61 12 18.61s.53-.16 1.03-.4C13.53 17.97 14 17.55 14 17v-2.34" />
    <path d="M18 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1z" />
    <path d="M6 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1z" />
  </svg>
);

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="content-wrapper">
        {/* Text Content */}
        <div className="about-content">
          <div className="section-header">
            <span className="section-subtitle">ABOUT PROBID</span>
            <h2 className="section-title">Who We Are</h2>
          </div>

          <p className="intro-text">
            Since 2010, ProBid has connected collectors, investors, and enthusiasts with rare, authenticated treasures from around the world. 
            Our expert curators verify every item, our secure platform protects every transaction, and our global community drives every bid.
          </p>

          <div className="feature-list">
            <FeatureItem
              icon={<GavelIcon />}
              title="Expert Curation"
              description="Every item is vetted by specialists in antiques, art, jewelry, and collectibles to ensure authenticity and value."
            />
            <FeatureItem
              icon={<ShieldCheckIcon />}
              title="Secure & Trusted"
              description="Escrow payments, buyer protection, and verified seller profiles give you peace of mind with every transaction."
            />
            <FeatureItem
              icon={<TrophyIcon />}
              title="Global Community"
              description="Join over 50,000 bidders worldwide competing for rare finds — from vintage watches to Renaissance manuscripts."
            />
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Bidders</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Items Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="about-image-gallery">
          <div className="main-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1584275518945-9a1f320e45a8?auto=format&fit=crop&w=600&h=600&q=80"
              alt="Auction gavel striking on wooden table with antique items"
              className="main-image"
            />
            <div className="bidder-overlay">
              <h4 className="bidder-count">50,000+ Bidder</h4>
              <p className="bidder-subtext">Join Our Global Community</p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1571896346575-5d91b0f802e7?auto=format&fit=crop&w=400&h=400&q=80"
            alt="Antique shop interior with curated collectibles"
            className="secondary-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;