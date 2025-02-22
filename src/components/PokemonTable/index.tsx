import { useState } from "react";

import { PokemonDetails } from "../PokemonDetails";
import { usePokemonList } from "./../../hooks/usePokemon";

export const PokemonTable = ({
  offset,
  searchTerm,
  onPaginate,
}: {
  offset: number;
  searchTerm: string;
  onPaginate: (offset: number) => void;
}) => {
  const {
    data: pokemons,
    isLoading,
    isError,
  } = usePokemonList(offset, searchTerm);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  if (isLoading) return <div className="text-center py-4">Cargando...</div>;
  if (isError)
    return <div className="text-red-500 py-4">Error al cargar Pokémon</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pokemons?.map((pokemon) => (
          <div
            key={pokemon.name}
            className="pokemon-card p-4 cursor-pointer"
            onDoubleClick={() => setSelectedPokemon(pokemon.name)}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon.url.split('/')[6]
              }.png`}
              alt={pokemon.name}
              className="mx-auto h-32 w-32 object-contain hover:scale-110 transition-transform"
            />
            <h2 className="text-center font-bold mt-3 capitalize text-lg text-pokemon-red">
              {pokemon.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Botones de paginación mejorados */}
      {!searchTerm && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => onPaginate(Math.max(0, offset - 10))}
            disabled={offset === 0}
            className="px-6 py-2 bg-pokemon-blue text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
          >
            ← Anterior
          </button>
          <button
            onClick={() => onPaginate(offset + 10)}
            className="px-6 py-2 bg-pokemon-red text-white rounded-full hover:bg-red-700"
          >
            Siguiente →
          </button>
        </div>
      )}

      {selectedPokemon && (
        <PokemonDetails
          name={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};
