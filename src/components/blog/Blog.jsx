import './blog.css';
import blogimg1 from '../../assets/blog-img1.png'

import blogimg3 from '../../assets/blog-img4.png'
import blogimg4 from '../../assets/blog-img4.png'

const Blog = () => {
  return (
    <div className='blog'>
        <div className="blogpost">
            <div className="blogImgContainer">
                <img src={blogimg1} alt="" className='blogImg' />
                </div>
                <div className="blogText">
                    <h4>Saturday, 4 January, 2025</h4>
                    <h3>Redeemer’s Light British Academy Funfair: A fun-filled day to Remember </h3>
                    <p>
                    Excitement filled the air as parents, students, and community members
                     gathered for the much-anticipated
                     grand opening ceremony of Redeemer’s Light British Academy. The school, envisioned
                      to provide world-class education grounded in excellence and character, officially
                       opened its doors in a vibrant celebration that left everyone inspired and entertained.
The event began with the arrival of guests, who were warmly welcomed to the beautifully decorated school grounds. 
The ambiance was lively, with colorful banners and balloons creating a cheerful atmosphere. Families explored the 
school surrounding and admired the state-of-the-art facilities that
 Redeemer’s Light British Academy offers.
                    </p>
                    <p>
                    At the heart of the event was the incredible Master of Ceremonies,
                     who captivated the audience from the very beginning. With unmatched 
                     charisma and humor, the MC kept the event lively and engaging, 
                     ensuring that everyone—young and old—felt included in the festivities.
                      It was a day filled with joy and 
                      celebration.


                    </p>
                    

                </div>
                
        </div>

        
      
    </div>
  );
}

export default Blog;
