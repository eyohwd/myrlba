import './blogGallery.css';
import blogimg3 from '../../assets/pta1.jpg'
import blogimg4 from '../../assets/pta2.jpg'
import blogimg5 from '../../assets/pta3.jpg'
import blogimg6 from '../../assets/pta4.jpg'
import blogimg7 from '../../assets/pta5.jpg'
import blogimg8 from '../../assets/pta6.png'

const BlogGallery = () => {
  return (
    <div className='bgContainer'>
      <div className="bgImgContainer">
        <img src={blogimg3} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg4} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg5} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg6} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg7} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg8} alt="" />
      </div>
    </div>
  );
}

export default BlogGallery;
