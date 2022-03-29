// BackButton2.js
import { Link } from "react-router-dom";
const BackButton2 = () => {
  return (
    <div className="back2">
      <Link to="/">
        <button>Try Another!</button>
      </Link>
    </div>
  );
};

export default BackButton2;