import '../App.css'
import React, { useState, useEffect } from 'react'
import search from '../assets/search.png'
import microphone from '../assets/microphone.png'
import songsApi from '../Api/Api.jsx'

function Input() {
    let apiInfo = songsApi

    const Changearray = [
        "Search Trending Songs",
        "Search Latest Hits",
        "Discover New Music"
    ]
    const[change, setChange] = useState("Search")
    const[ value, setValue ] = useState("")
    const apiList = apiInfo



    useEffect( () => {
        const interval = setInterval( () => {
            setChange( 
                Changearray[ Math.floor( Math.random() * Changearray.length ) ]
             )
        }, 2000 );
        return () => clearInterval(interval)
    }, [])



  return (
    <div className='searchBox'>

        <button className='searchBtn'>
            <img src={search} className='search'/>
        </button>

        <input type="text" 
        className='SearchInpt' 
        placeholder={change}
        value= {value}
        onChange={ (e) => setValue( e.target.value ) }
        list = 'apiList' />

        <datalist id = 'apiList'>
            {
                apiList.map( (v) => (
                    <option value = {v.name}></option>
                ) )
            }
        </datalist>

        <button className='voiceSearch'>
            <img src={microphone} className='microphone'/>
        </button>

    </div>
  )
}

export default Input