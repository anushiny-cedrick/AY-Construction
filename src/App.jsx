import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import OurServices from './components/ServicesSection/OurServices'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/ContactForm'
import Home from './components/Pages/Homepages/Home'
import ProjectGallery from './components/ProjectCards/ProjectGallery'
import ProjectPage from './components/Pages/ProjectPage/ProjectPage'
import ContactForm from './components/Contact/ContactForm'
import AboutUs from './components/AboutUs/AboutUs'
import ProjectPage1 from './components/ProjectCards/ProjectPage1'
import InternshipSection from './components/Internship/InternshipSection'
import Chatbot from './components/Chatbot/Chatbot'

function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        {/* <Route path="/projects/:id" element={<ProjectPage />} /> */}
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects/:id" element={<ProjectPage1 />} />
        <Route path="/internship" element={<InternshipSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />


      </Routes>
      <Chatbot />
      <Footer />




      {/* <Hero />
      <OurServices />
      <Contact /> */}


    </>
  )
}

export default App
