import React from 'react'
import Dhanraj from './images/Dhanraj.jpeg'
export const Home = () => {
  return (
   
    <div className='home' >
    <section className='hero-page'>
     <div className="image">
      <img src={Dhanraj} alt=""></img>
     </div>

     <div className='text'>
      <h2>Hi, iam dhanraj mali</h2>
      <br/>
      <h4>full-stack devloper</h4>
      <br/>
      <p> Lorem ipsum is a placeholder text commonly used <br/>
         to demonstrate the visual form or a typeface <br/>
         without relying meaningful content. Lorem ipsum may be used as<br/>
          a placeholder before final copy is available</p>
     </div>
    </section>
    </div>
  )
}
export default Home;