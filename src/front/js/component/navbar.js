import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleLogout = () => {
    // Perform logout action here
  };

  return (
    <nav className="navbar">
      <div className="leftSide">
        <Link to="/">
          <span className="Logo h2">Crypto App</span>
        </Link>
      </div>
      <div className="rightSide">
        <input className="search" type="text" placeholder="Search Coins..." />
        <button>Search</button>
        <div className="loginButton ml-auto">
          {store.token ? (
            <button onClick={() => actions.logout()}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;