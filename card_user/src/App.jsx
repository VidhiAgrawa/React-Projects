import { useState } from 'react'
import {Data} from "./Data.jsx"
import './App.css'
import Info from './info.jsx'

function App() {
  const[ ide, setId ] = useState(0)

  return (
   <>
      <div className="main flex">
        {
          Data.map( (v, i) => (
            <div className="card flex" key={i} onClick={ () => setId(i) }>
              <div className="id">{v.id}</div>
              <div className="name"> {v.name} </div>
              <div className="education"> {v.education} </div>
            </div>
           ) )
        }
      </div>
      <Info ide={ide}  />
   </>
  )
}

export default App
