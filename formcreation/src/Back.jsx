import { useState } from 'react'
import {useLocation} from "react-router-dom"
import './App.css'

function Back({input}) {
  const path = useLocation()
  return (
    <>
      <div className="input-value">
        <span>{path.state?.username}</span>
        <span>{path.state?.dob}</span>
        <span>{path.state?.gender}</span>
        <span>{path.state?.pass}</span>
      </div>
    </>
  )
}

export default Back
