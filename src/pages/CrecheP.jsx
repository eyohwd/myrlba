import React from 'react';
import Creche from '../components/creche/Creche';

const CrecheP = ({setPlayState4}) => {
  return (
    <div className='container'>
      <Creche setPlayState4={setPlayState4}/>
    </div>
  );
}

export default CrecheP;
