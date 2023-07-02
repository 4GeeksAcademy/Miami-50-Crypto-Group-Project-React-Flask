import { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import axios from 'axios';
import React from 'react';
import "../../styles/newsfeed.css";

// import React, { useState, useEffect } from 'react';

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


// function NewsFeed() {
//     useEffect(() => {
//         // const axios = require('axios');
//         const [article, setArticles] = useState(null);


//         const options = {
//           method: 'GET',
//           url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
//           headers: {
//             'X-RapidAPI-Key': 'db1b99c98cmsh203f74aff1545ebp1fc84ejsn30149819764c',
//             'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
//           }
//         }
        
//         try {
//             const response = then.axios.request(options);
//             setArticles(response.data)
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         };

//     },[])
//        const manyarticles = article?.slice(0,7)
// }
//   return (
//     <div className="news-feed">
//         {manyarticles?.map((article, _index) => (
//         <div key={_index}>
//             <a href={article.url}><p>{article.title}</p></a>
//             </div>))}
//     </div>
  
//   );




    


// export default NewsFeed