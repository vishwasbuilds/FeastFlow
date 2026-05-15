import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        <div className="footer-content-left">
            <h1 className="footer-logo-text">
                <span className="orange-text">Feast</span>
                <span className="gray-text">Flow.</span>
            </h1>
            <p>
                FeastFlow is dedicated to bringing the finest flavors right to your
                doorstep. Our mission is to elevate your dining experience with
                fresh ingredients and seamless delivery, one delicious meal at a
                time.
            </p>
            <div className="footer-social-icons">
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 98765 43210</li>
                <li>support@feastflow.com</li>
            </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © FeastFlow.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer