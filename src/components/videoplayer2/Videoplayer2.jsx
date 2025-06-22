import './videoPlayer2.css';
import video2 from '../../assets/preschool2.mp4';
import { useRef } from 'react';


const VideoPlayer2 = ({playState2, setPlayState2}) => {

  const player2 = useRef(null);
  const closePlayer2 = (e)=>{
     if(e.target === player2.current){
        setPlayState2(false);
     }
  }
  return (
    <div className={`video-player2 ${playState2 ? '' : 'hide'}`} ref={player2} onClick={closePlayer2}>
      <video src={video2} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer2;
