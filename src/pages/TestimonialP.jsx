import React from 'react';
import Testimonials from '../components/testimonials/Testimonials';
import TitleHead from '../components/titleHead/TitleHead';

const TestimonialP = () => {
  return (
    <div className='container'>
        <TitleHead subTitle='What Student Say' title='Testimonial'/>
      <Testimonials/>
    </div>
  );
}

export default TestimonialP;
