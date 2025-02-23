import { CustomButton } from "../CustomButtom";

import "./styles.scss";

export const ModalInfo = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="modal-info">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 border-1 relative pt-12 pb-4 px-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-2xl text-gray-500 text-4xl cursor-pointer"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        {children}
        <CustomButton
          handleOnClick={onClose}
          className="mt-4 w-full text-white py-2 rounded"
          type="danger"
        >
          Cerrar
        </CustomButton>
      </div>
    </div>
  );
};
