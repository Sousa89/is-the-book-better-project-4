import { useState } from "react";
import backgroundVideo1 from "../videoFiles/library.mp4";
import backgroundVideo2 from "../videoFiles/library2.mp4";
// import backgroundVideo3 from "../videoFiles/film1.mp4";
// import backgroundVideo4 from "../videoFiles/film2.mp4";
// import backgroundVideo5 from "../videoFiles/film3.mp4";

const BackgroundVideo = () => {
  return (
          <video autoPlay loop muted id="video1" className="video">
            <source src={backgroundVideo1} type="video/mp4" />
          </video>
      }
};
export default BackgroundVideo;
