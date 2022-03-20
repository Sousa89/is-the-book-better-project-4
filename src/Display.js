// Display.js;

const Display = (props) => {
  return (
    // <div className="wrapper"></div>
    <>
      <div className="displayContainer">
        <h1>{props.title}</h1>
        <div className="imageContainer">
          {props.author ? (
            <img src={`${props.image}`} alt={`cover for ${props.title}`} />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              alt={`movie poster for ${props.title}`}
            />
          )}
        </div>
        {/* end of  imageContainer div */}

        <div className="textContainer">
          <h4>{props.author ? "Author" : "Director"}</h4>
          <p>{props.author ? props.author : props.director}</p>
          <h4>{props.releaseDate}</h4>
          {/* stars */}
          <p>{props.overview}</p>
        </div>
        {/* end of textContainer */}
      </div>
      {/* end of displayContainer div */}
    </>
  );
};
export default Display;
