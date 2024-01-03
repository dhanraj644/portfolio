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
      
      <p> As an aspiring full-stack developer, 
        I am eager to embark on my journey <br/> in the world of web development.
         Armed with a solid foundation in <br/>front-end technologies such as 
         HTML, CSS, JavaScript and ReactJs, <br/> along with a budding proficiency in 
         back-end languages like PHP and java, <br/> I am passionate about crafting seamless
          and user-friendly web applications.</p>
     </div>
    </section>
    </div>
  )
}
export default Home;