export interface Pokemon {
  id: number;
  name: string;
  type: string;
}

export function displayPokemon(pokemon: Pokemon) {
  return `
  <pokemon-card id="${pokemon.id}">
    <h2>${pokemon.name}</h2>
    <p>Type: ${pokemon.type}</p>
  </pokemon-card>
  `;
}
