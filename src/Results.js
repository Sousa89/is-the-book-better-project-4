// Results.js
import BookApi from "./BookApi";
import MovieApi from "./MovieApi";
import BackButton from "./BackButton";
import { useState } from "react";
import Title from "./Title";
import Rating from "./Rating";
import Versus from "./Versus";
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
    setBookRating(getRating);
  };
  const getMovieRating = (getRating) => {
    setMovieRating(getRating);
  };
  return (
    <div className="results">
      <Title title={title} />
      <div className="wrapper">
        <BookApi
          formSearch2={props.formSearch}
          getTitle2={getTitle}
          getBookRating2={getBookRating}
        />
        <Versus />
        <Rating bRating={bookRating} mRating={movieRating} />
        <MovieApi
          formSearch2={props.formSearch}
          getMovieRating2={getMovieRating}
        />
      </div>
      <BackButton />
    </div>
  );
};

export default Results;
