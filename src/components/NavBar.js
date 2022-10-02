import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='nav-container'>
        <div className='nav-name'>RAWITCH</div>
        <div className='nav-content'>
            <div className='nav-home'>HOME</div>
            <div className='nav-project'>PROJECT</div>
            <div className='nav-about'>ABOUT</div>
            <div className='nav-contact'>CONTACT</div>
        </div>
        <div class='hire-button'>HIRE ME</div>
    </div>
  )
}

export default NavBar