// Movie-api.js

// import axios
import axios from "axios";
// import state/ useEffect
import { useState, useEffect } from "react";
import Display from "./Display";

const MovieApi = (props) => {
  // declare useState

  const [movieData, setMovieData] = useState({});

  //wrap the api call in the useEffect State
  useEffect(() => {
    // make the api call with axios
    axios({
      url: "https://api.themoviedb.org/3/search/movie",

      params: {
        api_key: "80b3efd6913b7c0573391241f786ea80",

        query: props.formSearch2,
      },
    }).then((apiData) => {
      console.log(apiData.data.results[0]);
      setMovieData(apiData.data.results[0]);
      console.log(apiData);
    });
  }, [props]);

  return (
    <div>
      <Display
        image={movieData.poster_path}
        voteAvg={movieData.vote_average}
        overview={movieData.overview}
        title={movieData.title}
        releaseDate={movieData.release_date}
        // director={}
        // stars={}
      />
    </div>
  );
};

export default MovieApi;
