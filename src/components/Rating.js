// Rating.js
import { useState } from "react";
import Winner from "./Winner";

const Rating = (props) => {
  const newBookRating = props.bRating * 2;
  const [isActive, setIsActive] = useState(false)

  setTimeout(()=>{
    setIsActive(true)
  }, 1000)

  return (
    <div className={isActive ? 'showRating rating' : 'rating'} >
      <div className="ratingTextContainer">
        <h2>The Ratings:</h2>
        <div className="ratingWrapper">
          <p>Book rating {newBookRating} </p>
          <p>Movie rating {props.mRating} </p>
        </div> 
      </div>
      {/* <Winner book={newBookRating} movie={props.mRating} /> */}
    </div>
  );
};

export default Rating;
