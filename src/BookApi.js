import { useState, useEffect } from 'react';
import axios from 'axios';



const BookApi = () => {
    useEffect ( () => {
    console.log('Side effect is running');
    axios({
        url: `https://www.googleapis.com/books/v1/volumes`,
        params: {
            q: {},
            key: 'AIzaSyC7nVvFwC8qpnCDnddeOCwnTXZLdwJKQuk',
            maxResults: "40",
            zoom: "4"
        }
    }).then( (results) => {
        console.log(results);
        
    })
  }, []);

  return (
    <h2>Here are your options:</h2>
  )

}

export default BookApi;




