import React from 'react'
import {Data} from "./Data.jsx"
import { useLocation } from 'react-router'
function Info() {
  const path = useLocation()
  console.log(path)
  const id = path.pathname.split("/")[1]
  console.log(id)
  const data = Data.filter( (v) => v.id == id )[0]
  console.log(data)
  return (
      <div className="full-card flex">
          <div className="id"> { data.id } </div>
          <div className="name"> { data.name } </div>
          <div className="education"> {data.education} </div>
          <div className="add"> {data.address} </div>
          <div className="field"> {data.field} </div>
      </div>
  )
}

export default Info