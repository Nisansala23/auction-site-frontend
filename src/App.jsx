import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import AuctionGrid from './components/AuctionGrid';
import Footer from './components/Footer'; // Import the new component
import ContactUs from './components/ContactUs';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="main-content">
      <AboutSection />
         <AuctionGrid />
        <ContactUs />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
