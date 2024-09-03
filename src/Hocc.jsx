import React, { useState } from 'react'
import './App.css'
function Hocc() {
  return (
    <div className='App'>
      <h1> High Order components </h1>
      <HOC cmp={Counter}/>
      <HOCb cmp={Counter}/>
      <HOCy cmp={Counter}/>
      <HOCo cmp={Counter}/>
     
    </div>
  );
}
 function HOC(props){
    return (
        <div>
            <h2 style={{backgroundColor:"red",width:500}}> Red Counter <props.cmp/></h2>
            <h3></h3>
          
        </div>
    )
 }
 function HOCb(props){
    return (
        <div>
            <h2 style={{backgroundColor:"black",width:500,color:"white"}}> Red Counter <props.cmp/></h2>
            <h3></h3>
          
        </div>
    )
 }
 function HOCy(props){
    return (
        <div>
            <h2 style={{backgroundColor:"yellow",width:500}}> Red Counter <props.cmp/></h2>
            <h3></h3>
          
        </div>
    )
 }
 function HOCo(props){
    return (
        <div>
            <h2 style={{backgroundColor:"orange",width:500}}> Red Counter <props.cmp/></h2>
            <h3></h3>
          
        </div>
    )
 }
function  Counter(){
    const[count,setCount]=useState(0)
    return (
        <div>
            <h1> Counter components </h1>
            <h2>Count :- {count}</h2>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}

export default Hocc;
