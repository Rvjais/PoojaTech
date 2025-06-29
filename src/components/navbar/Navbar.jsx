import React from 'react'
import '../navbar/navbar.css'
import '../navbar/media.css'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span className='logo'>POOJA TECH</span>
          <br />
          <span className='logo2'>complete solution</span>
        </div>
       <Link   smooth={true} 
        duration={500}
        offset={-70} className='linktags' to="hero">Home</Link>
       <Link   smooth={true} 
        duration={500}
        offset={-70}  className='linktags' to="about">About</Link>
       <Link   smooth={true} 
        duration={500}
        offset={-70} className='linktags' to="services">Services</Link>
       <Link   smooth={true} 
        duration={500}
        offset={-70} className='linktags' to="contacts">Contacts</Link>
      </div>
    </>
  )
}

export default Navbar