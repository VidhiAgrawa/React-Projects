import '../App.css'
import React, { useEffect } from 'react'
import search from '../assets/search.png'
import microphone from '../assets/microphone.png'

function Input() {
    const[change, setChange] = useState()
    useEffect( () => {
        const interval = setInterval( () => {

        }, 2000 );
    } )
  return (
    <div className='searchBox'>
        <button className='searchBtn'>
        <img src={search} className='search'/>
        </button>
        <input type="text" className='SearchInpt' placeholder={changing} />
        <button className='voiceSearch'>
        <img src={microphone} className='microphone'/>
        </button>
        

    </div>
  )
}

export default Input