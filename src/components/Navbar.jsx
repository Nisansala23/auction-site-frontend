// src/components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to manage the visibility of the dropdowns
  const [auctionsDropdownOpen, setAuctionsDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar Section */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <span className="info-item">
              <i className="fa fa-envelope"></i> Info@example.com
            </span>
            <span className="info-item">
              <i className="fa fa-life-ring"></i> Customer support
            </span>
          </div>
          <div className="top-bar-links">
            <a href="#" className="link">HOW TO BID</a>
            <a href="#" className="link">SELL YOUR ITEM</a>
            <span className="language">
              <i className="fa fa-globe"></i> Language
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      <nav className="main-nav">
        <div className="nav-content">
          <div className="logo-container">
            <a href="/" className="logo">
              {/* Using a placeholder image */}
              <img src="https://via.placeholder.com/100x40" alt="PROBID Logo" />
            </a>
          </div>

          {/* Nav Links with Dropdowns */}
          <ul className="nav-links">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            
            {/* Auctions Dropdown */}
            <li 
              className="nav-item dropdown"
              onMouseEnter={() => setAuctionsDropdownOpen(true)}
              onMouseLeave={() => setAuctionsDropdownOpen(false)}
            >
              <a href="#" className="nav-link">Auctions <i className="fa fa-caret-down"></i></a>
              {auctionsDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-link">All Auctions</a></li>
                  <li><a href="#" className="dropdown-link">Live Bidding</a></li>
                  <li><a href="#" className="dropdown-link">Featured Auctions</a></li>
                </ul>
              )}
            </li>
            
            <li className="nav-item"><a href="#" className="nav-link active">Blog</a></li>
            
            {/* Pages Dropdown */}
            <li 
              className="nav-item dropdown"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <a href="#" className="nav-link">Pages <i className="fa fa-caret-down"></i></a>
              {pagesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-link">About</a></li>
                  <li><a href="#" className="dropdown-link">Category</a></li>
                  <li><a href="#" className="dropdown-link">Seller</a></li>
                  <li><a href="#" className="dropdown-link">How to Sell</a></li>
                  <li><a href="#" className="dropdown-link">How to Bid</a></li>
                  <li><a href="#" className="dropdown-link">Dashboard</a></li>
                  <li><a href="#" className="dropdown-link">FAQs</a></li>
                  <li><a href="#" className="dropdown-link">Error</a></li>
                </ul>
              )}
            </li>
            
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>

          {/* Search and Account */}
          <div className="nav-actions">
            <div className="search-box">
              <input type="text" placeholder="Search your product..." />
              <button className="search-button">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <a href="#" className="account-button">
              <i className="fa fa-user"></i> My Account
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
