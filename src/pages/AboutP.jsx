import React from 'react';
import About from '../components/about/About';
import Extracurriculum from '../components/extracurriculum/Extracurriculum';
import Extracurriculum1 from '../components/extracurriculum1/Extracurriculum1';
import TitleHead from '../components/titleHead/TitleHead';


const AboutP = ({setPlayState1, setPlayState3, setPlayState4}) => {
  return (
  
    
    <div className='container'>
      <TitleHead subTitle='We offer the best' title='Redeemers Light British Academy'/>
      <About setPlayState1={setPlayState1}/>
      <TitleHead subTitle='We offer veriety of programmes' title='Extra-Curriculum'/>
      <Extracurriculum setPlayState3={setPlayState3}/>
      <Extracurriculum1 setPlayState4={setPlayState4}/>
    </div>
    
  );
}

export default AboutP;
