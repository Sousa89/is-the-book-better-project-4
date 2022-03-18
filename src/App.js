import "./App.css";

import BookApi from './BookApi';


import MovieApi from "./MovieApi";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
      <Route></Route>
    </Routes> */}
      <MovieApi />
    </div>
  );

}

export default App;
