import React from 'react';
import Preschool from '../components/preschool/Preschool';

const PreschoolP = ({setPlayState2}) => {
  return (
    <div className='container'>
      <Preschool setPlayState2={setPlayState2}/>
    </div>
  );
}

export default PreschoolP;
