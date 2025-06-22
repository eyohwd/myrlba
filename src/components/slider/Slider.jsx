import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./slider.css";
import { useState } from "react";

import img1 from "../../assets/shot1.jpg";
import img2 from "../../assets/shot2.jpg";
import img3 from "../../assets/preschool.jpg";
import img4 from "../../assets/elementary.png";
import img5 from "../../assets/ab1.png";
import img6 from "../../assets/advert.jpg";
import img7 from "../../assets/shot3.png";
import img8 from "../../assets/shot4.jpg";

const slideData = [
    {id: 1,
      img: img1,
    
    },

    {id: 2,
      img: img2,
      
    }, 

    {id: 3,
      img: img3,
      
    },
    {id: 4,
        img: img4,
        
      },

      {id: 5,
        img: img5,
        
      },

      {id: 6,
        img: img6,
        
      },
      {id: 7,
        img: img7,
        
      },

      {id: 8,
        img: img8,
        
      },
  ];



const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
       if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 7)
       } else{
        setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0 )
       }
    }

  return (
    <div className="slidey">
      
        <div className="arrowz arrowLeft" onClick={()=>handleClick("left")}>
            <ArrowBackIosIcon className="arrowLeft"/>
        </div>
        <div className="wrapperSlider" >
            {slideData.map(item =>(
                <div className="slideG" key= {item.id} slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                <div className="imageContainerS">
                    <img src= {item.img} className='imageS'></img>
                </div>
                
            </div>
            ))}
            
        </div>  
        <div className="arrowz arrowRight" onClick={()=>handleClick("right")}>
            <ArrowForwardIosIcon className= "arrowRight"/>
        </div>
         
    </div>
  );
}

export default Slider;
