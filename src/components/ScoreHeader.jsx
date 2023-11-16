import '../styles/ScoreHeader.css';

const ScoreHeader = ({ currentScore, highScore }) => {
  return (
    <header className="header">
      <div className="score-container">
        <div className="score">CURRENT SCORE: {currentScore}</div>
        <div className="score">HIGH SCORE: {highScore}</div>
      </div>
      <div>Dont Click the same Pokemon twice!</div>
    </header>
  );
};

export default ScoreHeader;
