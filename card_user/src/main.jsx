import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Info from './info.jsx'
import {BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/:card' element={<Info/>}/>
    </Routes>
  </BrowserRouter>,
)
