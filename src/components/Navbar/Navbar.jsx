import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <a className='logo' href="/">AY CONSTRUCTION</a>

            <ul className='navbar-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/aboutus">About US</a></li>
                <li><a href="/contact">Contact US</a></li>
            </ul>


        </nav>
    )
}

export default Navbar
