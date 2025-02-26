import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <div>
            <div className='heroSection'>
                <h3>Welcome to AY Construction <br /> Building Your Vision, One Brick at a Time.</h3>
                <p>At AY Construction, we specialize in delivering high-quality construction services tailored to your needs. <br /> With years of experience, we bring your vision to life</p>
                <button><a href="/services">Explore Our Services.</a></button>
            </div>
        </div>
    )
}

export default Hero
