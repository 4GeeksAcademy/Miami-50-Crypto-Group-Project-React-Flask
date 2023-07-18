import React from "react";
import "../../styles/topbottom.css";

export const Top10 = () => {

	return (
		<div className="text-center mt-5">
			<h1>Top 10</h1>
			<table className="table">
				<thead>
					<tr>
					<th scope="col">Name</th>
					<th scope="col">Current Price</th>
					<th scope="col">Market Cap</th>
					<th scope="col">24h Price Change</th>
					<th scope="col">24h Price Change Percentage</th>
					<th scope="col">Last Updated</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
					<tr>
					<th scope="row"><img src={crypto.image} alt={crypto.name} className="thumbnail" />{crypto.name}</th>
					<td>${crypto.current_price}</td>
					<td>${crypto.market_cap}</td>
					<td>{crypto.price_change_24h}</td>
					<td>{crypto.price_change_percentage_24h}%</td>
					<td>{crypto.last_updated}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};