import React from 'react'
import FordRef2 from './FordRef2'
import { useRef } from 'react'
import './App.css'
function FordRef1() {

    let inputRef= useRef(null);
    function updateInput(){
        inputRef.current.value="1000"
        inputRef.current.style.color="red"
        inputRef.current.focus()



    }
  return (
    <div className='App'>
  <h1>forwardRef 1</h1> 
   <FordRef2 ref={inputRef}/>
   <button onClick={updateInput}>Update InputForBox</button>
      
    </div>
  )
}

export default FordRef1;
