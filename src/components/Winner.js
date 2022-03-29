//Winner.js -

const Winner = (props) => {
  return (
    <div className="winner">
      <h1>
        The Winner Is....
        {props.book > props.movie ? "THE BOOK" : "THE MOVIE"}
      </h1>
    </div>
  );
};

export default Winner;
