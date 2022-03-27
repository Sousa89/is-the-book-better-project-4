// BackButton.js
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div className="back">
      <Link to="/">
        <button>Try Another!</button>
      </Link>
    </div>
  );
};

export default BackButton;
