import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.jpg/"
const Navbar = () => {
    return (
        <nav className='navbar'>


            <a className='logo' href="/">
                <img src={logo} alt="logo" width={90} height={90} /></a>


            <ul className='navbar-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/internship">Internship</a></li>
                <li><a href="/aboutus">About US</a></li>
                <li><a href="/contact">Contact US</a></li>
            </ul>


        </nav>
    )
}

export default Navbar
