import { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";

const BookApi = () => {
  const [bookData, setBookData] = useState(!true);
  useEffect(() => {
    console.log("Side effect is running");
    axios({
      url: `https://www.googleapis.com/books/v1/volumes`,
      params: {
        q: "Fight Club",
        key: "AIzaSyC7nVvFwC8qpnCDnddeOCwnTXZLdwJKQuk",
        maxResults: "40",
        zoom: 4,
      },
    }).then((results) => {
      setBookData(results.data.items[0].volumeInfo);
      console.log(results.data.items[0].volumeInfo);
    });
  }, []);

  return (
    <div>
      {bookData === false ? null : (
        <Display
          image={bookData.imageLinks.thumbnail}
          voteAvg={bookData.averageRating}
          overview={bookData.description}
          title={bookData.title}
          releaseDate={bookData.publishedDate}
          author={bookData.authors}
        />
      )}
    </div>
  );
};

export default BookApi;
