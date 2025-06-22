import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';

import './testimonials.css';
import { useRef } from 'react';
const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`   
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)` 
  }
  return (
    <div className='testimonials'>
      <div className='arrow back' onClick={slideBackward} >
        <ArrowLeftOutlined className='icon-arrow' style={{fontSize:'30px'}} />
      </div>
      <div className='arrow next' onClick={slideForward}>
        <ArrowRightOutlined className='icon-arrow' style={{fontSize:'30px'}}/>
      </div>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div className='details'>
                  <h3>Benedicta Abraham</h3>
                  
                </div>
              </div>
              <p>
                
              "I love being a student at Redeemer’s Light British Academy! 
              My teachers are kind and always help me understand my lessons."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div className='details'>
                  <h3>Mac-Donald  Mpkorogwu</h3>
                  
                </div>
              </div>
              <p>
              "Redeemer’s Light British Academy is the best school ever! 
              The classrooms are beautiful, and the teachers make learning exciting." 

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div className='details'>
                  <h3>Diamond<br/> Asure</h3>
                  
                </div>
              </div>
              <p>
              "I always feel happy coming to school because its a fun place to learn and 
              the CCTV cameras in my class make me feel safe. I love my school"  

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div className='details'>
                  <h3>Onyedikachi Ifejika</h3>
                
                </div>
              </div>
              <p>
              "I am so happy to be a student here because of how we get to do creative 
               projects, learn about computers and programming." 

              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
