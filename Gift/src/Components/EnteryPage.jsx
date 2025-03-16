import React from 'react'
import '../App.css'
import Background from '../assets/Background.png'
function EnteryPage() {
  return (
    <main className='Entery'>
        
        <div className="mainDiv">
            <div className="Back">
                <img src={Background} className='Background'/>
            </div>
            <div className="textBox">
              <div className="text">
                <span>Hello, Cuttudu</span>
                <span>Hubby Jii</span>
                <span>Click on the Button</span>
                <span>Please</span>
              </div>
            </div>
            <div className="Button">
              <button className='gobtn' onClick={ () => window.location.href = "/ThirdPage" }>Enter</button>
            </div>
        </div>
    </main>
  )
}

export default EnteryPage