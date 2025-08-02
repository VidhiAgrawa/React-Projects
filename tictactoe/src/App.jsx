import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const winResult = [
    [ 0, 1, 2 ], 
    [ 3, 4, 5 ], 
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ], 
    [ 2, 4, 6 ]
  ]
  const user1 = "X"
  const user2 = "O"
  const [ input1, setInput1 ] = useState("")
  const [ input2, setInput2 ] = useState("")
  const [ input3, setInput3 ] = useState("")
  const [ input4, setInput4 ] = useState("")
  const [ input5, setInput5 ] = useState("")
  const [ input6, setInput6 ] = useState("")
  const [ input7, setInput7 ] = useState("")
  const [ input8, setInput8 ] = useState("")
  const [ input9, setInput9 ] = useState("")
  const [ turn, setTurn ] = useState( user1 )
  const [ winner, setWinner ] = useState(null)
  const allInputs = [ input1, input2, input3, input4, input5, input6, input7, input8, input9 ]
  
  const clickTurn = ( input, setInput ) => {
    if( input !== "" || winner) return;
    setInput(turn)
    setTurn( turn == user1 ? user2 : user1  )
  }
  useEffect( () => {
    for( let element of winResult ){
      const [ i1, i2, i3 ] = element
      if( allInputs[i1] !== "" && allInputs[i1] === allInputs[i2] && allInputs[i2] === allInputs[i3] ){
        setWinner(allInputs[i1])
      }
    }
    
  }, [...allInputs] )
  return (
    <>
      <main className='flex'>
        <div className='tic-main'>
          <div className="baxsa1 flex baxsa" onClick={ () => clickTurn( input1, setInput1 ) }>
            { input1 }
          </div>
          <div className="baxsa2 flex baxsa" onClick={ () => clickTurn( input2, setInput2 ) }>
            { input2 }
          </div>
          <div className="baxsa3 flex baxsa" onClick={ () => clickTurn( input3 , setInput3  ) }>
            { input3 }
          </div>
          <div className="baxsa4 flex baxsa" onClick={ () => clickTurn( input4, setInput4 ) }>
            { input4 }
          </div>
          <div className="baxsa5 flex baxsa" onClick={ () => clickTurn( input5, setInput5 ) }>
            { input5 }
          </div>
          <div className="baxsa6 flex baxsa" onClick={ () => clickTurn( input6, setInput6 ) }>
            { input6 }
          </div>
          <div className="baxsa7 flex baxsa" onClick={ () => clickTurn( input7, setInput7 ) }>
            { input7 }
          </div>
          <div className="baxsa8 flex baxsa" onClick={ () => clickTurn( input8, setInput8 ) }>
            { input8 }
          </div>
          <div className="baxsa9 flex baxsa" onClick={ () => clickTurn( input9, setInput9 ) }>
            { input9 }
          </div>
        </div>
        { winner && <h1>{winner} wins the game</h1> }
      </main>
    </>
  )
}

export default App
