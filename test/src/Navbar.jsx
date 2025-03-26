import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import './App.css'


const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <h1>logo</h1>
        <ul>
           <li><Link to="/">Home</Link></li>
           
           <li>cart</li>
        </ul>
    </nav>

     <Outlet/>



     <Footer/>

    </>
  )
}

export default Navbar
