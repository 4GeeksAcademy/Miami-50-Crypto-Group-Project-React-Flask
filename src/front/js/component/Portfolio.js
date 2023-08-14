import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Portfolio = () => {
  const { store, actions } = useContext(Context);
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    // Fetch the user's favorite cards from the API using actions
    actions
      .getFavoriteCards()
      .then((data) => setFavoriteCards(data))
      .catch((error) => console.error("Error fetching favorite cards:", error));
  }, []);

  return (
    <div className="portfolio">
      <h2>Your Favorite Cards</h2>
      <div className="card-container">
        {favoriteCards.map((card) => (
          <div className="card" key={card.id}>
            {/* Render card information here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
