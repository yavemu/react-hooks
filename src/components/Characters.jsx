import { useState, useEffect, useReducer } from "react";
import CharacterCard from "./CharacterCard";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((favorite) => favorite !== action.payload),
        ],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [charactersReducer, dispatchCharactersReducer] = useReducer(
    favoriteReducer,
    initialState
  );

  const handleFavorite = (character) => {
    dispatchCharactersReducer({
      type: !!isCharacterInFavorites(character)
        ? "REMOVE_FROM_FAVORITES"
        : "ADD_TO_FAVORITES",
      payload: character,
    });
  };

  const isCharacterInFavorites = (character) =>
    charactersReducer.favorites.find(
      (favoriteCharacter) => favoriteCharacter.id === character.id
    );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharactersData(data.results));
  }, []);

  return (
    <div className="characters-container">
      <div className="characters">
        {charactersData.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleFavorite={handleFavorite}
            isCharacterInFavorites={!!isCharacterInFavorites(character)}
          />
        ))}
      </div>
      <div className="characters-favorites">
        <div className="favorite-character">
          <h2>Favoritos</h2>
          <ul>
            {charactersReducer.favorites.map((favoriteCharacter) => (
              <li key={favoriteCharacter.id}>{favoriteCharacter.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characters;
