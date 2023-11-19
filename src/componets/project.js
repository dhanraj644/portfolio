import React from 'react'
import project1 from './images/project1.jpg'
function Project() {
  return (
    <secton>
      <div className='project-page'>
       <center>
        <h2 className='titele-text'>MY <span>PROJECTS</span></h2>
        </center>
        <div className='proj-container'>
            <div className='p-box'>
              <div className='overlay'>
                <center>
                <h3>Tourism site</h3> 
                </center>
                <p>City is blessed with many natural 
                  tourist places among which main places 
                  are the</p>
                  <center>
                  <a href='https://aburoadtourism.com/' target='blank'>view Project</a>
                  </center>
                 

              </div>
            <img src={project1}></img>
            </div>
            <div className='p-box'>
            <div className='overlay'>
                <center>
                <h3>Tourism site</h3> 
                </center>
                <p>City is blessed with many natural 
                  tourist places among which main places 
                  are the</p>
                  <center>
                  <a href='https://aburoadtourism.com/' target='blank'>view Project</a>
                  </center>
                 

              </div>
            <img src={project1}></img>
          </div>
          <div className='p-box'>
          <div className='overlay'>
                <center>
                <h3>Tourism site</h3> 
                </center>
                <p>City is blessed with many natural 
                  tourist places among which main places 
                  are the</p>
                  <center>
                  <a href='https://aburoadtourism.com/' target='blank'>view Project</a>
                  </center>
                 

              </div>
            <img src={project1}></img>
          </div>
        </div>
        </div> 
    </secton>
  )
}

export default Project