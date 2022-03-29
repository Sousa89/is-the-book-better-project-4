import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const Form = (props) => {
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    props.handleSubmit(e, form);
    setForm("");
  };

  return (
    <div className="formComp">
      <Header />
      <form onClick={handleSubmit} className="search-form">
        <label htmlFor="userSearch" className="sr-only">
          enter movie/book title
        </label>
        <input
          type="text"
          name="userSearch"
          id="userSearch"
          placeholder="Search"
          onChange={handleChange}
          value={form}
        ></input>

        <Link to="/results">
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
