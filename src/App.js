import React from 'react';
import Navbar from './componets/navbar';
import Home from './componets/home';
import About from './componets/about';
import Education from './componets/education';
import Project from './componets/project';
import Contact from './componets/contact';
import {BrowserRouter as Router,Switch, Route, Routes, BrowserRouter} from 'react-router-dom';
const APP=()=>
{
return(
       <>
       <BrowserRouter>
       <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
        <Navbar/>
        </BrowserRouter>
        </>
);
}

export default APP;


