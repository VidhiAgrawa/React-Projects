import { useState } from 'react'
import {Data} from "./Data.jsx"
import './App.css'
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()
  return (
   <>
      <div className="main flex">
        {
          Data.map( (v, i) => (
            <div className="card flex" key={i} onClick={ () => navigate(`${v.id}`) }>
              <div className="id">{v.id}</div>
              <div className="name"> {v.name} </div>
              <div className="education"> {v.education} </div>
            </div>
           ) )
        }
      </div>

   </>
  )
}

export default App
