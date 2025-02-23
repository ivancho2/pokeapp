import React, { Suspense, useState } from "react";

import { usePokemonList } from "./../../hooks/usePokemon";
import { CustomButton } from "../CustomButtom";
import { POKEMON_LIST_PAGINATION, POKEMON_SPRITE_URL } from "../../constants";

const PokemonDetails = React.lazy(() => import("../PokemonDetails"));
import "./styles.scss";

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
    return <div className="text-red-500 py-4">Error al cargar los pokemones</div>;

  return (
    <div>
      <div className="pokemon-table">
        {pokemons?.map((pokemon) => (
          <div
            key={pokemon.name}
            className="pokemon-card"
            onDoubleClick={() => setSelectedPokemon(pokemon.name)}
          >
            <img
              src={`${POKEMON_SPRITE_URL}/${pokemon.url.split("/")[6]}.png`}
              alt={pokemon.name}
              className="mx-auto h-32 w-32 object-contain"
            />
            <h2 className="text-center font-bold mt-3 capitalize text-lg text-pokemon-red">
              {pokemon.name}
            </h2>
          </div>
        ))}
      </div>

      {!searchTerm && (
        <div className="flex justify-center gap-4 mt-8">
          <CustomButton
            handleOnClick={() =>
              onPaginate(Math.max(0, offset - POKEMON_LIST_PAGINATION.LIMIT))
            }
            type="secondary"
            disabled={offset === 0}
          >
            ← Anterior
          </CustomButton>
          <CustomButton
            handleOnClick={() =>
              onPaginate(offset + POKEMON_LIST_PAGINATION.LIMIT)
            }
            type="secondary"
          >
            Siguiente →
          </CustomButton>
        </div>
      )}
      <Suspense>
        {selectedPokemon && (
          <PokemonDetails
            name={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </Suspense>
    </div>
  );
};
