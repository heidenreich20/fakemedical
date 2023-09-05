import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import './index.css'
import Specialties from './components/Specialties.jsx'
import Contact from './components/Contact.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Nav />
      <Hero />
      <AboutUs />
      <Specialties />
      <Contact />
      <Testimonials />
      <ContactForm />
    </>
  </React.StrictMode>
)
