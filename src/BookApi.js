import { useState, useEffect } from 'react';




const Book = () => {
    useEffect ( () => {
    console.log('Side effect is running');
    axios({
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            key: 'AIzaSyC7nVvFwC8qpnCDnddeOCwnTXZLdwJKQuk',
        }
    }).then( (results) => {
        console.log(results);
        
    })
  }, []);

  return (

  )

}

export default Book;




