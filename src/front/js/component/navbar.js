import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tartLogo from "/workspaces/Miami-50-Crypto-Group-Project-React-Flask/src/front/img/tart.png";
import { Context } from "../store/appContext";
import "./navbar.css";

export const Navbar = ({ setSearchTerm }) => {
  const { store, actions } = useContext(Context);
  const [searchTermInput, setSearchTermInput] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout action here
  };

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTermInput(newSearchTerm);
    setSearchTerm(newSearchTerm); // Update the search term dynamically
    if (newSearchTerm === "") {
      navigate(-1); // Go back to the previous page
    } else {
      navigate("/allassets"); // Navigate to the /allassets page
    }
  };

  return (
    <nav className="navbar">
      <div className="leftSide">
        <Link to="/">
          <span className="Logo h2">CryptoTart</span>
        </Link>
      </div>
      <div className="rightSide">
        <input
          className="search"
          type="text"
          placeholder="Search Coins..."
          value={searchTermInput}
          onChange={handleSearch} // Use handleSearch on onChange event
        />

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
