// BackgroundVideo.js
import backgroundVideo1 from "./videoFiles/library.mp4";

const BackgroundVideo = (props) => {
  return (
    <div className="backgroundVideos">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo1} type="video/mp4" />
      </video>
    </div>
  );
};
export default BackgroundVideo;
