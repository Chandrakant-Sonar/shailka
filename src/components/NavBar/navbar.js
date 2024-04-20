import React from 'react';
import './navbar.css';
import logo from '../../data/cropped-logo-1_edited.png';
import { Link } from 'react-scroll';

const Navbar = ({ handleClick }) => {
  return (
   <nav className='navbar'>
    <img src={logo} alt="logo" className='logo'/>
    <div className='desktopmenu'>
        <Link onClick={() => handleClick('intro')} className='desktopMenuListItems'>Home</Link>
        <Link onClick={() => handleClick('about')} className='desktopMenuListItems'>About US</Link>
        <Link onClick={() => handleClick('contact')} className='desktopMenuListItems'>Contact US</Link>
        <Link onClick={() => handleClick('apply')} className='desktopMenuListItems'>Hire a Talent</Link>
        {/* <Link activeClass='active' to ='apply' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Apply as a Talent</Link> */}
    </div>
    {/* <button className='desktopMenuBtn'>
        <img src="" alt="" className='desktopMenuImg'/>contact US</button> */}
   </nav>
  )
}

export default Navbar;
