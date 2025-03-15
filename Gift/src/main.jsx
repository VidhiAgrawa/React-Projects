import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from '../../Carmania/src/Router/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
)
