
import { createRoot } from 'react-dom/client'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import FormPage from './FormPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import Back from './Back.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<FormPage/>}></Route>
      <Route path='/back' element={<Back/>}></Route>
    </Routes>
  </BrowserRouter>,
)
