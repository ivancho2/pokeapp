export const InputSearch = ({
  setSearchTerm,
}: {
  setSearchTerm: (value: string) => void;
}) => {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      className="mb-4 p-2 w-full rounded border"
      tabIndex={0}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
