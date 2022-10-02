import React from 'react'
import './Footer.css'
import {FaFacebookSquare,FaInstagramSquare,FaGithubSquare,FaLinkedin} from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-socialmedia'>
            <FaFacebookSquare size={50} className='footer-fb-logo' />
            <FaInstagramSquare size={50} className='footer-ig-logo' />
            <FaGithubSquare size={50} className='footer-github-logo' />
            <FaLinkedin size={50} className='footer-linkedin-logo' />
        </div>
    </div>
  )
}

export default Footer