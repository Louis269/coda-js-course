import { getAllPokemonNames, getPokemonData } from "./api";
import { Pokemon } from "./simple";

export async function loadPokemonList(): Promise<Pokemon[]> {
  const names = await getAllPokemonNames();

  const pokemon = [];

  for (const name of names) {
    const data = await getPokemonData(name);
    if (!data) {
      continue;
    }
    pokemon.push(data);
  }

  return pokemon;
}
