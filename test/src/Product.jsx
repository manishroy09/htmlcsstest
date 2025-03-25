import React, { useState } from 'react'


const Product = () => {
    let [count,setCount] =useState(0)
    function desc(){
        if(count!=0){
            setCount(count-1);
        }
    }
  return (
    <>
    <div className="pro">
        <div className="pro1">
       
        <img src="shoes.jpeg" alt=""  height="200px"/>
        </div>

        <div className="pro1">
            <h1>Shoes Nike</h1>
            <p>Lorem ipsum dolor sit.</p>

        </div>
    </div>
    <button onClick={()=>setCount(count+1)}>+</button> 
    <h1>{count}</h1>
    <button onClick={desc}>-</button>
    </>
  )
}

export default Product
