import React from 'react'
import whatapp from "../../assets/whatapp.jpeg"
import facebook from "../../assets/facebook.png"
import instangram from "../../assets/instangram.jpeg"

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: '#002366', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <h2 style={{ margin: '0 0 10px' }}>Get in Touch</h2>
                    <p style={{ margin: '5px 0' }}>Phone: (+237) 673-159-852</p>
                    <p style={{ margin: '5px 0' }}>Email: yaniafuhnue@gmail.com</p>

                    <div style={{ margin: '20px 0' }}>
                        <a href="https://www.facebook.com" style={{ color: '#fff', margin: '0 10px' }}>
                            <img className='rounded-[10px]' src={facebook} alt="facebook" width={30} height={30} />

                        </a>
                        <a href="https://www.whatapp.com" style={{ color: '#fff', margin: '0 10px' }}>
                            <img src={whatapp} alt="whatapp" width={30} height={30} />

                        </a>
                        <a href="https://www.instagram.com" style={{ color: '#fff', margin: '0 10px' }}>
                            <img src={instangram} width={30} height={30} alt="" />
                        </a>

                    </div>

                    <div style={{ margin: '20px 0' }}>
                        <h3 style={{ margin: '0' }}>Quick Links</h3>
                        <a href="/about" style={{ color: '#fff', margin: '0 10px' }}>About Us</a>
                        <a href="/services" style={{ color: '#fff', margin: '0 10px' }}>Services</a>
                        <a href="/projects" style={{ color: '#fff', margin: '0 10px' }}>Projects</a>
                        <a href="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</a>
                    </div>

                    <div style={{ borderTop: '1px solid #444', padding: '10px 0', marginTop: '20px' }}>
                        <p style={{ margin: '0' }}>&copy; {new Date().getFullYear()} AY CONSTRUCTION. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
