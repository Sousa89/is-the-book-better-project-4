// Cast.js
import { useEffect, useState } from "react";
import axios from "axios";

const Cast = (props) => {
  const [crew, setCrew] = useState([]);

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

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${props}/credits?api_key=80b3efd6913b7c0573391241f786ea80&language=en-US`,
    }).then((castData) => {
      // setCrew({ ...crew, star: { star1: castData.data.cast[0].name, star2: castData.data.cast[1].name, star3: castData.data.cast[2].name },  director: directorName(castData.data.crew) })
      setCrew([
        directorName(castData.data.crew),
        castData.data.cast[0].name,
        castData.data.cast[1].name,
        castData.data.cast[2].name,
      ]);
    });
  }, [props]);
  console.log(crew);
  return crew;
};

export default Cast;
