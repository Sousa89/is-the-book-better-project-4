import "./App.css";
import Form from "./Form";
import Results from "./Results";
import Footer from "./Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const getSearchParams = (e, filter) => {
    e.preventDefault();
    setSearchParams(filter);
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
      <Footer/>
   
      {/* display */}
    </div>
  );
}

export default App;
