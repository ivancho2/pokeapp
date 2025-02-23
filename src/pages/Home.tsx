import { useState } from "react";

import { PokemonTable } from "./../components/PokemonTable";

import { UserDropdown } from "../components/UserDropdown";

export const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Pokédex</h1>
          <UserDropdown />
        </div>

        <input
          type="text"
          placeholder="Buscar Pokémon..."
          className="mb-4 p-2 w-full rounded border"
          tabIndex={0}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <PokemonTable
          offset={offset}
          searchTerm={searchTerm}
          onPaginate={setOffset}
        />
      </div>
    </div>
  );
};
