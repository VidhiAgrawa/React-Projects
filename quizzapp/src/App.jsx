import { useState } from 'react'
import './App.css'
import { Data } from './Data/Data'

function App() {
  const [start, setStart] = useState(0)
  const [ score, setScore ] = useState(0)
  const [ showMsg, setShowMsg ] = useState("")
  return (
    <>
      <main className="quizz-main flex">
        <div className="heading flex">
          <h1>Quizz App</h1>
        </div>
        <div className="quizz-app">
          
          <div className="quizz-content" >
            <div className="quizz-que">{Data[start].question}</div>
            <div className="quizz-option flex">
              {
                Object.entries(Data[start].options).map( ([v, i]) => {
                  return(
                    <button 
                    className="opt" 
                    key={i}
                    onClick={ () => {
                      
                        if( Data[start].answer == v ){
                          // alert("correct answer")
                          setShowMsg("Correct Answer")
                          setScore( prev => prev + 1 )
                        }
                        else{
                          setShowMsg("Wrong Answer")
                          
                          // alert("wrong")
                          setScore(prev)
                        }
                        // setStart(prev => prev + 1)
                    } }
                    >
                      {v} : {i}
                    </button>
                  )
                } )
              }
            </div>
          </div>
        </div>
        <div className="start">
          <button className="start-btn" onClick={ () => {
            setStart( (prev) => prev < Data.length-1 ? prev + 1 : prev )
            if ( start == Data.length-1 ) alert("Questions finished can move to next set")
            setShowMsg("")
          } }>Start</button>
        </div>
        {showMsg && <div >{showMsg}</div>}
        <div className="score">{score}</div>
      </main>
    </>
  )
}

export default App
