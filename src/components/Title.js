// Title.js
import useWindowDimensions from "./useWindowDimensions";
const Title = (props) => {
  const {width} = useWindowDimensions();
  // const title = props.title;
  console.log(width);
  console.log(props.title.length);

  return (
    <div className="title">
      {/* <h1>{props.title} </h1> */}
      {
        props.title.length < 40 || width > 520 ?  <h1>{props.title} </h1> : <p className="bigTitle">{props.title}</p> 
      }
      {/* {
        props.book & props.movie
        ? null
        : props.book
          ? <h1> - The Book</h1>
          : <h1> - The Movie</h1>
      } */}
    </div>
  );
};

export default Title;
