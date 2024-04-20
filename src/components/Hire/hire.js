import React, { useRef } from 'react';
import './hire.css';

import emailjs from 'emailjs-com';

const Hire = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t1d1brw', 'template_vmmcp3t', form.current, 'Z8hw7juR3ri5Jjq0W')
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
        <section id='hire'>
            
            <div id="Contact">
                <h1 className='h1'>Hire Talent with Shailka System</h1>
                    <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='your_name' />
                    <input type="text" className='name' placeholder='Name of the organisation' name='org_name' />
                    <input type="email" className='email' placeholder='Your Email' name='your_email' />
                    <textarea className="msg" name="jd" cols="30" rows="6" placeholder='Job Discription'></textarea>
                    <textarea className="msg" name="message" cols="30" rows="6" placeholder='Your Message'></textarea>
                    <button type='submit' className='submit1'>Submit</button>
                   
                </form>
            </div>
        </section>
    );
}

export default Hire;
