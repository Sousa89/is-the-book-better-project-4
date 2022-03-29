import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo";

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

      <BackgroundVideo />
      <Footer />
      {/* display */}
    </div>
    
    
 );
}

export default App;
