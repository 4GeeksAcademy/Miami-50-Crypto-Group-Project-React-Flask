import React from "react";
import NewsFeed from "../component/NewsFeed";
import CryptoCard from "../component/CryptoCard";
import "../../styles/home.css";
const Home = () => {
  return (
    <div className="content-container">
      <div className="home">
        <h2 className="prices-header">Prices</h2>
        <CryptoCard />
        <NewsFeed />
      </div>
    </div>
  );
};

export default Home;
