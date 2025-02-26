import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <div>
            <div className='heroSection'>
                <h3>Welcome to AY Construction <br /> Building Your Vision, One Brick at a Time.</h3>
                <p>With over 5 years of experience, we specialize in residential and commercial construction</p>
                <button><a href="/services">Explore Our Services.</a></button>
            </div>
        </div>
    )
}

export default Hero
