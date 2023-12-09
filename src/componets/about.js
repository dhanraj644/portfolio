import React from 'react';
import Skill from './skill';
const About = () => {
  return (
    <>
    <section className='about-page'>
        <center>
        <h2 className='titele-text'>ABOUT <span>ME</span></h2>
        </center>
      <div className='personal-info'>
       <h2> PERSONAL INFO
       </h2>
      </div>
      <div className='container'>
        <div className='box1'>
        <h3><span>NAME : </span>Dhanraj</h3>
        <h3><span>AGE : </span>21</h3>
        <h3><span>EMAIL : </span>malidhanraj644@gmail.com</h3>
        <h3><span>adress : </span>Rajasthan,india</h3>
        </div>
        <div className='box2'>
        <h3><span>Skill : </span>full-stack</h3>
        <h3><span>Experience : </span>2 months</h3>
        <h3><span>Language : </span>Hindi/English</h3>
        </div>
      </div>
      <a >
      <div className='btn'>
        <span> resume</span>
        <i class='fas fa-download'></i>
        </div>
        </a>
        <div className='resume-page'>
          <img></img>
        </div>
        <Skill/>
    </section>
    
      
    </>
  )
}

export default About