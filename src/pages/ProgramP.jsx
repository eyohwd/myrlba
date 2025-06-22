import React from 'react';
import Program from '../components/program/Program';
import TitleHead from '../components/titleHead/TitleHead';

const ProgramP = ({}) => {
  return (
    <div className='container'>
      <TitleHead subTitle='We offer comprehensive curriculum' title='Programme' />
      <Program/>
    </div>
  );
}

export default ProgramP;
