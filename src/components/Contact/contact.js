import React, { useRef } from 'react';
import './contact.css';
import getInTouchImage from "../../data/get-in-touch-1-2048x742.webp";
import emailjs from 'emailjs-com';
// import getInTouchBanner from '../../data/get-in-touch-1.webp';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_t1d1brw', 'template_cdij0ug', form.current,'Z8hw7juR3ri5Jjq0W')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully');
                e.target.reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <div>
            <div className="get">
                <img src={getInTouchImage} alt="" className='getin' />
            </div>
            <div className="content">
                <div className="cont">
                    <div className="btn">
                        <button className='btn1'><p>APPLY FOR JOB</p></button>
                        <button className='btn1'><p>SCHEDULE A MEETING</p></button>
                    </div>
                    <div className="contact1">
                        <span className="h44">Reach Out On:</span>
                        <span className="h33">020-2248808640</span>
                        <span className="h44">Sales & Marketing:</span>
                        <span className="h33">hello@shailka.com</span>
                        <span className="h44">Career Opportunities:</span>
                        <span className="h33">careers@shailka.com</span>
                        <span className="h44">Billings, Invoices, etc:</span>
                        <span className="h33">invoice@shailka.com</span>
                    </div>
                </div>
                <div className="form">
                    <section id='contactUs'>
                        <div id="Contact">
                                <form className="contactform" ref={form} onSubmit={sendEmail}>
                                <div className="name1">
                                <label className='aa'>Name</label>
                                <input type="text" className='name' placeholder='Chandrakant Sonar' name='your_name' />
                                </div>    
                               <div className="name1">
                               <label className='aa'>Email ID</label>
                                <input type="email" className='email' placeholder='chandrakant@shailka.com' name='your_email' />
                                </div>
                                <div className="name1">
                               <label className='aa'>Role/Skills you are looking for?</label>
                                <input type="email" className='email' placeholder='eg. Python, React, Golang,etc' name='role' />
                                </div>
                                <div className="name1">
                               <label className='aa'>Message</label>
                                <textarea className="msg" name="message" cols="30" rows="6" placeholder='Your Message'></textarea>
                                </div>
                                <div className="name1">
                               <label className='aa'>Job Disription's URL</label>
                                <textarea className="msg" name="jd" cols="30" rows="6" placeholder='job Discription'></textarea>
                                </div>
                                <button type='submit' className='submit1'>Submit</button><br />
                            </form>
                        </div>
                    </section>  
                </div>
            </div>
        </div>
    );
}

export default Contact;

