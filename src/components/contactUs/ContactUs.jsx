import './contactUs.css';
import mail from '../../assets/mail.png';
import { Room, Phone, Mail, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'react-toastify';
import tiktok from '../../assets/tiktok-round-white-icon.png'


const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(`${import.meta.env.VITE_emailjs_service_id}`, 'template_qv4ceu9', form.current, 'apUAuvTX0q7ajHXDh')
          .then((result) => {
            toast.success("Message sent successfully")
             // console.log(result.text);
          }, (error) => {
            toast.error(error.text);
          });
          e.target.reset();
      };
    
  return (
    <div className='contactus'>
      <div className="contact-col">
        <h3>Send us a message <img src={mail} alt=''/></h3>
        <p>Feel free to reach out through our contact form or find
            our contact information below. Your feedback, questions
             and suggestions are important to us as we strive to provide
             exceptional service to our school community.
        </p>
        <ul>
            <li><Mail className='icon'/><h5>redeemerslightbritishacademy@gmail.com</h5></li>
            <li><Phone className='icon'/><a href="https://wa.me/2348037274557" target='_blank'>+2348037274557</a></li>
            <li><Room className='icon'/>1st Avenue, Plot 819 W close by 6th
             Avenue junction Canal Gate Festac Town, Lagos.</li>
             <a href="https://www.facebook.com/redeemerslightbritishacademy" target='_blank'>
             <li><Facebook className='icon'/>@RedeemersLightBritishAcademy</li>
             </a>
             <li><Twitter className='icon'/>@RLBAcademy</li>
             <a href="https://www.instagram.com/redeemerslightbritishacademy" target='_blank'>
             <li><Instagram className='icon'/>@RedeemersLightBritishAcademy</li>
             </a>
             <a href="https://www.tiktok.com/@redeemer_britishacademy" target='_blank'>
             <li><img src={tiktok} className='icon' style={{background:"blue", color: "darkgrey",
              borderRadius:"50%", border:"2px solid blue"}}/>@RedeemersLightBritishAcademy</li>
              </a>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Your Email</label>
            <input type="text" name='email' placeholder='Enter your email' required/>
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject" required/>
            <label>Write your message here</label>
            <textarea name="message" rows='6'placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn' style={{color:"white", background:"orangered"}}>Send now<span style={{marginLeft:'5px', fontWeight:'bold'}}>&rarr;</span></button>
        </form>
        
      </div>
    </div>
  );
}

export default ContactUs;
