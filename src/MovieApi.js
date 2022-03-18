// Movie-api.js

// import axios
import axios from "axios";
// import state/ useEffect
import { useState, useEffect } from "react";

const MovieApi = () => {
  // declare useState

  const [movieData, setMovieData] = useState({});

  //wrap the api call in the useEffect State
  useEffect(() => {
    // make the api call with axios
    axios({
      url: "https://api.themoviedb.org/3/search/movie",

      params: {
        api_key: "80b3efd6913b7c0573391241f786ea80",

        query: "drive",
      },
    }).then((apiData) => {
      console.log(apiData.data.results[0]);
      setMovieData(apiData.data.results[0]);
    });
  }, []);

  return <div></div>;
};

export default MovieApi;
