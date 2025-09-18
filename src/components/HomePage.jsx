// src/components/HomePage.jsx

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content-container">
          <div className="hero-text-column">
            <h1 className="hero-title">
              Bid on <span className="highlight">Rare Treasures</span> Today.
            </h1>
            <p className="hero-subtitle">
              Join thousands of collectors & investors in live auctions. 
              Authentic items. Secure bidding. Global shipping.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start Bidding Now</button>
              <button className="btn btn-secondary">Browse All Auctions</button>
            </div>

            {/* 🔥 Added: Live Auction Countdown */}
            <div className="live-auction-banner">
              <i className="fas fa-fire"></i>
              <span>Live Auction Ending in: <strong>02:14:33</strong></span>
            </div>

            <div className="trusted-partners">
              <p className="partners-title">TRUSTED BY:</p>
              <div className="partner-logos">
                <img src="https://via.placeholder.com/80x30?text=OTIVAR" alt="OTIVAR" />
                <img src="https://via.placeholder.com/80x30?text=KAON" alt="KAON" />
                <img src="https://via.placeholder.com/80x30?text=archzilla" alt="archzilla" />
                <img src="https://via.placeholder.com/80x30?text=PubsPlace" alt="PubsPlace" />
              </div>
            </div>
          </div>

          <div className="hero-image-column">
            <div className="image-grid">
              <div className="main-image">
                <img src="https://via.placeholder.com/400x500?text=Main+Antique" alt="Featured Auction Item" />
                {/* 💰 Added: Current Bid Tag */}
                <div className="current-bid-tag">
                  Current Bid: <strong>$1,250</strong>
                </div>
              </div>
              <div className="side-images">
                <div className="top-image">
                  <img src="https://via.placeholder.com/200x200?text=Antique+Pot" alt="Antique Pot" />
                  <div className="badge ending-soon">Ends Soon</div>
                </div>
                <div className="middle-image">
                  <img src="https://via.placeholder.com/200x200?text=Ceramics" alt="Ceramics" />
                  <div className="badge new">New</div>
                </div>
                <div className="bottom-image">
                  <img src="https://via.placeholder.com/200x200?text=Blue+Vase" alt="Blue Vase" />
                  <div className="badge featured">Featured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NEW: Quick Stats Section (Social Proof) */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">10K+</div>
          <div className="stat-label">Happy Bidders</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Live Auctions</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">$2M+</div>
          <div className="stat-label">Items Sold</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support</div>
        </div>
      </section>

      {/* ✅ NEW: How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How to Bid in 3 Easy Steps</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Create Account</h3>
            <p>Sign up in 30 seconds. No fees to join.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Browse & Watchlist</h3>
            <p>Search or filter items. Save favorites to track.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Place Your Bid</h3>
            <p>Auto-bid or bid live. Win & checkout securely.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;