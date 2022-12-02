import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import YoutubeEmbed from "../stores/YoutubeEmbed";

const Halal = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  if (!data) return null;

  return (
    <div className="featured">
      <h1 className="whatiscrypto">
        "<span>Halal</span> Options"
      </h1>
      <div className="ftrd">
        {/* {left} */}
        <div className="left-f">
          <h4>
            <b>
              Investing In Crypto
              <bdo className="Word-CLR"> Halal or Haram?</bdo>
            </b>
          </h4>
          <p className="para">
            Overall, our view is that investing in crypto is halal as long as
            the project itself is halal.<br></br>
            <br></br>There is some nuance when it comes to analysing which
            cryptos are halal and the different opinions that are held. You can
            check out a more detailed article <a className="here" href="https://www.washingtonpost.com/technology/2022/03/08/bitcoin-crypto-islam-haram/" target="_blank" rel="noreferrer">here</a><span>&nbsp;</span>on the permissibility of
            crypto. Also, another article covering the <a className="here" href="https://www.washingtonpost.com/technology/2022/03/08/bitcoin-crypto-islam-haram/" target="_blank" rel="noreferrer">differing views</a><span>&nbsp;</span>of the
            permissibility of crypto.
          </p>
          <div className="App">
            <YoutubeEmbed embedId="zzf9KMR4mfM" />
          </div>
        </div>

        {/* {right} */}

        <div className="right-f">
          <Link className="linkto" to={`/${data[16].id}`}>
            <div className="card">
              <div className="top">
                {/* <img src={BTC} alt="" /> */}
                <img src={data[16].image} alt="" />
              </div>
              <div>
                <h5>{data[16].name}</h5>
                <p>${data[16].current_price.toLocaleString()}</p>
              </div>

              {data[16].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[16].price_change_percentage_24h.toFixed(3)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[16].price_change_percentage_24h.toFixed(3)}%
                </span>
              )}
            </div>
          </Link>
          <Link className="linkto" to={`/${data[8].id}`}>
            <div className="card">
              <div className="top">
                {/* <img src={BTC} alt="" /> */}
                <img src={data[8].image} alt="" />
              </div>
              <div>
                <h5>{data[8].name}</h5>
                <p>${data[8].current_price.toLocaleString()}</p>
              </div>

              {data[8].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[8].price_change_percentage_24h.toFixed(3)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[8].price_change_percentage_24h.toFixed(3)}%
                </span>
              )}
            </div>
          </Link>
          <Link className="linkto" to={`/${data[7].id}`}>
            <div className="card">
              <div className="top">
                {/* <img src={BTC} alt="" /> */}
                <img src={data[7].image} alt="" />
              </div>
              <div>
                <h5>{data[7].name}</h5>
                <p>${data[7].current_price.toLocaleString()}</p>
              </div>

              {data[7].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[7].price_change_percentage_24h.toFixed(3)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[7].price_change_percentage_24h.toFixed(3)}%
                </span>
              )}
            </div>
          </Link>
          <Link className="linkto" to={`/${data[14].id}`}>
            <div className="card">
              <div className="top">
                <img src={data[14].image} alt="" />
              </div>
              <div>
                <h5>{data[14].name}</h5>
                <p>${data[14].current_price.toLocaleString()}</p>
              </div>

              {data[14].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[14].price_change_percentage_24h.toFixed(3)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[14].price_change_percentage_24h.toFixed(3)}%
                </span>
              )}
            </div>
          </Link>
          <Link className="linkto" to={`/${data[10].id}`}>
            <div className="card">
              <div className="top">
                {/* <img src={BTC} alt="" /> */}
                <img src={data[10].image} alt="" />
              </div>
              <div>
                <h5>{data[10].name}</h5>
                <p>${data[10].current_price.toLocaleString()}</p>
              </div>

              {data[10].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[10].price_change_percentage_24h.toFixed(3)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[10].price_change_percentage_24h.toFixed(3)}%
                </span>
              )}
            </div>
          </Link>
          <Link className="linkto" to={`/${data[17].id}`}>
            <div className="card">
              <div className="top">
                {/* <img src={BTC} alt="" /> */}
                <img src={data[17].image} alt="" />
              </div>
              <div>
                <h5>{data[17].name}</h5>
                <p>${data[17].current_price.toLocaleString()}</p>
              </div>

              {data[17].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[17].price_change_percentage_24h.toFixed(3)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[17].price_change_percentage_24h.toFixed(3)}%
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Halal;
