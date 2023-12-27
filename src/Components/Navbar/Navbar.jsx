import React from 'react'
import './Navbar.css'
import "../Toggle/Toggle"
import Toggle from '../Toggle/Toggle'
import { Link } from "react-scroll"
import logo from "../../img/logo.png"
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
       
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>  
              Home
              </Link>
              </li>
            <li>
             <Link to="services" spy={true} smooth={true} >
              Services
              </Link>
              </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
              
              Experience
              </Link>
              </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
              PortFolio
              </Link>
              
              
              </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
              
              Testimonials
              </Link>
              </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
       
      <button className='button n-button'>
        Contact

      </button>
      </Link>

      </div>
    </div>
  )
}

export default Navbar