// BackgroundVideo.js
import backgroundVideo1 from "../videoFiles/library.mp4";
const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted id="video1" className="video">
      <source src={backgroundVideo1} type="video/mp4" />
    </video>
  )};
export default BackgroundVideo;
