import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';


export const Navbar = () => {
	

	
		
	return (
		<nav className="navbar">
			<div className="leftSide">
			<Link to="/">
				<span className="Logo h2">Crypto App</span>
			</Link>
			</div>
			<div className="rightSide">
				<input className="search" type="text" placeholder="Search Coins..."/>
				<button>Search</button>
				<div className="loginButton ml-auto">
					<Link to="/login"> 
						<button>Login Cryptotart</button>

					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;