// WinnerButton.js

const WinnerButton = (props) => {
  return (
    <div className="winnerBtnContainer">
      <p className="winnerBtn" onClick={() => props.handleClick()}>
        WINNER?
      </p>
    </div>
  );
};

export default WinnerButton;
