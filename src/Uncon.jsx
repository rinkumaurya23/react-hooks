import React from 'react'
import './App.css'
import { useRef } from 'react'
function Uncon() {

    let inputRef=useRef(null)
    let inputRef1=useRef(null)

function submitForm(e){
    e.preventDefault()
    console.log("input field  1 value : ",inputRef.current.value)
    console.log("input field  2 value : ",inputRef1.current.value)
    let input3 = document.getElementById("input3").value
    console.log(input3)


}

  return (
    <div className='App' >
        <h1> Un control components </h1>
       <form onSubmit={submitForm}>
        <input ref={inputRef} type="text"/> <br/>  <br/>     
        <input ref={inputRef1} type="text"/> <br/>  <br/> 
        <input id='input3' type="text"/> <br/>  <br/> 

        <button>Submit </button>  
        </form>
          

    </div>
  )
}

export default Uncon;
