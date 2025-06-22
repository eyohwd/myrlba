import React from 'react';
import Admission from '../components/admission/Admission';
import TitleHead from '../components/titleHead/TitleHead';

const AdmissionP = () => {
  return (
    <div className='container'>
      <TitleHead subTitle='Secure a spot for your Child' title='Admission'/>
      <Admission/>
    </div>
  );
}

export default AdmissionP;
