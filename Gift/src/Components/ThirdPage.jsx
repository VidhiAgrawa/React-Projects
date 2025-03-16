import React from 'react'
import './Comp.css'
import Third from '../assets/third.png'
function ThirdPage() {
  return (
    <main className="ThirdPage show">
        <div className="background">
            <img src={Third} alt="" className="backimg" />
        </div>
        <div className="textBox num1">
            <div className="text">
                <span>Ohh No !! One more to go</span>
                <span>Have Patience my Dear </span>
                <span>Hubby </span>
                <span>Somethings Waitng for</span>
                <span>You </span>
                <span>Just Wait a Bit more  ❤❤</span>
            </div>
        </div>
        <div className="Button btn2">
              <button className='gobtn'>Enter</button>
            </div>
    </main>
  )
}

export default ThirdPage