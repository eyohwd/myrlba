import './about.css';
import ab1 from '../../assets/ab1.png'
import play1 from '../../assets/play1.png'

const About = ({setPlayState1}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={ab1} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState1(true)} />
      </div>
      <div className="about-right">
        <h3>Our Mission:</h3>
        <p>At Redeemer's Light British Academy, we aim to inspire young minds
           and hearts to learn and serve. We provide a comprehensive education that
           integrates faith, academics, information technology, soft skill and character
           development, preparing students to live out their faith with confidence, compassion, 
           respect, good personality and integrity.
        </p>
        <h3>Our Vision:</h3>
        <p>Redeemer's Light British Academy envisions a future where our
          students become confident, compassionate and courageous leaders empowered
          by their faith and academic exellence to make a positive difference in their
           communities and beyond.
        </p>
        <h3>Academic Programme:</h3>
        <p>We offer a comprehensive curriculum that includes:
          -Nursery and Primary School Programme (Reception to year 6). In the preschool
          we implement the early year foundation programme combined with the Montessori method.
          In the elementary school, we inplement the British curriculum with a blend 
          of local curriculum.
        </p>
        <h3>Facilities:</h3>
         <p>Our state-of-the-art facilities include: <br/>
          - Well equipped airconditioned classrooms and laboratories<br/>
          - Library and resource center<br/>
          - Sport facilities (swimmming pool, swing, seesaw etc.)<br/>
          - Art and music studios <br/>
          - Beautiful playground<br/>
          - Language Class for Diction and Eloquent<br/>
          - Poise and etiquette (dining area) etc

         </p>
      </div>
    </div>
  );
}

export default About;
