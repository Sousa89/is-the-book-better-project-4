// Title.js

const Title = (props) => {
  return (
    <div className = "title">
      <h1>{props.title} </h1>
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
