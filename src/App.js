import "./App.css";
import Form from "./Form";
import Results from "./Results";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundVideo from "./BackgroundVideo";

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const getSearchParams = (e, filter) => {
    // console.log("submit");
    e.preventDefault();
    setSearchParams(filter);
    // console.log('App.js', searchParams);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form handleSubmit={getSearchParams} />} />
        <Route
          path="/results"
          element={<Results formSearch={searchParams} />}
        />
      </Routes>
      <BackgroundVideo />
      {/* display */}
    </div>
  );
}

export default App;
