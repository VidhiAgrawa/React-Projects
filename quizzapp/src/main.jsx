import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Register from './Register/Register.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/quizz' element={<App/>}></Route>
      <Route path='/' element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>,

 
)
