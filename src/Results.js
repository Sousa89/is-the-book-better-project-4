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
  const [title, setTitle] = useState('');
  const [bookRating, setBookRating] = useState(null);
  const [movieRating, setMovieRating] = useState(null);
  const [bookError, setBookError] = useState(false);
  const [movieError, setMovieError] = useState(false);

  
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
  const errorBookHandler = (err) => {
    setBookError(err);
  };
  const errorMovieHandler = (err) => {
    setMovieError(err);
  }
console.log("TITLEEEEEEE", title);
  console.log("Book Error is : ", bookError);
  console.log("Movie Error is : ", movieError);
  return (
      bookError  
      ? <div>
          <p>There is no book/movie with this title.Please try again! </p>
          <BackButton />
        </div>
      : <div className="results">
        <Title title={title} />
        <div className="wrapper">
          <BookApi
            formSearch2={props.formSearch}
            getTitle2={getTitle}
            getBookRating2={getBookRating}
            getErrorsStatus={errorBookHandler}
          />
          {/* <div className="versusRatingContainer">
            <Versus />
            <Rating bRating={bookRating} mRating={movieRating} />
          </div> */}
          
          {
            title
            ? (!movieError
                ? <div> 
                  <div className="versusRatingContainer">
                    <Versus />
                    <Rating bRating={bookRating} mRating={movieRating} />
                  </div>
                  <MovieApi
                    formSearch2={title}
                    getMovieRating2={getMovieRating}
                    getErrorsStatus={errorMovieHandler}
                  />
                </div>
                : <div>
                  <p>There is no book/movie with this title.Please try again! </p>
                  {/* <BackButton /> */}
                </div>
            )
            : null
          }
          <BackButton />
        </div>
      </div> 
  );
};

export default Results;
