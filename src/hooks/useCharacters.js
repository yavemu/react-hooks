import { useEffect, useState } from "react";

const useCharacters = (url) => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharactersData(data.results));
  }, [url]);

  return charactersData;
};

export default useCharacters;
