import usePokemon from "../hooks/usePokemon";

export default function Dummy1() {
  const { pokemon, loading, error } = usePokemon();
  return (
    <div>
      <h1>Dummy Component 1</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {pokemon && <p>{JSON.stringify(pokemon, null, 2)}</p>}
    </div>
  );
}
