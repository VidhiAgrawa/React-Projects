import { useState } from 'react'
import './App.css'

function App() {
  const [ inputVal, setInputVal ] = useState("")
  const [ show, setShow ] = useState(false)
  const [ todoList, setTodoList ] = useState([])

  return (
    <>
      <main className='flex'>
        <div className="heading flex">
          <h1>To-Do List</h1>
        </div>

        <div className="input-submit flex">

          <div className="input">
            <input type="text" 
            className="to-do-input" 
            placeholder='Write To-Do'
            name='todoname'
            value={inputVal} 
            onChange={ (e) => setInputVal( e.target.value ) }
            />
          </div>
          <div className="submit">
            <button className="button-3d" onClick={ () => {
              if (!inputVal.trim()) return
              if( !todoList.includes(inputVal) ) {
                setTodoList([...todoList, inputVal])
                setInputVal("")
              }
              else{
                alert("Todo Already exist")
              }
              }
            }>
              <div class="button-top">
                <span class="material-icons">❯</span>
              </div>
              <div class="button-bottom"></div>
              <div class="button-base"></div>
            </button>
          </div>
        </div>
            {
              todoList.map( (v, i) => {
                return(
                  <div className="answer-val" key={i}>
                    <div className="ans">
                      {v}
                    </div>
                  </div>
                )
              } )
            }
        
      </main>
    </>
  )
}

export default App
