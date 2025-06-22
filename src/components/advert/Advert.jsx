import './advert.css';
import advertImg from '../../assets/advert.jpg'

const Advert = () => {
  return (
    <div className='advert'>
      <img src={advertImg} alt="crech-image" className='advertImage' />
    </div>
  );
}

export default Advert;
