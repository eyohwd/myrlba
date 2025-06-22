import './blog2.css';
import pta1 from '../../assets/pta1.jpg'

import blogimg3 from '../../assets/blog-img4.png'
import blogimg4 from '../../assets/blog-img4.png'

const Blog = () => {
  return (
    <div className='blog2'>
        <div className="blogpost">
            
                <div className="blogText">
                    <h4>Saturday, 1 February, 2025</h4>
                    <h3>Redeemer’s Light British Academy PTA Meeting: "Meet and Greet Parents"</h3>
                    <p>
                    The "Meet and Greet Parents" event at Redeemer’s Light
                     British Academy was a warm and engaging gathering aimed at 
                     strengthening the school-parent relationship. The meeting provided 
                     an opportunity for parents to interact with teachers, school administrators,
                      and fellow parents in an open and friendly environment.<br/>
                      Key highlights included:<br/>

- A welcome address by the school leadership, emphasizing the 
importance of parental involvement in students' 
academic and personal development.<br/>
- Introduction of staff members, outlining their roles and commitment to student success.<br/>
- A discussion on the school’s vision, curriculum, and upcoming events,
 ensuring parents are well-informed about their children's education.<br/>
- An interactive session where parents shared concerns, asked questions, and 
offered feedback on ways to enhance the learning experience.<br/>
- Networking opportunities among parents to foster a sense of community within the school.
                    </p>
                    <p>
    The event successfully reinforced the partnership between the 
    school and families, setting a positive tone for collaboration throughout
     the academic year.

                    </p>
                    

                </div>
                <div className="blogImgContainer">
                <img src={pta1} alt="" className='blogImg' />
                </div>
                
        </div>

        
      
    </div>
  );
}

export default Blog;
