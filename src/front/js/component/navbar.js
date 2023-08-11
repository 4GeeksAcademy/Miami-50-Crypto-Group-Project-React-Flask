import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./navbar.css";

export const Navbar = ({ setSearchTerm }) => {
  const { store, actions } = useContext(Context);
  const [searchTermInput, setSearchTermInput] = useState("bitcoin");

  const handleLogout = () => {
    // Perform logout action here
  };

  const handleSearch = () => {
    setSearchTerm(searchTermInput); // Update the search term using the provided function
  };

  return (
    <nav className="navbar">
      <div className="leftSide">
        <Link to="/">
          <span className="Logo h2">Crypto App</span>
        </Link>
      </div>
      <div className="rightSide">
        <input
          className="search"
          type="text"
          placeholder="Search Coins..."
          value={searchTermInput}
          onChange={(e) => setSearchTermInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
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
