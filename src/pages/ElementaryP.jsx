import React from 'react';
import Elementary from '../components/elementary/elementary';

const ElementaryP = ({setPlayState}) => {
  return (
    <div className='container'>
      <Elementary setPlayState={setPlayState}/>
    </div>
  );
}

export default ElementaryP;
