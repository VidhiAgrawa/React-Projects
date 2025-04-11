import { useEffect, useState } from 'react'
import './App.css'
import { data } from '../Data/Data'

function App() {
  const[ ans, setAns ] = useState("")
  const[ click, setClick ] = useState(false)
  return (
    <>
      <main>
        <div className="heading">
          <h1>Tabs-Tabbing</h1>
        </div>
        <div className="tab-btn flex">
          {
            data.map( (v, i) => {
              return(
                <button onClick={ () => {
                  setClick(!click)
                  setAns( (prev) => prev == v.description? "" : v.description )
                } } key ={i} className='butn'>{v.title}</button>
              )
            } )
          }

        </div>
        <div className="ans-val flex">
          <div className={`answer flex ${ ans != "" ? "show" : "hide" }`}>
            {ans}

          </div>
        </div>
      </main>
    </>
  )
}

export default App
