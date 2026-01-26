export async function getAllPokemonNames() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  return data.results.map((pokemon: { name: string }) => pokemon.name);
}

export async function getPokemonData(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    type: data.types[0].type.name,
  };
}
