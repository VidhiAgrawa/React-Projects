import React from 'react'
import { useState, useEffect } from 'react'

function Practise() {
    let [ arr , setArr ] = useState([ 1 , 2 , 3])
    useEffect( () => {
        console.log(arr)
        setArr((prev) => [...prev , 4])
    } , [setArr] )
  return (
    <div>Practise</div>
  )
}

export default Practise