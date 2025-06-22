import './extracurriculum1.css';
import extracurriculum from '../../assets/trips-football.png'
import play1 from '../../assets/play1.png'

const Extracurriculum1 = ({setPlayState4}) => {
  return (
    <div className='extracurriculum1'>
      <div className="about-left">
        <img src={extracurriculum} alt="" className='about-img' />
        <img src={play1} alt="" className='play' onClick={()=>setPlayState4(true)} />
      </div>
      <div className="about-right">
        <h3>International and local field trip</h3>
        <p>
        We have a firm through which we can organize United Kingdom tour for
         your child. Both parents and students can subscribe to this. United Kingdom trip 
         is always full of fun and excitement, you can subscribe to our UK annual excursion
          and tour.  It is educative, It’s fun, there are beautiful memories, every child 
          will love to be there.
Age 7 and above can travel with mentors while below 6 years old  will need to travel with
 his or her parent. 
Local excursion,
your child will join our field trips based on what he or she is learning in class. We are 
keen about practical and project based learning method in our school, for local excursion 
and field trips, parents will be communicated in a timely manner.
        </p>
        <h3>Sport</h3>
        <p>
        Sport facilities are available through which we intensively train the students in 
        various sport activities enough for them to compete internationally.<br/>
Some of our sport activities are: Football, Basketball, swimming and other 
co-curricular activities. New students and visitors can join the Redeemer’s Light 
British School Football Academy 
For students that have the dream of becoming a footballer in the future, we are
 affiliated to many local and international football training institutions both in Nigeria 
 and in the UK.

        </p>
        <h3>Transportation system</h3>
        <p>
        Our transportation system is very effective.
        </p>
        </div>
    </div>
  );
}

export default Extracurriculum1;
