import { useEffect, useState } from 'react';
import '../styles/CardDisplay.css';

const Card = ({ data, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <img className="pokemon-pic" src={data.sprites.front_default} />
      <div className="pokemon-name">{data.name}</div>
    </div>
  );
};

const CardDisplay = ({ score, handleScore }) => {
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    const currentIds = [];
    while (currentIds.length < 10) {
      const id = Math.floor(Math.random() * 151) + 1;
      if (!currentIds.includes(id)) {
        currentIds.push(id);
      }
    }

    const fetchData = async () => {
      const newCards = [];
      for (let i = 0; i < currentIds.length; i += 1) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${currentIds[i]}`,
        );
        const data = await response.json();
        newCards.push(data);
      }
      setCurrentCards(newCards);
    };

    fetchData();
  }, [score]);

  return (
    <>
      {currentCards.map((data) => {
        return (
          <Card key={data.name} onClick={handleScore(data.id)} data={data} />
        );
      })}
    </>
  );
};

export default CardDisplay;
