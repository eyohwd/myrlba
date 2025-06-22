import './videoPlayer1.css';
import video1 from '../../assets/rlbacademyvid.mp4';
import { useRef } from 'react';


const VideoPlayer1 = ({playState1, setPlayState1}) => {

  const player1 = useRef(null);
  const closePlayer1 = (e)=>{
     if(e.target === player1.current){
        setPlayState1(false);
     }
  }
  return (
    <div className={`video-player1 ${playState1 ? '' : 'hide'}`} ref={player1} onClick={closePlayer1}>
      <video src={video1} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer1;
