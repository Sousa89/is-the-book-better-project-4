// Results.js
import BookApi from "./BookApi";
import MovieApi from "./MovieApi";
import BackButton from "./BackButton";
import { useState } from "react";
import Title from "./Title";
import Rating from "./Rating";
// import { useParams } from "react-router-dom";

const Results = (props) => {
  const [title, setTitle] = useState(null);
  const [bookRating, setBookRating] = useState(null);
  const [movieRating, setMovieRating] = useState(null);
  const getTitle = (headlineTitle) => {
    setTitle(headlineTitle);
    // console.log("title ", title);
  };
  // console.log("Results.js", props.formSearch);
  const getBookRating = (getRating) => {
    setBookRating(getRating)
  }
  const getMovieRating = (getRating) => {
    setMovieRating(getRating)
  }
  return (
    <div>
      <Title title={title} />
      <BookApi formSearch2={props.formSearch} getTitle2={getTitle} getBookRating2={getBookRating}/>
      <MovieApi formSearch2={props.formSearch} getMovieRating2={getMovieRating} />
      <BackButton />
      <Rating bRating={bookRating} mRating={movieRating}/>
    </div>
  );
};

export default Results;
