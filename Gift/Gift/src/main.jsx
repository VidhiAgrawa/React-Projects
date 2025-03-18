import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './Route/AppRoute.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoute/>
  </BrowserRouter>
)
