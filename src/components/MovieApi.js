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
  console.log("Movie Side effect is running");
  console.log(props.formSearch2);
  const [movieData, setMovieData] = useState({});

  // const [castData1, setCastData1] = useState(``);
  // const [castData2, setCastData2] = useState(``);
  // const [castData3, setCastData3] = useState(``);

  // const [directorData, setDirectorData] = useState([]);

  // const [cast, setCast] = useState({})
  // console.log(`CHECKING CASTDATA1`, castData1);
  // console.log(`CHECKING DIRECTOR`, directorData);
  //wrap the api call in the useEffect State
  useEffect(() => {
    // make the api call with axios

    axios({
      url: "https://api.themoviedb.org/3/search/movie",

      params: {
        api_key: "80b3efd6913b7c0573391241f786ea80",


        // query: 'fight club'
        query: props.formSearch2,
        // query: `dsfdaasdasdasdasdas`,
      },
    })
      .then((apiData) => {
        // console.log("movie data is : ",apiData.data.results[0]);
        setMovieData(apiData.data.results[0]);
        // console.log(apiData);
        props.getMovieRating2(movieData.vote_average)
        
      })
      .then(()=>{
        axios({
          url: `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=80b3efd6913b7c0573391241f786ea80&language=en-US`,
        }).then((castData) => {
          setMovieData({ ...movieData, director: directorName(castData.data.crew), stars: [castData.data.cast[0].name, castData.data.cast[1].name, castData.data.cast[2].name]})
        });
      })
      // .catch((err) => {
      //   console.log("MOVIE ERROR ", err);
      // });
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
          console.log('Error', error.message);
        }

  });
  }, [props]);

  const directorName = (crew) => {
    let director = []
    crew.map((eachProperty) => {
      if (eachProperty.job === "Director") {
        director.push(eachProperty.name)
        return
      }
    })
    return director[0]
  }

  // console.log("DIRECTOR NAME", movieData);

  // useEffect(() => {
  //   axios({
  //     url: `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=80b3efd6913b7c0573391241f786ea80&language=en-US`,
  //   }).then((castData) => {
  //     // console.log(`beep boop`, castData.data.cast[0]);
  //     setCastData1(castData.data.cast[0].name);
  //     setCastData2(castData.data.cast[1].name);
  //     setCastData3(castData.data.cast[2].name);

  //     setDirectorData(castData.data.crew);
      
  //   });
  // }, [movieData]);
  // console.log(`checking cast data`, castData1, castData2, castData3);

  // console.log(movieData.id);
  // let test = Cast(movieData.id);
  // console.log("OVER HERE", test);
  // const {director: director} = test
  // console.log(director);

  // const directorName = directorData.map((director) => {
  //   if (director.job === "Director") {
  //     // console.log(`IT WORKED GOD DAMMIT`, director);
  //     return director.name;
  //   }
  // });

  // const getNames = (names) => {
  //   setCast(names)
  // }

//   Cast(movieData.id)
// console.log(cast);

  return (
    
    movieData
    ? <div className="movieApi generalApiContainer">
      {
        movieData ? <Display
        image={movieData.poster_path}
        overview={movieData.overview}
        title={movieData.title}
        releaseDate={movieData.release_date}
        director={movieData.director}
        // stars1={castData1}
        // stars2={castData2}
        // stars3={castData3}
        stars={movieData.stars}
      /> : null
      }
    </div>
    : <Loading />
  );
};

export default MovieApi;
