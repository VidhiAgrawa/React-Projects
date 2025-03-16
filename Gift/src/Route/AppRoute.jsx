import React from 'react'
import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx'
import EnteryPage from '../Components/EnteryPage.jsx'
import Loader from '../Loader/Loader.jsx';
import ThirdPage from '../Components/ThirdPage.jsx';
function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={ <App/> }/>
        <Route path='/EnteryPage' element={ <EnteryPage/> }/>
        <Route path='/Loader' element={ <Loader/> }/>
        <Route path='/ThirdPage' element={ <ThirdPage/> }/>
    </Routes>
  )
}

export default AppRoute