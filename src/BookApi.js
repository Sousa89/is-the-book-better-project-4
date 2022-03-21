// BookApi.js

import axios from "axios";
import Display from "./Display";
import { useState, useEffect } from "react";

const BookApi = (props) => {
  const [bookData, setBookData] = useState(true);
  const [bookImage, setBookImage] = useState(null);

  useEffect(() => {
    // console.log("Books Side effect is running");
    // console.log(props.formSearch2);
    axios({
      url: `https://www.googleapis.com/books/v1/volumes`,
      params: {
        q: props.formSearch2,
        key: "AIzaSyC7nVvFwC8qpnCDnddeOCwnTXZLdwJKQuk",
        maxResults: "40",
        zoom: 4,
      },
    })
      .then((results) => {
        // console.log(results.data.items[0].volumeInfo);
        setBookData(results.data.items[0].volumeInfo);
        setBookImage(results.data.items[0].volumeInfo.imageLinks.thumbnail);
        // console.log("OVER HERE ", bookData.title);
        props.getTitle2(bookData.title);
      })
      .catch((err) => {
        // console.log("BOOK ERROR ", err);
      });
  }, [props]);

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
