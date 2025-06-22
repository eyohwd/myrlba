import React from 'react';
import Hero from '../components/hero/Hero';
import Title from '../components/title/Title';
import Advert from '../components/advert/Advert';


const Home = () => {
  return (
    <div>
      <Hero/>
      <Advert/>
      <div className="container">
        <Title
        subTitle='Our school incorporates in its scheme, the British 
        Curriculum and the federal ministry of education curriculum, alongside 
        some other academic programmes which are considered absolutely necessary 
        for the students to attain excellence.' title='Curriculum' curricu="curriculum"
        />
        <Title
        subTitle='Our values are at the heart of our school.
        Responsibility, Creativity, Confidence, Aspiration, Perseverance, Enjoyment, 
        Teamwork. Godliness' title='Values'
        />
        <Title
        subTitle='Modern, safe and friendly classes and school environment that
        provides an opportunity for each child to learn at their pace through target 
        setting and differentiated personal needs.' title='Our Classroom'
        />
      </div>
    </div>
  );
}

export default Home;
