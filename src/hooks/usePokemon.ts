import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export const usePokemonList = (offset: number, searchTerm: string) => {
  return useQuery<Pokemon[]>({
    queryKey: ["pokemons", offset, searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=200`
      );
      return searchTerm
        ? data.results.filter((p: Pokemon) =>
            p.name.includes(searchTerm.toLowerCase())
          )
        : data.results.slice(0, 10);
    },
  });
};

export const usePokemonDetails = (name: string) => {
  return useQuery<PokemonDetails>({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
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
