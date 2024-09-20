import React from 'react'
import project1 from './images/project1.jpg'
import project2img from './images/wear-it.png'
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
                  <a href='https://aburoadtourism.com/' target='blank'>View Project</a>
                  </center> 
              </div>
            <img src={project1}></img>
            </div>

            <div className='p-box'>
            <div className='overlay'>
                <center>
                <h3>Wear-it</h3> 
                </center>
                <p></p>
                  <center>
                  <a href='https://wearit-eosin.vercel.app/'  target='blank'>View Project</a>
                  </center>  
              </div>
            <img  src={project2img}></img>
          </div>
          <div className='p-box'>


          <div className='overlay' style={{display: "block"}} >
                <center>
                <h3></h3> 
                </center>
                <p></p>
                  <center>
                  <a href='#'>Soon !</a>
                  </center>
                 

              </div>
            <img ></img>
          </div>
        </div>
        </div> 
    </secton>
  )
}

export default Project