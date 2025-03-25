import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'


const Navbar = () => {
  return (
    <>
    <div className="nav">
        <h1>logo</h1>
        <ul>
           <li><Link to="/home">Home</Link></li>
           
           <li>cart</li>
        </ul>
    </div>

     <Outlet/>



     <Footer/>

    </>
  )
}

export default Navbar
