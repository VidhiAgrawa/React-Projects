import React, { useEffect, useState } from 'react'
import "./index.css"
function Notes() {
    const [value, setValue] = useState("")
    const [isbold, setBold] = useState(false)
    const [ notes, setNotes ] = useState([])
    useEffect( () => {
        localStorage.setItem('notes', `${notes}`)
    }, [notes] )
    useEffect( () => {
        setNotes( localStorage.getItem( 'notes' ) || [])
    }, [] )

    const sendingData = () => {
        if( value === "" ) return;
        const newNote = {
            text: value
        }
        setNotes([newNote, ...notes])
        setValue("")
    }
  return (
    <div className='notes-div flex'>
        <div className="sticky-head flex">
            <div className="heading">
                <h2>Sticky Notes</h2>
            </div>
            <div className="icon-div">
                <i class="fa-solid fa-xmark" style={{color: "#ffffff"}}></i>
            </div>
        </div>
        <div className="content-div flex">
            <div className="written-note flex">
                <input type="text" 
                placeholder='Write Something Here...' 
                className="text-input" 
                onChange={ (e) => setValue( e.target.value ) }
                value={value}
                style={{fontWeight : isbold ? 'bold' : 'normal' }}/>
            </div>
            <div className="sending-data flex">
                <div className="bold-btn btn"><button className='bold' onClick={() => setBold(!isbold)}>B</button></div>
                <div className="italic-btn btn"><button className="italic">I</button></div>
                <div className="underline-btn btn"><button className="underline">U</button></div>
                <div className="send-btn btn">
                    <button className="send" onClick={sendingData}><i class="fa-solid fa-paper-plane" style={{color: "#ffffff"}}></i></button>
                </div>
            </div>
        </div>
        <div className="show-content-div flex">
            {
                notes.map( ( v, i ) => (
                    <div className="ans-div">
                        {i+1}
                        {v.text}
                    </div>
                 ) )
            }
        </div>
    </div>
  )
}

export default Notes