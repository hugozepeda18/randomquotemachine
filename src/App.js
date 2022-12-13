import { useState, useEffect } from 'react'
import axios from "axios"
import { SocialIcon } from 'react-social-icons';

import './App.css';

function App() {

  const [quote, setQuote] = useState({})

  //USE EFFECTS
  useEffect(() => {
    console.log('API CALL')
    axios
      .get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data)
      })
      .catch(e => <h1>Please reload the page</h1>)
  }, [])

  const handleQuoteChange = (event) => {
    axios
      .get('https://api.quotable.io/random')
      .then(response => {
        console.log(response.data)
        setQuote(response.data)
        console.log(quote)
      })
      .catch(e => <h1>Please reload the page</h1>)
  }

  return (
    <div id="quote-box">
        <div id="text">
          <p>"{quote.content}"</p>
        </div>
        <div id="author">
          <p>- {quote.author}</p>
        </div>
        <div id="tweet-quote">
          <SocialIcon url="twitter.com/intent/tweet" target="_blank" fgColor="white" />
        </div>
        <button id="new-quote" type="button" onClick={handleQuoteChange}>New quote</button>
    </div>
  );
}

export default App;
