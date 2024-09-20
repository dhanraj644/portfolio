import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <>
    <nav className='nav-bar'>
        <Link to="/"> <i className="fas fa-home"></i> <span>Home</span> </Link>
        <Link to="/about"> <i className="fas fa-user"></i> <span>about</span> </Link>
        <Link to="/education"> <i className="fas fa-briefcase"></i> <span>education</span> </Link>
        <Link to="/project"> <i className="fas fa-book"></i> <span>project</span> </Link>
        <Link to="/contact"> <i className="fas fa-address-book"></i> <span >contact</span> </Link>

    </nav>
    </>
  )
}

export default Navbar