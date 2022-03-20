import "./App.css";
import Form from "./Form";

import BookApi from './BookApi';
import MovieApi from "./MovieApi";
import {useState} from 'react';
// import { Routes, Route } from "react-router-dom";


function App() {
  const[searchParams,setSearchParams] = useState(null)
  
  const getSearchParams=(e,filter) =>{
    console.log("submit")
    e.preventDefault();
    setSearchParams(filter)

    

  }
  console.log(searchParams)
  return (
    <div className="App">
     <Form handleSubmit={getSearchParams} /> 
      {/* <Routes>
      <Route></Route>
    </Routes> */}
      <MovieApi />
    </div>
  );

}

export default App;
