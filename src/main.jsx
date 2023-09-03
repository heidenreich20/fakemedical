import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Nav />
      <Hero />
    </>
  </React.StrictMode>
)
