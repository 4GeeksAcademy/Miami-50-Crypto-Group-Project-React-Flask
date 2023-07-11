import { useEffect, useState } from 'react';

import React from 'react';
import "../../styles/newsfeed.css";
import axios from 'axios';




const NewsFeed = () => {
    
    const [news, setNews] = useState([]);
    
    
      
    useEffect(() => {
      const url = 'https://crypto-news16.p.rapidapi.com/news/coindesk';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
	}
};
const fetchNews = async  () => {
try {

	const response = await fetch(url, options);
	const result = await response.json();
	setNews(result)
  console.log(result);
} catch (error) {
	console.error(error);
}}
fetchNews()
    //   const options = {
    //     method: 'GET',
    //     url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
    //     headers: {
    //       'X-RapidAPI-Key': 
    //       'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    //     }
    //   }

    // axios.request(options).then((response) => {
    //   console.log(response.data)
    //   setNews(response.data)
    // }).catch((error) => {
    //   console.error(error)
    // })
    // const news = async () => {
    //   const response = await setNews();
    //   const data = response.data;
    //   console.log(data);
    //   setPosts(data);
    // };
    // setNews();
    }, [])
      // console.log(news)
      
      const initialArticles = 
        news.slice(0,3);
      
      
    
    return(
     
      <div className="news-feed">
        <h2>Cryptocurrency News</h2>
        
        {initialArticles.map((item,index) => {
          return(
            <div key={index}>
              <h3><a href={item.url}>{item.title}</a>
              <h5>{item.description}</h5></h3>
              
            </div>
          )
        })}
        
      </div>
    )
     }
    
export default NewsFeed;

    
