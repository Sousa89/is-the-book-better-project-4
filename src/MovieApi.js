// Movie-api.js

// import axios
import axios from "axios";
// import state/ useEffect
import { useState, useEffect } from "react";
import Display from "./Display";

const MovieApi = (props) => {
  // declare useState
  // console.log("Movie Side effect is running");
  // console.log(props.formSearch2);
  const [movieData, setMovieData] = useState({});

  const [castData1, setCastData1] = useState(``);
  const [castData2, setCastData2] = useState(``);
  const [castData3, setCastData3] = useState(``);

  const [directorData, setDirectorData] = useState([]);
  // console.log(`CHECKING CASTDATA1`, castData1);
  // console.log(`CHECKING DIRECTOR`, directorData);
  //wrap the api call in the useEffect State
  useEffect(() => {
    // make the api call with axios

    axios({
      url: "https://api.themoviedb.org/3/search/movie",

      params: {
        api_key: "80b3efd6913b7c0573391241f786ea80",

        // query: props.formSearch2,
        query: `fight club`,
      },
    })
      .then((apiData) => {
        // console.log(apiData.data.results[0]);
        setMovieData(apiData.data.results[0]);
        // console.log(apiData);
        props.getMovieRating2(movieData.vote_average)
      })
      .catch((err) => {
        console.log("MOVIE ERROR ", err);
      });
  }, [props]);

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=80b3efd6913b7c0573391241f786ea80&language=en-US`,
    }).then((castData) => {
      // console.log(`beep boop`, castData.data.cast[0]);
      setCastData1(castData.data.cast[0].name);
      setCastData2(castData.data.cast[1].name);
      setCastData3(castData.data.cast[2].name);

      setDirectorData(castData.data.crew);
    });
  }, [movieData]);
  // console.log(`checking cast data`, castData1, castData2, castData3);

  const directorName = directorData.map((director) => {
    if (director.job === "Director") {
      // console.log(`IT WORKED GOD DAMMIT`, director);
      return director.name;
    }
  });

  return (
    <div className="movieApi">
      <Display
        image={movieData.poster_path}
        overview={movieData.overview}
        title={movieData.title}
        releaseDate={movieData.release_date}
        director={directorName}
        stars1={castData1}
        stars2={castData2}
        stars3={castData3}
      />
    </div>
  );
};

export default MovieApi;
