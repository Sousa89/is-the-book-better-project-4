// BookApi.js

import axios from "axios";
import Display from "./Display";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const BookApi = (props) => {
  const [bookData, setBookData] = useState({});
  const [bookImage, setBookImage] = useState(null);
  const [bookTitles, setBookTitles] = useState([]);
  const [data, setData] = useState([]);
  // const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    console.log("Books Side effect is running");
    console.log("boook query", props.formSearch2);
    axios({
      url: `https://www.googleapis.com/books/v1/volumes`,
      params: {
        q: props.formSearch2,
        // q: "harry potter",
        // q: "sdfsdafdfgdfgfag",
        // key: "AIzaSyC7nVvFwC8qpnCDnddeOCwnTXZLdwJKQuk",
        key: "AIzaSyDoRrQbNko63UJtYicuNcl_iesA7acsBjI",
        // maxResults: "40",
      },
    })
      .then((results) => {
        console.log(results.data);
        console.log("Api DATA");
        // setBookData(results.data.items[0].volumeInfo);
        // setBookImage(results.data.items[0].volumeInfo.imageLinks.thumbnail);
        // console.log("OVER HERE ", bookData.title);
        // props.getTitle2(bookData.title);
        // props.getBookRating2(bookData.averageRating);
        console.log(results.data.items);
        setData(results.data.items);
        setBookTitles(bookTitle(results.data.items));
        console.log(
          "INDEX ",
          bookTitles.findIndex((eachTitle) => {
            return eachTitle.toLowerCase() === "fight club";
          })
        );
        initalCheck(bookTitle(results.data.items), results.data.items);
      })
      .catch(function (error) {
        props.getErrorsStatus(true);
        if (error.apiData) {
          // Request made and server responded
          console.log(error.apiData.data);
          console.log(error.apiData.status);
          console.log(error.apiData.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, [props]);

  // if (bookData.imageLinks) {
  //   const bookImage = bookData.imageLinks.thumbnail;
  //   console.log("bookImage ", bookImage);
  // }

  // returns an array of the 10 book titles from api call
  const bookTitle = (titles) => {
    let title = [];
    titles.map((eachTitle) => {
      title.push(eachTitle.volumeInfo.title);
      // console.log(eachTitle);
      return;
    });
    return title;
  };
  console.log("bookTitles state", bookTitles);

  const initalCheck = (titles, data) => {
    console.log("intital check", props.selectedIndex);
    console.log(props.formSearch2.toLowerCase());
    console.log(titles);
    // bookTitle.findIndex((eachTitle)=>{return console.log(eachTitle.toLowerCase());})
    if (props.selectedIndex) {
      setBookData(data[props.selectedIndex].volumeInfo);
      setBookImage(data[props.selectedIndex].volumeInfo.imageLinks.thumbnail);
      console.log(bookData);
      props.getTitle2(data[props.selectedIndex].volumeInfo.title);
      props.getBookRating2(data[props.selectedIndex].volumeInfo.averageRating);
    } else {
      // checks if the user input exactly matches a returned book title
      // retuns the index of -1 if not
      const index = titles.findIndex((eachTitle) => {
        return eachTitle.toLowerCase() === props.formSearch2.toLowerCase();
      });
      // if it does matches then get the book data to that title
      if (index !== -1) {
        setBookData(data[index].volumeInfo);
        setBookImage(data[index].volumeInfo.imageLinks.thumbnail);
        console.log(bookData);
        props.getTitle2(data[index].volumeInfo.title);
        props.getBookRating2(data[index].volumeInfo.averageRating);
      }
    }
  };

  // set the book data to selected book title
  const handleClick = (index) => {
    console.log("clicked", index);
    setBookData(data[index].volumeInfo);
    setBookImage(data[index].volumeInfo.imageLinks.thumbnail);
    console.log(data[index].volumeInfo);
    props.getTitle2(data[index].volumeInfo.title);
    props.getBookRating2(data[index].volumeInfo.averageRating);
    // setSelectedIndex(index)
    props.getIndex2(index);
  };

  return (
    <div className="bookApi generalApiContainer">
      {/* {initalCheck()} */}
      {bookTitles[0] ? (
        Object.keys(bookData).length === 0 ? (
          <div>
            <p className="subHeader">
              Here are the top book results returned from your search:
            </p>
            <div className="titleDecoration">
              {bookTitles.map((eachTitle, index) => {
                return (
                  // <button onClick={() => handleClick(index)}>{eachTitle}</button>
                  <ul className="titleList">
                    <li
                      className="titleItems"
                      onClick={() => handleClick(index)}
                    >
                      {eachTitle}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        ) : (
          <Display
            image={bookImage}
            overview={bookData.description}
            title={bookData.title}
            releaseDate={bookData.publishedDate}
            author={bookData.authors}
          />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BookApi;
