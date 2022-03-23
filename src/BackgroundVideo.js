import backgroundVideo1 from "./videoFiles/library.mp4";
// import backgroundVideo1 from "./videoFiles/library2.mp4";
// import backgroundVideo1 from "./videoFiles/film1.mp4";
// import backgroundVideo1 from "./videoFiles/film2.mp4";
// import backgroundVideo1 from "./videoFiles/film3.mp4";

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
