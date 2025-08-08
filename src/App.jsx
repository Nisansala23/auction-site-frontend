import React from 'react';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="main-content">
        <ContactUs />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
