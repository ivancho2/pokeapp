import { useState } from "react";

import { AbilityEffect } from "../AbilityEffect";
import { usePokemonDetails } from "../../hooks/usePokemon";

export const PokemonDetails = ({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) => {
  const { data: pokemon } = usePokemonDetails(name);
  const [selectedAbility, setSelectedAbility] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 border-4 border-pokemon-yellow">
        {pokemon && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-pokemon-blue text-center">
              #{pokemon.id} {pokemon.name}
            </h2>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              className="mx-auto mb-4 h-48 w-48"
              alt={pokemon.name}
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-semibold">Peso</p>
                <p className="text-lg">{(pokemon.weight / 10).toFixed(1)} kg</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-semibold">Altura</p>
                <p className="text-lg">{(pokemon.height / 10).toFixed(1)} m</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Tipos:</p>
              <div className="flex gap-2 mt-2">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className={`pokemon-type-badge bg-type-${type.name} text-white`}
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold mb-2">Habilidades:</h3>
              {pokemon.abilities.map((ability) => (
                <button
                  key={ability.ability.name}
                  onClick={() => setSelectedAbility(ability.ability.url)}
                  className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  {ability.ability.name}
                </button>
              ))}
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded"
        >
          Cerrar
        </button>

        {selectedAbility && (
          <AbilityEffect
            url={selectedAbility}
            onClose={() => setSelectedAbility(null)}
          />
        )}
      </div>
    </div>
  );
};
