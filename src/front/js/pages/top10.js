import React from "react";
import "../../styles/topbottom.css";

export const Top10 = () => {

	return (
		<div className="text-center mt-5">
			<h1>Top 10!</h1>
			<table className="table">
				<thead>
					<tr>
					<th scope="col">Name</th>
					<th scope="col">Price</th>
					<th scope="col">Change</th>
					<th scope="col">Market Cap</th>
					<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<th scope="row">First</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Second</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Third</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Fourth</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Fifth</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Sixth</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Seventh</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Eighth</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Ninth</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
					<tr>
					<th scope="row">Tenth</th>
					<td>$</td>
					<td>%</td>
					<td>$</td>
					<td><button>Buy/Sell</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};