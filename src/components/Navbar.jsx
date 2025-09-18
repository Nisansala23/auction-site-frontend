// NewNavbar.jsx
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="main-nav" ref={navRef}>
        <div className="nav-content">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" className="logo" aria-label="Home">
              <img src="/src/Images/auctioneer.jpg" alt="Logo" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen((s) => !s)}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <i className={`fa ${mobileMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>

          {/* Primary Nav */}
          <ul
            className={`nav-links ${mobileMenuOpen ? "active" : ""}`}
            id="primary-navigation"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeAll}>
                Home
              </Link>
            </li>

            {/* Auctions Dropdown */}
            <li
              className={`nav-item dropdown ${
                openDropdown === "auctions" ? "open" : ""
              }`}
            >
              <button
                className="nav-link"
                onClick={() => toggleDropdown("auctions")}
                aria-expanded={openDropdown === "auctions"}
              >
                Auctions{" "}
                <i
                  className={`fa fa-chevron-${
                    openDropdown === "auctions" ? "up" : "down"
                  }`}
                />
              </button>
              {openDropdown === "auctions" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/auctiongrid" onClick={closeAll}>
                      All Auctions
                    </Link>
                  </li>
                  <li>
                    <Link to="/AuctionItem" onClick={closeAll}>
                      Live Bidding
                    </Link>
                  </li>
                  <li>
                    <Link to="/FeatureItem" onClick={closeAll}>
                      Featured Auctions
                    </Link>
                  </li>
                  <li>
                    <Link to="/ending-soon" onClick={closeAll}>
                      Ending Soon
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link to="/blog-grid" className="nav-link" onClick={closeAll}>
                Blog
              </Link>
            </li>

            {/* Pages Dropdown (with nested Seller) */}
            <li
              className={`nav-item dropdown ${
                openDropdown === "pages" ? "open" : ""
              }`}
            >
              <button
                className="nav-link"
                onClick={() => toggleDropdown("pages")}
                aria-expanded={openDropdown === "pages"}
              >
                Pages{" "}
                <i
                  className={`fa fa-chevron-${
                    openDropdown === "pages" ? "up" : "down"
                  }`}
                />
              </button>
              {openDropdown === "pages" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about" onClick={closeAll}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories" onClick={closeAll}>
                      Category
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/seller-details-1" onClick={closeAll}>
                      Seller 
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-to-sell" onClick={closeAll}>
                      How To Sell
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-to-bid" onClick={closeAll}>
                      How To Bid
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" onClick={closeAll}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" onClick={closeAll}>
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/error" onClick={closeAll}>
                      Error
                    </Link>
                  </li>

                 
                  
                  
                </ul>
              )}
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeAll}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth */}
          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline" onClick={closeAll}>
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;