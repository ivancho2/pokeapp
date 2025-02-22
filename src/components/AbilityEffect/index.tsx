import { useAbilityEffect } from "../../hooks/usePokemon";

export const AbilityEffect = ({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) => {
  const { data: effect } = useAbilityEffect(url);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Efecto de la habilidad</h3>
        <p className="mb-4">{effect?.effect}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
