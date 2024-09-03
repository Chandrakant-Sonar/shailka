import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Apply from "./components/Apply/apply";

function App() {
  const [activeLink, setActiveLink] = useState('intro'); // Default active link is intro

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Router> {/* Wrap your components in BrowserRouter */}
      <div>
        <Navbar handleClick={handleClick} />
        {activeLink === 'intro' && <Intro handleClick={() => handleClick('contact','about')} />}
        {activeLink === 'about' && <About handleClick={() => handleClick('contact','about')}/>}
        {activeLink === 'contact' && <Contact />}
        {activeLink === 'apply' && <Apply />} 

      </div>
      <footer/>
          </Router>
  );
}

export default App;
