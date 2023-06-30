import React from "react"
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar">
			<ul className="nav flex-column">
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/favorites">Favorites</Link>
				</li>
				<li className="nav-item">
					<Link to="/top">Top 10</Link>
				</li>
				<li className="nav-item">
					<Link to="/bottom">Bottom 10</Link>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;