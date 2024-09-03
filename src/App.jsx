import React from 'react';
import { useState,useEffect } from 'react';
// import User from './User';
import "./App.css"


function App() {
  const [data, setData]=useState(10)
  const [count,setCount]=useState(100)

useEffect(()=>{
  console.log("UseEffect")
})
  
  return (
    <div className='App'>
      <h1> App Component </h1>
      {/* <User count={count} data={data}/> */}
      
     
      <button onClick={()=>setCount(count+1)}>update Count</button>
      <button onClick={()=>setData(data+1)}>set Data</button>

    </div>
  )
}

export default App;




//?    useState

// import React from 'react'
// import './App.css'

// import { useState } from 'react'
// function App(){
//   const [data ,setData] = useState('Rinku') 
//   return (
//     <div className='App'>
//       <h1>this is App component ! {data}</h1>
//       <button onClick={()=>setData('Maurya')}>update</button>

//     </div>
//   )
// }
// export default App;

// ? UseEffect

// import React from  "react";
// import { useEffect,useState } from "react"
// import './App.css'

// function App(){
//   const [count,setCount]=useState(0)
// // useEffect hook
// useEffect(()=>{
// console.log("UseEffect 1")
// },[count==3])

//   return(
//     <div className="App">
//       <h1>App component {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Update Counter</button>
//     </div>
//   )
// }
// export default App;