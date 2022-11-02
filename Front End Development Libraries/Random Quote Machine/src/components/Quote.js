import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
  })

  const getQuote = () => {
    fetch("https://api.quotable.io/random?maxLength=50")
      .then(res => res.json())
      .then(data => {

        setQuote({text: data.content, author: data.author})
      });
  }

  let colorsArr = [
    "#147562",
    "#338a58",
    "#2c3e50",
    "#b87409",
    "#c44437",
    "#724585",
    "#ba4e4a",
    "#342224",
    "#59232c",
    "#96925a",
    "#77b1a9",
    "#588a3e",
    "#606c38",
    "#bc6c25",
    "#dda15e",
    "#264653",
    "#e76f51",
    "#457b9d",
    "#1d3557",
    "#003049",
    "#6d6875",
    "#b5838d",
    "#adc178",
    "#386641",
    "#bc4749",
    "#3c6e71"
  ];

  const getRandomColor = () => {
    let randomIndex = Math.floor(Math.random() * colorsArr.length);
    let randomColor = colorsArr[randomIndex];
    document.documentElement.style.setProperty('--primary-color', randomColor);
  }

  useEffect(() => {
    getQuote();
  }, [])

  const getNewQuote = () => {
    getQuote();
    getRandomColor();
  }

  return (
    <div id="quote-box">
      <div id="text-container">
        <div id="text">{quote.text}</div>
        <div id="author">-{quote.author}</div>
      </div>

      <div id="link-container">
        <a href="twitter.com/intent/tweet" target="_top" id="tweet-quote">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <button id="new-quote" onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default Quote;
