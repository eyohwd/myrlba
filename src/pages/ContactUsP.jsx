import React from 'react';
import ContactUs from '../components/contactUs/ContactUs';
import TitleHead from '../components/titleHead/TitleHead';


const ContactUsP = () => {
  return (
    <div className='container'>
        <TitleHead subTitle='Contact Us' title='Get in Touch'/>
      <ContactUs/>
    </div>
  );
}

export default ContactUsP;
