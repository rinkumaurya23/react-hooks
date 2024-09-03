import React, { useState,useMemo } from 'react'
import './App.css'

function Memoo() {
    const [count,setCount] = useState(0)
    const [item,setItem] = useState(10)

    const multiCountMemo = useMemo(()=>{
        console.warn("multicount")
        return count*5
    },[count])

  return (
    <div className='App'>
      <h1>Use Memoo Component Hook </h1>
      <h2>count :- {count}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <h2>item :- {item}</h2>
      <button onClick={()=>setItem(item+1)}>Update item</button>
    <h3> multiCount :-   {multiCountMemo}</h3>
    </div>
  )
}

export default Memoo;
