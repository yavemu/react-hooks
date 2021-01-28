import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

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
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
