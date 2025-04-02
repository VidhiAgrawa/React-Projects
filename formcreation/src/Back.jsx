import { useState } from 'react'
import {useLocation} from "react-router-dom"
import './App.css'

function Back({input}) {
  const path = useLocation()
  return (
    <>
      <main className='main-output flex'>
        <div className="input-value flex">
          <div className="input-val-user">
            <span>UserName:-  {path.state?.username}</span>
          </div>
          <div className="input-val-dob">
            <span>Date-Of-Birth:- {path.state?.dob}</span>
          </div>
          <div className="input-val-gender">
            <span>Gender:- {path.state?.gender}</span>
          </div>
          <div className="input-val-password">
            <span>Password:- {path.state?.pass}</span>
          </div>
        </div>

      </main>
    </>
  )
}

export default Back
