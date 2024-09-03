import React from 'react'
import { useState } from 'react'
import "./App.css"

function Cont() {
    const [val,setVal] = useState("")
    const [item,setItem] = useState("")

  return (
    <div className='App'>
      <h1>Controlled component</h1>
      <h2>Value :- {val}</h2>
      <input type="text" value={val}   onChange={(e)=>setVal(e.target.value)}/>
      <h3>Item :- {item}</h3>
      <input type="text" value={item}  onChange={(e)=>setItem(e.target.value)}/>

    </div>
  )
}

export default Cont;
