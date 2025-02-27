import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import OurServices from './components/ServicesSection/OurServices'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Home from './components/Pages/Homepages/Home'
import ProjectGallery from './components/ProjectCards/ProjectGallery'
import ProjectPage from './components/Pages/ProjectPage/ProjectPage'

function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />




      {/* <Hero />
      <OurServices />
      <Contact /> */}


    </>
  )
}

export default App
