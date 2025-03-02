import React from 'react'
import "./Login.css"
import Background from '../assets/background.png'
function Login() {
  return (
    <div className='login'>
        <div className='loginInput'>
            <input type="text" placeholder='Username' className='Inpt' />
            <input type="text" placeholder='Password' className='Inpt' />
            <button className='submit' onClick={ () => window.location.href = "/"}>Submit</button>
        </div>
        <img src= {Background} className='image1' />
    </div>
  )
}

export default Login