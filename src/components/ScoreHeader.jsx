import '../styles/ScoreHeader.css';

const ScoreHeader = ({ currentScore, highScore }) => {
  return (
    <header className="header">
      <div className="score">CURRENT SCORE: {currentScore}</div>
      <div className="score">HIGH SCORE: {highScore}</div>
    </header>
  );
};

export default ScoreHeader;
