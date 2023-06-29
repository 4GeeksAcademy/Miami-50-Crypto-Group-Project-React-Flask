import { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

function NewsFeed() {
    useEffect(() => {
        // const axios = require('axios');
        const [article, setArticles] = useState(null);


        const options = {
          method: 'GET',
          url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
          headers: {
            'X-RapidAPI-Key': 'db1b99c98cmsh203f74aff1545ebp1fc84ejsn30149819764c',
            'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
          }
        }
        
        try {
            const response = then.axios.request(options);
            setArticles(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        };

    },[])
       const manyarticles = article?.slice(0,7)
}
  return (
    <div className="news-feed">
        {manyarticles?.map((article, _index) => (
        <div key={_index}>
            <a href={article.url}><p>{article.title}</p></a>
            </div>))}
    </div>
  
  );




    


export default NewsFeed