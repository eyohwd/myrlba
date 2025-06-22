import './blog1.css';
import blogimg2 from '../../assets/blog-img4.png'


const Blog1 = () => {
  return (
    <div className='blog'>
        <div className="blogpost">
            
                <div className="blogText">
                
                    <h3>Games and refreshment for attendees </h3>
                    <p>
                    As the day progressed, attendees were treated to a variety of games 
                    and activities that brought families and friends together. There was
                     something for everyone to enjoy. The highlight of 
                     the games was the tug-of-war competition, which had the crowd cheering
                      and laughing as teams competed with enthusiasm.
                    </p>
                    <p>
                    Of course, no celebration is complete without delicious food and drinks.
                     A variety of refreshments, from local delicacies to international to
                      snacks were served to satisfy everyone. Food stalls buzzed with
                      activity as guests indulged in mouthwatering dishes while mingling
                       and sharing their excitement about the new school.
                       As the sun set on the day’s festivities, it was clear that the 
                       opening ceremony of Redeemer’s Light British Academy was more 
                       than just a celebration—it was a promise of brighter futures for 
                       every student who walks through its doors. With an engaging and
                        inclusive event, the school has made an unforgettable first 
                        impression, leaving everyone excited for what lies ahead.
                    </p>
                    

                </div>
                <div className="blogImgContainer">
                <img src={blogimg2} alt="" className='blogImg' />
                </div>
                
        </div>

        
      
    </div>
  );
}

export default Blog1;
