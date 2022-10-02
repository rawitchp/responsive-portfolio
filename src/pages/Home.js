import React from 'react'
import './Home.css'
import myImg from '../img/Profile.png'
import Project1 from '../img/Project1.png'
import Project2 from '../img/Project2.png'
import {IoLogoHtml5,IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'

function Home() {
  return (
    <div className='home-container'>
        <div className='home-about-me'>
            <div className='home-me-text'>
                <span className='home-im'>I'm</span>
                <span className='home-myname'>RAWITCH PAYAKKAWAN,</span>
                <span className='home-mydetail'>
                    Deserunt exercitation nulla id quis qui voluptate labore ut. 
                    Deserunt exercitation nulla id quis qui voluptate labore ut.
                </span>
                <div className='home-myprojects-button'>SEE MY PROJECTS</div>
            </div>
            <div className='home-myimg-container'>
                <img src={myImg} alt='' className='home-myimg'/>
            </div>
        </div>
        <div className='home-worked-with'>
            <span className='worked-with-text'>Worked with</span>
            <div className='worked-logos'>
                <IoLogoHtml5 className='html-logo' size={120} />
                <IoLogoCss3 className='css-logo' size={120} />
                <SiJavascript className='javascript-logo' size={120} />
            </div>
        </div>
        <div className='home-projects'>
            <span className='home-projects-text'>Projects</span>
            <div className='home-project1'>
                <img src={Project1} alt='' className='project1-img'/>
                <div className='project-detail'>
                    <span className='home-project-name'>Project 1</span>
                    <span className='home-project-description'>
                        Eu culpa enim enim mollit dolor veniam deserunt exercitation qui.
                        Eu culpa enim enim mollit dolor veniam deserunt exercitation qui.
                        Eu culpa enim enim mollit dolor veniam deserunt exercitation qui.
                    </span>
                    <div className='home-project-tech'>
                        <span className='tech-text'>Technologies</span>
                        <span>React, Tailwindcss, Firebase</span>
                    </div>
                </div>

            </div>
            <div className='home-project2'>
                
                <div className='project-detail'>
                    <span className='home-project-name'>Project 1</span>
                    <span className='home-project-description'>
                        Eu culpa enim enim mollit dolor veniam deserunt exercitation qui.
                        Eu culpa enim enim mollit dolor veniam deserunt exercitation qui.
                        Eu culpa enim enim mollit dolor veniam deserunt exercitation qui.
                    </span>
                    <div className='home-project-tech'>
                        <span className='tech-text'>Technologies</span>
                        <span>React, Tailwindcss, Firebase</span>
                    </div>
                    
                </div>
                <img src={Project2} alt='' className='project2-img'/>
            </div>
        </div>
        
    </div>
  )
}

export default Home