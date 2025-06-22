import './preschool.css';
import preschool from '../../assets/preschool.jpg'
import play1 from '../../assets/play1.png'

const Preschool = ({setPlayState2}) => {
  return (
    <div className='preschool'>
      <div className="about-left">
        <img src={preschool} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState2(true)} />
      </div>
      <div className="about-right">
        <h2>Preschool</h2>
        
        <p>
        British Early Years Foundation Stage (2-5 years old) for our pupils between age 
        two and five years, we follow the British Early Years Foundation Stage curriculum.
         Children in this class are exposed to a  wide range of creative and practical activities, 
         developing oral, literacy, numeracy, practical life, sensorial, social and personal skill
        </p>
        
        
    
      </div>
    </div>
  );
}

export default Preschool;
