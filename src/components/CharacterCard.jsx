const CharacterCard = ({ character }) => {
  return (
    <div className="character">
      <p className="character-title">
        <strong>{character.name}</strong> ({character.species})
      </p>
      <img src={character.image} alt={character.name} width={100} />
    </div>
  );
};

export default CharacterCard;
