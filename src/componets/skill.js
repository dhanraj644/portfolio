import React from 'react'
import html from'./images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import bootstrap from './images/bootstrap.png'
import reactjs from './images/reactjs.png'
import java from './images/java.png'
import node from './images/nodejs.png'
const Skill = () => {
  return (
    
      <section className='skill-page'>
        <center>
        <h2 className='titele-text'><span>MY</span> Skills</h2>
        </center>
          <div className='box-container'>
            <div className='box'>
              <img src={html}  alt=""/>
              <br/>
              <h4>HTML</h4>
            </div>
            <div className='box'>
            <img src={css}  alt=""/>
              <br/>
              <h4>CSS</h4>
            </div>
            <div className='box'>
            <img src={javascript}
             alt=""/>
              <br/>
              <h4>JAVASCRIPT</h4>
            </div>     
            <div className='box'>
            <img src={bootstrap} alt=""/>
              <br/>
              <h4>BOOTSTRAP</h4>
            </div>
            <div className='box'>
            <img src={reactjs} alt=""/>
              <br/>
              <h4>REACT J.S</h4>
            </div>
            <div className='box'>
            <img src={java} alt=""/>
              <br/>
              <h4>JAVA</h4>
            </div>
            <div className='box'>
            <img src={node} alt=""/>
              <br/>
              <h4>NODE J.S</h4>
            </div>
            
          </div>    
            </section>
  
  )
}

export default Skill