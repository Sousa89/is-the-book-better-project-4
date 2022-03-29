// Movie-api.js

// import axios
import axios from "axios";
// import state/ useEffect
import { useState, useEffect } from "react";
import Display from "./Display";
// import Cast from "./Cast";
import Loading from "./Loading";

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
    })
      .then((apiData) => {
        setMovieData(apiData.data.results[0]);
        props.getMovieRating2(movieData.vote_average);
      })
      .then(() => {
        axios({
          url: `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=80b3efd6913b7c0573391241f786ea80&language=en-US`,
        }).then((castData) => {
          setMovieData({
            ...movieData,
            director: directorName(castData.data.crew),
            stars: [
              castData.data.cast[0].name,
              castData.data.cast[1].name,
              castData.data.cast[2].name,
            ],
          });
        });
      })
      .catch(function (error) {
        props.getErrorsStatus(true);
        if (error.apiData) {
          // Request made and server responded
          console.log(error.apiData.data);
          console.log(error.apiData.status);
          console.log(error.apiData.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, [props]);

  const directorName = (crew) => {
    let director = [];
    crew.map((eachProperty) => {
      if (eachProperty.job === "Director") {
        director.push(eachProperty.name);
        return;
      }
    });
    return director[0];
  };

  return movieData ? (
    <div className="movieApi generalApiContainer">
      {movieData ? (
        <Display
          image={movieData.poster_path}
          overview={movieData.overview}
          title={movieData.title}
          releaseDate={movieData.release_date}
          director={movieData.director}
          stars={movieData.stars}
        />
      ) : null}
    </div>
  ) : (
    <Loading />
  );
};

export default MovieApi;
