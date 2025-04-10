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
            }}>
              <div className="button-top">
                <span className="material-icons">❯</span>
              </div>
              <div className="button-bottom"></div>
              <div className="button-base"></div>
            </button>
          </div>
        </div>
        <div className="answer-val flex">
          {
            todoList.map( (v, i) => {
              return(
                <div className={`ans-content flex `} 
                onClick={ () => {
                  setShow(!show)
                  !show? alert("To-Do is now completed you can delete it") : "" 
                } } 
                key={i}
                >
                  <div className={show ? "active" : ""}>
                    {v}
                  </div>
                  <div className="cross" >
                    <i class="fa-regular fa-circle-xmark" 
                    onClick={ () => { 
                      setTodoList( (prev) => prev.filter(( todo ) => todo !== v) )
                      alert("To-Do Deleted")
                     } }>  
                    </i>
                  </div>

                </div>
              )
            } )
          }
        </div>
        
      </main>
    </>
  )
}

export default App
