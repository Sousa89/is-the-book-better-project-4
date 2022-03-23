// Cast.js
import { useEffect, useState } from "react"
import axios from "axios";

// const directorName = (directorData) => {
//     directorData.map((director) => {
//         if (director.job === "Director") {
//             console.log(`IT WORKED GOD DAMMIT`, director.name);
//             return director.name;
//         }
//     });
// }

const Cast = (props) => {

    const [crew, setCrew] = useState(null)
    const [directorData, setDirectorData] = useState([])
    const [castData, setCastData] = useState({})

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${props}/credits?api_key=80b3efd6913b7c0573391241f786ea80&language=en-US`,
        }).then((castData) => {
            setDirectorData(castData.data.crew);
            // setCastData(castData.data.cast)
            setCastData({ star1: castData.data.cast[0].name, star2: castData.data.cast[1].name, star3: castData.data.cast[2].name })
        });
    }, [props]);


    console.log("ARRAY",castData);


    let directorName = ""
    directorData.map((director) => {
        if (director.job === "Director") {
            // console.log(`IT WORKED GOD DAMMIT`, director.name);
            directorName = director.name
            return;
        }
    });

    // const newCastData = []
    // for ( let i = 0; i < 3; i++) {
    //     // newCastData.push(castData[i].name)
    //     // console.log(castData[i].character);
    //     let star = castData[i];
    //     star.map((eachProperty)=>{
    //         // if(eachProperty === )
    //         console.log(eachProperty);
    //     })
    // }
    // console.log(newCastData);


    console.log("TADA!!", directorName);

    return (
        crew
    )
}

export default Cast;
