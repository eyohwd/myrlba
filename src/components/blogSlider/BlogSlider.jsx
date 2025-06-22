import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./blogSlider.css";
import { useState } from "react";
import img1 from "../../assets/pta1.jpg";
import img2 from "../../assets/pta2.jpg";
import img3 from "../../assets/pta3.jpg";
import img4 from "../../assets/pta4.jpg";
import img5 from "../../assets/pta5.jpg";
import img6 from "../../assets/pta6.png";




const blogImages = [
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

      
  ];

const BlogSlider = () => {
   const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
       if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5)
       } else{
        setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0 )
       }
    }

  return (
    <div className="slideyD">
      
        <div className="arrowz arrowLeft" onClick={()=>handleClick("left")}>
            <ArrowBackIosIcon className="arrowLeft"/>
        </div>
        <div className="wrapperSlider" >
            {blogImages.map(item =>(
                <div className="slideG" key= {item.id} slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                <div className="imageContainerD">
                    <img src= {item.img} className='imageD'></img>
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

export default BlogSlider;
