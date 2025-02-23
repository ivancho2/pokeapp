import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../utils/auth";
import { CustomButton } from "../components/CustomButtom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      loginUser(username);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Pokédex Login</h1>
        <form
          aria-label="Formulario de inicio de sesión"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="w-full p-2 mb-4 border rounded"
            aria-label="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <CustomButton
            type="primary"
            btnType="submit"
            className="w-full text-white py-2"
            disabled={!username.trim()}
            customProps={{
              "data-testid": "login-button",
              "aria-label": "Ingresar",
            }}
          >
            Ingresar
          </CustomButton>
        </form>
      </div>
    </div>
  );
};
