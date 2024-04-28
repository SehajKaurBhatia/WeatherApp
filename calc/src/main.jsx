import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Quiz from './quiz.jsx'
import Product from './product.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
     <Product/>
    <Quiz/>
  </React.StrictMode>,
)
