import React from 'react'
import './intro.css';
import bg from '../../data/311506-P8G2XL-229-1.png';
import glb from '../../data/heading-bg.webp';
import slogo from "../../data/frond-dev.webp"
import img from "../../data/matching-speed-modified.webp"
import img2 from "../../data/enterprise-ready-modified.webp"
import img3 from "../../data/flexible-staff-modified.webp"
import work1 from "../../data/1-2.png"
import img4 from "../../data/cta-img-277x300.webp"
import linkedin from '../../data/linkedin-logo.jpeg';
// import facebook from '../../data/facebook-logo.jpeg';
import instagram from '../../data/instagram-logo.jpeg';
import twitter from '../../data/twitter-logo.jpeg';
import email from '../../data/Mail-logo.jpeg';


const Intro = () => {
  return (
    <div>
    <section id='intro' className='app'>

        <div className='introContent'>
            <span className='h2'>Welcome to</span><br/>
            <span className='h1'>Shailka Systems</span><br />
            <span className='h2'>Hire your dream team of engineers <br /> in just one week.</span><br/>
            <span className='introtext'>While you focus on building your product, we’ll take care of the talent hunting for you.<br/> 
            Hire from a strong network of top talents from India, for the world.</span>
        </div>
        <img src={bg} alt="profile"  className='bg'/>    
          
    </section>
   <div className="hero">
   <img src={glb} alt="global" className='glb1'/> 
    <span className="h2">Global Elite Talent Network</span><br /><br />
   </div>
   <div className="hero">
        <span className="introrext">Explore our pool of 5000+ top pre-vetted technology specialists equipped with cutting-edge technologies. All timezones covered.</span>
    </div>
    <div className="services">
        <div className="service1">
              <div className="service2">
                <div className="slogo">
                <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">Front End Developer</div>
                <div className="h4">
                  <p>We have skilled PHP developers for startups who are looking to build their MVP &amp; React, Vue.js &amp; Angular developers for growing organisations.</p>
                </div>
              </div>
            
            <div className="service2">
                <div className="slogo">
                  <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">Backend Developer</div>
                <div className="h4">
                  <p>We have specialists in full-stack and back-end development, with expertise in Rust, Go Lang, Node.JS, Java, Scala, Python, or C++.</p>
                </div>
            </div>
        
            <div className="service2">
                  <div className="slogo">
                  <img src={slogo} alt="" className="slogo" />
                  </div>
                  <div className="h3">Blockchain Developers</div>
                  <div className="h4">
                    <p>We have pre-vetted experts with skill sets in Web assembly, Web3, Rust, Solidity, Ethereum, Hyperledger, Polygon, and Chainlink protocols.</p>
                  </div>
            </div>
        </div>
        </div>
    <div className="services">
        
    <div className="service1">
              <div className="service2">
                <div className="slogo">
                <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">Mobile Developers</div>
                <div className="h4">
                  <p>Build top-notch cross-platform mobile applications for iOS & Android using Flutter, React Native or Ionic framework along with iOS & Android native development if required</p>
                </div>
              </div>
            
              <div className="service2">
                <div className="slogo">
                  <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">IoT & Edge computing Experts</div>
                <div className="h4">
                  <p>Hire professionals expert in building prototype devices on top of Beagleboard, Raspberry Pi, Arduino & Intel edge computing devices. Our drone makers have expertise with DIY as well as PX4 ecosystems.</p>
                </div>
              </div>
              <div className="service2">
                <div className="slogo">
                <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">Salesforce Developers</div>
                <div className="h4">
                  <p>We have pre-vetted salesforce developers with expertise in APEX & Javascript</p>
                </div>
              </div>
          </div>
    </div>
  
    <div className="services">
    <div className="service1">
              <div className="service2">
                <div className="slogo">
                <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">SAP Developers</div>
                <div className="h4">
                  <p>We have pre-vetted SAP developers with expertise in ABAP & wide array of SAP modules</p>
                </div>
              </div>
          
            <div className="service2">
                <div className="slogo">
                  <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">Cloud & DevOps Engineers</div>
                <div className="h4">
                  <p>Our DevOps engineers are highly skilled in CNCF tools (Docker, Kubernetes), certified in AWS, GCP, and Azure, proficient in shell scripting, and adept at creating command-line utilities using GoLang.</p>
                </div>
              </div>
            <div className="service2">
                <div className="slogo">
                <img src={slogo} alt="" className="slogo" />
                </div>
                <div className="h3">Graphic Designers & Video Editing expertss</div>
                <div className="h4">
                  <p>Expert team in Photoshop, Illustrator, InDesign, video editing (Final Cut Pro, Adobe Premiere, Filmora, DaVinci Resolve), audio mixing, and stunning digital art.</p>
                </div>
              </div>
        </div>
    </div>
    <div className='flow'>
        <div className='subflow'>
          <span className='h3'>5 Days</span><br />
          <span >Hiring process</span>
        </div>
        <div className='subflow'>
        <span className='h3'>Top 3.5%</span><br />
          <span>Talent Vatted</span>
        </div>
        <div className='subflow'><span className='h3'>Upto 40%</span><br />
          <span >Cost Advantage</span></div>
        <div className='subflow'>
          <span className='h3'>5+ Time </span><br />
          <span >Zone Availability</span>
          </div>
    </div>
    <div className="hero">
   <img src={glb} alt="global" className='glb1'/> 
    <span className="h2">We are prepared to meet your talent needs.</span><br /><br />
   </div>
   <div className="hero">
        <span className="introrext">Join our global community of technologists and discover new opportunities for growth and collaboration.</span>
    </div>
      <div className="talent">
        <div className="talentimg">
          <img src={img} alt="" className='talentimg'/>
        </div>
        <div className="talenttext">
          <h1>Matching speed</h1>
          <p>Our team can help you move faster without sacrificing quality. We can radically reduce the time it takes to hire talent, so you can find the right fit quickly.</p>
        </div>
      </div>
      <div className="talent">
              <div className="talenttext">
          <h1 >Enterprise-Ready</h1>
          <p>Our technologists have verified backgrounds, work in your time zone, and comply with your company’s security practices. This means you can focus on making an impact, while we take care of the rest.</p>
          </div>
          <div className="talentimg">
          <img src={img2} alt="" className='talentimg'/>
        </div>

      </div>
      <div className="talent">
      <div className="talentimg">
          <img src={img3} alt="" className='talentimg'/>
        </div>
        <div className="talenttext">
          <h1>Flexible teams</h1>
          <p>Find niche expertise for various project lengths. Onboard solo engineers to fill gaps, or hire full teams to accelerate your build. Get any technology, any time zone, any skill.</p>
        </div>
      
      </div>
      <div className="work">
        <img src={work1} alt="work" className='imgs1'/>
      </div>
      <div className="hero">
   <img src={glb} alt="global" className='glb1'/> 
    <span className="h2">Top Skills You Can Hire</span><br /><br />
   </div>
   <div className="hero">
        <span className="introrext">carousel</span>
    </div>
    <div className="fstep">
       
       <div className="fstep2">
         <p className="h3">Take the First Step Towards Growth</p>
         <p className="h4">Take the First Step Towards Growth and Let’s explore how we can accelerate and de-risk your tech modernisation efforts together.</p>
       <button className="getintouch">GET IN TOUCH</button>
       
       </div>
       <div className="img">
         <img src={img4} alt="" className='stepimg'/>
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
      </div>
  )
}

export default Intro;

