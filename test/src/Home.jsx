import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let product = useNavigate()
    function product(){
        product()
    }
  return (
   <>
   <div className="container">
    <div className="com2">
        <h1>component here</h1>
    </div>
    <div className="com2">
        <img src="img.jpeg" alt="" height="200px" />
    </div>
   </div>

    <button onClick={product}>Product</button>
   </>
  )
}

export default Home
