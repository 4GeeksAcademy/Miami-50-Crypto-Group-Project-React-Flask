import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; // Assuming you have created the Context using React.createContext in your store
import "../../styles/card.css";
const Trending = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.startTrendingDataUpdate();
  }, []);

  const { trendingData } = store;

  if (!trendingData || trendingData.length === 0) {
    return null; // Render nothing if trendingData is empty
  }

  return (
    <div className="trending-container">
      <h2 className="centered">Trending</h2>
      <div className="scrollable-container">
        {trendingData.coins.map((coin) => (
          <div className="card" key={coin.item.id}>
            <img
              src={coin.item.large}
              alt={coin.item.name}
              className="thumbnail"
            />
            <h3>{coin.item.name}</h3>
            <p>Symbol: {coin.item.symbol}</p>
            <p>Market Cap Rank: {coin.item.market_cap_rank}</p>
            {/* Add other fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
