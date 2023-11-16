import '../styles/GameOverDisplay.css';

const GameOverDisplay = ({ score, onClick }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="game-over-card">
        <div className="game-over-title">Game Over!</div>
        <div className="final-score">Your final score is {score}</div>
        <button onClick={onClick} className="play-again-btn">
          Play Again
        </button>
      </div>
    </>
  );
};

export default GameOverDisplay;
