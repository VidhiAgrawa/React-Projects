import React from 'react'
import './Register.css'
import ball from '../assets/ball.jpg'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const usenavigate = useNavigate()
  return (
    <>
        <main className='register-main flex'>
            <div className="register-box flex">
                <div className="img-box">
                    <img src={ball} alt="" />
                </div>
                <div className="register-content flex">
                    <div className="name-box flex ">
                        <span>Name: </span>
                        <input type="text" className="name" placeholder='Write name' />
                    </div>
                    <div className="age-box flex">
                        <span>Age: </span>
                        <input type="number" className="age" placeholder='Write age'/>
                    </div>
                    <div className="dob-box flex">
                        <span>D-O-B: </span>
                        <input type="date" className="dob" placeholder='Write dob'/>
                    </div>
                    <div className="submit flex">
                        <button className="submit-btn" onClick={() => {
                            usenavigate( '/quizz' )
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
