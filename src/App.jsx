// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
      <AboutSection />
      </main>
      <Footer /> {/* Render the Footer here */}
    </div>
  );
}

export default App;