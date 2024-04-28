import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Joke from './jokes.jsx'
import Currency from'./currency.jsx'
import Stopwatch from'./stopwatch.jsx'
import Dict from './dict.jsx'
import Quote from './quote.jsx'
import File from './form.jsx'
import Weather from './weather.jsx'
import Player from './assessment.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Joke/> */}
    {/* <Currency/> */}
    {/* <Dict/> */}
    {/* <Stopwatch/> */}
    {/* <Quote/> */}
    {/* <File/> */}
    <Weather/>
    {/* <Player/> */}
  </React.StrictMode>,
)
