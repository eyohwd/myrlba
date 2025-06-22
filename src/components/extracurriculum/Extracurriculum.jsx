import './extracurriculum.css';
import extracurriculum from '../../assets/tripz.png'
import play1 from '../../assets/play1.png'

const Extracurriculum = ({setPlayState3}) => {
  return (
    <div className='extracurriculum'>
      <div className="about-left">
        <img src={extracurriculum} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState3(true)} />
      </div>
      <div className="about-right">
        
        <h3>Information and communication technology</h3>
        <p>
        We have varieties of programme as regards this.<br/> App development, Website 
        development, Coding, software development and computer programming which form part
         of our students' ICT skill development, PowerPoint, Photo-shop and coreldraw 
         are part our basic focus in our school. Training on Robotics, Lego Mind storm 
         and Mbot are also available. Microsoft office application like Word, Excel,
          Powerpoint, etc are offered in our senior elementary classes.
        </p>
        
        
        <h3>Music</h3>
        <p>
        We offer intensive musical training in Redeemer’s Light British Academy 
        as our music laboratory is well equipped with all musical instruments.
         We have Guitar, Keyboard, Drum, Saxophone andTrumpet etc.
        </p>

        </div>
    </div>
  );
}

export default Extracurriculum;
