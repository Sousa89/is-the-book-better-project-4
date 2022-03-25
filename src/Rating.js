// Rating.js
import Winner from "./Winner";

const Rating = (props) => {
  const newBookRating = props.bRating * 2;
  return (
    <div className="rating">
      <div className="ratingTextContainer">
        <h2>The Ratings</h2>
        <p>Book rate: {newBookRating}</p>
        <p>Movie rate: {props.mRating}</p>
      </div>
      <Winner book={newBookRating} movie={props.mRating} />
    </div>
  );
};

export default Rating;
