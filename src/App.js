import React, { useState } from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Apply from "./components/Apply/apply";
// import Footer from "./components/Footer/footer";
// import mainbg from '../src/data/cta-bg.webp' 

function App() {
  const [activeLink, setActiveLink] = useState('intro'); // Default active link is intro

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      {/* <img src={mainbg} alt="main" className="mainbg"/> */}
      
      <Navbar handleClick={handleClick} />
      {activeLink === 'intro' && <Intro />}
      {activeLink === 'about' && <About />}
      {activeLink === 'contact' && <Contact />}
      {activeLink === 'apply' && <Apply />} 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
