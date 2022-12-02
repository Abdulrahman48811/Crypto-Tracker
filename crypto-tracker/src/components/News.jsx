import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import TweetCard from "react-tweet-card";
/// api:Returns the last 50 timeline tweets from the official Twitter profile for a given coin.
const News = () => {
  const [data, setData] = useState(null);
  const url = "https://api.coinpaprika.com/v1/coins/btc-bitcoin/twitter";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
    // eslint-disable-next-line
  }, []);

  if (!data) return null;

  return (
    <div className="news">
      <h1 className="whatiscrypto">"Social Media On<span>Crypto Currency</span>"</h1>
      <Container>
        <TweetCard
        engagement={{
          retweets:data[0].retweet_count,
          likes: data[0].like_count

        }}
          author={{
            username: data[0].user_name,
            image: data[0].user_image_link,
            
          }}
          tweet={data[0].status}
          time={data[0].date}
          
          permalink={data[0].status_link}
          colors={{
            primary: 'black',
            secondary: '#08004d',
            accent: '#ffffd8',
            
            
          }}
          
        ></TweetCard>
      </Container>
    </div>
  );
};

export default News;
