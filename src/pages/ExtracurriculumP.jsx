
import Extracurriculum from '../components/extracurriculum/Extracurriculum';
import Extracurriculum1 from '../components/extracurriculum1/Extracurriculum1';
import Title from '../components/title/Title';

const ExtracurriculumP = ({setPlayState3, setPlayState4}) => {
  return (
    <div className='container'>
      <Title subTitle='We offer veriety of programmes' title='Extra-Curriculum'/>
      <Extracurriculum setPlayState3={setPlayState3}/>
      <Extracurriculum1 setPlayState4={setPlayState4}/>
    </div>
  );
}

export default ExtracurriculumP;
