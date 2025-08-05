// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {/* Your main content goes here */}
        <h1>Blog Grid</h1>
        {/* ... */}
      </main>
      <Footer /> {/* Render the Footer here */}
    </div>
  );
}

export default App;