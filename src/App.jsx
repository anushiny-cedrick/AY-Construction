import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import OurServices from './components/ServicesSection/OurServices'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <>

      <Navbar />
      <Hero />
      <OurServices />
      <Contact />
      <Footer />

    </>
  )
}

export default App
