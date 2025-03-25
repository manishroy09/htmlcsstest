
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Product from './Product'
import Navbar from './Navbar'



function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
