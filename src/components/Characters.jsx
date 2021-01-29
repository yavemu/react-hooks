import {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  Fragment,
} from "react";
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
  const [searchCharacter, setSearchCharacter] = useState("");
  const searchCharacterInput = useRef(null);

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

  const handleSearchCharacter = () => {
    setSearchCharacter(searchCharacterInput.current.value);
  };

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
    <Fragment>
      <div className="SearchCharacter">
        <input
          type="text"
          value={searchCharacter}
          id="searchCharacter"
          placeholder="Search character"
          onChange={handleSearchCharacter}
          ref={searchCharacterInput}
        />
      </div>
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
