const SearchCharacter = ({
  searchCharacter,
  searchCharacterInput,
  handleSearchCharacter,
}) => {
  return (
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
  );
};

export default SearchCharacter;
