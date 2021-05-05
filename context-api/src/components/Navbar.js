import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          <h2> {user ? `Hi ${user.name}` : "Bienvenido"}</h2>
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={logout}>
            Cerrar Session
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            Iniciar Session
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
