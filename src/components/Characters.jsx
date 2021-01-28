import { useState, useEffect } from "react";

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharactersData(data.results));
  }, []);

  return (
    <div className="characters">
      {charactersData.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
};

export default Characters;
