import React, { useState } from 'react';
import './navbar.css';
import logo from '../../data/shailka Systems.png';
import { Link } from 'react-scroll';

const Navbar = ({ handleClick }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const handleMenuItemClick = (section) => {
    handleClick(section);
    closeMegaMenu();
    // Use scroll to scroll to the top or specific section
    // Scroll to the top of the page (or adjust as needed)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />

      <div className='desktopmenu'>
        <Link onClick={() => handleMenuItemClick('intro')} className='desktopMenuListItems'>Home</Link>

        {/* Services with Mega Menu */}
        <div
          className='mega-menu-container'
          onMouseEnter={toggleMegaMenu}
          onMouseLeave={toggleMegaMenu}
        >
          <Link className='desktopMenuListItems'>Services</Link>
          {isMegaMenuOpen && (
            <div className='mega-menu'>
              <div className='mega-menu-column'>
                <h3>Emerging Tech</h3>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Microservices</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Data Engineering</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Business Intelligance</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Blockchain</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>VR & Gaming</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>AI & ML</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Data Science</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>RPA</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>IOT</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>NO Code Development</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Low Code Integration</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Security</Link>
              </div>
              <div className='mega-menu-column'>
                <h3>Established Tech</h3>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Backend</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Frontend</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Fullstack</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Solution Architecture</Link>
              </div>
              
              <div className='mega-menu-column'>
                <h3>Supporting Tech</h3>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>QA Automation</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>DevOps</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Tech Support</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>ERP</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>CRM</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Service Management</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Procurement Systems</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Cloud</Link>
              </div>
              <div className='mega-menu-column'>
                <h3>Other</h3>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Design</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Business Analysis</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Product Management</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Project Management</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Scrum Master</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Business Development</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Digital Marketing</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Customer Service</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Virtual Assistance</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Tax & Accounting</Link>
                <Link onClick={() => handleMenuItemClick('apply')} className='mega-menu-item'>Human Resources</Link>
              </div>   
            </div>
          )}
        </div>
      
        <Link onClick={() => handleMenuItemClick('about')} className='desktopMenuListItems'>About US</Link>
        <Link onClick={() => handleMenuItemClick('contact')} className='desktopMenuListItems'>Contact US</Link>
        <Link onClick={() => handleMenuItemClick('apply')} className='desktopMenuListItems'>Apply as a Talent</Link>
      </div>
    </nav>
  );
};

export default Navbar;
