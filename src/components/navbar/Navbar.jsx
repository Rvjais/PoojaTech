import React from 'react'
import '../navbar/navbar.css'
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
       <Link className='linktags' to="hero">Home</Link>
       <Link  className='linktags' to="about">About</Link>
       <Link className='linktags' to="services">Services</Link>
       <Link className='linktags' to="contact">Contacts</Link>
      </div>
    </>
  )
}

export default Navbar