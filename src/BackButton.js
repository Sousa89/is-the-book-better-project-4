// BackButton.js
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <button>Try Another, but also click me</button>
      </Link>
    </div>
  );
};

export default BackButton;
