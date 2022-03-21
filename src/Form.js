import { useState } from "react";
import { Link } from "react-router-dom";
const Form = (props) => {
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setForm(e.target.value);
    // props.handleSubmit(e, form);
  };

  const handleSubmit = (e) => {
    props.handleSubmit(e, form);
    setForm("");
  };
  return (
    <form onClick={handleSubmit} className="search-form">
      <label htmlFor="userSearch" className="sr-only">
        enter movie/book title
      </label>

      <input
        type="text"
        name="userSearch"
        id="userSearch"
        placeholder="searchTitle"
        onChange={handleChange}
        value={form}
      ></input>
      <Link to="/results">
        <button>Submit</button>
      </Link>
    </form>
  );
};

export default Form;
