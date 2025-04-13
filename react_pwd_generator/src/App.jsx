import React, { useState } from 'react'
import './App.css'

function App() {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lower = 'abcdefighijklmnopqrstuvwxyx'
  let special = '~!@#$%^&*_-?'
  const num = "0123456789"

  const[length , setLength] = useState(0)
  const[specialChar, setSpecialChar] = useState(false)
  const[uppercase, setUppercase] = useState(false)
  const[lowercase, setLowercase] = useState(false)
  const[numbers, setNumbers] = useState(false)
  const[password, setPassword] = useState("")
 
  const passwordGenerator = () => {
    let str =""
    if(specialChar) str += special
    if(uppercase) str += upper
    if(lowercase) str += lower
    if(numbers) str += num

    let pass = ""
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }
  return (
    <>
      <div className = "App">
        <input className='inpt' value = {password}/>

        <div className='checkinput1'>
          <input type = 'checkbox' value = {specialChar} onChange={() => setSpecialChar(!specialChar)}/>  Special Char<br/>
        </div>

        <div className='checkinput2'>
          <input type = 'checkbox' value = {uppercase} onChange={() => setUppercase(!uppercase)}/>     Uppercase<br/>
        </div>

        <div className='checkinput3'>
          <input type = 'checkbox' value = {lowercase} onChange={() => setLowercase(!lowercase)}/>  Lowercase<br/>
        </div>

        <div className='checkinput4'>
          <input type = 'checkbox' value = {numbers} onChange={() => setNumbers(!numbers)}/> Numbers<br/>
        </div>

        <label style = {{fontSize : '25px'}}>{length}</label>
        <input style = {{width : '15em'}} 
        type = 'range' min={2} max={50} value = {length} onChange={(e) => {
          setLength(() => Number(e.target.value))
        }}/>
        <button className='butn' onClick={() => {
          passwordGenerator(length)
        }}>Generate</button>
      </div>
    </>
  )
}

export default App
