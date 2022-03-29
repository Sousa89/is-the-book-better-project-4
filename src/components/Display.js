// Display.js;

const Display = (props) => {

  return (
    <div className="display">
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

      <div className="textContainer">
        <h4>{props.author ? "Author" : "Director"}</h4>
        <p>{props.author ? props.author : props.director}</p>
        <h4>{props.author ? "Published Date:" : "Release Date:"}</h4>
        <p>{props.releaseDate}</p>
        <h4>{props.author ? "" : "Cast:"}</h4>
        {props.stars
          ? props.stars.map((star) => {
              return <p>{star}</p>;
            })
          : null}
        <p>{props.overview}</p>
      </div>
      {/* end of textContainer */}
    </div>
    // end of displayContainer div
  );
};
export default Display;
