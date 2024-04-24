import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';
import banner from "../../data/banner-about.webp"
import bg from '../../data/311506-P8G2XL-229-1.png';
import linkedin from '../../data/linkedin-logo.jpeg';
// import facebook from '../../data/facebook-logo.jpeg';
import instagram from '../../data/instagram-logo.jpeg';
import twitter from '../../data/twitter-logo.jpeg';
import email from '../../data/Mail-logo.jpeg';
import glb from '../../data/heading-bg.webp';
import vision from "../../data/How-it-Works-1920-├ù-1080px-1.svg"
import why from "../../data/How-it-Works-1920-├ù-1080px-2-3.svg"
import ft from "../../data/footer-cta.webp"

const About = ({ handleClick }) => {
    return (
      <div>
    
      <section id='intro1' className='app2'>

        <div className='introContent'>
            <span className='h22'>Best in class consulting,<br /> IT Solutions & Services</span><br/>
            <span className='h44'>Delivering feasible solutions for the problem statements sustainably</span><br />
           
        </div>
        <img src={banner} alt="profile"  className='banner'/>    
        
          
    </section>

    <div className="hero">
   <img src={glb} alt="global" className='glb1'/> 
    <span className="h2">Global Elite Talent Network</span>
   </div>
   <div className="hero">
   <span className="h4">We are creating a new wave in remote hiring by helping companieshire from a strong network of top talents from India, for the world.</span>
   </div>    
   <img src={vision} alt="vision" className="vision"/>
  <div className="why">   <img src={why} alt="why" className='vision1' />
</div>


    <div id='intro' className='app'>

<div className='introContent'>
   <span className='h3'>Welcome to the future of meaningful, sustainable work</span>
    <p className='h4'>Welcome to the future of meaningful, sustainable work We believe that the sum is greater than our parts –<br /> our impact can be seen globally. We specialize in helping our highly-skilled, global technology talent community <br /> in emerging markets, connect with hundreds of leading companies.</p>
</div>
<div className="bg">
<img src={bg} alt="profile"  className='bg'/>    
</div> 
</div>
<div id='intro' className='app2'>
<div className="fimg">
        <img src={ft} alt="profile"  className='vision'/>    
        </div> 
        <div className='introContent1'>
           <span className='h3'>Ready to start a conversation?</span>
            <p className='h4'>Let us in on what you’re seeking, and we’ll be right here to assist</p>
            
            <Link to="/contact">
        <button className='getintouch' onClick={() => handleClick('contact')}>GET IN TOUCH</button>
      </Link>


        </div>
       
    </div>





<div className='app1'>
{/* <img src={bg} alt="backgorund" className='bg'/> */}
<div className="footermenu">

 <div className="list">
   <span className="h2">Shailka Systems</span>
   <div className="h3"><br />
    <a href="https://www.linkedin.com/company/shailka-systems/"><img src={linkedin} alt="LinkedIn" className='link' /></a>
    <a href="https://x.com/ShailkaSystems"><img src={twitter} alt="Twitter" className='link' /></a>
    <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" className='link' /></a>
    {/* <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" className='link' /></a> */}
    <a href="mailto:sumit@shailka.com"><img src={email} alt="Email" className='link' /></a>
  </div>
  

 </div>
 <div className="list">
     <span className='h3'>Company</span> <br /><br />
     <Link to="/contact">
        <span className='h4' onClick={() => handleClick('contact')}>Book a free consultation</span><br />
      </Link>
     <span className="h4">About Us</span><br />
     <span className='h4'>Blog</span><br />
     <span className='h4'>Press Release</span><br />

   </div>
 <div className="list">
   <span className="h3">Get Involved</span><br /><br />
  
   <Link to="/contact">
        <span className='h4' onClick={() => handleClick('contact')}>Contact Us</span><br />
      </Link>

   <span className="h4">Partner with us</span><br />
   <span className="h4">Privacy Policy</span><br />
   <span className="h4">Terms and Conditions</span><br />
 </div>
 <div className="list">
   <span className="h3">Resourses</span><br /><br />
   <span className="h4">Talent FAQ</span><br />
   <span className="h4">Vendor FAQ</span><br />
   <span className='h4'>Trust Center</span><br />

 </div><br />
 <br />
 
</div>
<span className="footer">@ 2023 Shailka, All right reserved.</span>


</div>
</div>
  )
}

export default About
