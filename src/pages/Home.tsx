import { useState } from "react";

import { UserDropdown } from "../components/UserDropdown";
import { InputSearch } from "../components/InputSearch";
import { PokemonTable } from "./../components/PokemonTable";

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
        <InputSearch setSearchTerm={setSearchTerm} />
        <PokemonTable
          offset={offset}
          searchTerm={searchTerm}
          onPaginate={setOffset}
        />
      </div>
    </div>
  );
};
