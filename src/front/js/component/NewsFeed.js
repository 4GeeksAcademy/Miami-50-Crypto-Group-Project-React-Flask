import { useEffect, useState } from 'react';

import React from 'react';
import "../../styles/newsfeed.css";
import axios from 'axios';




const NewsFeed = () => {
    const [news, setNews] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const axios = require('axios');

      const options = {
        method: 'GET',
        url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
  }
}

    axios.request(options).then((response) => {
      console.log(response.data)
      setNews(response.data)
    }).catch((error) => {
      console.error(error)
    });
    }, [])
      console.log(news)

   
    return (
      <div className="news-feed">
        <h2>Cryptocurrency News</h2>
        {news.length > 0 ? (
          <div className="carousel">
            {news.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              >
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p>Source: {item.source}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    );
  };

export default NewsFeed;


