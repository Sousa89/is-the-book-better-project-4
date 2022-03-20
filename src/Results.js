// Results.js
import BookApi from "./BookApi";
import MovieApi from "./MovieApi";
import BackButton from "./BackButton";
import { useState } from "react";
// import { useParams } from "react-router-dom";

const Results = (props) => {
  const [title, setTitle] = useState(null);
  const getTitle = (headlineTitle) => {
    setTitle(headlineTitle);
    console.log("title ", title);
  };
  return (
    <div>
      <BookApi formSearch2={props.formSearch} getTitle2={getTitle} />
      <MovieApi formSearch2={props.formSearch} />
      <BackButton />
    </div>
  );
};

export default Results;
