import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import { useRef } from "react";
import './BodyMain.css'

const GalleryMain = () => {

  const videoRef = useRef(null);
  const videoRef2 = useRef(null); 
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };
  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  const handleMouseEnter2 = () => {
    videoRef2.current.play();
  };

  const handleMouseLeave2 = () => {
    videoRef2.current.pause();
    videoRef2.current.currentTime = 0;
  };
  const handleMouseEnter3 = () => {
    videoRef3.current.play();
  };

  const handleMouseLeave3 = () => {
    videoRef3.current.pause();
    videoRef3.current.currentTime = 0;
  };
  const handleMouseEnter4 = () => {
    videoRef4.current.play();
  };

  const handleMouseLeave4 = () => {
    videoRef4.current.pause();
    videoRef4.current.currentTime = 0;
  };
  
  return (
    <section className="gallery" id="gallery">
      <h2>.............. Gallery Of The Memories ............</h2>
      <div className="video-grid">
        <div className="video-item">
          <video ref={videoRef} src={video1} loop onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></video>
        </div>
        <div className="video-item">
          <video ref={videoRef2} src={video2} loop onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}></video>
        </div>
        <div className="video-item">
          <video ref={videoRef3} src={video3} loop onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}></video>
        </div>
        <div className="video-item">
          <video ref={videoRef4} src={video4} loop onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}></video>
        </div>
      </div>
    </section>
  );
};

export default GalleryMain;
