import './elementary.css';
import elementary from '../../assets/elementary.png'
import play1 from '../../assets/play1.png'

const Elementary = ({setPlayState}) => {
  return (
    <div className='elementary'>
      <div className="about-left">
        <img src={elementary} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState(true)} />
      </div>
      <div className="about-right">
        <h2>Elementary School</h2>
        
        <p>
        Intensive information technology-based activities begin from our 
        lower elementary class and this continues to upper elementary. Our year 
        students are exceptional as so many online assignments that aids understanding
         has been developed into games and computer based tasks.
        </p>
        <h3>Elemental School</h3>
        <p>
        (Primary School), In addition to detailed academic activities, We 
        engage the students in other optional curricular and extracurricular
         activities, part of which are:
Music, Dance (Ballet and other types of dance),
Diction, Cursive handwriting, Poise and Etiquette, Coding and robotic,
 Animation and motion graphic, Chess and scrabble, Origami etc.
        </p>
        <h3>Our Examination</h3>
        <p>
        Federal common entrance - year 6<br/> 
State common entrance - year 6<br/>
Cambridge checkpoint Examination -year 6
        </p>
        </div>
    </div>
  );
}

export default Elementary;
