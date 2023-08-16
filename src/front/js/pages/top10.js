import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/topbottom.css";

export const Top10 = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
      actions.startCryptoDataUpdate();
    }, []);
  
    const { cryptoData } = store;

    if (!cryptoData || cryptoData.length === 0) {
        return null;
    }

    const sortedCryptoData = cryptoData.slice().sort((a, b) => b.market_cap - a.market_cap);

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
                    {sortedCryptoData.slice(0, 10).map(crypto => (
                        <tr key={crypto.id}>
                            <th scope="row">
                                <img src={crypto.image} alt={crypto.name} className="thumbnail" />
                                {crypto.name}
                            </th>
                            <td>${crypto.current_price}</td>
                            <td>${crypto.market_cap}</td>
                            <td>{crypto.price_change_24h}</td>
                            <td>{crypto.price_change_percentage_24h}%</td>
                            <td>{crypto.last_updated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
