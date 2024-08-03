import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // pude comentar esto para que no se ejecute 2 vecez, pero preferi dejarlo asi.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
