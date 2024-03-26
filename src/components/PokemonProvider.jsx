import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchPokemon() {
      try {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await result.json();
        setPokemon(data.results);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
      setLoading(false);
    }
    fetchPokemon();
  }, []);

  console.log("Pokemon in Context: ", pokemon);

  const contextValue = {
    pokemon,
    error,
    loading
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
