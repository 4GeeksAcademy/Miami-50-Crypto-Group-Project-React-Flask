import React from "react";
import "../../styles/favorite.css";

export const Favorites = ({ fav }) => {

	return (
		<div className="text-center mt-5">
			<h1>Favorites</h1>
			<div className="d-flex justify-content-center">
			  <div className="container text-center">
				<div className="row">
				  {Array.isArray(fav) && fav.map((favItem, index) => (
					<div className="col" key={index}>
					  <div className="card">
						<div className="card-body">
						  <h5 className="card-title">{asset.icon}{favItem}</h5>
						  <p className="card-text">{asset.chart}</p>
						  <p className="card-text">{asset.change}</p>
						  <p className="card-text">{asset.amount}</p>
						</div>
					  </div>
					</div>
				  ))}
				</div>
			  </div>
			</div>
		</div>
	);
};