import React from 'react';
import Navbar from './componets/navbar';
import Home from './componets/home';
import About from './componets/about';
import Education from './componets/education';
import Project from './componets/project';
import Contact from './componets/contact';
import './App.css';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
const APP=()=>
{
return(
       <>
       <BrowserRouter> 
       <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/education' element={<Education/>}/>
        <Route exact path='/project' element={<Project/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
       </Routes>
       <Navbar/>
        </BrowserRouter>
        </>
);
}

export default APP;


