import { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";

const BookApi = () => {
  const [bookData, setBookData] = useState(true);
  const [bookImage, setBookImage] = useState(null);

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
    })
      .then((results) => {
        console.log(results.data.items[0].volumeInfo);
        setBookData(results.data.items[0].volumeInfo);
        setBookImage(results.data.items[0].volumeInfo.imageLinks.thumbnail);
      })
      .catch((err) => {
        console.log("ERROR ", err);
      });
  }, []);

  // if (bookData.imageLinks) {
  //   const bookImage = bookData.imageLinks.thumbnail;
  //   console.log("bookImage ", bookImage);
  // }

  return (
    <div>
      <Display
        image={bookImage}
        voteAvg={bookData.averageRating}
        overview={bookData.description}
        title={bookData.title}
        releaseDate={bookData.publishedDate}
        author={bookData.authors}
      />
    </div>
  );
};

export default BookApi;
