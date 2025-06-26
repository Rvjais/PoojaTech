import React from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span>POOJA TECH</span>
          <br />
          <span>complete solution</span>
        </div>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/">Services</Link>
       <Link to="/"></Link>
      </div>
    </>
  )
}

export default Navbar