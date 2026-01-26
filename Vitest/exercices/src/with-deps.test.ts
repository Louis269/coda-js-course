import {} from "vitest";
import { loadPokemonList } from "./with-dep";

vi.mock("./api", () => {
  return {};
});

test("Load pokemon list", async () => {
  const pokemon = await loadPokemonList();

  expect(pokemon).toHaveLength(10);
});
