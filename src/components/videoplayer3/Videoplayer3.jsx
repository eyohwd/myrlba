import './videoPlayer3.css';
import video3 from '../../assets/music-tech.mp4';
import { useRef } from 'react';


const VideoPlayer3 = ({playState3, setPlayState3}) => {

  const player3 = useRef(null);
  const closePlayer3 = (e)=>{
     if(e.target === player3.current){
        setPlayState3(false);
     }
  }
  return (
    <div className={`video-player3 ${playState3 ? '' : 'hide'}`} ref={player3} onClick={closePlayer3}>
      <video src={video3} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer3;
