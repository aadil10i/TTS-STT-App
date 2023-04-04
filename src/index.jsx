import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './pages/login.jsx'
import Main from './pages/main.jsx' // main components of page (text)
import './styles/index.css' // background css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
