const CharacterCard = ({
  character,
  handleFavorite,
  isCharacterInFavorites,
}) => {
  return (
    <div className="character">
      <p className="character-title">
        <strong>{character.name}</strong> ({character.species})
      </p>
      <img src={character.image} alt={character.name} width={100} />
      <button
        className={isCharacterInFavorites ? "red-color" : "green-color"}
        onClick={() => handleFavorite(character)}
      >
        {isCharacterInFavorites ? "Remove from favorite" : "Add to favorite"}
      </button>
    </div>
  );
};

export default CharacterCard;
