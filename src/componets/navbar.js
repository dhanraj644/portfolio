import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
   

    <nav className='nav-bar'>
        <Link to="/"> <i class="fas fa-home"></i> <span>Home</span> </Link>
        <Link to="/about"> <i class="fas fa-user"></i> <span>about</span> </Link>
        <Link to="/education"> <i class="fas fa-briefcase"></i> <span>education</span> </Link>
        <Link to="/project"> <i class="fas fa-book"></i> <span>project</span> </Link>
        <Link to="/contact"> <i class="fas fa-address-book"></i> <span>contact</span> </Link>

    </nav>
    </>
  )
}

export default Navbar