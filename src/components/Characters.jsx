import {
  useState,
  useReducer,
  useMemo,
  useRef,
  Fragment,
  useCallback,
} from "react";
import CharacterCard from "./CharacterCard";
import SearchCharacter from "./SearchCharacter";
import useCharacters from "../hooks/useCharacters";

const API = "https://rickandmortyapi.com/api/character";
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
  const [charactersReducer, dispatchCharactersReducer] = useReducer(
    favoriteReducer,
    initialState
  );
  const [searchCharacter, setSearchCharacter] = useState("");
  const searchCharacterInput = useRef(null);
  const charactersData = useCharacters(API);

  /**** filteredCharacters without useMemo ****/
  // const filteredCharacters = charactersData.filter(
  //   (characterFiltered) => {
  //     return characterFiltered.name
  //       .toLowerCase()
  //       .includes(searchCharacter.toLowerCase());
  //   }
  // );

  /**** filteredCharacters with useMemo ****/
  const filteredCharacters = useMemo(
    () =>
      charactersData.filter((characterFiltered) => {
        return characterFiltered.name
          .toLowerCase()
          .includes(searchCharacter.toLowerCase());
      }),
    [charactersData, searchCharacter]
  );

  // const handleSearchCharacter = () => {
  //   setSearchCharacter(searchCharacterInput.current.value);
  // };

  const handleSearchCharacter = useCallback(() => {
    setSearchCharacter(searchCharacterInput.current.value);
  }, []);

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

  return (
    <Fragment>
      <SearchCharacter
        searchCharacter={searchCharacter}
        searchCharacterInput={searchCharacterInput}
        handleSearchCharacter={handleSearchCharacter}
      />
      <div className="characters-container">
        <div className="characters">
          {!filteredCharacters.length && <p>Characters not found</p>}
          {filteredCharacters.map((character) => (
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
            <h2>Favorites</h2>
            <ul>
              {charactersReducer.favorites.map((favoriteCharacter) => (
                <li key={favoriteCharacter.id}>{favoriteCharacter.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Characters;
