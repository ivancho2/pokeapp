import { JSX } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";

import { checkAuth } from "./utils/auth";

import "./styles/common.scss";

export const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={
            <LoginGuard>
              <LoginPage />
            </LoginGuard>
          }
        />
        <Route
          path="/home"
          element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          }
        />
        <Route
          path="*"
          element={
            checkAuth() ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
};

// Componentes guard para protección de rutas
const AuthGuard = ({ children }: { children: JSX.Element }) => {
  return checkAuth() ? children : <Navigate to="/login" replace />;
};

const LoginGuard = ({ children }: { children: JSX.Element }) => {
  return !checkAuth() ? children : <Navigate to="/home" replace />;
};
