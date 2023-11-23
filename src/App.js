import React ,{ useState } from 'react';
import Navbar from './componets/navbar';
import Home from './componets/home';
import About from './componets/about';
import Education from './componets/education';
import Project from './componets/project';
import Contact from './componets/contact';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Switch, Route, Routes, BrowserRouter} from 'react-router-dom';
const APP=()=>
{
return(
       <>

         {/* <LoadingBar
        color='#f11946'
        progress={20}
     
/> */}
    
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
        
        </BrowserRouter>
        </>
);
}

export default APP;


