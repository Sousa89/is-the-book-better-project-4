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
  const [error, setError] = useState(false);
  
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
  const errorHandler = (err) => {
    setError(err);
  };

  console.log("Error is : ", error);
  return (
      error ? <div><p>There is no book/movie with this title.Please try again! </p><BackButton /></div> : 
     <div className="results">
      <Title title={title} />
      <div className="wrapper">
        <BookApi
          formSearch2={props.formSearch}
          getTitle2={getTitle}
          getBookRating2={getBookRating}
          getErrorsStatus={errorHandler}
        />
        <div className="versusRatingContainer">
          <Versus />
          <Rating bRating={bookRating} mRating={movieRating} />
        </div>
        <MovieApi
          formSearch2={props.formSearch}
          getMovieRating2={getMovieRating}
          getErrorsStatus={errorHandler}
        />
      </div>
      
    </div> 
    
      
    
  );
};

export default Results;
