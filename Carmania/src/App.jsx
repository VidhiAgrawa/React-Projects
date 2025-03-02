import { useState } from 'react'
import './App.css'
import background from './assets/background.png'
import Input from './Components/Input.jsx'
import Menu from './Components/Menu.jsx'

function App() {

  return (
    <main>
      <div className='image'>
        <Input/>
        <img src={background} className='backimg' /> 
      </div>
      <div className='content'>
        < Menu />
      </div>
    </main>
  )
}

export default App
