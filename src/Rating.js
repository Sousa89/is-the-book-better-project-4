// Rating.js
import Winner from "./Winner";

const Rating = (props) => {
  const newBookRating = props.bRating * 2;
  return (
    <div className="rating">
      <h2>This is the ratings</h2>
      <p>Book rate: {newBookRating}</p>
      <p>Movie rate: {props.mRating}</p>
      <Winner book={newBookRating} movie={props.mRating}/>
    </div>
  )
};

export default Rating;
