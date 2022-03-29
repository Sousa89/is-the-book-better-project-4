import { useState } from "react";
import backgroundVideo1 from "../videoFiles/library.mp4";
import backgroundVideo2 from "../videoFiles/library2.mp4";
import backgroundVideo3 from "../videoFiles/film1.mp4";
import backgroundVideo4 from "../videoFiles/film2.mp4";
// import backgroundVideo5 from "../videoFiles/film3.mp4";

const BackgroundVideo = (props) => {

  // const backgroundVideo = backgroundVideo1
  const [backgroundVideo, setBackgroundVideo] = useState(backgroundVideo1)
  const [backgroundA, setBackgroundA] = useState(true)
  const handleBGVideo = () => {
    
    console.log("handleBGVideo function");
    console.log(backgroundVideo);
    setBackgroundVideo(backgroundVideo2)
    console.log(backgroundVideo); 
  }
  
  setTimeout(() => {
    console.log('setTimeout', backgroundVideo);
    setBackgroundVideo(backgroundVideo2)
    setBackgroundA(!backgroundA)
  }, 3000)
  
  console.log('current BG Video',backgroundVideo);
  return (
    <div className="backgroundVideos">
      {
        backgroundA ?
      <video autoPlay muted loop id="video1" className="video">
        <source src={backgroundVideo1} type="video/mp4" />
      </video>
        :
      <video autoPlay muted loop id="video1" className="video">
        <source src={backgroundVideo2} type="video/mp4" />
      </video>
      }
      {/* <video muted id="video2" className="video">
        <source src={backgroundVideo3} type="video/mp4" />
      </video> */}
      <p>test {backgroundVideo}</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default BackgroundVideo;
