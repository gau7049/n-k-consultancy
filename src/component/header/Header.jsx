import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

<div className="top-wrap">
      <ul>
        <li>Call Us: +91 85117 49940</li>
        <li>Location: Ahmedabad, Gujarat, Ahmedabad</li>
        <li className="social-link">
          <a href="https://wa.me/918511749940?text=Hi%20there!%20I'd%20like%20to%20chat%20with%20you%20on%20your%20website.">
            <i className="ri-whatsapp-line"></i> </a>
          
          
          <a href="mailto::nkconsultancy.contact@gmail.com"><i className="ri-mail-send-line"></i></a>
          <a href=""><i className="ri-facebook-circle-fill"></i></a>
          <a href=""><i className="ri-instagram-line"></i></a>
        </li>
      </ul>
    </div>

    <a className="up" href="#home"><i className="ri-arrow-up-s-line"></i></a>
    
    </>
  )
}

export default Header