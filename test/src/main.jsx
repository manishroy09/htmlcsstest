import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

let countData = createContext()
let count = 0

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <countData.Provider value={count}>
    <App />
    </countData.Provider>
    </BrowserRouter>
    
  </StrictMode>,
)

export {countData}