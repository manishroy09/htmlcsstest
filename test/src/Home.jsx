import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let pro = useNavigate()
    function product(){
        pro('/Product')
    }
  return (
   <>
   <div className="container">
    <div className="com2">
        <h1>component here</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nobis culpa et saepe, ipsa tempora inventore? Vitae error in cum.</p>
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
