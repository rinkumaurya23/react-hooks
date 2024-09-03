import React,{useRef}from 'react'
import './App.css'

function Usereff() {
    let inputRef=useRef(null)
    function handleInput(){
        console.log('fucntion called')
        inputRef.current.value='100'
        inputRef.current.focus();
        inputRef.current.style.color='pink';
        inputRef.current.style.display='none'

    }
  return (
    <div className='App'> 
      <h1>Use Ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>ref_Update</button>
    </div>
  )
}

export default Usereff
