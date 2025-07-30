import React from 'react'
import {Data} from "./Data.jsx"
function Info({ide}) {
  return (
    <div className="main flex">
        {
            <div className="full-card flex">
                <div className="id"> { Data[ide].id } </div>
                <div className="name"> { Data[ide].name } </div>
                <div className="education"> {Data[ide].education} </div>
                <div className="add"> {Data[ide].address} </div>
                <div className="field"> {Data[ide].field} </div>
            </div>
        }
    </div>
  )
}

export default Info