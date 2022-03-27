// WinnerButton.js

const WinnerButton = (props) => {
  return (
    <div>
      
        <p className="winnerBtn" onClick={() => props.handleClick()}>WINNER?</p>
      
    </div>
  );
};

export default WinnerButton;