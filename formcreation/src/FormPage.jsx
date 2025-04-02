import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import background from './assets/background.jpg'

function FormPage(props) {
  const [userInput, setUserInput] = useState("")
  const [ dobInput, setDobInput ] = useState("")
  const [genderInput, setGenderInput] = useState("")
  const[ password, setPassword ] = useState("")
  const navigate = useNavigate();

  return (
    <>
      <div className="form flex">
        <img src={background} alt="" />
        <div className="form-content flex">
            <div className="usename flex commondiv">
                <span>Username</span>
                <input className='inputval' 
                type="text" 
                placeholder='Enter Username'
                onChange= {(e) => setUserInput(e.target.value)}
                value={userInput} 
                
                />
            </div>
            <div className="dob flex commondiv">
                <span>D-O-B</span>
                <input className='inputval' 
                type="date" 
                placeholder='Enter D-O-B' 
                onChange= {(e) => setDobInput(e.target.value)}
                value={dobInput} />
            </div>
            <div className="gender flex commondiv">
                <span>Gender</span>
                <select name="gender" 
                id="gender"
                onChange= {(e) => setGenderInput(e.target.value)}
                value={genderInput}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div className="password flex commondiv">
                <span>Password</span>
                <input className='inputval' 
                type="password" 
                placeholder='Password'
                onChange= {(e) => setPassword(e.target.value)}
                value={password} />
            </div>
            <div className="submit">
                <button className="submit-btn" onClick={() => {
                  if( userInput.trim() == "" ) return alert("write username")
                  if( dobInput.trim() == "" ) return alert("write Date Of Birth")
                  if( genderInput.trim() == "" ) return alert("write Gender")
                  if( password.trim() == "" ) return alert("write password")
                    navigate(`/back` , { 
                    state : { 
                      username : userInput,
                      dob : dobInput,
                      gender : genderInput,
                      pass : password
                } } )}}>Submit</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default FormPage
