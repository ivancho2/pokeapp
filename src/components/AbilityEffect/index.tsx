import { useAbilityEffect } from "../../hooks/usePokemon";
import { ModalInfo } from "../ModalInfo";

export const AbilityEffect = ({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) => {
  const { data: effect } = useAbilityEffect(url);

  return (
    <ModalInfo title="Efecto de la habilidad" onClose={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <p className="mb-4">{effect?.effect}</p>
      </div>
    </ModalInfo>
  );
};
