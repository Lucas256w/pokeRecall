const ScoreHeader = ({ currentScore, highScore }) => {
  return (
    <header className="header">
      <div className="score">
        CURRENT SCORE:{currentScore} HIGH SCORE:{highScore}
      </div>
    </header>
  );
};

export default ScoreHeader;
