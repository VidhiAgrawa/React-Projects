import { useState } from 'react'
import './App.css'
import Notes from './Notes'

function App() {
  const [ sticky, setSticky ] = useState(false)
  return (
    <>
      <main className='flex'>
        <button className="button" onClick={ () => setSticky(!sticky) }>Sticky Notes</button>
      </main>
      <div className="note-ka-dabba flex">
        {sticky && <Notes/>}

      </div>
    </>
  )
}

export default App
