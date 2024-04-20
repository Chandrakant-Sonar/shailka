import React from 'react'
import './footer.css'
import linkedin from '../../data/linkedin-logo.jpeg';
// import facebook from '../../data/facebook-logo.jpeg';
import instagram from '../../data/instagram-logo.jpeg';
import twitter from '../../data/twitter-logo.jpeg';
import email from '../../data/Mail-logo.jpeg';




const Footer = () => {
  return (
    <div className='app'>
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
            <span className='h4'>Book a free consultation</span><br />
            <span className='h4'>About Us</span><br />
            <span className='h4'>Blog</span><br />
            <span className='h4'>Press Release</span><br />

          </div>
        <div className="list">
          <span className="h3">   Get Involved</span><br /><br />
          <span className="h4">Contact Us</span><br />
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
  )
}

export default Footer

