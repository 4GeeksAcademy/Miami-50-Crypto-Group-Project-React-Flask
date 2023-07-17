import { useEffect, useState } from "react";
import React from "react";
import "../../styles/newsfeed.css";
import axios from "axios";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const url = "https://crypto-news16.p.rapidapi.com/news/coindesk";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
      },
    };

    const fetchNews = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const initialArticles = news.slice(0, 3);

  return (
    <div className="news-feed">
      <h2>{currentDate}</h2>

      {initialArticles.map((item, index) => {
        return (
          <div key={index}>
            <h3>
              <a href={item.url}>{item.title}</a>
            </h3>
            <h5>{item.description}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default NewsFeed;
