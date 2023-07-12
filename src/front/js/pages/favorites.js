import React from "react";
import "../../styles/favorite.css";

export const Favorites = ({ fav }) => {

	return (
		<div className="text-center mt-5">
			<h1>Favorites</h1>
			<div className="d-flex justify-content-center">
			  <div className="container">
				<div className="row">
				  {Array.isArray(fav) && fav.map((favItem, index) => (
					<div className="col" key={index}>
					  <div className="card">
						<div className="card-body">
						  <h5 className="card-title">Name{asset.icon}{favItem}</h5>
						  <div className="card-text" id="chart">Chart{asset.chart}</div>
						  <p className="card-text" id="percent">Change{asset.change}</p>
						  <h6 className="card-text" id="amount">Amount{asset.amount}</h6>
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