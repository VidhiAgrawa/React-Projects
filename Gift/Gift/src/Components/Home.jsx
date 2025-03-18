import React, { useState } from 'react'
import '../App.css'
import HomeImg from '../assets/Home.png'
// import Loader from '../Loader/Loader.jsx'
function Home() {
  
  return (
    <main>
        <div className="imgBox">
            <img src={HomeImg}/>
        </div>
        <div className="Enterbtn">
          <button className='Ebtn' onClick={ () => window.location.href = "/Loader" }>Enter 😂</button>

        </div>
    </main>
  )
}

export default Home