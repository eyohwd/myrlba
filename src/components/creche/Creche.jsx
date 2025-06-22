import './creche.css';
import creche from '../../assets/creche.png'
import play1 from '../../assets/play1.png'

const Creche = ({setPlayState4}) => {
  return (
    <div className='creche'>
      <div className="about-left">
        <img src={creche} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState4(true)} />
      </div>
      <div className="about-right">
        <h2>Creche</h2>
    
        <p>
        Our creche class provides a warm, nurturing environment tailored to the needs 
        of infants and toddlers. Focused on creating a safe and stimulating
         space, we encourage early development through play, interaction, and gentle 
         routines. Our experienced caregivers foster social, emotional, and cognitive 
         growth by engaging children with age-appropriate activities like sensory play,
          music, and storytelling. At our creche, every child receives personalized attention, 
          ensuring they feel secure, loved, and ready to explore the world around them.
        </p>
        
        
    
      </div>
    </div>
  );
}

export default Creche;
