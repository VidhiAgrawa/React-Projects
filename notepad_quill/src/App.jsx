import { useState, useEffect } from 'react'
import './App.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {

  const [value, setValue] = useState('');
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
    <>
        <ReactQuill 
            theme="snow" 
            onChange={setValue}
            value={value} />

        <div className="send-btn btn">
          <button className="send" onClick={sendingData}><i class="fa-solid fa-paper-plane" style={{color: "#ffffff"}}></i></button>
        </div>
        <div className="show-content-div flex">
          {
            notes.map( ( v ) => (
                <div className="ans-div">
                  <div dangerouslySetInnerHTML={{ __html: v.text }} />
                </div>
            ))
          }
        </div>
    
    </>
)}

export default App
