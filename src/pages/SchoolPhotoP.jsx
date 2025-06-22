import React from 'react';
import Slider from '../components/slider/Slider';
import TitleHead from '../components/titleHead/TitleHead';

const SchoolPhotoP = () => {
  return (
    <div className='container'>
        <TitleHead subTitle='Gallery' title='School Photos'/>
      <Slider/>
    </div>
  );
}

export default SchoolPhotoP;
