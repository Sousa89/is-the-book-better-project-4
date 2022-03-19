// Display.js;

const Display = (props) => {
  return (
    // <div className="wrapper"></div>
    <>
      <div className="displayContainer">
        <h1>{props.title}</h1>
        <div className="imageContainer">
          {props.thumbnail ? (
            <img src={`${props.image}`} alt={`cover for ${props.title}`} />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              alt={`movie poster for ${props.title}`}
            />
          )}
        </div>
        {/* end of imageContainer */}

        {/* end of  imageContainer div */}
        <div className="textContainer">
          <h4>{props.releaseDate}</h4>
          <h4>Author</h4>
          <p>{props.author}</p>
          <h4>Director:</h4>
          <p>Joe blow</p>

          <p>{props.overview}</p>
        </div>
        {/* end of textContainer */}
      </div>
      {/* end of displayContainer div */}
    </>
  );
};
export default Display;
