import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './cartPage.jsx'
import './index.css'
import Home from './homepage.jsx'
import Electronics from './electronicsPage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Home/>
    {/* <Electronics/> */}
  </React.StrictMode>,
)
