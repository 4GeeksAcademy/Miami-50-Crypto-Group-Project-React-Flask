import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../../styles/card.css";

const CryptoCard = ({ searchTerm }) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [filteredCryptoData, setFilteredCryptoData] = useState([]);
  const [favoriteCardIds, setFavoriteCardIds] = useState([]);
  useEffect(() => {
    if (!store.token || store.token === "" || store.token === undefined) {
      history("/login");
    } else {
      actions.getFavoriteCards().then((data) => {
        setFavoriteCardIds(data.map((card) => card.id));
      });
    }
  }, [store.token, history]);

  // useEffect(() => {
  //   actions.startCryptoDataUpdate();
  //   actions.getFavoriteCards().then((data) => {
  //     setFavoriteCardIds(data);
  //   });

  //   return () => {};
  // }, []);

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

  const handleAddFavorite = (uniqueId, name) => {
    const inputPrice = parseFloat(
      prompt("Enter a price for this favorite (optional):")
    );

    if (!favoriteCardIds.includes(uniqueId)) {
      actions
        .addFavoriteCard(uniqueId, inputPrice) // Pass inputPrice here
        .then(() => {
          setFavoriteCardIds([...favoriteCardIds, uniqueId]);
        })
        .catch((error) => {
          console.error("Error adding favorite card:", error);
        });
    }
  };

  // Function to handle removing a card from favorites
  const handleRemoveFavorite = (uniqueId) => {
    if (favoriteCardIds.includes(uniqueId)) {
      actions.removeFavoriteCard(uniqueId);
      setFavoriteCardIds(favoriteCardIds.filter((id) => id !== uniqueId));
    }
  };

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
            <button
              className="favorite-button"
              onClick={() => {
                if (favoriteCardIds.includes(crypto.uniqueId)) {
                  handleRemoveFavorite(crypto.uniqueId);
                } else {
                  handleAddFavorite(crypto.uniqueId, crypto.name); // Pass the card name
                }
              }}
            >
              {favoriteCardIds.includes(crypto.uniqueId) ? (
                <FaHeart color="red" size={24} />
              ) : (
                <FaRegHeart size={24} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCard;
