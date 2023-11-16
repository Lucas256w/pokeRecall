import ScoreHeader from './components/ScoreHeader';
import CardDisplay from './components/CardDisplay';
import GameOverDisplay from './components/GameOverDisplay';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [gameOverDisplay, setgameOverDisplay] = useState(false);

  const handleScore = (id) => {
    if (!selected.includes(id)) {
      setScore(score + 1);
      setSelected(selected.concat(id));
      if (score + 1 > highScore) {
        setHighscore(score + 1);
      }
    } else {
      setgameOverDisplay(true);
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setSelected([]);
    setgameOverDisplay(false);
    console.log('hello');
  };

  return (
    <>
      <ScoreHeader currentScore={score} highScore={highScore} />
      <main>
        {gameOverDisplay && (
          <GameOverDisplay onClick={handlePlayAgain} score={score} />
        )}
        <CardDisplay
          selected={selected}
          score={score}
          handleScore={handleScore}
        />
      </main>
      <footer>Made by Jiahao Huamani</footer>
    </>
  );
}

export default App;
