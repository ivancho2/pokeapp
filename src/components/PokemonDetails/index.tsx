import { useState } from "react";

import { AbilityEffect } from "../AbilityEffect";
import { CustomButton } from "../CustomButtom";
import { ModalInfo } from "../ModalInfo";

import { usePokemonDetails } from "../../hooks/usePokemon";
import { capitalize } from "../../utils/string";
import { POKEMON_TYPES_COLORS } from "../../constants";

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
    <ModalInfo title="Detalles del Pokémon" onClose={onClose}>
      {pokemon && (
        <>
          <h2 className="text-3xl font-bold mb-4 text-center">
            #{pokemon.id} {pokemon.name}
          </h2>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            className="mx-auto mb-4 h-48 w-48"
            alt={pokemon.name}
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            {["weight", "height"].map((key) => (
              <div key={key} className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="font-semibold text-blue-400 capitalize">{key}</p>
                <p className="text-lg">
                  {key === "weight"
                    ? (pokemon[key] / 10).toFixed(1)
                    : key === "height"
                    ? pokemon.height
                    : null}
                  {key === "weight" ? " kg" : " m"}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <p className="font-semibold text-blue-400">Tipos:</p>
            <div className="flex gap-2 mt-2">
              {pokemon.types.map(({ type }) => {
                const colors =
                  POKEMON_TYPES_COLORS[
                    type.name as keyof typeof POKEMON_TYPES_COLORS
                  ];
                return (
                  <span
                    key={type.name}
                    className={`inline-flex items-center rounded-md ${colors.bg} px-2 py-1 text-xs font-medium ${colors.text} ring-1 ring-inset ${colors.ring}`}
                  >
                    {type.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold mb-2">Habilidades:</h3>
            {pokemon.abilities.map((ability) => (
              <CustomButton
                key={ability.ability.name}
                className="mr-2 mb-2 px-3 py-1"
                type="secondary"
                handleOnClick={() => setSelectedAbility(ability.ability.url)}
              >
                {capitalize(ability.ability.name)}
              </CustomButton>
            ))}
          </div>
        </>
      )}

      {selectedAbility && (
        <AbilityEffect
          url={selectedAbility}
          onClose={() => setSelectedAbility(null)}
        />
      )}
    </ModalInfo>
  );
};

export default PokemonDetails;
