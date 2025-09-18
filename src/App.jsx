// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import AuctionGrid from './components/AuctionGrid';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'; // ✅ Already imported — good!
import BlogGrid from './components/BlogGrid';
import LoginBox from './components/LoginBox';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="main-content">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Page */}
          <Route path="/about" element={<AboutSection />} />

          {/* Auction Listings */}
          <Route path="/auctiongrid" element={<AuctionGrid />} />

          {/* Blog Page */}
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/login" element={<LoginBox />} />
          {/* ✅ CONTACT PAGE — ADDED ROUTE */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;