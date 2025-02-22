import { useState } from "react";

import { PokemonTable } from "./components/PokemonTable";

export default function App() {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Pokédex</h1>

        <input
          type="text"
          placeholder="Buscar Pokémon..."
          className="mb-4 p-2 w-full rounded border"
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
}
