import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/card.css";

const CryptoCard = ({ searchTerm }) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [filteredCryptoData, setFilteredCryptoData] = useState([]);

  useEffect(() => {
    if (!store.token || store.token === "" || store.token === undefined) {
      history("/login");
    }
  }, [store.token, history]);

  useEffect(() => {
    actions.startCryptoDataUpdate();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCryptoData(store.cryptoData);
    } else {
      const filteredData = store.cryptoData.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCryptoData(filteredData);
    }
  }, [searchTerm, store.cryptoData]);

  if (!filteredCryptoData || filteredCryptoData.length === 0) {
    return <p>No matching cryptocurrencies found.</p>;
  }

  return (
    <div className="card-container">
      <div className="scrollable-container">
        {filteredCryptoData.map((crypto) => (
          <div className="card" key={crypto.id}>
            <img src={crypto.image} alt={crypto.name} className="thumbnail" />
            <h3>
              <span className="">{crypto.name}</span>
            </h3>
            <p>
              Current Price:{" "}
              <span className="bold-text">
                ${crypto.current_price.toLocaleString()}
              </span>
            </p>
            <p>
              Market Cap:{" "}
              <span className="bold-text">
                ${crypto.market_cap.toLocaleString()}
              </span>
            </p>
            <p>
              24h Price Change:{" "}
              <span
                className={
                  crypto.price_change_24h < 0
                    ? "negative bold-text"
                    : "positive bold-text"
                }
              >
                {crypto.price_change_24h.toFixed(8)}
              </span>
            </p>
            <p>
              24h Price Change Percentage:{" "}
              <span
                className={
                  crypto.price_change_percentage_24h < 0
                    ? "negative bold-text"
                    : "positive bold-text"
                }
              >
                {crypto.price_change_percentage_24h}%
              </span>
            </p>
            <p>
              Last Updated:{" "}
              <span className="bold-text">{crypto.last_updated}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCard;
