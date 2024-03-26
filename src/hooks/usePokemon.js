import { useContext } from "react";
import { PokemonContext } from "../components/PokemonProvider";

const usePokemon = () => {
  return useContext(PokemonContext);
};

export default usePokemon;
