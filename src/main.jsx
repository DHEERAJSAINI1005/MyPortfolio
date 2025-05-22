import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from "./Routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllRoutes/>
  </React.StrictMode>
)
