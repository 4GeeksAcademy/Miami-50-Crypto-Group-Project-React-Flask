import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../../styles/card.css";

const Portfolio = () => {
  const { store, actions } = useContext(Context);
  const [favoriteCards, setFavoriteCards] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    if (!store.token || store.token === "" || store.token === undefined) {
      history("/login");
    } else {
      // Fetch the user's favorite cards from the API using actions
      actions
        .getFavoriteCards()
        .then((data) => setFavoriteCards(data))
        .catch((error) =>
          console.error("Error fetching favorite cards:", error)
        );
    }
  }, [store.token, history]);

  // Function to find a favorite card by its uniqueId
  const findFavoriteCard = (uniqueId) =>
    store.cryptoData.find((crypto) => crypto.uniqueId === uniqueId);

  return (
    <div className="portfolio">
      <h2 className="centered">Favorite Assets</h2>
      <div className="card-container">
        {favoriteCards.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favoriteCards.map((card) => {
            const cryptoData = findFavoriteCard(card.id);
            if (!cryptoData) {
              return null; // Skip if cryptoData is not found
            }
            return (
              <div className="card" key={cryptoData.id}>
                <img
                  src={cryptoData.image}
                  alt={cryptoData.name}
                  className="thumbnail"
                />
                <h3>
                  <span className="">{cryptoData.name}</span>
                </h3>
                <p>
                  Current Price:{" "}
                  <span className="bold-text">
                    ${cryptoData.current_price.toLocaleString()}
                  </span>
                </p>
                <p>
                  Market Cap:{" "}
                  <span className="bold-text">
                    ${cryptoData.market_cap.toLocaleString()}
                  </span>
                </p>
                <p>
                  24h Price Change:{" "}
                  <span
                    className={
                      cryptoData.price_change_24h < 0
                        ? "negative bold-text"
                        : "positive bold-text"
                    }
                  >
                    {cryptoData.price_change_24h.toFixed(8)}
                  </span>
                </p>
                <p>
                  24h Price Change Percentage:{" "}
                  <span
                    className={
                      cryptoData.price_change_percentage_24h < 0
                        ? "negative bold-text"
                        : "positive bold-text"
                    }
                  >
                    {cryptoData.price_change_percentage_24h}%
                  </span>
                </p>
                <p>
                  Last Updated:{" "}
                  <span className="bold-text">{cryptoData.last_updated}</span>
                </p>
                <button
                  className="favorite-button"
                  onClick={() => {
                    // Handle favorite button action if needed
                  }}
                >
                  {/* Display the favorite button icon here */}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Portfolio;
