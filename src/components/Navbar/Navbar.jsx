import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <a className='logo' href="/home">AY CONSTRUCTION</a>

            <ul className='navbar-links'>
                <li><a href="/about">HOME</a></li>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/about">SERVICES</a></li>
                <li><a href="/about">PROJECST</a></li>
                <li><a href="/about">CONTACT US</a></li>
            </ul>


        </nav>
    )
}

export default Navbar
