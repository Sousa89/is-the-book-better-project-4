// Rating.js
import Winner from "./Winner";

const Rating = (props) => {
  const newBookRating = props.bRating * 2;
  return (
    <div className="rating">
      <div className="ratingTextContainer">
        <h2>The Ratings:</h2>
        <div className="ratingWrapper">
          <p>Book rating {newBookRating} </p>
          <p> {props.mRating} Movie rating</p>
        </div> 
      </div>
      <Winner book={newBookRating} movie={props.mRating} />
    </div>
  );
};

export default Rating;
