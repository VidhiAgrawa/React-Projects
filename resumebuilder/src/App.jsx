import { useState } from 'react'
import './App.css'
import background from './assets/background.mp4'

function App() {

  return (
    <>
      <main className="main-div flex">
        <div className="video-div">
          <video src={background} 
          className='back-video' 
          autoPlay
          loop
          muted
          playsInline></video>
        </div>
      </main>
    </>
  )
}

export default App
