import React from 'react';
import './footer.css';
import linkedin from '../../data/linkedin-logo.jpeg';
// import facebook from '../../data/facebook-logo.jpeg';
import instagram from '../../data/instagram-logo.jpeg';
import twitter from '../../data/twitter-logo.jpeg';
import email from '../../data/Mail-logo.jpeg';

const Footer = () => {
  return (
    <div className='app'>
      <div className="footermenu">
        <div className="list">
          <span className="h2222">Shailka Systems</span>
          <div className="h3"><br />
            <a href="https://www.linkedin.com/company/shailka-systems/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className='link' />
            </a>
            <a href="https://x.com/ShailkaSystems" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className='link' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className='link' />
            </a>
            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className='link' />
            </a> */}
            <a href="mailto:sumit@shailka.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="Email" className='link' />
            </a>
          </div>
        </div>

        <div className="list">
          <span className='h3'>Company</span> <br /><br />
          <a href="/https://calendly.com/chandrakant-sonar" className='h4'>Book a free consultation</a><br />
          <a href="/about" className='h4'>About Us</a><br />
          <a href="/blog" className='h4'>Blog</a><br />
          <a href="/press-release" className='h4'>Press Release</a><br />
        </div>

        <div className="list">
          <span className="h3">Get Involved</span><br /><br />
          <a href="/contact" className="h4">Contact Us</a><br />
          <a href="/contact" className="h4">Partner with us</a><br />
          <a href="/privacy-policy" className="h4">Privacy Policy</a><br />
          <a href="/Terms" className="h4">Terms and Conditions</a><br />
        </div>

        <div className="list">
          <span className="h3">Resources</span><br /><br />
          <a href="/talent-faq" className="h4">Talent FAQ</a><br />
          <a href="/vendor-faq" className="h4">Vendor FAQ</a><br />
          <a href="/trust-center" className='h4'>Trust Center</a><br />
        </div>
      </div>
      <span className="footer">@ 2023 Shailka, All rights reserved.</span>
    </div>
  );
}

export default Footer;
