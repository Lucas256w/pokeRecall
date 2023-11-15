import ScoreHeader from './components/ScoreHeader';
import CardDisplay from './components/CardDisplay';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleScore = (name) => {
    if (!selected.includes(name)) {
      setScore(score + 1);
      setSelected(selected.concat(name));
      if (score + 1 > highScore) {
        setHighscore(score + 1);
      }
    }
  };
  console.log(score);
  return (
    <>
      <ScoreHeader currentScore={score} highScore={highScore} />
      <main>
        <CardDisplay score={score} handleScore={() => handleScore} />
      </main>
    </>
  );
}

export default App;
