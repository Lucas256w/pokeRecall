import ScoreHeader from './components/ScoreHeader';
import CardDisplay from './components/CardDisplay';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleScore = (id) => {
    if (!selected.includes(id)) {
      setScore(score + 1);
      setSelected(selected.concat(id));
      if (score + 1 > highScore) {
        setHighscore(score + 1);
      }
    } else {
      alert('You lost!');
    }
  };

  console.log(selected);
  return (
    <>
      <ScoreHeader currentScore={score} highScore={highScore} />
      <main>
        <CardDisplay
          selected={selected}
          score={score}
          handleScore={handleScore}
        />
      </main>
    </>
  );
}

export default App;
