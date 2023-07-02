import { useEffect, useState } from 'react';

import React from 'react';
import "../../styles/newsfeed.css";



const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    const fetchNews = async () => {
      try {
        const response = await fetch('https://crypto-news16.p.rapidapi.com/news/cryptoninjas');
        const data = await response.json();
        
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    // Rotate news every 10 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [news]);

  return (
    <div className="news-feed">
      <h2>Cryptocurrency News</h2>
      {news.length > 10 ? (
        <div className="carousel">
          {news.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
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


