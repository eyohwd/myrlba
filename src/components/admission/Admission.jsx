import './admission.css';
import admission1 from '../../assets/admission1.jpg';
import admission2 from '../../assets/admission2.png';
import { Room, Phone, Mail } from '@mui/icons-material';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'react-toastify';


const Admission = () => {
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
    <div className='admission'>
      <div className="contact-col">
        <h3>Fill our admission form <img src={admission1} alt=''  style={{width:"100px"}}/></h3>
        <p>We welcome applications from prospective students. 
          Secure a spot for your child, for the year 2024/2025 academic session.
        </p>
        <div style={{}}>
        <img src={admission2} style={{width:"100%"}}/>
        </div>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Your Email</label>
            <input type="text" name='email' placeholder='Enter your email' required/>
            <label>Subject</label>
            <input type="text" name="subject" placeholder="please subject must be (ENROLL MY CHILD)"  required/>
            <label>Comments</label>
            <textarea name="message" rows='6'placeholder='Enter your comments' required ></textarea>
            <button type='submit' className='btn' style={{color:"white", background:"orangered"}}>Submit<span style={{marginLeft:'5px', fontWeight:'bold'}}>&rarr;</span></button>
        </form>
        
      </div>
    </div>
  );
}

export default Admission;
