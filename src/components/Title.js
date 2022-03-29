// Title.js
import useWindowDimensions from "./useWindowDimensions";
const Title = (props) => {
  const {width} = useWindowDimensions();

  return (
    <div className="title">
      {
        props.title.length < 40 || width > 520 ?  <h1>{props.title} </h1> : <p className="bigTitle">{props.title}</p> 
      }
    </div>
  );
};

export default Title;
