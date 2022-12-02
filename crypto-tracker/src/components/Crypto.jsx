import React from "react";
// eslint-disable-next-line no-unused-vars
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// eslint-disable-next-line no-unused-vars
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function Crypto() {
  return (
    <div className="crypto-head">
      <h1 className="whatiscrypto">
        "What is <span>Crypto?</span>"
      </h1>
      <div className="crypto-container">
        {/* {left} */}

        <div className="left-c">
          <h2>About the currency calculator</h2>
          <p>
            <bde className="bold-text">
              Do you deal in shares in different currencies?{" "}
            </bde>
            <br></br>
            <br></br>
            Do you like to travel? Do you like to shop on foreign online shops?
            The currency calculator of Markets Insider is the ideal tool for
            you.<br></br>
            <br></br> With the currency calculator, you can quickly and easily
            convert amounts between any currencies. In total, there are about
            160 different currencies available on the currency calculator.{" "}
            <br></br>
            <br></br>Once you select the base and target currencies from the
            list and enter the desired amount into the provided field, the
            currency calculator immediately gives you the result. <br></br>
            <br></br>Additionally, you can also choose whether to calculate the
            result based on the current exchange rate or the exchange rate on a
            certain date. This way, the Markets Insider currency calculator
            allows you to search for historical exchange rates. The result
            provided by the currency calculator is displayed in a clearly
            arranged table. Here, the currency calculator shows the opening and
            closing rate as well as the lowest and highest rates for the
            respective date.
            <span id="dots">..</span>
            <span id="more">
              <br></br>
              <br></br>
              <bde className="bold-text">
                General information about currencies:
              </bde>
              <br></br>
              <br></br>
              Currencies have existed for several millennia; they arose
              primarily as a replacement for the ineffective barter trade. The
              functions that a currency took on (means of payment, value
              storage, unit of value) were essential to the development of an
              efficient economy with division of labor. In the beginning,
              different items were used as currency, including metals, pearls,
              shells or agricultural products. Minting of coins from precious
              metals was developed about 2500 years ago in ancient Greece; paper
              money has existed for about 1000 years. <br></br>
              <br></br> Today, almost every country has its own currency, with
              the exception of countries with a common currency (such as the
              Eurozone) or countries that have adopted a foreign currency (such
              as the euro in Kosovo). Thus, there are worldwide more than 160
              official currencies that can be traded on the currency market at
              constantly changing exchange rates.
              <br></br>
              <br></br> On the currency market, there is a larger trade volume
              than on the credit or the stock market. For decades, the most
              important base currencies of the world have been the U.S. dollar,
              the euro, the British pound and the Japanese yen.
            </span>
          </p>
          <button className="readmore" onClick={myFunction} id="myBtn">
            Read more
          </button>
        </div>


        {/* {right} */}


        <div className="right-c">
          <h2>About crypto currencies</h2>
          <p>
            <bde className="bold-text">What is blockchain technology? </bde>
            <br></br>
            <br></br>You've likely heard some of the following terms if you've
            paid attention to the world of finance: Cryptocurrency, Blockchain,
            Bitcoin, Bitcoin Cash, and Ethereum. But what do they mean? And why
            is cryptocurrency suddenly so hot? <br></br>
            <br></br>First, we'll explain the blockchain basics.<br></br>
            <br></br> As society become increasingly digital, financial services
            providers are looking to offer customers the same services to which
            they're accustomed, but in a more efficient, secure, and cost
            effective way. <br></br>
            <br></br>Enter blockchain technology. <br></br>
            <br></br>The origins of blockchain are a bit nebulous. A person or
            group of people known by the pseudonym Satoshi Nakomoto invented and
            released the tech in 2009 as a way to digitally and anonymously send
            payments between two parties without needing a third party to verify
            the transaction. It was initially designed to facilitate, authorize,
            and log the transfer of bitcoins and other cryptocurrencies.
            <span id="dots2">..</span>
            <span id="more2">
              <br></br>
              <br></br>
              <bde className="bold-text">
                How does blockchain technology work?{" "}
              </bde>{" "}
              <br></br>
              <br></br>Blockchain tech is actually rather easy to understand at
              its core. Essentially, it's a shared database populated with
              entries that must be confirmed and encrypted. Think of it as a
              kind of highly encrypted and verified shared Google Document, in
              which each entry in the sheet depends on a logical relationship to
              all its predecessors. Blockchain tech offers a way to securely and
              efficiently create a tamper-proof log of sensitive activity
              (anything from international money transfers to shareholder
              records). Blockchain's conceptual framework and underlying code is
              useful for a variety of financial processes because of the
              potential it has to give companies a secure, digital alternative
              to banking processes that are typically bureaucratic,
              time-consuming, paper-heavy, and expensive.<br></br>
              <br></br>{" "}
              <bde className="bold-text">What are cryptocurrencies?</bde>
              <br></br>
              <br></br> Cryptocurrencies are essentially just digital money,
              digital tools of exchange that use cryptography and the
              aforementioned blockchain technology to facilitate secure and
              anonymous transactions. There had been several iterations of
              cryptocurrency over the years, but Bitcoin truly thrust
              cryptocurrencies forward in the late 2000s. There are thousands of
              cryptocurrencies floating out on the market now, but Bitcoin is
              far and away the most popular.
            </span>
          </p>
          <button className="readmore" onClick={myFunction2} id="myBtn2">
            Read more
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default Crypto;
