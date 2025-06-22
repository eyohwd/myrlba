import './videoPlayer4.css';
import video4 from '../../assets/crechevidz.mp4';
import { useRef } from 'react';


const VideoPlayer4 = ({playState4, setPlayState4}) => {

  const player4 = useRef(null);
  const closePlayer4 = (e)=>{
     if(e.target === player4.current){
        setPlayState4(false);
     }
  }
  return (
    <div className={`video-player4 ${playState4 ? '' : 'hide'}`} ref={player4} onClick={closePlayer4}>
      <video src={video4} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer4;
