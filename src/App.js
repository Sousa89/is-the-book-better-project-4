import "./App.css";

import BookApi from "./BookApi";

import MovieApi from "./MovieApi";
// // import Display from "./Display";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
  <Route path="/:results" element={<MovieInfo />} />
</Routes>; */}
      <MovieApi />
      <BookApi />
      {/* display */}
    </div>
  );
}

export default App;
