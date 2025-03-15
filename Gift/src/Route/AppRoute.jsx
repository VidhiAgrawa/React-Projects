import React from 'react'
import { Routes, Route } from 'react-router-dom';
function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={ <App/> }/>
    </Routes>
  )
}

export default AppRoute