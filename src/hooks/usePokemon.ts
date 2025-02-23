import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POKEMON_API_URL, POKEMON_LIST_PAGINATION } from "../constants";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string; url: string } }>;
  sprites: {
    front_default: string;
    other: { "official-artwork": { front_default: string } };
  };
}

interface AbilityEffect {
  effect: string;
}

// TODO: define and revie all constants an hoook for fetch data and paginate
// TODO: define ttl for cache

export const usePokemonList = (offset: number, searchTerm: string) => {
  return useQuery<Pokemon[]>({
    queryKey: ["pokemons", offset, searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(
        `${POKEMON_API_URL}?offset=${offset}&limit=${POKEMON_LIST_PAGINATION.LIMIT}`
      );
      return searchTerm
        ? data.results.filter((p: Pokemon) =>
            p.name.includes(searchTerm.toLowerCase())
          )
        : data.results.slice(0, POKEMON_LIST_PAGINATION.LIMIT);
    },
  });
};

export const usePokemonDetails = (name: string) => {
  return useQuery<PokemonDetails>({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const { data } = await axios.get(`${POKEMON_API_URL}/${name}`);
      return data;
    },
    enabled: !!name,
  });
};

export const useAbilityEffect = (url: string) => {
  return useQuery<AbilityEffect>({
    queryKey: ["ability", url],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data.effect_entries.find((e: any) => e.language.name === "en");
    },
    enabled: !!url,
  });
};
