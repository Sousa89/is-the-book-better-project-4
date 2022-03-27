// Verus.js
import BackButton from "./BackButton";

const Versus = (props) => {
    return (
        <div className="versus">
            <BackButton />
            <h2>VS</h2>
            <p onClick={() => props.handleClick()}>WINNER?</p>
        </div>
    );
};

export default Versus;